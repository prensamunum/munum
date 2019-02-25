import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ComponentsRoutes } from './table-list.routing';

import { DelegatesComponent } from './delegates/delegates.component';
import { DelegationsComponent } from './delegations/delegations.component';
import { StaffComponent } from './staff/staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { EditDelegationsComponent } from './edit-delegations/edit-delegations.component';
import { EditDelegatesComponent } from './edit-delegates/edit-delegates.component';

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
        DelegatesComponent,
        DelegationsComponent,
        StaffComponent,
        EditStaffComponent,
        EditDelegationsComponent,
        EditDelegatesComponent,
    ],
    exports: [
        DelegatesComponent,
        DelegationsComponent,
        StaffComponent,
    ]
})
export class TableListModule { }
