import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { IncreaseComponent } from './increase/increase.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ShipListComponent} from './ship-list/ship-list.component';
import {ComcatComponent} from './comcat/comcat.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ShipsResource} from './resources/ships.resource';
import {ConcatService} from './services/concat.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IncreaseComponent,
        ShipListComponent,
        ComcatComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
