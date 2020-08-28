import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { MarginComponent } from './margin.component';

describe('MarginComponent', () => {
  let component: MarginComponent;
  let fixture: ComponentFixture<MarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MarginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct class value', () => {
    const margin = fixture.debugElement.query(By.css('div.ui.hidden.divider'));
    expect(margin).toBeTruthy();
  });
});
