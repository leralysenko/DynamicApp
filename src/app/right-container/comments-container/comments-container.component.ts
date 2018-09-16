import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.scss']
})
export class CommentsContainerComponent implements OnInit {

  @Input() currentItem: Item;

  @Output() changeCurrentItem = new EventEmitter<Item>();

  constructor() { }

  addComment(comment: string) {
    this.currentItem.comments.push(comment);
    this.currentItem.counter = this.currentItem.comments.length;
    this.changeCurrentItem.emit(this.currentItem);
  }

  ngOnInit() {
  }

}
