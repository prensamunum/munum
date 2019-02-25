import {Routes} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';


export const ComponentsRoutes: Routes = [
    {
        path: 'footer',
        component: FooterComponent
    },
    {
        path: 'sidebar',
        component: SidebarComponent
    },
    {
        path: 'narbar',
        component: NavbarComponent
    }
];
