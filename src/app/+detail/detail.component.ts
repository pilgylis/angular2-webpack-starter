import {
  Component,
  OnInit,
} from '@angular/core';
import { overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { TestDialog1Component } from './test-dialog-1.component';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
    <h1>Hello from Detail</h1>
    <span>
      <a [routerLink]=" ['./child-detail'] ">
        Child Detail
      </a>
    </span>
    <router-outlet></router-outlet>
    <p><button (click)='showDialog()'>Show Dialog</button></p>
  `,
})
export class DetailComponent implements OnInit {
  constructor(public modal: Modal) {}
  public ngOnInit() {
    console.log('hello `Detail` component');
  }

  public showDialog() {
    this.modal.open(TestDialog1Component, overlayConfigFactory({}, BSModalContext));
  }
}
