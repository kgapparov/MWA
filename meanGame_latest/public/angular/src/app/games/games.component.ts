import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, Observer, of } from 'rxjs';
import { GamesDataService } from '../games-data.service';


export class Game {
  #_id!: string;
  #title!: string;
  #year!: string;
  #rate!: number;
  #price!: number;
  #minPlayers!: number;
  #maxPlayers!: number;
  #minAge!: number;
  get _id() { return this.#_id; }
  get title() { return this.#title; }
  get year() { return this.#year; }
  get rate() { return this.#rate; }
  get price() { return this.#price; }
  get minPlayers() { return this.#minPlayers; }
  get maxPlayers() { return this.#maxPlayers; }
  get minAge() { return this.#minAge; }
  
  set title(title) { this.#title = title }
  set year(year) { this.#year = year }
  set rate(rate) { this.#rate = rate }
  set price(price) { this.#price = price }
  set minPlayers(minPlayers) { this.#minPlayers = minPlayers }
  set maxPlayers(maxPlayers) { this.#maxPlayers = maxPlayers }
  set minAge(minAge) { this.#minAge = minAge }
}
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  gameId!: string;
  deleteArray: any[] = [];
  constructor(private service: GamesDataService, private route: Router) { }

  ngOnInit(): void {
    this.service.getGames().subscribe({
        next : games => {
          this.games = games;
        },
        error: err => {
          console.log("Service error", err)
        },
        complete: () => {
          console.log("Done");
        }
    });
    console.log("End of init");
  }

  check = (event: any) => {
    this.deleteArray.push(event)
  }
  delete(){
    const IDs:string[] = [];
 
   
    
    this.deleteArray.forEach(event => {
      if (event.target.checked) {
        IDs.push(event.target.value);
      }
    });

    const mySubject: Observable<string> = from(IDs);
  
    const myObserver: Observer<string> = {
      next:  (id:string) => {
        this.service.deleteGame(id).subscribe({
          complete: ()=> {
            this.service.getGames().subscribe( {
              next : (games) => this.games = games
            }
            );
          }
        });
      },
      error: (err:Error) => {
        this.route.navigate(["**"]);
      },
      complete: ()=> {
        console.log("Done");
      }
    }
    mySubject.subscribe(myObserver);
  }
}
