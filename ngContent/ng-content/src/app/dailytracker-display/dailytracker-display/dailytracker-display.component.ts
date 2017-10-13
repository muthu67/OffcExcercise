import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dailytracker-display',
  templateUrl: './dailytracker-display.component.html'
})
export class DailytrackerDisplayComponent implements OnInit {
  @Input('feed') chatHistory: {name: string, task: string,hours: string};
  constructor() { console.log('app daily tracker display Constructed!');}

  ngOnInit() {
    console.log("app daily tracker display initiated");
  }

}
