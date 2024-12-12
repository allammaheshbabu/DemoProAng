import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAComponent } from './demo-a/demo-a.component';
import { DemoBComponent } from './demo-b/demo-b.component';



@NgModule({
  declarations: [
    DemoAComponent,
    DemoBComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DemoAComponent,
    DemoBComponent
  ]
})
export class ModuleAModule { }
