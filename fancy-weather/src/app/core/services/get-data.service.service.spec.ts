import { TestBed } from '@angular/core/testing';

import { GetData.ServiceService } from './get-data.service.service';

describe('GetData.ServiceService', () => {
  let service: GetData.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetData.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
