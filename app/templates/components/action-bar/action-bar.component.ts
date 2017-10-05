import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'healthcare-actionbar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {

    @Input() transparent = false;

    @Input() row = 0;

    @Output() onToggleNavigation: EventEmitter<any> = new EventEmitter();

}
