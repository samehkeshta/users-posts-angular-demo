import { User } from '../models/users.model';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirtyComponent } from 'src/app/core/interfaces/dirty-component';
import { emailValidator } from 'src/app/core/directives/email.validator';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styles: [`
    .well {
      background-color: whitesmoke;
    }

    .ng-touched.ng-invalid.form-control {
      border: 1px solid #a94442; /* red */
    }
  `]
})
export class UpdateUserComponent implements OnInit, DirtyComponent {
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

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute) {
  }

  get user_name() { return this.form.get('name'); }

  get user_email() { return this.form.get('email'); }

  ngOnInit() {
    this.getUser();
  }

  canDeactivate() {
    return !this.form.pristine;
  }

  getUser() {
    let id = +this._route.snapshot.paramMap.get('id')!;

    this._userService.getUser(id).subscribe(
      user => this.user = user,
      error => {
        if (error.status == 404) {
          this.form.markAsPristine();
          this._router.navigate(['/not-found']);
        }
      });
  }

  updateUser() {
    this._userService.updateUser(this.user).subscribe(data => {
      this.form.markAsPristine();
      this._router.navigate(['/users']);
    });
  }
}
