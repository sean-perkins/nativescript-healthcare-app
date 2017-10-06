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

    @Input() chartType: 'line' | 'bar' = 'line';

    @Input() chartData: any;

    @Input() chartOptions: {
        lineColor: string
    } = {
        lineColor: '#FEBFAB'
    };

    // TODO chart type

    get data(): any[] {
        return [
            { Label: 'a', Amount: 50 },
            { Label: 'b', Amount: 70 },
            { Label: 'c', Amount: 62 },
            { Label: 'd', Amount: 68 },
            { Label: 'e', Amount: 52 },
            { Label: 'f', Amount: 62 },
        ];
    }

    get hasChartOptions(): boolean {
        return !!this.chartOptions;
    }

}
