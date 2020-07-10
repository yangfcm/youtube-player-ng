import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthUserBannerComponent } from './unauth-user-banner.component';

describe('UnauthUserBannerComponent', () => {
  let component: UnauthUserBannerComponent;
  let fixture: ComponentFixture<UnauthUserBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthUserBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthUserBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
