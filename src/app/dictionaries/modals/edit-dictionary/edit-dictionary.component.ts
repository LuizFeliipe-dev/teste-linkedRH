import { Component, OnInit } from '@angular/core';
import {DictionaryModel} from "../../../../models/dictionary.model";
import {BsModalRef} from "ngx-bootstrap/modal";
import {DictionariesService} from "../../../../services/dictionaries/dictionaries.service";

@Component({
  selector: 'app-edit-dictionary',
  templateUrl: './edit-dictionary.component.html',
  styleUrls: ['./edit-dictionary.component.scss'],
  providers: [DictionariesService]
})
export class EditDictionaryComponent implements OnInit {
  rowData: DictionaryModel

  constructor(
      public modalRef: BsModalRef,
      private dictionaryService: DictionariesService
  ) {}

  ngOnInit() {}

  onUpdate(){
    this.dictionaryService.put(this.rowData.id, this.rowData).subscribe(() => {
      this.modalRef.hide()
    })
  }
}
