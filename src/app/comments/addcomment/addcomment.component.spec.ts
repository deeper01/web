import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentComponent } from './addcomment.component';

describe('AddcommentComponent', () => {
  let component: AddCommentComponent;
  let fixture: ComponentFixture<AddCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCommentComponent]
    });
    fixture = TestBed.createComponent(AddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
