import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemCount: number;
  // tslint:disable-next-line:no-inferrable-types
  btnText: string = 'Add a Qoute';
  // tslint:disable-next-line:no-inferrable-types
  nameText: string = '';
  // tslint:disable-next-line:no-inferrable-types
  quoteText: string = '';
  // tslint:disable-next-line:no-inferrable-types
  authorText: string = '';
  quotes = [];

  addItem() {
    this.quotes.push(this.nameText, this.quoteText);
    this.nameText = '';
    this.quoteText = '';
    this.authorText = '';
    this.itemCount = this.quotes.length;

  }

}
