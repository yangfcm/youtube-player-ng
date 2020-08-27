import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthUserBannerComponent } from './auth-user-banner.component';
import { authData } from '../../../fixtures/auth';

@Component({
  selector: 'test',
  template: `<app-auth-user-banner [auth]="auth"></app-auth-user-banner>`,
})
class TestComponent {
  auth = authData;
}

describe('AuthUserBannerComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AuthUserBannerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct user image', () => {
    const imgEl: HTMLElement = fixture.debugElement.query(By.css('img'))
      .nativeElement;
    expect(imgEl.getAttribute('src')).toBe(authData.user.picture);
  });

  it("should render correct user's name", () => {
    const titleEl: HTMLElement = fixture.debugElement.query(By.css('h2'))
      .nativeElement;
    expect(titleEl.textContent).toContain(authData.user.name);
  });
});
