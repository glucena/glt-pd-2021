
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of, throwError } from 'rxjs';

import { LoginService } from 'src/app/shared/services/login.service';
import { UserService } from 'src/app/shared/services/user.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let location: Location;
  let loginService: LoginService;
  let userService: UserService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: 'register', component: RegisterComponent},
          {path: 'principal/ships', component: RegisterComponent}
        ]),

      ],
    })
    .compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    loginService = fixture.debugElement.injector.get(LoginService);
    userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register the user and navigate to principal', fakeAsync(() => {
    const spyRegister = spyOn(userService, 'create').and.callFake(() => {
      return of({username: 'test-user'});
    });

    const spyLogin = spyOn(loginService, 'login').and.callFake(() => {
      return of({username: 'test-user'});
    });

    component.registerForm.setValue({
      first_name: 'user',
      last_name: 'user',
      email: 'user@a.com',
      username: 'user',
      password: 'password'
    });

    component.registerUser()
      .subscribe(() => {
        expect(component.dataLoading).toBe(false);

        tick();

        expect(location.path()).toBe('/principal/ships');

      });
  }));

  it('should not register the user: unexpected error while registering the user', fakeAsync(() => {
    const spyRegister = spyOn(userService, 'create').and.callFake(() => {
      return throwError('something went wrong');
    });

    component.registerForm.setValue({
      first_name: 'user',
      last_name: 'user',
      email: 'user@a.com',
      username: 'user',
      password: 'password'
    });

    component.registerUser()
      .subscribe(() => {
        expect(component.dataLoading).toBe(false);
        tick();
        expect(location.path()).toBe('/');
      });
  }));

  it('should not register the user: unexpected error while login the user', fakeAsync(() => {
    const spyRegister = spyOn(userService, 'create').and.callFake(() => {
      return of({username: 'test-user'});
    });

    const spyLogin = spyOn(loginService, 'login').and.callFake(() => {
      return throwError('something went wrong');
    });

    component.registerForm.setValue({
      first_name: 'user',
      last_name: 'user',
      email: 'user@a.com',
      username: 'user',
      password: 'password'
    });

    component.registerUser()
      .subscribe(() => {
        expect(component.dataLoading).toBe(false);
        tick();
        expect(location.path()).toBe('/');
      });
  }));

  it('should not register the user: invalid form', fakeAsync(() => {
    component.registerForm.setValue({
      first_name: 'user',
      last_name: 'user',
      email: 'user@a.com',
      username: 'user',
      password: 'wrong'
    });

    expect(component.registerUser()).toBe(undefined);
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

});
