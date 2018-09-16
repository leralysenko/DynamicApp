import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Input() list: Item[];

  @Output() deleteItem = new EventEmitter<Item>();
  @Output() currentItem = new EventEmitter<Item>();

  constructor() { }

  setCurrentItem(item: Item) {
    this.currentItem.emit(item);
  }

  deleteTask(index) {
    this.deleteItem.emit(index);
  }

  ngOnInit() {
  }

}
