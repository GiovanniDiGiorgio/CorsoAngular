import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figlio2Component } from './figlio2.component';

describe('Figlio2Component', () => {
  let component: Figlio2Component;
  let fixture: ComponentFixture<Figlio2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Figlio2Component]
    });
    fixture = TestBed.createComponent(Figlio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
