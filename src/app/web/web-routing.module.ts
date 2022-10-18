import { WebComponent } from './web.component';
import { RegistroUsuariosComponent } from './paginas/usuarios/registro-usuarios/registro-usuarios.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistroLibrosComponent} from './paginas/administracion/registro-libros/registro-libros.component'
import { VistaLibrosComponent } from './paginas/administracion/vista-libros/vista-libros.component';
import { ListaUsuariosComponent } from './paginas/usuarios/lista-usuarios/lista-usuarios.component';
import { DetalleComponent } from './paginas/usuarios/detalle/detalle.component';
import { ReservasComponent } from './paginas/prestamos/reservas/reservas.component';
import { PrestamoComponent } from './paginas/prestamos/prestamo/prestamo.component';
import { DetalleLibroComponent } from './paginas/administracion/detalle-libro/detalle-libro.component';

const routes: Routes = [
  {
path:'',
component:WebComponent,
children: [
    {
      path:'registro-libros',
      component:RegistroLibrosComponent
  },
  {
    path:'vista-libros',
    component:VistaLibrosComponent
},
  {
    path:'registro-usuarios',
    component:RegistroUsuariosComponent
  },
  {
    path: 'lista-usuarios',
    component:ListaUsuariosComponent
  },
  {
    path: 'perfil/:id',
    component: DetalleComponent
  },
  {
    path:'reservas',
    component:ReservasComponent
  },
  {
    path:'prestamo',
    component:PrestamoComponent
  },
  {
    path:'detalle/:id',
    component:DetalleLibroComponent
  }
  
],
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
