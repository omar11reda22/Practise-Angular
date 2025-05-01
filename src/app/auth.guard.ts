import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Check if the user is authenticated
  const token = sessionStorage.getItem('token');
  if (!token) {
    // If not authenticated, redirect to the login page
    window.location.href = '/account/login';
    return false;
  }
  return true;
};
