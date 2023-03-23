import { DonutChartsComponent } from './donut-charts/donut-charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    DonutChartsComponent,
    BarChartComponent
  ],
  imports: [
   CommonModule,
   NgChartsModule
  ],
  exports: [
    DonutChartsComponent,
    BarChartComponent
  ]
})
export class ComponentsModule { }
