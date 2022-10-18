import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/web/interfaces/Usuario';
import { UsuariosService } from 'src/app/web/servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  editId : number | null = null;;
  usuarios:Usuario[] = [];

  constructor(private usuarioService:UsuariosService, private router:Router) { 
    this.usuarioService.todosUsuarios().subscribe((data) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }

  ngOnInit(): void {
  }

  startEdit(id:number){
    this.editId = id;
   }
   
  stopEdit(usuario:Usuario): void {
    this.editId =  null;
    this.usuarioService.actualizar(usuario.id,usuario).subscribe((data) => {
      console.log(data);
    })
  }

  borrarUsuario(id:number){
this.usuarios.splice(id,1);  
this.usuarioService.borrar(id).subscribe(data =>{
  console.log(data)
})
  }

  verPerfil(id:number){
this.router.navigate(['/perfil',id])
  }


}
