import { Component, OnInit } from '@angular/core';
import { PrestamosService } from "../../../servicios/prestamos.service";
import { Prestamo, ReservasActivas } from 'src/app/web/interfaces/prestamo';
import { Usuario } from 'src/app/web/interfaces/Usuario';
import { LibrosService } from 'src/app/web/servicios/libros.service';
import { UsuariosService } from 'src/app/web/servicios/usuarios.service';
import { Libro } from 'src/app/web/interfaces/Libro';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.scss']
})
export class PrestamoComponent implements OnInit {
prestamos:Prestamo[]=[];
usuario:Usuario[] =[];
Libros:Libro[] =[];
reservaActiva:ReservasActivas={
  id:0,
  titulo:"",
  nombre:""
};
reservasActivas:ReservasActivas[] = [];

  constructor(private prestamoService: PrestamosService,private usuariosService:UsuariosService, private libroService:LibrosService) { }

  ngOnInit(): void {
    this.prestamoService.todosPrestamos()
    .subscribe(prestamos => {
      this.prestamos=prestamos;
      for (let i = 0; i < this.prestamos.length; i++) {
       this.libroService.traerLibro(this.prestamos[i].id_libro).subscribe(libro=>{
        this.reservaActiva.titulo = libro.titulo; 
       })
       this.usuariosService.traerUsuario(this.prestamos[i].id_usuario).subscribe(usuario=>{
this.reservaActiva.nombre = usuario.nombre;
       })
       this.reservaActiva.id = this.prestamos[i].id;
        this.reservasActivas.push(this.reservaActiva)
      }
      console.log(this.reservasActivas);
    });
  }

regresar(id:number){
  this.prestamoService.borrar(id).subscribe(data =>{
    console.log(data);
  })
}

}
