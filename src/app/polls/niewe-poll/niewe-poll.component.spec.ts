import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiewePollComponent } from './niewe-poll.component';

describe('NiewePollComponent', () => {
  let component: NiewePollComponent;
  let fixture: ComponentFixture<NiewePollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiewePollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiewePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
