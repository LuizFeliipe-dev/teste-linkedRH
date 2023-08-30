import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteDictionaryComponent } from './delete-dictionary.component';

describe('DeleteDictionaryComponent', () => {
  let component: DeleteDictionaryComponent;
  let fixture: ComponentFixture<DeleteDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDictionaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
