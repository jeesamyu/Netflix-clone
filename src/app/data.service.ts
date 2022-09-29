import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getdata(){
    // let url = 'https://api.storerestapi.com/products';

    // return this.http.get(url);

    
  }
}
