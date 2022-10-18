import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/web/servicios/libros.service';
import { Libro } from 'src/app/web/interfaces/Libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-libros',
  templateUrl: './vista-libros.component.html',
  styleUrls: ['./vista-libros.component.scss']
})
export class VistaLibrosComponent implements OnInit {
editId : number | null = null;;
  libros:Libro[] = [];

  constructor(private libroService:LibrosService, private router:Router) { 
    this.libroService.todosLibros().subscribe((data) => {
      this.libros = data;
      console.log(this.libros);
    });
 }

  ngOnInit() {
  }


  startEdit(id:number){
    this.editId = id;
   }
   
  stopEdit(libro:Libro): void {
    this.editId =  null;
    this.libroService.actualizar(libro.id,libro).subscribe((data) => {
      console.log(data);
    })
  }

  borrarLibro(id:number){
this.libros.splice(id,1);
this.libroService.borrar(id).subscribe(data =>{
  console.log(data)
})
  }

  verDetalle(id:number){
    this.router.navigate(['/detalle',id])
      }

}
