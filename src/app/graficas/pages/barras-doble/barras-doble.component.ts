import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels2: Label[] = ['2006', '2007', '2008', '2009', '2010'];
  public barChartType: ChartType = 'bar';
  public horizontalBarChartType: ChartType = 'horizontalBar';

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#A43AFC', hoverBackgroundColor: 'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#53FDBC', hoverBackgroundColor: 'red' },
    { data: [8, 38, 70, 59, 66, 80, 100], label: 'Series C', backgroundColor: '#FDA83D', hoverBackgroundColor: 'red' }
  ];

  public barChartData2: ChartDataSets[] = [
    { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
    { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
    { data: [25, 150, 20, 250, 300], label: 'Vendedor C' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
