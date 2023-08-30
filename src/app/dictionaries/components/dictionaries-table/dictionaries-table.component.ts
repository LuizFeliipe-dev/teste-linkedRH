import {Component, Input, OnInit} from '@angular/core';
import {DictionaryModel} from "../../../../models/dictionary.model";

@Component({
  selector: 'app-dictionaries-table',
  templateUrl: './dictionaries-table.component.html',
  styleUrls: ['./dictionaries-table.component.scss'],
})
export class DictionariesTableComponent implements OnInit{
  @Input() dictionaries: DictionaryModel[] | null

  constructor() {
  }

  ngOnInit(): void {
  }
}
