import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {AddTextsComponent} from "../../modals/add-texts/add-texts.component";

@Component({
  selector: 'app-button-add-texts',
  templateUrl: './button-add-texts.component.html',
  styleUrls: ['./button-add-texts.component.scss'],
})
export class ButtonAddTextsComponent implements OnInit {
  @Output() refresh = new EventEmitter<void>();

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal() {
    this.modalRef = this.modalService.show(AddTextsComponent);
  }
}
