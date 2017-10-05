import { Component, Output, EventEmitter } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'healthcare-sidedrawer',
    templateUrl: './side-drawer.component.html',
    styleUrls: ['./side-drawer.component.css']
})
export class SideDrawerComponent {

    @Output() onNavigate: EventEmitter<boolean> = new EventEmitter();

    menuItems: any[] = [
        {
            label: 'Dashboard',
            link: ['/app/dashboard']
        },
        {
            label: 'Settings',
            link: ['/app/settings']
        },
        {
            label: 'Add a goal',
            action: () => {
                console.log('called');
            }
        }
    ];

    constructor(private routerExt: RouterExtensions) { }

    onMenuTap(menuItem: any) {
        if (menuItem.link && menuItem.link.length > 0) {
            this.routerExt.navigate(menuItem.link);
        }
        else if (menuItem.action) {
            menuItem.action();
        }
        this.onNavigate.next(true);
    }

}
