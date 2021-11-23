import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/core/directives/email.validator';
import { DirtyComponent } from 'src/app/core/interfaces/dirty-component';
import { Router } from '@angular/router';
import { User } from '../models/users.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [`
    .well {
      background-color: whitesmoke;
    }

    .ng-touched.ng-invalid.form-control {
      border: 1px solid #a94442; /* red */
    }
  `]
})
export class AddUserComponent implements OnInit, DirtyComponent {
  user = new User();

  form: FormGroup = this._fb.group({
    name: ['', Validators.required],
    email: ['', emailValidator()],
    phone: [],
    address: this._fb.group({
      street: [],
      suite: [],
      city: [],
      zipcode: []
    })
  });

  isDirty = false;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router) {
  }

  get user_name() { return this.form.get('name'); }

  get user_email() { return this.form.get('email'); }

  ngOnInit() {
    this.form.valueChanges.subscribe( e => this.isDirty = true );
  }

  canDeactivate() {
    return this.isDirty;
  }

  addUser() {
    this._userService.addUser(this.form.value).subscribe(data => {
      this.isDirty = false;
      this._router.navigate(['/users']);
    })
  }
}
