import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDictionaryTextsComponent } from './edit-dictionary-texts.component';

describe('EditDictionaryComponent', () => {
  let component: EditDictionaryTextsComponent;
  let fixture: ComponentFixture<EditDictionaryTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDictionaryTextsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditDictionaryTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
