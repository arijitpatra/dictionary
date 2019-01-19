import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { log } from 'util';

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

  alphabetArray = [];

  ngOnInit() {
    for (let i = 65; i <= 90; i++) {
      this.alphabetArray.push(String.fromCharCode(i));
    }

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

    addToBookmark(word) {
      this.dataService.addToListBookmark(word);
    }

    playAudio(audioSrc) {
      const audio = new Audio();
      audio.src = "../../../assets/bell-ringing-01.mp3";
      audio.load();
      audio.play();
    }
}
