import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  stars!:number[];
  constructor() { }

  ngOnInit(): void {
  }
  
  @Input()
  set star(rate: number){
    this.stars = new Array<number>(rate);
  }
}
