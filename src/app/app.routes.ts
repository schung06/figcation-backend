import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { Calendar } from './pages/calendar/calendar';
import { Playground } from './pages/playground/playground';
import { Recommendations } from './pages/recommendations/recommendations/recommendations';

export const routes: Routes = [
    { path: '', component: Dashboard }, // Home route
    { path: 'dashboard', component: Dashboard },
    { path: 'calendar', component: Calendar },
    { path: 'recommendations', component: Recommendations },
    { path: 'playground', component: Playground }
];
