import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DictionaryTextModel } from '../../../../models/dictionaryText.mode';
import {DictionaryTextsService} from "../../../../services/dictionary-texts/dictionary-texts.service";

@Component({
  selector: 'app-add-texts',
  templateUrl: './add-texts.component.html',
  styleUrls: ['./add-texts.component.scss'],
  providers: [DictionaryTextsService],
})
export class AddTextsComponent implements OnInit {
  texts: DictionaryTextModel = new DictionaryTextModel();

  constructor(
    public modalRef: BsModalRef,
    private dictionaryTextService: DictionaryTextsService

  ) {}

  ngOnInit() {}

  onCreate() {
    this.dictionaryTextService.post(this.texts).subscribe(() => {
      this.modalRef.hide();
    });
  }
}
