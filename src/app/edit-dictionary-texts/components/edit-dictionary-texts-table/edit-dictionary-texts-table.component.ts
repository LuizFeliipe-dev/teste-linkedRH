import {Component, Input, OnInit} from '@angular/core';
import {DictionaryTextModel} from "../../../../models/dictionaryText.mode";

@Component({
  selector: 'app-edit-dictionary-texts-table',
  templateUrl: './edit-dictionary-texts-table.component.html',
  styleUrls: ['./edit-dictionary-texts-table.component.scss'],
})
export class EditDictionaryTextsTableComponent implements OnInit{
  @Input() texts: DictionaryTextModel[] | null

  constructor() {
  }

  ngOnInit() {
  }
}
