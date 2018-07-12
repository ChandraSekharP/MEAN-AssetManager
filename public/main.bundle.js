webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_dashboard_dashboard_component__ = __webpack_require__("./src/app/assets/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_assets_component__ = __webpack_require__("./src/app/assets/assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_add_assets_add_assets_component__ = __webpack_require__("./src/app/assets/add-assets/add-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_get_assets_get_assets_component__ = __webpack_require__("./src/app/assets/get-assets/get-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_edit_assets_edit_assets_component__ = __webpack_require__("./src/app/assets/edit-assets/edit-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_delete_assets_delete_assets_component__ = __webpack_require__("./src/app/assets/delete-assets/delete-assets.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';










var routes = [
    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    //{ path: 'Register', component: RegisterComponent },
    //{ path: 'Login', component: LoginComponent },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_6__assets_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'Assets', component: __WEBPACK_IMPORTED_MODULE_7__assets_assets_component__["a" /* AssetsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            { path: 'AddAssets', component: __WEBPACK_IMPORTED_MODULE_8__assets_add_assets_add_assets_component__["a" /* AddAssetsComponent */] },
            { path: 'GetAssets', component: __WEBPACK_IMPORTED_MODULE_9__assets_get_assets_get_assets_component__["a" /* GetAssetsComponent */] },
            { path: 'EditAssets', component: __WEBPACK_IMPORTED_MODULE_10__assets_edit_assets_edit_assets_component__["a" /* EditAssetsComponent */] },
            { path: 'DeleteAssets', component: __WEBPACK_IMPORTED_MODULE_11__assets_delete_assets_delete_assets_component__["a" /* DeleteAssetsComponent */] }
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuardService */]] }
    //{ path: 'Allocations', component: AllocationsComponent, children: [{path: 'NewAllocations', component: NewAllocationsComponent}] },
    //{ path: 'Assets', loadChildren: 'app/assets/assets.module#AssetsModule', data: { preload: true } }
    //{ path: 'Allocations', loadChildren: 'app/allocations/allocations.module#AllocationsModule', data: { preload: true } }
    //{ path: 'AddAsset', component: AddComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { enableTracing: true, useHash: true })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid site-content\">\n  <div class=\"row\">\n    <header class=\"col-12 clearfix\">\n      <h1 class=\"pull-left\"><a routerLink=\"/Dashboard\" routerLinkActive=\"active\">Asset Manager</a></h1>\n      <!-- <nav class=\"pull-left\" [ngClass] = \"'parent-menu'\">\n        <ul class=\"d-none d-sm-block\">\n      \t   <li><a routerLink=\"/Assets\" routerLinkActive=\"active\">Store Assets</a></li>\n      \t\t <li><a routerLink=\"/Allocations\" routerLinkActive=\"active\">Asset Allocations</a></li>\n    \t  </ul>\n        <div class=\"navbar-light d-block d-sm-none\">\n          <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n          <ul class=\"\">\n            <li><a routerLink=\"/Assets\" routerLinkActive=\"active\">Store Assets</a></li>\n       \t\t <li><a routerLink=\"/Allocations\" routerLinkActive=\"active\">Asset Allocations</a></li>\n          </ul>\n        </div>\n    \t</nav> -->\n      <div class=\"pull-right user-profile d-sm-block\" (clickOutside)=\"onClickedOutside($event)\" (click)=\"showUserProfile = !showUserProfile\">\n        <div *ngIf=\"authenticationService.isLoggedIn() && (router.url !== '/' || router.url !== '/Logout')\" class=\"logged-in-user\" [ngClass]=\"showUserProfile ? 'active' : ''\">\n          <!-- <span>Logged in as </span><b>{{authenticationService.currentUser.loginName}}</b> -->\n          <span><b>{{authenticationService.currentUser.username}}</b></span>\n          <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n          <!-- <span class=\"down\"></span> -->\n          <ul *ngIf=\"showUserProfile\">\n            <li>\n              <span>Username</span>\n              <span>{{authenticationService.currentUser.username}}</span>\n            </li>\n            <li>\n              <span>LoginName</span>\n              <span>{{authenticationService.currentUser.loginName}}</span>\n            </li>\n            <li>\n              <span>Email</span>\n              <span>{{authenticationService.currentUser.email}}</span>\n            </li>\n            <li>\n              <!-- <a (click)=\"authenticationService.logout();\" routerLink=\"/Logout\" routerLinkActive=\"active\" *ngIf=\"authenticationService.isLoggedIn()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Logout</a> -->\n              <a routerLink=\"/Logout\" routerLinkActive=\"active\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>Logout</a>\n            </li>\n          </ul>\n        </div>\n        <!-- <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\" *ngIf=\"authenticationService.isLoggedIn()\"></i> -->\n        <!-- <span style=\"padding:0 20px;\">Hello {user.username}</span> -->\n        <!-- <a routerLink=\"/Register\" routerLinkActive=\"active\">Sign Up</a> -->\n\n        <!-- <a routerLink=\"/Logout\" routerLinkActive=\"active\" style=\"color:#fff;\">Sign Out</a> -->\n      </div>\n    </header>\n    <div class=\"col-12 page-content clearfix\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"row\">\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-md-8\">\n\n    <div class=\"assets\" *ngIf=\"assetsList\">\n      <table class=\"table\">\n        <thead class=\"h\">\n          <tr class=\"h\">\n            <th class=\"h\">SKU/th>\n            <th class=\"h\">Category</th>\n            <th class=\"h\">Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"todo\" (dblclick)=\"editTodo(todo)\" *ngFor=\"let todo of todosList\">\n\n            <ng-container *ngIf=\"!editTodos.includes(todo); else editTD\">\n              <td>{{asset.sku}}</td>\n              <td>{{asset.title}}</td>\n              <td>{{asset.date | date}}</td>\n            </ng-container>\n\n            <ng-template #editTD>\n                <td><input type=\"text\" name=\"title\" id=\"title\" (keypress)=\"submitTodo($event, todo)\" [(ngModel)]=\"todo.title\" placeholder=\"Title\" class=\"form-control\"></td>\n                <td><input type=\"text\" name=\"description\" id=\"description\" (keypress)=\"submitTodo($event, todo)\" [(ngModel)]=\"todo.description\" placeholder=\"Description\"\n                    class=\"form-control\"></td>\n                <td>{{todo.date | date}}</td>\n                <td>\n                  <input type=\"text\" name=\"status\" id=\"status\" (keypress)=\"submitTodo($event, todo)\" [(ngModel)]=\"todo.status\" placeholder=\"Status\" class=\"form-control\">\n                </td>\n            </ng-template>\n\n            <td class=\"o\">\n              <button class=\"btn btn-success\" (click)=\"doneTodo(todo)\">\n                <i  class=\"fa fa-check\"></i>\n              </button>\n              <button class=\"btn btn-primary\" (click)=\"editTodo(todo)\">\n                  <i  class=\"fa fa-pencil\"></i>\n                </button>\n              <button class=\"btn btn-danger\" (click)=\"deleteTodo(todo)\">\n                  <i  class=\"fa fa-trash\"></i>\n                </button>\n            </td>\n\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n    <form>\n      <div class=\"form-row\">\n\n        <div class=\"col-md-5\">\n          <input type=\"text\" name=\"sku\" id=\"sku\" [(ngModel)]=\"newAsset.sku\" placeholder=\"SKU\" class=\"form-control\">\n        </div>\n        <div class=\"col-md-5\">\n          <input name=\"category\" id=\"category\" [(ngModel)]=\"newAsset.category\" placeholder=\"Category\" class=\"form-control\">\n        </div>\n        <div class=\"col-md-2\">\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addNewAsset()\">Add Asset</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"col-md-2\">\n\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".site-content, .page-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* height: 100%; */ }\n\n.site-content {\n  min-height: 100%; }\n\nheader {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: #e0bf92;\n  -webkit-box-shadow: 0 3px 9px -1px #543203;\n          box-shadow: 0 3px 9px -1px #543203;\n  /* @media screen and (min-width:1200px) {\r\n     padding: 20px;\r\n   } */ }\n\n@media screen and (min-width: 768px) {\n    header {\n      padding: 15px; } }\n\n@media screen and (min-width: 992px) {\n    header {\n      padding: 10px 20px; } }\n\nheader h1 {\n    margin: 0;\n    font-size: 1em;\n    font-weight: bold;\n    text-align: left;\n    text-transform: uppercase;\n    text-shadow: 1px 1px #f5e2c9; }\n\nheader h1 > a {\n      color: #623a03; }\n\nheader h1 > a:hover {\n        text-decoration: none; }\n\n@media screen and (max-width: 459px) {\n      header h1 {\n        padding-top: 0.25em; } }\n\n@media screen and (min-width: 400px) and (max-width: 575px) {\n      header h1 {\n        padding-top: 0.15em;\n        font-size: 1.15em; } }\n\n@media screen and (min-width: 576px) and (max-width: 767px) {\n      header h1 {\n        padding-top: 0;\n        font-size: 1.5em; } }\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n      header h1 {\n        font-size: 1.75em; } }\n\n@media screen and (min-width: 992px) and (max-width: 1199px) {\n      header h1 {\n        font-size: 2.25em; } }\n\n@media screen and (min-width: 1200px) {\n      header h1 {\n        padding-top: 2px;\n        font-size: 2.5em; } }\n\n.page-content {\n  /* height: calc(100vh - 90px); */\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  margin: 0px auto;\n  padding: 25px 0; }\n\n/* .parent-menu {\r\n  @media (max-width:575px) {\r\n    padding: 0 10px;\r\n  }\r\n  ul {\r\n    li {\r\n      a {\r\n        display: block;\r\n        height: 60px;\r\n        line-height: 60px;\r\n        font-family: Arial;\r\n        font-size: 14px;\r\n        color: #3a3a3\r\n        text-align: center;\r\n        padding: 0 15px;\r\n        text-decoration: none;\r\n\r\n        &:hover:not(.active) {\r\n            color: #f1f1f1;\r\n            background-color: #52bad5;\r\n        }\r\n\r\n        @media (max-width:575px) {\r\n          display: block;\r\n          height: 20px;\r\n          line-height: 20px;\r\n          padding: 0 15px 0 0;\r\n          font-family: Arial;\r\n          font-size: 12px;\r\n          color: #3a3a3a;\r\n          text-align: left;\r\n          text-decoration: none;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .active {\r\n      color: #f1f1f1;\r\n      background-color: #52bad5;\r\n  }\r\n} */\n\n.user-profile {\n  position: relative;\n  top: 0px;\n  margin: 0; }\n\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n    .user-profile {\n      top: 2px; } }\n\n@media screen and (min-width: 1200px) {\n    .user-profile {\n      top: 5px; } }\n\n.user-profile .logged-in-user {\n    padding: 4px 8px;\n    font-size: 0.75em;\n    color: #623a03;\n    cursor: pointer;\n    background-color: #fff;\n    /* & > span {\r\n        border: solid black;\r\n        border-width: 0 2px 2px 0;\r\n        display: inline-block;\r\n        padding: 3px;\r\n        margin-left:  10px;\r\n        position: relative;\r\n        bottom: 3px;\r\n        &.down {\r\n          transform: rotate(45deg);\r\n          -webkit-transform: rotate(45deg);\r\n        }\r\n      } */ }\n\n.user-profile .logged-in-user.active {\n      background-color: #e4e4e4; }\n\n@media screen and (min-width: 576px) and (max-width: 767px) {\n      .user-profile .logged-in-user {\n        font-size: 0.8em; } }\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n      .user-profile .logged-in-user {\n        font-size: 0.825em; } }\n\n@media screen and (min-width: 992px) {\n      .user-profile .logged-in-user {\n        padding: 8px 16px;\n        font-size: 0.9em; } }\n\n@media screen and (min-width: 1200px) {\n      .user-profile .logged-in-user {\n        font-size: 1em; } }\n\n@media screen and (max-width: 399px) {\n      .user-profile .logged-in-user > span {\n        display: none; } }\n\n.user-profile .logged-in-user i.fa-angle-down {\n      padding-left: 3px;\n      font-size: 1em;\n      font-weight: bold;\n      color: #010101;\n      display: inline-block;\n      /* padding-top: 3px; */ }\n\n@media screen and (min-width: 400px) and (max-width: 991px) {\n        .user-profile .logged-in-user i.fa-angle-down {\n          font-size: 1.25em; } }\n\n@media screen and (min-width: 992px) {\n        .user-profile .logged-in-user i.fa-angle-down {\n          padding-left: 6px; } }\n\n.user-profile .logged-in-user ul {\n      position: absolute;\n      right: 0;\n      top: 26px;\n      z-index: 11;\n      cursor: auto;\n      width: 150px;\n      background-color: #e4e4e4; }\n\n@media screen and (min-width: 400px) and (max-width: 575px) {\n        .user-profile .logged-in-user ul {\n          width: 150px; } }\n\n@media screen and (min-width: 576px) and (max-width: 767px) {\n        .user-profile .logged-in-user ul {\n          width: 175px; } }\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n        .user-profile .logged-in-user ul {\n          width: 200px; } }\n\n@media screen and (min-width: 992px) and (max-width: 1199px) {\n        .user-profile .logged-in-user ul {\n          top: 37px;\n          width: 225px; } }\n\n@media screen and (min-width: 1200px) {\n        .user-profile .logged-in-user ul {\n          top: 40px;\n          width: 250px; } }\n\n.user-profile .logged-in-user ul li {\n        padding: 0.5em;\n        border-bottom: 1px solid #ccc; }\n\n.user-profile .logged-in-user ul li:last-child {\n          border-bottom: none;\n          background-color: #ccc; }\n\n@media screen and (min-width: 768px) {\n            .user-profile .logged-in-user ul li:last-child {\n              padding: 0.75em; } }\n\n.user-profile .logged-in-user ul li:last-child a {\n            display: block;\n            color: #333;\n            font-size: 0.8em;\n            font-weight: bold;\n            text-transform: uppercase; }\n\n@media screen and (min-width: 400px) and (max-width: 575px) {\n              .user-profile .logged-in-user ul li:last-child a {\n                font-size: 0.9em; } }\n\n@media screen and (min-width: 576px) and (max-width: 767px) {\n              .user-profile .logged-in-user ul li:last-child a {\n                font-size: 0.95em; } }\n\n@media screen and (min-width: 768px) {\n              .user-profile .logged-in-user ul li:last-child a {\n                font-size: 0.975em; } }\n\n.user-profile .logged-in-user ul li:last-child a i {\n              padding-right: 3px;\n              color: #623a03; }\n\n.user-profile .logged-in-user ul li span:nth-of-type(1) {\n          display: block;\n          color: #008cba;\n          font-size: 0.7em;\n          /* line-height: 1.5;*/\n          text-transform: uppercase; }\n\n@media screen and (min-width: 400px) and (max-width: 575px) {\n            .user-profile .logged-in-user ul li span:nth-of-type(1) {\n              font-size: 0.75em; } }\n\n@media screen and (min-width: 576px) and (max-width: 767px) {\n            .user-profile .logged-in-user ul li span:nth-of-type(1) {\n              font-size: 0.8em; } }\n\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n            .user-profile .logged-in-user ul li span:nth-of-type(1) {\n              font-size: 0.825em; } }\n\n.user-profile .logged-in-user ul li span:nth-of-type(2) {\n          font-size: 0.8em;\n          color: #000; }\n\n@media screen and (min-width: 400px) and (max-width: 575px) {\n            .user-profile .logged-in-user ul li span:nth-of-type(2) {\n              font-size: 0.85em; } }\n\n@media screen and (min-width: 576px) and (max-width: 767px) {\n            .user-profile .logged-in-user ul li span:nth-of-type(2) {\n              font-size: 0.9em; } }\n\n@media screen and (min-width: 768px) and (max-width: 1199px) {\n            .user-profile .logged-in-user ul li span:nth-of-type(2) {\n              font-size: 0.925em; } }\n\n/* .parent-container {\r\n    padding-left: 10px;\r\n}\r\n.child-container {\r\n    padding-left: 10px;\r\n}\r\n.sub-child-container {\r\n    padding-left: 10px;\r\n}\r\n.child-menu  {\r\n    padding-left: 25px;\r\n}\r\n.child-menu .active{\r\n    color: #52bad5;\r\n}\r\n.sub-child-menu {\r\n    background-color: #f1f1f1;\r\n    width: 275px;\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.sub-child-menu .active{\r\n    color: #4CAF50;\r\n}\r\nbutton {\r\n    background-color: #008CBA;\r\n    color: white;\r\n} */\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
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
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.title = 'Asset Manager Application';
        this.showUserProfile = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.login = true;
        //this.register = false;
        /* this.authenticationService.getUser()
          .subscribe(users => {
            this.usersList = users
            console.log(users)
          }) */
    };
    AppComponent.prototype.onClickedOutside = function (e) {
        //console.log('Clicked outside:', e);
        this.showUserProfile = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_asset_filter_pipe__ = __webpack_require__("./src/app/assets/asset-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_multi_filter_pipe__ = __webpack_require__("./src/app/assets/multi-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_asset_sort_pipe__ = __webpack_require__("./src/app/assets/asset-sort.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_asset_keys_pipe__ = __webpack_require__("./src/app/assets/asset-keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_spinner__ = __webpack_require__("./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__logout_logout_component__ = __webpack_require__("./src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__click_detect_directive__ = __webpack_require__("./src/app/click-detect.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_dashboard_dashboard_component__ = __webpack_require__("./src/app/assets/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assets_assets_component__ = __webpack_require__("./src/app/assets/assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assets_add_assets_add_assets_component__ = __webpack_require__("./src/app/assets/add-assets/add-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__assets_get_assets_get_assets_component__ = __webpack_require__("./src/app/assets/get-assets/get-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__assets_edit_assets_edit_assets_component__ = __webpack_require__("./src/app/assets/edit-assets/edit-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__assets_delete_assets_delete_assets_component__ = __webpack_require__("./src/app/assets/delete-assets/delete-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__welcome_welcome_service__ = __webpack_require__("./src/app/welcome/welcome.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__assets_asset_service__ = __webpack_require__("./src/app/assets/asset.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { EqualValidator } from './equal-validator.directive';











//import { ActionsComponent } from './actions/actions.component';

//import { GeneratorComponent } from './assets/asset-id-generator';






//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




//import { MessagesComponent } from './messages/messages/messages.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__welcome_welcome_component__["a" /* WelcomeComponent */],
                //GeneratorComponent,
                __WEBPACK_IMPORTED_MODULE_19__assets_assets_component__["a" /* AssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__assets_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__assets_add_assets_add_assets_component__["a" /* AddAssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__assets_get_assets_get_assets_component__["a" /* GetAssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__assets_edit_assets_edit_assets_component__["a" /* EditAssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__assets_delete_assets_delete_assets_component__["a" /* DeleteAssetsComponent */],
                //ActionsComponent,
                __WEBPACK_IMPORTED_MODULE_13__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__click_detect_directive__["a" /* ClickOutsideDirective */],
                __WEBPACK_IMPORTED_MODULE_6__assets_asset_filter_pipe__["a" /* PipeFilter */],
                __WEBPACK_IMPORTED_MODULE_7__assets_multi_filter_pipe__["a" /* PipeMultipleFilter */],
                __WEBPACK_IMPORTED_MODULE_8__assets_asset_sort_pipe__["a" /* PipeSort */],
                __WEBPACK_IMPORTED_MODULE_9__assets_asset_keys_pipe__["a" /* KeysPipe */] /*,
                MessagesComponent*/
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_spinner__["NgxSpinnerModule"]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_24__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_25__auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_26__welcome_welcome_service__["a" /* WelcomeService */], __WEBPACK_IMPORTED_MODULE_27__assets_asset_service__["a" /* AssetService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assets/add-assets/add-assets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"how-to-use\">\n    <h5>How To Use This Page</h5>\n    <ul class=\"row\">\n      <li class=\"col-sm-6\">Refer to the hints about what text to type for Primary and Secondary features.</li>\n      <li class=\"col-sm-6\">Type important features of the asset in Primary and Secondary feature textboxes.</li>\n      <li class=\"col-sm-6\">'Save Asset to Store' button will be activated only if the form is valid.</li>\n    </ul>\n    <h1 class=\"col-sm-12\">Add New Assets to Store</h1>\n  </div>\n  <div class=\"form-add-assets\">\n    <div class=\"row\">\n      <div class=\"col-12 alert alert-success\" *ngIf=\"showSuccessMessage\">\n        <div class=\"text-center\">\n          <h3>Asset <u>successfully added</u> to Store!</h3>\n        </div>\n      </div>\n      <div class=\"col-12 alert alert-danger\" *ngIf=\"showErrorMessage\">\n        <div class=\"text-center\">\n          <h4>Asset <u>not added</u> to Store!</h4>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <form (ngSubmit)=\"addAsset()\" #assetForm=\"ngForm\" class=\"col-sm-8\">\n        <h6 class=\"text-info\">All fields are mandatory</h6>\n        <div class=\"row\">\n            <!-- <div class=\"form-group col-sm-3 offset-sm-1\"> -->\n              <!-- <span>\n                <label name=\"assetId\">Asset ID</label> {{ counterValue }} <generator [countAssetID]=\"counterValue\" (updateID)=\"counterUpdate($event)\"></generator>\n              </span>\n              <span class=\"highlight\"></span>\n              <span class=\"bar\"></span>-->\n              <!-- <input type=\"text\" class=\"input-text\" [ngModel]=\"newAsset.assetID\" (ngModelChange)=\"newAsset.assetID=$randomString\" name=\"assetId\" aria-label=\"Asset ID\" required />\n              <span class=\"highlight\"></span>\n              <span class=\"bar\"></span>\n              <label>Asset ID</label> -->\n              <!-- <span>{{randomString()}}</span> -->\n            <!-- </div> -->\n            <div class=\"form-group col-sm-5\">\n              <label>Choose a Category</label>\n              <select name=\"category\" [(ngModel)]=\"newAsset.category\" class=\"form-control\" required>\n                <option value=\"\" hidden>-- Select One --</option>\n                <option *ngFor=\"let category of categories\" [value]=\"category.value\" style=\"line-height:2em\">&nbsp;{{category.display}}&#13;</option>\n              </select>\n            </div>\n            <div class=\"form-group col-sm-5 offset-sm-2\">\n              <label>Choose a Manufacturer</label>\n              <select name=\"make\" [(ngModel)]=\"newAsset.make\" class=\"form-control\" required>\n                <option value=\"\" hidden>-- Select One --</option>\n                <option *ngFor=\"let make of makes\" [value]=\"make.value\">{{make.display}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n              <input type=\"text\" class=\"input-text\" [(ngModel)]=\"newAsset.primary\" name=\"primary\" placeholder=\"Asset Primary Feature\" aria-label=\"Asset Primary Feature\" autocomplete=\"off\" required />\n              <!-- <span class=\"highlight\"></span>\n              <span class=\"bar\"></span>\n              <label>Primary Feature</label> -->\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n              <input type=\"text\" class=\"input-text\" [(ngModel)]=\"newAsset.secondary\" name=\"secondary\" placeholder=\"Asset Secondary Feature\" aria-label=\"Asset Secondary Feature\" autocomplete=\"off\" required />\n              <!-- <span class=\"highlight\"></span>\n              <span class=\"bar\"></span>\n              <label>Secondary Feature</label> -->\n            </div>\n          </div>\n          <!-- <div class=\"select-dropdown animated zoom\">\n            <input type=\"radio\" name=\"option\" name=\"category\" [(ngModel)]=\"newAsset.category\">\n            <i class=\"toggle fa fa-caret-down\" aria-hidden=\"true\"></i>\n            <i class=\"toggle fa fa-caret-up\" aria-hidden=\"true\"></i>\n            <span class=\"placeholder\">Choose Category</span>\n            <label class=\"option\" *ngFor=\"let category of categories\">\n                <input type=\"radio\" name=\"option\" [value]=\"category.value\">\n                <span class=\"title animated fadeIn\"><i class=\"icon icon-speedometer\"></i>{{category.display}}</span>\n            </label>\n        </div> -->\n        <div class=\"row\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!assetForm.valid\">Save Asset to Store</button>\n        </div>\n      </form>\n      <div class=\"col-sm-4 asset-features\">\n        <h6><u>Hint: Primary Features</u></h6>\n        <ul>\n          <li>Apple Macbook Pro Core i7</li>\n          <li>IBM Server with POWER9 Processor</li>\n          <li>D-Link DIR-615 Wireless N 300 Router</li>\n          <li>Canon MF3010 Multi-function Printer</li>\n          <li>BenQ MS531P Digital Projector</li>\n          <li>Samsung 108cm (43'') Full HD LED TV</li>\n        </ul>\n        <h6><u>Hint: Secondary Features</u></h6>\n        <ul>\n          <li>64 bit Mac OS Operating System, 512 GB SSD, 15 inch Display</li>\n          <li>Express 4.0 connection, an NVIDIA Interconnect</li>\n          <li>No Modem, 300 Mbps Speed, 2.4 GHz</li>\n          <li>2 inch LCD, LaserJet M1005</li>\n          <li>30ft projection, 800x600px, 1000hrs lamp</li>\n          <li>1920 x 1080 Full HD,3 HDMI,1 USB</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/assets/add-assets/add-assets.component.scss":
/***/ (function(module, exports) {

module.exports = ".form-add-assets {\n  width: 80%;\n  margin: 2em auto;\n  padding: 1.5em 1.5em 2em;\n  background-color: rgba(255, 255, 255, 0.9);\n  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); }\n  .form-add-assets form .text-info {\n    font-size: 0.95em;\n    color: #ff0202 !important; }\n  .form-add-assets form .form-group {\n    position: relative;\n    margin-bottom: 1em;\n    padding: 1em 0 0;\n    /* .bar {\r\n        display:block;\r\n        position:relative;\r\n        &:before {\r\n          left:50%;\r\n        }\r\n        &:after {\r\n          right:50%;\r\n        }\r\n        &:before, &:after {\r\n          content:'';\r\n          height:1px;\r\n          width:0;\r\n          bottom:1px;\r\n          position:absolute;\r\n          background: #98EED9;\r\n          transition:0.2s ease all;\r\n          -moz-transition:0.2s ease all;\r\n          -webkit-transition:0.2s ease all;\r\n        }\r\n      } */ }\n  .form-add-assets form .form-group .input-text {\n      display: block;\n      width: 100%;\n      padding: 0;\n      font-size: 0.85em;\n      border: none;\n      border-radius: 0;\n      border-bottom: 1px solid #0e7a8e; }\n  .form-add-assets form .form-group .input-text::-webkit-input-placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: #ccc;\n        opacity: 1;\n        /* Firefox */ }\n  .form-add-assets form .form-group .input-text:-ms-input-placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: #ccc;\n        opacity: 1;\n        /* Firefox */ }\n  .form-add-assets form .form-group .input-text::-ms-input-placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: #ccc;\n        opacity: 1;\n        /* Firefox */ }\n  .form-add-assets form .form-group .input-text::placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: #ccc;\n        opacity: 1;\n        /* Firefox */ }\n  .form-add-assets form .form-group .input-text:-ms-input-placeholder {\n        /* Internet Explorer 10-11 */\n        color: #ccc; }\n  .form-add-assets form .form-group .input-text::-ms-input-placeholder {\n        /* Microsoft Edge */\n        color: #ccc; }\n  .form-add-assets form .form-group .input-text:focus, .form-add-assets form .form-group .input-text:valid {\n        color: #333;\n        outline: none;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        border-bottom: 2px solid #cc0000;\n        -webkit-transition: 0.5s ease-in-out all;\n        transition: 0.5s ease-in-out all;\n        -moz-transition: 0.5s ease-in-out;\n        -webkit-transition: 0.5s ease-in-out;\n        /* &~label {\r\n            top: 0px;\r\n            font-size:12px;\r\n            opacity: 0;\r\n            color: #009688;\r\n          }\r\n          &~.bar:before, &~.bar:after {\r\n            width:50%;\r\n          } */ }\n  .form-add-assets form .form-group select {\n      padding: 0.25em;\n      font-size: 0.85em;\n      border-radius: 0; }\n  .form-add-assets form .form-group select:focus {\n        outline: none;\n        border: 1px solid #ccc;\n        -webkit-box-shadow: none;\n                box-shadow: none; }\n  .form-add-assets form .form-group label {\n      margin-bottom: 0;\n      color: #333;\n      font-size: 0.95em;\n      font-weight: normal;\n      /* position:absolute;\r\n        pointer-events:none;\r\n        left:5px;\r\n        top:0px; */\n      transition: 0.2s ease all;\n      -moz-transition: 0.2s ease all;\n      -webkit-transition: 0.2s ease all; }\n  .form-add-assets form button {\n    margin: 1em auto 0;\n    padding: 10px 20px; }\n  .form-add-assets .asset-features {\n    padding-left: 3em; }\n  .form-add-assets .asset-features h6 {\n      padding: 0 0 0.25em;\n      margin-bottom: 0; }\n  .form-add-assets .asset-features ul {\n      margin-bottom: 1em;\n      font-size: 0.75em;\n      color: #aaa; }\n  .form-add-assets .asset-features ul li {\n        list-style-type: square; }\n"

/***/ }),

/***/ "./src/app/assets/add-assets/add-assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_model__ = __webpack_require__("./src/app/assets/asset.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asset_service__ = __webpack_require__("./src/app/assets/asset.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { GeneratorComponent } from '../asset-id-generator';


var AddAssetsComponent = /** @class */ (function () {
    //public counterValue: number;
    function AddAssetsComponent(assetService) {
        this.assetService = assetService;
        this.categories = [
            { value: 'Desktop Computer', display: 'Desktop Computer' },
            { value: 'CPU', display: 'CPU' },
            { value: 'Laptop', display: 'Laptop' },
            { value: 'Mobile Phone', display: 'Mobile Phone' },
            { value: 'iPad', display: 'iPad' },
            { value: 'Printer', display: 'Printer' },
            { value: 'Data Server', display: 'Data Server' },
            { value: 'Router', display: 'Router' },
            { value: 'Projector', display: 'Projector' },
            { value: 'Television', display: 'Television' },
            { value: 'Video Conference TV', display: 'Video Conference TV' },
            { value: 'VOIP Phone', display: 'VOIP Phone' }
        ];
        this.makes = [
            { value: 'N/A', display: 'Not Applicable (N/A)' },
            { value: 'Apple', display: 'Apple' },
            { value: 'Lenovo', display: 'Lenovo' },
            { value: 'Dell', display: 'Dell' },
            { value: 'Cisco', display: 'Cisco' },
            { value: 'Data Link', display: 'Data Link' },
            { value: 'Samsung', display: 'Samsung' },
            { value: 'Google', display: 'Google' },
            { value: 'Hewlett Packard', display: 'Hewlett Packard' },
            { value: 'Intel', display: 'Intel' },
            { value: 'Seagate', display: 'Seagate' },
            { value: 'Benq', display: 'Benq' },
            { value: 'Canon', display: 'Canon' }
        ];
        /* selectedCategory:Category = new Category(0, 'Select One');
        categories: Category[];
      
        constructor(private assetService: AssetService
                    private categoryService: CategoryService) {
          this.categories = this.categoryService.getCategories();
        } */
        //result: string = randomString();
        this.showSuccessMessage = false;
        this.showErrorMessage = false;
        //public visibleAddAssetForm:boolean = true;
        this.newAsset = new __WEBPACK_IMPORTED_MODULE_1__asset_model__["a" /* default */]();
        //this.counterValue = 0;
    }
    AddAssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetService.getAssets()
            .subscribe(function (assets) {
            _this.assetsList = assets;
            //console.log(assets)
        });
    };
    /* counterUpdate(event: object) {
      this.counterValue = event.countAssetID;
    } */
    /* uniqueAssetID() {
           this.length = 8;
           this.timestamp = +new Date;
  
           var _getRandomInt = function( min, max ) {
              return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
           }
  
           this.generate = function() {
               var ts = this.timestamp.toString();
               var parts = ts.split( "" ).reverse();
               var id = "";
  
               for( var i = 0; i < this.length; ++i ) {
                  var index = _getRandomInt( 0, parts.length - 1 );
                  id += parts[index];
               }
               return id;
           }
      } */
    /* hideSuccessMessage() {
      this.visibleSuccessMessage = false;
      this.visibleAddAssetForm = true;
    }
  
    hideErrorMessage() {
      this.visibleErrorMessage = false;
      this.visibleAddAssetForm = true;
    }
  
    showSuccessMessage() {
      this.visibleSuccessMessage = !this.visibleSuccessMessage;
      this.visibleAddAssetForm = !this.visibleAddAssetForm;
    }
  
    showErrorMessage() {
      this.visibleErrorMessage = !this.visibleErrorMessage;
      this.visibleAddAssetForm = !this.visibleAddAssetForm;
    } */
    AddAssetsComponent.prototype.addAsset = function () {
        var _this = this;
        this.assetService.addAssetToStore(this.newAsset)
            .subscribe(function (res) {
            _this.assetsList.push(res.data);
            _this.newAsset = new __WEBPACK_IMPORTED_MODULE_1__asset_model__["a" /* default */]();
            _this.showSuccessMessage = true;
            setTimeout(function () {
                _this.showSuccessMessage = false;
            }, 2000);
        }, function (err) {
            //this.showErrorMessage();
            setTimeout(function () {
                _this.showErrorMessage = true;
            }, 2000);
        });
    };
    AddAssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-asset',
            template: __webpack_require__("./src/app/assets/add-assets/add-assets.component.html"),
            styles: [__webpack_require__("./src/app/assets/add-assets/add-assets.component.scss"), __webpack_require__("./src/app/assets/assets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__asset_service__["a" /* AssetService */]])
    ], AddAssetsComponent);
    return AddAssetsComponent;
}());



/***/ }),

/***/ "./src/app/assets/asset-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipeFilter = /** @class */ (function () {
    function PipeFilter() {
    }
    PipeFilter.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    PipeFilter.prototype.applyFilter = function (asset, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (asset[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (asset[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    PipeFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterpipe',
            pure: false
        })
    ], PipeFilter);
    return PipeFilter;
}());



/***/ }),

/***/ "./src/app/assets/asset-keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        return Object.keys(value);
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/assets/asset-sort.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeSort; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipeSort = /** @class */ (function () {
    function PipeSort() {
    }
    PipeSort.prototype.transform = function (array, sortColumn, sortReverse) {
        if (array !== undefined) {
            array.sort(function (a, b) {
                var ae = a[sortColumn];
                var be = b[sortColumn];
                if (ae == undefined && be == undefined)
                    return 0;
                if (ae == undefined && be != undefined)
                    return sortReverse ? 1 : -1;
                if (ae != undefined && be == undefined)
                    return sortReverse ? -1 : 1;
                if (ae == be)
                    return 0;
                return sortReverse ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
            });
        }
        return array;
    };
    PipeSort = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderBy'
        })
    ], PipeSort);
    return PipeSort;
}());

/* transform(assets: Asset[], path: string[], order: number = 1): Asset[] {
    if (!assets || !path || !order) return assets;
    return assets.sort((a: Asset, b: Asset) => {
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })
      return a > b ? order : order * (- 1);
    })
  }
} */


/***/ }),

/***/ "./src/app/assets/asset.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Asset = /** @class */ (function () {
    function Asset() {
        this.assetId = "";
        this.category = "";
        this.make = "";
        this.primary = "";
        this.secondary = "";
    }
    return Asset;
}());
/* harmony default export */ __webpack_exports__["a"] = (Asset);


/***/ }),

/***/ "./src/app/assets/asset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssetService = /** @class */ (function () {
    function AssetService(http) {
        this.http = http;
        //apiUrl = 'http://localhost:3000';
        this.addAssetUrl = "/api/addAsset";
        this.getAssetsUrl = "/api/viewAssets";
        this.editAssetUrl = "/api/updateAsset";
        this.deleteAssetUrl = "/api/deleteAsset";
    }
    //filter: Asset = new Asset();
    AssetService.prototype.addAssetToStore = function (asset) {
        return this.http.post("" + this.addAssetUrl, asset);
    };
    AssetService.prototype.getAssets = function () {
        return this.http.get("" + this.getAssetsUrl)
            .map(function (res) {
            return res["data"].docs;
        });
    };
    AssetService.prototype.editAsset = function (asset) {
        return this.http.put("" + this.editAssetUrl, asset);
    };
    AssetService.prototype.deleteAsset = function (id) {
        return this.http.delete(this.deleteAssetUrl + "/" + id)
            .map(function (res) {
            return res;
        });
    };
    AssetService.prototype.handleError = function (error) {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AssetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AssetService);
    return AssetService;
}());



/***/ }),

/***/ "./src/app/assets/assets.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <!-- <nav [ngClass] = \"'parent-menu'\">\r\n\t     <ul>\r\n\t\t       <li><a [routerLink]=\"['/Assets/AddAssets']\" routerLinkActive=\"active\">Add Assets to Store</a></li>\r\n\t\t       <li><a [routerLink]=\"['/Assets/GetAssets']\" routerLinkActive=\"active\">Get Assets from Store</a></li>\r\n           <li><a [routerLink]=\"['/Assets/EditAssets']\" routerLinkActive=\"active\">Edit/Update Store Assets</a></li>\r\n           <li><a [routerLink]=\"['/Assets/DeleteAssets']\" routerLinkActive=\"active\">Delete Assets from Store</a></li>\r\n       </ul>\r\n\t  </nav> -->\r\n    <!-- <div *ngFor=\"let asset of assetsList\">\r\n      {{asset.category}}\r\n    </div> -->\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"sidebar col-3\">\r\n          <p>Below navigation links redirect to respective pages and IT admins can add new assets to the Store, get assets from the Store, edit/delete existing assets in the Store.</p>\r\n          <ul>\r\n            <li><a [routerLink]=\"['/Dashboard']\" routerLinkActive=\"active\"><i class=\"fa fa-long-arrow-left\" aria-hidden=\"true\"></i>Go To Dashboard Page</a></li>\r\n            <li><a [routerLink]=\"['/Assets/AddAssets']\" routerLinkActive=\"active\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Assets to Store</a></li>\r\n            <li><a [routerLink]=\"['/Assets/GetAssets']\" routerLinkActive=\"active\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i>Get Assets from Store</a></li>\r\n            <li><a [routerLink]=\"['/Assets/EditAssets']\" routerLinkActive=\"active\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>Edit/Update Store Assets</a></li>\r\n            <li><a [routerLink]=\"['/Assets/DeleteAssets']\" routerLinkActive=\"active\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>Delete Assets from Store</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-9 main-content\">\r\n          <router-outlet></router-outlet>\r\n       </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/assets/assets.component.scss":
/***/ (function(module, exports) {

module.exports = "/* .dashboard, .sidebar, .store-asset-count {\r\nheight: 100%;\r\n  flex: 1;\r\n} */\n.sidebar {\n  height: calc(100vh - 140px);\n  color: #fff;\n  background-color: #52bad5; }\n.sidebar p {\n    padding: 40px 20px;\n    margin: 0; }\n.sidebar ul {\n    margin: 0;\n    padding: 0; }\n.sidebar ul li {\n      border-top: 1px solid #fff;\n      list-style-type: none; }\n.sidebar ul li a {\n        display: block;\n        padding: 10px 20px 10px 20px;\n        color: #fff; }\n.sidebar ul li a:hover, .sidebar ul li a :active {\n          text-decoration: none; }\n.sidebar ul li a.active {\n          color: #3a3a3a;\n          background-color: #98EED9; }\n.sidebar ul li a.active .fa {\n            color: #3a3a3a; }\n.sidebar ul li a .fa {\n          color: #fff;\n          padding-right: 10px; }\n.main-content {\n  padding-left: 1em; }\nh6 {\n  padding: 0.5em 4em 0.25em 0;\n  font-family: 'Kotta One', arial, helvetica, verdana, sans-serif;\n  font-size: 0.9em;\n  color: #ff0202;\n  line-height: 1.5; }\n.form-control {\n  outline: none; }\n.form-control .input-text {\n    border: 0; }\nselect {\n  padding: 0 !important;\n  font-size: 0.95em;\n  border-radius: 0; }\n.form-control:focus, select:active {\n  border-color: #ced4da;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: none; }\n.form-add-assets {\n  background-color: rgba(255, 255, 255, 0.9);\n  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); }\n.table-assets-list {\n  width: 100%;\n  margin: 1em 0;\n  /* i.fa-check, i.fa-remove {\r\n    display: none;\r\n  } */ }\n.table-assets-list i.fa-pencil-square-o, .table-assets-list i.fa-trash-o {\n    display: block;\n    top: 5px;\n    right: 10px;\n    font-size: 1.65em;\n    text-align: center;\n    /* padding: 5px 10px;\r\n    background-color: #fff; */\n    vertical-align: middle;\n    color: #cc0000; }\n.table-assets-list th {\n    padding: 0.5em;\n    color: #fff;\n    border-right: 1px solid #fff;\n    background-color: #008cba;\n    /* font-weight: normal; */\n    font-size: 0.9em;\n    text-transform: uppercase; }\n.table-assets-list th > span {\n      position: relative; }\n.table-assets-list th > span .fa-caret-up {\n        position: absolute;\n        left: 0; }\n.table-assets-list th > span .fa-caret-down {\n        position: relative;\n        top: 5px; }\n.table-assets-list tr {\n    /* &:nth-child(1) {\r\n      width: 5%;\r\n    } */ }\n.table-assets-list tr td {\n      position: relative; }\n.table-assets-list tr td i.fa-trash-o {\n        top: 3px;\n        right: 12px; }\n.table-assets-list tr td.active {\n        /* i.fa-pencil-square-o, i.fa-trash-o {\r\n            display: none;\r\n          } */ }\n.table-assets-list tr td.active ~ td {\n          color: #fff;\n          background-color: #cc0000;\n          border-right: 1px solid #fff; }\n.table-assets-list tr td.active ~ td i.fa-check, .table-assets-list tr td.active ~ td i.fa-remove {\n            display: block;\n            top: 5px;\n            right: 10px;\n            font-size: 1.75em;\n            /* padding: 5px 10px;\r\n              background-color: #fff; */\n            vertical-align: middle;\n            color: #cc0000; }\n.table-assets-list tr:nth-child(even) {\n      background-color: #f1f1f1; }\n.table-assets-list td {\n    vertical-align: top;\n    padding: 0.5em;\n    font-size: 0.825em; }\n.table-assets-list td:nth-of-type(1) {\n      width: 10%; }\n.table-assets-list td:nth-of-type(2) {\n      width: 10%; }\n.table-assets-list td:nth-of-type(3) {\n      width: 10%; }\n.table-assets-list td:nth-of-type(4) {\n      width: 35%; }\n.table-assets-list td:nth-of-type(5) {\n      width: 35%; }\n.table-assets-list td:last-child {\n      border-right: none; }\n.how-to-use {\n  margin-bottom: 1.5em;\n  padding: 0.5em 0 0;\n  background-color: #acecb3; }\n.how-to-use h5 {\n    margin-bottom: 0;\n    padding-left: 0.5em;\n    font-size: 1em;\n    font-weight: bold;\n    text-transform: uppercase; }\n.how-to-use ul {\n    padding: 0 0 0.5em 2em;\n    font-size: 0.8em; }\n.how-to-use ul li {\n      padding: 0.25em 2em 0.25em 0;\n      list-style-type: square; }\n.how-to-use h1 {\n    margin-bottom: 0;\n    padding: 0.25em;\n    font-size: 2.25em;\n    color: #fff;\n    background-color: #84ca7b; }\n.asset-info-utilities {\n  padding-bottom: 10px; }\n.asset-info-utilities .total-assets {\n    padding-top: 7px;\n    display: inline-block; }\n.asset-info-utilities .search .input-text {\n    float: right;\n    width: 35%;\n    padding: 0.25em 0.5em;\n    font-size: 0.9em;\n    border: 1px solid #bababa; }\n.asset-info-utilities .search .input-text:focus {\n      outline: none;\n      width: 55%;\n      -webkit-transition: .5s;\n      transition: .5s;\n      -webkit-box-shadow: inset 0 2px 2px #fafafb, 0 0 5px rgba(0, 119, 204, 0.4);\n              box-shadow: inset 0 2px 2px #fafafb, 0 0 5px rgba(0, 119, 204, 0.4);\n      border-color: #0095ff; }\n.pagination {\n  margin-bottom: 10px;\n  float: right; }\n.pagination /deep/ .ngx-pagination {\n    text-align: right;\n    margin-bottom: 0 !important;\n    /* li:not(.pagination-previous):not(.pagination-next) {\r\n      display: none;\r\n    } */ }\n.asset-info-container .no-assets-found {\n  position: relative;\n  top: 20%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin: auto; }\n.asset-info-container .no-assets-found:after {\n    content: '';\n    display: table;\n    clear: both; }\n.asset-info-container .no-assets-found h5 {\n    font-size: 2em; }\n"

/***/ }),

/***/ "./src/app/assets/assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_model__ = __webpack_require__("./src/app/assets/asset.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asset_service__ = __webpack_require__("./src/app/assets/asset.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssetsComponent = /** @class */ (function () {
    function AssetsComponent(assetService) {
        this.assetService = assetService;
        this.filter = new __WEBPACK_IMPORTED_MODULE_1__asset_model__["a" /* default */]();
    }
    AssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetService.getAssets()
            .subscribe(function (assets) {
            _this.assetsList = assets;
            //console.log(assets)
        });
    };
    AssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assets',
            template: __webpack_require__("./src/app/assets/assets.component.html"),
            styles: [__webpack_require__("./src/app/assets/assets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__asset_service__["a" /* AssetService */]])
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "./src/app/assets/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"assetsList\">\n  <div class=\"row\">\n    <h1 class=\"col-12\">Application Dashboard Page</h1>\n    <div class=\"col-12 col-sm-6 col-md-5 dashboard\">\n      <p>Click on the links below to navigate to respective pages and start working on them. IT admins can add new assets to the Store, get assets from the Store, edit/delete existing assets in the Store.</p>\n      <ul class=\"row actions\">\n        <li class=\"col-sm-12\">\n          <a [routerLink]=\"['/Assets/AddAssets']\" routerLinkActive=\"active\" class=\"clearfix\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n            <span>Add New Assets To Store</span>\n          </a>\n        </li>\n        <li class=\"col-sm-12\">\n          <a [routerLink]=\"['/Assets/GetAssets']\" routerLinkActive=\"active\" class=\"clearfix\">\n            <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            <span>List All Store Assets</span>\n          </a>\n        </li>\n        <li class=\"col-sm-12\">\n          <a [routerLink]=\"['/Assets/EditAssets']\" routerLinkActive=\"active\" class=\"clearfix\">\n            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n            <span>Update Sotre Assets</span>\n          </a>\n        </li>\n        <li class=\"col-sm-12\">\n          <a [routerLink]=\"['/Assets/DeleteAssets']\" routerLinkActive=\"active\" class=\"clearfix\">\n            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n            <span>Remove Assets From Store</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"d-sm-none w-100\"></div>\n    <div class=\"col-12 col-sm-5 offset-sm-1 col-md-6 offset-md-1 store-asset-count\">\n      <p class=\"col-12\">\n        <span class=\"col-xs-8\">Total Store Assets</span>\n        <span class=\"col-xs-4\">{{assetsList.length}}</span>\n      </p>\n      <ul class=\"row\">\n        <li class=\"col-sm-12 col-md-6\" *ngFor=\"let category of categories\">\n          <div class=\"col-12\">\n            <span class=\"col-xs-9\">{{category.display}}</span>\n            <span class=\"col-xs-3\">{{category.count}}</span>\n          </div>\n        </li>\n      </ul>\n\n      <!-- <table cellpadding=\"0\" cellspacing=\"0\">\n        <tbody>\n          <tr *ngFor=\"let category of categories\">\n            <td>{{category.display}}</td>\n            <td>0000</td>\n          </tr>\n        </tbody>\n      </table> -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/assets/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding: 0 0.25em 0.5em;\n  font-family: 'Scope One', helvetica, verdana, sans-serif, arial;\n  font-size: 1.25em;\n  font-weight: bold; }\n  @media screen and (min-width: 576px) and (max-width: 767px) {\n    h1 {\n      font-size: 1.6em; } }\n  @media screen and (min-width: 768px) and (max-width: 991px) {\n    h1 {\n      padding: 0em 0.25em 0.5em;\n      font-size: 1.9em; } }\n  @media screen and (min-width: 992px) and (max-width: 1199px) {\n    h1 {\n      padding: 0.25em 0.25em 0.75em;\n      font-size: 2.15em; } }\n  @media screen and (min-width: 1200px) {\n    h1 {\n      padding: 0.25em 0.25em 0.5em;\n      font-size: 2.5em; } }\n  .dashboard {\n  color: #fff;\n  background: #f5f5f5; }\n  @media screen and (min-width: 350px) and (max-width: 575px) {\n    .dashboard {\n      max-width: 100%; } }\n  @media screen and (max-width: 1199px) {\n    .dashboard {\n      margin-bottom: 20px; } }\n  .dashboard > p {\n    padding: 1em 0.75em 0;\n    font-size: 0.75em;\n    color: #010101; }\n  @media screen and (min-width: 576px) {\n      .dashboard > p {\n        padding: 1.5em 1em 0.5em; } }\n  @media screen and (min-width: 576px) and (max-width: 767px) {\n      .dashboard > p {\n        font-size: 0.8em; } }\n  @media screen and (min-width: 768px) and (max-width: 991px) {\n      .dashboard > p {\n        font-size: 0.9em; } }\n  @media screen and (min-width: 992px) and (max-width: 1199px) {\n      .dashboard > p {\n        font-size: 1em; } }\n  @media screen and (min-width: 1200px) {\n      .dashboard > p {\n        font-size: 1.15em; } }\n  .dashboard ul {\n    margin: 0 auto;\n    padding: 0 0.75em; }\n  @media screen and (min-width: 351px) and (max-width: 450px) {\n      .dashboard ul {\n        padding: 0 0.25em; } }\n  @media screen and (min-width: 451px) and (max-width: 575px) {\n      .dashboard ul {\n        padding: 0 0; } }\n  @media screen and (min-width: 576px) and (max-width: 767px) {\n      .dashboard ul {\n        padding: 0 1em; } }\n  @media screen and (min-width: 768px) {\n      .dashboard ul {\n        padding: 0 1.25em; } }\n  .dashboard ul li {\n      cursor: pointer;\n      width: 100%;\n      text-align: center; }\n  @media screen and (min-width: 350px) and (max-width: 412px) {\n        .dashboard ul li {\n          width: 46%;\n          margin: 0 1%; } }\n  @media screen and (min-width: 410px) and (max-width: 575px) {\n        .dashboard ul li {\n          width: 46%;\n          margin: 0 1.5% 3%; } }\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n        .dashboard ul li {\n          margin: 0 auto 1em; } }\n  @media screen and (min-width: 768px) and (max-width: 991px) {\n        .dashboard ul li {\n          width: 90.5%;\n          height: 73px;\n          margin: 0 auto; } }\n  @media screen and (min-width: 992px) {\n        .dashboard ul li {\n          margin-bottom: 2em; } }\n  .dashboard ul li:nth-of-type(1) a {\n        background-color: #01be86; }\n  .dashboard ul li:nth-of-type(1) a i {\n          background-color: #049469; }\n  .dashboard ul li:nth-of-type(2) a {\n        background-color: #008cba; }\n  .dashboard ul li:nth-of-type(2) a i {\n          background-color: #0a6f90; }\n  .dashboard ul li:nth-of-type(3) a {\n        background-color: #e0a800; }\n  .dashboard ul li:nth-of-type(3) a i {\n          background-color: #b58a09; }\n  .dashboard ul li:nth-of-type(4) a {\n        background-color: #cc0000; }\n  .dashboard ul li:nth-of-type(4) a i {\n          background-color: #980606; }\n  .dashboard ul li a {\n        display: block;\n        margin: 0;\n        padding: 0;\n        color: #fff;\n        /* @media screen and (min-width: 576px) and (max-width: 767px) {\r\n          margin: 1em;\r\n        }\r\n        @media screen and (min-width: 992px) and (max-width: 1199px) {\r\n          margin: 2em;\r\n        }\r\n        @media screen and (min-width: 1200px) {\r\n          margin: 3em 2em;\r\n        } */ }\n  .dashboard ul li a:hover {\n          text-decoration: none; }\n  .dashboard ul li a:after {\n          display: table;\n          clear: both; }\n  .dashboard ul li a i {\n          float: left;\n          padding: 0.75em;\n          font-size: 1em;\n          color: #fff;\n          text-align: center; }\n  @media screen and (min-width: 576px) and (max-width: 767px) {\n            .dashboard ul li a i {\n              padding: 0.7em;\n              font-size: 1em; } }\n  @media screen and (min-width: 768px) and (max-width: 991px) {\n            .dashboard ul li a i {\n              font-size: 1.5em; } }\n  @media screen and (min-width: 992px) and (max-width: 1199px) {\n            .dashboard ul li a i {\n              font-size: 1.5em; } }\n  @media screen and (min-width: 1200px) {\n            .dashboard ul li a i {\n              font-size: 1.75em; } }\n  .dashboard ul li a span {\n          display: block;\n          padding: 0.7em 2.5em 0 3.5em;\n          font-size: 0.8em;\n          text-align: left; }\n  @media screen and (min-width: 350px) and (max-width: 410px) {\n            .dashboard ul li a span {\n              padding: 0.9em 0 0 4em;\n              font-size: 0.65em; } }\n  @media screen and (min-width: 411px) and (max-width: 469px) {\n            .dashboard ul li a span {\n              padding: 0.9em 0 0 3.75em;\n              font-size: 0.75em; } }\n  @media screen and (min-width: 470px) and (max-width: 575px) {\n            .dashboard ul li a span {\n              padding: 0.9em 0 0 3.75em;\n              font-size: 0.75em; } }\n  @media screen and (min-width: 576px) and (max-width: 767px) {\n            .dashboard ul li a span {\n              padding: 0.7em 2.5em 0 3.5em;\n              font-size: 0.8em; } }\n  @media screen and (min-width: 768px) and (max-width: 991px) {\n            .dashboard ul li a span {\n              padding: 1.5em 0 0 5em;\n              font-size: 0.85em; } }\n  @media screen and (min-width: 992px) and (max-width: 1199px) {\n            .dashboard ul li a span {\n              padding: 1.15em 4.75em;\n              font-size: 1em; } }\n  @media screen and (min-width: 1200px) {\n            .dashboard ul li a span {\n              padding: 1em 4.5em;\n              font-size: 1.25em; } }\n  .store-asset-count {\n  padding: 0.75em;\n  background-color: #f9e6cc; }\n  @media screen and (max-width: 345px) {\n    .store-asset-count {\n      max-width: 100%; } }\n  @media screen and (min-width: 576px) and (max-width: 767px) {\n    .store-asset-count {\n      padding: 1em; } }\n  @media screen and (min-width: 992px) {\n    .store-asset-count {\n      padding: 2em 1.5em; } }\n  .store-asset-count p, .store-asset-count li {\n    margin-bottom: 1em;\n    padding: 0.75em; }\n  .store-asset-count p span:nth-of-type(2), .store-asset-count li span:nth-of-type(2) {\n      float: right;\n      font-weight: bold;\n      text-align: left; }\n  @media screen and (min-width: 576px) {\n        .store-asset-count p span:nth-of-type(2), .store-asset-count li span:nth-of-type(2) {\n          text-align: right; } }\n  @media screen and (min-width: 1200px) {\n        .store-asset-count p span:nth-of-type(2), .store-asset-count li span:nth-of-type(2) {\n          font-size: 1.5em; } }\n  .store-asset-count p {\n    font-size: 0.9em;\n    color: #fff;\n    background-color: #8e8e8e;\n    -webkit-box-shadow: 4px 4px 0px 0px #333;\n            box-shadow: 4px 4px 0px 0px #333; }\n  @media screen and (min-width: 576px) and (max-width: 767px) {\n      .store-asset-count p {\n        padding: 0.75em;\n        font-size: 0.9em; } }\n  @media screen and (min-width: 992px) and (max-width: 1199px) {\n      .store-asset-count p {\n        padding: 1em 0.75em;\n        font-size: 1.1em; } }\n  @media screen and (min-width: 1200px) {\n      .store-asset-count p {\n        padding: 1em;\n        font-size: 1.5em; } }\n  .store-asset-count li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0.5em 0;\n    font-size: 0.75em;\n    background-color: #e6cba5;\n    /* span {\r\n      @media screen and (min-width: 576px) and (max-width: 767px) {\r\n        display: block;\r\n        width: 100%;\r\n      }\r\n    } */ }\n  @media screen and (min-width: 420px) and (max-width: 575px) {\n      .store-asset-count li {\n        width: 50%; } }\n  @media screen and (min-width: 576px) and (max-width: 767px) {\n      .store-asset-count li {\n        margin: 0.5em 0;\n        padding: 0.75em;\n        font-size: 0.75em; } }\n  @media screen and (min-width: 768px) and (max-width: 991px) {\n      .store-asset-count li {\n        padding: 1em 0.75em;\n        font-size: 0.75em; } }\n  @media screen and (min-width: 992px) and (max-width: 1199px) {\n      .store-asset-count li {\n        padding: 1em 0.75em;\n        font-size: 0.95em; } }\n  @media screen and (min-width: 1200px) {\n      .store-asset-count li {\n        font-size: 1em; } }\n  .store-asset-count li:nth-child(even) {\n      border-left: 4px solid #9c681f; }\n  .store-asset-count li:nth-child(odd) {\n      border-right: 4px solid #9c681f; }\n"

/***/ }),

/***/ "./src/app/assets/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_service__ = __webpack_require__("./src/app/assets/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
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
    function DashboardComponent(assetService, ngxSpinnerService) {
        this.assetService = assetService;
        this.ngxSpinnerService = ngxSpinnerService;
        this.count = 0;
        this.i = 0;
        this.countArray = [];
        this.assetsList = [];
        this.categories = [
            { value: 'Desktop Computer', display: 'Desktop Computer', count: 0 },
            { value: 'CPU', display: 'CPU', count: 0 },
            { value: 'Laptop', display: 'Laptop', count: 0 },
            { value: 'Mobile Phone', display: 'Mobile Phone', count: 0 },
            { value: 'iPad', display: 'iPad', count: 0 },
            { value: 'Printer', display: 'Printer', count: 0 },
            { value: 'Data Server', display: 'Data Server', count: 0 },
            { value: 'Router', display: 'Router', count: 0 },
            { value: 'Projector', display: 'Projector', count: 0 },
            { value: 'Television', display: 'Television', count: 0 },
            { value: 'Video Conference TV', display: 'Video Conference TV', count: 0 },
            { value: 'VOIP Phone', display: 'VOIP Phone', count: 0 }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.assetService.getAssets()
            .subscribe(function (assets) {
            _this.ngxSpinnerService.show();
            _this.assetsList = assets;
            _this.ngxSpinnerService.hide();
            _this.categories.forEach(function (category) {
                _this.count = 0;
                assets.forEach(function (asset) {
                    if (category.display === asset.category) {
                        _this.count++;
                    }
                }, _this);
                _this.categories[_this.i].count = _this.count;
                //console.log(this.categories);
                _this.i++;
            });
            /*assets.forEach((asset) => {
              console.log(asset.category);
            }, this)*/
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/assets/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/assets/assets.component.scss"), __webpack_require__("./src/app/assets/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__asset_service__["a" /* AssetService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/assets/delete-assets/delete-assets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"how-to-use\">\n    <h5>How To Use This Page</h5>\n    <ul class=\"row\">\n      <li class=\"col-sm-6\">Pagination will be visible after 6 records.</li>\n      <li class=\"col-sm-6\"><b>Double confirmation to delete an asset from the store</b>.</li>\n      <li class=\"col-sm-6\">Click on DELETE icon to select an asset that has to be deleted.</li>\n      <li class=\"col-sm-6\">Click on TICK icon to delete selected asset from the store.</li>\n      <li class=\"col-sm-6\">Click on CROSS icon to abort delete operation.</li>\n      <li class=\"col-sm-6\">Type in some text in the search box to filter asset info.</li>\n      <li class=\"col-sm-6\"><b>Sorting not available for table columns</b>.</li>\n      <!-- <li class=\"col-sm-6\"><b>No double confirmation before deleting any record.</b></li> -->\n    </ul>\n    <h1 class=\"col-sm-12\">Delete Store Assets</h1>\n  </div>\n  <ngx-spinner\n    bdColor=\"rgba(255,255,255,0.7)\"\n    size=\"medium\"\n    color=\"red\"\n    type=\"square-jelly-box\">\n  </ngx-spinner>\n  <div class=\"row\">\n    <div class=\"col-sm-12 asset-info-container\" *ngIf=\"assetsList\">\n      <div *ngIf=\"!showNoAssetsMessage; then showAssetsList else noAssetsFound\"></div>\n      <ng-template #showAssetsList>\n        <div class=\"asset-info-utilities\">\n          <span class=\"col-sm-3 total-assets\">Total Assets in the Store: {{assetsList.length}}</span>\n          <span class=\"col-sm-9 search\">\n            <input type=\"text\" class=\"input-text\" [value]=\"filterText\" [placeholder]=\"filterPlaceholder\" [formControl]=\"filterInput\" autocomplete=\"off\" />\n          </span>\n        </div>\n        <pagination-controls autoHide=\"true\" (pageChange)=\"page=$event\" class=\"pagination\" (click)=\"onPaginate()\"></pagination-controls>\n        <div class=\"row\">\n          <div class=\"col-12 alert alert-success\" *ngIf=\"showSuccessMessage\">\n            <div class=\"text-center\" *ngIf=\"assetsList.length > 0\">\n              <h4>Asset <u>deleted successfully</u> from Store!</h4>\n           </div>\n          </div>\n          <div class=\"col-12 alert alert-danger\" *ngIf=\"showErrorMessage\">\n            <div class=\"text-center\">\n              <h4>Asset <u>not deleted</u> from Store!</h4>\n            </div>\n          </div>\n        </div>\n        <table class=\"table-assets-list\">\n          <thead>\n            <tr>\n              <th></th>\n              <th>Asset ID</th>\n              <th>Category</th>\n              <th>Make</th>\n              <th>Primary Feature</th>\n              <th>Secondary Feature</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let asset of assetsList | multifilterpipe: { assetId:filterText, category:filterText, make:filterText, primary:filterText, secondary:filterText } : false | paginate: { itemsPerPage:6, currentPage:page, totalItems: total}; let rowIndex = index\">\n              <ng-template [ngIf]=\"rowIndex != selectedRow\" [ngIfElse]=\"confirmDelete\">\n                <td><i (click)=\"selectedRow = rowIndex;\" class=\"fa fa-trash-o\"></i></td>\n              </ng-template>\n              <ng-template #confirmDelete>\n                <td [class.active]=\"rowIndex == selectedRow\">\n                  <i class=\"fa fa-check text-danger\" (click)=\"deleteAsset(asset)\"></i><i class=\"fa fa-remove text-warning\" (click)=\"selectedRow = null\"></i>\n                </td>\n              </ng-template>\n              <td>{{asset.assetId}}</td>\n              <td>{{asset.category}}</td>\n              <td>{{asset.make}}</td>\n              <td>{{asset.primary}}</td>\n              <td>{{asset.secondary}}</td>\n            </tr>\n            <tr *ngIf=\"!(assetsList | multifilterpipe: { assetId:filterText, category:filterText, make:filterText, primary:filterText, secondary:filterText }).length\">\n              <td colspan=\"6\" style=\"text-align:center; background-color:#ccc;\">\n                <b>No Results Found</b>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </ng-template>\n      <ng-template #noAssetsFound>\n        <div class=\"no-assets-found\">\n          <h5>Store is empty. No assets found in the Store.</h5><br />\n          <h5>Add assets to the Store from <a [routerLink]=\"['/Assets/AddAssets']\" routerLinkActive=\"active\"><u>here</u></a>.</h5>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/assets/delete-assets/delete-assets.component.scss":
/***/ (function(module, exports) {

module.exports = ".search {\n  text-align: right; }\n  .search .input-text {\n    display: inline-block;\n    width: 45%;\n    padding: 0.5em;\n    font-size: 0.9em;\n    border: 1px solid #bababa; }\n  .search .input-text:focus {\n      outline: none;\n      width: 85%;\n      -webkit-transition: .5s;\n      transition: .5s;\n      -webkit-box-shadow: inset 0 2px 2px #fafafb, 0 0 5px rgba(0, 119, 204, 0.4);\n              box-shadow: inset 0 2px 2px #fafafb, 0 0 5px rgba(0, 119, 204, 0.4);\n      border-color: #0095ff; }\n  .table-assets-list td .fa-check, .table-assets-list td .fa-remove {\n  font-size: 1.5em; }\n  .table-assets-list td .fa-check {\n  padding-right: 5px; }\n  .table-assets-list td .fa-remove {\n  padding-right: 0px; }\n  .table-assets-list td:nth-of-type(1) {\n  width: 5.75%; }\n  .table-assets-list td:nth-of-type(2) {\n  width: 8.25%; }\n  .table-assets-list td:nth-of-type(3) {\n  width: 13%; }\n  .table-assets-list td:nth-of-type(4) {\n  width: 12%; }\n  .table-assets-list td:nth-of-type(5) {\n  width: 30%; }\n  .table-assets-list td:nth-of-type(6) {\n  width: 30%; }\n"

/***/ }),

/***/ "./src/app/assets/delete-assets/delete-assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteAssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/throttleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asset_service__ = __webpack_require__("./src/app/assets/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__ = __webpack_require__("./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeleteAssetsComponent = /** @class */ (function () {
    function DeleteAssetsComponent(assetService, ngxSpinnerService) {
        this.assetService = assetService;
        this.ngxSpinnerService = ngxSpinnerService;
        this.filterInput = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]();
        this.assetsList = [];
        this.deleteAssets = [];
        this.showSuccessMessage = false;
        this.showErrorMessage = false;
        this.showNoAssetsMessage = false;
        this.page = 1;
    }
    DeleteAssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.assetService.getAssets()
            .subscribe(function (assets) {
            _this.ngxSpinnerService.show();
            if (assets.length < 1) {
                _this.showNoAssetsMessage = true;
            }
            _this.assetsList = assets;
            _this.ngxSpinnerService.hide();
            //console.log(assets)
        });
        this.enableFilter = true;
        this.filterText = "";
        //this.filterPlaceholder = "Type Asset ID / Category / Make / Primary Feature / Secondary Feature";
        //this.filterPlaceholder = "Type asset related text to filter asset info"
        this.filterPlaceholder = "Search asset info...";
        this.filterInput
            .valueChanges
            .debounceTime(200)
            .subscribe(function (term) {
            _this.filterText = term;
            //console.log(term);
        });
    };
    DeleteAssetsComponent.prototype.onPaginate = function () {
        //console.log('page changed here');
        this.selectedRow = null;
    };
    DeleteAssetsComponent.prototype.deleteAsset = function (asset) {
        var _this = this;
        this.assetService.deleteAsset(asset._id).subscribe(function (res) {
            _this.assetsList.splice(_this.assetsList.indexOf(asset), 1);
            _this.selectedRow = null;
            _this.showSuccessMessage = true;
            setTimeout(function () {
                _this.showSuccessMessage = false;
            }, 2000);
        }, function (error) {
            var _this = this;
            //console.log(error);
            this.showErrorMessage = true;
            setTimeout(function () {
                _this.showErrorMessage = false;
            }, 2000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DeleteAssetsComponent.prototype, "assetList", void 0);
    DeleteAssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-assets',
            template: __webpack_require__("./src/app/assets/delete-assets/delete-assets.component.html"),
            styles: [__webpack_require__("./src/app/assets/assets.component.scss"), __webpack_require__("./src/app/assets/delete-assets/delete-assets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__asset_service__["a" /* AssetService */], __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__["NgxSpinnerService"]])
    ], DeleteAssetsComponent);
    return DeleteAssetsComponent;
}());



/***/ }),

/***/ "./src/app/assets/edit-assets/edit-assets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"how-to-use\">\n    <h5>How To Use This Page</h5>\n    <ul class=\"row\">\n      <li class=\"col-sm-6\">Pagination will be visible after 6 records.</li>\n      <li class=\"col-sm-6\">Click on the EDIT icon to select an asset that has to be edited/updated.</li>\n      <li class=\"col-sm-6\">Press ENTER key or click on TICK icon to save changes.</li>\n      <li class=\"col-sm-6\">Click on CROSS icon to discard any edits.</li>\n      <li class=\"col-sm-6\">Type in some text in the  search box to filter asset info.</li>\n      <li class=\"col-sm-6\"><b>Sorting not available for table columns.</b></li>\n    </ul>\n    <h1 class=\"col-sm-12\">Edit/Update Store Assets</h1>\n  </div>\n  <ngx-spinner\n    bdColor=\"rgba(255,255,255,0.7)\"\n    size=\"medium\"\n    color=\"red\"\n    type=\"square-jelly-box\">\n  </ngx-spinner>\n  <div class=\"row\">\n    <div class=\"col-sm-12 asset-info-container\" *ngIf=\"assetsList\">\n      <div *ngIf=\"!showNoAssetsMessage; then showAssetsList else noAssetsFound\"></div>\n      <ng-template #showAssetsList>\n        <div class=\"asset-info-utilities\">\n          <span class=\"col-sm-3 total-assets\">Total Assets in the Store: {{assetsList.length}}</span>\n          <span class=\"col-sm-9 search\">\n            <input type=\"text\" class=\"input-text\" [value]=\"filterText\" [placeholder]=\"filterPlaceholder\" [formControl]=\"filterInput\" autocomplete=\"off\" />\n          </span>\n        </div>\n        <pagination-controls autoHide=\"true\" (pageChange)=\"pageNumber = $event\" class=\"pagination\" (click)=\"onPaginate()\"></pagination-controls>\n        <div class=\"row\">\n          <div class=\"col-12 alert alert-success\" *ngIf=\"showSuccessMessage\">\n            <div class=\"text-center\">\n              <h4>Asset <u>successfully updated</u> to Store!</h4>\n            </div>\n          </div>\n          <div class=\"col-12 alert alert-danger\" *ngIf=\"showErrorMessage\">\n            <div class=\"text-center\">\n              <h3>Asset <u>not updated</u> to Store!</h3>\n            </div>\n          </div>\n        </div>\n        <table class=\"table-assets-list\">\n          <thead>\n            <tr>\n              <th></th>\n              <th>Asset ID</th>\n              <th>Category</th>\n              <th>Make</th>\n              <th>Primary Feature</th>\n              <th>Secondary Feature</th>\n              <!-- <th>Date</th> -->\n              <!-- <th>Edit / Update</th> -->\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngIf=\"!(assetsList | multifilterpipe: { assetId:filterText, category:filterText, make:filterText, primary:filterText, secondary:filterText }).length\">\n              <td colspan=\"6\" style=\"text-align:center; background-color:#ccc;\">\n                <b>No Results Found</b>\n              </td>\n            </tr>\n            <!-- <tr (dblclick)=\"editAsset(asset)\" *ngFor=\"let asset of assetsList | multifilterpipe: { assetId:filterText, category:filterText, make:filterText, primary:filterText, secondary:filterText } : false | paginate: { itemsPerPage: 6, currentPage: pageNumber}; let i = index\" (click)=\"setClickedRow(i)\" [class.active]=\"i == selectedRow\"> -->\n            <tr *ngFor=\"let asset of assetsList | multifilterpipe: { assetId:filterText, category:filterText, make:filterText, primary:filterText, secondary:filterText } : false | paginate: { itemsPerPage: 6, currentPage: pageNumber}; let i = index\">\n              <ng-template [ngIf]=\"i!=selectedRow\" [ngIfElse]=\"editAsset1\">\n              <!-- <ng-template [ngIf]=\"hideEditIcon==false\"> -->\n                <td>\n                  <i class=\"fa fa-pencil-square-o\" (click)=\"editAsset(asset);selectedRow=i;\"></i>\n                </td>\n                <!-- <td><i class=\"fa fa-pencil-square-o\" (click)=\"editAsset(asset)\"></i></td> -->\n                <td>{{asset.assetId}}</td>\n                <td>{{asset.category}}</td>\n                <td>{{asset.make}}</td>\n                <td>{{asset.primary}}</td>\n                <td>{{asset.secondary}}</td>\n                <!-- <td>{{asset.date | date}}</td> -->\n              </ng-template>\n              <!-- </ng-template> -->\n              <ng-template #editAsset1>\n                  <td [class.active]=\"asset.assetId === assetId\"><span><i class=\"fa fa-check text-info\" (click)=\"doneAsset(asset)\"></i><i class=\"fa fa-remove text-warning\" (click)=\"cancelUpdate()\"></i></span></td>\n                  <td>\n                    <input type=\"text\" name=\"assetId\" id=\"assetId\" [readonly]=\"true\" (keypress)=\"submitAsset($event, asset)\" [(ngModel)]=\"asset.assetId\" placeholder=\"Asset ID\" class=\"input-text\" autocomplete=\"off\">\n                  </td>\n                  <td>\n                    <!-- <input type=\"text\" name=\"category\" id=\"category\" (keypress)=\"submitAsset($event, asset)\" [(ngModel)]=\"asset.category\" placeholder=\"Category\" class=\"form-control\"> -->\n                    <select name=\"category\" id=\"category\" (keypress)=\"submitAsset($event, asset)\" [(ngModel)]=\"asset.category\" placeholder=\"Category\" class=\"form-control\">\n                      <option *ngFor=\"let category of categories\" [value]=\"category.value\">{{category.display}}</option>\n                    </select>\n                  </td>\n                  <td>\n                    <!-- <input type=\"text\" name=\"category\" id=\"category\" (keypress)=\"submitAsset($event, asset)\" [(ngModel)]=\"asset.category\" placeholder=\"Category\" class=\"form-control\"> -->\n                    <select name=\"make\" id=\"make\" (keypress)=\"submitAsset($event, asset)\" [(ngModel)]=\"asset.make\" placeholder=\"Make\" class=\"form-control\">\n                      <option *ngFor=\"let make of makes\" [value]=\"make.value\">{{make.display}}</option>\n                    </select>\n                  </td>\n                  <td><input type=\"text\" name=\"primary\" id=\"primary\" (keypress)=\"submitAsset($event, asset)\" [(ngModel)]=\"asset.primary\" class=\"input-text\" autocomplete=\"off\"></td>\n                  <td><input type=\"text\" name=\"secondary\" id=\"secondary\" [(ngModel)]=\"asset.secondary\" class=\"input-text\" autocomplete=\"off\"></td>\n                  <!-- <td>{{asset.date | date}}</td> -->\n              </ng-template>\n              <!-- <td>\n                <button class=\"btn btn-success\" (click)=\"doneAsset(asset)\">\n                  <i  class=\"fa fa-check\"></i>\n                </button>\n                <button class=\"btn btn-info\" (click)=\"editAsset(asset)\"><i class=\"fa fa-pencil\"></i> Edit Asset</button>\n                <button class=\"btn btn-danger\" (click)=\"deleteAsset(asset)\">\n                    <i  class=\"fa fa-trash\"></i>\n                  </button>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </ng-template>\n      <ng-template #noAssetsFound>\n        <div class=\"no-assets-found\">\n          <h5>Store is empty. No assets found in the Store.</h5><br />\n          <h5>Add assets to the Store from <a [routerLink]=\"['/Assets/AddAssets']\" routerLinkActive=\"active\"><u>here</u></a>.</h5>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/assets/edit-assets/edit-assets.component.scss":
/***/ (function(module, exports) {

module.exports = ".table-assets-list {\n  /* button.btn-info {\r\n    color: #17a2b8;\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n    &:focus {\r\n      background-color: transparent;\r\n      border: none;\r\n      outline: none;\r\n    }\r\n    & > .fa-pencil {\r\n      padding-right: 0;\r\n    }\r\n  } */ }\n  .table-assets-list tr td input, .table-assets-list tr td select {\n    border: none;\n    background-color: transparent; }\n  .table-assets-list tr td .fa-check, .table-assets-list tr td .fa-remove {\n    font-size: 1.5em; }\n  .table-assets-list tr td .fa-check {\n    padding-right: 5px; }\n  .table-assets-list tr td .fa-remove {\n    padding-right: 0px; }\n  .table-assets-list tr td:nth-of-type(1) {\n    width: 5.75%; }\n  .table-assets-list tr td:nth-of-type(2) {\n    width: 8.25%; }\n  .table-assets-list tr td:nth-of-type(3) {\n    width: 13%; }\n  .table-assets-list tr td:nth-of-type(4) {\n    width: 12%; }\n  .table-assets-list tr td:nth-of-type(5) {\n    width: 30%; }\n  .table-assets-list tr td:nth-of-type(6) {\n    width: 30%; }\n  .table-assets-list tr td.active ~ td {\n    vertical-align: top;\n    background-color: transparent; }\n  .table-assets-list tr td.active ~ td .input-text, .table-assets-list tr td.active ~ td select {\n      width: 100%;\n      margin-bottom: -1px;\n      padding-bottom: 0;\n      padding-left: 0;\n      border: none;\n      border-bottom: 1px solid #cc6666; }\n  .table-assets-list tr td.active ~ td select {\n      height: 20px;\n      color: #000; }\n  .table-assets-list tr td.active ~ td:nth-of-type(2) .input-text {\n      border: none;\n      background-color: transparent; }\n"

/***/ }),

/***/ "./src/app/assets/edit-assets/edit-assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/throttleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__asset_service__ = __webpack_require__("./src/app/assets/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__ = __webpack_require__("./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditAssetsComponent = /** @class */ (function () {
    function EditAssetsComponent(assetService, ngxSpinnerService) {
        this.assetService = assetService;
        this.ngxSpinnerService = ngxSpinnerService;
        this.filterInput = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]();
        this.showSuccessMessage = false;
        this.showErrorMessage = false;
        this.categories = [
            { value: 'Desktop Computer', display: 'Desktop Computer' },
            { value: 'CPU', display: 'CPU' },
            { value: 'Laptop', display: 'Laptop' },
            { value: 'Mobile Phone', display: 'Mobile Phone' },
            { value: 'iPad', display: 'iPad' },
            { value: 'Printer', display: 'Printer' },
            { value: 'Data Server', display: 'Data Server' },
            { value: 'Router', display: 'Router' },
            { value: 'Projector', display: 'Projector' },
            { value: 'Television', display: 'Television' },
            { value: 'Video Conference TV', display: 'Video Conference TV' },
            { value: 'VOIP Phone', display: 'VOIP Phone' }
        ];
        this.makes = [
            { value: 'N/A', display: 'Not Applicable (N/A)' },
            { value: 'Apple', display: 'Apple' },
            { value: 'Lenovo', display: 'Lenovo' },
            { value: 'Dell', display: 'Dell' },
            { value: 'Cisco', display: 'Cisco' },
            { value: 'Data Link', display: 'Data Link' },
            { value: 'Samsung', display: 'Samsung' },
            { value: 'Google', display: 'Google' },
            { value: 'Hewlett Packard', display: 'Hewlett Packard' },
            { value: 'Intel', display: 'Intel' },
            { value: 'Seagate', display: 'Seagate' },
            { value: 'Benq', display: 'Benq' },
            { value: 'Canon', display: 'Canon' }
        ];
        this.hideEditIcon = false;
        this.hideConfirmIcons = true;
        this.showNoAssetsMessage = false;
        this.editAssets = [];
        this.assetId = '';
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
    }
    EditAssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.assetService.getAssets()
            .subscribe(function (assets) {
            _this.ngxSpinnerService.show();
            if (assets.length < 1) {
                _this.showNoAssetsMessage = true;
            }
            _this.assetsList = assets;
            _this.ngxSpinnerService.hide();
            //console.log(assets)
        });
        this.enableFilter = true;
        this.filterText = "";
        //this.filterPlaceholder = "Type Asset ID / Category / Make / Primary Feature / Secondary Feature";
        // this.filterPlaceholder = "Type in the text to filter asset info"
        this.filterPlaceholder = "Search asset info...";
        this.filterInput
            .valueChanges
            .debounceTime(200)
            .subscribe(function (term) {
            _this.filterText = term;
            //console.log(term);
        });
    };
    EditAssetsComponent.prototype.onPaginate = function () {
        var _this = this;
        this.assetService.getAssets()
            .subscribe(function (assets) {
            _this.assetsList = assets;
        });
        //console.log('page changed here');
        this.selectedRow = -1;
    };
    EditAssetsComponent.prototype.editAsset = function (asset) {
        var _this = this;
        this.assetService.getAssets()
            .subscribe(function (assets) {
            _this.assetsList = assets;
        });
        this.assetId = asset.assetId;
        if (this.assetsList.includes(asset)) {
            if (!this.editAssets.includes(asset)) {
                this.editAssets.push(asset);
            }
            else {
                this.editAssets.splice(this.editAssets.indexOf(asset), 1);
                this.assetService.editAsset(asset).subscribe(function (res) {
                    //console.log('Update Successful')
                }, function (err) {
                    _this.editAsset(asset);
                    //console.error('Update Unsuccessful')
                });
            }
        }
    };
    EditAssetsComponent.prototype.doneAsset = function (asset) {
        var _this = this;
        this.assetService.editAsset(asset).subscribe(function (res) {
            //console.log('Update Succesful')
            _this.showSuccessMessage = true;
            setTimeout(function () {
                _this.showSuccessMessage = false;
            }, 2000);
        }, function (err) {
            _this.editAsset(asset);
            //console.error('Update Unsuccesful')
            _this.showErrorMessage = true;
            setTimeout(function () {
                _this.showErrorMessage = false;
            }, 2000);
        });
        this.selectedRow = null;
    };
    EditAssetsComponent.prototype.submitAsset = function (event, asset) {
        var _this = this;
        if (event.keyCode == 13) {
            this.assetService.editAsset(asset).subscribe(function (res) {
                //console.log('Update Successful')
                _this.showSuccessMessage = true;
                setTimeout(function () {
                    _this.showSuccessMessage = false;
                }, 2000);
            }, function (err) {
                _this.editAsset(asset);
                //console.error('Update Unsuccessful')
                _this.showErrorMessage = true;
                setTimeout(function () {
                    _this.showErrorMessage = false;
                }, 2000);
            });
            this.selectedRow = null;
        }
    };
    EditAssetsComponent.prototype.cancelUpdate = function () {
        var _this = this;
        this.assetService.getAssets()
            .subscribe(function (assets) {
            _this.assetsList = assets;
        });
        this.selectedRow = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], EditAssetsComponent.prototype, "assetList", void 0);
    EditAssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-assets',
            template: __webpack_require__("./src/app/assets/edit-assets/edit-assets.component.html"),
            styles: [__webpack_require__("./src/app/assets/assets.component.scss"), __webpack_require__("./src/app/assets/edit-assets/edit-assets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__asset_service__["a" /* AssetService */], __WEBPACK_IMPORTED_MODULE_7_ngx_spinner__["NgxSpinnerService"]])
    ], EditAssetsComponent);
    return EditAssetsComponent;
}());



/***/ }),

/***/ "./src/app/assets/get-assets/get-assets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"how-to-use\">\n    <h5>How To Use This Page</h5>\n    <ul class=\"row\">\n      <li class=\"col-sm-6\">ASSET ID is generated dynamically.</li>\n      <li class=\"col-sm-6\">Filtering and Sorting options are available for all columns.</li>\n      <li class=\"col-sm-6\">Click on any column header to sort that column in ASC or DESC order.</li>\n      <li class=\"col-sm-6\">Type in 'Filter this column' textbox to filter respective columns.</li>\n    </ul>\n    <h1 class=\"col-sm-12\">Store Assets Listing</h1>\n  </div>\n  <ngx-spinner\n    bdColor=\"rgba(255,255,255,0.7)\"\n    size=\"medium\"\n    color=\"red\"\n    type=\"square-jelly-box\">\n  </ngx-spinner>\n  <div class=\"row\">\n    <div class=\"col-sm-12 asset-info-container\" *ngIf=\"assetsList\">\n      <!-- <h1>Store Assets Listing</h1>\n      <h6>ASSET ID is generated randomly. Filtering and Sorting options are available for all columns except Asset ID column.</h6>\n      <h6>Click on the column header to sort respective column in ascending or descending oder. Type in 'Filter this column' textbox\n      to filter rescpective column.</h6> -->\n      <!-- {{key}} is properly returning column names\n      <div class =\"test\" *ngFor=\"let key of assetObj | keys\">\n        {{key}}\n      <div>\n      -->\n      <!-- <table class=\"table-assets-list\" on-mouseleave=\"hideSortIcons()\"> -->\n      <div *ngIf=\"!showNoAssetsMessage; then showAssetsList else noAssetsFound\"></div>\n      <ng-template #showAssetsList>\n        <div class=\"asset-info-utilities\">\n          <span class=\"total-assets\">Total Assets in the Store: {{assetsList.length}}</span>\n          <pagination-controls autoHide=\"true\" (pageChange)=\"pageNumber = $event\" class=\"pagination\"></pagination-controls>\n        </div>\n        <table class=\"table-assets-list\">\n          <thead>\n            <tr>\n              <!-- <th class=\"pointer\" (click)=\"sortTable('assetId')\" sort-direction=\"1\" on-mouseover=\"showSortIcons()\"> -->\n              <th (click)=\"sortColumn='assetId'; sortReverse = !sortReverse; hideSortIcons = true\">\n                Asset ID\n                <span *ngIf=\"!hideSortIcons\">\n                  <i class=\"fa fa-caret-down\"></i>\n                  <i class=\"fa fa-caret-up\"></i>\n                </span>\n                <span *ngIf=\"sortColumn == 'assetId'\">\n                  <i *ngIf=\"sortReverse\" class=\"fa fa-caret-down\"></i>\n                  <i *ngIf=\"!sortReverse\" class=\"fa fa-caret-up\"></i>\n                </span>\n              </th>\n              <th (click)=\"sortColumn='category'; sortReverse = !sortReverse; hideSortIcons = true\">\n                Category\n                <span *ngIf=\"!hideSortIcons\">\n                  <i class=\"fa fa-caret-down\"></i>\n                  <i class=\"fa fa-caret-up\"></i>\n                </span>\n                <span *ngIf=\"sortColumn == 'category'\">\n                  <i *ngIf=\"sortReverse\" class=\"fa fa-caret-down\"></i>\n                  <i *ngIf=\"!sortReverse\" class=\"fa fa-caret-up\"></i>\n                </span>\n              </th>\n              <th (click)=\"sortColumn='make'; sortReverse = !sortReverse; hideSortIcons = true\">\n                Make\n                <span *ngIf=\"!hideSortIcons\">\n                  <i class=\"fa fa-caret-down\"></i>\n                  <i class=\"fa fa-caret-up\"></i>\n                </span>\n                <span *ngIf=\"sortColumn == 'make'\">\n                  <i *ngIf=\"sortReverse\" class=\"fa fa-caret-down\"></i>\n                  <i *ngIf=\"!sortReverse\" class=\"fa fa-caret-up\"></i>\n                </span>\n              </th>\n              <th (click)=\"sortColumn='primary'; sortReverse = !sortReverse; hideSortIcons = true\">\n                Primary\n                <span *ngIf=\"!hideSortIcons\">\n                  <i class=\"fa fa-caret-down\"></i>\n                  <i class=\"fa fa-caret-up\"></i>\n                </span>\n                <span *ngIf=\"sortColumn == 'primary'\">\n                  <i *ngIf=\"sortReverse\" class=\"fa fa-caret-down\"></i>\n                  <i *ngIf=\"!sortReverse\" class=\"fa fa-caret-up\"></i>\n                </span>\n              </th>\n              <th (click)=\"sortColumn='secondary'; sortReverse = !sortReverse; hideSortIcons = true\">\n                Secondary\n                <span *ngIf=\"!hideSortIcons\">\n                  <i class=\"fa fa-caret-down\"></i>\n                  <i class=\"fa fa-caret-up\"></i>\n                </span>\n                <span *ngIf=\"sortColumn == 'secondary'\">\n                  <i *ngIf=\"sortReverse\" class=\"fa fa-caret-down\"></i>\n                  <i *ngIf=\"!sortReverse\" class=\"fa fa-caret-up\"></i>\n                </span>\n              </th>\n              <!-- <th class=\"pointer\">\n                Date\n                <span>\n                  <i class=\"fa fa-chevron-up\" *ngIf=\"order == 1\" ></i>\n                  <i class=\"fa fa-chevron-down\" *ngIf=\"order == -1\"></i>\n                </span>\n              </th> -->\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><input type=\"text\" name=\"assetId\" [(ngModel)]=\"filter.assetId\" placeholder=\"Filter this column\" autocomplete=\"off\"></td>\n              <td><input type=\"text\" name=\"category\" [(ngModel)]=\"filter.category\" placeholder=\"Filter this column\" autocomplete=\"off\"></td>\n              <td><input type=\"text\" name=\"make\" [(ngModel)]=\"filter.make\" placeholder=\"Filter this column\" autocomplete=\"off\"></td>\n              <td><input type=\"text\" name=\"primary\" [(ngModel)]=\"filter.primary\" placeholder=\"Filter this column\" autocomplete=\"off\"></td>\n              <td><input type=\"text\" name=\"secondry\" [(ngModel)]=\"filter.secondary\" placeholder=\"Filter this column\" autocomplete=\"off\"></td>\n            </tr>\n            <tr *ngIf=\"(assetsList | filterpipe:filter).length === 0\">\n              <td colspan=\"5\" style=\"text-align:center;\">\n                <b>No Results Found</b>\n              </td>\n            </tr>\n            <tr *ngFor=\"let asset of assetsList | filterpipe:filter | orderBy:sortColumn:sortReverse | paginate: { itemsPerPage: 6, currentPage: pageNumber}\">\n              <td>{{ asset.assetId }}</td>\n              <td>{{ asset.category }}</td>\n              <td>{{ asset.make }}</td>\n              <td>{{ asset.primary }}</td>\n              <td>{{ asset.secondary }}</td>\n              <!-- <td>{{ asset.date | date: 'longDate'}}</td> -->\n              <!-- <td><a [routerLink]=\"['/book-details', book._id]\">Show Detail</a></td> -->\n            </tr>\n          </tbody>\n        </table>\n      </ng-template>\n      <!-- <pagination-controls (pageChange)=\"pageNumber = $event\" class=\"my-pagination\"></pagination-controls> -->\n      <ng-template #noAssetsFound>\n        <div class=\"no-assets-found\">\n          <h5>Store is empty. No assets found in the Store.</h5><br />\n          <h5>Add assets to the Store from <a [routerLink]=\"['/Assets/AddAssets']\" routerLinkActive=\"active\"><u>here</u></a>.</h5>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/assets/get-assets/get-assets.component.scss":
/***/ (function(module, exports) {

module.exports = ".table-assets-list tr:nth-of-type(1) {\n  background-color: #bae5f3; }\n  .table-assets-list tr:nth-of-type(1) td {\n    border-top: 2px solid #fff;\n    border-right: 1px solid #fff;\n    border-bottom: 2px solid #fff; }\n  .table-assets-list tr:nth-of-type(1) td .form-control {\n      outline: none; }\n  .table-assets-list tr:nth-of-type(1) td .form-control .input-text {\n        border: 0; }\n  .table-assets-list tr:nth-of-type(1) td input {\n      border: none;\n      border-bottom: 1px solid transparent;\n      background-color: transparent; }\n  .table-assets-list tr:nth-of-type(1) td input:focus {\n        padding: 0;\n        color: #333;\n        outline: none;\n        -webkit-transition: all 0.5s ease-in-out;\n        transition: all 0.5s ease-in-out;\n        border-bottom: 1px solid #cc6666; }\n  .table-assets-list tr:nth-of-type(1) td input::-webkit-input-placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: #e64848;\n        opacity: 1;\n        /* Firefox */ }\n  .table-assets-list tr:nth-of-type(1) td input:-ms-input-placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: #e64848;\n        opacity: 1;\n        /* Firefox */ }\n  .table-assets-list tr:nth-of-type(1) td input::-ms-input-placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: #e64848;\n        opacity: 1;\n        /* Firefox */ }\n  .table-assets-list tr:nth-of-type(1) td input::placeholder {\n        /* Chrome, Firefox, Opera, Safari 10.1+ */\n        color: #e64848;\n        opacity: 1;\n        /* Firefox */ }\n  .table-assets-list tr:nth-of-type(1) td input :-ms-input-placeholder {\n        /* Internet Explorer 10-11 */\n        color: #fff; }\n  .table-assets-list tr:nth-of-type(1) td input ::-ms-input-placeholder {\n        /* Microsoft Edge */\n        color: #fff; }\n  .table-assets-list tr:nth-of-type(1) td select:active {\n      padding: 0; }\n"

/***/ }),

/***/ "./src/app/assets/get-assets/get-assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asset_model__ = __webpack_require__("./src/app/assets/asset.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asset_service__ = __webpack_require__("./src/app/assets/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__("./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { DatePipe } from '@angular/common';




var GetAssetsComponent = /** @class */ (function () {
    function GetAssetsComponent(assetService, ngxSpinnerService) {
        this.assetService = assetService;
        this.ngxSpinnerService = ngxSpinnerService;
        this.hideSortIcons = false;
        this.showNoAssetsMessage = false;
        this.sortReverse = true;
        this.sortColumn = "date";
        this.filter = new __WEBPACK_IMPORTED_MODULE_2__asset_model__["a" /* default */]();
        //assetObj = new Asset();
        //  path: string[] = ['category'];
        //  order: number = 1;  // 1 asc, -1 desc
        //sortDirection: number = 1;
        this.pageNumber = 1;
    }
    GetAssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.assetService.getAssets()
            .subscribe(function (assets) {
            _this.ngxSpinnerService.show();
            if (assets.length < 1) {
                _this.showNoAssetsMessage = true;
            }
            _this.assetsList = assets;
            _this.ngxSpinnerService.hide();
            //console.log(assets)
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('sort-direction'),
        __metadata("design:type", Array)
    ], GetAssetsComponent.prototype, "assetsList", void 0);
    GetAssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-get-assets',
            template: __webpack_require__("./src/app/assets/get-assets/get-assets.component.html"),
            styles: [__webpack_require__("./src/app/assets/assets.component.scss"), __webpack_require__("./src/app/assets/get-assets/get-assets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__asset_service__["a" /* AssetService */], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"]])
    ], GetAssetsComponent);
    return GetAssetsComponent;
}());



/***/ }),

/***/ "./src/app/assets/multi-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeMultipleFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipeMultipleFilter = /** @class */ (function () {
    function PipeMultipleFilter() {
    }
    PipeMultipleFilter.prototype.transform = function (items, filter, isAnd) {
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (isAnd) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (memo, keyName) {
                        return (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        //console.log(keyName);
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
                    });
                });
            }
        }
        else {
            return items;
        }
    };
    PipeMultipleFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'multifilterpipe',
            pure: false
        })
    ], PipeMultipleFilter);
    return PipeMultipleFilter;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authenticationService.isLoggedIn())
            return true;
        this.router.navigateByUrl('/');
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* export interface TokenPayload {
  username: string;
  loginName: string;
  password: string;
} */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        //apiUrl = 'http://localhost:3000'
        this.registerUserUrl = "/api/auth/register";
        this.loginUserUrl = "/api/auth/login";
    }
    AuthenticationService.prototype.registerNewUser = function (username, email, loginName, password) {
        var user = {
            username: username,
            email: email,
            loginName: loginName,
            password: password
        };
        return this.http.post("" + this.registerUserUrl, user);
    };
    AuthenticationService.prototype.loginExistingUser = function (user) {
        return this.http.post("" + this.loginUserUrl, user)
            .map(function (data) {
            if (data.token) {
                localStorage.setItem('token', data.token);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    Object.defineProperty(AuthenticationService.prototype, "currentUser", {
        /* public getToken(): string {
          return localStorage.getItem('token');
        }
      
        public getRefreshToken(): string {
          return localStorage.getItem('refresh-token');
        }
      
        public getNewAcessToken() {
          return this.http.post(`${this.loginUserUrl}`, { 'RefreshToken': this.getRefreshToken() });
        } */
        get: function () {
            var token = localStorage.getItem('token');
            if (!token)
                return null;
            return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]().decodeToken(token);
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());

/* import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

export interface UserDetails {
  _id: string;
  username: string;
  loginName: string;
  password: string;
  expiry: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  loginName: string;
  password: string;
  username?: string;
}

@Injectable()
export class AuthenticationService {
  private token: string;

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('itStoreApp-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('itStoreApp-token');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.expiry > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login' | 'register', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`${this.apiUrl}/api/${type}`, user);
    } else {
      base = this.http.get(`${this.apiUrl}/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public loginUser(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('itStoreApp-token');
    this.router.navigateByUrl('/');
  }
}*/


/***/ }),

/***/ "./src/app/click-detect.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
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

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[clickOutside]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/is-same-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    /**
     * Match two controls if they are the same
     * @param firstControlName
     * @param secondControlName
     * @returns {(AC: AbstractControl) => any}
     * @constructor
     */
    CustomValidators.Match = function (firstControlName, secondControlName) {
        return function (AC) {
            var firstControlValue = AC.get(firstControlName).value; // to get value in input tag
            var secondControlValue = AC.get(secondControlName).value; // to get value in input tag
            if (firstControlValue != secondControlValue) {
                AC.get(secondControlName).setErrors({ MatchFields: true });
                //console.log(false);
            }
            else {
                //console.log(true);
                return null;
            }
        };
    };
    return CustomValidators;
}());

/* import {FormControl} from '@angular/forms';

export function isSameValidator (otherControlName: string) {

  let sourceControl: FormControl;
  let otherControl: FormControl;

  return function matchFormControls (control: FormControl) {

    if (!control.parent) {
      return null;
    }

    if (!sourceControl) {
      sourceControl = control;
      otherControl = control.parent.get(otherControlName) as FormControl;
      if (!otherControl) {
        throw new Error('isSameValidator(): Other Control is not found');
      }
      otherControl.valueChanges.subscribe(() => {
        sourceControl.updateValueAndValidity();
      });
    }

    if (!otherControl) {
      return null;
    }

    if (otherControl.value !== sourceControl.value) {
      return {
        matchOther: true
      };
    }

    return null;

  }

} */


/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"showErrorMessage\">\n    <!-- <button class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"hideErrorMessage()\">&times;</button> -->\n    <div class=\"text-center\">\n      <h5>Invalid Credentials!!!</h5>\n    </div>\n  </div>\n  <!-- <h6>All fields are mandatory.</h6> -->\n  <div class=\"rules\" *ngIf=\"showLoginRules\">\n    <p>Login Instructions:</p>\n    <p class=\"mandatory\">All fields are mandatory</p>\n  </div>\n  <form name=\"form\" #form=\"ngForm\" (ngSubmit)=\"login(form.value)\">\n    <!-- <fieldset [disabled]=\"disabledValue\"> -->\n      <div class=\"form-group\">\n        <span *ngIf=\"!loginName.touched || (loginName.valid && !failedLogin)\" class=\"text-info\">Use the Login Name that you chose during registration.</span>\n        <span *ngIf=\"loginName.touched && loginName.valid\" class=\"text-success\"></span>\n        <span *ngIf=\"loginName.touched && loginName.invalid\" class=\"text-danger\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Use the Login Name that you chose during registration.</span>\n        <!-- <span *ngIf=\"loginName.errors\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Only alphabets and numbers. Length 6-11 characters.</span> -->\n        <!-- <span *ngIf=\"loginName.errors?.pattern\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Incorrect entry or length mismatch.</span> -->\n        <span *ngIf=\"loginName.touched && loginName.valid && failedLogin\" class=\"text-danger\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Check Login Name.</span>\n        <!-- <span *ngIf=\"loginName.errors?.minlength\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Minimum length is 6 characters.</span>\n        <span *ngIf=\"loginName.errors?.maxlength\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Maximum length is 11 characters.</span> -->\n        <label class=\"col-12\">\n  \t\t\t\t<input type=\"text\" class=\"input-text\" name=\"loginName\" placeholder=\"Type in Login Name. Do not use Full Name.\" #loginName=\"ngModel\" ngModel pattern=\"[a-zA-Z0-9]{6,11}\" aria-label=\"Login Name\" autocomplete=\"off\" required>\n          <div class=\"input-icon\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></div>\n  \t\t\t</label>\n      </div>\n      <div class=\"form-group\">\n        <span *ngIf=\"!password.touched || (password.valid && !failedLogin)\" class=\"text-info\">Type in the password that you chose during registration.</span>\n        <span *ngIf=\"password.touched && password.valid\" class=\"text-success\"></span>\n        <span *ngIf=\"password.touched && password.invalid\" class=\"text-danger\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Type in the password that you chose during registration.</span>\n        <!-- <span *ngIf=\"password.errors\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Alphanumeric and special chars. Length 6-11 characters.</span> -->\n        <!-- <span *ngIf=\"password.errors?.pattern\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Incorrect entry or length mismatch.</span> -->\n        <span *ngIf=\"password.valid && failedLogin\" class=\"text-danger\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Check Password.</span>\n        <label class=\"col-12\">\n          <input type=\"password\" class=\"input-text\" name=\"password\" placeholder=\"Password\" #password=\"ngModel\" ngModel pattern=\"[a-zA-z0-9_!@#$%^-]{6,11}\" aria-label=\"Password\" autocomplete=\"off\" required>\n          <div class=\"input-icon\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></div>\n        </label>\n      </div>\n      <div class=\"row\">\n        <button type=\"submit\" class=\"btn btn-login\" [disabled]=\"!form.valid\">Sign in <i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i></button>\n      </div>\n    <!-- </fieldset> -->\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, formBuilder, router, authenticationService) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        /* credentials: TokenPayload = {
          loginName: '',
          password: ''
        }; */
        //loginForm: FormGroup;
        this.showLoginRules = true;
        this.failedLogin = false;
        this.showErrorMessage = false;
    }
    /* ngOnInit(): void {
        this.loginForm  = this.formBuilder.group({
          loginName: ['', [Validators.required, Validators.pattern('^[a-z0-9-]+$')]],
              password: ['', [Validators.required, Validators.minLength(1)]]
          })
    }
  
    get loginNameLogin() { return this.loginForm.get('loginName'); }
    get passwordLogin() { return this.loginForm.get('password'); } */
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        //console.log(form);
        this.authenticationService.loginExistingUser(user).subscribe(function (data) {
            if (data)
                _this.router.navigate(['/Dashboard']);
        }, function (err) {
            //console.error(err);
            _this.loginNameRef.nativeElement.focus();
            _this.showLoginRules = false;
            _this.failedLogin = true;
            _this.showErrorMessage = true;
            setTimeout(function () {
                _this.showErrorMessage = false;
            }, 1500);
        });
    };
    LoginComponent.prototype.isLoggedIn = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginName', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LoginComponent.prototype, "loginNameRef", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row logout\">\n    <h1 class=\"col-12\">You are about to exit from this application.</h1>\n    <p class=\"col-12\">\n      <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i> YES. <a (click)=\"authenticationService.logout();\" routerLink=\"/\" routerLinkActive=\"active\">Logout</a> completely.\n      <span>This action requires re-login to access the application.</span>\n    </p>\n    <p class=\"col-12\">\n      <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i> NO. I don't want to logout now.\n      <span>Go to <a routerLink=\"/Dashboard\" routerLinkActive=\"active\">Dashboard</a> page to resume your work.</span>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.scss":
/***/ (function(module, exports) {

module.exports = ".logout {\n  margin: 10px auto;\n  text-align: center; }\n  .logout * {\n    margin: 1em 0; }\n  .logout h1 {\n    font-family: 'Scope One', Arial, Verdana;\n    font-size: 3em;\n    font-weight: bold;\n    color: #623a03; }\n  .logout p {\n    font-size: 1.5em;\n    color: #049469; }\n  .logout p .fa-angle-double-right, .logout p .fa-angle-double-left {\n      position: relative;\n      top: 5px;\n      margin: 0 5px;\n      font-size: 1.75em;\n      color: #0a6f90; }\n  .logout p a {\n      font-weight: bold;\n      color: #623a03;\n      text-decoration: underline; }\n  .logout p a:hover {\n        text-decoration: none; }\n  .logout p span {\n      font-size: 0.75em;\n      color: #007bff; }\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row page-not-found\">\n    <h1 class=\"col-12\">404</h1>\n    <h4 class=\"col-12\">The page you are trying to access does not exist.</h4>\n    <h3 class=\"col-12\">Go to <a routerLink=\"/Dashboard\" routerLinkActive=\"active\">Dashboard</a> page to easily navigate to the page you want to.</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ".page-not-found {\n  margin: 10px auto;\n  text-align: center; }\n  .page-not-found * {\n    margin: 0.75em 0; }\n  .page-not-found h1 {\n    margin-bottom: 0;\n    font-family: 'Scope One', Arial, Verdana;\n    font-size: 8em;\n    font-weight: bold;\n    color: #623a03; }\n  .page-not-found h4 {\n    color: #0a6f90; }\n  .page-not-found h3 {\n    color: #049469; }\n  .page-not-found h3 a {\n      font-weight: bold;\n      color: #623a03;\n      text-decoration: underline; }\n  .page-not-found h3 a:hover {\n        text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <!-- <h6>All fields are mandatory</h6> -->\n  <div class=\"rules\" *ngIf=\"showRegistrationRules\">\n    <p>Registration Instructions:</p>\n    <p class=\"mandatory\">All fields are mandatory</p>\n    <p>Remember your <b>Login Name</b>. This will be used during login after registration and <span style=\"font-weight:bold; text-decoration:underline;\">not Your Full Name</span>.</p>\n    <p>Special Characters for Password and Re-type Password: _ ! @ # $ % ^ -.</p>\n    <p>First fill Password. Then fill Re-type Password.</p>\n  </div>\n  <div class=\"alert alert-danger alert-dismissible\" *ngIf=\"showDuplicateMessage\">\n    <!-- <button class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"hideDuplicateMessage()\">&times;</button> -->\n    <div class=\"text-center\">\n      <h5>Login Name already exists.<br />Please choose another one!</h5>\n    </div>\n  </div>\n  <div class=\"alert alert-success\" *ngIf=\"showSuccessMessage\">\n    <h4>Registration successful.<br />You can now login to the app!</h4>\n  </div>\n  <form name=\"form\" [formGroup]=\"form\">\n    <div class=\"container-fluid\">\n      <div class=\"row form-group\">\n        <span *ngIf=\"!form.controls['username'].touched || form.controls['username'].valid\" class=\"text-info\">Only alphabets. Length 6-22 characters.</span>\n        <span *ngIf=\"form.controls['username'].touched && form.controls['username'].valid\" class=\"text-success\"></span>\n        <span *ngIf=\"form.controls['username'].invalid && form.controls['username'].touched\" class=\"text-danger\">\n          <span *ngIf=\"form.controls['username'].errors?.required\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Only alphabets. Length 6-22 characters.</span>\n          <span *ngIf=\"form.controls['username'].errors?.pattern\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Invalid characters found.</span>\n          <span *ngIf=\"form.controls['username'].errors?.minlength || form.controls['username'].errors?.maxlength\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Length 6-22 characters.</span>\n        </span>\n        <label class=\"col-12\">\n          <!-- <span>Username</span> -->\n\t\t\t\t\t<input type=\"text\" name=\"inputUsername\" #username formControlName=\"username\" placeholder=\"Your Full Name\" autocomplete=\"off\" (focus)=\"onControlFocus()\" required />\n          <div class=\"input-icon\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i></div>\n\t\t\t\t</label>\n      </div>\n      <div class=\"row form-group\">\n        <span *ngIf=\"!form.controls['email'].touched || form.controls['email'].valid\" class=\"text-info\">Only standard email address.</span>\n        <span *ngIf=\"form.controls['email'].touched && form.controls['email'].valid\" class=\"text-success\"></span>\n        <span *ngIf=\"form.controls['email'].invalid && form.controls['email'].touched\" class=\"text-danger\">\n          <span *ngIf=\"form.controls['email'].errors?.required\"><i class=\"fa fa-remove-o\" aria-hidden=\"true\"></i>Only standard email address.</span>\n          <span *ngIf=\"form.controls['email'].errors?.pattern\"><i class=\"fa fa-remove-o\" aria-hidden=\"true\"></i>Invalid format.</span>\n        </span>\n        <label class=\"col-12\">\n          <!-- <span>Username</span> -->\n\t\t\t\t\t<input type=\"text\" name=\"inputEmail\" #email formControlName=\"email\" placeholder=\"Email Address\" autocomplete=\"off\" (focus)=\"onControlFocus()\" required />\n          <div class=\"input-icon\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i></div>\n\t\t\t\t</label>\n      </div>\n      <div class=\"row form-group\">\n        <span *ngIf=\"!form.controls['loginName'].touched || form.controls['loginName'].valid\" class=\"text-info\">Only alphabets and numerics. Length 6-11 characters.</span>\n        <span *ngIf=\"form.controls['loginName'].touched && form.controls['loginName'].valid\" class=\"text-success\"></span>\n        <span *ngIf=\"form.controls['loginName'].touched && form.controls['loginName'].invalid\" class=\"text-danger\">\n          <span *ngIf=\"form.controls['loginName'].errors?.required\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Only alphabets and numerics. Length 6-11 characters.</span>\n          <span *ngIf=\"form.controls['loginName'].errors?.pattern\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Invalid characters found.</span>\n          <span *ngIf=\"form.controls['loginName'].errors?.minlength || form.controls['loginName'].errors?.maxlength\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Length 6-11 characters.</span>\n        </span>\n        <label class=\"col-12\">\n          <!-- <span>Login Name</span> -->\n\t\t\t\t\t<input type=\"text\" name=\"inputLoginName\" #loginName formControlName=\"loginName\" placeholder=\"Choose any Login Name\" autocomplete=\"off\" required />\n          <div class=\"input-icon\"><i class=\"fa fa-user-md\" aria-hidden=\"true\"></i></div>\n\t\t\t\t</label>\n      </div>\n      <div class=\"row form-group\">\n        <span *ngIf=\"!form.controls['password'].touched || form.controls['password'].valid\" class=\"text-info\">Alphanumeric and special chars. Length 6-11 characters.</span>\n        <span *ngIf=\"form.controls['password'].touched || form.controls['password'].valid\" class=\"text-success\"></span>\n        <span *ngIf=\"form.controls['password'].touched && form.controls['password'].invalid\" class=\"text-danger\">\n          <!-- <span *ngIf=\"form.controls['password'].errors?.minLength\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Length 6-11 characters.</span> -->\n          <span *ngIf=\"passwordRetype.errors || password.errors?.mismatch\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Must match with Re-type Password field. Length 6-11 characters.</span>\n        </span>\n        <label class=\"col-12\">\n\t\t\t\t\t<input type=\"password\" name=\"inputPassword\" #password formControlName=\"password\" placeholder=\"Password\" autocomplete=\"off\" (focus)=\"onControlFocus()\" required />\n          <div class=\"input-icon\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></div>\n\t\t\t\t</label>\n      </div>\n      <div class=\"row form-group\">\n        <span *ngIf=\"!passwordRetype.touched || passwordRetype.valid\" class=\"text-info\">Must match with Password field.</span>\n        <!-- <span class=\"text-info\"><br />First fill Password. Then fill Re-type Password.</span> -->\n        <span *ngIf=\"(passwordRetype.touched || passwordRetype.valid) && !password.errors?.mismatch\" class=\"text-success\"></span>\n        <span *ngIf=\"passwordRetype.touched && passwordRetype.invalid\" class=\"text-danger\">\n          <!-- <span *ngIf=\"passwordRetype.errors || password.errors?.mismatch\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Did not match with Password field.</span> -->\n          <span *ngIf=\"passwordRetype.errors\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i>Did not match with Password field.</span>\n        </span>\n        <label class=\"col-12\">\n\t\t\t\t\t<input type=\"password\" name=\"retypePassword\" #retypePassword formControlName=\"passwordRetype\" placeholder=\"Re-type Password\" autocomplete=\"off\" (focus)=\"onControlFocus()\" required />\n          <div class=\"input-icon\"><i class=\"fa fa-repeat\" aria-hidden=\"true\"></i></div>\n\t\t\t\t</label>\n        <!-- <input type=\"text\" #hiddenField /> -->\n      </div>\n      <button type=\"submit\" [disabled]=\"!form.valid\" #registerMe (click)=\"register(username.value, email.value, loginName.value, password.value)\" class=\"col-5 btn btn-primary\">Register Me</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__("./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__is_same_validator__ = __webpack_require__("./src/app/is-same-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    /* user = {
      username: '',
      loginName: '',
      password: ''
    }; */
    function RegisterComponent(http, formBuilder, router, authenticationService, ngxSpinnerService) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.ngxSpinnerService = ngxSpinnerService;
        this.showRegistrationRules = true;
        this.showDuplicateMessage = false;
        this.showSuccessMessage = false;
        this.showLoginTab = false;
        this.disableSubmitButtton = true;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // Use the formbuilder to build the Form model
        this.form = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(22), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z ]+$')]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(this.emailPattern)]],
            loginName: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z0-9]+$')]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[a-zA-z0-9_!@#$%^-]+$')]],
            passwordRetype: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(11)]]
        }, { validator: __WEBPACK_IMPORTED_MODULE_6__is_same_validator__["a" /* CustomValidators */].Match('password', 'passwordRetype') });
    };
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () { return this.form.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.form.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "loginNameRegister", {
        get: function () { return this.form.get('loginName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "passwordRegister", {
        get: function () { return this.form.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "passwordRetype", {
        get: function () { return this.form.get('passwordRetype'); },
        enumerable: true,
        configurable: true
    });
    /* hideDuplicateMessage() {
      this.visibleDuplicateMessage = false;
      this.form.enable();
    }
  
    showDuplicateMessage() {
      this.visibleDuplicateMessage = true;
      this.form.disable();
    }
  
    hideSuccessMessage() {
      this.visibleSuccessMessage = false;
    }
  
    showSuccessMessage() {
      this.visibleSuccessMessage = true;
      this.form.reset();
    } */
    RegisterComponent.prototype.onControlFocus = function () {
        this.showRegistrationRules = true;
        this.showSuccessMessage = false;
        this.showDuplicateMessage = false;
    };
    RegisterComponent.prototype.register = function (username, email, loginName, password) {
        var _this = this;
        this.ngxSpinnerService.show();
        this.disableSubmitButtton = false;
        this.showSuccessMessage = false;
        this.showDuplicateMessage = false;
        if (this.form.valid) {
            this.authenticationService.registerNewUser(username, email, loginName, password).subscribe(function (res) {
                _this.registerMeRef.nativeElement.focus();
                _this.form.reset();
                _this.showRegistrationRules = false;
                _this.showSuccessMessage = true;
                _this.ngxSpinnerService.hide();
                //setTimeout(() => this.renderer.selectRootElement('#hiddenField').focus(), 0);
            }, function (err) {
                if (err.message) {
                    _this.showRegistrationRules = false;
                    _this.showDuplicateMessage = true;
                    _this.ngxSpinnerService.hide();
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('registerMe', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RegisterComponent.prototype, "registerMeRef", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6 welcome\">\n      <h2>Welcome to <br />Asset Manager Application</h2>\n      <h5>\n          This application enables IT Administrators easily deal with regular Asset Management tasks.\n          They can add new assets to the store and manage existing assets. This is an authentication\n          based applicaiton and so first registration and then login are mandatory.\n      </h5>\n      <!-- <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-12 login-form\">\n            <app-login></app-login>\n          </div>\n        </div>\n      </div> -->\n    </div>\n    <div class=\"col-md-6 login-register\">\n      <div class=\"tab-forms\">\n        <ngx-spinner\n          bdColor=\"rgba(255,255,255,0.7)\"\n          size=\"medium\"\n          color=\"red\"\n          type=\"square-jelly-box\">\n        </ngx-spinner>\n        <!-- <div *ngIf=\"loading\" style=\"background-color:#fff;height: 100%;opacity: 0.8;position: absolute;width: 100%;z-index: 1;\">\n            <p style=\"font-size: 3em;position: absolute;top: 50%;left: 25%;color: red;opacity: 1;\">Laoding...</p>\n        </div> -->\n        <input id=\"tab1\" type=\"radio\" name=\"tabs\" /><label for=\"tab1\">User Login<br /><h6>For Existing Users</h6></label>\n        <input id=\"tab2\" type=\"radio\" name=\"tabs\" checked /><label for=\"tab2\">Create Account<h6>For New Users</h6></label>\n        <div class=\"clearfix\"></div>\n        <section id=\"content1\"><app-login></app-login></section>\n        <section id=\"content2\"><app-register></app-register></section>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/***/ (function(module, exports) {

module.exports = ".welcome {\n  padding: 2em 0;\n  color: #fff;\n  background-color: #01c6d6;\n  /* @media (min-width:768px) and (max-width:1360px) {\r\n    padding: 15% 0;\r\n    h2 {\r\n      margin-bottom: 0.5em;\r\n      line-height: 1.5;\r\n    }\r\n    h5 {\r\n      padding: 2% 7%;\r\n      font-size: 1em;\r\n    }\r\n  } */\n  /* @media (min-width:1400px) {\r\n    h2 {\r\n        font-size: 3.25em;\r\n    }\r\n    h5 {\r\n      padding: 5%;\r\n    }\r\n  } */ }\n  .welcome h2 {\n    margin-bottom: 1em;\n    font-family: 'Scope One', helvetica, verdana, sans-serif, arial;\n    font-size: 1.295em;\n    font-weight: bold;\n    line-height: 1.35;\n    text-align: center; }\n  .welcome h5 {\n    margin-bottom: 0;\n    padding: 0 1em;\n    font-family: 'Kotta One', helvetica, verdana, sans-serif, arial;\n    font-size: 0.8em;\n    line-height: 1.75;\n    text-align: justify; }\n  @media screen and (min-width: 421px) and (max-width: 575px) {\n    .welcome h2 {\n      margin-bottom: 0.75em;\n      font-size: 1.8em; }\n    .welcome h5 {\n      font-size: 0.9em; } }\n  @media (min-width: 576px) and (max-width: 767px) {\n    .welcome h2 {\n      margin-bottom: 0.5em;\n      font-size: 2.6em; }\n    .welcome h5 {\n      padding: 0 1.25em;\n      font-size: 1em; } }\n  @media (min-width: 768px) and (max-width: 991px) {\n    .welcome {\n      padding: 5em 0; }\n      .welcome h2 {\n        font-size: 1.65em; }\n      .welcome h5 {\n        font-size: 0.9em; } }\n  @media (min-width: 992px) and (max-width: 1199px) {\n    .welcome {\n      padding: 5em 0; }\n      .welcome h2 {\n        font-size: 2.25em; }\n      .welcome h5 {\n        padding: 0 1.5em;\n        font-size: 0.95em; } }\n  @media (min-width: 1200px) {\n    .welcome {\n      padding: 5em 0; }\n      .welcome h2 {\n        font-size: 2.75em; }\n      .welcome h5 {\n        padding: 0 1.5em;\n        font-size: 1em; } }\n  .login-register {\n  background-color: #17a2b8; }\n  .login-register .tab-forms {\n    position: relative;\n    margin: 2em auto;\n    background-color: rgba(255, 255, 255, 0.9);\n    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); }\n  @media screen and (max-width: 399px) {\n      .login-register .tab-forms {\n        width: 90%; } }\n  @media screen and (min-width: 400px) and (max-width: 575px) {\n      .login-register .tab-forms {\n        width: 80%; } }\n  @media screen and (min-width: 576px) and (max-width: 629px) {\n      .login-register .tab-forms {\n        width: 70%; } }\n  @media screen and (min-width: 630px) and (max-width: 767px) {\n      .login-register .tab-forms {\n        width: 60%; } }\n  @media screen and (min-width: 768px) and (max-width: 991px) {\n      .login-register .tab-forms {\n        width: 80%; } }\n  @media screen and (min-width: 992px) and (max-width: 1199px) {\n      .login-register .tab-forms {\n        width: 70%; } }\n  @media screen and (min-width: 1200px) {\n      .login-register .tab-forms {\n        width: 60%; } }\n  .login-register .tab-forms .black-overlay {\n      position: absolute !important; }\n  .login-register section {\n    display: none; }\n  .login-register input {\n    display: none; }\n  .login-register label {\n    float: left;\n    width: 50%;\n    margin: 0 auto -1px;\n    padding: 10px;\n    font-size: 0.8275em;\n    text-align: left;\n    text-transform: uppercase;\n    color: #b4cfec;\n    border-bottom: 2px solid #b4cfec;\n    /* @media (max-width:1024px) {\r\n      font-size: 0.85em;\r\n    } */ }\n  @media screen and (min-width: 421px) {\n      .login-register label {\n        padding: 15px;\n        font-size: 0.875em; } }\n  @media screen and (min-width: 768px) {\n      .login-register label {\n        padding: 10px; } }\n  @media screen and (min-width: 992px) {\n      .login-register label {\n        padding: 15px; } }\n  @media screen and (min-width: 1024px) {\n      .login-register label {\n        font-size: 1em; } }\n  .login-register label h6 {\n      margin-bottom: 0;\n      font-size: 0.85em;\n      color: #969696;\n      text-transform: capitalize; }\n  @media screen and (min-width: 421px) {\n        .login-register label h6 {\n          font-size: 0.825em; } }\n  @media screen and (min-width: 1024px) {\n        .login-register label h6 {\n          font-size: 0.8em; } }\n  .login-register label:hover {\n    color: #ccc;\n    cursor: pointer; }\n  .login-register input:checked + label {\n    color: #4b719a;\n    border-bottom: 2px solid #4b719a; }\n  .login-register #tab1:checked ~ #content1,\n  .login-register #tab2:checked ~ #content2 {\n    display: block; }\n  .register-form {\n  padding: 25px; }\n  .form-container {\n  padding: 10px;\n  /* @media screen and (min-width:768px) and (max-width:991px) {\r\n    padding: 10px;\r\n  } */ }\n  @media screen and (min-width: 421px) {\n    .form-container {\n      padding: 15px; } }\n  @media screen and (min-width: 768px) {\n    .form-container {\n      padding: 10px; } }\n  @media screen and (min-width: 992px) {\n    .form-container {\n      padding: 15px; } }\n  .form-container h2 {\n    margin-bottom: 1.5rem;\n    font-size: 1.15em;\n    color: #343a40; }\n  .form-container .rules p {\n    display: block;\n    margin: 0;\n    padding: 3px 0px;\n    font-size: 0.75em; }\n  .form-container .rules p:nth-child(1) {\n      font-size: 0.85em;\n      font-weight: bold;\n      text-transform: uppercase; }\n  .form-container .rules .mandatory {\n    font-weight: bold;\n    color: #ff0202;\n    /* @media screen and (min-width:768px) {\r\n        font-size: 0.85em;\r\n      }\r\n      @media screen and (min-width:1024px) {\r\n        font-size: 0.9em;\r\n      } */ }\n  .form-container form {\n    padding: 0.5em 0; }\n  .form-container form .form-group {\n      position: relative;\n      margin: 5px 0 35px;\n      /* .bar {\r\n        display:block;\r\n        position:relative;\r\n        &:before {\r\n          left:50%;\r\n        }\r\n        &:after {\r\n          right:50%;\r\n        }\r\n        &:before, &:after {\r\n          content:'';\r\n          height: 1px;\r\n          width: 0;\r\n          bottom: 0;\r\n          position: absolute;\r\n          border-bottom: 2px solid #cc6666;\r\n          //background-color: #650000;\r\n          transition:0.3s ease all;\r\n          -moz-transition:0.3s ease all;\r\n          -webkit-transition:0.3s ease all;\r\n        }\r\n      } */ }\n  @media (min-width: 768px) and (max-width: 1023px) {\n        .form-container form .form-group {\n          margin-bottom: 30px; } }\n  .form-container form .form-group label {\n        position: relative;\n        display: block;\n        margin-bottom: 0;\n        color: red; }\n  .form-container form .form-group label span {\n          font-size: 0.85em;\n          color: #333; }\n  .form-container form .form-group label input {\n          width: 100%;\n          padding: 0.5em 3.2em 0.5em 0.75em;\n          font-size: 0.65em;\n          line-height: 1.4;\n          background-color: #f9f9f9;\n          border: 1px solid #cfe2ea;\n          -webkit-transition: all 0.35s ease-in-out;\n          transition: all 0.35s ease-in-out; }\n  @media screen and (min-width: 576px) {\n            .form-container form .form-group label input {\n              font-size: 0.7em; } }\n  .form-container form .form-group label input + .input-icon {\n            pointer-events: none;\n            position: absolute;\n            top: -7px;\n            right: 3px;\n            width: 1.75em;\n            height: 2.75em;\n            line-height: 2.75em;\n            text-align: center;\n            pointer-events: none; }\n  .form-container form .form-group label input + .input-icon:after {\n              position: absolute;\n              top: 0.675em;\n              bottom: 0.8em;\n              right: 1.75em;\n              display: block;\n              content: \"\";\n              -webkit-transition: all 0.35s ease-in-out;\n              transition: all 0.35s ease-in-out;\n              border-right: 1px solid #e5e5e5; }\n  .form-container form .form-group label input:focus {\n            color: #333;\n            border: 1px solid #ce8e37;\n            outline: 0; }\n  .form-container form .form-group label input:focus + .input-icon .fa {\n              color: #ce8e37; }\n  .form-container form .form-group label input:focus + .input-icon:after {\n              border-right-color: #ce8e37; }\n  .form-container form .form-group .text-info, .form-container form .form-group .text-success, .form-container form .form-group .text-danger {\n        position: absolute;\n        top: 28px;\n        font-size: 0.6em;\n        /* @media (max-width:575px) {\r\n              font-size: 11px;\r\n          }\r\n          @media (min-width:768px) and (max-width:1023px) {\r\n            top: 38px;\r\n            font-size: 0.65em;\r\n          } */ }\n  @media screen and (min-width: 576px) {\n          .form-container form .form-group .text-info, .form-container form .form-group .text-success, .form-container form .form-group .text-danger {\n            font-size: 0.65em; } }\n  .form-container form .form-group .text-info {\n        color: #4b719a; }\n  .form-container form .form-group .text-success + label > input {\n        border: 1px solid #01be86; }\n  .form-container form .form-group .text-success + label > input + .input-icon:after {\n          border-right: 1px solid #01be86; }\n  .form-container form .form-group .text-success + label > input + .input-icon .fa {\n          color: #01be86 !important; }\n  .form-container form .form-group .text-danger + label > input {\n        border: 1px solid #e64848; }\n  .form-container form .form-group .text-danger + label > input + .input-icon:after {\n          border-right: 1px solid #e64848; }\n  .form-container form .form-group .text-danger + label > input + .input-icon .fa {\n          color: #e64848 !important; }\n  .form-container form button {\n      margin: 10px 0;\n      padding: 7px 17px;\n      font-size: 1em; }\n  .form-container form button.btn-login {\n        position: relative;\n        color: #fff;\n        text-align: left;\n        background-color: #07b0eb; }\n  @media (max-width: 575px) {\n          .form-container form button.btn-login {\n            padding: 7px 12px;\n            font-size: 0.85em; } }\n  @media (min-width: 768px) and (max-width: 1023px) {\n        .form-container form button {\n          padding: 7px 10px;\n          font-size: 0.9em; } }\n  @media (min-width: 1280px) {\n        .form-container form button {\n          padding: 7px 13px; } }\n  @media (max-width: 575px) {\n      .form-container form {\n        width: 100%; } }\n  @media (max-width: 575px) {\n    .form-container .login-form {\n      margin-top: 10px; }\n    .form-container .register-form {\n      margin-top: 20px;\n      padding: 25px; }\n    .form-container form {\n      padding: 0; }\n      .form-container form .form-group .input-text:focus ~ label, .form-container form .form-group .input-text:valid ~ label {\n        top: -15px; }\n      .form-container form .form-group p {\n        margin: 0 0 -7px; }\n        .form-container form .form-group p .text-info, .form-container form .form-group p .text-danger {\n          padding: 0;\n          font-size: 11px; }\n      .form-container form button {\n        margin-right: 15px;\n        padding: 7px 0;\n        font-size: 0.9rem; } }\n  .form-container .alert {\n    margin: 0.5em 0;\n    padding: 0.75em;\n    line-height: 1.25;\n    text-align: center; }\n  .form-container .alert h5 {\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import User from './user.model';
//import { WelcomeService } from './welcome.service';

var WelcomeComponent = /** @class */ (function () {
    /* signup = { username:'', loginname:'', password:'', retypePassword:'' };
    message = ''; */
    //private newUser: User;
    /* public newUser: User = new User();
    usersList: User[];
  
    loginName: string;
    password: string;
  
    signin = { loginName:'', password:'' };
    message = '';
    data: any; */
    function WelcomeComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /*this.http.post('http://localhost:3000/api/login',this.signin).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      this.router.navigate(['Assets']);
    }, err => {
      this.message = err.error.msg;
    });
  }*/
    WelcomeComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.isLoggedIn()) {
            this.router.navigate(['Dashboard']);
        }
    };
    WelcomeComponent.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            console.log(operation + " failed: " + error.message);
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeService = /** @class */ (function () {
    function WelcomeService(http) {
        this.http = http;
        //apiUrl = 'http://localhost:3000';
        this.registerUserUrl = "/api/register";
        this.getUsersUrl = "/api/getUsers";
    }
    //filter: Asset = new Asset();
    WelcomeService.prototype.registerNewUser = function (user) {
        return this.http.post("" + this.registerUserUrl, user);
    };
    /* getUsers(): Observable<User[]>{
      return this.http.get(this.getUsersUrl)
      .map(res  => {
        return res["data"].docs as User[];
      })
    } */
    WelcomeService.prototype.handleError = function (error) {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    WelcomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WelcomeService);
    return WelcomeService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map