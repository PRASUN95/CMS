import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import {ContentComponent} from './components/content.component';
import {CategoryComponent} from './components/category.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule , routing],
  declarations: [ AppComponent,UserComponent,AboutComponent,ContentComponent,CategoryComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
