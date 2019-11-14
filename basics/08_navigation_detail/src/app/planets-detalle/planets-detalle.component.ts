import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PlanetsService } from '../services/planets.service';
import { Planet } from '../models/planet.interface';

@Component({
  selector: 'app-planets-detalle',
  templateUrl: './planets-detalle.component.html',
  styleUrls: ['./planets-detalle.component.css']
})
export class PlanetsDetalleComponent implements OnInit {
  idPlaneta: string;
  planeta: Planet;

  constructor(  
    private route: ActivatedRoute, // Este objeto me permite acceder a la URL actual
    private planetsService: PlanetsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idPlaneta = params.get("idP");

      this.planetsService.getPlanet(this.idPlaneta).subscribe(resp => {
        this.planeta = resp;
      });
    
    });

    

    
  }

}
