import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedChannelItemComponent } from './subscribed-channel-item.component';

describe('SubscribedChannelItemComponent', () => {
  let component: SubscribedChannelItemComponent;
  let fixture: ComponentFixture<SubscribedChannelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribedChannelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedChannelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
