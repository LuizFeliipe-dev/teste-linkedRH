import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DictionaryTextModel} from "../../../../models/dictionaryText.mode";
import {BsModalRef} from "ngx-bootstrap/modal";
import {DictionaryTextsService} from "../../../../services/dictionary-texts/dictionary-texts.service";

@Component({
  selector: 'app-delete-texts',
  templateUrl: './delete-texts.component.html',
  styleUrls: ['./delete-texts.component.scss'],
  providers: [DictionaryTextsService]
})
export class DeleteTextsComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();

  rowData: DictionaryTextModel

  constructor(
      public modalRef: BsModalRef,
      private dictionaryTextService: DictionaryTextsService
  ) {}

  ngOnInit() {}

  onDelete(){
    this.dictionaryTextService.delete(this.rowData.id).subscribe(() => {
      this.modalClosed.emit()
      this.modalRef.hide()
    })
  }
}
