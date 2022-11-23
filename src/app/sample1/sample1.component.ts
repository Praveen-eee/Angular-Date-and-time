import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {
  date1!:Date;
  constructor() { 
    setInterval(() => {
      this.date1 = new Date()
    }, 100)
  }
  
  ngOnInit(): void {
  }
   
  

}
