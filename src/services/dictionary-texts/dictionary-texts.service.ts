import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DictionaryTextModel} from "../../models/dictionaryText.mode";

@Injectable()
export class DictionaryTextsService {
  readonly url = 'http://localhost:3000'

  constructor(private httpService: HttpClient) { }

  list(): Observable<DictionaryTextModel[]>{
    return this.httpService.get<DictionaryTextModel[]>(`${this.url}/dictionaryTexts`)
  }

  post(payload: DictionaryTextModel): Observable<DictionaryTextModel>{
    return this.httpService.post<DictionaryTextModel>(`${this.url}/dictionaryTexts`, payload)
  }

  put(id: number | string, payload: DictionaryTextModel): Observable<DictionaryTextModel>{
    return this.httpService.put<DictionaryTextModel>(`${this.url}/dictionaryTexts/${id}`, payload)
  }

  delete(id: number | string): Observable<void> {
    return this.httpService.delete<void>(`${this.url}/dictionaryTexts/${id}`)
  }

  find(id: number | string): Observable<DictionaryTextModel[]>{
    return this.httpService.get<DictionaryTextModel[]>(`${this.url}/dictionaryTexts/${id}`)
  }
}
