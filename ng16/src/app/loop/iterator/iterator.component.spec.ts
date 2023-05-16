import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratorComponent } from './iterator.component';

describe('IteratorComponent', () => {
  let component: IteratorComponent;
  let fixture: ComponentFixture<IteratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IteratorComponent]
    });
    fixture = TestBed.createComponent(IteratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
