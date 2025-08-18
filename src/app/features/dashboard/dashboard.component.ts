// dashboard.component.ts (Verifique se está exatamente assim)

import { Component, ViewChild, AfterViewInit } from '@angular/core';
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
export class DashboardComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isCollapsed = false;

  menuItems = [
    { label: 'Alunos', icon: 'school', link: '/dashboard/alunos' },
    { label: 'Professores', icon: 'person', link: '/dashboard/professores' },
    {
  label: 'Modalidades',
  icon: 'sports_kabaddi',
  link: null,
  children: [
    { label: 'Visualizar', link: 'modalidades/visualizar' },
    { label: 'Cadastrar', link: 'modalidades/cadastrar' }
  ],
  isSubmenuOpen: false
},
    { label: 'Esportes', icon: 'fitness_center', link: '/dashboard/esportes' },
    { label: 'Recebimentos', icon: 'attach_money', link: '/dashboard/recebimentos' },
    { label: 'Gastos', icon: 'money_off', link: '/dashboard/gastos' },
];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngAfterViewInit() { }

  toggleSidenav(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(item: any): void {
    if (item.children) {
      // Fecha todos os outros submenus
      this.menuItems.forEach(menuItem => {
        if (menuItem !== item && menuItem.isSubmenuOpen) {
          menuItem.isSubmenuOpen = false;
        }
      });
      // Alterna o submenu clicado
      item.isSubmenuOpen = !item.isSubmenuOpen;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
