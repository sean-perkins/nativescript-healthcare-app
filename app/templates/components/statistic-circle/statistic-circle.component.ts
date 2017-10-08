import { Component, Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'healthcare-statistic-circle',
    templateUrl: './statistic-circle.component.html',
    styleUrls: ['./statistic-circle.component.scss']
})
export class StatisticCircleComponent {

    @Input() title: string;
    @Input() subTitle: string;
    @Input() value: any;
    @Input() progress: number;
    @Input() degree = 0;

    @Input() barColor = '#33aae4';
    @Input() rimColor = '#d5dfe1';

    @Input() margin = '40 0 0 0';


}
