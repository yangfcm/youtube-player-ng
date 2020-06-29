import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGridItemComponent } from './video-grid-item.component';

describe('VideoGridItemComponent', () => {
  let component: VideoGridItemComponent;
  let fixture: ComponentFixture<VideoGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
