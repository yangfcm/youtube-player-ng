import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ErrorMessageComponent } from './error-message.component';

@Component({
  selector: 'test',
  template: ` <app-error-message>test error message</app-error-message> `,
})
class TestComponent {}

describe('ErrorMessageComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ErrorMessageComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct error message', () => {
    const errorMessageEl: HTMLElement = fixture.debugElement.query(By.css('h3'))
      .nativeElement;
    expect(errorMessageEl.textContent).toBe('test error message');
  });
});
