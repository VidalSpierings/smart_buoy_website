import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorBorderValuesComponent } from './sensor-border-values.component';

describe('SensorBorderValuesComponent', () => {
  let component: SensorBorderValuesComponent;
  let fixture: ComponentFixture<SensorBorderValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorBorderValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorBorderValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
