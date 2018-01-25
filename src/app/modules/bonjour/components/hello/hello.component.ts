import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

import { TrucsService } from '../../../shared/services/trucs.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  azeListSubject: BehaviorSubject<string[]> = new BehaviorSubject([]);
  azeList$ = this.azeListSubject.asObservable();

  qsdList: string[] = [];
  qsdListSubject: Subject<string[]> = new Subject();
  qsdList$ = this.qsdListSubject.asObservable();

  constructor(public trucsService: TrucsService) { }

  ngOnInit() {
    console.log(this.azeListSubject);
    console.log(this.qsdListSubject);
    console.log('---------');

    this.trucsService.trucs$.subscribe(trucs => {
      console.log(trucs);
    });


    this.azeList$.subscribe((azeList) => {
      console.log('azeList', azeList);
    });


    this.qsdList$.subscribe((qsdList) => {
      console.log('qsdList', qsdList);
    });
  }

  addTruc() {
    this.trucsService.addTrucs();
  }

  addAzeToTheList() {
    this.azeListSubject.value.push('aze');
  }

  addAzeToTheListWithNext() {
    const azeList = this.azeListSubject.value;
    azeList.push('AZE');
    this.azeListSubject.next(azeList);
  }

  addQsdToTheList() {
    this.qsdList.push('qsd');
    this.qsdListSubject.next(this.qsdList);
  }
}
