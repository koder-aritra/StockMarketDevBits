import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  createForm = this.formBuilder.group({
    id: [0],
    username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
    email: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(45)])],
    role: ['user']
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.createForm.value)
      .subscribe(data => {
        this.router.navigate(['home']);
      }
  );

  }
}
