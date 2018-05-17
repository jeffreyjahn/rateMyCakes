import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getCakes(){
    return this._http.get('/api/cakes');
  }
  newCakeAdd(newCake){
    return this._http.post('/api/new', newCake);
  }
  getCake(cake){
    return this._http.get('/api/'+cake._id);
  }
  newRatingAdd(cake, rate){
    console.log(cake, cake._id);
    return this._http.put('/api/update/'+cake._id+'/add_rating', rate);
  }
}
