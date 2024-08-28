import { Component,OnInit,Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-item.component.html',
  styleUrl: './todos-item.component.css'
})
export class TodosItemComponent implements OnInit {

 
  @Input() todo: any;
  @Input() i!: number;
 @Output() todoDelete: EventEmitter<Todo> =new EventEmitter();
 @Output() todocheckbox: EventEmitter<Todo> =new EventEmitter();
  constructor(){ }
 
  ngOnInit() {
    
  }
  onclick(todo:Todo){
  this.todoDelete.emit(todo);
  console.log("Onclick has....")
}
onCheckboxClick(todo: any){
  this.todocheckbox.emit(todo);
}

}
