import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BekijkPollComponent } from './bekijk-poll.component';

describe('BekijkPollComponent', () => {
  let component: BekijkPollComponent;
  let fixture: ComponentFixture<BekijkPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BekijkPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BekijkPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
