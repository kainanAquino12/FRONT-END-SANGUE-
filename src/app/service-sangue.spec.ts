import { TestBed } from '@angular/core/testing';

import { ServiceSangue } from './service-sangue';

describe('ServiceSangue', () => {
  let service: ServiceSangue;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSangue);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
