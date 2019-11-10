import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsbusinesscardComponent } from './newsbusinesscard.component';

describe('NewsbusinesscardComponent', () => {
  let component: NewsbusinesscardComponent;
  let fixture: ComponentFixture<NewsbusinesscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsbusinesscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsbusinesscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
