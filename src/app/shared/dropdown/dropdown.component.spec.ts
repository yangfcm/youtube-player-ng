import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DropdownComponent } from './dropdown.component';
import { GoogleAuthService } from '../../auth/google-auth.service';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let googleAuthServiceStub: Partial<GoogleAuthService>;

  beforeEach(async(() => {
    googleAuthServiceStub = jasmine.createSpyObj(['googleSignOut']);
    // spyGoogleSignout = spyOn(googleAuthServiceStub, 'googleSignOut');
    TestBed.configureTestingModule({
      declarations: [DropdownComponent],
      providers: [
        { provide: GoogleAuthService, useValue: googleAuthServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct menus', () => {
    const items = fixture.debugElement.queryAll(By.css('.menu .item'));
    const item0: HTMLElement = items[0].nativeElement;
    const item1: HTMLElement = items[1].nativeElement;
    const item2: HTMLElement = items[2].nativeElement;
    const item3: HTMLElement = items[3].nativeElement;

    expect(item0.textContent).toContain('Recommend');
    expect(item0.getAttribute('routerLink')).toBe('/');
    expect(item1.textContent).toContain('Subscriptions');
    expect(item1.getAttribute('routerLink')).toBe('/channel');
    expect(item2.textContent).toContain('Play list');
    expect(item2.getAttribute('routerLink')).toBe('/playlist');
    expect(item3.textContent).toContain('Sign out');
    expect(item3.getAttribute('routerLink')).toBeFalsy();
  });

  it('should call googleSignout function if Signout button is clicked', () => {
    const signOutEl = fixture.debugElement.query(
      By.css('.menu .item:last-child')
    );
    signOutEl.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();
    expect(googleAuthServiceStub.googleSignOut).toHaveBeenCalled();
  });
});
