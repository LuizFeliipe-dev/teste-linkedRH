import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DictionariesService } from '../../../../services/dictionaries/dictionaries.service';
import { DictionaryModel } from '../../../../models/dictionary.model';
import { v4 as uuidv4 } from 'uuid';
import {
  DictionaryStatementControlService
} from "../../../../services/dictionary-statement-control/dictionary-statement-control.service";

@Component({
  selector: 'app-create-dictionary',
  templateUrl: './create-dictionary.component.html',
  styleUrls: ['./create-dictionary.component.scss'],
  providers: [DictionariesService],
})
export class CreateDictionaryComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();

  dictionary: DictionaryModel = new DictionaryModel();

  constructor(
    public modalRef: BsModalRef,
    private dictionaryService: DictionariesService,
    private dictionaryStatementControlService: DictionaryStatementControlService
  ) {}

  ngOnInit(): void {
    this.getInformation();
  }

  getInformation(){
    this.dictionaryStatementControlService.getDictionary()
    this.dictionaryStatementControlService.saveDictionary$.subscribe((data) => {
      if(data){
        this.dictionary = data
      }
    })
  }

  onCreate() {
    const newDictionary = {
      ...this.dictionary,
      id: uuidv4()
    }

    this.dictionaryService.post(newDictionary).subscribe(() => {
      this.modalClosed.emit()
      this.modalRef.hide();
      this.dictionaryStatementControlService.saveDictionary(null)
    });
  }

  saveInformation() {
    this.dictionaryStatementControlService.saveDictionary(this.dictionary)
  }
}
