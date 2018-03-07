import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

//import {QuoteListComponent} from '../quote-list/quote-list.component';

@Component({
  selector: 'quote-item',
  template: `
    <span> {{ theQuote.text }} </span>
    <small> {{ theQuote.author }} </small>
    <button (click)="onQuoteDelete()"> Delete </button>
  `
})
export class QuoteItemComponent implements OnInit {
  @Input() theQuote: any;
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onQuoteDelete () {
    this.onDelete.emit(this.theQuote.id);
  }
}