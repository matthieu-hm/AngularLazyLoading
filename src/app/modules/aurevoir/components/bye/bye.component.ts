import { Component, OnInit } from '@angular/core';

// No compile errors but do not works because AzeService have no providers in AurevoirModule
// import { AzeService } from '../../../bonjour/services/aze.service';
import { Truc } from '../../../../models/truc.model';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.scss']
})
export class ByeComponent implements OnInit {

  showBonus = false;

  constructor(
    // public azeService: AzeService
  ) { }

  ngOnInit() {
    // this.azeService.setAze('zaeazezae');
    // console.log(this.azeService.getAze());

    const truc = new Truc();
    console.log(truc);

    this.rollShowBonus();
  }

  rollShowBonus() {
    this.showBonus = (Math.random() > .5) ? true : false;
  }

}
