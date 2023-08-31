import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DictionaryTextsService } from '../../services/dictionary-texts/dictionary-texts.service';
import { DictionaryTextModel } from '../../models/dictionaryText.mode';
import { DictionariesService } from '../../services/dictionaries/dictionaries.service';
import { DictionaryModel } from '../../models/dictionary.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ViewTextComponent } from './modals/view-text/view-text.component';
import { EditDictionaryComponent } from '../dictionaries/modals/edit-dictionary/edit-dictionary.component';
import { AddTextsComponent } from '../edit-dictionary-texts/modals/add-texts/add-texts.component';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss'],
  providers: [DictionaryTextsService, DictionariesService],
})
export class TextsComponent implements OnInit, OnDestroy {
  dictionary: DictionaryModel;

  texts: DictionaryTextModel[] = [];

  filteredTexts: DictionaryTextModel[] = [];

  unsubscribe = new Subject();

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionariesService,
    private dictionaryTextService: DictionaryTextsService
  ) {}

  ngOnInit() {
    this.getUrlId();
  }

  ngOnDestroy() {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }

  getUrlId() {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ id }) => {
        this.findDictionary(id);
        this.loadDictionaryTexts(id);
      });
  }

  findDictionary(id: number | string) {
    this.dictionaryService
      .find(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.dictionary = data;
      });
  }

  loadDictionaryTexts(id: number | string) {
    this.dictionaryTextService
      .list()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        this.texts = data
          .filter((text) => text.dictionaryId === id)
          .sort(function (a, b) {
            if (a.text < b.text) {
              return -1;
            }
            if (a.text > b.text) {
              return 1;
            }
            return 0;
          });
        this.filteredTexts = data
          .filter((text) => text.dictionaryId === id)
          .sort(function (a, b) {
            if (a.text < b.text) {
              return -1;
            }
            if (a.text > b.text) {
              return 1;
            }
            return 0;
          });
      });
  }

  openCreateText(id: number | string) {
    const initialState = {
      dictionaryId: id,
    }

    this.modalRef = this.modalService.show(AddTextsComponent, { initialState });
    this.modalRef.content.modalClosed.subscribe(() => {
      this.loadDictionaryTexts(this.dictionary.id)
    });
  }

  openEditDictionary() {
    const initialState = {
      rowData: this.dictionary,
    };

    this.modalRef = this.modalService.show(EditDictionaryComponent, {
      initialState,
    });
    this.modalRef.content.modalClosed.subscribe(() => {
      this.findDictionary(this.dictionary.id);
    });
  }

  openViewModal(text: DictionaryTextModel) {
    const initialState = {
      text: text,
      dictionary: this.dictionary
    };

    this.modalService.show(ViewTextComponent, { initialState });
  }

  filterTexts(letter: string) {
    if (letter === 'Todos') {
      this.filteredTexts = this.texts;
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
}
