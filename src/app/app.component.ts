import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
    this.counter += 5;
  }

  counter: number = 0;

  increase(count: number = 1) {
    this.counter += count;
  }

  get Counter() {
    return (
      this.counter.toString() + (this.counter < 15 ? 'Çok az ' : 'Çok fazla')
    );
  }


}
