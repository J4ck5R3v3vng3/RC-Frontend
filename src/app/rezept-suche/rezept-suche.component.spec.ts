import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptSucheComponent } from './rezept-suche.component';

describe('RezeptSucheComponent', () => {
  let component: RezeptSucheComponent;
  let fixture: ComponentFixture<RezeptSucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptSucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptSucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
