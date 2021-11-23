import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirtyCheckGuard } from '../core/guards/dirty-check.guard';

import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users-list/users.component';

const routes : Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'users/new', component: AddUserComponent, canDeactivate: [DirtyCheckGuard]},
  { path: 'users/:id', component: UpdateUserComponent, canDeactivate: [DirtyCheckGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
