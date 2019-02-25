import {Component, OnInit, ElementRef} from '@angular/core';
import {ROUTES_SG, ROUTES_STAFF, ROUTES_PRESI} from '../sidebar/sidebar.component';
// import {ROUTES} from '../sidebar/sidebar.component';
import {Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {StaffService} from '../../services/staff/staff.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    err: any;

    constructor(location: Location, private staffService: StaffService, private element: ElementRef, public router: Router) {
        this.location = location;
        this.sidebarVisible = false;

        this.staffService.staffType()
            .subscribe(
                staffType => {
                    if (staffType === 'SG') {
                        this.listTitles = ROUTES_SG.filter(listTitle => listTitle);
                    } else if (staffType === 'STAFF') {
                        this.listTitles = ROUTES_STAFF.filter(listTitle => listTitle);
                    } else if (staffType === 'PRESI') {
                        this.listTitles = ROUTES_PRESI.filter(listTitle => listTitle);
                    }
                },
                err => {
                    console.log(err);
                });
    }

    ngOnInit() {
        // this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    logout() {
        this.staffService.logoutStaff()
            .subscribe(
                delegate => {
                    this.router.navigate(['land']);
                },
                err => {
                    this.err = err;
                });
    }
    me() {

        this.staffService.meStaff()
            .subscribe(
                delegate => {
                   this.router.navigate(['admin/me']);
                },
                err => {
                    this.err = err;
                });
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    // getTitle() {
    //     var titlee = this.location.prepareExternalUrl(this.location.path());
    //     if (titlee.charAt(0) === '#') {
    //         titlee = titlee.slice(2);
    //     }
    //     titlee = titlee.split('/').pop();
    //
    //     for (var item = 0; item < this.listTitles.length; item++) {
    //         if (this.listTitles[item].path === titlee) {
    //             return this.listTitles[item].title;
    //         }
    //     }
    //     return 'Dashboard';
    // }
}
