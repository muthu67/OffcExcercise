import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Employee App';
  empApp = new Employee('Muthu', 'mani');
  constructor() {
    console.log('App component constructed');
  }
  ngOnInit() {
    console.log('App component initiated');
  }
}
