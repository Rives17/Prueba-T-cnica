import { DonutChartsComponent } from './donut-charts/donut-charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    DonutChartsComponent,
    BarChartComponent,
    TableComponent,
    DatepickerComponent
  ],
  imports: [
   CommonModule,
   NgChartsModule,
   FormsModule,
   ReactiveFormsModule,
   MaterialModule
  ],
  exports: [
    DonutChartsComponent,
    BarChartComponent,
    TableComponent,
    DatepickerComponent
  ]
})
export class ComponentsModule { }
