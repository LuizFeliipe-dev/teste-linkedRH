import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DictionaryTextModel } from '../../../../models/dictionaryText.mode';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { EditTextsComponent } from '../../modals/edit-texts/edit-texts.component';
import { DeleteTextsComponent } from '../../modals/delete-texts/delete-texts.component';

@Component({
  selector: 'app-edit-dictionary-texts-table',
  templateUrl: './edit-dictionary-texts-table.component.html',
  styleUrls: ['./edit-dictionary-texts-table.component.scss'],
})
export class EditDictionaryTextsTableComponent implements OnInit {
  @Input() texts: DictionaryTextModel[] | null;

  @Output() onRefresh = new EventEmitter<void>();

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openEditModal(event: DictionaryTextModel) {
    const initialState = {
      rowData: event,
    };

    this.modalRef = this.modalService.show(EditTextsComponent, { initialState });
    this.modalRef.content.modalClosed.subscribe(() => {
      this.onRefresh.emit()
    });
  }

  openDeleteModal(event: DictionaryTextModel) {
    const initialState = {
      rowData: event,
    };

    this.modalRef = this.modalService.show(DeleteTextsComponent, { initialState });
    this.modalRef.content.modalClosed.subscribe(() => {
      this.onRefresh.emit()
    });
  }
}
