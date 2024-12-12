import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoCComponent } from './demo-c/demo-c.component';
import { DemoDComponent } from './demo-d/demo-d.component';



@NgModule({
  declarations: [
    DemoCComponent,
    DemoDComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DemoCComponent,
    DemoDComponent
  ]
})
export class ModuleBModule { }
