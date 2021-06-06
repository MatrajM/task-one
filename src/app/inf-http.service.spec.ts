import { TestBed } from '@angular/core/testing';

import { InfHttpService } from './inf-http.service';

describe('InfHttpService', () => {
  let service: InfHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
