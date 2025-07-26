// dashboard.component.ts

import { Component, ViewChild, AfterViewInit } from '@angular/core'; // Adicionado AfterViewInit
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavContainer,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatSidenav,
    MatSidenavContent,
    MatTooltipModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit { // Implementando AfterViewInit
  @ViewChild('sidenav') sidenav!: MatSidenav; // Referência ao MatSidenav no template

  isCollapsed = false; // Estado para controlar se o sidenav está colapsado

  menuItems = [
    { label: 'Alunos', icon: 'school', link: '/alunos' },
    { label: 'Professores', icon: 'person', link: '/professores' },
    { label: 'Modalidades', icon: 'sports_kabaddi', link: '/modalidades' },
    { label: 'Esportes', icon: 'fitness_center', link: '/esportes' },
    { label: 'Recebimentos', icon: 'attach_money', link: '/recebimentos' },
    { label: 'Gastos', icon: 'money_off', link: '/gastos' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // AfterViewInit é um Lifecycle Hook que garante que o ViewChild 'sidenav' esteja disponível
  ngAfterViewInit() {
    // Aqui você pode adicionar lógica que precisa do sidenav já renderizado, se necessário.
    // Por exemplo, se quisesse abrir ou fechar programaticamente ao iniciar.
    // this.sidenav.open(); // Exemplo
  }

  // Função para alternar o estado de colapso do sidenav
  toggleSidenav(): void {
    // Inverte o valor de isCollapsed. O CSS reagirá a essa mudança.
    this.isCollapsed = !this.isCollapsed;
    // Se você quisesse usar o método toggle nativo do MatSidenav (não necessário para o colapso de largura)
    // this.sidenav.toggle();
  }

  // Função para fazer logout, mantida como está
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
