import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figlio1Component } from './figlio1.component';

describe('Figlio1Component', () => {
  let component: Figlio1Component;
  let fixture: ComponentFixture<Figlio1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Figlio1Component]
    });
    fixture = TestBed.createComponent(Figlio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
