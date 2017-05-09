import { Component } from '@angular/core';
import { DialogRef, overlayConfigFactory, ModalComponent } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class TestDialog1Context extends BSModalContext {
    constructor() {
        super();
    }
}

@Component({
    selector: 'test-dialog-1',
    templateUrl: './test-dialog-1.component.html'
})
export class TestDialog1Component implements ModalComponent<TestDialog1Context> {
    constructor(public dialog: DialogRef<TestDialog1Context>) {
    }
}
