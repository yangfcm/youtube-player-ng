import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReplyListComponent } from './comment-reply-list.component';

describe('CommentReplyListComponent', () => {
  let component: CommentReplyListComponent;
  let fixture: ComponentFixture<CommentReplyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentReplyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentReplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
