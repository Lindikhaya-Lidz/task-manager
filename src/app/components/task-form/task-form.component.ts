import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  
  @Output() newTask = new EventEmitter()
   
  task:string = ''; 
  day:string = ''; 
  reminder:boolean = false
  
  onSubmit(){
    if(this.task ==='' && this.day ===''){
      alert('please complete task')
    }else{
      let taskData = {
        task:this.task,
        day:this.day,
        reminder:this.reminder
      }
      this.taskService.createTask(taskData).subscribe();
      window.location.reload(); 
    }
 }
  constructor(private taskService:TaskService) { }
  ngOnInit(): void {
  }

}
