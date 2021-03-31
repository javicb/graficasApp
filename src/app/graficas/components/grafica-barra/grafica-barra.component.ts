import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: []
})
export class GraficaBarraComponent {
  @Input() barChartData: ChartDataSets[] = [];
  @Input() barChartLabels: Label[] = [];
  @Input() barChartOptions: ChartOptions = {};
  @Input() barChartLegend = true;
  @Input() barChartType: ChartType = 'bar';
  constructor() { }
}
