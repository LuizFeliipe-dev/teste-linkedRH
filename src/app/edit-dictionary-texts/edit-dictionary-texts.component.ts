import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DictionaryTextModel} from "../../models/dictionaryText.mode";
import {DictionaryTextsService} from "../../services/dictionary-texts/dictionary-texts.service";

@Component({
  selector: 'app-edit-dictionary-texts',
  templateUrl: './edit-dictionary-texts.component.html',
  styleUrls: ['./edit-dictionary-texts.component.scss'],
  providers: [DictionaryTextsService]
})
export class EditDictionaryTextsComponent implements OnInit {
  texts$: Observable<DictionaryTextModel[]  | null  >

  constructor(private dictionaryTextService: DictionaryTextsService) {}

  ngOnInit() {
    this.loadDictionaryTexts()
  }

  loadDictionaryTexts(){
    this.texts$ = this.dictionaryTextService.list()
  }
}
