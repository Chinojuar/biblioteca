import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { Prestamo, ReservasActivas } from '../interfaces/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  prestamo:Prestamo[]=[];
  reservasActivas:ReservasActivas[] =[];
  observador = new BehaviorSubject<ReservasActivas[]>([])

  constructor(private http:HttpClient) { }
 
  todosPrestamos():Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>("http://localhost:9085/obtenerPrestamos");
  }

  crearPrestamo(prestamo: Prestamo) {
    return this.http.post<Prestamo>("http://localhost:9085/guardarPrestamo",prestamo);
  }

  borrar(id: number) {
    const url ="http://localhost:9085/borrarPrestamo"
    return this.http.delete<boolean>(`${url}/${id}`);
}

todosReservas():Observable<Prestamo[]> {
  return this.http.get<Prestamo[]>("http://localhost:9085/obtenerReservas");
}

crearReserva(prestamo: Prestamo) {
  return this.http.post<Prestamo>("http://localhost:9085/guardarReserva",prestamo);
}

borrarReserva(id: number) {
  const url ="http://localhost:9085/borrarReserva"
  return this.http.delete<boolean>(`${url}/${id}`);
}

traerReserva(id:number){
const url ="http:/localhost:9085/obtenerReserva"
return this.http.get<Prestamo>(`${url}/${id}`);
}

ReservaActivada(reservasActivas:ReservasActivas[]){
  this.observador.next(reservasActivas);
}

}
