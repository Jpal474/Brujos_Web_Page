import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { PartidoComponent } from './components/partido/partido.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { InfoComponent } from './components/info/info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PersonalComponent } from './components/personal/personal.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MatchComponent } from './components/match/match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    InfoComponent,
    NavbarComponent,
    LandingComponent,
    PersonalComponent,
    FooterComponent,
    CategoriesComponent,
    StatisticsComponent,
    MatchComponent,
    MatchesComponent,
    PlayerComponent,
    PlayersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CarouselModule,
    ButtonModule,
    TagModule,
  ]
})
export class PublicModule { }
