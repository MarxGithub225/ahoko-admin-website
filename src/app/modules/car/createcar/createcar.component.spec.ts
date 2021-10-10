import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecarComponent } from './createcar.component';

describe('CreatecarComponent', () => {
  let component: CreatecarComponent;
  let fixture: ComponentFixture<CreatecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
