import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDetailsComponent } from './routing-details.component';

describe('RoutingDetailsComponent', () => {
  let component: RoutingDetailsComponent;
  let fixture: ComponentFixture<RoutingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingDetailsComponent]
    });
    fixture = TestBed.createComponent(RoutingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
