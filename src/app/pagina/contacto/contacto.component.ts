import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports:[FormsModule,CommonModule, ],
  standalone:true,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  // Campos del formulario
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  enviado: boolean = false;

  // Método que se ejecuta al enviar el formulario
  enviarFormulario(): void {
    if (!this.nombre || !this.email || !this.mensaje) {
      alert('Por favor completá todos los campos.');
      return;
    }

    // Acá podrías hacer un envío real con HTTPClient si tenés backend
    this.enviado = true;

    // Limpiar campos
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}
