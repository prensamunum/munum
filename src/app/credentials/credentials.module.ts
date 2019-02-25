import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ComponentsRoutes } from './credentials.routing';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DelegationComponent } from './delegation/delegation.component';
import { StaffRegistryComponent } from './staff-registry/staff-registry.component';
import { WrongComponent } from './wrong/wrong.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ComponentsRoutes),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        DelegationComponent,
        StaffRegistryComponent,
        WrongComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        DelegationComponent
    ]
})
export class CredentialsModule { }
