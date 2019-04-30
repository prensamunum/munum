webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/components.module": [
		"./src/app/components/components.module.ts"
	],
	"./credentials/credentials.module": [
		"./src/app/credentials/credentials.module.ts",
		"credentials.module",
		"common"
	],
	"./table-list/table-list.module": [
		"./src/app/table-list/table-list.module.ts"
	],
	"./user-page/user-page.module": [
		"./src/app/user-page/user-page.module.ts",
		"user-page.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!--<app-user-footer></app-user-footer>-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(elRef, router) {
        this.elRef = elRef;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            body.classList.add('perfect-scrollbar-on');
        }
        else {
            body.classList.add('perfect-scrollbar-off');
        }
        $.material.init();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__table_list_table_list_module__ = __webpack_require__("./src/app/table-list/table-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_user_user_layout_component__ = __webpack_require__("./src/app/layouts/user/user-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_admin_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_delegation_delegation_service__ = __webpack_require__("./src/app/services/delegation/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_delegate_delegate_service__ = __webpack_require__("./src/app/services/delegate/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_staff_staff_service__ = __webpack_require__("./src/app/services/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_cookies_cookies_service__ = __webpack_require__("./src/app/services/cookies/cookies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__card_card_component__ = __webpack_require__("./src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_page_intro_intro_component__ = __webpack_require__("./src/app/user-page/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__icons_icons_component__ = __webpack_require__("./src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__maps_maps_component__ = __webpack_require__("./src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__notifications_notifications_component__ = __webpack_require__("./src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__typography_typography_component__ = __webpack_require__("./src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__committees_committees_component__ = __webpack_require__("./src/app/committees/committees.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_21__user_page_intro_intro_component__["a" /* IntroComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layouts_user_user_layout_component__["a" /* UserLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_26__upgrade_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__committees_committees_component__["a" /* CommitteesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["ComponentsModule"],
                __WEBPACK_IMPORTED_MODULE_11__table_list_table_list_module__["TableListModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_delegate_delegate_service__["a" /* DelegateService */],
                __WEBPACK_IMPORTED_MODULE_18__services_staff_staff_service__["a" /* StaffService */],
                __WEBPACK_IMPORTED_MODULE_16__services_delegation_delegation_service__["a" /* DelegationService */],
                __WEBPACK_IMPORTED_MODULE_19__services_cookies_cookies_service__["a" /* CookiesService */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_user_user_layout_component__ = __webpack_require__("./src/app/layouts/user/user-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card_component__ = __webpack_require__("./src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_page_intro_intro_component__ = __webpack_require__("./src/app/user-page/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__committees_committees_component__ = __webpack_require__("./src/app/committees/committees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upgrade_upgrade_component__ = __webpack_require__("./src/app/upgrade/upgrade.component.ts");








var AppRoutes = [
    {
        path: '',
        redirectTo: 'land',
        pathMatch: 'full'
    },
    {
        path: 'intro',
        component: __WEBPACK_IMPORTED_MODULE_5__user_page_intro_intro_component__["a" /* IntroComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_user_user_layout_component__["a" /* UserLayoutComponent */],
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
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: './components/components.module#ComponentsModule'
            },
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]
            },
            {
                path: '',
                loadChildren: './table-list/table-list.module#TableListModule'
            },
            {
                path: 'card',
                component: __WEBPACK_IMPORTED_MODULE_4__card_card_component__["a" /* CardComponent */]
            },
            {
                path: 'committees',
                component: __WEBPACK_IMPORTED_MODULE_6__committees_committees_component__["a" /* CommitteesComponent */]
            },
            {
                path: 'me',
                component: __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__["a" /* UserProfileComponent */]
            },
            {
                path: 'upgrade',
                component: __WEBPACK_IMPORTED_MODULE_7__upgrade_upgrade_component__["a" /* UpgradeComponent */]
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/card/card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <div *ngIf=\"!card\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-offset-3 col-lg-6 col-md-12\">\r\n                    <div class=\"btn card\">\r\n                        <div class=\"card-content\">\r\n                            <div class=\"text-center\">\r\n                                Escanerar codigo QR\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"text-center\">\r\n                    o\r\n                </div>\r\n            </div>\r\n\r\n            <br>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-offset-3 col-lg-6 col-md-12\">\r\n                    <form class=\"nav-align-center\" role=\"search\" (submit)=\"onSubmit()\">\r\n                        <div >\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Buscar ID\" [(ngModel)]=\"delegate.id\" name=\"id\">\r\n                            <span class=\"material-input\"></span>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                            <i class=\"material-icons\">search</i>\r\n                            <div class=\"ripple-container\"></div>\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"card\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-offset-3 col-lg-6 col-md-12\">\r\n                    <h2 class=\"text-center\">\r\n                        {{delegate.name}} {{delegate.lastName}}\r\n                    </h2>\r\n                    <h5 class=\"text-center\">\r\n                        {{delegate.idType}} {{delegate.idNumber}}\r\n                    </h5>\r\n                </div>\r\n                <br>\r\n                <br>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"col-md-offset-1 col-md-2\">\r\n                    <div class=\"btn btn-default\" (click)=\"regresar()\">\r\n                        <div>atras</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-6 col-md-12\">\r\n                    <div class=\"card card-nav-tabs\">\r\n                        <div class=\"card-header\" data-background-color=\"purple\">\r\n                            <div class=\"nav-tabs-navigation\">\r\n                                <div class=\"nav-tabs-wrapper\">\r\n                                    <span class=\"nav-tabs-title\">Tareas:</span>\r\n                                    <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                                        <li class=\"active\">\r\n                                            <a href=\"#kit\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">book</i>\r\n                                                Kit\r\n                                                <div class=\"ripple-container\"></div>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"\">\r\n                                            <a href=\"#break\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">free_breakfast\r\n                                                </i>\r\n                                                Refigerios\r\n                                                <div class=\"ripple-container\"></div>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"\">\r\n                                            <a href=\"#dinner\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">restaurant</i>\r\n                                                Almuerozos\r\n                                                <div class=\"ripple-container\"></div>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"\">\r\n                                            <a href=\"#list\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">check_circle</i>\r\n                                                Lista\r\n                                                <div class=\"ripple-container\"></div>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-content\">\r\n                            <div class=\"tab-content\">\r\n\r\n                                <div class=\"tab-pane active\" id=\"kit\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Kit delegado</td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"break\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 1</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 2</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 3</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 4</td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"dinner\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 1</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 2</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 3</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 4</td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"list\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 1</td>\r\n                                        </tr><tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 2</td>\r\n                                        </tr><tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 3</td>\r\n                                        </tr><tr>\r\n                                            <td>\r\n                                                <div class=\"checkbox\">\r\n                                                    <label>\r\n                                                        <input type=\"checkbox\" name=\"optionsCheckboxes\" >\r\n                                                    </label>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>Dia 4</td>\r\n                                        </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_delegate_delegate_service__ = __webpack_require__("./src/app/services/delegate/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = /** @class */ (function () {
    function CardComponent(delegateService) {
        this.delegateService = delegateService;
        this.delegate = {
            id: '',
            name: '',
            lastName: '',
            idNumber: '',
            idType: ''
        };
        this.card = false;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.onSubmit = function () {
        var _this = this;
        this.delegateService.findOneDelegate(this.delegate)
            .subscribe(function (delegateRes) {
            console.log(delegateRes);
            _this.delegate = delegateRes;
            _this.card = true;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    CardComponent.prototype.regresar = function () {
        this.card = !this.card;
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/card/card.component.html"),
            styles: [__webpack_require__("./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_delegate_delegate_service__["a" /* DelegateService */]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/committees/committees.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/committees/committees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-offset-4 col-md-4\">\r\n                    <select class=\"form-control formFormat\" [(ngModel)]=\"committee.committees\" name=\"committee\" (change)=\"delegatesByComittee()\">\r\n                        <option value=\"\" disabled=\"true\">Seleccione un comité</option>\r\n                        <option value=\"1\">Consejo de Seguridad</option>\r\n                        <option value=\"2\">Comité de Estado Mayor</option>\r\n                        <option value=\"3\">Human Rights Council</option>\r\n                        <option value=\"4\">CPH - Manama 2018</option>\r\n                        <option value=\"5\">Comisión de Derecho Internacional</option>\r\n                        <option value=\"6\">Senado de la República</option>\r\n                        <option value=\"7\">Mesa de Astaná</option>\r\n                        <option value=\"8\">Consorcio Munidla de prensa</option>\r\n                        <option value=\"9\">GAC - Juego de Tronos</option>\r\n                        <option value=\"10\">GAE - Col 2018</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <h4 class=\"title text-white\"><b>Usuarios</b></h4>\r\n                            <p class=\"category\"><b>Here is a subtitle for this table</b></p>\r\n                        </div>\r\n                        <div class=\"card-content table-responsive\">\r\n                            <table class=\"table\">\r\n                                <thead class=\"text-danger\">\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>Nombre</th>\r\n                                    <th>Id</th>\r\n                                    <th>Institucion</th>\r\n                                    <th>Codigo</th>\r\n                                    <th>Opciones</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr *ngFor=\"let delegate of delegates; let i = index\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{delegate.lastName}}, {{delegate.name}}</td>\r\n                                    <td>{{delegate.idType}} {{delegate.idNumber}}</td>\r\n                                    <td>{{delegate.institution}}</td>\r\n                                    <td class=\"text-danger\">{{delegate.code}}</td>\r\n                                    <td class=\"td-actions text-right\">\r\n                                        <button class=\"btn btn-primary btn-simple btn-xs\" rel=\"tooltip\"\r\n                                                title=\"Edit Task\" type=\"button\" (click)=\"editView(delegate._id)\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                                <!--<div *ngIf='delegates === 0'>No existen usuarios registrados</div>-->\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/committees/committees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommitteesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_delegate_delegate_service__ = __webpack_require__("./src/app/services/delegate/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommitteesComponent = /** @class */ (function () {
    function CommitteesComponent(delegateService) {
        this.delegateService = delegateService;
        this.committee = {
            committees: '',
        };
        this.delegates = {
            name: '',
            lastNane: '',
            idType: '',
            idNumer: '',
            institution: '',
            code: '',
        };
    }
    CommitteesComponent.prototype.ngOnInit = function () {
    };
    CommitteesComponent.prototype.delegatesByComittee = function () {
        var _this = this;
        this.delegateService.delegatesByComittee(this.committee)
            .subscribe(function (delegates) {
            _this.delegates = delegates;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    CommitteesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-committees',
            template: __webpack_require__("./src/app/committees/committees.component.html"),
            styles: [__webpack_require__("./src/app/committees/committees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_delegate_delegate_service__["a" /* DelegateService */]])
    ], CommitteesComponent);
    return CommitteesComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_routing__ = __webpack_require__("./src/app/components/components.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__components_routing__["a" /* ComponentsRoutes */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["d" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["d" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");



var ComponentsRoutes = [
    {
        path: 'footer',
        component: __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */]
    },
    {
        path: 'sidebar',
        component: __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["d" /* SidebarComponent */]
    },
    {
        path: 'narbar',
        component: __WEBPACK_IMPORTED_MODULE_0__navbar_navbar_component__["a" /* NavbarComponent */]
    }
];


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Company\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Portfolio\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <!--<a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>-->\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!--<li>-->\r\n                    <!--<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\r\n                        <!--<i class=\"material-icons\">dashboard</i>-->\r\n                        <!--<p class=\"hidden-lg hidden-md\">Dashboard</p>-->\r\n                    <!--</a>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"dropdown\">-->\r\n                    <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\r\n                        <!--<i class=\"material-icons\">notifications</i>-->\r\n                        <!--<span class=\"notification\">5</span>-->\r\n                        <!--<p class=\"hidden-lg hidden-md\">Notifications</p>-->\r\n                    <!--</a>-->\r\n                    <!--<ul class=\"dropdown-menu\">-->\r\n                        <!--<li><a href=\"#\">Mike John responded to your email</a></li>-->\r\n                        <!--<li><a href=\"#\">You have 5 new tasks</a></li>-->\r\n                        <!--<li><a href=\"#\">You're now friend with Andrew</a></li>-->\r\n                        <!--<li><a href=\"#\">Another Notification</a></li>-->\r\n                        <!--<li><a href=\"#\">Another One</a></li>-->\r\n                    <!--</ul>-->\r\n                <!--</li>-->\r\n                <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                       <i class=\"material-icons\">person</i>\r\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li  (click)=\"me()\"><a>Perfil</a></li>\r\n                        <li (click)=\"logout()\" ><a>Salir</a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n\r\n            <!--<form class=\"navbar-form navbar-right\" role=\"search\">-->\r\n                <!--<div class=\"form-group form-black is-empty\">-->\r\n                    <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\">-->\r\n                    <!--<span class=\"material-input\"></span>-->\r\n                <!--</div>-->\r\n                <!--<button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">-->\r\n                    <!--<i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>-->\r\n                <!--</button>-->\r\n            <!--</form>-->\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_staff_staff_service__ = __webpack_require__("./src/app/services/staff/staff.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {ROUTES} from '../sidebar/sidebar.component';



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, staffService, element, router) {
        var _this = this;
        this.staffService = staffService;
        this.element = element;
        this.router = router;
        this.location = location;
        this.sidebarVisible = false;
        this.staffService.staffType()
            .subscribe(function (staffType) {
            if (staffType === 'SG') {
                _this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["b" /* ROUTES_SG */].filter(function (listTitle) { return listTitle; });
            }
            else if (staffType === 'STAFF') {
                _this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["c" /* ROUTES_STAFF */].filter(function (listTitle) { return listTitle; });
            }
            else if (staffType === 'PRESI') {
                _this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES_PRESI */].filter(function (listTitle) { return listTitle; });
            }
        }, function (err) {
            console.log(err);
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.staffService.logoutStaff()
            .subscribe(function (delegate) {
            _this.router.navigate(['land']);
        }, function (err) {
            _this.err = err;
        });
    };
    NavbarComponent.prototype.me = function () {
        var _this = this;
        this.staffService.meStaff()
            .subscribe(function (delegate) {
            _this.router.navigate(['admin/me']);
        }, function (err) {
            _this.err = err;
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_4__services_staff_staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a class=\"simple-text\" routerLink=\"/land\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"../../assets/img/munum.ico\"/>\r\n        </div>\r\n        MUNUM\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\r\n        <div class=\"form-group form-black is-empty\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n            <span class=\"material-input\"></span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n        </button>\r\n    </form>\r\n\r\n    <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\r\n        <li>\r\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n            </a>\r\n        </li>\r\n        <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"material-icons\">notifications</i>\r\n                <span class=\"notification\">5</span>\r\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\">Mike John responded to your email</a></li>\r\n                <li><a href=\"#\">You have 5 new tasks</a></li>\r\n                <li><a href=\"#\">You're now friend with Andrew</a></li>\r\n                <li><a href=\"#\">Another Notification</a></li>\r\n                <li><a href=\"#\">Another One</a></li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n               <i class=\"material-icons\">person</i>\r\n               <p class=\"hidden-lg hidden-md\">Profile</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\r\n                <a  [routerLink]=\"[menuItem.path]\">\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p>{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROUTES_SG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ROUTES_STAFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES_PRESI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_staff_staff_service__ = __webpack_require__("./src/app/services/staff/staff.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// export const ROUTES: RouteInfo[] = [
//     {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
//     {path: 'delegates', title: 'Usuarios', icon: 'person', class: ''},
//     {path: 'delegations', title: 'Instituciones', icon: 'business', class: ''},
//     {path: 'staff', title: 'Staff', icon: 'people', class: ''},
//     {path: 'table-list', title: 'Matriz', icon: 'content_paste', class: ''},
//     {path: 'table-list', title: 'Cronometro', icon: 'watch_later', class: ''},
//     {path: 'table-list', title: 'QR', icon: 'camera', class: ''}
// ];
var ROUTES_SG = [
    // {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
    { path: 'delegates', title: 'Usuarios', icon: 'person', class: '' },
    { path: 'delegations', title: 'Instituciones', icon: 'business', class: '' },
    { path: 'staff', title: 'Staff', icon: 'people', class: '' },
    { path: 'committees', title: 'Comités', icon: 'content_paste', class: '' },
    { path: 'table-list', title: 'Matriz', icon: 'grid_on', class: '' },
    { path: 'table-list', title: 'Cronometro', icon: 'watch_later', class: '' },
    { path: 'card', title: 'Tarjeta Persona', icon: 'camera', class: '' },
    { path: 'upgrade', title: 'Descargar', icon: 'grade', class: '' }
];
var ROUTES_STAFF = [
    // {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
    { path: 'delegates', title: 'Usuarios', icon: 'person', class: '' },
    { path: 'card', title: 'Tarjeta Persona', icon: 'camera', class: '' }
];
var ROUTES_PRESI = [
    // {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: ''},
    { path: 'table-list', title: 'Matriz', icon: 'grid_on', class: '' },
    { path: 'table-list', title: 'Cronometro', icon: 'watch_later', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(staffService) {
        this.staffService = staffService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.staffService.staffType()
            .subscribe(function (staffType) {
            console.log(staffType);
            if (staffType === 'SG') {
                _this.menuItems = ROUTES_SG.filter(function (menuItem) { return menuItem; });
            }
            else if (staffType === 'STAFF') {
                _this.menuItems = ROUTES_STAFF.filter(function (menuItem) { return menuItem; });
            }
            else if (staffType === 'PRESI') {
                _this.menuItems = ROUTES_PRESI.filter(function (menuItem) { return menuItem; });
            }
        }, function (err) {
            console.log(err);
        });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_staff_staff_service__["a" /* StaffService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"orange\">\r\n                            <i class=\"material-icons\">content_copy</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Used Space</p>\r\n                            <h3 class=\"title\">49/50<small>GB</small></h3>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons text-danger\">warning</i> <a href=\"#pablo\">Get More Space...</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"green\">\r\n                            <i class=\"material-icons\">store</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Revenue</p>\r\n                            <h3 class=\"title\">$34,245</h3>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <i class=\"material-icons\">info_outline</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Fixed Issues</p>\r\n                            <h3 class=\"title\">75</h3>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">local_offer</i> Tracked from Github\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                    <div class=\"card card-stats\" >\r\n                        <div class=\"card-header\" data-background-color=\"blue\">\r\n                            <i class=\"fa fa-twitter\"></i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <p class=\"category\">Followers</p>\r\n                            <h3 class=\"title\">+245</h3>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">update</i> Just Updated\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card\" >\r\n                        <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n                            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"title\">Daily Sales</h4>\r\n                            <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55%  </span> increase in today sales.</p>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card\" >\r\n                        <div class=\"card-header card-chart\" data-background-color=\"orange\">\r\n                            <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"title\">Email Subscriptions</h4>\r\n                            <p class=\"category\">Last Campaign Performance</p>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card\" >\r\n                        <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n                            <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"title\">Completed Tasks</h4>\r\n                            <p class=\"category\">Last Campaign Performance</p>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"stats\">\r\n                                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-12\">\r\n                    <div class=\"card card-nav-tabs\" >\r\n                        <div class=\"card-header\" data-background-color=\"purple\">\r\n                            <div class=\"nav-tabs-navigation\">\r\n                                <div class=\"nav-tabs-wrapper\">\r\n                                    <span class=\"nav-tabs-title\">Tasks:</span>\r\n                                    <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                                        <li class=\"active\">\r\n                                            <a href=\"#profile\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">bug_report</i>\r\n                                                Bugs\r\n                                            <div class=\"ripple-container\"></div></a>\r\n                                        </li>\r\n                                        <li class=\"\">\r\n                                            <a href=\"#messages\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">code</i>\r\n                                                Website\r\n                                            <div class=\"ripple-container\"></div></a>\r\n                                        </li>\r\n                                        <li class=\"\">\r\n                                            <a href=\"#settings\" data-toggle=\"tab\">\r\n                                                <i class=\"material-icons\">cloud</i>\r\n                                                Server\r\n                                            <div class=\"ripple-container\"></div></a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-content\">\r\n                            <div class=\"tab-content\">\r\n                                <div class=\"tab-pane active\" id=\"profile\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                </td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"messages\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                </td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"tab-pane\" id=\"settings\">\r\n                                    <table class=\"table\">\r\n                                        <tbody>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                </td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                                <td>\r\n                                                    <div class=\"checkbox\">\r\n                                                        <label>\r\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                <td class=\"td-actions text-right\">\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">edit</i>\r\n                                                    </button>\r\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                        <i class=\"material-icons\">close</i>\r\n                                                    </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-6 col-md-12\">\r\n                    <div class=\"card\" >\r\n                        <div class=\"card-header\" data-background-color=\"orange\">\r\n                            <h4 class=\"title\">Employees Stats</h4>\r\n                            <p class=\"category\">New employees on 15th September, 2016</p>\r\n                        </div>\r\n                        <div class=\"card-content table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead class=\"text-warning\">\r\n                                    <tr>\r\n                                        <th>ID</th>\r\n                                        <th>Name</th>\r\n                                        <th>Salary</th>\r\n                                        <th>Country</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>1</td>\r\n                                        <td>Dakota Rice</td>\r\n                                        <td>$36,738</td>\r\n                                        <td>Niger</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>2</td>\r\n                                        <td>Minerva Hooper</td>\r\n                                        <td>$23,789</td>\r\n                                        <td>Curaçao</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3</td>\r\n                                        <td>Sage Rodriguez</td>\r\n                                        <td>$56,142</td>\r\n                                        <td>Netherlands</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>4</td>\r\n                                        <td>Philip Chaney</td>\r\n                                        <td>$38,735</td>\r\n                                        <td>Korea, South</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var emailsSubscriptionChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(emailsSubscriptionChart);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/icons/icons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card card-plain\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Material Design Icons</h4>\r\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\r\n                            <iframe src=\"https://design.google.com/icons/\">\r\n                                <p>Your browser does not support iframes.</p>\r\n                            </iframe>\r\n                        </div>\r\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\r\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a></h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-icons',
            template: __webpack_require__("./src/app/icons/icons.component.html"),
            styles: [__webpack_require__("./src/app/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(../../../assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <!--<div *ngIf=\"isMaps('maps')\">-->\r\n            <app-footer></app-footer>\r\n        <!--</div>-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
// import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
// import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
// import 'rxjs/add/operator/filter';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { Router, NavigationEnd, NavigationStart } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
// import PerfectScrollbar from 'perfect-scrollbar';
//
// declare const $: any;
//
// @Component({
//     selector: 'app-root',
//     templateUrl: './admin-layout.component.html'
// })
//
// export class AppComponent implements OnInit {
//     private _router: Subscription;
//     private lastPoppedUrl: string;
//     private yScrollStack: number[] = [];
//
//     @ViewChild(NavbarComponent) navbar: NavbarComponent;
//
//     constructor( public location: Location, private router: Router) {}
//
//     ngOnInit() {
//         $.material.init();
//         const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
//         const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
//
//         this.location.subscribe((ev:PopStateEvent) => {
//             this.lastPoppedUrl = ev.url;
//         });
//         this.router.events.subscribe((event:any) => {
//             this.navbar.sidebarClose();
//             if (event instanceof NavigationStart) {
//                 if (event.url != this.lastPoppedUrl)
//                     this.yScrollStack.push(window.scrollY);
//             } else if (event instanceof NavigationEnd) {
//                 if (event.url == this.lastPoppedUrl) {
//                     this.lastPoppedUrl = undefined;
//                     window.scrollTo(0, this.yScrollStack.pop());
//                 } else
//                     window.scrollTo(0, 0);
//             }
//         });
//         this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
//             elemMainPanel.scrollTop = 0;
//             elemSidebar.scrollTop = 0;
//         });
//         if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
//             let ps = new PerfectScrollbar(elemMainPanel);
//             ps = new PerfectScrollbar(elemSidebar);
//         }
//     }
//     ngAfterViewInit() {
//         this.runOnRouteChange();
//     }
//     isMaps(path){
//         var titlee = this.location.prepareExternalUrl(this.location.path());
//         titlee = titlee.slice( 1 );
//         if(path == titlee){
//             return false;
//         }
//         else {
//             return true;
//         }
//     }
//     runOnRouteChange(): void {
//         if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
//             const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
//             const ps = new PerfectScrollbar(elemMainPanel);
//             ps.update();
//         }
//     }
//     isMac(): boolean {
//         let bool = false;
//         if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
//             bool = true;
//         }
//         return bool;
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { NavItem, NavItemType } from '../../md/md.module';*/

var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location) {
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        /* var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
         if (isWindows){
             // if we are on windows OS we activate the perfectScrollbar function
             var $main_panel = $('.main-panel');
             $main_panel.perfectScrollbar();
         }*/
        //     this.navItems = [
        //         { type: NavItemType.NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
        //
        //         {
        //             type: NavItemType.NavbarRight,
        //             title: '',
        //             iconClass: 'fa fa-bell-o',
        //             numNotifications: 5,
        //             dropdownItems: [
        //                 { title: 'Notification 1' },
        //                 { title: 'Notification 2' },
        //                 { title: 'Notification 3' },
        //                 { title: 'Notification 4' },
        //                 { title: 'Another Notification' }
        //             ]
        //         },
        //         {
        //             type: NavItemType.NavbarRight,
        //             title: '',
        //             iconClass: 'fa fa-list',
        //
        //             dropdownItems: [
        //                 { iconClass: "pe-7s-mail", title: 'Messages' },
        //                 { iconClass: "pe-7s-help1", title: 'Help Center' },
        //                 { iconClass: "pe-7s-tools", title: 'Settings' },
        //                 'separator',
        //                 { iconClass: "pe-7s-lock", title: 'Lock Screen' },
        //                 { iconClass: "pe-7s-close-circle", title: 'Log Out' }
        //             ]
        //         },
        //         { type: NavItemType.NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
        //
        //         { type: NavItemType.NavbarLeft, title: 'Account' },
        //         {
        //             type: NavItemType.NavbarLeft,
        //             title: 'Dropdown',
        //             dropdownItems: [
        //                 { title: 'Action' },
        //                 { title: 'Another action' },
        //                 { title: 'Something' },
        //                 { title: 'Another action' },
        //                 { title: 'Something' },
        //                 'separator',
        //                 { title: 'Separated link' },
        //             ]
        //         },
        //         { type: NavItemType.NavbarLeft, title: 'Log out' }
        //     ];
    };
    AdminLayoutComponent.prototype.isMap = function () {
        // console.log(this.location.prepareExternalUrl(this.location.path()));
        if (this.location.prepareExternalUrl(this.location.path()) == '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout2',
            template: __webpack_require__("./src/app/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/user/user-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <router-outlet></router-outlet>\r\n    <!--<app-user-footer></app-user-footer>-->\r\n"

/***/ }),

/***/ "./src/app/layouts/user/user-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserLayoutComponent = /** @class */ (function () {
    function UserLayoutComponent() {
    }
    UserLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layouts/user/user-layout.component.html")
        })
    ], UserLayoutComponent);
    return UserLayoutComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\r\n"

/***/ }),

/***/ "./src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [
                { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
            ]
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maps',
            template: __webpack_require__("./src/app/maps/maps.component.html"),
            styles: [__webpack_require__("./src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" data-background-color=\"red\">\r\n                <h4 class=\"title\">Notifications</h4>\r\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\r\n            </div>\r\n            <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notifications Style</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <span>This is a plain notification</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span>This is a notification with close button.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notification states</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-success\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-warning\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-primary\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <br>\r\n\r\n                <div class=\"places-buttons\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\r\n                            <h5>Notifications Places\r\n                                <p class=\"category\">Click to view notifications</p>\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 col-md-offset-2\">\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 col-md-offset-2\">\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/services/cookies/cookies.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CookiesService = /** @class */ (function () {
    function CookiesService() {
    }
    CookiesService.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    };
    CookiesService.prototype.getCookie = function (cname) {
        var name = cname + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };
    CookiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CookiesService);
    return CookiesService;
}());



/***/ }),

/***/ "./src/app/services/delegate/delegate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DelegateService = /** @class */ (function () {
    function DelegateService(http) {
        this.http = http;
    }
    DelegateService.prototype.getDelegates = function () {
        return this.http.get('/delegate')
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegateService.prototype.addDelegate = function (delegate) {
        return this.http.post('/delegate', delegate)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegateService.prototype.deleteDelegate = function (id) {
        return this.http.delete('/delegate/' + id)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegateService.prototype.updateDelegate = function (delegate) {
        return this.http.put('/delegate/' + delegate._id, delegate)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegateService.prototype.findOneDelegate = function (id) {
        console.log('findOne');
        return this.http.post('/oneDelegate', id)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegateService.prototype.getCountries = function () {
        return this.http.get('/../../assets/json/countries.json')
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegateService.prototype.delegatesByComittee = function (committee) {
        return this.http.post('/delegatesByComittee', committee)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegateService.prototype._errorHandler = function (err) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        // return Observable.throw(err.json() || 'Server error');
    };
    DelegateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DelegateService);
    return DelegateService;
}());



/***/ }),

/***/ "./src/app/services/delegation/delegation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DelegationService = /** @class */ (function () {
    function DelegationService(http) {
        this.http = http;
    }
    DelegationService.prototype.getDelegations = function () {
        return this.http.get('/delegation')
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegationService.prototype.addDelegation = function (delegation) {
        return this.http.post('/delegation', delegation)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegationService.prototype.deleteDelegation = function (delegationId) {
        return this.http.delete('/delegation/' + delegationId)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegationService.prototype.updateDelegation = function (delegation) {
        return this.http.put('/delegation/' + delegation._id, delegation)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegationService.prototype.findOneDelegation = function (id) {
        return this.http.post('/oneDelegation', id)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegationService.prototype.findDelegationCode = function (code) {
        return this.http.post('/delegationCode', code)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegationService.prototype.delegateByDelegation = function (delegation) {
        return this.http.post('/delegateByDelegation', delegation)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    DelegationService.prototype._errorHandler = function (err) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
    };
    DelegationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DelegationService);
    return DelegationService;
}());



/***/ }),

/***/ "./src/app/services/staff/staff.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StaffService = /** @class */ (function () {
    function StaffService(http) {
        this.http = http;
    }
    StaffService.prototype.getStaff = function () {
        return this.http.get('/staff')
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype.loginStaff = function (staff) {
        return this.http.post('/signin', staff)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype.logoutStaff = function () {
        return this.http.get('/signout')
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype.addStaff = function (staff) {
        return this.http.post('/signup', staff)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype.deleteStaff = function (id) {
        return this.http.delete('/staff/' + id)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype.updateStaff = function (staff) {
        return this.http.put('/staff/' + staff._id, staff)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype.findOneStaff = function (id) {
        return this.http.post('/oneStaff', id)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype.staffType = function () {
        return this.http.get('/type')
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype.meStaff = function () {
        return this.http.get('/me')
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype.getCountries = function () {
        return this.http.get('/../../assets/json/countries.json')
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    StaffService.prototype._errorHandler = function (err) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
    };
    StaffService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StaffService);
    return StaffService;
}());



/***/ }),

/***/ "./src/app/table-list/delegates/delegates.component.css":
/***/ (function(module, exports) {

module.exports = ".text-white{\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/table-list/delegates/delegates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title text-white\"><b>Usuarios</b></h4>\r\n                        <p class=\"category\"><b></b></p>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-danger\">\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>Nombre</th>\r\n                                    <th>Id</th>\r\n                                    <th>Institucion</th>\r\n                                    <th>Codigo</th>\r\n                                    <th>Opciones</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let delegate of delegates; let i = index\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{delegate.lastName}}, {{delegate.name}}</td>\r\n                                    <td>{{delegate.idType}} {{delegate.idNumber}}</td>\r\n                                    <td>{{delegate.institution}}</td>\r\n                                    <td class=\"text-danger\">{{delegate.code}}</td>\r\n                                    <td  class=\"td-actions text-right\">\r\n                                        <button  class=\"btn btn-primary btn-simple btn-xs\" rel=\"tooltip\" title=\"Edit Task\" type=\"button\" (click)=\"editView(delegate._id)\">\r\n                                            <i  class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger btn-simple btn-xs\" rel=\"tooltip\" title=\"Remove\" type=\"button\" (click)=\"delete(delegate._id)\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/table-list/delegates/delegates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_delegate_delegate_service__ = __webpack_require__("./src/app/services/delegate/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DelegatesComponent = /** @class */ (function () {
    function DelegatesComponent(delegateService, router) {
        this.delegateService = delegateService;
        this.router = router;
        this.getDelegates();
    }
    DelegatesComponent.prototype.ngOnInit = function () {
    };
    DelegatesComponent.prototype.getDelegates = function () {
        var _this = this;
        this.delegateService.getDelegates()
            .subscribe(function (delegatesRes) {
            _this.delegates = delegatesRes;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    DelegatesComponent.prototype.delete = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: '¿Estas seguro?',
            text: 'Deseas eliminarlo',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar',
        })
            .then(function (result) {
            if (result.value) {
                _this.delegateService.deleteDelegate(id)
                    .subscribe(function (staffRes) {
                    console.log(_this.delegates);
                    for (var i = 0; i < _this.delegates.length; i++) {
                        if (_this.delegates[i]._id === id) {
                            _this.delegates.splice(i, 1);
                        }
                    }
                }, function (err) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                        type: 'error',
                        title: 'Oops...',
                        text: err.json().message,
                        confirmButtonColor: '#d33',
                    });
                });
            }
        });
    };
    DelegatesComponent.prototype.editView = function (id) {
        console.log('editView');
        this.router.navigate(['admin/editDelegates', id]);
    };
    DelegatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-delegates',
            template: __webpack_require__("./src/app/table-list/delegates/delegates.component.html"),
            styles: [__webpack_require__("./src/app/table-list/delegates/delegates.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_delegate_delegate_service__["a" /* DelegateService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], DelegatesComponent);
    return DelegatesComponent;
}());



/***/ }),

/***/ "./src/app/table-list/delegations/delegations.component.css":
/***/ (function(module, exports) {

module.exports = ".text-white{\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/table-list/delegations/delegations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title text-white\"><b>Institucion</b></h4>\r\n                        <p class=\"category\"><b></b></p>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-danger\">\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>Institucion</th>\r\n                                    <th>Contacto</th>\r\n                                    <th>Numero</th>\r\n                                    <th>Codigo</th>\r\n                                    <th>Opciones</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let delegation of delegations; let i = index\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{delegation.institutionName}}</td>\r\n                                    <td>{{delegation.sponsorName}}</td>\r\n                                    <td class=\"text-danger\">{{delegation.code}}</td>\r\n                                    <td  class=\"td-actions text-right\">\r\n                                        <button class=\"btn  btn-primary btn-simple btn-xs\" rel=\"tooltip\" title=\"Delegates\" type=\"button\" (click)=\"delegates(delegation)\">\r\n                                            <i class=\"material-icons\">list</i>\r\n                                        </button>\r\n                                        <button  class=\"btn btn-primary btn-simple btn-xs\" rel=\"tooltip\" title=\"Edit Task\" type=\"button\" (click)=\"editView(delegation._id)\">\r\n                                            <i  class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger btn-simple btn-xs\" rel=\"tooltip\" title=\"Remove\" type=\"button\" (click)=\"delete(delegation._id)\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/table-list/delegations/delegations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_delegation_delegation_service__ = __webpack_require__("./src/app/services/delegation/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DelegationsComponent = /** @class */ (function () {
    function DelegationsComponent(delegationService, router) {
        var _this = this;
        this.delegationService = delegationService;
        this.router = router;
        this.delegationService.getDelegations()
            .subscribe(function (delegationRes) {
            _this.delegations = delegationRes;
        }, function (err) {
            console.log(err);
        });
    }
    DelegationsComponent.prototype.ngOnInit = function () {
    };
    DelegationsComponent.prototype.delete = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: '¿Estas seguro?',
            text: 'Deseas eliminarlo',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar',
        })
            .then(function (result) {
            if (result.value) {
                _this.delegationService.deleteDelegation(id)
                    .subscribe(function (delegation) {
                    console.log(_this.delegations);
                    for (var i = 0; i < _this.delegations.length; i++) {
                        if (_this.delegations[i]._id === id) {
                            _this.delegations.splice(i, 1);
                        }
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    DelegationsComponent.prototype.delegates = function (delegation) {
        var _this = this;
        this.delegationService.delegateByDelegation(delegation)
            .subscribe(function (delegatesRes) {
            console.log(_this.delegations);
            // for (let i = 0; i < this.delegations.length; i++) {
            //     if (this.delegations[i]._id === id) {
            //         this.delegations.splice(i, 1);
            //     }
            // }
            _this.delegations = delegatesRes;
        }, function (err) {
            console.log(err);
        });
    };
    DelegationsComponent.prototype.editView = function (id) {
        this.router.navigate(['admin/editDelegations', id]);
    };
    DelegationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-delegations',
            template: __webpack_require__("./src/app/table-list/delegations/delegations.component.html"),
            styles: [__webpack_require__("./src/app/table-list/delegations/delegations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_delegation_delegation_service__["a" /* DelegationService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], DelegationsComponent);
    return DelegationsComponent;
}());



/***/ }),

/***/ "./src/app/table-list/edit-delegates/edit-delegates.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table-list/edit-delegates/edit-delegates.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\" register-page\">\r\n            <div class=\"content\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"btn btn-default\" routerLink=\"/admin/delegates\">\r\n                            <div>< atras</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\" data-background-color=\"orange\">\r\n                                <h4 class=\"title text-white\"><b>Welcome</b></h4>\r\n                                <p class=\"category\">{{delegate._id}}</p>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n\r\n                                <!--Formularo de registro-->\r\n                                <form (submit)=\"onSubmit()\">\r\n\r\n                                    <!--Content-->\r\n                                    <br>\r\n                                    <span class=\"required\"><b>Comité final</b></span>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <select class=\"form-control formFormat\" [(ngModel)]=\"delegate.finalCommittee\" name=\"finalCommittee\">\r\n                                                <option value=\"\" disabled=\"true\" >Seleccione comité final</option>\r\n                                                <option [value]=\"delegate.committee1\">{{committees(delegate.committee1)}}</option>\r\n                                                <option [value]=\"delegate.committee2\">{{committees(delegate.committee2)}}</option>\r\n                                                <option [value]=\"delegate.committee3\">{{committees(delegate.committee3)}}</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <br>\r\n                                    <span class=\"required\"><b>General Information</b></span>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Name<span class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.name\"\r\n                                                       name=\"name\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Last Name<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.lastName\"\r\n                                                       name=\"lastName\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-9\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Email address<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"delegate.email\"\r\n                                                       name=\"email\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Birth (DD/MM/YY)<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.birth\"\r\n                                                       name=\"birth\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-2\">\r\n                                            <!--<label for=\"sel1\">Type of Id</label>-->\r\n                                            <select class=\"form-control formFormat\" [(ngModel)]=\"delegate.idType\"\r\n                                                    name=\"idType\">\r\n                                                <option value=\"C.C\">C.C</option>\r\n                                                <option value=\"T.I\">T.I</option>\r\n                                                <option value=\"P.P\">Passport</option>\r\n                                            </select>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Id number<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.idNumber\"\r\n                                                       name=\"idNumber\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Cellphone<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.cellphone\"\r\n                                                       name=\"cellphone\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Country of residency<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.country\"\r\n                                                       name=\"country\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">City of residency<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.city\"\r\n                                                       name=\"city\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Educational institution<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                       [(ngModel)]=\"delegate.institution\"\r\n                                                       name=\"institution\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Major or undergraduate degree<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.degree\"\r\n                                                       name=\"degree\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <br>\r\n                                    <hr>\r\n                                    <span class=\"required\"><b>Emergency Data</b></span>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-2\">\r\n                                            <select class=\"form-control formFormat\" [(ngModel)]=\"delegate.blood\"\r\n                                                    name=\"blood\">\r\n                                                <option value=\"A+\">A+</option>\r\n                                                <option value=\"A-\">A-</option>\r\n                                                <option value=\"B+\">B+</option>\r\n                                                <option value=\"B-\">B-</option>\r\n                                                <option value=\"O+\">O+</option>\r\n                                                <option value=\"O-\">O-</option>\r\n                                                <option value=\"AB+\">AB+</option>\r\n                                                <option value=\"AB-\">AB-</option>\r\n                                            </select>\r\n                                        </div>\r\n                                        <div class=\"col-md-5\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Health insurance<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.insurance\"\r\n                                                       name=\"insurance\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-5\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Special health condition</label>\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                       [(ngModel)]=\"delegate.specialCondition\"\r\n                                                       name=\"specialCondition\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Emergency contact: Name<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                       [(ngModel)]=\"delegate.contactName\"\r\n                                                       name=\"contactName\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\">Emergency contact: Phone <span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\"\r\n                                                       [(ngModel)]=\"delegate.contactPhone\"\r\n                                                       name=\"contactPhone\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\"> Number of years participating in UN models<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.numberMun\"\r\n                                                       name=\"numberMun\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                    <br>\r\n                                    <hr>\r\n                                    <span class=\"required\"><b>MUNUM Data</b></span>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"col-md-3\">\r\n                                                <label class=\"formFormat\">Preference committee 1<span\r\n                                                        class=\"required\">*</span></label>\r\n                                            </div>\r\n                                            <div class=\"col-md-9\">\r\n                                                <select class=\"col-md-9 form-control formFormat\"\r\n                                                        [(ngModel)]=\"delegate.committee1\" name=\"committee1\">\r\n                                                        <option value=\"1\">Security council (Doble delegación)</option>\r\n                                                        <option value=\"2\">Corte Internacional de Justicia (CIJ)</option>\r\n                                                        <option value=\"3\">Comité de política especial y de descolonización (SPECPOL)</option>\r\n                                                        <option value=\"4\">Audiencia nacional española: juicio a Pinochet</option>\r\n                                                        <option value=\"5\">Consejo nacional de seguridad: palacio de justicia 1985</option>\r\n                                                        <option value=\"6\">Banco Interamericano de Desarrollo (BID) asamblea anual</option>\r\n                                                        <option value=\"7\">Comisión de DDHH y de los pueblos de la Unión Africana</option>\r\n                                                        <option value=\"8\">Commonwealth of Nations</option>\r\n                                                        <option value=\"9\">Foro de cooperación económica Asia – Pacífico (APEC)</option>\r\n                                                        <option value=\"10\">GAC: Trotsky vs Stalin</option>\r\n                                                        <option value=\"11\">GAC: Guerra de los 30 años</option>\r\n                                                        <option value=\"12\">GAU: Guerra de corea</option>\r\n                                                        <option value=\"13\">Consorcio Mundial de Prensa</option>\r\n                                                        <option value=\"14\">Secret Committee</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"col-md-3\">\r\n                                                <label class=\"formFormat\">Preference committee 2<span\r\n                                                        class=\"required\">*</span></label>\r\n                                            </div>\r\n                                            <div class=\"col-md-9\">\r\n                                                <select class=\"col-md-9 form-control formFormat\"\r\n                                                        [(ngModel)]=\"delegate.committee2\" name=\"committee2\">\r\n                                                        <option value=\"1\">Security council (Doble delegación)</option>\r\n                                                        <option value=\"2\">Corte Internacional de Justicia (CIJ)</option>\r\n                                                        <option value=\"3\">Comité de política especial y de descolonización (SPECPOL)</option>\r\n                                                        <option value=\"4\">Audiencia nacional española: juicio a Pinochet</option>\r\n                                                        <option value=\"5\">Consejo nacional de seguridad: palacio de justicia 1985</option>\r\n                                                        <option value=\"6\">Banco Interamericano de Desarrollo (BID) asamblea anual</option>\r\n                                                        <option value=\"7\">Comisión de DDHH y de los pueblos de la Unión Africana</option>\r\n                                                        <option value=\"8\">Commonwealth of Nations</option>\r\n                                                        <option value=\"9\">Foro de cooperación económica Asia – Pacífico (APEC)</option>\r\n                                                        <option value=\"10\">GAC: Trotsky vs Stalin</option>\r\n                                                        <option value=\"11\">GAC: Guerra de los 30 años</option>\r\n                                                        <option value=\"12\">GAU: Guerra de corea</option>\r\n                                                        <option value=\"13\">Consorcio Mundial de Prensa</option>\r\n                                                        <option value=\"14\">Secret Committee</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"col-md-3\">\r\n                                                <label class=\"formFormat\">Preference committee 3<span\r\n                                                        class=\"required\">*</span></label>\r\n                                            </div>\r\n                                            <div class=\"col-md-9\">\r\n                                                <select class=\"col-md-9 form-control formFormat\"\r\n                                                        [(ngModel)]=\"delegate.committee3\" name=\"committee3\">\r\n                                                        <option value=\"1\">Security council (Doble delegación)</option>\r\n                                                        <option value=\"2\">Corte Internacional de Justicia (CIJ)</option>\r\n                                                        <option value=\"3\">Comité de política especial y de descolonización (SPECPOL)</option>\r\n                                                        <option value=\"4\">Audiencia nacional española: juicio a Pinochet</option>\r\n                                                        <option value=\"5\">Consejo nacional de seguridad: palacio de justicia 1985</option>\r\n                                                        <option value=\"6\">Banco Interamericano de Desarrollo (BID) asamblea anual</option>\r\n                                                        <option value=\"7\">Comisión de DDHH y de los pueblos de la Unión Africana</option>\r\n                                                        <option value=\"8\">Commonwealth of Nations</option>\r\n                                                        <option value=\"9\">Foro de cooperación económica Asia – Pacífico (APEC)</option>\r\n                                                        <option value=\"10\">GAC: Trotsky vs Stalin</option>\r\n                                                        <option value=\"11\">GAC: Guerra de los 30 años</option>\r\n                                                        <option value=\"12\">GAU: Guerra de corea</option>\r\n                                                        <option value=\"13\">Consorcio Mundial de Prensa</option>\r\n                                                        <option value=\"14\">Secret Committee</option>\r\n                                                </select>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <br>\r\n                                    <hr>\r\n                                    <span class=\"required\"><b>Código</b></span>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group form-black\">\r\n                                                <label class=\"control-label\"> Codigo<span\r\n                                                        class=\"required\">*</span></label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegate.code\"\r\n                                                       name=\"code\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <button type=\"submit\" class=\"btn btn-warning pull-right\">Actualizar</button>\r\n                                    <button type=\"cancel\" class=\"btn btn-default pull-right\">Cancelar</button>\r\n                                    <div class=\"clearfix\"></div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/table-list/edit-delegates/edit-delegates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDelegatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_delegate_delegate_service__ = __webpack_require__("./src/app/services/delegate/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDelegatesComponent = /** @class */ (function () {
    function EditDelegatesComponent(delegateService, router, activatedRoute) {
        this.delegateService = delegateService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.delegate = {
            _id: '',
            name: '',
            lastName: '',
            email: '',
            birth: '',
            idType: '',
            idNumber: '',
            cellphone: '',
            country: '',
            city: '',
            institution: '',
            degree: '',
            blood: '',
            insurance: '',
            specialCondition: '',
            contactName: '',
            contactPhone: '',
            numberMun: '',
            committee1: '',
            committee2: '',
            committee3: '',
            finalCommittee: '',
            code: ''
        };
        this.delegateToFind = {
            id: ''
        };
        this.getStaffParams();
        this.findDelegate();
    }
    EditDelegatesComponent.prototype.ngOnInit = function () {
    };
    EditDelegatesComponent.prototype.getStaffParams = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.delegateToFind.id = params['id'];
        });
    };
    EditDelegatesComponent.prototype.findDelegate = function () {
        var _this = this;
        this.delegateService.findOneDelegate(this.delegateToFind)
            .subscribe(function (staffRes) {
            _this.delegate = staffRes;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    EditDelegatesComponent.prototype.committees = function (option) {
        switch (option) {
            case '1':
                return 'Security council (Doble delegación)';
            case '2':
                return 'Corte Internacional de Justicia (CIJ)';
            case '3':
                return 'Comité de política especial y de descolonización (SPECPOL)';
            case '4':
                return 'Audiencia nacional española: juicio a Pinochet';
            case '5':
                return 'Consejo nacional de seguridad: palacio de justicia 1985';
            case '6':
                return 'Banco Interamericano de Desarrollo (BID) asamblea anual';
            case '7':
                return 'Comisión de DDHH y de los pueblos de la Unión Africana';
            case '8':
                return 'Commonwealth of Nations';
            case '9':
                return 'Foro de cooperación económica Asia – Pacífico (APEC)';
            case '10':
                return 'GAC: Trotsky vs Stalin';
            case '11':
                return 'GAC: Guerra de los 30 años';
            case '12':
                return 'GAU: Guerra de corea';
            case '13':
                return 'Consorcio Mundial de Prensa';
            case '14':
                return 'Secret Committee';
            default:
                console.log('Contacte con prensa.munum@gmail.com');
        }
    };
    EditDelegatesComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.delegate);
        this.delegateService.updateDelegate(this.delegate)
            .subscribe(function (delegate) {
            _this.router.navigate(['admin/delegates']);
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    EditDelegatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-edit-delegates',
            template: __webpack_require__("./src/app/table-list/edit-delegates/edit-delegates.component.html"),
            styles: [__webpack_require__("./src/app/table-list/edit-delegates/edit-delegates.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_delegate_delegate_service__["a" /* DelegateService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], EditDelegatesComponent);
    return EditDelegatesComponent;
}());



/***/ }),

/***/ "./src/app/table-list/edit-delegations/edit-delegations.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table-list/edit-delegations/edit-delegations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"login-page\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                    <div class=\"btn btn-default\" routerLink=\"/admin/delegations\">\r\n                        <div>< atras</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-8\">\r\n\r\n                    <form (submit)=\"onSubmit()\">\r\n                        <div class=\"card card-login\">\r\n                            <div class=\"card-header\" data-background-color=\"orange\">\r\n                                <h4 class=\"card-title\"><b>Registro Delegación</b></h4>\r\n                                <p class=\"category\">Ingrese los datos a continuacion</p>\r\n                            </div>\r\n\r\n                            <!--Error-->\r\n                            <div class=\"text-danger text-center\" *ngIf=\"err\">\r\n                                {{err}}\r\n                            </div>\r\n\r\n                            <!--Contenido-->\r\n                            <div class=\"card-content\">\r\n\r\n                                <hr>\r\n                                <span class=\"required\"><b>Codigo</b></span>\r\n\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">Codgio?</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.code\" name=\"requires\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br>\r\n                                <br>\r\n                                <span class=\"required\"><b>Información General</b></span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">Tipo de institucion<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <select class=\"form-control formFormat\"\r\n                                                    [(ngModel)]=\"delegation.institutionType\" name=\"institutionType\">\r\n                                                <option value=\"Colegio\">Colegio</option>\r\n                                                <option value=\"Unviersidad\">Unviersidad</option>\r\n                                                <option value=\"Otro\">Otro</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">Nombre Institución<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.institutionName\"\r\n                                                   name=\"institutionName\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'delegation.fields.delegatesNum' | translate}}<span class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.delegatesNum\" name=\"delegatesNum\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <br>\r\n                                <hr>\r\n                                <span class=\"required\"><b>Informacion Sponsor</b></span>\r\n\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">Nombre del Sponosor(s)<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.sponsorName\" name=\"sponsorName\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">Celular(es)<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.sponsorCel\" name=\"sponsorCel\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-7\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'delegation.fields.sponsorEmail' | translate }}<span class=\"required\">*</span></label>\r\n                                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"delegation.sponsorEmail\" name=\"sponsorEmail\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.birth' | translate }}<span class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.birth\" name=\"birth\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <!--<label for=\"sel1\">Type of Id</label>-->\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"delegation.idType\" name=\"idType\">\r\n                                            <option value=\"\" disabled=\"true\">{{ 'register.fields.idType' | translate }}</option>\r\n                                            <option value=\"C.C\">C.C</option>\r\n                                            <option value=\"T.I\">T.I</option>\r\n                                            <option value=\"P.P\">Passport</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.idNumber' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.idNumber\"\r\n                                                   name=\"idNumber\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.cellphone' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.cellphone\"\r\n                                                   name=\"cellphone\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"delegation.country\" name=\"country\">\r\n                                            <option value=\"\" disabled=\"true\" >{{ 'register.fields.country' | translate }}</option>\r\n                                            <option *ngFor=\"let country of countries\">{{country.nombre}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.city' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.city\" name=\"city\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <br>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"formFormat2\">{{ 'register.fields.vegetarian' | translate }}</div>\r\n                                    </div>\r\n                                    <div class=\"col-md-9\">\r\n                                        <div class=\"togglebutton\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"delegation.vegetarian\" name=\"vegetarian\">\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br>\r\n                                <hr>\r\n                                <span class=\"required\"><b>{{ 'register.labels.emergencyData' | translate }}</b></span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"delegation.blood\" name=\"blood\">\r\n                                            <option value=\"\" disabled=\"true\">{{ 'register.fields.blood' | translate }}</option>\r\n                                            <option value=\"A+\">A+</option>\r\n                                            <option value=\"A-\">A-</option>\r\n                                            <option value=\"B+\">B+</option>\r\n                                            <option value=\"B-\">B-</option>\r\n                                            <option value=\"O+\">O+</option>\r\n                                            <option value=\"O-\">O-</option>\r\n                                            <option value=\"AB+\">AB+</option>\r\n                                            <option value=\"AB-\">AB-</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.insurance' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.insurance\"\r\n                                                   name=\"insurance\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.specialCondition' | translate }}</label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.specialCondition\"\r\n                                                   name=\"specialCondition\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.contactName' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.contactName\"\r\n                                                   name=\"contactName\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">{{ 'register.fields.contactPhone' | translate }}<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"delegation.contactPhone\"\r\n                                                   name=\"contactPhone\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br>\r\n                                <hr>\r\n                                <span class=\"required\"><b>Requerimientos</b></span>\r\n\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">¿Su institución tiene algún\r\n                                                requerimiento especial?</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"delegation.requires\" name=\"requires\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <button type=\"submit\" class=\"btn btn-warning pull-right\">Actualizar</button>\r\n                                <button type=\"cancel\" class=\"btn btn-default pull-right\">Cancelar</button>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/table-list/edit-delegations/edit-delegations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDelegationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_delegation_delegation_service__ = __webpack_require__("./src/app/services/delegation/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_delegate_delegate_service__ = __webpack_require__("./src/app/services/delegate/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cookies_cookies_service__ = __webpack_require__("./src/app/services/cookies/cookies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditDelegationsComponent = /** @class */ (function () {
    //
    //
    function EditDelegationsComponent(delegationService, delegateService, translate, cookiesService, activatedRoute, router) {
        var _this = this;
        this.delegationService = delegationService;
        this.delegateService = delegateService;
        this.translate = translate;
        this.cookiesService = cookiesService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.delegation = {
            institutionType: '',
            institutionName: '',
            delegatesNum: '',
            sponsorName: '',
            sponsorCel: '',
            sponsorEmail: '',
            requires: '',
            code: '',
            birth: '',
            idType: '',
            idNumber: '',
            cellphone: '',
            country: '',
            city: '',
            institution: '',
            degree: '',
            vegetarian: '',
            blood: '',
            insurance: '',
            specialCondition: '',
            contactName: '',
            contactPhone: ''
        };
        this.delegationToFind = {
            id: ''
        };
        /*Idioma*/
        translate.setDefaultLang(cookiesService.getCookie('lang'));
        /*Paises*/
        this.delegateService.getCountries()
            .subscribe(function (countries) {
            _this.countries = countries;
        });
        /**/
        this.getStaffParams();
        this.delegationService.findOneDelegation(this.delegationToFind)
            .subscribe(function (staffRes) {
            console.log(staffRes);
            _this.delegation = staffRes;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    }
    EditDelegationsComponent.prototype.getStaffParams = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.delegationToFind.id = params['id'];
        });
    };
    EditDelegationsComponent.prototype.ngOnInit = function () {
    };
    EditDelegationsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.delegationService.updateDelegation(this.delegation)
            .subscribe(function (delegate) {
            _this.router.navigate(['admin/delegations']);
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    EditDelegationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-edit-delegations',
            template: __webpack_require__("./src/app/table-list/edit-delegations/edit-delegations.component.html"),
            styles: [__webpack_require__("./src/app/table-list/edit-delegations/edit-delegations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_delegation_delegation_service__["a" /* DelegationService */], __WEBPACK_IMPORTED_MODULE_3__services_delegate_delegate_service__["a" /* DelegateService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__services_cookies_cookies_service__["a" /* CookiesService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], EditDelegationsComponent);
    return EditDelegationsComponent;
}());



/***/ }),

/***/ "./src/app/table-list/edit-staff/edit-staff.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.required {\r\n  color: orange;\r\n}\r\n\r\n.content {\r\n  padding-top: 10vh;\r\n}\r\n\r\n.formFormat {\r\n  line-height: 1.07142857;\r\n  color: #AAAAAA;\r\n  margin: 16px 0 0 0;\r\n}\r\n\r\n.formFormat2 {\r\n  line-height: 1.07142857;\r\n  color: #AAAAAA;\r\n  margin: 0px 0 0 0 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/table-list/edit-staff/edit-staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"login-page\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                    <div class=\"btn btn-default\" routerLink=\"/admin/staff\" >\r\n                        <div>< atras</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\" data-background-color=\"orange\">\r\n                            <h4 class=\"title text-white\"><b>Welcome</b></h4>\r\n                            <p class=\"category\" >{{oneStaff._id}}</p>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n\r\n                            <!--Formularo de registro-->\r\n                            <form (submit)=\"onSubmit()\">\r\n\r\n                                <div class=\"text-danger text-center\" *ngIf=\"err\">\r\n                                    {{err}}\r\n                                </div>\r\n\r\n                                <!--Content-->\r\n                                <br>\r\n                                <span class=\"required\"><b>Tipo de Usuario</b></span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"oneStaff.role\"\r\n                                                name=\"role\">\r\n                                            <option value=\"SG\">SG</option>\r\n                                            <option value=\"STAFF\">STAFF</option>\r\n                                            <option value=\"PRESI\">PRESIDENTE</option>\r\n                                            <option value=\"NONE\">NINGUNO</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <br>\r\n                                <span class=\"required\"><b>General Information</b></span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black\">\r\n                                            <label class=\"control-label\">Nombre<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.name\"\r\n                                                   name=\"name\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Apellido<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.lastName\"\r\n                                                   name=\"lastName\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-9\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Correo<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"oneStaff.email\"\r\n                                                   name=\"email\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Fecha nacimiento (DD/MM/YYYY)<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.birth\"\r\n                                                   name=\"birth\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <!--<label for=\"sel1\">Type of Id</label>-->\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"oneStaff.idType\"\r\n                                                name=\"idType\">\r\n                                            <option value=\"C.C\">C.C</option>\r\n                                            <option value=\"T.I\">T.I</option>\r\n                                            <option value=\"P.P\">Passport</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Numero Documento<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.idNumber\"\r\n                                                   name=\"idNumber\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Celular<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.cellphone\"\r\n                                                   name=\"cellphone\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Pais de residencia<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.country\"\r\n                                                   name=\"country\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Ciudad de residencia<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.city\"\r\n                                                   name=\"city\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Instituto de educacion<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"oneStaff.institution\"\r\n                                                   name=\"institution\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Carrera<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.degree\"\r\n                                                   name=\"degree\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <br>\r\n                                    <div class=\"col-md-2\">\r\n                                        <div class=\"formFormat2\">Vegetariano (N/S)</div>\r\n                                    </div>\r\n                                    <div class=\"col-md-10\">\r\n                                        <div class=\"togglebutton\">\r\n                                            <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"oneStaff.vegetarian\"\r\n                                                       name=\"vegetarian\">\r\n                                            </label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <br>\r\n                                <hr>\r\n                                <span class=\"required\"><b>Informacion de emergencia</b></span>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <select class=\"form-control formFormat\" [(ngModel)]=\"oneStaff.blood\"\r\n                                                name=\"blood\">\r\n                                            <option value=\"A+\">A+</option>\r\n                                            <option value=\"A-\">A-</option>\r\n                                            <option value=\"B+\">B+</option>\r\n                                            <option value=\"B-\">B-</option>\r\n                                            <option value=\"O+\">O+</option>\r\n                                            <option value=\"O-\">O-</option>\r\n                                            <option value=\"AB+\">AB+</option>\r\n                                            <option value=\"AB-\">AB-</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Seguro medico<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.insurance\"\r\n                                                   name=\"insurance\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Condicion special de salud</label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"oneStaff.specialCondition\"\r\n                                                   name=\"specialCondition\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\">Nombre de concatacto de emergencia<span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"oneStaff.contactName\"\r\n                                                   name=\"contactName\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black y\">\r\n                                            <label class=\"control-label\">Telefono de contacto de emergincia <span\r\n                                                    class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\"\r\n                                                   [(ngModel)]=\"oneStaff.contactPhone\"\r\n                                                   name=\"contactPhone\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black \">\r\n                                            <label class=\"control-label\"> Numero de años que ha participado en\r\n                                                MUNs<span\r\n                                                        class=\"required\">*</span></label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"oneStaff.numberMun\"\r\n                                                   name=\"numberMun\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <button type=\"submit\" class=\"btn btn-warning pull-right\">Actualizar</button>\r\n                                <button type=\"cancel\" class=\"btn btn-default pull-right\">Cancelar</button>\r\n                                <div class=\"clearfix\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/table-list/edit-staff/edit-staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditStaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_staff_staff_service__ = __webpack_require__("./src/app/services/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditStaffComponent = /** @class */ (function () {
    function EditStaffComponent(staffService, router, activatedRoute) {
        var _this = this;
        this.staffService = staffService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.oneStaff = {
            _id: '',
            name: '',
            lastName: '',
            email: '',
            birth: '',
            idType: '',
            idNumber: '',
            cellphone: '',
            country: '',
            city: '',
            institution: '',
            degree: '',
            vegetarian: '',
            blood: '',
            insurance: '',
            specialCondition: '',
            contactName: '',
            contactPhone: '',
            numberMun: '',
            password: '',
            passwordConfirmation: '',
            role: ''
        };
        this.staffToFind = {
            id: ''
        };
        this.getStaffParams();
        this.staffService.findOneStaff(this.staffToFind)
            .subscribe(function (staffRes) {
            console.log(staffRes);
            _this.oneStaff = staffRes;
        }, function (err) {
            console.log(err);
        });
    }
    EditStaffComponent.prototype.getStaffParams = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.staffToFind.id = params['id'];
        });
    };
    EditStaffComponent.prototype.ngOnInit = function () {
    };
    EditStaffComponent.prototype.onSubmit = function () {
        var _this = this;
        this.staffService.updateStaff(this.oneStaff)
            .subscribe(function (delegate) {
            _this.router.navigate(['admin/staff']);
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    EditStaffComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-edit-staff',
            template: __webpack_require__("./src/app/table-list/edit-staff/edit-staff.component.html"),
            styles: [__webpack_require__("./src/app/table-list/edit-staff/edit-staff.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_staff_staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], EditStaffComponent);
    return EditStaffComponent;
}());



/***/ }),

/***/ "./src/app/table-list/staff/staff.component.css":
/***/ (function(module, exports) {

module.exports = ".text-white{\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/table-list/staff/staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title text-white\"><b>Staff</b></h4>\r\n                        <p class=\"category\"><b></b></p>\r\n                    </div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"text-danger\">\r\n                                <tr>\r\n                                    <th>#</th>\r\n                                    <th>Nombre</th>\r\n                                    <th>Id</th>\r\n                                    <th>Institucion</th>\r\n                                    <th>Rol</th>\r\n                                    <th>Opciones</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let staffInfo of staff; let i = index\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{staffInfo.lastName}}, {{staffInfo.name}}</td>\r\n                                    <td>{{staffInfo.idType}} {{staffInfo.idNumber}}</td>\r\n                                    <td>{{staffInfo.institution}}</td>\r\n                                    <td class=\"text-danger\">{{staffInfo.role}}</td>\r\n                                    <td  class=\"td-actions text-right\">\r\n                                        <button  class=\"btn btn-primary btn-simple btn-xs\" rel=\"tooltip\" title=\"Edit Task\" type=\"button\" (click)=\"editView(staffInfo._id)\">\r\n                                            <i  class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-danger btn-simple btn-xs\" rel=\"tooltip\" title=\"Remove\" type=\"button\" (click)=\"delete(staffInfo._id)\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/table-list/staff/staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_staff_staff_service__ = __webpack_require__("./src/app/services/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffComponent = /** @class */ (function () {
    function StaffComponent(staffService, router) {
        this.staffService = staffService;
        this.router = router;
        this.getStaff();
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent.prototype.getStaff = function () {
        var _this = this;
        this.staffService.getStaff()
            .subscribe(function (staffRes) {
            _this.staff = staffRes;
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Any fool can use a computer');
        });
    };
    StaffComponent.prototype.delete = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: '¿Estas seguro?',
            text: 'Deseas eliminarlo',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar',
        })
            .then(function (result) {
            if (result.value) {
                _this.staffService.deleteStaff(id)
                    .subscribe(function (staffRes) {
                    console.log(_this.staff);
                    for (var i = 0; i < _this.staff.length; i++) {
                        if (_this.staff[i]._id === id) {
                            _this.staff.splice(i, 1);
                        }
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    StaffComponent.prototype.editView = function (id) {
        this.router.navigate(['admin/editStaff', id]);
    };
    StaffComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-staff',
            template: __webpack_require__("./src/app/table-list/staff/staff.component.html"),
            styles: [__webpack_require__("./src/app/table-list/staff/staff.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_staff_staff_service__["a" /* StaffService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/table-list/table-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["HttpLoaderFactory"] = HttpLoaderFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListModule", function() { return TableListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__table_list_routing__ = __webpack_require__("./src/app/table-list/table-list.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__delegates_delegates_component__ = __webpack_require__("./src/app/table-list/delegates/delegates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__delegations_delegations_component__ = __webpack_require__("./src/app/table-list/delegations/delegations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__staff_staff_component__ = __webpack_require__("./src/app/table-list/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_staff_edit_staff_component__ = __webpack_require__("./src/app/table-list/edit-staff/edit-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_delegations_edit_delegations_component__ = __webpack_require__("./src/app/table-list/edit-delegations/edit-delegations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_delegates_edit_delegates_component__ = __webpack_require__("./src/app/table-list/edit-delegates/edit-delegates.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var TableListModule = /** @class */ (function () {
    function TableListModule() {
    }
    TableListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__table_list_routing__["a" /* ComponentsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__delegates_delegates_component__["a" /* DelegatesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__delegations_delegations_component__["a" /* DelegationsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__staff_staff_component__["a" /* StaffComponent */],
                __WEBPACK_IMPORTED_MODULE_11__edit_staff_edit_staff_component__["a" /* EditStaffComponent */],
                __WEBPACK_IMPORTED_MODULE_12__edit_delegations_edit_delegations_component__["a" /* EditDelegationsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__edit_delegates_edit_delegates_component__["a" /* EditDelegatesComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__delegates_delegates_component__["a" /* DelegatesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__delegations_delegations_component__["a" /* DelegationsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__staff_staff_component__["a" /* StaffComponent */],
            ]
        })
    ], TableListModule);
    return TableListModule;
}());



/***/ }),

/***/ "./src/app/table-list/table-list.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__delegates_delegates_component__ = __webpack_require__("./src/app/table-list/delegates/delegates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delegations_delegations_component__ = __webpack_require__("./src/app/table-list/delegations/delegations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_staff_component__ = __webpack_require__("./src/app/table-list/staff/staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_staff_edit_staff_component__ = __webpack_require__("./src/app/table-list/edit-staff/edit-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_delegates_edit_delegates_component__ = __webpack_require__("./src/app/table-list/edit-delegates/edit-delegates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_delegations_edit_delegations_component__ = __webpack_require__("./src/app/table-list/edit-delegations/edit-delegations.component.ts");






var ComponentsRoutes = [
    {
        path: 'delegates',
        component: __WEBPACK_IMPORTED_MODULE_0__delegates_delegates_component__["a" /* DelegatesComponent */]
    }, {
        path: 'delegations',
        component: __WEBPACK_IMPORTED_MODULE_1__delegations_delegations_component__["a" /* DelegationsComponent */]
    },
    {
        path: 'staff',
        component: __WEBPACK_IMPORTED_MODULE_2__staff_staff_component__["a" /* StaffComponent */]
    },
    {
        path: 'editStaff/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__edit_staff_edit_staff_component__["a" /* EditStaffComponent */]
    },
    {
        path: 'editDelegations/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__edit_delegations_edit_delegations_component__["a" /* EditDelegationsComponent */]
    },
    {
        path: 'editDelegates/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__edit_delegates_edit_delegates_component__["a" /* EditDelegatesComponent */]
    }
];


/***/ }),

/***/ "./src/app/typography/typography.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">Material Dashboard Heading</h4>\r\n                    <p class=\"category\">Created using Roboto Font Family</p>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div id=\"typography\">\r\n                        <div class=\"title\">\r\n                            <h2>Typography</h2>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"tim-typo\">\r\n                                <h1><span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h2><span class=\"tim-note\">Header 2</span>The life of Material Dashboard </h2>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h3><span class=\"tim-note\">Header 3</span>The life of Material Dashboard </h3>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h4><span class=\"tim-note\">Header 4</span>The life of Material Dashboard </h4>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h5><span class=\"tim-note\">Header 5</span>The life of Material Dashboard </h5>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h6><span class=\"tim-note\">Header 6</span>The life of Material Dashboard </h6>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <p><span class=\"tim-note\">Paragraph</span>\r\n                                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Quote</span>\r\n                                <blockquote>\r\n                                 <p>\r\n                                 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\r\n                                 </p>\r\n                                 <small>\r\n                                 Kanye West, Musician\r\n                                 </small>\r\n                                </blockquote>\r\n                            </div>\r\n\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Muted Text</span>\r\n                                <p class=\"text-muted\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Primary Text</span>\r\n                                <p class=\"text-primary\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Info Text</span>\r\n                                <p class=\"text-info\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Success Text</span>\r\n                                <p class=\"text-success\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Warning Text</span>\r\n                                <p class=\"text-warning\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Danger Text</span>\r\n                                <p class=\"text-danger\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h2><span class=\"tim-note\">Small Tag</span>\r\n                                    Header with small subtitle <br>\r\n                                    <small>Use \"small\" tag for the headers</small>\r\n                                </h2>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-typography',
            template: __webpack_require__("./src/app/typography/typography.component.html"),
            styles: [__webpack_require__("./src/app/typography/typography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 col-md-offset-2\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\r\n                        <h4 class=\"title\"><b>Descargas</b></h4>\r\n                        <!--<p class=\"category\">Descargas</p>-->\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"table-responsive table-upgrade\">\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th></th>\r\n                                        <th class=\"text-center\">Formato</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Delegados</td>\r\n                                        <td class=\"text-center\">\r\n                                            <a (click)=\"delegados()\" class=\"btn btn-round btn-fill btn-default\" download>.XLSX</a>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Instituciones</td>\r\n                                        <td class=\"text-center\">\r\n                                            <a (click)=\"instituciones()\" class=\"btn btn-round btn-fill btn-default\" download>.XLSX</a>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Staff</td>\r\n                                        <td class=\"text-center\">\r\n                                            <a (click)=\"staff()\" class=\"btn btn-round btn-fill btn-default\" download>.XLSX</a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_delegate_delegate_service__ = __webpack_require__("./src/app/services/delegate/delegate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_delegation_delegation_service__ = __webpack_require__("./src/app/services/delegation/delegation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_staff_staff_service__ = __webpack_require__("./src/app/services/staff/staff.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent(delegateService, delegationService, staffService) {
        this.delegateService = delegateService;
        this.delegationService = delegationService;
        this.staffService = staffService;
        this.title = 'app';
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent.prototype.xlsx = function (json, nombre) {
        var ws_name = 'SomeSheet';
        var wb = { SheetNames: [], Sheets: {} };
        var ws = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].json_to_sheet(json);
        wb.SheetNames.push(ws_name);
        wb.Sheets[ws_name] = ws;
        var wbout = Object(__WEBPACK_IMPORTED_MODULE_1_xlsx__["write"])(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i !== s.length; ++i) {
                view[i] = s.charCodeAt(i) & 0xFF;
            }
            ;
            return buf;
        }
        var fileName = nombre + '.xlsx';
        Object(__WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"])(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), fileName);
    };
    ;
    UpgradeComponent.prototype.delegados = function () {
        var _this = this;
        this.delegateService.getDelegates()
            .subscribe(function (delegatesRes) {
            _this.xlsx(delegatesRes, 'delegados');
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    UpgradeComponent.prototype.instituciones = function () {
        var _this = this;
        this.delegationService.getDelegations()
            .subscribe(function (delegationRes) {
            _this.xlsx(delegationRes, 'instituciones');
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    UpgradeComponent.prototype.staff = function () {
        var _this = this;
        this.staffService.getStaff()
            .subscribe(function (delegationRes) {
            _this.xlsx(delegationRes, 'staff');
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
                type: 'error',
                title: 'Oops...',
                text: err.json().message,
                confirmButtonColor: '#d33',
            });
        });
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upgrade',
            template: __webpack_require__("./src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("./src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_delegate_delegate_service__["a" /* DelegateService */], __WEBPACK_IMPORTED_MODULE_5__services_delegation_delegation_service__["a" /* DelegationService */], __WEBPACK_IMPORTED_MODULE_6__services_staff_staff_service__["a" /* StaffService */]])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/app/user-page/intro/intro.component.css":
/***/ (function(module, exports) {

module.exports = "/*!\r\n\r\n =========================================================\r\n * Gaia Bootstrap Template - v1.0.1\r\n =========================================================\r\n\r\n * Product Page: https://www.creative-tim.com/product/gaia-bootstrap-template\r\n * Copyright 2017 Creative Tim (http://www.creative-tim.com)\r\n * Licensed under MIT (https://github.com/creativetimofficial/gaia-bootstrap-template/blob/master/LICENSE.md)\r\n\r\n =========================================================\r\n\r\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\r\n */\r\n\r\n/*      light colors         */\r\n\r\nhtml {\r\n  font-size: 14px;\r\n  -ms-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n}\r\n\r\nbody {\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 100%;\r\n}\r\n\r\n@media (min-width: 58em) {\r\n  body {\r\n    font-size: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 115em) {\r\n  body {\r\n    font-size: 110%;\r\n  }\r\n}\r\n\r\n@media (min-width: 125em) {\r\n  body {\r\n    font-size: 115%;\r\n  }\r\n}\r\n\r\n@media (min-width: 145em) {\r\n  body {\r\n    font-size: 120%;\r\n  }\r\n}\r\n\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n  body {\r\n    -webkit-font-feature-settings: normal;\r\n            font-feature-settings: normal;\r\n    /* Internet Explorer fix */\r\n  }\r\n}\r\n\r\n.logo {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.section {\r\n  padding: 50px 0;\r\n  position: relative;\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n/* HOME PAGE */\r\n\r\n.section .image {\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 2;\r\n  position: absolute;\r\n  display: block;\r\n}\r\n\r\n.section-header,\r\n.section-header-blog,\r\n.section-presentation-page {\r\n  padding: 0;\r\n}\r\n\r\n.section-header .container,\r\n.section-header-blog .container,\r\n.section-presentation-page .container {\r\n  z-index: 3;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  top: 0;\r\n}\r\n\r\n.section-header .content,\r\n.section-header-blog .content,\r\n.section-presentation-page .content {\r\n  position: relative;\r\n  color: white;\r\n  text-align: center;\r\n  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);\r\n  vertical-align: center;\r\n  line-height: 1.7;\r\n  position: relative;\r\n  top: 44%;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.section .parallax,\r\n.section .static-image {\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n.filter {\r\n  position: relative;\r\n  height: 100%;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.filter:before {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  z-index: 3;\r\n  content: \"\";\r\n  opacity: .7;\r\n  background: #333;\r\n}\r\n\r\n.filter .title-area .description {\r\n  color: #FFFFFF;\r\n}\r\n\r\n.filter .separator {\r\n  color: #FFFFFF;\r\n}\r\n\r\n.filter .separator:before, .filter .separator:after {\r\n  border-color: #FFFFFF;\r\n}\r\n\r\n.filter.filter-color-black:before {\r\n  background: #333;\r\n}\r\n\r\n.filter.filter-color-gold:before {\r\n  background: #bd986c;\r\n}\r\n\r\n.filter.filter-color-green:before {\r\n  background: #55bea4;\r\n}\r\n\r\n.filter.filter-color-blue:before {\r\n  background: #008b9c;\r\n}\r\n\r\n.filter.filter-color-purple:before {\r\n  background: #50236F;\r\n}\r\n\r\n.filter.filter-color-darkBlue:before {\r\n  background: darkslateblue;\r\n}\r\n\r\n.filter.filter-color-red:before {\r\n  background: #de6168;\r\n}"

/***/ }),

/***/ "./src/app/user-page/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-header\">\r\n    <div class=\"parallax filter filter-color-darkBlue\">\r\n        <div class=\"image\" style=\"background-image: url('../../../assets/img/cover12.webp')\"></div>\r\n        <div class=\"container\">\r\n            <div class=\"content\">\r\n                <!--Logo-->\r\n                <img alt=\"...\" class=\"logo\" src=\"../../../assets/img/icons/munum-icon.svg\">\r\n\r\n                <!--Seleccion de idiomas-->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-offset-5 col-md-2\">\r\n                        <a routerLink='/land' class=\"btn btn-white btn-lg\" (click)=\"switchLanguage('es') \">\r\n                            Español\r\n                        </a>\r\n                    </div>\r\n                    <!--<div class=\"col-md-2\">-->\r\n                        <!--<a routerLink='/land' class=\"btn btn-white btn-lg\" (click)=\"switchLanguage('en') \">-->\r\n                            <!--English-->\r\n                        <!--</a>-->\r\n                    <!--</div>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-page/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cookies_cookies_service__ = __webpack_require__("./src/app/services/cookies/cookies.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroComponent = /** @class */ (function () {
    function IntroComponent(translate, cookiesService) {
        this.translate = translate;
        this.cookiesService = cookiesService;
        ///constructor(private cookiesService: CookiesService ) {
        translate.setDefaultLang('es');
        cookiesService.setCookie('lang', 'es', 2);
    }
    IntroComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
        this.cookiesService.setCookie('lang', language, 2);
    };
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intro',
            template: __webpack_require__("./src/app/user-page/intro/intro.component.html"),
            styles: [__webpack_require__("./src/app/user-page/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__services_cookies_cookies_service__["a" /* CookiesService */]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.required {\r\n    color: orange;\r\n}\r\n\r\n.content {\r\n    padding-top: 10vh;\r\n}\r\n\r\n.formFormat {\r\n    line-height: 1.07142857;\r\n    color: #AAAAAA;\r\n    margin: 16px 0 0 0;\r\n}\r\n\r\n.formFormat2 {\r\n    line-height: 1.07142857;\r\n    color: #AAAAAA;\r\n    margin: 0px 0 0 0 !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"orange\">\r\n                    <h4 class=\"title\">Edit Profile</h4>\r\n                    <p class=\"category\">Complete your profile</p>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <!--Formularo de registro-->\r\n                    <form (submit)=\"onSubmit()\">\r\n\r\n                        <!--Error-->\r\n                        <div class=\"text-danger text-center\" *ngIf=\"err\">\r\n                            {{err}}\r\n                        </div>\r\n\r\n                        <!--Content-->\r\n                        <br>\r\n                        <span class=\"required\"><b>General Information</b></span>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"form-group form-black  \">\r\n                                    <label class=\"control-label\">Fecha nacimiento (DD/MM/YY)<span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.birth\"\r\n                                           name=\"birth\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-7\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Celular<span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.cellphone\"\r\n                                           name=\"cellphone\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Pais de residencia<span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.country\"\r\n                                           name=\"country\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Ciudad de residencia<span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.city\" name=\"city\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Instituto de educacion<span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.institution\"\r\n                                           name=\"institution\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Carrera<span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.degree\"\r\n                                           name=\"degree\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <br>\r\n                            <div class=\"col-md-2\">\r\n                                <div class=\"formFormat2\">Vegetariano (N/S)</div>\r\n                            </div>\r\n                            <div class=\"col-md-10\">\r\n                                <div class=\"togglebutton\">\r\n                                    <label>\r\n                                        <input type=\"checkbox\" [(ngModel)]=\"userProfile.vegetarian\" name=\"vegetarian\">\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <br>\r\n                        <hr>\r\n                        <span class=\"required\"><b>Informacion de emergencia</b></span>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-2\">\r\n                                <select class=\"form-control formFormat\" [(ngModel)]=\"userProfile.blood\" name=\"blood\">\r\n                                    <option value=\"A+\">A+</option>\r\n                                    <option value=\"A-\">A-</option>\r\n                                    <option value=\"B+\">B+</option>\r\n                                    <option value=\"B-\">B-</option>\r\n                                    <option value=\"O+\">O+</option>\r\n                                    <option value=\"O-\">O-</option>\r\n                                    <option value=\"AB+\">AB+</option>\r\n                                    <option value=\"AB-\">AB-</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Seguro medico<span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.insurance\"\r\n                                           name=\"insurance\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Condicion special de salud</label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.specialCondition\"\r\n                                           name=\"specialCondition\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Nombre de concatacto de emergencia<span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.contactName\"\r\n                                           name=\"contactName\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\">Telefono de contacto de emergincia <span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.contactPhone\"\r\n                                           name=\"contactPhone\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black\">\r\n                                    <label class=\"control-label\"> Numero de años que ha participado en MUNs<span\r\n                                            class=\"required\">*</span></label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"userProfile.numberMun\"\r\n                                           name=\"numberMun\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\">Enviar</button>\r\n                        <div class=\"clearfix\"></div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card card-profile\">\r\n                <div class=\"card-avatar\">\r\n                    <a href=\"#pablo\">\r\n                        <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" />\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"content\">\r\n                    <h6 class=\"category text-gray\">{{userProfile.idType}}: {{userProfile.idNumber}}</h6>\r\n                    <h4 class=\"card-title\">{{userProfile.name}}{{userProfile.lastName}}</h4>\r\n                    <p class=\"card-content\">\r\n                       {{userProfile.email}}\r\n                    </p>\r\n                    <!--<a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_staff_staff_service__ = __webpack_require__("./src/app/services/staff/staff.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(staffService) {
        var _this = this;
        this.staffService = staffService;
        this.userProfile = {
            name: '',
            lastName: '',
            email: '',
            birth: '',
            idType: '',
            idNumber: '',
            cellphone: '',
            country: '',
            city: '',
            institution: '',
            degree: '',
            vegetarian: '',
            blood: '',
            insurance: '',
            specialCondition: '',
            contactName: '',
            contactPhone: '',
            numberMun: ''
        };
        this.staffService.meStaff()
            .subscribe(function (userProfile) {
            _this.userProfile = userProfile;
        }, function (err) {
            console.log(err);
            _this.err = err.message;
        });
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.onSubmit = function () {
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_staff_staff_service__["a" /* StaffService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map