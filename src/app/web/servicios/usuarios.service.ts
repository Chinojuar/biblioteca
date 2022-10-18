import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  usuario:Usuario[] = [];

  constructor(private http:HttpClient) { }

  todosUsuarios():Observable<Usuario[]> {
    return this.http.get<Usuario[]>("http://localhost:9085/obtenerUsuarios");
  }
  
  traerUsuario(id: number) {
    const url = "http://localhost:9085/obtenerUsuario"
    return this.http.get<Usuario>(`${url}/${id}`)
  }
  
  crearUsuario(usuario: Usuario) {
    return this.http.post<Usuario>("http://localhost:9085/guardarUsuario",usuario);
  }
  
  actualizar(id: number, usuario: Usuario) {
    const url ="http://localhost:9085/actualizaUsuario"
    return this.http.put<Usuario>(`${url}/${id}`,usuario);
  }
  
  borrar(id: number) {
    const url ="http://localhost:9085/borrarUsuario"
    return this.http.delete<boolean>(`${url}/${id}`);
}
  
}
