import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate/calculate.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CalculateComponent
  ],
  imports: [
   CommonModule
   ,AppRoutingModule
  ],
  providers: [],
  bootstrap: []
 
})
export class BindingModule { }
