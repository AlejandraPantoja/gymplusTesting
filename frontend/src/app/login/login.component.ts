import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  email: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login(): void {
    const body = {
      email: this.username,
      contrasena: this.password
    };

    this.http.post('http://localhost:8000/login/', body, { withCredentials: true })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('userId', res.miembro_id);
          localStorage.setItem('userName', res.nombre);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.error = err.error?.error || 'Error al iniciar sesión.';
        }
      });
  }

  irARegistro(): void {
    this.router.navigate(['/registro']);
  }
}
