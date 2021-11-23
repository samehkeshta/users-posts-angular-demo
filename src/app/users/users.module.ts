import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users-list/users.component';

@NgModule({
  imports: [
    BrowserModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  exports: [
    UsersComponent,
    AddUserComponent,
    UpdateUserComponent
  ]
})
export class UsersModule {
}
