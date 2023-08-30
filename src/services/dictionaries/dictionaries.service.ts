import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DictionaryModel} from "../../models/dictionary.model";

@Injectable()
export class DictionariesService {
  readonly url = 'http://localhost:3000'

  constructor(private httpService: HttpClient) { }

  list(): Observable<DictionaryModel[]>{
    return this.httpService.get<DictionaryModel[]>(`${this.url}/dictionaries`)
  }
}
