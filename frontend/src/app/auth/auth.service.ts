import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAtual: User = {
    firstName: 'Convidado', lastName: '', email: '', password: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  signup(user: User) {
    return this.http.post('http://localhost:3000/user/signup', user);
  }

  signin(user: { email: string, password: string}): Observable<void> {
    return this.http.post('http://localhost:3000/user/signin', user)
      .pipe(
        map((response: any) => {
          const { userExistente, token } = response;
          if (token) {
            localStorage.setItem('token', token);
            localStorage.setItem('currentUser', JSON.stringify(userExistente));
            this.usuarioAtual.firstName = userExistente.firstName;
            this.usuarioAtual.lastName = userExistente.lastName;
            console.log(this.usuarioAtual)
            return alert("Logado com sucesso!")
          }
          return alert("Erro.")
        })
      );
    }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioAtual');
    this.usuarioAtual = { firstName: 'Convidado', lastName: '', email: '', password: '' }
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    const token = this.getToken();
    return token !== null;
  }
}