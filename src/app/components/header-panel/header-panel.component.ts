import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.scss']
})
export class HeaderPanelComponent implements OnInit {

  bookmarkCount: number;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getBookmarkCount.subscribe(x => this.bookmarkCount = x);
  }

}
