import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  template: `
      <p> Date: {{ today }} </p>
      <p> Date: {{ today | date:'dd/MM/yyyy' }} </p>

      <button (click)="increment()"> Add one day! </button>
  `,
  styles: []
})
export class BuiltInPipesComponent implements OnInit {
                                     
  today = new Date();                 
                                      
  constructor() { }                   
                                      
  ngOnInit() {}                       
                                      
  increment() {                       
 
    const changedDate = new Date(this.today);

    // increase the day of the month
    changedDate.setDate(this.today.getDate() + 1);

    // update our date
    this.today = changedDate;
  }
}