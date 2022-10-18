import { Component, OnInit } from '@angular/core';
import { Libro } from "../../../interfaces/Libro";
import { ActivatedRoute,Params } from '@angular/router';
import { from } from 'rxjs';
import { LibrosService } from 'src/app/web/servicios/libros.service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.scss']
})
export class DetalleLibroComponent implements OnInit {
id:number =0;
libro!:Libro;

  constructor(private route: ActivatedRoute, private libroService:LibrosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data =>{
      this.id =data['id']
      console.log(this.id)
      this.libroService.traerLibro(this.id)
      .subscribe(libro => {
        this.libro=libro;
      });
    })
  }
  }
