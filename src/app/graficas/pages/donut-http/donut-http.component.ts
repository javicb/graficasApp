import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../serivces/graficas.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ];

  constructor(private graficasServie: GraficasService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.graficasServie.getData()
      .subscribe(
        x => { this.doughnutChartLabels = x.labels; this.doughnutChartData.push(x.values); },
        err => console.error('Observer got an error: ' + err),
        () => console.log('Observer got a complete notification')
      );
  }

}
