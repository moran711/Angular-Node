import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsDetailsPageComponent} from './news-details-page.component';

describe('NewsDetailsPageComponent', () => {
  let component: NewsDetailsPageComponent;
  let fixture: ComponentFixture<NewsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsDetailsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
