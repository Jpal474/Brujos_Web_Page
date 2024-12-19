import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  // @Input() heroe!:Heroe;
  // @Input() index!:number | undefined;

  verJugador(){
    // console.log(this.index)
    // this.router.navigate(['/heroe',this.index])
  }

}
