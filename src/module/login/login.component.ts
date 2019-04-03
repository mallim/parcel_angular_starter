import { Component } from '@angular/core';
import { LoginDetails } from './login.interface';

@Component({
  selector: 'my-app',
  template: `
    <style>
      #login .container #login-row #login-column #login-box {
        margin-top: 120px;
        max-width: 600px;
        height: 320px;
        border: 1px solid #9c9c9c;
        background-color: #eaeaea;
      }
      #login .container #login-row #login-column #login-box #login-form {
        padding: 20px;
      }
      #login .container #login-row #login-column #login-box #login-form #register-link {
        margin-top: -85px;
      }
    </style>
    <div id="login">
      <h3 class="text-center text-white pt-5">Login form</h3>
      <div class="container">
        <div id="login-row" class="row justify-content-center align-items-center">
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form id="login-form" class="form" novalidate #f="ngForm" (ngSubmit)="onSubmit(f)">
                >
                <h3 class="text-center text-info">Login</h3>
                <div class="form-group">
                  <label for="username" class="text-info">Username:</label><br />
                  <input type="text" name="username" id="username" class="form-control" [ngModel]="login.username" />
                </div>
                <div class="form-group">
                  <label for="password" class="text-info">Password:</label><br />
                  <input type="text" name="password" id="password" class="form-control" [ngModel]="login.password" />
                </div>
                <div class="form-group">
                  <label for="remember-me" class="text-info"
                    ><span>Remember me</span>
                    <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label
                  ><br />
                  <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" />
                </div>
                <div id="register-link" class="text-right">
                  <a href="#" class="text-info">Register here</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MainComponent {
  login: LoginDetails = {
    username: '',
    password: '',
  };
  text: string = 'Hello World from Angular !';
  onSubmit({ value, valid }: { value: LoginDetails; valid: boolean }) {
    console.log('value=', value, 'valid=', valid);
  }
}
