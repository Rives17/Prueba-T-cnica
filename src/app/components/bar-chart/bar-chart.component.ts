import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import * as ChartLabel from 'chartjs-plugin-datalabels';
import * as moment from 'moment';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  

  public decrementDate = (n: number): string =>  {
   return moment().subtract(n, 'days').format("ddd, Do MMM");

  }
  
  public generateLabels(numLabels: number): string[] {
      const labels = [];
    
      for (let i = numLabels - 1; i >= 0; i--) {
         labels.push(this.decrementDate(i));
      }
      return labels;
   }
  
  public barChartOptions: ChartOptions = {
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
    plugins:
    {
      legend: {
        display: false
      }
    }
  };
 


  public barChartData: ChartData<'bar'> = {

    labels: this.generateLabels(7),
    datasets: [
      { data: [25, 25, 25, 25, 25, 25, 25], label: 'Desing', stack: 'a', backgroundColor: 'rgb(142, 176, 255)'},
      { data: [25, 25, 25, 25, 25, 25, 25], label: 'Others', stack: 'a', backgroundColor: 'rgb(82, 125, 222)' },
      { data: [25, 25, 25, 25, 25, 25, 25], label: 'Programing', stack: 'a', backgroundColor: 'rgb(24, 85, 255)' },
      { data: [25, 25, 25, 25, 25, 25, 25], label: 'Networks', stack: 'a', backgroundColor: 'rgb(0, 6, 182)' },
    ]
  };

  public barChartType: ChartType = 'bar';
}
