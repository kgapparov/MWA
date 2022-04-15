import { Component, OnInit } from '@angular/core';
import { Observer, of } from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    const myObservable = of("123", "1223", "12312");
    const myObserver: Observer<string> = {
      next: (x: string) => console.log("Observer got a next value : " + x),
      error: (err: Error) => console.error("Observer got an error" + err),
      complete: ()=> console.log('Observer got a complete notification')
    };

    myObservable.subscribe(myObserver);
  }
}
