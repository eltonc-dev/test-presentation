import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComcatComponent } from './comcat.component';
import {ConcatService} from '../services/concat.service';

describe('ComcatComponent', () => {
  let component: ComcatComponent;
  let fixture: ComponentFixture<ComcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComcatComponent ],
      providers: [ConcatService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
