import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Observable,throwError }from'rxjs';
import{ catchError,retry }from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  taskUrl = 'http://localhost:3000/tasks';
  

  createTask(task:{}){
   return this.http.post(this.taskUrl,task);
  }

  getask(){
    return this.http.get(this.taskUrl);
  }

  deleteTask(task:any){
    let urlId = `${this.taskUrl}/${task.id}`;
    return this.http.delete(urlId);
    
  }

  constructor(private http:HttpClient) { }
}
