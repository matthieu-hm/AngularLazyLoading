import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UselessComponent } from './component/useless/useless.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UselessComponent],
  exports: [UselessComponent]
})
export class SharedModule { }
