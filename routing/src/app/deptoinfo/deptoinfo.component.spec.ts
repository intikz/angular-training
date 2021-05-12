import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptoinfoComponent } from './deptoinfo.component';

describe('DeptoinfoComponent', () => {
  let component: DeptoinfoComponent;
  let fixture: ComponentFixture<DeptoinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeptoinfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
