import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAuthPlaylistComponent } from './my-auth-playlist.component';

describe('MyAuthPlaylistComponent', () => {
  let component: MyAuthPlaylistComponent;
  let fixture: ComponentFixture<MyAuthPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAuthPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAuthPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
