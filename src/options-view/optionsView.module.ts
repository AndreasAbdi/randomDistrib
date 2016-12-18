import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListComponent } from './list/list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { AddSliceComponent } from './add-slice/add-slice.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { OptionsViewComponent } from './options-view/options-view.component';

@NgModule({
  imports: [BrowserModule],
  exports: [OptionsViewComponent],
  declarations: [
    ListComponent,
    RoomListComponent,
    AddSliceComponent,
    CreateRoomComponent,
    OptionsViewComponent
  ]
})
export class OptionsViewModule { }
