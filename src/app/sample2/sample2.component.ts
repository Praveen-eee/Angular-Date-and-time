import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {
  date2!:Date;
  constructor() {
    setInterval(() => {
      this.date2 = new Date()
    }, 100)
   }

  ngOnInit(): void {
  }
   
  
  
}
