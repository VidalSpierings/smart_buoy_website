import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTypeSelectorComponent } from './sensor-type-selector.component';

describe('SensorTypeSelectorComponent', () => {
  let component: SensorTypeSelectorComponent;
  let fixture: ComponentFixture<SensorTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorTypeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
