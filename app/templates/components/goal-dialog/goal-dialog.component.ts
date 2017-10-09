import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { Observable } from 'rxjs/Observable';
import { getPageActiveWidget } from '../../reducers';

@Component({
    moduleId: module.id,
    selector: 'healthcare-goal-dialog',
    templateUrl: './goal-dialog.component.html'
})
export class GoalDialogComponent implements OnInit {

    widget$: Observable<any>;

    constructor(
        private store$: Store<any>,
        private params: ModalDialogParams) { }

    ngOnInit() {
        this.widget$ = this.store$.select(getPageActiveWidget);
    }

    close() {
        this.params.closeCallback();
    }


}
