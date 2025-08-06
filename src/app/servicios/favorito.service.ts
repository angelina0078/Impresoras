
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  // Se declara un Subject de tipo BehaviorSubject que almacena un array de productos.
// Inicialmente está vacío ([]). Es privado para que no se acceda directamente desde otros componentes.
private favoritoSubject = new BehaviorSubject<Producto[]>([]);

// Se expone el observable para que otros componentes puedan suscribirse y reaccionar a los cambios.
favorito$ = this.favoritoSubject.asObservable();

// Método para agregar un producto a la lista de favoritos
agregarAFavoritos(producto: Producto) {
  // Se obtiene la lista actual de favoritos
  const favorito = this.favoritoSubject.getValue();

  // Se verifica si el producto ya existe en la lista (por ID)
  const existe = favorito.find(p => p.id === producto.id);

  // Si el producto no está en la lista, se agrega y se actualiza el estado del BehaviorSubject
  if (!existe) {
    this.favoritoSubject.next([...favorito, producto]);
  }
}

// Método para eliminar un producto de la lista de favoritos según su ID
eliminarDeFavorito(productoId: number) {
  // Se filtran los productos dejando afuera el que tiene el ID que se quiere eliminar
  const actualizados = this.favoritoSubject.getValue().filter(p => p.id !== productoId);

  // Se actualiza el BehaviorSubject con la nueva lista de favoritos
  this.favoritoSubject.next(actualizados);
}

// Método para vaciar completamente la lista de favoritos
vaciarFavorito() {
  // Se actualiza el BehaviorSubject con un array vacío
  this.favoritoSubject.next([]);
}
}