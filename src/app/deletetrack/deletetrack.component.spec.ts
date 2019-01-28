import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetrackComponent } from './deletetrack.component';

describe('DeletetrackComponent', () => {
  let component: DeletetrackComponent;
  let fixture: ComponentFixture<DeletetrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
