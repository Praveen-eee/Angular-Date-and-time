import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date-time';
  link!:string;
  router(val:string){
    if(val=="sample-1")
      this.link="/sample-1";
    else if(val=="sample-2")
      this.link="/sample-2";
      else
      this.link="";
  }
}
