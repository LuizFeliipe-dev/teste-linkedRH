import {Component, OnInit} from '@angular/core';
import {DictionariesService} from "../../services/dictionaries/dictionaries.service";
import {Observable} from "rxjs";
import {DictionaryModel} from "../../models/dictionary.model";

@Component({
  selector: 'app-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.scss'],
  providers: [DictionariesService]
})
export class DictionariesComponent implements OnInit{
  dictionaries$: Observable<DictionaryModel[]>

  constructor(private dictionariesService: DictionariesService) {
  }

  ngOnInit(): void {
    this.loadDictionaries()
  }

  loadDictionaries(){
    this.dictionaries$ = this.dictionariesService.list()
  }

  handleRefresh(){
    this.loadDictionaries()
  }
}
