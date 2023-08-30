import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonCreateDictionaryComponent } from './button-create-dictionary.component';

describe('ButtonCreateDictionaryComponent', () => {
  let component: ButtonCreateDictionaryComponent;
  let fixture: ComponentFixture<ButtonCreateDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonCreateDictionaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonCreateDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
