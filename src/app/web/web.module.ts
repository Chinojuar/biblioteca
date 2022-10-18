import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AdministracionComponent } from './paginas/administracion/administracion.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { PrestamosComponent } from './paginas/prestamos/prestamos.component';
import { RegistroLibrosComponent } from './paginas/administracion/registro-libros/registro-libros.component';
import { RegistroUsuariosComponent } from './paginas/usuarios/registro-usuarios/registro-usuarios.component';
import { WebComponent } from './web.component';
import { SideBarComponent } from './componentes/side-bar/side-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { WebRoutingModule } from './web-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from '../icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { VistaLibrosComponent } from './paginas/administracion/vista-libros/vista-libros.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HttpClientModule } from '@angular/common/http';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ListaUsuariosComponent } from './paginas/usuarios/lista-usuarios/lista-usuarios.component';
import { DetalleComponent } from './paginas/usuarios/detalle/detalle.component';
import { ReservasComponent } from './paginas/prestamos/reservas/reservas.component';
import { PrestamoComponent } from './paginas/prestamos/prestamo/prestamo.component';
import { DetalleLibroComponent } from './paginas/administracion/detalle-libro/detalle-libro.component';


@NgModule({
  declarations: [
    NavBarComponent,
    AdministracionComponent,
    UsuariosComponent,
    PrestamosComponent,
    RegistroLibrosComponent,
    RegistroUsuariosComponent,
    WebComponent,
    SideBarComponent,
    FooterComponent,
    VistaLibrosComponent,
    ListaUsuariosComponent,
    DetalleComponent,
    ReservasComponent,
    PrestamoComponent,
    DetalleLibroComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    NzCollapseModule,
    NzLayoutModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTableModule,
    NzPopconfirmModule,
    HttpClientModule
    
  
  ],
  providers: [
  ]
})
export class WebModule { }
