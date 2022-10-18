import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/Libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

libro:Libro[] = [];

  constructor(private http:HttpClient) { }

  todosLibros():Observable<Libro[]> {
    return this.http.get<Libro[]>("http://localhost:9085/obtenerTodos");
  }
  
  traerLibro(id: number) {
    const url = "http://localhost:9085/obtenerLibro"
    return this.http.get<Libro>(`${url}/${id}`)
  }
  
  crearLibro(libro: Libro) {
    return this.http.post<Libro>("http://localhost:9085/guardarLibro",libro);
  }
  
  actualizar(id: number, libro: Libro) {
    const url ="http://localhost:9085/actualizaLibro"
    return this.http.put<Libro>(`${url}/${id}`,libro);
  }
  
  borrar(id: number) {
    const url ="http://localhost:9085/borrarLibro"
    return this.http.delete<boolean>(`${url}/${id}`);
}
}