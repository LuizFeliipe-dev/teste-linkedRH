import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonAddTextsComponent } from './button-add-texts.component';

describe('ButtonAddTextsComponent', () => {
  let component: ButtonAddTextsComponent;
  let fixture: ComponentFixture<ButtonAddTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAddTextsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonAddTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
