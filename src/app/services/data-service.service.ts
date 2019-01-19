import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  constructor(private httpService: HttpClient) { }

getData() {
    return this.httpService.get('../../assets/data.json');
  }
}
