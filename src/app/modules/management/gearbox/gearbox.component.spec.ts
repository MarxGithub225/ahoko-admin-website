import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearboxComponent } from './gearbox.component';

describe('GearboxComponent', () => {
  let component: GearboxComponent;
  let fixture: ComponentFixture<GearboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GearboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GearboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
