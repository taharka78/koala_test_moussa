import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlihgtsComponent } from './flihgts.component';

describe('FlihgtsComponent', () => {
  let component: FlihgtsComponent;
  let fixture: ComponentFixture<FlihgtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlihgtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlihgtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
