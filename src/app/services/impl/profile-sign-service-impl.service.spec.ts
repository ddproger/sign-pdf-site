import { TestBed, inject } from '@angular/core/testing';

import { ProfileSignServiceImplService } from './profile-sign-service-impl.service';

describe('ProfileSignServiceImplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileSignServiceImplService]
    });
  });

  it('should be created', inject([ProfileSignServiceImplService], (service: ProfileSignServiceImplService) => {
    expect(service).toBeTruthy();
  }));
});
