import { Routes } from '@angular/router';
import {HomeLayoutComponent} from "./home-layout/home-layout.component";
import {RegisterComponent} from "./register/register.component";
import { BookCarComponent } from './book-car/book-car.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UsersTableComponent } from './users-table/users-table.component';
import {CarUnitsComponent} from "./car-units/car-units.component";
import {AdminBookingComponent} from "./admin-booking/admin-booking.component";
import {FinancialExpenseComponent} from "./financial-expense/financial-expense.component";
import {RentaltypesComponent} from "./rentaltypes/rentaltypes.component";
import {RentalProcessComponent} from "./rental-process/rental-process.component";
import { AdminDriversComponent } from './admin-drivers/admin-drivers.component';
import {ShowAvailableCarsComponent} from "./show-available-cars/show-available-cars.component";
import { LoginComponent } from './login/login.component';
import {authGuard} from "./authguard/auth.guard";
import {PaymentComponent} from "./payment/payment.component";
import {BookingSummaryComponent} from "./booking-summary/booking-summary.component";
import {CustomerBookingsComponent} from "./customer-bookings/customer-bookings.component";


export const routes: Routes = [
  {path: 'home', component: HomeLayoutComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'home/register', component: RegisterComponent},
  {path:'book-car', component: BookCarComponent},
  {path:'rentalServices', component: RentaltypesComponent},
  {path:'available-cars', component: ShowAvailableCarsComponent, canActivate: [authGuard], data: {role: 'CUSTOMER'}},
  {path:'booking-summary', component: BookingSummaryComponent},
  {path:'payment', component: PaymentComponent},
  {path:'home/customer-bookings', component: CustomerBookingsComponent},
  {path:'rentalProcess', component: RentalProcessComponent},
  {path:'admin', component: AdminDashboardComponent, canActivate: [authGuard], data: {role: 'ADMIN'},
    children: [
      {path:'carUnit', component: CarUnitsComponent},
      {path:'users', component: UsersTableComponent},
      {path:'admin-booking', component: AdminBookingComponent},
      {path:'finance-expense', component: FinancialExpenseComponent},
      {path:'admin-drivers', component: AdminDriversComponent}
    ]
  },

  // {
  //   path: 'admin',
  //   component: DefaultLayoutComponent,
  //   data: {
  //     title: 'Admin Home'
  //   },
    // children: [
    //   {
    //     path: 'dashboard',
    //     loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
    //   },
    //   {
    //     path: 'theme',
    //     loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
    //   },
    //   {
    //     path: 'base',
    //     loadChildren: () => import('./views/base/routes').then((m) => m.routes)
    //   },
    //   {
    //     path: 'buttons',
    //     loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
    //   },
    //   {
    //     path: 'forms',
    //     loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
    //   },
    //   {
    //     path: 'icons',
    //     loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
    //   },
    //   {
    //     path: 'notifications',
    //     loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
    //   },
    //   {
    //     path: 'widgets',
    //     loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
    //   },
    //   {
    //     path: 'charts',
    //     loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
    //   },
    //   {
    //     path: 'pages',
    //     loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
    //   }
    // ]
  // },
];
