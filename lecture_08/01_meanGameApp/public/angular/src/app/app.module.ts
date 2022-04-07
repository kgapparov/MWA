import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { GameDeleteComponent } from './game-delete/game-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    GamesComponent,
    GameComponent,
    StarRatingComponent,
    GameDeleteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "games",
        component: GamesComponent
      },
      {
        path: "games/:gameId",
        component: GameComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
