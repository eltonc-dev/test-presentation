import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styleUrls: ['./increase.component.css']
})
export class IncreaseComponent implements OnInit {

  value = 0;

  @Output() increaseValueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.value += 1;
    this.increaseValueChange.emit(this.value);
  }

}
