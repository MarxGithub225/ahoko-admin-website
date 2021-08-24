import { TestBed } from '@angular/core/testing';

import { CaracteristicsservicesService } from './caracteristicsservices.service';

describe('CaracteristicsservicesService', () => {
  let service: CaracteristicsservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaracteristicsservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
