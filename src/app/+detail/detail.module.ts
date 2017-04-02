import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './detail.routes';
import { DetailComponent } from './detail.component';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { TestDialog1Component } from './test-dialog-1.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DetailComponent,
    TestDialog1Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    BootstrapModalModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    TestDialog1Component
  ]
})
export class DetailModule {
  public static routes = routes;
}
