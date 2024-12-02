import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { JugadorComponent } from "./components/jugador/jugador.component";
import { JugadoresComponent } from "./components/jugadores/jugadores.component";
import { CategoriasComponent } from "./components/categorias/categorias.component";
import { PartidoComponent } from "./components/partido/partido.component";
import { PartidosComponent } from "./components/partidos/partidos.component";
import { EstadisticasComponent } from "./components/estadisticas/estadisticas.component";
import { LandingComponent } from "./components/landing/landing.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

export const PUBLIC_ROUTES: Routes = [
    {
        path: '',
        component: NavbarComponent,
        children: [

            {path: 'home', component: HomeComponent},
            {path: 'players', component: JugadoresComponent},
            {path: 'player', component: JugadorComponent},
            {path: 'categories', component: CategoriasComponent},
            {path: 'match', component: PartidoComponent},
            {path: 'matches', component: PartidosComponent},
            {path: 'statistics', component: EstadisticasComponent},
            {path: 'landing', component: LandingComponent}
        ]
    }
]