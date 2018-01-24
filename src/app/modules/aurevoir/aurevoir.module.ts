import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AurevoirRoutingModule } from './aurevoir-routing.module';
import { ByeComponent } from './components/bye/bye.component';

@NgModule({
  imports: [
    CommonModule,
    AurevoirRoutingModule,
  ],
  declarations: [ByeComponent]
})
export class AurevoirModule { }
