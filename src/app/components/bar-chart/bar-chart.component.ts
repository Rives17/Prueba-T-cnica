import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as moment from 'moment';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [
  ]
})
export class BarChartComponent {
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // public d: Date = new Date()
  // public months: string[] = [
  //   'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
  // ];
  // public days: string[] = [
  //   'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
  // ]

  // public monthName: string = this.months[this.d.getMonth()]
  // public dayName: string = this.days[this.d.getDay()]
  // public dayNum: number = this.d.getDate()

  // public fullDate: string = `${this.dayName}, ${this.dayNum}th ${this.monthName}`

  public decrementDate = (n: number): string =>  {
   return moment().subtract(n, 'days').format("ddd, Do MMM");

  }
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {
        
      },
      y: {
        max: 100,
        min: 0
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
