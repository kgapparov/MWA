#!/bin/bash
ng new practice --skip-git=true --skip-tests=true --directory public/angular --defaults=true 
cd public/angular
ng g c home
ng g c footer
ng g c games
ng g c gamesng
ng g c register
ng g c game
ng g c add-game
ng g c delete-game 
ng g s gameData