import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
  <h1>Random Distribution </h1>
  <raw-view></raw-view>
  <graph-view></graph-view>
  <list-view></list-view>
  `,
})

/**
 * Primary component that is called from app the module. 
 */
export class AppComponent {  }
