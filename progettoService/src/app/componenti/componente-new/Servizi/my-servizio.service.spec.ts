import { TestBed } from '@angular/core/testing';

import { MyServizioService } from './my-servizio.service';

describe('MyServizioService', () => {
  let service: MyServizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
