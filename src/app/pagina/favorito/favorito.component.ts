
import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../servicios/favorito.service';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../model/producto.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favorito.component.html',
  standalone: true,
  styleUrl:'./favorito.component.css',
  imports: [CommonModule,RouterModule,FormsModule],
})
export class FavoritosComponent implements OnInit {
  // Se define una propiedad para almacenar los productos marcados como favoritos
productosFavorito: Producto[] = [];

// Constructor del componente: se inyectan los servicios de favoritos y carrito
constructor(
  private favoritoService: FavoritoService,  // Servicio para manejar productos favoritos
  private carritoService: CarritoService      // Servicio para manejar el carrito de compras
) {}

// Método del ciclo de vida de Angular que se ejecuta al iniciar el componente
ngOnInit(): void {
  // Se suscribe al observable de favoritos del servicio
  // Cada vez que cambien los favoritos, se actualiza la lista local 'productosFavoritos'
  this.favoritoService.favorito$.subscribe((Productos) => {
    this.productosFavorito = Productos;
  });
}

// Método para eliminar un producto de la lista de favoritos
eliminarFavorito(productoId: number) {
  // Llama al servicio para eliminar el producto por su ID
  this.favoritoService.eliminarDeFavorito(productoId);
}

// Método para agregar un producto al carrito de compras

agregarAlCarrito(producto: Producto) {
  // Llama al servicio de carrito y le pasa el producto seleccionado
  this.carritoService.agregarAlcarrito(producto);
}

}