import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategearboxComponent } from './creategearbox.component';

describe('CreategearboxComponent', () => {
  let component: CreategearboxComponent;
  let fixture: ComponentFixture<CreategearboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreategearboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreategearboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
