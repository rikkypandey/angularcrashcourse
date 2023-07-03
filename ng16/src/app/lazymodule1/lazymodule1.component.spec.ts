import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazymodule1Component } from './lazymodule1.component';

describe('Lazymodule1Component', () => {
  let component: Lazymodule1Component;
  let fixture: ComponentFixture<Lazymodule1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lazymodule1Component]
    });
    fixture = TestBed.createComponent(Lazymodule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
