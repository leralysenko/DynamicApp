import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LeftContainerComponent } from './left-container/left-container.component';
import { RightContainerComponent } from './right-container/right-container.component';
import { ItemsContainerComponent } from './right-container/items-container/items-container.component';
import { CommentsContainerComponent } from './right-container/comments-container/comments-container.component';
import { AddItemComponent } from './right-container/items-container/add-item/add-item.component';
import { ListItemsComponent } from './right-container/items-container/list-items/list-items.component';
import { AddCommentComponent } from './right-container/comments-container/add-comment/add-comment.component';
import { ListCommentsComponent } from './right-container/comments-container/list-comments/list-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftContainerComponent,
    RightContainerComponent,
    ItemsContainerComponent,
    CommentsContainerComponent,
    AddItemComponent,
    ListItemsComponent,
    AddCommentComponent,
    ListCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
