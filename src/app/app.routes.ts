import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [


{ path: 'home', component:HomeComponent },
{ path: 'nosotros', component:NosotrosComponent },
{ path: 'productos', component:ProductosComponent },


{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component:ErrorComponent },



];
