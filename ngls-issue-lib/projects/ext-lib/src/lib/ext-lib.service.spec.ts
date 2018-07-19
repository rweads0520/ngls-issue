import { TestBed, inject } from '@angular/core/testing';

import { ExtLibService } from './ext-lib.service';

describe('ExtLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtLibService]
    });
  });

  it('should be created', inject([ExtLibService], (service: ExtLibService) => {
    expect(service).toBeTruthy();
  }));
});
