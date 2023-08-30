import { TestBed } from '@angular/core/testing';

import { DictionaryTextsService } from './dictionary-texts.service';

describe('DictionaryTextsService', () => {
  let service: DictionaryTextsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryTextsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
