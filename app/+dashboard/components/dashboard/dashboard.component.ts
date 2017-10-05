import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'healthcare-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

    widgets: any[] = [
        {
            label: 'Temperature',
            value: 36.75,
            unit: '°'
        },
        {
            label: 'Calories burned',
            value: 537,
            unit: 'cal'
        },
        {
            label: 'Steps',
            value: 3342
        },
        {
            label: 'Heart rate',
            value: 87,
            unit: 'bpm'
        }
    ]
}
