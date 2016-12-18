import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ResultComponent } from './result/result.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { GraphComponent } from './graph/graph.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [ChartsModule, NgbModule, BrowserModule],
  exports: [JumbotronComponent],
  declarations: [ResultComponent, JumbotronComponent, GraphComponent]
})
export class BigViewModule { }

