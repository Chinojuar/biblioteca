import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Prestamo, ReservasActivas } from '../interfaces/prestamo';
import { Usuario } from '../interfaces/Usuario';
import { Libro } from '../interfaces/Libro';
import { LibrosService } from './libros.service';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root',
})
export class PrestamosService {
  prestamo: Prestamo[] = [];
  reservasActivas: ReservasActivas[] = [];
  reservas:Prestamo[] =[];
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

  constructor(private http: HttpClient,private libroService:LibrosService,private usuariosService:UsuariosService) {}

  todosPrestamos(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>('http://localhost:9085/obtenerPrestamos');
  }

  crearPrestamo(prestamo: Prestamo) {
    return this.http.post<Prestamo>(
      'http://localhost:9085/guardarPrestamo',
      prestamo
    );
  }

  borrar(id: number) {
    const url = 'http://localhost:9085/borrarPrestamo';
    return this.http.delete<boolean>(`${url}/${id}`);
  }

  todosReservas(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>('http://localhost:9085/obtenerReservas');
  }

  crearReserva(prestamo: Prestamo) {
    return this.http.post<Prestamo>(
      'http://localhost:9085/guardarReserva',
      prestamo
    );
  }

  borrarReserva(id: number) {
    const url = 'http://localhost:9085/borrarReserva';
    return this.http.delete<boolean>(`${url}/${id}`);
  }

  traerReserva(id: number) {
    const url = 'http://localhost:9085/obtenerReserva';
    return this.http.get<Prestamo>(`${url}/${id}`);
  }

  recibirPrestamos() {
    this.todosPrestamos().subscribe((prestamos) => {
      this.prestamos = prestamos;
      for (let i = 0; i < this.prestamos.length; i++) {
        this.libroService
          .traerLibro(this.prestamos[i].id_libro)
          .subscribe((libro) => {
            this.libro = libro;   
          this.prestamosActivos[i].titulo = this.libro.titulo;
          });
        this.usuariosService
          .traerUsuario(this.prestamos[i].id_usuario)
          .subscribe((usuario) => {
            this.usuario = usuario;
          this.prestamosActivos[i].nombre = this.usuario.nombre;
          });
          this.prestamosActivos[i] = {
            id: 0,
            titulo: '',
            nombre: '',
          };
          this.prestamosActivos[i].id = this.prestamos[i].id;
      }
    });
    return this.prestamosActivos;
  }

  recibirReserva() {
    this.todosReservas().subscribe((reservas) => {
      this.reservas = reservas;
      for (let i = 0; i < this.reservas.length; i++) {
        this.libroService
          .traerLibro(this.reservas[i].id_libro)
          .subscribe((libro) => {
            this.libro = libro;   
          this.reservasActivas[i].titulo = this.libro.titulo;
          });
        this.usuariosService
          .traerUsuario(this.reservas[i].id_usuario)
          .subscribe((usuario) => {
            this.usuario = usuario;
          this.reservasActivas[i].nombre = this.usuario.nombre;
          });
          this.reservasActivas[i] = {
            id: 0,
            titulo: '',
            nombre: '',
          };
          this.reservasActivas[i].id = this.reservas[i].id;
      }
    });
    return this.reservasActivas;
  }


}
