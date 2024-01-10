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



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    CategoriasComponent,
    JugadoresComponent,
    PartidosComponent,
    JugadorComponent,
    PartidoComponent,
    EstadisticasComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
