import {Component, HostListener, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {AvatarModule} from "primeng/avatar";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive,
    AvatarModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isDropdownOpen = false;
  isMenubarOpen = false;
  isScrolled = false;
  isLoggedIn = false; // Track login state

  navItems = [
    {
      navName: "Bookings",
      navLink: 'customer-bookings'
    },
    {
      navName: "Cars",
      navLink: 'car'
    },
    {
      navName: "Register",
      navLink: 'register'
    }
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // Check if user is logged in by looking for authToken in localStorage
    this.isLoggedIn = !!localStorage.getItem('authToken');
    }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Change the threshold as needed
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMenubar() {
    this.isMenubarOpen = !this.isMenubarOpen;
  }

  // @HostListener('document:click', ['$event'])
  // onClick(event: MouseEvent) {
  //   const target = event.target as HTMLElement;
  //   const clickedInside = target.closest('.relative');
  //   if (!clickedInside) {
  //     this.isDropdownOpen = false;
  //   }
  // }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Check if the click is inside the dropdown menu or the dropdown toggle button
    const dropdownElement = document.querySelector('.relative'); // Adjust to your dropdown's container class
    const clickedInside = dropdownElement?.contains(target);

    if (!clickedInside) {
      this.isDropdownOpen = false; // Close dropdown if clicked outside
    }
  }

  logout() {
    if (confirm('Are you sure you want to log out?')) {
      localStorage.clear(); // Clear all localStorage (alternative approach)
      this.isLoggedIn = false; // Update login state
      this.isDropdownOpen = false;
      this.router.navigateByUrl('home'); // Redirect to login page
    }
  }
}
