import { Component } from '@angular/core';
// Import PrimeNG modules
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from '../users-table/users-table.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    UsersTableComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  sidebarVisible: boolean = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }  

}
