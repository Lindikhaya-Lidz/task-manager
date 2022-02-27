import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import{faTimes}from'@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/TaskInterface';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})

export class TaskItemComponent implements OnInit {
   
  @Input() task:any;
  @Output()delete = new EventEmitter();

  fatimes = faTimes;

  deleteItem(task:any){
    this.delete.emit(task)
  }
  
  toggle(task:any){

    if(task.reminder === false){
      task.reminder = true
    }else{
      task.reminder = false;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
