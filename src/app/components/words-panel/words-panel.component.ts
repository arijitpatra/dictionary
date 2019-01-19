import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-words-panel',
  templateUrl: './words-panel.component.html',
  styleUrls: ['./words-panel.component.scss']
})
export class WordsPanelComponent implements OnInit {

  filterText: string;
  filteredData = [];
  data = [];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(x => {
      this.data = this.filteredData = x.data;
    });
  }

  doFilter() {
      this.filteredData = this.data.filter(x => {
        if (x.word.includes(this.filterText.toUpperCase())) {
          return x;
        }
      });
    }
}
