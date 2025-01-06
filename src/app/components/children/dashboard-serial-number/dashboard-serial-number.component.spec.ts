import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSerialNumberComponent } from './dashboard-serial-number.component';

describe('DashboardSerialNumberComponent', () => {
  let component: DashboardSerialNumberComponent;
  let fixture: ComponentFixture<DashboardSerialNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSerialNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSerialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
