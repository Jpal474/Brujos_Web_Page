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
import { PublicComponent } from './components/public/public.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PersonalComponent } from './components/personal/personal.component';
import { FooterComponent } from './components/footer/footer.component';



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
    InfoComponent,
    NavbarComponent,
    PublicComponent,
    LandingComponent,
    PersonalComponent,
    FooterComponent,
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
