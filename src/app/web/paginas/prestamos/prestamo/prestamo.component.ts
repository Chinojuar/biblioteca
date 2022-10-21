import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../../../servicios/prestamos.service';
import { Prestamo, ReservasActivas } from 'src/app/web/interfaces/prestamo';
import { Usuario } from 'src/app/web/interfaces/Usuario';
import { LibrosService } from 'src/app/web/servicios/libros.service';
import { UsuariosService } from 'src/app/web/servicios/usuarios.service';
import { Libro } from 'src/app/web/interfaces/Libro';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.scss'],
})
export class PrestamoComponent implements OnInit {
  prestamos: Prestamo[] = [];
  usuario: Usuario;
  libro: Libro = {
    id:0,
    titulo:"",
    autor:"",
    fecha_pub:"",
    descripcion:""
  };
  
  prestamosActivos: ReservasActivas[] = [];

  constructor(
    private prestamoService: PrestamosService,
    private usuariosService: UsuariosService,
    private libroService: LibrosService
  ) {}

  ngOnInit(): void {
    this.prestamosActivos = this.prestamoService.recibirPrestamos()
  }

  regresar(id: number) {
    this.prestamoService.borrar(id).subscribe((data) => {
      console.log(data);
    });
    for (let i = 0; i < this.prestamosActivos.length; i++) {
      if(this.prestamosActivos[i].id == id){
        this.prestamosActivos.splice(i,1)
      }
      
    }
  }
}
