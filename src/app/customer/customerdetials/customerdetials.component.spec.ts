import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdetialsComponent } from './customerdetials.component';

describe('CustomerdetialsComponent', () => {
  let component: CustomerdetialsComponent;
  let fixture: ComponentFixture<CustomerdetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerdetialsComponent]
    });
    fixture = TestBed.createComponent(CustomerdetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
