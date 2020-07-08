import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarVideosComponent } from './sidebar-videos.component';

describe('SidebarVideosComponent', () => {
  let component: SidebarVideosComponent;
  let fixture: ComponentFixture<SidebarVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
