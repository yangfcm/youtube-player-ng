import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormAuthComponent } from './comment-form-auth.component';

describe('CommentFormAuthComponent', () => {
  let component: CommentFormAuthComponent;
  let fixture: ComponentFixture<CommentFormAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentFormAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
