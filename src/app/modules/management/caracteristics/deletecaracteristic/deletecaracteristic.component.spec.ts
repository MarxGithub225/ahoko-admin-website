import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecaracteristicComponent } from './deletecaracteristic.component';

describe('DeletecaracteristicComponent', () => {
  let component: DeletecaracteristicComponent;
  let fixture: ComponentFixture<DeletecaracteristicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecaracteristicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecaracteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
