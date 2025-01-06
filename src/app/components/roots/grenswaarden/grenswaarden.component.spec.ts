import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrenswaardenComponent } from './grenswaarden.component';

describe('GrenswaardenComponent', () => {
  let component: GrenswaardenComponent;
  let fixture: ComponentFixture<GrenswaardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrenswaardenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrenswaardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
