import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatchComponent } from "./components/match/match.component";
import { MatchesComponent } from "./components/matches/matches.component";
import { InfoComponent } from "./components/info/info.component";
import { PlayerComponent } from "./components/player/player.component";
import { PlayersComponent } from "./components/players/players.component";
import { LoginComponent } from "./components/login/login.component";
import { LandingComponent } from "./components/landing/landing.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio', // Redirect to the landing page
        pathMatch: 'full', // Ensure it only redirects for an exact match
      },
    {
      path: '',
      component: NavbarComponent,
      children: [
        // {
        //   path: 'inicio',
        //   component: HomeComponent,
        // },
        {
          path: 'inicio',
          component: LandingComponent,
        },
        {
            path:'iniciar_sesion',
            component: LoginComponent
        },
        {
          path: 'partido',
          component: MatchComponent
        },
        {
          path: 'partidos',
          component: MatchesComponent
        },
        {
          path: 'informacion',
          component: InfoComponent
        },
        {
          path: 'jugador',
          component: PlayerComponent
        },
        {
            path: 'jugadores',
            component: PlayersComponent
        },
        {
          path: '**',
          redirectTo: 'inicio'
        }
      ],
    }
  ];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }