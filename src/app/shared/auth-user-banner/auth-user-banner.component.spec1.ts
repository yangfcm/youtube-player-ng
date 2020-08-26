import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserBannerComponent } from './auth-user-banner.component';

describe('AuthUserBannerComponent', () => {
  let component: AuthUserBannerComponent;
  let fixture: ComponentFixture<AuthUserBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthUserBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
