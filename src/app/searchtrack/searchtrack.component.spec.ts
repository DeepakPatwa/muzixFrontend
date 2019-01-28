import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtrackComponent } from './searchtrack.component';

describe('SearchtrackComponent', () => {
  let component: SearchtrackComponent;
  let fixture: ComponentFixture<SearchtrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
