
import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, Color } from 'chart.js';
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
        align: 'start',
        labels: {
          usePointStyle: true,
        }
      },
    },
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ ['Networks'], ['Programing'], ['Others'], ['Desing'] ],
    datasets: [ {
      data: [ 100, 100, 100, 100 ],
      backgroundColor: [
        'rgb(0, 6, 182)',
        'rgb(24, 85, 255)',
        'rgb(82, 125, 222)',
        'rgb(142, 176, 255)'
      ],
      
    } ]
  };

  public pieChartType: ChartType = 'doughnut';


}

