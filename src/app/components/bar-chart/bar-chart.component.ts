import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as moment from 'moment';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public decrementDate = (n: number): string =>  {
   return moment().subtract(n, 'days').format("ddd, Do MMM");

  }
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
  
    scales: {
      x: {
      },
      y: {
        ticks: {
          stepSize: 20
        },
        max: 100,
        min: 0,
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  public barChartData: ChartData<'bar'> = {
    labels: [ 
      this.decrementDate(6),
      this.decrementDate(5), 
      this.decrementDate(4), 
      this.decrementDate(3), 
      this.decrementDate(2), 
      this.decrementDate(1), 
      this.decrementDate(0)
    ],
    datasets: [
      { data: ([25, 25, 25, 25, 25, 25, 25]),label: 'Desing', stack: 'a', backgroundColor: 'rgb(142, 176, 255)'},
      { data: [25, 25, 25, 25, 25, 25, 25], label: 'Others', stack: 'a', backgroundColor: 'rgb(82, 125, 222)' },
      { data: [25, 25, 25, 25, 25, 25, 25], label: 'Programing', stack: 'a', backgroundColor: 'rgb(24, 85, 255)' },
      { data: [25, 25, 25, 25, 25, 25, 25], label: 'Networks', stack: 'a', backgroundColor: 'rgb(0, 6, 182)' },

    ]
  };
  public barChartType: ChartType = 'bar';
}
