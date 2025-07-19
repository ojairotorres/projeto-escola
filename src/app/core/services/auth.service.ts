import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'usuarioLogado';

  login(email: string, senha: string): boolean {
    //simula validação simples
    if (email === 'admin@escola.com' && senha === '123456') {
      const usuario = { email };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getUser(): any {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }
}
