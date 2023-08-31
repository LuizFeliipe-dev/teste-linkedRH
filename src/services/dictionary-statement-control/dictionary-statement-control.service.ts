import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RegisterManagementService } from '../register-management/register-management.service';
import { DictionaryModel } from '../../models/dictionary.model';

@Injectable({
  providedIn: 'root',
})
export class DictionaryStatementControlService {
  saveDictionary$ = new BehaviorSubject<DictionaryModel | null>(null);

  constructor(
    private registerManagementService: RegisterManagementService<DictionaryModel | null>
  ) {}

  saveDictionary(dictionary: DictionaryModel | null) {
    this.saveDictionary$.next(dictionary)
    this.registerManagementService.saveLocalStorage(
      'dictionary',
      this.saveDictionary$.value
    );
  }

  getDictionary() {
    this.saveDictionary$.next(this.registerManagementService.getLocalStorage('dictionary'));
  }
}
