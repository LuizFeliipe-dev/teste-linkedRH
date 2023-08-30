import {Component, EventEmitter, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-button-create-dictionary',
  templateUrl: './button-create-dictionary.component.html',
  styleUrls: ['./button-create-dictionary.component.scss'],
  providers: []
})
export class ButtonCreateDictionaryComponent {
  @Output() refresh = new EventEmitter<void>();

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
