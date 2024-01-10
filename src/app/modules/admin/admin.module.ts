import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { InfoComponent } from './components/info/info.component';



@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    NavbarComponent,
    JugadoresComponent,
    CategoriasComponent,
    PartidosComponent,
    EstadisticasComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
