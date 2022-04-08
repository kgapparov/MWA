import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GamesComponent } from './games/games.component';

import { RegisterComponent } from './register/register.component';
import { GameComponent } from './game/game.component';
import { AddGameComponent } from './add-game/add-game.component';
import { DeleteGameComponent } from './delete-game/delete-game.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    GamesComponent,
    RegisterComponent,
    GameComponent,
    AddGameComponent,
    DeleteGameComponent,
    NavigationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([{
      path: "",
      component: HomeComponent
    }, 
    {
      path: "games",
      component: GamesComponent
    }, 
    {
      path: "register", 
      component: RegisterComponent
    },
    {
      path: "games/:gameId",
      component: GameComponent
    }
  ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
