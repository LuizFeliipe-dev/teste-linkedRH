import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DictionaryTextModel } from '../../../../models/dictionaryText.mode';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditTextsComponent } from '../../modals/edit-texts/edit-texts.component';
import { DeleteTextsComponent } from '../../modals/delete-texts/delete-texts.component';

@Component({
  selector: 'app-edit-dictionary-texts-table',
  templateUrl: './edit-dictionary-texts-table.component.html',
  styleUrls: ['./edit-dictionary-texts-table.component.scss'],
})
export class EditDictionaryTextsTableComponent implements OnInit {
  @Input() texts: DictionaryTextModel[];

  @Input() filteredTexts: DictionaryTextModel[];

  @Output() onRefresh = new EventEmitter<void>();

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  filterTexts(letter: string) {
    if (letter === 'Todos') {
      this.filteredTexts = this.texts.sort(function (a, b) {
        if (a.text < b.text) {
          return -1;
        }
        if (a.text > b.text) {
          return 1;
        }
        return 0;
      });
      return;
    }

    this.filteredTexts = this.texts
      .filter((text) => {
        return text.text[0].toLowerCase() === letter;
      })
      .sort(function (a, b) {
        if (a.text < b.text) {
          return -1;
        }
        if (a.text > b.text) {
          return 1;
        }
        return 0;
      });
  }

  openEditModal(event: DictionaryTextModel) {
    const initialState = {
      rowData: event,
    };

    this.modalRef = this.modalService.show(EditTextsComponent, {
      initialState,
    });
    this.modalRef.content.modalClosed.subscribe(() => {
      this.onRefresh.emit();
    });
  }

  openDeleteModal(event: DictionaryTextModel) {
    const initialState = {
      rowData: event,
    };

    this.modalRef = this.modalService.show(DeleteTextsComponent, {
      initialState,
    });
    this.modalRef.content.modalClosed.subscribe(() => {
      this.onRefresh.emit();
    });
  }
}
