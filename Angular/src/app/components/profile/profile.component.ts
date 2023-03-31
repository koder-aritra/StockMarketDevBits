import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  profileForm = this.formBuilder.group({
    id: [localStorage.getItem('id')],
    username: [localStorage.getItem('username'), Validators.required],
    password: [localStorage.getItem('password'), Validators.required],
    email: [localStorage.getItem('email'), Validators.required],
    firstName: [localStorage.getItem('firstName'), Validators.required],
    lastName: [localStorage.getItem('lastName'), Validators.required],
    role: ['user']
  });

  ngOnInit() {
  }

  update() {
    this.userService.update(this.profileForm.value)
      .subscribe(data =>
        this.router.navigate(['home'])
      )
  }
}
