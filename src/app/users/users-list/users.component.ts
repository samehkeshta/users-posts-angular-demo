import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles:[`
    .w100 {
      width: 100px;
    }
  `]
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this._userService.getUsers().subscribe(data => this.users = data);
  }

  deleteUser(user: User) {
    var result = confirm("Are you sure you want to delete this user?");

    if (result) {
      // real case
      // this._userService.removeUser(user.id).subscribe(
      //   data => this.loadUsers(),
      //   error => console.log(error));

      // for demo
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this._userService.removeUser(user.id)
				.subscribe(
          data => console.log(data),
					err => {
						alert("Could not delete the user.");
						this.users.splice(index, 0, user);
					}
        );
    }
  }
}
