import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireSigninComponent } from './require-signin.component';

describe('RequireSigninComponent', () => {
  let component: RequireSigninComponent;
  let fixture: ComponentFixture<RequireSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequireSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequireSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
