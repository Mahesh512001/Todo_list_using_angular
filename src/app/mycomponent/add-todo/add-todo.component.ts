import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit  {

title: string ="";
  desc: string="";
  @Output() todoAdd: EventEmitter<Todo> =new EventEmitter();
  constructor(){ }
 
  ngOnInit() {}
  
  onSubmit(){
    const todo ={
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }


}
