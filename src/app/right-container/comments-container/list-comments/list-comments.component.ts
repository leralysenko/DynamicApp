import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit {

  @Input() commentsList: string[];

  constructor() { }

  ngOnInit() {
  }

}
