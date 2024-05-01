import { Component } from '@angular/core';

import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``,
})
export class Grafica1Component {
  labels1: string[] = ['Pan', 'Soda', 'Tacos'];

  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [{ data: [200, 400, 100] }],
  };
}
