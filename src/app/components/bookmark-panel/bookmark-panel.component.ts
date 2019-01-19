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
    this.dataSevice.addWordToBookmark.subscribe(word => {
        this.bookmarkedWordsArray.push(word);
    });
  }

  removeFromBookmark(word) {
    const indexOfSelectedWord = this.bookmarkedWordsArray.indexOf(word);
    this.bookmarkedWordsArray.splice(indexOfSelectedWord, 1);
  }

}
