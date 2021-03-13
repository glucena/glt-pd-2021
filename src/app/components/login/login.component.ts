import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

import { LoginService } from 'src/app/shared/services/login.service';

import { BaseComponent } from 'src/app/shared/base-component/base.component';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading = false;
  users: any = usersList;
  unregistered = false;
  invalid = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    super();
   }

  //#region ANGULAR LIFECYCLE HOOKS
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    });
  }
  //#endregion

  //#region UI METHODS
  loginUser(): Observable<any> {
    if (this.loginForm.invalid) { return; }

    const {username, password} = this.loginForm.value;

    const subscription = this.loginService.login({username, password})
      .subscribe(user => {
        this.router.navigate(['/principal/ships']);
      }, error => {
        this.unregistered = true;
        return of(undefined);
      });

    // The subscription will be undone automatically. See componentBase.
    this.subscriptions.push(subscription);

    // Return an observable, so we can test it
    return of(subscription);
  }
  //#endregion
}

