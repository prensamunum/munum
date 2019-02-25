import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppRoutes} from './app.routing';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {ComponentsModule} from './components/components.module';
import {TableListModule} from './table-list/table-list.module';
import {UserLayoutComponent} from './layouts/user/user-layout.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

import {DelegationService} from './services/delegation/delegation.service';
import {DelegateService} from './services/delegate/delegate.service';
import {StaffService} from './services/staff/staff.service';
import {CookiesService} from './services/cookies/cookies.service';
import {CardComponent} from './card/card.component';
import {IntroComponent} from './user-page/intro/intro.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {TypographyComponent} from './typography/typography.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {CommitteesComponent} from './committees/committees.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        DashboardComponent,
        UserLayoutComponent,
        AdminLayoutComponent,
        UserProfileComponent,
        CardComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        TypographyComponent,
        UpgradeComponent,
        CommitteesComponent,
    ],
    imports: [
        RouterModule.forRoot(AppRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        ComponentsModule,
        TableListModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    providers: [
        DelegateService,
        StaffService,
        DelegationService,
        CookiesService
    ],
    exports: [RouterModule],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
