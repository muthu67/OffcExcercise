import { Component, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";


@Component({
    selector: 'chat-input',
    templateUrl: './chat-input.component.html'
})
export class ChatInputComponent {

    @Output() privateChatCreated = new EventEmitter<{name: string, comment: string}>();
    @Output() publicChatCreated = new EventEmitter<{name: string, comment: string}>();

    @ViewChild('chatName') chatName: ElementRef;
    @ViewChild('chatComment') chatComment: ElementRef;

    ngOnInit(){
        console.log('chat feed initiated!');
    }
    
    OnPrivateClick(){
        this.privateChatCreated.emit({
            name: this.chatName.nativeElement.value,
            comment: this.chatComment.nativeElement.value
        });
    }
  
    OnPublicClick(){
        this.publicChatCreated.emit({
            name: this.chatName.nativeElement.value,
            comment: this.chatComment.nativeElement.value
        });
    }
}