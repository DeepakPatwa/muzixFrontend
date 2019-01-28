import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavetrackComponent } from './savetrack.component';

describe('SavetrackComponent', () => {
  let component: SavetrackComponent;
  let fixture: ComponentFixture<SavetrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavetrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
