import { TestBed } from '@angular/core/testing';

import { RegisterManagementService } from './register-management.service';

describe('RegisterManagementService', () => {
  let service: RegisterManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
