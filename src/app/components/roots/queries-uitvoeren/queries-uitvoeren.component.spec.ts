import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesUitvoerenComponent } from './queries-uitvoeren.component';

describe('QueriesUitvoerenComponent', () => {
  let component: QueriesUitvoerenComponent;
  let fixture: ComponentFixture<QueriesUitvoerenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueriesUitvoerenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueriesUitvoerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
