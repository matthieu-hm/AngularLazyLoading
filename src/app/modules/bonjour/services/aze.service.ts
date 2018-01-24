import { Injectable } from '@angular/core';

@Injectable()
export class AzeService {

  private aze = '';

  constructor() { }

  setAze(aze: string): void {
    this.aze = aze;
  }

  getAze(): string {
    return this.aze;
  }

}
