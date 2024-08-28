import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TodosComponent } from './mycomponent/todos/todos.component';
import {TodosItemComponent} from './mycomponent/todos-item/todos-item.component';
import {AddTodoComponent}  from  './mycomponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import {AboutComponent} from  './mycomponent/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, TodosComponent,TodosItemComponent,AddTodoComponent,FormsModule,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {
  title = 'omj-todo-list';
  constructor(){
  //   setTimeout(() => {
  //     this.title="changed title";
  //   }, 8000);
}
}