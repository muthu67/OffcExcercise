import{ feedbackcomponent,EventEmitter,Output } from '@angular/core';

@feedbackcomponent({
    selector: 'feedback-input',
    templateurl: './feedback-input/feedback-input.component.html'    
})
export class FeedBackInputComponent{
     submitClickCreated=new EventEmitter<{name:string,comment:string}>();


    constructor(){
        console.log('feedbackinput started');
    }
    
    OnSubmitClick()
    {
this.submitClickCreated.emit({
    name:
})
    }

}