import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chatHistory = [];
  chatName: string = '';
  chatComment: string = '';
  
  OnPrivateClick(){
    this.chatHistory.push({
      type:'private',
      name: this.chatName,
      comment: this.chatComment
    })
  }

  OnPublicClick(){
    this.chatHistory.push({
      type:'public',
      name: this.chatName,
      comment: this.chatComment
    })
  }
}
