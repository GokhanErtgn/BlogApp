import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMostViewComponent } from './article-most-view.component';

describe('ArticleMostViewComponent', () => {
  let component: ArticleMostViewComponent;
  let fixture: ComponentFixture<ArticleMostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
