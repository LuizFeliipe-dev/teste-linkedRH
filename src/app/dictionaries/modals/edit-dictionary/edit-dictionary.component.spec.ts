import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDictionaryComponent } from './edit-dictionary.component';

describe('EditDictionaryComponent', () => {
  let component: EditDictionaryComponent;
  let fixture: ComponentFixture<EditDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDictionaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
