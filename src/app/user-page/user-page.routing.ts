import {Routes} from '@angular/router';

import {LandComponent} from './land/land.component';
import {OnuComponent} from './onu/onu.component';
import {CrisisComponent} from './crisis/crisis.component';
import {EspecializadosComponent} from './especializados/especializados.component';
import {RegionalesComponent} from './regionales/regionales.component';
import {UserFooterComponent} from './user-footer/user-footer.component';
import {InterconexionComponent} from './interconexion/interconexion.component';


export const ComponentsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'land',
                component: LandComponent
            },
            {
                path: 'onu',
                component: OnuComponent
            },
            {
                path: 'crisis',
                component: CrisisComponent
            },
            {
                path: 'especializados',
                component: EspecializadosComponent
            },
            {
                path: 'regionales',
                component: RegionalesComponent
            },
            {
                path: 'interconexion',
                component: InterconexionComponent
            },
            {
                path: 'user-footer',
                component: UserFooterComponent
            },
        ]
    },

    // {
    //     path: '',
    //     children: [{
    //         path: 'intro',
    //         component: IntroComponent
    //     }]
    // },
];
