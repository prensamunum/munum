import {Routes} from '@angular/router';

import { DelegatesComponent } from './delegates/delegates.component';
import { DelegationsComponent } from './delegations/delegations.component';
import { StaffComponent } from './staff/staff.component';
import { EditStaffComponent} from './edit-staff/edit-staff.component';
import { EditDelegatesComponent} from "./edit-delegates/edit-delegates.component";
import { EditDelegationsComponent} from "./edit-delegations/edit-delegations.component";


export const ComponentsRoutes: Routes = [
    {
        path: 'delegates',
        component: DelegatesComponent
    }, {
        path: 'delegations',
        component: DelegationsComponent
    },
    {
        path: 'staff',
        component: StaffComponent
    },
    {
        path: 'editStaff/:id',
        component: EditStaffComponent
    },
    {
        path: 'editDelegations/:id',
        component: EditDelegationsComponent
    },
    {
        path: 'editDelegates/:id',
        component: EditDelegatesComponent
    }
];
