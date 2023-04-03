import { DonutChartsComponent } from './donut-charts/donut-charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DonutChartsComponent,
    BarChartComponent,
    TableComponent
  ],
  imports: [
   CommonModule,
   NgChartsModule,
   FormsModule
  ],
  exports: [
    DonutChartsComponent,
    BarChartComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
