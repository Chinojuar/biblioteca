import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NzThMeasureDirective } from 'ng-zorro-antd/table';
import { take } from 'rxjs';
import { Libro } from 'src/app/web/interfaces/Libro';
import { Prestamo, ReservasActivas } from 'src/app/web/interfaces/prestamo';
import { Usuario } from 'src/app/web/interfaces/Usuario';
import { LibrosService } from 'src/app/web/servicios/libros.service';
import { PrestamosService } from 'src/app/web/servicios/prestamos.service';
import { UsuariosService } from 'src/app/web/servicios/usuarios.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  usuario: Usuario ={
    id:0,
    nombre:"",
    apellido:"",
    edad:0
  };
  libros: Libro[] = [];
  id: number = 0;
  prestamos:ReservasActivas[]=[];
  prestamo:Prestamo={
    id:0,
    id_libro:0,
    id_usuario:0
  };
  prestamosActivos:ReservasActivas[] = [];
  prueba:ReservasActivas[] = [];
 

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuariosService,
    private libroService: LibrosService,
    private prestamoService: PrestamosService
  ) {
    this.libroService.todosLibros().subscribe((data) => {
          this.libros = data;
    });
this.prestamosActivos =this.prestamoService.recibirPrestamos() 
console.log(this.prestamosActivos);

  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.id = data['id'];
      console.log(this.id);
    });
    this.usuarioService.traerUsuario(this.id).subscribe((usuario) => {
      this.usuario = usuario;
    });
    this.prestamoDuplicado()
  }

  prestamoDuplicado(){
    for (let i = 0; i < this.prestamosActivos.length; i++) {
      if(this.prestamosActivos[i].nombre === this.usuario.nombre ){
        this.prueba.push(this.prestamosActivos[i])
      }
    }
    for (let j = 0; j < this.prueba.length; j++) {
      for (let k = 0; k < this.libros.length; k++) {
        if (this.prueba[j].titulo == this.libros[k].titulo) {
          this.libros.splice(k,1)
        }
      }
    }
  }


  reserva(id: number) {
    this.prestamo.id_libro = id;
    this.prestamo.id_usuario = this.id;
    this.prestamoService.crearReserva(this.prestamo).subscribe((data) => {
      console.log(data);
    });
    console.log(this.prestamo);
  }
}
