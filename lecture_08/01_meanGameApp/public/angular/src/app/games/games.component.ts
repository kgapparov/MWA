import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.deleteArray.forEach(event => {
      if (event.target.checked) {
        console.log(event.target.value);
        this.service.deleteGame(event.target.value).subscribe(result => {
          this.route.navigate(["games"]);
        });
      }
    });
  
  }
}
