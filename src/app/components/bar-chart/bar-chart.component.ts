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
        display: true,
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
      
    ]
  };
  public barChartType: ChartType = 'bar';
}
