import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-signup-form',
  template: `
  <form (ngSubmit)="submitForm(myForm)" #myForm="ngForm" novalidate>
  <p> Username
    <input type="text" name="username" [(ngModel)]="username"
          #myUsername="ngModel" minlength="6" />
  </p>
  <div *ngIf="myUsername.errors && (myUsername.dirty || myUsername.touched)">
    <p class="error" [hidden]="!myUsername.errors.minlength">
      Username must be at least 6 characters long.
    </p>
  </div>
  <p> Password
    <input type="password" name="password" [(ngModel)]="password"
          #myPassword="ngModel" required />
  </p>
  <div *ngIf="myPassword.errors && (myPassword.dirty || myPassword.touched)">
    <p class="error" [hidden]="!myPassword.errors.required">
      Password is required
    </p>
  </div>
  <button type="submit"> signup </button>
</form>
  `,
  styleUrls: ['./my-signup-form.component.css']
})
export class MySignupFormComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  submitForm(myForm) {
    console.log(myForm);
  }
}