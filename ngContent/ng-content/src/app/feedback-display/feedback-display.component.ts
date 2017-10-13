import * as console from 'console';
import { feedbackdisplaycomponent } from '@angular/core';

@feedbackdisplaycomponent{
    selector: 'feedback-display',
    templateurl: './feedback-display/feedback-display.component.html'
}

export class FeedBackDisplayComponent{
    
constructor(){
    console.log('feedbackdisplay started');
}

}