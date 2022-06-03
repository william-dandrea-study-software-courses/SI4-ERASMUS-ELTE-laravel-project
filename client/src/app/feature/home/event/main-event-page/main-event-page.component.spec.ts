import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEventPageComponent } from './main-event-page.component';

describe('MainEventPageComponent', () => {
  let component: MainEventPageComponent;
  let fixture: ComponentFixture<MainEventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEventPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
