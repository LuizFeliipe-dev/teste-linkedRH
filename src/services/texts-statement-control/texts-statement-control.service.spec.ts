import { TestBed } from '@angular/core/testing';

import { TextsStatementControlService } from './texts-statement-control.service';

describe('TextsStatementControlService', () => {
  let service: TextsStatementControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextsStatementControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
