import {Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { DelegationComponent } from './delegation/delegation.component';
import {StaffRegistryComponent} from './staff-registry/staff-registry.component';
import {WrongComponent} from './wrong/wrong.component';


export const ComponentsRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'delegation',
        component: DelegationComponent
    },
    {
        path: 'staffRegistry',
        component: StaffRegistryComponent
    },
    {
        path: 'wrong',
        component: WrongComponent
    }
];
