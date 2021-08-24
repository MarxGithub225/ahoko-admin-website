import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletegearboxComponent } from './deletegearbox.component';

describe('DeletegearboxComponent', () => {
  let component: DeletegearboxComponent;
  let fixture: ComponentFixture<DeletegearboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletegearboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletegearboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
