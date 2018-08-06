import { TestBed, inject } from '@angular/core/testing';

import { ConcatService } from './concat.service';

describe('ConcatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConcatService]
    });
  });

  it('should be created', inject([ConcatService], (service: ConcatService) => {
    expect(service).toBeTruthy();
  }));
});
