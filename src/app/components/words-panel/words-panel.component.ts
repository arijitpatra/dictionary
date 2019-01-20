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
  pageLoader = true;
  previousSelectedAlphabet: string;

  constructor(private dataService: DataServiceService) { }

  alphabetArray = [];

  ngOnInit() {
    for (let i = 65; i <= 90; i++) {
      this.alphabetArray.push(String.fromCharCode(i));
    }

    this.dataService.getData().subscribe(x => {
      this.data = this.filteredData = x.data;
      this.pageLoader = false;
    });
  }

  highlightSelectedAlphabet(character?: string) {
    if (character) {
      if (this.previousSelectedAlphabet) {
        document.getElementById(this.previousSelectedAlphabet).style.background = '#fff';
        document.getElementById(character).style.background = '#f1f1f1';
      } else {
        document.getElementById(character).style.background = '#f1f1f1';
      }
      this.previousSelectedAlphabet = character;
    } else {
      if (this.previousSelectedAlphabet) {
        document.getElementById(this.previousSelectedAlphabet).style.background = '#fff';
      }
    }
  }

  doFilter() {
    this.filteredData = this.data.filter(x => {
      if (x.word.toUpperCase().includes(this.filterText.toUpperCase())) {
        return x;
      }
    });
    this.highlightSelectedAlphabet();
  }

  alphabetBasedFilter(character) {
    this.filteredData = this.data.filter(x => {
      if (x.word.toUpperCase().startsWith(character.toUpperCase())) {
        return x;
      }
    });
    this.highlightSelectedAlphabet(character);
  }

  addToBookmark(word) {
    this.dataService.addToListBookmark(word);
  }

  playAudio(audioSrc) {
    const audio = new Audio();
    audio.src = '../../../assets/twi.mp3';
    audio.load();
    audio.play();
  }
}
