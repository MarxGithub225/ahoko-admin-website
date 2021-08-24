import { TestBed } from '@angular/core/testing';

import { GearboxservicesService } from './gearboxservices.service';

describe('GearboxservicesService', () => {
  let service: GearboxservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GearboxservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
