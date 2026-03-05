import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;
  cargando = false;
  errorLogin = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formLogin.invalid) return;

    this.cargando = true;
    this.errorLogin = false;

    const { email, password } = this.formLogin.value;

    this.authService.login(email, password).subscribe((success: boolean) => {
      this.cargando = false;
      if (success) {
        this.router.navigate(['/productos']);
      } else {
        this.errorLogin = true;
      }
    });
  }
}