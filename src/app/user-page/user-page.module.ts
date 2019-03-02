import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {LandComponent} from './land/land.component';

import {ComponentsRoutes} from './user-page.routing';
import {OnuComponent} from './onu/onu.component';
import {UserFooterComponent} from './user-footer/user-footer.component';
import {CrisisComponent} from './crisis/crisis.component';
import {EspecializadosComponent} from './especializados/especializados.component';
import {RegionalesComponent} from './regionales/regionales.component';
import {InterconexionComponent} from './interconexion/interconexion.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ComponentsRoutes),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        LandComponent,
        OnuComponent,
        UserFooterComponent,
        CrisisComponent,
        EspecializadosComponent,
        RegionalesComponent,
        InterconexionComponent, 
    ],
    exports: [
        LandComponent,
        UserFooterComponent
    ]
})
export class UserPageModule {
}
