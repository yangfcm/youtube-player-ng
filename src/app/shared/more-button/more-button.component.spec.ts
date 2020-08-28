import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { MoreButtonComponent } from './more-button.component';

describe('MoreButtonComponent', () => {
  let component: MoreButtonComponent;
  let fixture: ComponentFixture<MoreButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoreButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreButtonComponent);
    component = fixture.componentInstance;
    component.nextPageToken = 'mock_next_page_token';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit next page token when clicking the button', () => {
    let nextPageToken: string;
    const button = fixture.debugElement.query(By.css('button'));
    component.onNextPage.subscribe(
      (_nextPageToken: string) => (nextPageToken = _nextPageToken)
    );
    button.triggerEventHandler('click', null);
    expect(nextPageToken).toBe('mock_next_page_token');
  });
});
