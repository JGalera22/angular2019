import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlextestComponent } from './flextest.component';

describe('FlextestComponent', () => {
  let component: FlextestComponent;
  let fixture: ComponentFixture<FlextestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlextestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlextestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
