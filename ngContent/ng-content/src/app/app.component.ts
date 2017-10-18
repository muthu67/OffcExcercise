import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee App';
  empApp = new Employee('Muthu', 'mani');
  constructor() {
    console.log('App component initiated');
  }
}
