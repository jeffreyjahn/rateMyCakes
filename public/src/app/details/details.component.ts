import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() cakeToShow: any;
  @Input() shownCakeRating: any;
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
  }

}
