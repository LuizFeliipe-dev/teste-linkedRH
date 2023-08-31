import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {DictionaryTextModel} from "../../../../models/dictionaryText.mode";
import {DictionaryTextsService} from "../../../../services/dictionary-texts/dictionary-texts.service";

@Component({
  selector: 'app-edit-texts',
  templateUrl: './edit-texts.component.html',
  styleUrls: ['./edit-texts.component.scss'],
  providers: [DictionaryTextsService],
})
export class EditTextsComponent implements OnInit {
  rowData: DictionaryTextModel

  constructor(
    public modalRef: BsModalRef,
    private dictionaryTextService: DictionaryTextsService
  ) {}

  ngOnInit() {}

  onUpdate() {
    this.dictionaryTextService.put(this.rowData.id, this.rowData).subscribe(() => {
      this.modalRef.hide();
    });
  }
}
