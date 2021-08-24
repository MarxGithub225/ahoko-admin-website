import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecartypeComponent } from './deletecartype.component';

describe('DeletecartypeComponent', () => {
  let component: DeletecartypeComponent;
  let fixture: ComponentFixture<DeletecartypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletecartypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecartypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
