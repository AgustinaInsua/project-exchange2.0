import { Component, input, output, ViewChild } from '@angular/core';
import { Sidebar} from 'primeng/sidebar';
import { ImportsModule } from './imports';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ImportsModule, CommonModule, RouterModule],

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'dashboard',
      icon: 'pi pi-home',
      label: 'Dashboard',
    },
    {
      routeLink: 'products',
      icon: 'pi pi-box',
      label: 'Products',
    },
    {
      routeLink: 'pages',
      icon: 'pi pi-file',
      label: 'Pages',
    },
    {
      routeLink: 'settings',
      icon: 'pi pi-cog',
      label: 'Settings',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
