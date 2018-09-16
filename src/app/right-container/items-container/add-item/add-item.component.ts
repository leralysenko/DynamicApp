import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() addItem = new EventEmitter<object>();

  public item: Item = {
    name: '',
    counter: 0,
    comments: []
  };

  constructor() { }

  addTask() {
    this.addItem.emit(this.item);
    this.item = {
      name: '',
      counter: 0,
      comments: []
    };
  }

  ngOnInit() {
  }

}
