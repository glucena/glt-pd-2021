import { ComponentFixture, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';

import { LoginService } from 'src/app/shared/services/login.service';

import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;
  let loginService: LoginService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: 'login', component: LoginComponent},
          {path: 'principal/ships', component: LoginComponent}
        ]),
      ],
    })
    .compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = fixture.debugElement.injector.get(LoginService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login the user and navigate to principal', fakeAsync(() => {
    const spyLogin = spyOn(loginService, 'login').and.callFake(() => {
      return of({username: 'test-user'});
    });

    component.loginForm.setValue({username: 'user', password: 'password'});

    component.loginUser()
      .subscribe(() => {
        expect(component.unregistered).toBe(false);

        tick();

        expect(location.path()).toBe('/principal/ships');

      });
  }));

  it('should not login the user: invalid credentials', fakeAsync(() => {
    const spyLogin = spyOn(loginService, 'login').and.callFake(() => {
      return throwError('something went wrong');
    });

    component.loginForm.setValue({username: 'user', password: 'wrong password'});

    component.loginUser()
      .subscribe(() => {
        expect(component.unregistered).toBe(true);
        tick();
        expect(location.path()).toBe('/');
      });
  }));

  it('should not login the user: password is too short', fakeAsync(() => {
    component.loginForm.setValue({username: 'user', password: 'wrong'});

    expect(component.loginUser()).toBe(undefined);
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });


});
