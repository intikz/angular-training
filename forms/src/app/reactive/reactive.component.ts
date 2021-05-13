import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { badNameValidator } from '../shared/username.validator';
import { passValidator } from '../shared/pass.validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  // old way
  // registrationForm = new FormGroup({
  //   username: new FormControl('ini'), //default val
  //   pass: new FormControl(''),
  //   confirmPass: new FormControl(''),
  //   dire: new FormGroup({
  //     city: new FormControl(''),
  //     email: new FormControl(''),
  //   }),
  // });

  //deprecated
  ngOnInit() {
    this.registrationForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            badNameValidator(/admin/),
          ],
        ], //second value in array is validation, can be an array too
        pass: [''],
        confirmPass: [''],
        subscribe: [false],
        dire: this.fb.group({
          city: [''],
          barrio: [''],
        }),
        email: [''],
      },
      { validator: passValidator }
    );

    this.registrationForm
      .get('subscribe')
      .valueChanges.subscribe((checkedValue) => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  loadAPI() {
    this.registrationForm.patchValue({
      //setValue es para form incompleta
      username: 'test', //default val
      pass: 'test',
      confirmPass: 'test',
      dire: {
        city: '',
        barrio: '',
      },
      // dire: {
      //   city: 'aaa',
      //   barrio: 'aaa',
      // },
    });
  }

  get userName() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }
}
