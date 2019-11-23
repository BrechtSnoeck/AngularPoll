import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StemOpPollComponent } from './stem-op-poll.component';

describe('StemOpPollComponent', () => {
  let component: StemOpPollComponent;
  let fixture: ComponentFixture<StemOpPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StemOpPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StemOpPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
