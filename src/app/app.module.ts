import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { SocketService } from '../socket-service/socket.service';

import { AppComponent } from './app.component';

import { HeaderComponent } from '../header/header.component';

import { BigViewModule } from '../big-view/bigView.module';
import { OptionsViewModule } from '../options-view/optionsView.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    BigViewModule,
    OptionsViewModule
    ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [
    SocketService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
