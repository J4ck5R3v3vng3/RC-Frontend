import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptFormularComponent } from './rezept-formular.component';

describe('RezeptFormularComponent', () => {
  let component: RezeptFormularComponent;
  let fixture: ComponentFixture<RezeptFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
