import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DictionaryModel} from "../../../../models/dictionary.model";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {DeleteDictionaryComponent} from "../../modals/delete-dictionary/delete-dictionary.component";
import {Router} from "@angular/router";
import {EditDictionaryComponent} from "../../modals/edit-dictionary/edit-dictionary.component";

@Component({
  selector: 'app-dictionaries-table',
  templateUrl: './dictionaries-table.component.html',
  styleUrls: ['./dictionaries-table.component.scss'],
})
export class DictionariesTableComponent implements OnInit{
  @Input() dictionaries: DictionaryModel[] | null

  @Output() onRefresh = new EventEmitter<void>();

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router) {
  }

  ngOnInit(): void {
  }

  goToVisualizationDictionary(event: DictionaryModel){
    this.router.navigate([`texts/${event.id}`])
  }

  openEditModal(event: DictionaryModel){
    const initalState = {
      rowData: event
    }

    this.modalRef = this.modalService.show(EditDictionaryComponent, { initialState: initalState })
    this.modalRef.content.modalClosed.subscribe(() => {
      this.onRefresh.emit()
    });
  }

  goToEditTexts(event: DictionaryModel){
    this.router.navigate([`dictionary-texts/${event.id}`])
  }

  openDeleteModal(event: DictionaryModel){
    const initalState = {
      rowData: event
    }

    this.modalRef = this.modalService.show(DeleteDictionaryComponent, { initialState: initalState })
    this.modalRef.content.modalClosed.subscribe(() => {
      this.onRefresh.emit()
    });
  }
}
