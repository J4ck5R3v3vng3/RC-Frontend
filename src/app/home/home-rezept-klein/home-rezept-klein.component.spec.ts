import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRezeptKleinComponent } from './home-rezept-klein.component';

describe('HomeRezeptKleinComponent', () => {
  let component: HomeRezeptKleinComponent;
  let fixture: ComponentFixture<HomeRezeptKleinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRezeptKleinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRezeptKleinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
