import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  //'./app.component.css'
})
export class AppComponent {
  title = 'forms';
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;

  errorMsg = '';

  userModel = new User(
    'rob',
    'rob@a.com',
    5555555555,
    'default',
    'morning',
    true
  );

  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(value) {
    if (value == 'default') this.topicHasError = true;
    else this.topicHasError = false;
  }

  onSubmit(userForm) {
    console.log(userForm);
    // this._enrollmentService.enroll(this.userModel).subscribe(
    //   (data) => {
    //     console.log('success!', data);
    //     this.submitted = true;
    //   },
    //   (error) => (this.errorMsg = error.statusText)
    // );
  }
}
