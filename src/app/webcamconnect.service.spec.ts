import { TestBed } from '@angular/core/testing';

import { WebcamconnectService } from './webcamconnect.service';

describe('WebcamconnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebcamconnectService = TestBed.get(WebcamconnectService);
    expect(service).toBeTruthy();
  });
});
