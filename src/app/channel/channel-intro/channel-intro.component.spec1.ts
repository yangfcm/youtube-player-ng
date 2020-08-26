import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelIntroComponent } from './channel-intro.component';

describe('ChannelIntroComponent', () => {
  let component: ChannelIntroComponent;
  let fixture: ComponentFixture<ChannelIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
