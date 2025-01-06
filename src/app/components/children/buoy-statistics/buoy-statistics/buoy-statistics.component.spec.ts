import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuoyStatisticsComponent } from './buoy-statistics.component';

describe('BuoyStatisticsComponent', () => {
  let component: BuoyStatisticsComponent;
  let fixture: ComponentFixture<BuoyStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuoyStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuoyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
