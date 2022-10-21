import { Component, OnInit } from '@angular/core';
import { PrestamosService } from 'src/app/web/servicios/prestamos.service';
import { LibrosService } from 'src/app/web/servicios/libros.service';
import { UsuariosService } from 'src/app/web/servicios/usuarios.service';
import { Prestamo, ReservasActivas } from 'src/app/web/interfaces/prestamo';
import { Usuario } from 'src/app/web/interfaces/Usuario';
import { Libro } from 'src/app/web/interfaces/Libro';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
  reservasActivas:ReservasActivas[] =[];
  reservas:Prestamo[] =[];
  prestamo:Prestamo={
    id:0,
    id_usuario:0,
    id_libro:0
  };
  usuario:Usuario;
  libro:Libro;

  constructor(private prestamoService: PrestamosService,private usuariosService:UsuariosService, private libroService:LibrosService) {

   }

  ngOnInit(): void {
  this.reservasActivas=this.prestamoService.recibirReserva()
  }
prestar(id:number){
  this.prestamoService.traerReserva(id).subscribe(data =>{
    this.prestamoService.crearPrestamo(data).subscribe(prestamo =>{
      this.prestamo = prestamo;
    })
  })
this.prestamoService.borrarReserva(id).subscribe(reserva=>{
  console.log(reserva)
})
for (let i = 0; i < this.reservasActivas.length; i++) {
  if(this.reservasActivas[i].id == id){
    this.reservasActivas.splice(i,1)
  }
  
}
}



}
