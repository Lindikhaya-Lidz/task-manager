import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eventor';
  display = false;

  setDisplay(){
   if(this.display === false){
    this.display = true;
   }else{
     this.display = false;
   }
  } 
}
