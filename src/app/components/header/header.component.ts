import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() addTaskForm = new EventEmitter();
  constructor() { }

  color = "green";
  text = 'add';
   
  doSomething(){
    
    if(this.color === 'green' && this.text === "add"){
      this.color = "red";
      this.text = 'close';
    }else{
      this.color ='green';
      this.text = 'add';
    }
    
    this.addTaskForm.emit();
  }
  ngOnInit(): void {
  }

}
