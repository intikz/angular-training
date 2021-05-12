import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptodetalleComponent } from './deptodetalle.component';

describe('DeptodetalleComponent', () => {
  let component: DeptodetalleComponent;
  let fixture: ComponentFixture<DeptodetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeptodetalleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
