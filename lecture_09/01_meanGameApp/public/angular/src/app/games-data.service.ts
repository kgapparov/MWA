import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Game } from './games/games.component'


@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  #baseUrl: string = "http://localhost:8080/api/";
  constructor(private http: HttpClient) { 

  }

  public getGames(): Observable<Game []> {
    return this.http.get<Game[]>(this.#baseUrl + "games");
  }

  public getGame(Url:string): Observable<Game> {
    return this.http.get<Game>(this.#baseUrl +"games/" + Url);
  }
  public deleteGame(gameId:string): Observable<string> {
    return this.http.delete<string>(this.#baseUrl+"games/"+ gameId);
  }
}
