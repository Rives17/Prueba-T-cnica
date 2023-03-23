
import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-donut-charts',
  templateUrl: './donut-charts.component.html',
  styleUrls: ['./donut-charts.component.css']
})
export class DonutChartsComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start'
      },
    },
  };


  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ ['Networks'], ['Programing'], ['Others'], ['Desing'] ],
    datasets: [ {
      data: [ 100, 100, 100, 100 ]
    } ]
  };

  public pieChartType: ChartType = 'doughnut';


}

