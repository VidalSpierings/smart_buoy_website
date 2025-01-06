import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementTypeCircleComponent } from './measurement-type-circle.component';

describe('MeasurementTypeCircleComponent', () => {
  let component: MeasurementTypeCircleComponent;
  let fixture: ComponentFixture<MeasurementTypeCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementTypeCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementTypeCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
