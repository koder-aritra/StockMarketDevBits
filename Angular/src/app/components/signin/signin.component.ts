import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  addForm: FormGroup;
  checkLogin: boolean;
  alert = 'This field is required.';

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])]
    });
  }

  login() {
    this.userService.login(this.addForm.value)
      .subscribe(data => {
        if (data) {
         localStorage.setItem('username', data.username);
         localStorage.setItem('password', data.password);
         localStorage.setItem('email', data.email);
         localStorage.setItem('firstName', data.firstName);
         localStorage.setItem('lastName', data.lastName);
         localStorage.setItem('id', String(data.id));
         localStorage.setItem('role', String(data.role));
         this.router.navigate(['home']);
        } else {
          this.checkLogin = true;
        }
      });
  }
}
