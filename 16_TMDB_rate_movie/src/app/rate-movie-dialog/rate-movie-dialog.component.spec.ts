import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateMovieDialogComponent } from './rate-movie-dialog.component';

describe('RateMovieDialogComponent', () => {
  let component: RateMovieDialogComponent;
  let fixture: ComponentFixture<RateMovieDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateMovieDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
