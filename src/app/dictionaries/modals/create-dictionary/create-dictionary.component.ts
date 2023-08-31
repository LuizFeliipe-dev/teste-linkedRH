import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DictionariesService } from '../../../../services/dictionaries/dictionaries.service';
import { DictionaryModel } from '../../../../models/dictionary.model';

@Component({
  selector: 'app-create-dictionary',
  templateUrl: './create-dictionary.component.html',
  styleUrls: ['./create-dictionary.component.scss'],
})
export class CreateDictionaryComponent implements OnInit {
  dictionary: DictionaryModel = new DictionaryModel();

  constructor(
    private modalRef: BsModalRef,
    private dictionaryService: DictionariesService
  ) {}

  ngOnInit(): void {}

  onCreate() {
    this.dictionaryService.post(this.dictionary).subscribe(
      () => {
        this.modalRef.hide()
      },
      () => {
        this.modalRef.hide()

      }
    );
  }
}
