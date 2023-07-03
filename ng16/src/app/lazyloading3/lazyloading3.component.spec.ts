import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyloading3Component } from './lazyloading3.component';

describe('Lazyloading3Component', () => {
  let component: Lazyloading3Component;
  let fixture: ComponentFixture<Lazyloading3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lazyloading3Component]
    });
    fixture = TestBed.createComponent(Lazyloading3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
