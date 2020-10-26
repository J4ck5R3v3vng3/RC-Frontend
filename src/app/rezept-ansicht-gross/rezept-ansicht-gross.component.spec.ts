import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptAnsichtGrossComponent } from './rezept-ansicht-gross.component';

describe('RezeptAnsichtGrossComponent', () => {
  let component: RezeptAnsichtGrossComponent;
  let fixture: ComponentFixture<RezeptAnsichtGrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptAnsichtGrossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptAnsichtGrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
