import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCommentComponent } from './editcomment.component';

describe('EditcommentComponent', () => {
  let component: EditCommentComponent;
  let fixture: ComponentFixture<EditCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCommentComponent]
    });
    fixture = TestBed.createComponent(EditCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
