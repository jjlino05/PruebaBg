import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsServiceService {
  private correctValues: Array<string>;
  private wrongValues: Array<string>;
  public changeValuesOk: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  public changeValuesWrong: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();


  constructor() {
    this.correctValues = [];
    this.wrongValues = [];
  }

  setCorrectValues(codes: Array<string>): void {
    this.correctValues = codes
    this.changeValuesOk.emit(codes)
  }

  getCorrectValues(): Array<string> {
    return this.correctValues;
  }

  setWrongValues(codes: Array<string>): void {
    this.wrongValues = codes;
    this.changeValuesWrong.emit(codes)
  }

  getWrongValues(): Array<string> {
    return this.wrongValues;
  }
}
