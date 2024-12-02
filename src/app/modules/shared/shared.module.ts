import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { StaticsComponent } from './statics/statics.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';



@NgModule({
  declarations: [
    CarouselComponent,
    StaticsComponent,
    ScoreboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarouselComponent,
    StaticsComponent,
    ScoreboardComponent,
  ]
})
export class SharedModule { }
