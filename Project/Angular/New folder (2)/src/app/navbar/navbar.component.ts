import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isDropdownOpen = false;
  isMenubarOpen = false;

  navItems = [
    {
      navName: "Admin",
      navLink : 'admin'
    },
    {
      navName: "Cars",
      navLink : 'car'
    },
    {
      navName: "Register",
      navLink : 'register'
    }
  ]

  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenubar(){
    this.isMenubarOpen = !this.isMenubarOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent){
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.relative');
    if(!clickedInside){
      this.isDropdownOpen = false;
    }
  }

}
