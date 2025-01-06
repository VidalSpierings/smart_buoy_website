import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuoysMapComponent } from './buoys-map.component';

describe('BuoysMapComponent', () => {
  let component: BuoysMapComponent;
  let fixture: ComponentFixture<BuoysMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuoysMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuoysMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
