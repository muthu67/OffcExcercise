import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IdLabCustomeAttributeDirective } from './idlab-customattribute.directive';
import { idLabCustomAttributeDirective } from './idlab-custom1attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    IdLabCustomeAttributeDirective,
    idLabCustomAttributeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
