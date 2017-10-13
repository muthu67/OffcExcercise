import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{ FeedBackDisplayComponent } from './feedback-display/feedback-display.component'
import{ FeedBackInputComponent } from './feedback-input/feedback-input.component'

@NgModule({
  declarations: [
    AppComponent,
    FeedBackDisplayComponent,
    FeedBackInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
