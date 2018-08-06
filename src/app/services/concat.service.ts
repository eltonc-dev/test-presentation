import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcatService {

  constructor() { }

  public concat(val1, val2): string {
    return (val1 + '') + (val2 + '');
  }
}
