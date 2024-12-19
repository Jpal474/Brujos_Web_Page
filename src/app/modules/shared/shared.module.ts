import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { StaticsComponent } from './statics/statics.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarouselComponent,
    InputTextComponent,
    ScoreboardComponent,
    StaticsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CarouselComponent,
    InputTextComponent,
    ScoreboardComponent,
    StaticsComponent,
  ]
})
export class SharedModule { }
