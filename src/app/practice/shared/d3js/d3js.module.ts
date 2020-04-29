import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [BarChartComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class D3jsModule { }
