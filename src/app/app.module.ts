import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { SocketService } from '../socket-service/socket.service';

import { HeaderComponent } from '../header/header.component';

import { BigViewModule } from '../big-view/bigView.module';
import { OptionsViewModule } from '../options-view/optionsView.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    BigViewModule,
    OptionsViewModule
  ],
  providers: [
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


