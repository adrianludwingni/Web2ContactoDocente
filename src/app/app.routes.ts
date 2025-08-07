import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'productos', component: ProductosComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];



