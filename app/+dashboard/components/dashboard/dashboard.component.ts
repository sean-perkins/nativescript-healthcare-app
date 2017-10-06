import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { State } from '../../../store/app.state';
import * as pageActions from '../../../store/actions/page';

@Component({
    moduleId: module.id,
    selector: 'healthcare-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    private temperatures: any[] = [
        { Label: 'a', Amount: 50 },
        { Label: 'b', Amount: 70 },
        { Label: 'c', Amount: 62 },
        { Label: 'd', Amount: 68 },
        { Label: 'e', Amount: 52 },
        { Label: 'f', Amount: 62 },
    ];

    private calories: any[] = [
        { Label: 'a', Amount: 50 },
        { Label: 'b', Amount: 68 },
        { Label: 'c', Amount: 95 },
        { Label: 'd', Amount: 120 },
        { Label: 'e', Amount: 95 },
        { Label: 'f', Amount: 115 },
    ];

    private heartRates: any[] = [
        { Label: 'a', Amount: 40 },
        { Label: 'b', Amount: 63 },
        { Label: 'c', Amount: 68 },
        { Label: 'd', Amount: 40 },
        { Label: 'e', Amount: 70 },
        { Label: 'f', Amount: 40 },
    ];

    private steps: any[] = [
        { Label: 'a', Amount: 40 },
        { Label: 'b', Amount: 63 },
        { Label: 'c', Amount: 68 },
        { Label: 'd', Amount: 40 },
        { Label: 'e', Amount: 70 },
        { Label: 'f', Amount: 40 },
    ];

    widgets: any[] = [
        {
            label: 'Temperature',
            value: 36.75,
            unit: '°',
            chartData: this.temperatures,
            chartType: 'line',
            chartOptions: {
                lineColor: '#FEBFAB'
            }
        },
        {
            label: 'Calories burned',
            value: 537,
            unit: 'cal',
            chartType: 'line',
            chartData: this.calories,
            chartOptions: {
                lineColor: '#21ADCB'
            }
        },
        {
            label: 'Steps',
            chartType: 'bar',
            chartData: this.steps,
            value: 3342
        },
        {
            label: 'Heart rate',
            value: 87,
            chartType: 'line',
            chartData: this.heartRates,
            chartOptions: {
                lineColor: '#D391F7'
            },
            unit: 'bpm'
        }
    ];

    constructor(private store$: Store<State>) { }

    ngOnInit() {
        this.store$.dispatch(new pageActions.SetBarIcon('plus-circle-o'));
    }

}
