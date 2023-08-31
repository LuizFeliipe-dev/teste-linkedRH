import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTextsComponent } from './delete-texts.component';

describe('DeleteTextsComponent', () => {
  let component: DeleteTextsComponent;
  let fixture: ComponentFixture<DeleteTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTextsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
