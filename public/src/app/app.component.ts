import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  title = 'app';
  allCakes: any;
  newCake: any;
  newRate: any;
  cakeToShow: any;
  shownCakeRating: any;
  ngOnInit(){
    this.allCakes = [];
    this.newCake = {baker:"", image:""};
    this.newRate = {comment:"", rate:0};
    this.cakeToShow = {};
    this.shownCakeRating = 0;
    this.getAllCakes();
  }
  getAllCakes(){
    this._httpService.getCakes()
      .subscribe(data=>{
        console.log("Got all cakes!", data);
        this.allCakes = data;
      })
  }
  newCakeSubmit(){
    this._httpService.newCakeAdd(this.newCake)
      .subscribe(data=>{
        console.log("Adding a new cake!", data);
        this.newCake = {};
        this.getAllCakes();
      })
  }
  newRatingSubmit(cake){
    this._httpService.newRatingAdd(cake, this.newRate)
      .subscribe(data=>{
        console.log("Adding a new rating!", data);
        this.newRate = {};
        this.getAllCakes();
      })

  }
  getSpecificCake(cake){
    this._httpService.getCake(cake)
      .subscribe(data=>{
        console.log("Help man!", data);
        this.cakeToShow = data;
        let sum = 0;
        let count = 0;
        for(var rating of data['rating']){
          sum += rating['rate'];
          count ++;
        }
        let total = sum/count;
        if(total){
          this.shownCakeRating = total;
        }
        console.log(this.cakeToShow);
        this.getAllCakes();
      })
  }
}
