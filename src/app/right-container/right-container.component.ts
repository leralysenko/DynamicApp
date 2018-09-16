import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.scss']
})
export class RightContainerComponent implements OnInit {

  public currentItem: Item = {
    name: '',
    counter: 0,
    comments: []
  };
  public list: Item[] = [];

  constructor() { }

  addItem(item: Item) {
    this.list.push(item);
    this.updateLocalStorage(); 
  }

  deleteItem(index) {
    let deletedItem = this.list.splice(index, 1);
    this.checkCurrentItem(deletedItem[0]);
    this.updateLocalStorage();
  }

  checkCurrentItem(deletedItem) {
    if(deletedItem === this.currentItem) {
      this.currentItem = {
        name: '',
        counter: 0,
        comments: []
      };
    }
  }

  setCurrentItem(item: Item) {
    this.currentItem = item;
  }

  updateLocalStorage() {
    let serialList = JSON.stringify(this.list);
    localStorage.setItem("list", serialList);
  }

  ngOnInit() {
    if(localStorage.getItem('list')) {
      this.list = JSON.parse(localStorage.getItem('list'));
    };
  }

}
