import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DictionaryTextModel } from '../../../../models/dictionaryText.mode';
import { DictionaryTextsService } from '../../../../services/dictionary-texts/dictionary-texts.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-texts',
  templateUrl: './add-texts.component.html',
  styleUrls: ['./add-texts.component.scss'],
  providers: [DictionaryTextsService],
})
export class AddTextsComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();

  text: DictionaryTextModel = new DictionaryTextModel();

  dictionaryId: number | string;

  constructor(
    public modalRef: BsModalRef,
    private dictionaryTextService: DictionaryTextsService
  ) {}

  ngOnInit() {}

  onCreate() {
    const newText = {
      ...this.text,
      id: uuidv4(),
      dictionaryId: this.dictionaryId
    };

    this.dictionaryTextService.post(newText).subscribe(() => {
      this.modalClosed.emit();
      this.modalRef.hide();
    });
  }
}
