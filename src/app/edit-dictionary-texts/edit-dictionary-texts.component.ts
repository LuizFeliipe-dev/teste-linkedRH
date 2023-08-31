import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DictionaryTextModel } from '../../models/dictionaryText.mode';
import { DictionaryTextsService } from '../../services/dictionary-texts/dictionary-texts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-dictionary-texts',
  templateUrl: './edit-dictionary-texts.component.html',
  styleUrls: ['./edit-dictionary-texts.component.scss'],
  providers: [DictionaryTextsService],
})
export class EditDictionaryTextsComponent implements OnInit, OnDestroy {
  texts$: Observable<DictionaryTextModel[] | null>;

  id: number | string;

  unsubscribe = new Subject();

  constructor(
    private dictionaryTextService: DictionaryTextsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getUrlId();
    this.loadDictionaryTexts();
  }

  ngOnDestroy() {
    this.unsubscribe.next(null);
    this.unsubscribe.complete();
  }

  getUrlId() {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ id }) => {
        this.id = id;
      });
  }

  loadDictionaryTexts() {
    this.texts$ = this.dictionaryTextService.list();
  }

  handleRefresh() {
    this.loadDictionaryTexts();
  }
}
