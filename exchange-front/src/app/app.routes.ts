import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'dashboard',
        pathMatch: 'full'
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        title:'Dashboard'
    },
    {
        path:'login',
        component:LoginComponent,
        title:'Login'
    }
];
