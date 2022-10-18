import { Component, OnInit } from '@angular/core';
import { PrestamosService } from 'src/app/web/servicios/prestamos.service';
import { LibrosService } from 'src/app/web/servicios/libros.service';
import { UsuariosService } from 'src/app/web/servicios/usuarios.service';
import { Prestamo, ReservasActivas } from 'src/app/web/interfaces/prestamo';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
  reservasActivas:ReservasActivas[] =[];
  prestamo!:Prestamo;

  constructor(private prestamoService: PrestamosService,private usuariosService:UsuariosService, private libroService:LibrosService) {
    this.prestamoService.observador.subscribe((data) =>{
      this.reservasActivas = data
    })
   }

  ngOnInit(): void {
  
  }
prestar(id:number){
  this.prestamoService.traerReserva(id).subscribe(data =>{
    this.prestamoService.crearPrestamo(data).subscribe(prestamo =>{
      this.prestamo =prestamo;
    })
  })
this.prestamoService.borrarReserva(id).subscribe(data=>{
  console.log(data);
})
}

}
