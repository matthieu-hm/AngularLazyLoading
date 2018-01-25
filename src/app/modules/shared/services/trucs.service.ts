import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Truc } from '../../../models/truc.model';

@Injectable()
export class TrucsService {

  trucsSubject: BehaviorSubject<Truc[]> = new BehaviorSubject([]);
  trucs$ = this.trucsSubject.asObservable();

  constructor() { }

  addTrucs(): void {
    this.trucsSubject.value.push(new Truc());
    this.trucsSubject.next(this.trucsSubject.value);
  }

}
