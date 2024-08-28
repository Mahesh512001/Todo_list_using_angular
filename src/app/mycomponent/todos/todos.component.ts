import { Component, OnInit,Input } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';
import { TodosItemComponent } from "../todos-item/todos-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";


@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, TodosItemComponent, AddTodoComponent]
})
export class TodosComponent implements OnInit {
 


localitem
  todos: any=[];

constructor(){
  this.localitem = localStorage.getItem("todos");
  if(this.localitem == null){
  this.todos = [ ];
}
else{
  this.todos = JSON.parse(this.localitem)
}




}
  ngOnInit() {
    
  }
  deleteTodoHandler(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  AddTodoHandler(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
}


