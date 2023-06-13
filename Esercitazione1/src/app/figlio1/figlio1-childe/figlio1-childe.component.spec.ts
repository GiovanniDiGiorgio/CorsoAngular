import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figlio1ChildeComponent } from './figlio1-childe.component';

describe('Figlio1ChildeComponent', () => {
  let component: Figlio1ChildeComponent;
  let fixture: ComponentFixture<Figlio1ChildeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Figlio1ChildeComponent]
    });
    fixture = TestBed.createComponent(Figlio1ChildeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
