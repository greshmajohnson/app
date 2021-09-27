import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  Roles = [
    // { value: 'admin', viewValue: 'Admin' },
    { value: 'artist', viewValue: 'Artist' },
  ];
  userCreated: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      email: ['', Validators.email],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.userService.createUser(this.form.getRawValue()).subscribe(
      (response) => {
        this.userCreated = true;
        this.form.reset();
      },
      (err) => {
        this.userCreated = false;
      }
    );
  }
}
