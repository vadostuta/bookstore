import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookItemComponent } from './view-book-item.component';

describe('ViewBookItemComponent', () => {
  let component: ViewBookItemComponent;
  let fixture: ComponentFixture<ViewBookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
