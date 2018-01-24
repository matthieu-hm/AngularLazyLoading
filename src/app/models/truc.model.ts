export class Truc {

  isUseful: boolean;

  constructor(isUseful?: boolean) {
    if (isUseful === undefined) {
      this.isUseful = (Math.random() > .5) ? true : false;
    } else {
      this.isUseful = isUseful;
    }
  }


}
