import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chatHistory = [];
  
  ngOnInit(){
    console.log('App component Initiated!');
  }

  OnPrivateChatAdded(chatFeed: {name: string, comment: string}){
    this.chatHistory.push({
      type:'private',
      name: chatFeed.name,
      comment: chatFeed.comment
    })
  }

  OnPublichChatAdded(chatFeed: {name: string, comment: string}){
    this.chatHistory.push({
      type:'public',
      name: chatFeed.name,
      comment: chatFeed.comment,
    })
  }
}