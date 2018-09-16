import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Output() addComment = new EventEmitter<string>();

  public newComment: string = '';

  constructor() { }

  eventHandler(event) {
    if (event.keyCode === 13 && event.ctrlKey) {
      this.addNewComment();
    }
  }

  addNewComment() {
    this.addComment.emit(this.newComment);
    this.newComment = '';
  }

  ngOnInit() {
  }

}
