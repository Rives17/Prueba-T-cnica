import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [
  ]
})
export class BarChartComponent {
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public date: Date = new Date()
  public months: string[] = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
  ];
  public days: string[] = [
    'Sun','Mon','Tue','Wed','Thu','Fri','Sat'
  ]

  public monthIndex = this.date.getMonth()
  public dayIndex = this.date.getDay()

  public monthName = this.months[this.monthIndex]
  public dayName = this.days[this.dayIndex]


  public fullDate: any = `${this.dayName}, ${this.date.getDate()}th ${this.monthName}`



  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
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
    labels: [ this.fullDate, '', '', '', '', '', '' ],
    datasets: [
      
    ]
  };

  public barChartType: ChartType = 'bar';
}
