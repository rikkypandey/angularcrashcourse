import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyloading2Component } from './lazyloading2.component';

describe('Lazyloading2Component', () => {
  let component: Lazyloading2Component;
  let fixture: ComponentFixture<Lazyloading2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lazyloading2Component]
    });
    fixture = TestBed.createComponent(Lazyloading2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
