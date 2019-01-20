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
  pageLoader = true;
  previousSelectedAlphabet: string;

  constructor(private dataService: DataServiceService) { }

  alphabetArray = [];

  ngOnInit() {

    // this will dynamacially form the list of alphabets based on the ASCII values
    for (let i = 65; i <= 90; i++) {
      this.alphabetArray.push(String.fromCharCode(i));
    }

    // to get the full dictionary JSON
    this.dataService.getData().subscribe((x: any) => {
      this.data = this.filteredData = x.data;
      this.pageLoader = false;
    });
  }

  // the highlight of each selected alphabets is handled here
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

  // input field search filter, does a full text search
  doFilter() {
    this.filteredData = this.data.filter(x => {
      if (x.word.toUpperCase().includes(this.filterText.toUpperCase())) {
        return x;
      }
    });
    this.highlightSelectedAlphabet();
  }

  // to search based on starting alphabets
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
