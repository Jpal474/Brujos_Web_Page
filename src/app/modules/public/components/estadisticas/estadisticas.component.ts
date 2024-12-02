import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit{

  constructor(private render: Renderer2){}

  ngOnInit(): void {
      window.setTimeout(() => {
        const elements = document.querySelectorAll('.graph-circle');
        elements.forEach((element) => {
          this.render.addClass(element, 'circle-animation');
        });

      }, 100)
  }

}
