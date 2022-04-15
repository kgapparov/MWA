import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesDataService } from '../games-data.service';
import { Game } from '../games/games.component';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  gameForm : FormGroup; 

  constructor(private service: GamesDataService, private route : Router, private formBuilder : FormBuilder) { 

    this.gameForm = this.formBuilder.group({
      title: "no Name",
      year: 2000,
      rate: 5, 
      price : 0.0,
      minPlayers: 2,
      maxPlayers: 10,
      minAge: 6
    })
  }

  ngOnInit(): void {
  }
  addGame(){
    const newGame: Game = new Game();
    newGame.title = this.gameForm.value["title"];
    newGame.year = this.gameForm.value["year"];
    newGame.rate = parseInt(this.gameForm.value["rate"]);
    newGame.minPlayers = parseInt(this.gameForm.value["minPlayers"]);
    newGame.maxPlayers = parseInt(this.gameForm.value["maxPlayers"]);
    newGame.minAge = parseInt(this.gameForm.value["minAge"]);
    this.service.addGame(newGame).subscribe(
       game => {
         console.log(game)
       },
       error =>{
         console.log(error)
       },
       () => {
         this.route.navigate(["games"]);
       }
    )
      
  }

}
