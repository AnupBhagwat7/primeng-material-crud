import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { AppComponent } from './app.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
const routes: Routes = [

  { path: 'todo-list', component: TodoComponent },
  { path: 'todo-add', component: TodoAddComponent },
  { path: 'todo-edit/:id', component: TodoEditComponent },

 /*  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: '**', component: AppComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    //,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
