import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  @Component({ selector: 'app-search-input', template: '' })
  class SearchInputComponent {}
  @Component({ selector: 'app-user-header', template: '' })
  class UserHeaderComponent {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        SearchInputComponent,
        UserHeaderComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const titleEl: HTMLElement = fixture.debugElement.query(By.css('a'))
      .nativeElement;
    expect(titleEl.textContent).toContain('FanTube');
    expect(titleEl.getAttribute('routerLink')).toBe('/');
  });

  it('should render SearchInputComponent', () => {
    const searchInputComp = fixture.debugElement.query(
      By.css('app-search-input')
    );
    expect(searchInputComp).toBeTruthy();
  });

  it('should render SearchInputComponent', () => {
    const searchInputComp = fixture.debugElement.query(
      By.css('app-user-header')
    );
    expect(searchInputComp).toBeTruthy();
  });
});
