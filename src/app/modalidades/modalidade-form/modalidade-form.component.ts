// src/app/modalidades/modalidade-form/modalidade-form.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ModalidadeService } from '../modalidade.service';
import { Modalidade } from '../modalidade.model'; // Caminho corrigido
import { Router } from '@angular/router';
// ... restante do código

@Component({
  selector: 'app-modalidade-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './modalidade-form.component.html',
  styleUrls: ['./modalidade-form.component.scss']
})
export class ModalidadeFormComponent implements OnInit {
  modalidadeForm!: FormGroup;

  generos = ['MASCULINO', 'FEMININO', 'MISTO', 'NAO_APLICAVEL'];
  niveis = ['INICIANTE', 'INTERMEDIARIO', 'AVANCADO', 'COMPETICAO', 'RECREATIVO'];

  constructor(
    private fb: FormBuilder,
    private modalidadeService: ModalidadeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.modalidadeForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: [''],
      modalidadeAtiva: [true, Validators.required],
      valorMensalidade: [0, [Validators.required, Validators.min(0)]],
      duracaoAulaMinutos: [60, [Validators.required, Validators.min(1)]],
      idadeMinima: [0, [Validators.required, Validators.min(0)]],
      idadeMaxima: [100, [Validators.required, Validators.min(0)]],
      capacidadeMaximaAlunos: [1, [Validators.required, Validators.min(1)]],
      generoPermitido: ['', Validators.required],
      nivel: ['', Validators.required],
      dataCriacao: [new Date().toISOString().split('T')[0], Validators.required],
    });
  }

  onSubmit(): void {
    if (this.modalidadeForm.valid) {
      const modalidade: Modalidade = this.modalidadeForm.value;
      this.modalidadeService.cadastrarModalidade(modalidade).subscribe({
        next: (novaModalidade) => {
          console.log('Modalidade cadastrada com sucesso!', novaModalidade);
          // Caminho de redirecionamento corrigido para uma rota filha
          this.router.navigate(['/dashboard/modalidades/visualizar']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar modalidade:', err);
          // Lógica para mostrar erro para o usuário
        }
      });
    }
  }}
