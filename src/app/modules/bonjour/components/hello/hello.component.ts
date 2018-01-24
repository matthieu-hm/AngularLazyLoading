import { Component, OnInit } from '@angular/core';

import { Truc } from '../../../../models/truc.model';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const truc = new Truc();
    console.log(truc);
  }

}
