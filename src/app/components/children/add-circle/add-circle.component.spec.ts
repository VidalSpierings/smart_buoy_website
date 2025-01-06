import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCircleComponent } from './add-circle.component';

describe('AddCircleComponent', () => {
  let component: AddCircleComponent;
  let fixture: ComponentFixture<AddCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
