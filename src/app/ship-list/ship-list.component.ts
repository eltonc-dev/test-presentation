import { Component, OnInit } from '@angular/core';
import {ShipsResource} from '../resources/ships.resource';
import {Ship} from '../Models/ship';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  public shipList: Array<Ship>;
  constructor( private shipsResource: ShipsResource) { }

  ngOnInit() {
    this.shipsResource.getShipList().subscribe( result => {
      this.shipList = result.results;
    });
  }

  showModel(ship: Ship) {
      ship.showModel = true;
  }
}
