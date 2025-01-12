import { Component,HostListener } from '@angular/core';
// Import PrimeNG modules
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {ChartModule} from "primeng/chart";
import {PanelModule} from "primeng/panel";
import {CardModule} from "primeng/card";
import {ProgressBarModule} from "primeng/progressbar";
import {ScrollPanelModule} from "primeng/scrollpanel";
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    SidebarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    AvatarModule,
    BadgeModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    ChartModule,
    PanelModule,
    CardModule,
    ProgressBarModule,
    ScrollPanelModule
],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  sidebarVisible: boolean = false;

  lineData: any;
  pieData: any;
  chartOptions: any;

  isDropdownOpen = false;

  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent){
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.relative');
    if(!clickedInside){
      this.isDropdownOpen = false;
    }
  }

  menuItems = [
    { label: 'Dashboard', link:'',  icon: 'pi pi-th-large', active: true },
    { label: 'Bookings', link:'admin-booking',  icon: 'pi pi-check-square' },
    { label: 'Units', link:'carUnit',  icon: 'pi pi-car' },
    { label: 'Calendar', link:'',  icon: 'pi pi-calendar' },
    { label: 'Clients', link:'users',  icon: 'pi pi-users' },
    { label: 'Drivers', link:'admin-drivers',  icon: 'pi pi-user' },
    { label: 'Financials', link:'finance-expense',  icon: 'pi pi-dollar' },
    { label: 'Tracking', link:'',  icon: 'pi pi-sitemap' },
    { label: 'Messages', link:'',  icon: 'pi pi-envelope', badge: 5 }
  ];

  constructor(private router: Router) {
    // Line Chart Data
    // this.lineData = {
    //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    //   datasets: [
    //     {
    //       label: 'Revenue',
    //       data: [6000, 7000, 8000, 12000, 18000, 15000, 13000, 19000],
    //       borderColor: '#42A5F5',
    //       fill: false
    //     }
    //   ]
    // };
    //
    // // Pie Chart Data
    // this.pieData = {
    //   labels: ['Hired', 'Pending', 'Cancelled'],
    //   datasets: [
    //     {
    //       data: [58, 24, 18],
    //       backgroundColor: ['#42A5F5', '#66BB6A', '#FF7043']
    //     }
    //   ]
    // };
    //
    // // Chart Options
    // this.chartOptions = {
    //   responsive: true,
    //   plugins: {
    //     legend: {
    //       display: true,
    //       position: 'top'
    //     }
    //   }
    // };

  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  logout() {
    if (confirm('Are you sure you want to log out?')) {
      localStorage.clear(); // Clear all localStorage (alternative approach)
      this.router.navigateByUrl('home'); // Redirect to login page
    }
  }

}
