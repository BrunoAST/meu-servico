import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MainRoutesModule } from './main.routes.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutesModule
  ]
})
export class MainModule { }
