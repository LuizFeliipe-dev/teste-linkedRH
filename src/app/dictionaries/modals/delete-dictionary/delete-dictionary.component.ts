import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DictionaryModel} from "../../../../models/dictionary.model";
import {BsModalRef} from "ngx-bootstrap/modal";
import {DictionariesService} from "../../../../services/dictionaries/dictionaries.service";

@Component({
  selector: 'app-delete-dictionary',
  templateUrl: './delete-dictionary.component.html',
  styleUrls: ['./delete-dictionary.component.scss'],
  providers: [DictionariesService]
})
export class DeleteDictionaryComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();

  rowData: DictionaryModel;

  constructor(
      public modalRef: BsModalRef,
      private dictionaryService: DictionariesService
  ) {}

  ngOnInit() {}

  onDelete() {
    this.dictionaryService.delete(this.rowData.id).subscribe(() => {
      this.modalClosed.emit()
      this.modalRef.hide()
    })
  }
}
