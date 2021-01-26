import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab, ContentChildrenComp, Pane } from './directive/tabPaneExample';

@NgModule({
  declarations: [
    AppComponent,
    Pane, 
    Tab,
    ContentChildrenComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
