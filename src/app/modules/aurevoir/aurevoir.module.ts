import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AurevoirRoutingModule } from './aurevoir-routing.module';
import { ByeComponent } from './components/bye/bye.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AurevoirRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ByeComponent]
})
export class AurevoirModule { }
