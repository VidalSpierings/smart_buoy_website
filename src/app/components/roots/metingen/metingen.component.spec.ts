import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetingenComponent } from './metingen.component';

describe('MetingenComponent', () => {
  let component: MetingenComponent;
  let fixture: ComponentFixture<MetingenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetingenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
