import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthModel } from 'src/app/models';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginInvalid = false;
  form: FormGroup;
  returnUrl = '';
  routeSubscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.queryParams.subscribe((params) => {
      if (params.return_url) {
        this.returnUrl = params.return_url;
      } else {
        this.returnUrl = 'home';
      }
    });
  }

  onSubmit() {
    this.authenticationService.login(this.form.getRawValue()).subscribe(
      (response: AuthModel) => {
        if (response.authenticated) {
          this.loginInvalid = false;
          this.authenticationService.isAuthenticated = true;
          this.authenticationService.isAuthenticatedSubject.next(true);
          localStorage.setItem('currentUser', JSON.stringify(response?.user));
          this.router.navigate([this.returnUrl]);
          this.authenticationService.updateCurrentUser();
        } else this.loginInvalid = true;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
