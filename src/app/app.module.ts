import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAComponent } from './test-a/test-a.component';
import { TestBComponent } from './test-b/test-b.component';
import { ModuleAModule } from './module-a/module-a.module';
import { ModuleBModule } from './module-b/module-b.module';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './pipes/gender.pipe';
import { SalarycheckPipe } from './pipes/salarycheck.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    TestBComponent,
    GenderPipe,
    SalarycheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleAModule,
    ModuleBModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
