import { Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ProductosComponent } from './pagina/productos/productos.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { FavoritosComponent } from './pagina/favorito/favorito.component';
import { PromosComponent } from './pagina/promos/promos.component';
import { QuienessomosComponent } from './pagina/quienessomos/quienessomos.component';
import { ComprasComponent } from './pagina/compras/compras.component';
import { RegistrarComponent } from './visual/registrar/registrar.component';
import { IniciarComponent } from './visual/iniciar/iniciar.component';

export const routes: Routes = [
    {path:'', redirectTo:'/inicio', pathMatch: 'full'},

    {path:'inicio',component:InicioComponent},

    {path:'contacto',component:ContactoComponent},
    
    {path:'producto',component:ProductosComponent},

    {path:'carrito',component:CarritoComponent},

    {path:'favorito',component:FavoritosComponent},

    {path:'promos',component:PromosComponent},

    {path:'quienessomos',component:QuienessomosComponent},

    {path:'compras',component:ComprasComponent},

    {path: 'registrar', component:RegistrarComponent},

    {path:'iniciar', component:IniciarComponent}
];
