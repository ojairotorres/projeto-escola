// src/app/modalidades/modalidade.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modalidade } from './modalidade.model';
import { environment } from '../../environments/environment.development'; // Caminho corrigido e agora usando o arquivo de desenvolvimento

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  private apiUrl = `${environment.apiUrl}/modalidades`;

  constructor(private http: HttpClient) { }

  cadastrarModalidade(modalidade: Modalidade): Observable<Modalidade> {
    return this.http.post<Modalidade>(this.apiUrl, modalidade);
  }
}
