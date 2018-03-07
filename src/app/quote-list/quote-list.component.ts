import { Component, OnInit, Input } from '@angular/core';
//import {QuoteItemComponent} from '../quote-item/quote-item.component';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent implements OnInit {

  quotes: Array<any> = [{
    id: 1,
    text: 'Walk as if you are kissing the Earth with your feet.',
    author: 'Thich Nhat Hanh'
  }, {
    id: 2,
    text: 'Life is a journey. Time is a river. The door is ajar.',
    author: 'Jim Butcher'
  }, {
    id: 3,
    text: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci'
  }];

  removeQuote (id) {
    this.quotes = this.quotes.filter(
      (quote) => quote.id !== id
    );
  }

  constructor() {}

  ngOnInit() {}
}