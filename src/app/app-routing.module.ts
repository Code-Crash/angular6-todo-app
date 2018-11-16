
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { TodosComponent } from './todos/todos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

export const AppRoutingModule: Routes = [
  { path: '', component: TodosComponent },
  { path: 'todo/:id', component: EditComponent },
  { path: 'todo', component: AddComponent },
  // { path: 'todos', component: TodosComponent },
  { path: '**', component: PageNotFoundComponent },
];
