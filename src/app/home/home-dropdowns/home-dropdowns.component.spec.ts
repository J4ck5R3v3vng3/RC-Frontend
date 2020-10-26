import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDropdownsComponent } from './home-dropdowns.component';

describe('HomeDropdownsComponent', () => {
  let component: HomeDropdownsComponent;
  let fixture: ComponentFixture<HomeDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDropdownsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
