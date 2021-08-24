import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecartypeComponent } from './createcartype.component';

describe('CreatecartypeComponent', () => {
  let component: CreatecartypeComponent;
  let fixture: ComponentFixture<CreatecartypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecartypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecartypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
