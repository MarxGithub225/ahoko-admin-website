import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicsComponent } from './caracteristics.component';

describe('CaracteristicsComponent', () => {
  let component: CaracteristicsComponent;
  let fixture: ComponentFixture<CaracteristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
