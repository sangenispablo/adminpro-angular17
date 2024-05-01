import { Component, Input } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrl: './dona.component.css',
})
export class DonaComponent {
  @Input()
  title: string = 'Sin Titulo';

  @Input('labels')
  doughnutChartLabels: string[] = ['Label 1', 'Label 2'];

  @Input('data')
  doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450],
        backgroundColor: ['#6857e6', '#009fee'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
