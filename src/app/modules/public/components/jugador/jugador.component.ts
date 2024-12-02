import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent {
  // @Input() heroe!:Heroe;
  // @Input() index!:number | undefined;

  verJugador(){
    // console.log(this.index)
    // this.router.navigate(['/heroe',this.index])
  }
}
