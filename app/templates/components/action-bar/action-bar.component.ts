import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Custom Action Bar Implementation
 * Allows us to have complete control of the content, styling and behavior.
 * @author Sean Perkins <sean-perkins>
 *
 */
@Component({
    moduleId: module.id,
    selector: 'healthcare-actionbar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {
    // Indicator if the action bar is transparent (used to flip styling)
    @Input() transparent = false;
    // The row to render the action bar on, default 0
    @Input() row = 0;
    // Emitted when the user toggles the navigation drawer icon
    @Output() onToggleNavigation: EventEmitter<any> = new EventEmitter();

}
