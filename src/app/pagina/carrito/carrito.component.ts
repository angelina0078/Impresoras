import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: { producto: Producto; cantidad: number }[] = []
  constructor(private carritoService: CarritoService,private router:Router) { }
//ejecuta la lógica
  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((producto) => {
      this.productosEnCarrito = producto;
    })
  }
  agregarCantidad(index: number) {
    this.productosEnCarrito[index].cantidad++
  }

  quitarCantidad(index: number) {
    if (this.productosEnCarrito[index].cantidad > 1) {
      this.productosEnCarrito[index].cantidad--;
    }
  }
  eliminarProducto(productoId: number) {
    this.carritoService.eliminarDelCarrito(productoId)
  }
  vaciarCarrito() {
    this.carritoService.vaciarCarrito()
  }

  realizarCompra() {
    alert('compra realizada')
    this.vaciarCarrito()
  }

    //navega al formulario de compra
    irAFormulario(){
      //redirige al usuario a la ruta '/compra', donde se me encuentra el formulario
      this.router.navigate(['/compras'])
    }


    //calcular el total del carrito de compras
    calcularTotal():number{
      //recorre el arreglo de productos en el carrito y suma el resultado de cada item
      return this.productosEnCarrito.reduce((total,item)=>{
        return total + item.producto.precio*item.cantidad
      },0); 
    }


 
}



