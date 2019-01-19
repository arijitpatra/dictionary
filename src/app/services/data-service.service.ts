import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  @Output() addWordToBookmark: EventEmitter<boolean> = new EventEmitter();
  constructor(private httpService: HttpClient) { }

getData() {
    return this.httpService.get('../../assets/data.json');
  }

  addToListBookmark(word) {
    this.addWordToBookmark.emit(word);
  }
}
