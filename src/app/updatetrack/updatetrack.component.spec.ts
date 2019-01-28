import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetrackComponent } from './updatetrack.component';

describe('UpdatetrackComponent', () => {
  let component: UpdatetrackComponent;
  let fixture: ComponentFixture<UpdatetrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
