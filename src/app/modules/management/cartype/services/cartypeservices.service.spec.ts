import { TestBed } from '@angular/core/testing';

import { CartypeservicesService } from './cartypeservices.service';

describe('CartypeservicesService', () => {
  let service: CartypeservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartypeservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
