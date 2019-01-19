import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkPanelComponent } from './bookmark-panel.component';

describe('BookmarkPanelComponent', () => {
  let component: BookmarkPanelComponent;
  let fixture: ComponentFixture<BookmarkPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
