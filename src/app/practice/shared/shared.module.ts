import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { D3jsModule } from './d3js/d3js.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    D3jsModule
  ],
  exports: [D3jsModule]
})
export class SharedModule { }
