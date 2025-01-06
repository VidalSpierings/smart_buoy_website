import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorenComponent } from './sensoren.component';

describe('SensorenComponent', () => {
  let component: SensorenComponent;
  let fixture: ComponentFixture<SensorenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
