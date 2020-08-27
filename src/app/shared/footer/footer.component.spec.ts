import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct content', () => {
    const footer: HTMLElement = fixture.debugElement.query(By.css('.footer'))
      .nativeElement;
    const footerLink: HTMLElement = fixture.debugElement.query(
      By.css('.footer a')
    ).nativeElement;
    expect(footer.textContent).toContain(
      'My Youtube player developed by Fan Y.'
    );
    expect(footer.textContent).toContain('Powered by Angular');
    expect(footerLink.getAttribute('href')).toBe('https://angular.io/');
    expect(footerLink.getAttribute('target')).toBe('__blank');
  });
});
