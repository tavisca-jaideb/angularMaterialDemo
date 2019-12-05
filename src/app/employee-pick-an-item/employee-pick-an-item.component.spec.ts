import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePickAnItemComponent } from './employee-pick-an-item.component';

describe('EmployeePickAnItemComponent', () => {
  let component: EmployeePickAnItemComponent;
  let fixture: ComponentFixture<EmployeePickAnItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePickAnItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePickAnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
