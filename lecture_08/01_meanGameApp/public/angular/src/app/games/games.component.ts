import { Component, OnInit } from '@angular/core';
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
  get _id() {return this.#_id;}
  get title() {return this.#title;}
  get year(){ return this.#year;}
  get rate() {return this.#rate;}
  get price() {return this.#price;}
  get minPlayers(){return this.#minPlayers;}
  get maxPlayers(){return this.#maxPlayers;}
  get minAge(){return this.#minAge;}
}
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games : Game[] = [];
  gameId!: string;
  constructor(private service: GamesDataService) { }

  ngOnInit(): void {
    this.service.getGames().subscribe(games => {
      this.games = games
    })
  }
}
