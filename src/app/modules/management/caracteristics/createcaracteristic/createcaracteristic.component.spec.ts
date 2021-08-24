import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecaracteristicComponent } from './createcaracteristic.component';

describe('CreatecaracteristicComponent', () => {
  let component: CreatecaracteristicComponent;
  let fixture: ComponentFixture<CreatecaracteristicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecaracteristicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecaracteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
