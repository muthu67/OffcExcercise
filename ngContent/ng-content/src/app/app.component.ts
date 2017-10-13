import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chatHistory = [];
  empName: string = '';
  empTask: string = '';
  empHrs: string = '';
  
  ngOnInit(){
    console.log('AppComponent Initiated!');
  }  
  OnPrivateClick(){
    this.chatHistory.push({      
      name: this.empName,
      comment: this.empTask,
      hours: this.empHrs
    })
  }
  onSubmittedFormClicked(DailyTrackerInputModel: {name: string, task: string, hours:string}){
    console.log("appcomponent registerd ");
    this.chatHistory.push({
      name:DailyTrackerInputModel.name,
      task:DailyTrackerInputModel.task,
      hours:DailyTrackerInputModel.hours
    })
  }
  OnPublicClick(){
  }
}
