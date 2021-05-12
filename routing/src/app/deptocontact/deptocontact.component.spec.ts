import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptocontactComponent } from './deptocontact.component';

describe('DeptocontactComponent', () => {
  let component: DeptocontactComponent;
  let fixture: ComponentFixture<DeptocontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptocontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptocontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
