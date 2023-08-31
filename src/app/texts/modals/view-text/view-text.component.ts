import { Component, OnInit } from '@angular/core';
import { DictionaryTextModel } from '../../../../models/dictionaryText.mode';
import { DictionaryModel } from '../../../../models/dictionary.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-text',
  templateUrl: './view-text.component.html',
  styleUrls: ['./view-text.component.scss'],
})
export class ViewTextComponent implements OnInit {
  text: DictionaryTextModel;

  dictionary: DictionaryModel;

  constructor(public modalRef: BsModalRef) {}

  ngOnInit() {}
}
