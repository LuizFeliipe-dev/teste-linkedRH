import {Component, EventEmitter, Output} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {CreateDictionaryComponent} from "../../modals/create-dictionary/create-dictionary.component";

@Component({
  selector: 'app-button-create-dictionary',
  templateUrl: './button-create-dictionary.component.html',
  styleUrls: ['./button-create-dictionary.component.scss'],
  providers: []
})
export class ButtonCreateDictionaryComponent {
  @Output() onRefresh = new EventEmitter<void>();

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(CreateDictionaryComponent);

    this.modalRef.content.modalClosed.subscribe(() => {
      this.onRefresh.emit()
    });
  }
}
