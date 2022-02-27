import { Component, OnInit,Input } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/TaskInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  
  tasks:any;
  @Input() display = false; 

  toggleTask(){
    console.log('toggled')
  }
  constructor(public taskService:TaskService) { 

    this.taskService.getask().subscribe(task => {
      this.tasks = task;
    })
  }
  

  removeTask(task:any){
   this.taskService.deleteTask(task).subscribe(()=>(this.tasks = this.tasks.filter((t:Task)=> t.id !== task.id)));

  }

  ngOnInit(): void {
  }

}
