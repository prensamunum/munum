import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {UserLayoutComponent} from './layouts/user/user-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CardComponent} from './card/card.component';
import {IntroComponent} from './user-page/intro/intro.component';
import {CommitteesComponent} from './committees/committees.component';
import {UpgradeComponent} from './upgrade/upgrade.component';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'land',
        pathMatch: 'full'
    },
    {
        path: 'intro',
        component: IntroComponent
    },
    {
        path: '',
        component: UserLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './credentials/credentials.module#CredentialsModule'
            },
            {
                path: '',
                loadChildren: './user-page/user-page.module#UserPageModule'
            }
        ]
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './components/components.module#ComponentsModule'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                loadChildren: './table-list/table-list.module#TableListModule'
            },
            {
                path: 'card',
                component: CardComponent
            },
            {
                path: 'committees',
                component: CommitteesComponent
            },
            {
                path: 'me',
                component: UserProfileComponent
            },
            {
                path: 'upgrade',
                component: UpgradeComponent
            },
        ]
    },
];
