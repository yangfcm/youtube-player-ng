import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PageTitleComponent } from './page-title.component';

@Component({
  selector: 'test',
  template: ` <app-page-title>Title</app-page-title> `,
})
class TestComponent {}

describe('PageTitleComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, PageTitleComponent],
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

  it('should display correct title', () => {
    const titleEl: HTMLElement = fixture.debugElement.query(By.css('h2'))
      .nativeElement;
    expect(titleEl.textContent).toBe('Title');
  });
});
