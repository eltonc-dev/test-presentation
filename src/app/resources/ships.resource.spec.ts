import { TestBed, inject } from '@angular/core/testing';

import { ShipsResource } from './ships.resource';
import {HttpClientModule} from '@angular/common/http';

describe('ShipsResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule],
      providers: [ShipsResource]
    });
  });

  it('should be created', inject([ShipsResource], (service: ShipsResource) => {
    expect(service).toBeTruthy();
  }));
});
