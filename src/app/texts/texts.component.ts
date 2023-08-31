import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DictionaryTextsService } from '../../services/dictionary-texts/dictionary-texts.service';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss'],
  providers: [DictionaryTextsService],
})
export class TextsComponent implements OnInit, OnDestroy {
  id: number | string;

  unsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryTextService: DictionaryTextsService
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
    this.dictionaryTextService
      .list()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
