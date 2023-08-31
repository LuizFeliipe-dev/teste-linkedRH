import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DictionariesService } from '../../../../services/dictionaries/dictionaries.service';
import { DictionaryModel } from '../../../../models/dictionary.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-dictionary',
  templateUrl: './create-dictionary.component.html',
  styleUrls: ['./create-dictionary.component.scss'],
  providers: [DictionariesService],
})
export class CreateDictionaryComponent implements OnInit {
  dictionary: DictionaryModel = new DictionaryModel();

  constructor(
    public modalRef: BsModalRef,
    private dictionaryService: DictionariesService
  ) {}

  ngOnInit(): void {}

  onCreate() {
    const newDictionary = {
      ...this.dictionary,
      id: uuidv4()
    }

    this.dictionaryService.post(newDictionary).subscribe(() => {
      this.modalRef.hide();
    });
  }
}
