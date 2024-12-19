import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PlayersComponent } from './components/players/players.component';
import { InfoComponent } from './components/info/info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [
    AddPlayerComponent,
    CategoriesComponent,
    StatisticsComponent,
    PlayersComponent,
    InfoComponent,
    MatchesComponent,
    NavbarComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedModule,
]
})
export class AdminModule { }
