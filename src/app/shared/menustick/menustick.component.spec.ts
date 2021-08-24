import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenustickComponent } from './menustick.component';

describe('MenustickComponent', () => {
  let component: MenustickComponent;
  let fixture: ComponentFixture<MenustickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenustickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenustickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
