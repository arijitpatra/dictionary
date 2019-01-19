import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-bookmark-panel',
  templateUrl: './bookmark-panel.component.html',
  styleUrls: ['./bookmark-panel.component.scss']
})
export class BookmarkPanelComponent implements OnInit {

  bookmarkedWordsArray: string[] = [];

  constructor(private dataSevice: DataServiceService) { }

  ngOnInit() {
    this.dataSevice.updateBookmarksCount(this.bookmarkedWordsArray.length);

    this.dataSevice.addWordToBookmark.subscribe(word => {
      if (!this.bookmarkedWordsArray.includes(word)) {
        this.bookmarkedWordsArray.push(word);
        this.dataSevice.updateBookmarksCount(this.bookmarkedWordsArray.length);
      } else {
        alert('The word is already bookmarked');
      }
    });
  }

  removeFromBookmark(word) {
    const indexOfSelectedWord = this.bookmarkedWordsArray.indexOf(word);
    this.bookmarkedWordsArray.splice(indexOfSelectedWord, 1);
    this.dataSevice.updateBookmarksCount(this.bookmarkedWordsArray.length);
  }

  removeAllBookmarks() {
    this.bookmarkedWordsArray.length = 0;
    this.dataSevice.updateBookmarksCount(this.bookmarkedWordsArray.length);
  }
  }

}
