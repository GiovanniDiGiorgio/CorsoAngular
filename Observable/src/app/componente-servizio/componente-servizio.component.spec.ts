import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteServizioComponent } from './componente-servizio.component';

describe('ComponenteServizioComponent', () => {
  let component: ComponenteServizioComponent;
  let fixture: ComponentFixture<ComponenteServizioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteServizioComponent]
    });
    fixture = TestBed.createComponent(ComponenteServizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
