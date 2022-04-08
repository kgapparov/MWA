import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './games/games.component';
@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  #baseURL:string = "http://localhost:8080/api/"
  constructor(private http: HttpClient) { }

  public getGames():Observable<Game[]>{
    return this.http.get<Game[]>(this.#baseURL+ "games");
  }
  public getGame(gameId:string):Observable<Game> {
    return this.http.get<Game>(this.#baseURL+"games/" + gameId);
  }
}
