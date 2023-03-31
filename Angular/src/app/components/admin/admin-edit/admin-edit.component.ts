import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit() {

    const userName = localStorage.getItem('editUserName');
    const userPass = localStorage.getItem('editUserPass');
    const userFirstName = localStorage.getItem('editUserFirstName');
    const userLastName = localStorage.getItem('editUserLastName');
    const userEmail = localStorage.getItem('editUserEmail');
    const userRole = localStorage.getItem('editUserRole');

    this.profileForm = this.formBuilder.group({
      id: [parseInt(localStorage.getItem('editUserId'))],
      username: [userName, Validators.required],
      password: [userPass, Validators.required],
      role: [userRole],
      firstName: [userFirstName, Validators.required],
      lastName: [userLastName, Validators.required],
      email: [userEmail, Validators.required]
    });

  }

  update() {
    this.userService.update(this.profileForm.value)
      .subscribe(data => {
        this.router.navigate(['admin']);
      })
  }
}
