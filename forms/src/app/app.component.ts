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

  onSubmit() {
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log('success!', data),
      (error) => console.error('Error!', error)
    );
  }
}
