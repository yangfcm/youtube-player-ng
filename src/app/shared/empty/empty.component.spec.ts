import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EmptyComponent } from './empty.component';

describe('EmptyComponent', () => {
  let component: EmptyComponent;
  let fixture: ComponentFixture<EmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyComponent],
    });
    fixture = TestBed.createComponent(EmptyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p tag with no content in it', () => {
    // const elementDe: DebugElement = fixture.debugElement;
    // const pDe = elementDe.query(By.css('p'));
    const pEl: HTMLElement = fixture.debugElement.query(By.css('p'))
      .nativeElement;
    expect(pEl).toBeTruthy();
    expect(pEl.textContent).toBeFalsy();
  });
});
