import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 👇 Ruta corregida
  private apiUrl = 'assets/data/usuarios.json';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        const users = data.usuarios || [];
        const found = users.find(
          (u: any) => u.email === email && u.password === password
        );
        if (found) {
          localStorage.setItem('auth_token', 'authenticated');
          return true;
        }
        return false;
      }),
      catchError(error => {
        console.error('Error en login:', error);
        return of(false);
      })
    );
  }

  register(user: { email: string; password: string }) {
    // ⚠️ Recuerda: en assets no se puede guardar, esto es solo ilustrativo
    console.warn('El registro no funciona con assets, necesitas un backend real.');
    return of(null);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
}