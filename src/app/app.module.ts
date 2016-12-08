import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { DistributionService } from '../distribution-service/distribution.service'; 
import { RandomService } from '../random-service/random.service';
import { SocketService } from '../socket-service/socket.service';
import { AppComponent } from './app.component';

import { RawComponent } from '../raw/raw.component';
import { ListComponent } from '../list/list.component';
import { GraphComponent } from '../graph/graph.component';
import { WebsocketComponent } from '../websocket/websocket.component';

import {ReversePipe } from '../websocket/reverse.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    NgbModule.forRoot()
    ],
  declarations: [
    AppComponent,
    RawComponent,
    ListComponent,
    GraphComponent,
    WebsocketComponent,
    ReversePipe
  ],
  providers: [
    DistributionService,
    RandomService,
    SocketService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
