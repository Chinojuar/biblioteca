import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/web/servicios/usuarios.service';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/web/interfaces/Usuario';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss']
})
export class RegistroUsuariosComponent implements OnInit {
  i = 0;
  usuario: Usuario = {
    id:0,
    nombre:'',
    apellido:'',
    edad:0,
  };

  errorForm = false;
  usuarioForm: FormGroup = new FormGroup({
    id: new FormControl(null, []),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    edad: new FormControl(null, [Validators.required]),
  });



  constructor(private usuarioService:UsuariosService) { }

  ngOnInit(): void {
  }

  enviarFormulario(usuarioForm: FormGroup): void {
    if (this.usuarioForm.valid) {
      this.usuario = this.usuarioForm.value;
      this.usuarioService.crearUsuario(this.usuario).subscribe((data) => {
        console.log(data)});
    }
    usuarioForm.reset();
  }
}
