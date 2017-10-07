import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'healthcare-dashboard-detail',
    templateUrl: './dashboard-detail.component.html'
})
export class DashboardDetailComponent {

    constructor(private route: ActivatedRoute) { }
}
