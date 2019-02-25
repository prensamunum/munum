import {Component, OnInit} from '@angular/core';
import {StaffService} from '../../services/staff/staff.service';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

// export const ROUTES: RouteInfo[] = [
//     {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
//     {path: 'delegates', title: 'Usuarios', icon: 'person', class: ''},
//     {path: 'delegations', title: 'Instituciones', icon: 'business', class: ''},
//     {path: 'staff', title: 'Staff', icon: 'people', class: ''},
//     {path: 'table-list', title: 'Matriz', icon: 'content_paste', class: ''},
//     {path: 'table-list', title: 'Cronometro', icon: 'watch_later', class: ''},
//     {path: 'table-list', title: 'QR', icon: 'camera', class: ''}
// ];

export const ROUTES_SG: RouteInfo[] = [
    // {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
    {path: 'delegates', title: 'Usuarios', icon: 'person', class: ''},
    {path: 'delegations', title: 'Instituciones', icon: 'business', class: ''},
    {path: 'staff', title: 'Staff', icon: 'people', class: ''},
    {path: 'committees', title: 'Comités', icon: 'content_paste', class: ''},
    {path: 'table-list', title: 'Matriz', icon: 'grid_on', class: ''},
    {path: 'table-list', title: 'Cronometro', icon: 'watch_later', class: ''},
    {path: 'card', title: 'Tarjeta Persona', icon: 'camera', class: ''},
    {path: 'upgrade', title: 'Descargar', icon: 'grade', class: ''}
];
export const ROUTES_STAFF: RouteInfo[] = [
    // {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
    {path: 'delegates', title: 'Usuarios', icon: 'person', class: ''},
    {path: 'card', title: 'Tarjeta Persona', icon: 'camera', class: ''}
];
export const ROUTES_PRESI: RouteInfo[] = [
    // {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
    {path: 'table-list', title: 'Matriz', icon: 'grid_on', class: ''},
    {path: 'table-list', title: 'Cronometro', icon: 'watch_later', class: ''}
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(private staffService: StaffService) {
    }

    ngOnInit() {
        // this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.staffService.staffType()
            .subscribe(

                staffType => {
                    console.log(staffType);
                    if (staffType === 'SG') {
                        this.menuItems = ROUTES_SG.filter(menuItem => menuItem);
                    } else if (staffType === 'STAFF') {
                        this.menuItems = ROUTES_STAFF.filter(menuItem => menuItem);
                    } else if (staffType === 'PRESI') {
                        this.menuItems = ROUTES_PRESI.filter(menuItem => menuItem);
                    }
                },
                err => {
                    console.log(err);
                });

    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
