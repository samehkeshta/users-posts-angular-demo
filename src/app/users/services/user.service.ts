import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "../models/users.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private _httpClient: HttpClient) {
  }

  getUsers() {
    return this._httpClient.get<User[]>(this._url);
  }

  addUser(user: User) {
    return this._httpClient.post(this._url, JSON.stringify(user));
  }

  getUser(id: number) {
    return this._httpClient.get<User>(this.getUserUrl(id));
  }

  updateUser(user: User) {
    return this._httpClient.put(this.getUserUrl(user.id), JSON.stringify(user));
  }

  removeUser(id: number) {
    return this._httpClient.delete(this.getUserUrl(id));
  }

  private getUserUrl(userId: number) {
		return this._url + "/" + userId;
	}
}
