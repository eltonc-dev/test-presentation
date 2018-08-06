import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipListComponent } from './ship-list.component';
import {ShipsResource} from '../resources/ships.resource';
import {HttpClientModule} from '@angular/common/http';

describe('ShipListComponent', () => {
  let component: ShipListComponent;
  let fixture: ComponentFixture<ShipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ShipListComponent ],
      providers: [ShipsResource]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display ships', () => {
  });
});
