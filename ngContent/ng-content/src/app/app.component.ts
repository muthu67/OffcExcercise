import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chatHistory = [];
  empName: string = '';
  empComment: string = '';
  
  
  OnPrivateClick(){
    this.chatHistory.push({
      type:'private',
      name: this.empName,
      comment: this.empComment
    })
  }

  OnPublicClick(){
   
  }
}
