import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { SocketService } from '../socket-service/socket.service';

import { AppComponent } from './app.component';

import { AddSliceComponent } from '../add-slice/add-slice.component';
import { CreateRoomComponent } from '../create-room/create-room.component';
import { GraphComponent } from '../graph/graph.component';
import { HeaderComponent } from '../header/header.component';
import { ListComponent } from '../list/list.component';
import { RoomListComponent } from '../room-list/room-list.component';
import { ResultComponent } from '../result/result.component';

@NgModule({
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    NgbModule.forRoot()
    ],
  declarations: [
    AppComponent,
    AddSliceComponent,
    CreateRoomComponent,
    GraphComponent,
    HeaderComponent,
    ListComponent,
    RoomListComponent,
    ResultComponent
  ],
  providers: [
    SocketService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
