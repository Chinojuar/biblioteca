import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Libro } from 'src/app/web/interfaces/Libro';
import { LibrosService } from 'src/app/web/servicios/libros.service';

@Component({
  selector: 'app-registro-libros',
  templateUrl: './registro-libros.component.html',
  styleUrls: ['./registro-libros.component.scss']
})
export class RegistroLibrosComponent implements OnInit {
  i = 0;
  libro: Libro = {
    id:0,
    titulo:'',
    autor:'',
    fecha_pub:'',
    descripcion:''
  };
  libros:Libro[] =[];

  errorForm = false;
  libroForm: FormGroup = new FormGroup({
    id: new FormControl(null, []),
    titulo: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    fecha_pub: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
  });

  constructor(private libroservice:LibrosService) { 
    }

  

  ngOnInit(): void {
  }

  enviarFormulario(libroForm: FormGroup): void {
    if (this.libroForm.valid) {
      this.libro = this.libroForm.value;
      this.libroservice.crearLibro(this.libro).subscribe((data) => {
        console.log(data)});;
    }
    libroForm.reset();
  }

}
