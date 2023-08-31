import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DictionaryTextsTableComponent } from './dictionary-texts-table.component';

describe('DictionaryTextsTableComponent', () => {
  let component: DictionaryTextsTableComponent;
  let fixture: ComponentFixture<DictionaryTextsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DictionaryTextsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DictionaryTextsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
