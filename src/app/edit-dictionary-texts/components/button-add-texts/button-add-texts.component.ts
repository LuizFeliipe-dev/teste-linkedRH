import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {AddTextsComponent} from "../../modals/add-texts/add-texts.component";

@Component({
  selector: 'app-button-add-texts',
  templateUrl: './button-add-texts.component.html',
  styleUrls: ['./button-add-texts.component.scss'],
})
export class ButtonAddTextsComponent implements OnInit {
  @Output() onRefresh = new EventEmitter<void>();

  @Input() id: number | string

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal() {
    const initialState = {
      dictionaryId: this.id
    }

    this.modalRef = this.modalService.show(AddTextsComponent, { initialState });

    this.modalRef.content.modalClosed.subscribe(() => {
      this.onRefresh.emit()
    });
  }
}
