import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNewComponent } from './componente-new.component';

describe('ComponenteNewComponent', () => {
  let component: ComponenteNewComponent;
  let fixture: ComponentFixture<ComponenteNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteNewComponent]
    });
    fixture = TestBed.createComponent(ComponenteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
