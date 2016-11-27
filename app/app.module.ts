import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DistributionService } from './distribution-service/distribution.service'; 
import { RandomService } from './random-service/random.service';

import { AppComponent } from './app.component';
import { RawComponent } from './raw/raw.component';
import { ListComponent } from './list/list.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    RawComponent,
    ListComponent,
    GraphComponent
  ],
  providers: [
    DistributionService,
    RandomService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
