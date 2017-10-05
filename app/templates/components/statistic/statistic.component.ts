import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'healthcare-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {

    @Input() label: string;
    @Input() unit: string;
    @Input() value: any;

    // TODO chart type

}
