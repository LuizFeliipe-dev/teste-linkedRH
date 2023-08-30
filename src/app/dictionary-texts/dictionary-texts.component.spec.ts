import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DictionaryTextsComponent } from './dictionary-texts.component';

describe('DictionaryTextsComponent', () => {
  let component: DictionaryTextsComponent;
  let fixture: ComponentFixture<DictionaryTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DictionaryTextsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
