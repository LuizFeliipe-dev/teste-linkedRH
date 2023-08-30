import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDictionaryComponent } from './create-dictionary.component';

describe('CreateDictionaryComponent', () => {
  let component: CreateDictionaryComponent;
  let fixture: ComponentFixture<CreateDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDictionaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
