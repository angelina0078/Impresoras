import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule,NgFor],
  templateUrl: './inicio.component.html',
  styleUrls:[ './inicio.component.css'],
  standalone:true
})
export class InicioComponent {

}
