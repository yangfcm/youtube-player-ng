import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeButtonAuthComponent } from './subscribe-button-auth.component';

describe('SubscribeButtonAuthComponent', () => {
  let component: SubscribeButtonAuthComponent;
  let fixture: ComponentFixture<SubscribeButtonAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeButtonAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeButtonAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
