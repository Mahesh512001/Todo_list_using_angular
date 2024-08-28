import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { AboutComponent } from './mycomponent/about/about.component';

export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent},
  ];
  
  NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {};
