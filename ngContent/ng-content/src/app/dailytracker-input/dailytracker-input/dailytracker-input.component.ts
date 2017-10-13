import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule, FormArray, FormBuilder, Validators } from '@angular/forms';
export class DailyTrackerInputModel{
  constructor(
      name: string,task: string, hours: string
  ){}
}

@Component({
  selector: 'app-dailytracker-input',
  templateUrl: './dailytracker-input.component.html'  
})
export class DailytrackerInputComponent {
public myForm: FormGroup;
public payLoad: string;

// model=new DailyTrackerInputModel('adf','asdf','asdf');
model=new DailyTrackerInputModel('','','');
@Output() submittedForm: EventEmitter<DailyTrackerInputModel>=new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log("app daily tracker input initiated");    
  }
  onSubmitClicked(){
    console.log("submitted");
    this.submittedForm.emit(this.model);
    //this.payLoad=JSON.stringify(this.myForm.value);
  }
  get diagnostic() { return JSON.stringify(this.model); }
}
