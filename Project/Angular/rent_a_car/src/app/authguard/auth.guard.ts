import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "../login/login.service";

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(LoginService);
  const router = inject(Router);

  // if (authService.isLoggedIn()) {
  //   return true;
  // }
  // else {
  //   router.navigate(['/login']);
  //   return false;
  // }

  // Check if the user is logged in
  if (!authService.isLoggedIn()) {
    router.navigate(['/login']); // Redirect to login if not logged in
    return false;
  }

  // Get the required roles from route data
  const requiredRole = route.data['role'];

  // Check the user's role
  const userRole = authService.getUserRole();
  if (requiredRole && userRole !== requiredRole) {
    router.navigate(['/login']); // Redirect if role doesn't match
    return false;
  }

  return true; // Allow access

};
