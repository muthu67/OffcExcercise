import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DailytrackerInputComponent } from './dailytracker-input/dailytracker-input/dailytracker-input.component';
import { DailytrackerDisplayComponent } from './dailytracker-display/dailytracker-display/dailytracker-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DailytrackerInputComponent,
    DailytrackerDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
