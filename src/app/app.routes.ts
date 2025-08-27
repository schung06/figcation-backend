import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { Calendar } from './pages/calendar/calendar';

export const routes: Routes = [
    { path: '', component: Dashboard }, // Home route
    { path: 'dashboard', component: Dashboard },
    { path: 'calendar', component: Calendar }
];
