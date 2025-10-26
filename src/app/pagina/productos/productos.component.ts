import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../model/producto.model';
import { CommonModule, getLocaleMonthNames } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritoService } from '../../servicios/favorito.service';


@Component({
  selector: 'app-productos',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'carne',
      descripcion: 'carne picada,cebolla,huevo,especias',
      precio: 1000,
      imagen: '/assets/emp/car.jpg',
      disponibilidad: true,
      cantidad: 5,
      categoria:"carne",
      marca:"el mas grande",
    },
    {
      id: 2,
      nombre: 'verduras salteadas',
      descripcion: 'zanahoria,morrón,cebolla y zapallito',
      precio: 1000,
      imagen: '/assets/emp/ver.webp',
      disponibilidad: true,
      cantidad: 5,
      categoria:"verduras",
      marca:"el mas grande",
    },
    {
      id: 3,
      nombre: 'humita',
      descripcion: 'choclo,cebolla,morrón,especias',
      precio: 1000,
      imagen: '/assets/emp/hum.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"verduras",
      marca:"el mas grande",
    },
    {
      id: 4,
      nombre: 'pollo',
      descripcion: 'pollo,zanahoria,especias',
      precio: 1000,
      imagen: '/assets/emp/pol.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"pollo",
      marca:"el mas grande",
    },
    {
      id: 5,
      nombre: 'jamón y queso',
      descripcion: 'lonjas de jamón cocido y queso mozzarella',
      precio: 1000,
      imagen: '/assets/emp/jyq.avif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"clasicas",
      marca:"el mas grande",
    },
    {
      id: 6,
      nombre: 'queso y cebolla',
      descripcion: 'cebolla dorada y queso cremoso ',
      precio: 1000,
      imagen: '/assets/emp/qyc.webp',
      disponibilidad: true,
      cantidad: 5,
      categoria:"verduras",
      marca:"el mas grande",
    },
    {
      id: 7,
      nombre: 'caprese exprés',
      descripcion: 'tomate en cubitos,albahaca fresca y mozzarella',
      precio: 1000,
      imagen: '/assets/emp/capre.webp',
      disponibilidad: true,
      cantidad: 5,
      categoria:"verduras",
      marca:"el mas grande",
    },
    {
      id: 8,
      nombre: 'espinaca y ricota',
      descripcion: 'espinaca blanqueada y picada,ricota,sal y pimienta',
      precio: 1000,
      imagen: '/assets/emp/eyr.jpg',
      disponibilidad: true,
      cantidad: 5,
      categoria:"verduras",
      marca:"el mas grande",
    },
    {
      id: 9,
      nombre: 'atún con huevo',
      descripcion: 'lata de atún al natural,huevo duro picado y aceitunas',
      precio: 1000,
      imagen: '/assets/emp/ayh.jpg',
      disponibilidad: true,
      cantidad: 5,
      categoria:"carne",
      marca:"el mas grande",
    },
    {
      id: 10,
      nombre: 'choclo y queso',
      descripcion: 'granitos de choclo mezclados con queso cremoso',
      precio: 1000,
      imagen: '/assets/emp/cyq.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"verduras",
      marca:"el mas grande",
    },
    {
      id: 11,
      nombre: 'salchicha y queso',
      descripcion: 'rodajas de salchicha y queso fresco',
      precio: 1000,
      imagen: '/assets/emp/syq.jpg',
      disponibilidad: true,
      cantidad: 5,
      categoria:"carne",
      marca:"el mas grande",
    },
    {
      id: 12,
      nombre: 'queso azul y nuez',
      descripcion: 'queso azul y nuez',
      precio: 1000,
      imagen: '/assets/emp/qayn.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"vegetarianas",
      marca:"el mas grande",
    },
    {
      id: 13,
      nombre: 'dulce de membrillo',
      descripcion: 'membrillo blandito fundido',
      precio: 1000,
      imagen: '/assets/emp/memb.jpg',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 14,
      nombre: 'morcilla con manzana ',
      descripcion: 'morcilla  acompañada de manzana',
      precio: 1000,
      imagen: '/assets/emp/mym.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 15,
      nombre: 'cebolla y chedar',
      descripcion: 'cebolla dorada y queso cheddar rallado',
      precio: 1000,
      imagen: '/assets/emp/ccyc.webp',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 15,
      nombre: 'jamón, queso y morrón',
      descripcion: 'perfume  y color',
      precio: 1000,
      imagen: '/assets/emp/jqym.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 17,
      nombre: 'Panceta y ciruela seca',
      descripcion: 'contraste salado-dulce',
      precio: 1000,
      imagen: '/assets/emp/pcc.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 18,
      nombre: 'morrón asado y huevo  ',
      descripcion: 'relleno aireado y sabroso',
      precio: 1000,
      imagen: '/assets/emp/myhr.jpg',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 19,
      nombre: 'calabaza y ricota',
      descripcion: 'puré de calabaza especiado y ricota liviana',
      precio: 1000,
      imagen: '/assets/emp/cyr.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 20,
      nombre: 'champiñones y provolone',
      descripcion: 'hongos salteados con provolone rallado',
      precio: 1000,
      imagen: '/assets/emp/cyp.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 21,
      nombre: 'chorizo col. con muzzarella',
      descripcion: 'picor leve del chorizo y mozzarella fundida',
      precio: 1000,
      imagen: '/assets/emp/ccym.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 22,
      nombre: 'puerro rehogado y queso',
      descripcion: 'puerros tiernos y mantecosos con queso suave',
      precio: 1000,
      imagen: '/assets/emp/pyq.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 23,
      nombre: 'lentejas al curry suave',
      descripcion: 'lentejas cocidas con cebolla y un poco de curry',
      precio: 1000,
      imagen: '/assets/emp/lac.jpg',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 24,
      nombre: 'tuna-melt',
      descripcion: 'atún con queso rallado y mayonesa',
      precio: 1000,
      imagen: '/assets/emp/t-m.webp',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 25,
      nombre: 'carne picante',
      descripcion: 'carne molida con ají molido y comino',
      precio: 1000,
      imagen: '/assets/emp/cp.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 26,
      nombre: 'berenjena asada y queso',
      descripcion: 'berenjena ahumada combinada con feta salado',
      precio: 1000,
      imagen: '/assets/emp/bayqf.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 27,
      nombre: 'queso tybo y jalapeño',
      descripcion: 'queso semiduro derretido y rodajas de jalapeño ',
      precio: 1000,
      imagen: '/assets/emp/qtyj.jpg',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    {
      id: 28,
      nombre: 'dulce de leche y banana',
      descripcion: 'dulce de leche y banana caramelizada',
      precio: 1000,
      imagen: '/assets/emp/ddlyb.avif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
   
   /* {
      {
      id: 14,
      nombre: 'bondiola desmechada BBQ',
      descripcion: 'cerdo jugoso con salsa barbacoa',
      precio: 1000,
      imagen: '/assets/emp/bdbbq.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },id: 30,
      nombre: 'pollo, champiñón y crema',
      descripcion: 'pollo y champiñones ligados con un chorrito de crema',
      precio: 1000,
      imagen: '/assets/emp/pcc.jfif',
      disponibilidad: true,
      cantidad: 5,
      categoria:"de primera",
      marca:"el mas grande",
    },
    */

  ]
  //nombre y tipo parámetro. solo se puede usar en este componente
  constructor(private carritoService: CarritoService, private favoritoService: FavoritoService) { }


  //método para agregar un producto al carrito
  agregarProducto(productos: Producto) {
    this.carritoService.agregarAlcarrito(productos)
    alert('producto agregado al carrito')

  }
  agregarAF(productos: Producto) {
    // Llama al método del servicio para agregar el producto favoritos
    this.favoritoService.agregarAFavoritos(productos);
    alert('producto agregado a favoritos')
    // Muestra un mensaje de confirmación al usuario    
  }


  
  agregar(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
    alert('producto agregado al carrito') 
  }


  agregarAfavorito(producto: Producto) {
    this.favoritoService.agregarAFavoritos(producto)
    alert('producto agregado a favorito')
  }


  searchTerm: string ='';

  selectedCategory: string ='';
  selectedBrand: string ='';
  minprecio: number | null = null;
  maxprecio:number | null = null;

  get categories(): string[]{
    return [...new Set(this.productos.map(p=>p.categoria))]
  }
  get marca(): string[]{
    return[...new Set(this.productos.map(p=>p.marca))]
  }

  onSearch(event:Event):void{
    event.preventDefault();
  }

  resetFilters():void{
    this.searchTerm = '';
    this.selectedCategory = '';
    this.selectedBrand = '';
    this.minprecio = null;
    this.maxprecio = null;
  }

  get filteredProducts():Producto[]{
    return this.productos.filter(p => 
    (this.searchTerm === '' || p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
    (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
    (this.selectedBrand === '' || p.marca === this.selectedBrand) &&
    (this.minprecio === null || p.precio>=this.minprecio ) &&
    (this.maxprecio === null || p.precio <= this.maxprecio)
    )
  }
}

