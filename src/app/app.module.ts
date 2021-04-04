import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomEmailInputComponent } from './custom-email-input/custom-email-input.component';
import { FormsModule } from '@angular/forms';
import {IdCardModule} from 'id-card';

@NgModule({
  declarations: [
    AppComponent,
    CustomEmailInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
