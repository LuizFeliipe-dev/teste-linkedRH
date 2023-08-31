import { Injectable } from '@angular/core';
import {RegisterManagementService} from "../register-management/register-management.service";
import {DictionaryTextModel} from "../../models/dictionaryText.mode";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TextsStatementControlService {
  saveText$ = new BehaviorSubject<DictionaryTextModel | null>(null)

  constructor(
      private registerManagementService: RegisterManagementService<DictionaryTextModel | null>
  ) { }

  saveText(text: DictionaryTextModel | null){
    this.saveText$.next(text)
    this.registerManagementService.saveLocalStorage('text', this.saveText$.value)
  }

  getText(){
    this.saveText$.next(this.registerManagementService.getLocalStorage('text'))
  }
}
