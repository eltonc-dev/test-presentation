import { Component, OnInit } from '@angular/core';
import {ConcatService} from '../services/concat.service';

@Component({
  selector: 'app-comcat',
  templateUrl: './comcat.component.html',
  styleUrls: ['./comcat.component.css']
})
export class ComcatComponent implements OnInit {

  public concatValue: string;

  constructor( private concatService: ConcatService) { }

  ngOnInit() {
  }

  concat(va1, val2) {
   this.concatValue = this.concatService.concat(va1, val2);
  }

}
