import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/base-component/base.component';
import { User } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { UserService } from 'src/app/shared/services/user.service';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {
  registerForm: FormGroup;
  dataLoading = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private userService: UserService,
  ) {
    super();
  }

  //#region ANGULAR LIFECYCLE HOOKS
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    });
  }
  //#endregion

  //#region UI METHODS
  registerUser() {
    if (this.registerForm.invalid) { return; }

    const user: User = this.registerForm.value;

    this.dataLoading = true;

    const subscription = this.userService.create(user)
      .pipe(
        flatMap(() => {
          // User created successfully. Login
          return this.loginService.login({
            username: this.registerForm.value.username,
            password: this.registerForm.value.password,
          });
        })
      ).subscribe(() => {
         this.dataLoading = false;
         this.router.navigate(['/principal/ships']);
      }, error => {
        this.dataLoading = false;
        return of(undefined);
      });

    // The subscription will be undone automatically. See componentBase.
    this.subscriptions.push(subscription);

    // Return an observable, so we can test it
    return of(subscription);

  }
  //#endregion
}
