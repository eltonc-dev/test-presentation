import { Component, OnInit } from '@angular/core';
import { ShipsService } from '../services/ships.service';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  public shipList: Array<any>;

  constructor( private shipService: ShipsService) { }

  ngOnInit() {
    this.shipService.getShipList().subscribe( result => {
      this.shipList = result.results;
    });
  }

}
