import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game!:Game;
  constructor(private service : GameDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["gameId"];
    this.service.getGame(id).subscribe({
      next: (game) => this.game = game, 
      error: (err) => console.log(err),
      complete: () => console.log("Game request Done!")
    });
  }
  
}
