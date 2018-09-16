import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Item } from 'src/app/item';
import { Output } from '@angular/core';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})
export class ItemsContainerComponent implements OnInit {

  @Input() list: Item[];

  @Output() currentItem = new EventEmitter<Item>();
  @Output() addItem = new EventEmitter<Item>();
  @Output() deleteItem = new EventEmitter<Item>();

  constructor() { }

  addTask(item: Item) {
    this.addItem.emit(item);
  }

  deleteTask(index) {
    this.deleteItem.emit(index);
  }

  setCurrentItem(item: Item) {
    this.currentItem.emit(item);
  }

  ngOnInit() {
  }

}
