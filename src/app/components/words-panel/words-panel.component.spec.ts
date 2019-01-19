import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsPanelComponent } from './words-panel.component';

describe('WordsPanelComponent', () => {
  let component: WordsPanelComponent;
  let fixture: ComponentFixture<WordsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
