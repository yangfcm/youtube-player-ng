import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { By } from '@angular/platform-browser';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [RouterModule.forRoot([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct nav menus', () => {
    const items = fixture.debugElement.queryAll(By.css('a.item'));
    const item0: HTMLElement = items[0].nativeElement;
    const item1: HTMLElement = items[1].nativeElement;
    const item2: HTMLElement = items[2].nativeElement;
    expect(item0.textContent).toContain('Recommend');
    expect(item0.getAttribute('routerLink')).toBe('/');
    expect(item1.textContent).toContain('Subscription');
    expect(item1.getAttribute('routerLink')).toBe('/channel');
    expect(item2.textContent).toContain('Playlist');
    expect(item2.getAttribute('routerLink')).toBe('/playlist');
  });
});
