import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchermbezoekenComponent } from './schermbezoeken.component';

describe('SchermbezoekenComponent', () => {
  let component: SchermbezoekenComponent;
  let fixture: ComponentFixture<SchermbezoekenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchermbezoekenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchermbezoekenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
