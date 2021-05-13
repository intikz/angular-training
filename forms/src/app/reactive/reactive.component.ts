import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  registrationForm = new FormGroup({
    username: new FormControl('ini'), //default val
    pass: new FormControl(''),
    confirmPass: new FormControl(''),
    dire: new FormGroup({
      city: new FormControl(''),
      pais: new FormControl(''),
    }),
  });

  constructor() {}

  ngOnInit(): void {}

  loadAPI() {
    this.registrationForm.setValue({
      //patchValue es para form incompleta
      username: 'test', //default val
      pass: 'test',
      confirmPass: 'test',
      dire: {
        city: '',
        pais: '',
      },
      // dire: {
      //   city: 'aaa',
      //   pais: 'aaa',
      // },
    });
  }
}
