import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonjourRoutingModule } from './bonjour-routing.module';
import { HelloComponent } from './components/hello/hello.component';
import { SharedModule } from '../shared/shared.module';

import { AzeService } from './services/aze.service';

@NgModule({
  imports: [
    CommonModule,
    BonjourRoutingModule,
    SharedModule,
  ],
  declarations: [ HelloComponent ],
  providers: [ AzeService ]
})
export class BonjourModule { }
