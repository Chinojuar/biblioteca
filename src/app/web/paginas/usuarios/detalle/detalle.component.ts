import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  usuario!: Usuario;
  reservas: Prestamo[] = [];
  reservasCodigo: Prestamo[] = [];
  reservasActivas: ReservasActivas[] = [];
  libros: Libro[] = [];
  id: number = 0;
  prestamos:Prestamo[]=[];
  prestamo: Prestamo = {
    id: 0,
    id_libro: 0,
    id_usuario: 0,
  };
  reservaActiva: ReservasActivas={
    id:0,
    nombre:"",
    titulo:""
 
  }
 

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuariosService,
    private libroService: LibrosService,
    private prestamoService: PrestamosService
  ) {
    this.libroService.todosLibros().subscribe((data) => {
      this.libros = data;
    });
    this.prestamoService.todosPrestamos().subscribe(prestamos =>{
      this.prestamos = prestamos
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.id = data['id'];
      console.log(this.id);
      this.usuarioService.traerUsuario(this.id).subscribe((usuario) => {
        this.usuario = usuario;
      });
    });

    this.prestamoService.todosReservas().subscribe((data) => {
      this.reservas = data;
      for (let i = 0; i < this.reservas.length; i++) {
        if (this.reservas[i].id_usuario == this.id) {
          this.reservasCodigo.push(this.reservas[i]);
        }
      }
      for (let i = 0; i < this.reservasCodigo.length; i++) {
        this.libroService
          .traerLibro(this.reservasCodigo[i].id_libro)
          .subscribe((data) => {
            this.reservaActiva.titulo = data.titulo;
          this.reservaActiva.nombre = this.usuario.nombre;
          this.reservaActiva.id = this.reservasCodigo[i].id;
        this.reservasActivas[i]=(this.reservaActiva);
          });
      }
      this.prestamoService.ReservaActivada(this.reservasActivas);
      console.log(this.reservasActivas);
    });
  }

  reserva(id: number) {
    this.prestamo.id_libro = id;
    this.prestamo.id_usuario = this.id;
    for (let i = 0; i < this.reservas.length; i++) {
      if(this.reservas[i].id_libro != this.prestamo.id_libro){
        this.prestamoService.crearReserva(this.prestamo).subscribe((data) => {
          console.log(data);
        });
      }
    }
   
    console.log(this.prestamo);
  }
}
