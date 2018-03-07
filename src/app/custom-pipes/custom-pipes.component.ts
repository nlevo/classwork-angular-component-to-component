import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-pipes',
  templateUrl: './custom-pipes.component.html'
    
})
export class CustomPipesComponent implements OnInit {

    today = new Date();
    stuff: Array<Object> = [];
    pattern: string;
  
    constructor() {}
  
    ngOnInit() {}
  
    addItem(item) {
      this.stuff.push({name: item});
    }
  }