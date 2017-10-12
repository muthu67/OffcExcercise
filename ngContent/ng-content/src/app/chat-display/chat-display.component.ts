import { Component, Input } from "@angular/core";


@Component({
    selector: 'chat-display',
    templateUrl: './chat-display.component.html'
})
export class ChatDisplayComponent {
    @Input('feed') chatHistory: {type: string, name: string, comment: string};

    ngOnInit(){
       console.log('OnInitiated');
    }
}