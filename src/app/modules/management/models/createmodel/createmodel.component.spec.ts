import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemodelComponent } from './createmodel.component';

describe('CreatemodelComponent', () => {
  let component: CreatemodelComponent;
  let fixture: ComponentFixture<CreatemodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
