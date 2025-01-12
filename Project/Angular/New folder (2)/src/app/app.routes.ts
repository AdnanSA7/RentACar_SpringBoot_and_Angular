import { Routes } from '@angular/router';
import {HomeLayoutComponent} from "./home-layout/home-layout.component";
import {RegisterComponent} from "./register/register.component";
import { BookCarComponent } from './book-car/book-car.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


export const routes: Routes = [
  {path: 'home', component: HomeLayoutComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home/register', component: RegisterComponent},
  {path:'book-car', component: BookCarComponent},
  {path:'home/admin', component: AdminDashboardComponent},
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
