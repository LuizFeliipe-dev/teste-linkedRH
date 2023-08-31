import { TestBed } from '@angular/core/testing';

import { DictionaryStatementControlService } from './dictionary-statement-control.service';

describe('DictionaryStatementControlService', () => {
  let service: DictionaryStatementControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryStatementControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
