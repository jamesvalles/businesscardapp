import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbusinesscardsComponent } from './searchbusinesscards.component';

describe('SearchbusinesscardsComponent', () => {
  let component: SearchbusinesscardsComponent;
  let fixture: ComponentFixture<SearchbusinesscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbusinesscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbusinesscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
