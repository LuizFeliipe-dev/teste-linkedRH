import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDictionaryTextsTableComponent } from './edit-dictionary-texts-table.component';

describe('EditDictionaryTableComponent', () => {
  let component: EditDictionaryTextsTableComponent;
  let fixture: ComponentFixture<EditDictionaryTextsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDictionaryTextsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditDictionaryTextsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
