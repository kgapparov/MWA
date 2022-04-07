import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.css']
})
export class GameDeleteComponent implements OnInit {
  #_id!:string;
  constructor(private service:GamesDataService, private router: Router) { }

  ngOnInit(): void {
    
  }
  @Input()
  set gameID(id:string) {
    this.#_id = id;
  } 

  onClick() {
    if (this.#_id) {
      this.service.deleteGame(this.#_id).subscribe(result => 
        {
          console.log(result);
          this.router.navigate(["/games"]);
        });
    } 
  }
}
