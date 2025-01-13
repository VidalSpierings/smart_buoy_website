import { Routes } from '@angular/router';
import { SignInUpComponent } from './components/roots/sign-in-up/sign-in-up.component';
import { DashboardComponent } from './components/roots/dashboard/dashboard.component';
import { SchermbezoekenComponent } from './components/roots/schermbezoeken/schermbezoeken.component';
import { SensorenComponent } from './components/roots/sensoren/sensoren.component';
import { GrenswaardenComponent } from './components/roots/grenswaarden/grenswaarden.component';
import { MetingenComponent } from './components/roots/metingen/metingen.component';
import { QueriesUitvoerenComponent } from './components/roots/queries-uitvoeren/queries-uitvoeren.component';

const routes: Routes = [{

    path: '',
    component: SignInUpComponent,
    title: 'Account Sign in/up'

    },
    {
        path: 'home',
        component: DashboardComponent,
        title: 'Home'
    },
    {
        path: 'schermbezoeken',
        component: SchermbezoekenComponent,
        title: 'Schermbezoeken'
    },
    {
        path: 'sensoren',
        component: SensorenComponent,
        title: 'Sensoren'
    },
    {
        path: 'grenswaarden',
        component: GrenswaardenComponent,
        title: 'Grenswaarden'
    },
    {
        path: 'metingen',
        component: MetingenComponent,
        title: 'Metingen'
    },
    {
        path: 'queries-uitvoeren',
        component: QueriesUitvoerenComponent,
        title: 'Queries uitvoeren'
    }
];

export default routes;
