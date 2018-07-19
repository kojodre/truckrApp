(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/*! exports provided: apiKey, authDomain, databaseURL, storageBucket, messagingSenderId, projectId, default */
/***/ (function(module) {

module.exports = {"apiKey":"AIzaSyBt_vL5iC2hLK9Ss5kc8Uqh9wZyN8rwOrg","authDomain":"truckrtech.firebaseapp.com","databaseURL":"https://truckrtech.firebaseio.com","storageBucket":"truckrtech.appspot.com","messagingSenderId":"713985223854","projectId":"truckrtech"};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accounts/signin/signin.component.css":
/*!******************************************************!*\
  !*** ./src/app/accounts/signin/signin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accounts/signin/signin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/accounts/signin/signin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"/assets/img/homeImages/truckrFooterLogo.png\" width=\"30\" height=\"30\" alt=\"\">\n    </a>\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Sign In</a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" href=\"#\">Driver</a>\n      <a class=\"dropdown-item\" href=\"#\">Truck Owner</a>\n    </div>\n  </li>\n</nav>\n\n<div id=\"firebaseui-signin-auth-container\"></div>\n\n<div class=\"form-body\">\n  <div>\n    <h4>Cargo Owner Sign In</h4>\n    <p> By signing up, I agree to Truckrs privacy & terms.</p>\n    <button type=\"button\" class=\"btn btn-primary\">Sign Up with Facebook</button>\n    <p>OR</p>\n  </div>\n  <form class=\"px-4 py-3\">\n    <div class=\"form-group\">\n      <label for=\"exampleDropdownFormEmai1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmai1\" placeholder=\"email@example.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleDropdownFormPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleDropdownFormPassword1\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n      <p>Forgot Password?</p>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Sign In</button>\n  </form>\n</div>\n<div class=\"dropdown-divider\">\n  <a class=\"dropdown-item\" href=\"#\">Don't have an account? Sign Up</a>\n</div>\n\n<footer>\n  <ul>\n    <li>\n      <a>Help</a>\n      <a>Privacy</a>\n      <a>Terms</a>\n    </li>\n  </ul>\n  <div class=\"footer-copyright\">\n    <div class=\"copyright\"> ©2018 <span>Truckr Technoligies All rights reserved. </span></div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/accounts/signin/signin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/accounts/signin/signin.component.ts ***!
  \*****************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/npm.js");
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebaseui__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check for already signed in user
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                if (_this.isVerified()) {
                    window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].corporateSiteUrl + "/user";
                }
                else {
                    window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].corporateSiteUrl + "/auth-redirect";
                }
            }
            else {
                _this.checkUser();
            }
        });
    };
    // Check user
    SigninComponent.prototype.checkUser = function () {
        // FirebaseUI config.
        var uiConfig = {
            signInSuccessUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].corporateSiteUrl + "/auth-redirect",
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider.PROVIDER_ID,
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].EmailAuthProvider.PROVIDER_ID,
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>'
        };
        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui__WEBPACK_IMPORTED_MODULE_3__["auth"].AuthUI(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-signin-auth-container', uiConfig);
    };
    // Temporary isVerified Method
    SigninComponent.prototype.isVerified = function () {
        return false;
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/accounts/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/accounts/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/accounts/signup/signup.component.css":
/*!******************************************************!*\
  !*** ./src/app/accounts/signup/signup.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\n    background-color: black !important;\n}\n\nimg{\n    width: 180px;\n}\n\n.form-body {\n    width: 500px;\n    margin: 0 auto;\n    margin-top: 50px;\n    border-radius: 5px;\n    box-shadow: 0px 4px 44px -2px rgba(0, 0, 0, 0.14);\n    padding: 50px 20px;\n}"

/***/ }),

/***/ "./src/app/accounts/signup/signup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/accounts/signup/signup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n      <img class=\"logo\" src=\"/assets/img/truckrFooterLogo.png\" alt=\"Truckr Logo\">\n  </a>\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Sign Up</a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" href=\"#\">Driver</a>\n      <a class=\"dropdown-item\" href=\"#\">Truck Owner</a>\n      <a class=\"dropdown-item\" href=\"#\">Cargo Owner</a>\n    </div>\n  </li>\n</nav>\n\n<div class=\"form-body\">\n  <div>\n    <h4>Cargo Owner Sign Up</h4>\n    <p> By signing up, I agree to Truckrs privacy & terms.</p>\n    <div id=\"firebaseui-auth-container\"></div>\n  </div>\n  <div>\n    <p>OR</p>\n  </div>\n  <form name=\"signupForm\" (submit)=\"signUp()\" class=\"px-4 py-3\">\n    <div class=\"form-group\">\n      <input type=\"name\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"name\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\">\n    </div>\n    <div class=\"form-group\">\n      <input name=\"newUserEmail\" type=\"email\" class=\"form-control\" [(ngModel)]='newUserEmail' id=\"DropdownFormEmai1\" placeholder=\"email@example.com\">\n    </div>\n    <div class=\"form-group\">\n      <input name=\"newUserPassword\" type=\"password\" class=\"form-control\" [(ngModel)]='newUserPassword' id=\"DropdownFormPassword1\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n      <input type=\"phone\" class=\"form-control\" id=\"DropdownFormPhone\" placeholder=\"Phone Number\">\n      <p>we'll send a verification code via sms to confirm your mobile number.</p>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n  </form>\n</div>\n<div class=\"dropdown-divider\">\n  <a class=\"dropdown-item\" href=\"#\">Have an account? Sign in</a>\n</div>\n\n<footer>\n  <ul>\n    <li>\n      <a>Help</a>\n      <a>Privacy</a>\n      <a>Terms</a>\n    </li>\n  </ul>\n  <div class=\"footer-copyright\">\n    <div class=\"copyright\"> ©2018 <span>Truckr Technoligies All rights reserved. </span></div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/accounts/signup/signup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/accounts/signup/signup.component.ts ***!
  \*****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebaseui */ "./node_modules/firebaseui/dist/npm.js");
/* harmony import */ var firebaseui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebaseui__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check for already signed in user
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].corporateSiteUrl + "/auth-redirect";
            }
            else {
                _this.checkUser();
            }
        });
        // Ensure only signed in users access this page
        // Check for already signed in user
        // firebase.auth().onAuthStateChanged(function (user) {
        //  if (user) {
        //    console.log('user' + user);
        //    // User is authenticated
        //    } else {
        //    // window.location.href = `${environment.corporateSiteUrl}/signup`;
        //    }
        //  });
    };
    // Check user
    SignupComponent.prototype.checkUser = function () {
        // FirebaseUI config.
        var uiConfig = {
            signInSuccessUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].corporateSiteUrl + "/auth-redirect",
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider.PROVIDER_ID,
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].EmailAuthProvider.PROVIDER_ID,
                firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>'
        };
        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui__WEBPACK_IMPORTED_MODULE_3__["auth"].AuthUI(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    };
    // signup method
    SignupComponent.prototype.signUp = function () {
        console.log('signUp called::', this.newUserEmail);
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(this.newUserEmail, this.newUserPassword).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/accounts/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/accounts/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>this is the admin dashboard</h1>\n<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/user/user.component */ "./src/app/dashboard/user/user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _accounts_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accounts/signup/signup.component */ "./src/app/accounts/signup/signup.component.ts");
/* harmony import */ var _accounts_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accounts/signin/signin.component */ "./src/app/accounts/signin/signin.component.ts");
/* harmony import */ var _auth_redirect_auth_redirect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-redirect/auth-redirect.component */ "./src/app/auth-redirect/auth-redirect.component.ts");
/* harmony import */ var _dashboard_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/about/about.component */ "./src/app/dashboard/about/about.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/help/help.component */ "./src/app/dashboard/help/help.component.ts");
/* harmony import */ var _dashboard_map_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/map/map.component */ "./src/app/dashboard/map/map.component.ts");
/* harmony import */ var _dashboard_message_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/message/message.component */ "./src/app/dashboard/message/message.component.ts");
/* harmony import */ var _dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/orders/orders.component */ "./src/app/dashboard/orders/orders.component.ts");
/* harmony import */ var _dashboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/transactions/transactions.component */ "./src/app/dashboard/transactions/transactions.component.ts");
/* harmony import */ var _dashboard_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/trip-history/trip-history.component */ "./src/app/dashboard/trip-history/trip-history.component.ts");
/* harmony import */ var _dashboard_new_request_new_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/new-request/new-request.component */ "./src/app/dashboard/new-request/new-request.component.ts");
/* harmony import */ var _dashboard_content_content_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/content/content.component */ "./src/app/dashboard/content/content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
    },
    {
        path: 'signup',
        component: _accounts_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
    {
        path: 'signin',
        component: _accounts_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
    },
    {
        path: 'auth-redirect',
        component: _auth_redirect_auth_redirect_component__WEBPACK_IMPORTED_MODULE_7__["AuthRedirectComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        children: [
            {
                path: '',
                component: _dashboard_content_content_component__WEBPACK_IMPORTED_MODULE_17__["ContentComponent"]
            },
            {
                path: 'new-request',
                component: _dashboard_new_request_new_request_component__WEBPACK_IMPORTED_MODULE_16__["NewRequestComponent"]
            },
            {
                path: 'trip-history',
                component: _dashboard_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_15__["TripHistoryComponent"]
            },
            {
                path: 'map',
                component: _dashboard_map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"]
            },
            {
                path: 'message',
                component: _dashboard_message_message_component__WEBPACK_IMPORTED_MODULE_12__["MessageComponent"]
            },
            {
                path: 'transactions',
                component: _dashboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_14__["TransactionsComponent"]
            },
            {
                path: 'orders',
                component: _dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__["OrdersComponent"]
            },
            {
                path: 'help',
                component: _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_10__["HelpComponent"]
            },
            {
                path: 'about',
                component: _dashboard_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]
            },
            {
                path: 'user',
                component: _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var config = {
            apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiKey,
            authDomain: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].authDomain,
            databaseURL: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].databaseURL,
            storageBucket: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].storageBucket,
            messagingSenderId: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].messagingSenderId,
            projectId: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].projectId
        };
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"](config);
        console.log('isLoggedIn::', firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/user/user.component */ "./src/app/dashboard/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _accounts_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accounts/signup/signup.component */ "./src/app/accounts/signup/signup.component.ts");
/* harmony import */ var _accounts_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accounts/signin/signin.component */ "./src/app/accounts/signin/signin.component.ts");
/* harmony import */ var _auth_redirect_auth_redirect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth-redirect/auth-redirect.component */ "./src/app/auth-redirect/auth-redirect.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/trip-history/trip-history.component */ "./src/app/dashboard/trip-history/trip-history.component.ts");
/* harmony import */ var _dashboard_map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/map/map.component */ "./src/app/dashboard/map/map.component.ts");
/* harmony import */ var _dashboard_message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/message/message.component */ "./src/app/dashboard/message/message.component.ts");
/* harmony import */ var _dashboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/transactions/transactions.component */ "./src/app/dashboard/transactions/transactions.component.ts");
/* harmony import */ var _dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/orders/orders.component */ "./src/app/dashboard/orders/orders.component.ts");
/* harmony import */ var _dashboard_about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/about/about.component */ "./src/app/dashboard/about/about.component.ts");
/* harmony import */ var _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/help/help.component */ "./src/app/dashboard/help/help.component.ts");
/* harmony import */ var _dashboard_new_request_new_request_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/new-request/new-request.component */ "./src/app/dashboard/new-request/new-request.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _dashboard_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/navbar/navbar.component */ "./src/app/dashboard/navbar/navbar.component.ts");
/* harmony import */ var _dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/footer/footer.component */ "./src/app/dashboard/footer/footer.component.ts");
/* harmony import */ var _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/sidebar/sidebar.component */ "./src/app/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_content_content_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/content/content.component */ "./src/app/dashboard/content/content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _accounts_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _accounts_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"],
                _auth_redirect_auth_redirect_component__WEBPACK_IMPORTED_MODULE_13__["AuthRedirectComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                _dashboard_trip_history_trip_history_component__WEBPACK_IMPORTED_MODULE_16__["TripHistoryComponent"],
                _dashboard_map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"],
                _dashboard_message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"],
                _dashboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_19__["TransactionsComponent"],
                _dashboard_orders_orders_component__WEBPACK_IMPORTED_MODULE_20__["OrdersComponent"],
                _dashboard_about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                _dashboard_help_help_component__WEBPACK_IMPORTED_MODULE_22__["HelpComponent"],
                _dashboard_new_request_new_request_component__WEBPACK_IMPORTED_MODULE_23__["NewRequestComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_24__["TestComponent"],
                _dashboard_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__["NavbarComponent"],
                _dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["SidebarComponent"],
                _dashboard_content_content_component__WEBPACK_IMPORTED_MODULE_28__["ContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["firebaseConfig"]),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAGJoBJZgUh7iOZsgZykt5HckOGkH9UQ2Q'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-redirect/auth-redirect.component.css":
/*!***********************************************************!*\
  !*** ./src/app/auth-redirect/auth-redirect.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.navbar{\n    background-color: black !important;\n}\n\nimg{\n    width: 180px;\n}"

/***/ }),

/***/ "./src/app/auth-redirect/auth-redirect.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth-redirect/auth-redirect.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"nav-bar-wrap\" class=\"col-md-14 nav-col\">\n<nav class=\"navbar  bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n      <img class=\"logo\" src=\"/assets/img/truckrFooterLogo.png\" alt=\"Truckr Logo\">\n  </a>\n  <li class=\"nav-item butto\">\n    <a class=\"nav-link\" href=\"#\" role=\"button\"><button (click)=\"signOut()\"> Sign Out </button></a>\n\n  </li>\n</nav>\n</div>\n  <div class=\"body-content\">\n    <h4>Hello</h4>\n    <p>\n      Thank you for your interest to become a Truckr partner. We will get back to you shortly.\n    </p>\n\n    <p>\n      Click sign out to be redirected to the home page for more information.\n    </p>\n  </div>\n<br>\n<button (click)=\"signOut()\"> Sign Out </button>"

/***/ }),

/***/ "./src/app/auth-redirect/auth-redirect.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth-redirect/auth-redirect.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthRedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRedirectComponent", function() { return AuthRedirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthRedirectComponent = /** @class */ (function () {
    function AuthRedirectComponent() {
    }
    AuthRedirectComponent.prototype.ngOnInit = function () {
        // let loggedInUser;
        // Ensure only signed in users access this page
        // Check for already signed in user
        // firebase.auth().onAuthStateChanged(function (user) {
        //   if (user) {
        //     console.log(user);
        //     // User is authenticated
        //   } else {
        //     window.location.href = `${environment.corporateSiteUrl}`;
        //   }
        // });
    };
    // signout method
    AuthRedirectComponent.prototype.signOut = function () {
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut().then(function () {
            window.location.href = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].corporateSiteUrl;
        });
    };
    AuthRedirectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-redirect',
            template: __webpack_require__(/*! ./auth-redirect.component.html */ "./src/app/auth-redirect/auth-redirect.component.html"),
            styles: [__webpack_require__(/*! ./auth-redirect.component.css */ "./src/app/auth-redirect/auth-redirect.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthRedirectComponent);
    return AuthRedirectComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/about/about.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/about/about.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/about/about.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/about/about.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/about/about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/dashboard/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/dashboard/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/content/content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/content/content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/content/content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/content/content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 panel panel-flat\">\ndashboard content Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero ab, commodi repellendus voluptas ullam\nmodi aperiam alias labore vitae vel officiis saepe doloremque expedita dolore minima, assumenda soluta et.\n\nLorem \n</div>"

/***/ }),

/***/ "./src/app/dashboard/content/content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/content/content.component.ts ***!
  \********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/dashboard/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/dashboard/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: rgb(235, 228, 228) !important;\n}\n\n.panel-body {\n    font-size: 30px;\n    font-weight: bold;\n    align-items: center;\n    text-align: center;\n}\n\n.btn {\n    color: black !important;\n    margin-top: 15px;\n    margin-bottom: 20px !important;\n    margin-left: 25px;\n    background-color: white !important;\n    padding-right: 25px !important;\n    padding-left: 25px !important;\n    font-weight: bold !important;\n}\n\n.btn-primary{\n    border-color: white !important;\n\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Main navbar -->\n<app-navbar></app-navbar>\n<!-- /main navbar -->\n\n<!-- Page container -->\n<div class=\"page-container\">\n  <!-- Page content -->\n  <div class=\"page-content\">\n    <!-- Main sidebar -->\n    <div class=\"sidebar sidebar-main\">\n      <div class=\"sidebar-content\">\n        <!-- User menu -->\n        <div class=\"sidebar-user\">\n          <div class=\"category-content\">\n            <div class=\"media\">\n              <a routerLink=\"#\" class=\"media-left\"><img src=\"assets/images/image.png\"></a>\n              <div class=\"media-body\">\n                <span class=\"media-heading text-semibold\">Victoria Baker</span>\n                <div class=\"text-size-mini text-muted\">\n                  &nbsp;Accra, Ghana\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /user menu -->\n\n\n        <!-- Main navigation -->\n        <div class=\"sidebar-category sidebar-category-visible\">\n          <div class=\"category-content no-padding\">\n            <ul class=\"navigation navigation-main navigation-accordion\">\n\n              <!-- Main -->\n              <div class=\"text order-button\">\n                <a routerLink=\"/dashboard/new-request\" class=\"btn btn-primary\">New Request</a>\n              </div>\n              <li><a routerLink=\"/dashboard\"><i class=\"icon-home4\"></i> <span>Dashboard</span></a></li>\n              <li><a routerLink=\"/dashboard/trip-history\"><i class=\"icon-stack\"></i> <span>Trip History</span></a></li>\n              <li><a routerLink=\"/dashboard/map\"><i class=\"icon-home4\"></i><span>Map</span></a></li>\n              <li><a routerLink=\"/dashboard/message\"><i class=\"icon-home4\"></i><span>Message</span></a></li>\n              <li class=\"navigation-divider\"></li>\n              <li><a routerLink=\"/dashboard/transactions\"><i class=\"icon-home4\"></i><span>Transactions</span></a></li>\n              <li><a routerLink=\"/dashboard/orders\"><i class=\"icon-home4\"></i><span>Orders</span></a></li>\n              <li><a routerLink=\"/dashboard/about\"><i class=\"icon-home4\"></i><span>About</span></a></li>\n              <li><a routerLink=\"/dashboard/help\"><i class=\"icon-list-unordered\"></i> <span>Help / FAQ</span></a></li>\n              <!-- /main -->\n\n            </ul>\n          </div>\n        </div>\n        <!-- /main navigation -->\n\n      </div>\n    </div>\n    <!-- /main sidebar -->\n\n    <!-- Main content -->\n    <div class=\"content-wrapper\">\n\n      <!-- Content area -->\n      <div class=\"content\">\n\n        <!-- dashboard panel -->\n          <router-outlet></router-outlet>\n        <!-- /dashboard panel -->\n\n        <!-- Footer -->\n        <app-footer></app-footer>\n        <!-- /footer -->\n\n      </div>\n      <!-- /content area -->\n\n    </div>\n    <!-- /main content -->\n\n  </div>\n  <!-- /page content -->\n\n</div>\n<!-- /page container -->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer text-muted\">\n  <div class=\"copyright\">©2018 <span>Truckr Technologies All rights reserved.</span></div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/dashboard/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/dashboard/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/help/help.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/help/help.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/help/help.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/help/help.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/help/help.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/help/help.component.ts ***!
  \**************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/dashboard/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/dashboard/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/map/map.component.css":
/*!*************************************************!*\
  !*** ./src/app/dashboard/map/map.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: rgb(235, 228, 228) !important;\n}\n\n.navbar {\n    background-color: #FDFAFA !important;\n}\n\n.navbar-brand img {\n    width: 180px !important;\n}\n\n.navbar-inverse .navbar-header{\n    flex: 1 !important;\n}\n\n.dropdown-toggle{\n    color: black !important;\n}\n\n.panel-body {\n    font-size: 30px;\n    font-weight: bold;\n    align-items: center;\n    text-align: center;\n}\n\n.btn {\n    color: black !important;\n    margin-top: 15px;\n    margin-bottom: 20px !important;\n    margin-left: 25px;\n    background-color: white !important;\n    padding-right: 25px !important;\n    padding-left: 25px !important;\n    font-weight: bold !important;\n}\n\n.btn-primary{\n    border-color: white !important;\n\n}\n\nagm-map {\n  height: 500px;\n}"

/***/ }),

/***/ "./src/app/dashboard/map/map.component.html":
/*!**************************************************!*\
  !*** ./src/app/dashboard/map/map.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Simple panel -->\n<div>\n  <!-- this creates a google map on the page with the given lat/lng from -->\n  <!-- the component as the initial center of the map: -->\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-marker [latitude]=\"currLat\" [longitude]=\"currLong\"></agm-marker>\n  </agm-map>\n</div>\n<!-- /simple panel -->\n"

/***/ }),

/***/ "./src/app/dashboard/map/map.component.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/map/map.component.ts ***!
  \************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.title = 'My first AGM project';
        this.lat = 6.2235263;
        this.lng = -0.5892302;
        this.currLat = 5.645922;
        this.currLong = -0.160008;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/dashboard/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/dashboard/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/message/message.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/message/message.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: rgb(235, 228, 228) !important;\n}\n\n.navbar {\n    background-color: #FDFAFA !important;\n}\n\n.navbar-brand img {\n    width: 180px !important;\n}\n\n.navbar-inverse .navbar-header{\n    flex: 1 !important;\n}\n\n.dropdown-toggle{\n    color: black !important;\n}\n\n.panel-body {\n    font-size: 30px;\n    font-weight: bold;\n    align-items: center;\n    text-align: center;\n}\n\n.btn {\n    color: black !important;\n    margin-top: 15px;\n    margin-bottom: 20px !important;\n    margin-left: 25px;\n    background-color: white !important;\n    padding-right: 25px !important;\n    padding-left: 25px !important;\n    font-weight: bold !important;\n}\n\n.btn-primary{\n    border-color: white !important;\n\n}"

/***/ }),

/***/ "./src/app/dashboard/message/message.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/message/message.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- Page container -->\n  <div class=\"page-container\">\n    <!-- Page content -->\n    <div class=\"page-content\">\n\n      <!-- Main content -->\n      <div class=\"content-wrapper\">\n\n        <!-- Content area -->\n        <div class=\"content\">\n\n          <!-- dashboard panel -->\n          <div class=\"col-md-8 panel panel-flat\">\n\n\n\n          </div>\n          <!-- /dashboard panel -->\n        </div>\n        <!-- /content area -->\n\n      </div>\n      <!-- /main content -->\n\n    </div>\n    <!-- /page content -->\n\n  </div>\n  <!-- /page container -->"

/***/ }),

/***/ "./src/app/dashboard/message/message.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/message/message.component.ts ***!
  \********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/dashboard/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/dashboard/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/navbar/navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/navbar/navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    background-color: #F8F5F5 !important;\n}\n.navbar-brand img {\n    width: 180px !important;\n}\n.navbar-inverse .navbar-header{\n    flex: 1 !important;\n}\n.dropdown-toggle{\n    color: black !important;\n}"

/***/ }),

/***/ "./src/app/dashboard/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/img/truckrLogoBlack.png\" alt=\"\"></a>\n  </div>\n\n  <div class=\"navbar-collapse collapse\" id=\"navbar-mobile\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"dropdown dropdown-user\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n          <!-- <img src=\"assets/images/image.png\" alt=\"\"> -->\n          <span>Hi Victoria</span>\n        </a>\n        <ul class=\"dropdown-menu dropdown-menu-right\">\n          <li><a href=\"#\"><i class=\"icon-user-plus\"></i> My profile</a></li>\n          <li><a href=\"#\"><i class=\"icon-coins\"></i> My balance</a></li>\n          <li><a href=\"#\"><span class=\"badge badge-warning pull-right\">58</span> <i class=\"icon-comment-discussion\"></i> Messages</a></li>\n          <li class=\"divider\"></li>\n          <li><a href=\"#\"><i class=\"icon-cog5\"></i> Account settings</a></li>\n          <li><a href=\"#\"><i class=\"icon-switch2\"></i> Logout</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/dashboard/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/dashboard/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/new-request/new-request.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/new-request/new-request.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: rgb(235, 228, 228) !important;\n}\n\n.navbar {\n    background-color: #FDFAFA !important;\n}\n\n.navbar-brand img {\n    width: 180px !important;\n}\n\n.navbar-inverse .navbar-header{\n    flex: 1 !important;\n}\n\n.dropdown-toggle{\n    color: black !important;\n}\n\n.panel-body {\n    font-size: 30px;\n    font-weight: bold;\n    align-items: center;\n    text-align: center;\n}\n\n.btn {\n    color: black !important;\n    margin-top: 15px;\n    margin-bottom: 20px !important;\n    margin-left: 25px;\n    background-color: white !important;\n    padding-right: 25px !important;\n    padding-left: 25px !important;\n    font-weight: bold !important;\n}\n\n.btn-primary{\n    border-color: white !important;\n\n}\n\nagm-map {\n  height: 500px;\n}"

/***/ }),

/***/ "./src/app/dashboard/new-request/new-request.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/new-request/new-request.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"col-md-8 panel panel-flat\">\n<div class=\"row\">\n  <div class=\"col-md-8 col-md-offset-3\">\n    <h2>Load Details</h2>\n    <form role=\"form\" id=\"reused_form\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Type Of Commodity:</label>\n          <input [(ngModel)]=\"commodityType\" name=\"commodity type\" type=\"text\" class=\"form-control\" id=\"commodity-type\" maxlength=\"50\">\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Weight Of Commodity:</label>\n          <input [(ngModel)]=\"comodityWeight\" name=\"commodity weight\" type=\"text\" class=\"form-control\" id=\"commodity-weight\" maxlength=\"50\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Vehicle Type:</label>\n          <div class=\"form-group\">\n            <select [(ngModel)]=\"vehicleType\" name=\"vehicle type\" class=\"col-lg-12 bootstrap-select show-tick\" data-width=\"100%\">\n              <option>flatbed truck</option>\n              <option>van</option>\n              <option>pick up truck</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Value Of Commodity:</label>\n          <input [(ngModel)]=\"comodityValue\" type=\"number\" class=\"form-control\" id=\"price\" name=\"commodity-value\" maxlength=\"50\">\n        </div>\n      </div>\n      <h2>Pick Up Details</h2>\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Pick Up Date:</label>\n          <input [(ngModel)]=\"pickupDate\" type=\"date\" class=\"form-control\" id=\"pickup-date\" name=\"pickup-date\" maxlength=\"50\">\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Pick Up Location:</label>\n          <div class=\"form-group\">\n            <select [(ngModel)]=\"pickupLocation\" name=\"address\" class=\"col-lg-12 bootstrap-select show-tick\" data-width=\"100%\">\n              <option>Tema</option>\n              <option>Kumasi</option>\n              <option>Tamale</option>\n              <option>Accra</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Contacts Name:</label>\n          <input [(ngModel)]=\"contactsName\" type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" maxlength=\"50\">\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Contacts Phone Number:</label>\n          <input [(ngModel)]=\"contactsNumber\" type=\"tel\" class=\"form-control\" id=\"phone\" name=\"phone\" required maxlength=\"50\">\n        </div>\n      </div>\n      <h2>Drop Off Details</h2>\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Receiver's Name:</label>\n          <input [(ngModel)]=\"receiverName\" type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" maxlength=\"50\">\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Receiver's Phone Number:</label>\n          <input [(ngModel)]=\"receiverNumber\" type=\"tel\" class=\"form-control\" id=\"phone\" name=\"phone\" required maxlength=\"50\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Drop Off Location:</label>\n          <div class=\"form-group\">\n            <select [(ngModel)]=\"dropoffLocation\" name=\"dropoff-address\" class=\"col-lg-12 bootstrap-select show-tick\" data-width=\"100%\">\n              <option>Tema</option>\n              <option>Kumasi</option>\n              <option>Tamale</option>\n              <option>Accra</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <label>\n              Special Instructions:</label>\n          <textarea [(ngModel)]=\"info\"class=\"form-control\" type=\"textarea\" id=\"message\" name=\"message\" placeholder=\"Your Message Here\" maxlength=\"4000\"\n          rows=\"3\"></textarea>\n        </div>\n      </div>\n      <div class=\"row\">\n      <div class=\"col-sm-6 form-group\">\n        <label class=\"display-block text-semibold\">Are you interested in cargo insurance</label>\n        <label class=\"checkbox-inline\">\n          <input type=\"checkbox\" class=\"styled\" checked=\"checked\">\n          Yes\n        </label>\n        <label class=\"checkbox-inline\">\n          <input type=\"checkbox\" class=\"styled\">\n          No\n        </label>\n      </div>\n        <div class=\"col-sm-6 form-group\">\n          <button (click)=\"bookTruck()\" type=\"submit\" class=\"btn btn-lg btn-success btn-block\" id=\"btnContactUs\">Book Truck </button>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/new-request/new-request.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/new-request/new-request.component.ts ***!
  \****************************************************************/
/*! exports provided: NewRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRequestComponent", function() { return NewRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewRequestComponent = /** @class */ (function () {
    function NewRequestComponent(db, router) {
        this.db = db;
        this.router = router;
    }
    NewRequestComponent.prototype.ngOnInit = function () {
    };
    NewRequestComponent.prototype.bookTruck = function () {
        var promise = this.db.list('user/cargo owner/').push({
            'commodityType': this.commodityType,
            'comodityWeight': this.comodityWeight,
            'comodityValue': this.comodityValue,
            'vehicleType': this.vehicleType,
            'pickupDate': this.pickupDate,
            'pickupLocation': this.pickupLocation,
            'contactsName': this.contactsName,
            'contactsNumber': this.contactsNumber,
            'receiverName': this.receiverName,
            'receiverNumber': this.receiverNumber,
            'dropoffLocation': this.dropoffLocation,
            'info': this.info
        });
        this.router.navigate(['map']);
    };
    NewRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-request',
            template: __webpack_require__(/*! ./new-request.component.html */ "./src/app/dashboard/new-request/new-request.component.html"),
            styles: [__webpack_require__(/*! ./new-request.component.css */ "./src/app/dashboard/new-request/new-request.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewRequestComponent);
    return NewRequestComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/orders/orders.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/orders/orders.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/orders/orders.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/orders/orders.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/orders/orders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/orders/orders.component.ts ***!
  \******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/dashboard/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/dashboard/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/dashboard/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/transactions/transactions.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/transactions/transactions.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/transactions/transactions.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/transactions/transactions.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  transactions works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/transactions/transactions.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/transactions/transactions.component.ts ***!
  \******************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent() {
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/dashboard/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/dashboard/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/trip-history/trip-history.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/trip-history/trip-history.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: rgb(235, 228, 228) !important;\n}\n\n.navbar {\n    background-color: #FDFAFA !important;\n}\n\n.navbar-brand img {\n    width: 180px !important;\n}\n\n.navbar-inverse .navbar-header{\n    flex: 1 !important;\n}\n\n.dropdown-toggle{\n    color: black !important;\n}\n\n.panel-body {\n    font-size: 30px;\n    font-weight: bold;\n    align-items: center;\n    text-align: center;\n}\n\n.btn {\n    color: black !important;\n    margin-top: 15px;\n    margin-bottom: 20px !important;\n    margin-left: 25px;\n    background-color: white !important;\n    padding-right: 25px !important;\n    padding-left: 25px !important;\n    font-weight: bold !important;\n}\n\n.btn-primary{\n    border-color: white !important;\n\n}"

/***/ }),

/***/ "./src/app/dashboard/trip-history/trip-history.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/trip-history/trip-history.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- dashboard panel -->\n  <div class=\"col-md-8 panel panel-flat\">\n    <div>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta, eius possimus, est illum quia sunt optio facilis eaque quasi veritatis mollitia ut omnis. Repudiandae explicabo cupiditate impedit possimus dicta.\n    </div>\n  </div>\n\n  <!-- /dashboard panel -->"

/***/ }),

/***/ "./src/app/dashboard/trip-history/trip-history.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/trip-history/trip-history.component.ts ***!
  \******************************************************************/
/*! exports provided: TripHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripHistoryComponent", function() { return TripHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TripHistoryComponent = /** @class */ (function () {
    function TripHistoryComponent() {
    }
    TripHistoryComponent.prototype.ngOnInit = function () {
    };
    TripHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip-history',
            template: __webpack_require__(/*! ./trip-history.component.html */ "./src/app/dashboard/trip-history/trip-history.component.html"),
            styles: [__webpack_require__(/*! ./trip-history.component.css */ "./src/app/dashboard/trip-history/trip-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TripHistoryComponent);
    return TripHistoryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/user/user.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/user/user.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-color: rgb(235, 228, 228) !important;\n}\n\n.navbar {\n    background-color: #FDFAFA !important;\n}\n\n.navbar-brand img {\n    width: 180px !important;\n}\n\n.navbar-inverse .navbar-header{\n    flex: 1 !important;\n}\n\n.dropdown-toggle{\n    color: black !important;\n}\n\n.panel-body {\n    font-size: 30px;\n    font-weight: bold;\n    align-items: center;\n    text-align: center;\n}\n\n.btn {\n    color: black !important;\n    margin-top: 15px;\n    margin-bottom: 20px !important;\n    margin-left: 25px;\n    background-color: white !important;\n    padding-right: 25px !important;\n    padding-left: 25px !important;\n    font-weight: bold !important;\n}\n\n.btn-primary{\n    border-color: white !important;\n\n}\n\nagm-map {\n  height: 500px;\n}"

/***/ }),

/***/ "./src/app/dashboard/user/user.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/user/user.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Page container -->\n<div class=\"page-container\">\n  <!-- Page content -->\n  <div class=\"page-content\">\n    <!-- Main content -->\n    <div class=\"content-wrapper\">\n\n      <!-- Content area -->\n      <div class=\"content\">\n        <!-- Simple panel -->\n        <div class=\"panel panel-flat\">\n          <div class=\"panel-body\">\n            <h1 class=\"text-semibold\">Welcome Victoria, </h1>\n            <a routerLink=\"/new-request\" class=\"content-group\"> Make your first Request</a>\n          </div>\n          <!-- this creates a google map on the page with the given lat/lng from -->\n          <!-- the component as the initial center of the map: -->\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n            <agm-marker [latitude]=\"currLat\" [longitude]=\"currLong\"></agm-marker>\n          </agm-map>\n        </div>\n        <!-- /simple panel -->       \n      </div>\n      <!-- /content area -->\n    </div>\n    <!-- /main content -->\n  </div>\n  <!-- /page content -->\n</div>\n<!-- /page container -->\n"

/***/ }),

/***/ "./src/app/dashboard/user/user.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/user/user.component.ts ***!
  \**************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.title = 'My first AGM project';
        this.lat = 6.2235263;
        this.lng = -0.5892302;
        this.currLat = 5.645922;
        this.currLong = -0.160008;
    }
    UserComponent.prototype.ngOnInit = function () {
        //   // let loggedInUser;
        //   // Ensure only signed in users access this page
        //   // Check for already signed in user
        //   firebase.auth().onAuthStateChanged(function (user) {
        //     if (user) {
        //       console.log(user);
        //       // User is authenticated
        //     } else {
        //       window.location.href = `${environment.corporateSiteUrl}`;
        //     }
        //   });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/dashboard/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/dashboard/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());

// @TODO: Create a service that takes user data and checks if they're verified so the service can be called both on 
// signin page and user dashboard page.


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    box-sizing: border-box !important;\n}\n\n.register-link{\n    flex: 1;\n    margin-top: 20px;\n}\n\n.register-link ul{\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.register-link ul li{\n    margin-right: 40px;\n}\n\n.register-link ul li a{\n    color: var(--white);\n}\n\n.register-link ul li a:hover, .register-link ul li a:focus, .register-link ul li a:visited{\n    text-decoration: none;\n}\n\n.register-link ul li a:hover{\n    border-bottom: 5px solid;\n    padding-bottom: 7px;\n}\n\n.register-btn{\n    display: flex;\n    justify-content: flex-end;\n}\n\n.register-btn .btn-primary{\n    border-radius: 50px;\n    margin-left: 20px;\n    padding: 4px 30px;\n}\n\n.d-block{\n    width: 180px;\n}\n\n.register-btn .btn-primary a{\n    color: white;\n}\n\n.custom-navbar{\n    background-color: transparent !important;\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n}\n\n.carousel-caption {\n    position: absolute;\n    right: 15%;\n    bottom: 20px;\n    left: 15%;\n    z-index: 10;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    color: #fff;\n    text-align: -webkit-left;\n}\n\n.container-fluid {\n    width: 100%;\n    padding-right: 0px;\n    padding-left: 0px;\n    margin-right: auto;\n    margin-left: auto;\n    color: white;\n}\n\n#nav-bar-content{\n    font-size: 1rem;\n    font-weight: 1000;\n    line-height: 10;\n    color: white;\n    text-align: left;\n}\n\n.about-header{\n    padding: 30px 0px;\n    text-align: center;\n    margin-bottom: 50px;\n    padding-bottom: 3px;\n}\n\n.about_section .about_parent{\n    display: flex;\n    align-items: center;\n    margin-bottom: 40px;\n}\n\n.about_section .about_parent .about_content{\n    margin-bottom: 50px;\n}\n\n.features{\n    display: flex;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\n.features .single-feature{\n    display: flex;\n    align-items: center;\n    text-align: center;\n    flex-direction: column;\n    margin: 0px 20px;\n}\n\n.features .single-feature h4{\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.feature .learn-more-feature{\n    text-align: center !important;\n    margin-bottom: 50px;\n}\n\n.single-feature .img-feature{\n    width: 130px;\n    margin-bottom: 20px;\n}\n\n.btn-sm {\n    padding: .25rem .5rem;\n    font-size: .875rem;\n    line-height: 1.2;\n    border-radius: .7rem;\n    color: white;\n    background-color: black;\n    margin-bottom: 60px;\n    text-align: center !important;\n}\n\n.quote-image{\n    width: 100%;\n    height: 400px;\n    opacity: 0.15;\n    background-color: rgba(243, 240, 240, 0.72);\n}\n\n.quote{\n    text-align: center;\n    font-weight: bold;\n    font-size: 2.9rem !important;\n    margin-bottom: 70px;\n}\n\n.quote .single-paragraph{\n    margin-bottom: 0;\n    font-style: italic;\n    font-family: raleway;\n}\n\n.quote-paragraphs{\n    position: relative;\n}\n\n.single-paragraph{\n    width: 670px;\n    font-size: 37px;\n    margin: 0 auto;\n    line-height: 1.2;\n    position: absolute;\n    top: 0px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n}\n\n.features-header{\n    padding: 30px 0px;\n    text-align: center !important;\n    margin-bottom: 30px;\n}\n\n.more-features2 .features-content2{\n    display: flex;\n    align-items: center;\n    margin-bottom: 40px;\n}\n\n.features-content2{\n    text-align: center;\n    margin-left: 40px;\n}\n\n.first-features-content2{\n    margin-left: 50px;\n}\n\n.first-features-content2 h4{\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.logistic-manager{\n    text-align: center;\n    position: relative;\n}\n\n.logistic-manager .single-paragraph-holder{\n    position: absolute;\n    width: 450px;\n    bottom: -20px;\n    left: 330px;\n    text-align: left;\n    padding: 5px 0px;\n}\n\n.gen-btn{\n    padding: 12px 40px;\n    border-radius: 50px;\n}\n\n.fleet-trucks{\n    text-align: center;\n    position: relative;\n}\n\n.fleet-trucks .fleet-paragraph{\n    position: absolute;\n    bottom: 100px;\n    left: 300px;\n}\n\n.fleet-trucks .fleet-paragraph .learn-more-feature{\n    margin-top: 50px;\n}\n\n.vendor-title:after{\n    content: \"\";\n    border-bottom: 4px solid black;\n    left: 0px;\n    bottom: 0px;\n    position: absolute;\n    text-align: center;\n    right: 0px;\n    width: 45px;\n    margin: 0 auto;\n}\n\n.card-logistic{\n    width: 900px;\n    margin: 0 auto;\n    border-radius: 5px;\n    box-shadow: 0px 4px 44px -2px rgba(0, 0, 0, 0.14);\n    padding: 50px 20px;\n}\n\n.card-logistic .more-features{\n    margin-bottom: 50px;\n}\n\n.logistic-manager-header{\n    margin-top: 100px;\n}\n\n.logistics-manager-image{\n    width: 1000px;\n}\n\n.get-app{\n    position: relative;\n}\n\n.mobile-app-all{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n}\n\n.mobile-app-info{\n    width: 400px;\n    margin-left: 100px;\n    color: var(--white);\n}\n\n.app-store-img{\n    display: flex;\n    align-items: center;\n}\n\n.app-store-img img{\n    width: 170px;\n    margin-right: 30px;\n}\n\n.subscribe-header{\n    text-align: center;\n    margin: 50px 0px;\n}\n\n.subscribe-subheader{\n    width: 370px;\n    margin: 0 auto;\n}\n\n.subscribe-form{\n    background: var(--gray-dark);\n    width: 500px;\n    margin: 0 auto;\n    padding: 30px;\n    margin-top: 50px;\n    border-radius: 5px;\n}\n\n.subscribe-form form{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.subscribe-form .subscribe-text{\n    background: transparent;\n    border: transparent;\n    flex: 1;\n    height: 40px;\n    outline: transparent;\n    color: var(--white);\n}\n\n.subscribe-form ::-moz-placeholder, .subscribe-form ::-webkit-input-placeholder, .subscribe-form ::placeholder{\n    color: var(--white);\n}\n\n.subscribe-form .subscribe-btn{\n    background: white;\n    border: 0px;\n    border-radius: 50px;\n    padding: 6px 25px;\n}\n\nfooter{\n    background: #000000;\n    padding: 100px 0px 50px 0px;\n}\n\n.footer-content{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    border-top: 1px solid var(--white);\n    border-bottom: 1px solid var(--white);\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n\n.footer-content .contact img{\n    margin-bottom: 20px;\n    width: 120px;\n}\n\n.contact-info{\n    font-size: 14px;\n    color: var(--white);\n}\n\n.contact-address{\n    margin-bottom: 0px;\n    color: var(--white);\n}\n\n.footer-content ul{\n    list-style: none;\n    padding-left: 0px;\n}\n\n.footer-content ul li{\n    font-size: 14px;\n    margin-bottom: 15px;\n}\n\n.footer-content ul li a{\n    color: var(--white);\n}\n\n.footer-link-header{\n    color: var(--white);\n}\n\n.footer-copyright{\n    text-align: center;\n    font-size: 13px;\n    color: #ffffff;\n    margin-top: 30px;\n}\n\n.product-footer h4{\n    margin-bottom: 20px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        <title>Truckr &mdash; List and book trucks on the go</title>\n        <meta name=\"description\" content=\"truckr home page\">\n        <meta name=\"Truckr Technologies\"\n            content=\"Free website templates, Free bootstrap themes, Free template, Free bootstrap, Free website template\">\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n        <link href='https://fonts.googleapis.com/css?family=Raleway:400,100,300,700,900' rel='stylesheet' type='text/css'>\n        <link rel=\"stylesheet\" href=\"../assets/css/styles-merged.css\">\n        <link rel=\"stylesheet\" href=\"../assets/css/style.min.css\">\n        <link rel=\"stylesheet\" href=\"../assets/fonts/icomoon/style.css\">\n        <link rel=\"stylesheet\" href=\"../assets/css/reset.css\">\n        <link rel=\"stylesheet\" href=\"../assets/css/main.css\">\n        <link rel=\"icon\" type=\"image/png\" href=\"../assets/contact/images/icons/logo_icons/favicon.ico\" />\n\n        <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n        <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n    </head>\n\n    <body class=\"site-body\">\n        <header id=\"header\" class=\"site-header\" role=\"navigation\">\n            <div class=\"container-fluid\">\n                <div class=\"menu-wrapper\">\n                    <div id=\"nav-bar-wrap\" class=\"col-md-14 nav-col\">\n                        <nav id=\"nav-bar-content\" class=\"navbar navbar-expand-lg navbar-dark bg-dark custom-navbar\">\n                        <div class=\"register-link\">\n                            <div class=\"register-btn\">\n                                <div class=\"btn smoothscroll new-btn\">\n                                    <a href=\"/signup\" class=\"label\" style=\"\n                                    color:  black;\n                                \">SIGN UP</a>\n                                </div>\n                                <div class=\"btn btn-default geni-btn\">\n                                    <a href=\"/signin\" class=\"label\">SIGN IN</a>\n                                </div>\n                            </div>\n                            <ul>\n                                <li><a href=\"/index\">HOME</a></li>\n                                <li><a href=\"/about\">ABOUT </a></li>\n                                <li><a href=\"/cargo-owner\">CARGO OWNERS</a></li>\n                                <li><a href=\"/index\"><img class=\"d-block\" src=\"../assets/img/logo.png\" alt=\"Truckr\"></a></li>\n                                <li><a href=\"/transporter\"> TRANSPORTERS</a></li>\n                                <li><a href=\"/contact\">CONTACT</a></li>\n                                <li><a href=\"/faqs\">FAQs</a></li>\n                            </ul>\n                        </div>\n                        </nav>\n                    </div>\n                </div>\n            </div>\n        </header>\n\n\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n            <!-- Indicators -->\n            <ol class=\"carousel-indicators\">\n                <li data-target=\"myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"myCarousel\" data-slide-to=\"2\"></li>\n                <li data-target=\"myCarousel\" data-slide-to=\"3\"></li>\n            </ol>\n\n\n            <!-- Wrapper for slides -->\n            <div class=\"carousel-inner\">\n                <div class=\"item active\">\n                    <img src=\"../assets/img/banner1.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\n                </div>\n                <div class=\"item\">\n                    <img src=\"../assets/img/banner2.jpg\" alt=\"Chicago\" style=\"width:100%;\">\n                </div>\n\n                <div class=\"item\">\n                    <img src=\"../assets/img/banner3.jpg\" alt=\"New york\" style=\"width:100%;\">\n                </div>\n\n                <div class=\"item\">\n                    <img src=\"../assets/img/banner4.jpg\" alt=\"New york\" style=\"width:100%;\">\n                </div>\n                <div class=\"carousel-header \">\n                    <div class=\"col-md-9 col-md-push-1 text-left\">\n                        <h1 class=\"probootstrap-heading probootstrap-animate\">\n                        BOOK A TRUCK, <br> TRACK YOUR CARGO!</h1>\n                        <h3 class=\"col-md-10 probootstrap-heading2 probootstrap-animate\">\n                            The Quickest and Simplest way to order a truck and track your cargo in Ghana.</h3>\n                        <div class=\" col-md-12 probootstrap-subheading\">\n                        <br>\n                        <p class=\"probootstrap-animate\"><a href=\"/cargo-owner\" role=\"button\"\n                                                            class=\"btn btn-default geni-btn\">Learn More</a>\n                            <a href=\"#features\" class=\"btn btn-default smoothscroll new-btn\" role=\"button\">Get Started</a></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Left and right controls -->\n            <a class=\"left carousel-control\" href=\"\" data-slide=\"prev\">\n                <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"right carousel-control\" href=\"\" data-slide=\"next\">\n                <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n\n\n        <section class=\"probootstrap-section section-parent\">\n            <div class=\"row text-center \">\n                <div class=\"col-md-8 col-md-offset-2 probootstrap-section-heading\">\n                    <h2 class=\"mb30 text-black probootstrap-heading\">About</h2>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 col-md-push-6 probootstrap-animate\">\n                    <p><img src=\"../assets/img/About.png\" alt=\"template\" class=\"img-responsive\" style=\"max-width: 90%;\"></p>\n                </div>\n                <div class=\"col-md-6 col-md-pull-5 probootstrap-section-heading\">\n                    <p class=\"about_content\">Truckr is giving cargo owners such as manufacturing companies, \n                        fast moving consumer goods, distributors, exporters, \n                        importers and freight forwarders the ability to book for any kind of haulage truck, \n                        to transport their goods just by a click of a button. \n                        Truckr also offers cargo owners the luxury of tracking their goods, \n                        with our accurate tracking technology during transportation, \n                        and can also message or call the truck drivers on the platform.</p>\n                    <div class=\"learn-more-feature\">\n                        <div class=\"\"><a href=\"/cargo-owner\" role=\"button\" class=\"btn btn-sm btn-black geni-btn\"  style=\"\n                            margin-left: 50px;\">Learn more</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n\n        <section class=\"probootstrap-section\" id=\"features\" data-section=\"features\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 text-center\">\n                        <div class=\"probootstrap-service-item probootstrap-animate\" data-animate-effect=\"fadeIn\">\n                            <img class=\"img-feature\" src=\"../assets/img/tag.png\">\n                            <h2>Transparent Pricing</h2>\n                            <p>No hidden fees. Receive itemized invoices to alleviate accounting burdens.</p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 text-center\">\n                        <div class=\"probootstrap-service-item probootstrap-animate\" data-animate-effect=\"fadeIn\">\n                            <img class=\"img-feature\" src=\"../assets/img/Icons.png\">\n                            <h2>Real-time Visibility</h2>\n                            <p>Pinpoint the exact location of your cargo from pickup to delivery. Receive alerts to deal with issues as they arise.</p>\n\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 text-center\">\n                        <div class=\"probootstrap-service-item probootstrap-animate\" data-animate-effect=\"fadeIn\">\n                            <img class=\"img-feature\" src=\"../assets/img/coin.png\">\n                            <h2>Efficiency & Cost Saving</h2>\n                            <p>Save time on booking and pay lesser than with traditional agents and brokers.</p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 text-center\">\n                        <div class=\"probootstrap-service-item probootstrap-animate\" data-animate-effect=\"fadeIn\">\n                            <img class=\"img-feature\" src=\"../assets/img/fluid.png\">\n                            <h2>Fluid Execution</h2>\n                            <p>Get matched with a network of 4,000+ vetted trucks and drivers, a full insurance coverage and 24/7 guaranteed support.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <section class=\"quote\">\n            <div class=\"quote-paragraphs\">\n                <img class=\"quote-image\" src=\"../assets/img/tires.png\">\n                <p class=\"single-paragraph\">\n                    “By injecting technology and transparency into road freight logistics, \n                    you get an accelerated experience that is convenient, \n                    cost-effective and reliable through from pickup to delivery.\n                </p>\n            </div>\n        </section>\n\n        <section class=\"probootstrap-section probootstrap \" id=\"features\" data-section=\"features\">\n            <div class=\"container\">\n                <div class=\"row text-center\">\n                    <div class=\"col-md-8 col-md-offset-2 probootstrap-section-heading\">\n                        <h2 class=\"mb70 text-black probootstrap-heading\">Features</h2>\n                    </div>\n                </div>\n                <!-- END row -->\n                <div class=\"row mb100\">\n                    <div class=\"col-md-5 col-md-push-1  probootstrap-animate\">\n                        <p><img src=\"../assets/img/tripHistory.jpg\" alt=\"Free Template by uicookies.com\" class=\"img-responsive probootstrap-shadow\"></p>\n                    </div>\n                    <div class=\"col-md-4 col-md-push-2 probootstrap-section-heading\">\n                        <h2 class=\"text-primary probootstrap-heading-2\" style=\"margin-top: 40px\">Complete control</h2>\n                        <p>Book, manage and track your goods, invoices, payments and waybills online beit on desktop or mobile.\n                        </p>\n                    </div>\n                </div>\n                <!-- END row -->\n                <div class=\"row mb100\">\n                    <div class=\"col-md-5 col-md-push-6 probootstrap-animate\">\n                        <p><img src=\"../assets/img/Order.jpg\" alt=\"Free Template by uicookies.com\" class=\"img-responsive probootstrap-shadow\"></p>\n                    </div>\n                    <div class=\"col-md-4 col-md-pull-4 probootstrap-section-heading\">\n                        <h3 class=\"text-primary probootstrap-heading-2 \" style=\"margin-top: 40px\">Transparent Pricing</h3>\n                        <p>\n                            Know exactly how much you’ll spend on each cargo to be transported with our detailed online quote. We give you 100% transparency, upfront. No surprises.\n                        </p>\n                    </div>\n                </div>\n                <!-- END row -->\n\n                <div class=\"row mb100\">\n                    <div class=\"col-md-5 col-md-push-1  probootstrap-animate\">\n                        <p><img src=\"../assets/img/tripHistory.jpg\" alt=\"Free Template by uicookies.com\" class=\"img-responsive probootstrap-shadow\"></p>\n                    </div>\n                    <div class=\"col-md-4 col-md-push-2 probootstrap-section-heading\">\n                        <h3 class=\"text-primary probootstrap-heading-2 \" style=\"margin-top: 40px\">Real-time freight visibility</h3>\n                        <p>\n                            From pickup to delivery, monitor your cargo with our advanced real-time tracking system. Get timely alerts about delays & unusual waiting times.\n                        </p>\n                    </div>\n                </div>\n                <!-- END row -->\n            </div>\n        </section>\n        <!-- END section -->\n\n        <section class=\"probootstrap-section\" data-section=\"pricing\">\n            <div class=\"container\">\n                <div class=\"row text-center \">\n                    <div class=\"col-md-8 col-md-offset-2 probootstrap-section-heading mb30\">\n                        <h1 class=\"mb30 text-black probootstrap-heading\"><br>Are you a Logistics manager/<br>Freight forwarder?</h1>\n                    </div>\n                </div>\n                <!-- END row -->\n                <section class=\"logistic-manager\">\n                    <div class=\"container\">\n                        <div class=\"row mb100\">\n                            <div class=\"col-md-12  probootstrap-animate\">\n                                <img class=\" logistics-manager-image\" src=\"../assets/img/FreightForwarder.png\" class=\"img-responsive\">\n                            </div>\n                            <div class=\"col-md-12 single-paragraph-holder \">\n                                <p>Truckr instantly gives you access to thousands of trusted and reviewed truck drivers at short notice, \n                                    at a competitive rate and allows you to track your delivery status and location at every stage of the journey. \n                                    No phone calls, no paperwork, just a fast and efficient trucking service.\n                                </p>\n                                <div class=\"\"><a href=\"/cargo-owner\" role=\"button\" class=\"btn btn-sm btn-black geni-btn\">Learn more</a>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </section>\n\n\n                <div class=\"row text-center mb10\">\n                    <div class=\"col-md-8 col-md-offset-2 probootstrap-section-heading\">\n                        <h1 class=\"mb30 text-black probootstrap-heading\"><br>Do you own a truck or a/<br>Fleet of trucks?</h1>\n                    </div>\n                </div>\n                <section class=\"logistic-manager\">\n                    <div class=\"container\">\n                        <div class=\"row mb50\">\n                            <div class=\"col-md-12  probootstrap-animate\">\n                                <img class=\"fleet-manager-image\" src=\"../assets/img/TruckOwner.png\" class=\"img-responsive\">\n                            </div>\n                            <div class=\"col-md-12 single-paragraph-holder \">\n                                <p>Truckr helps you to get more jobs at great rates and get paid quickly.</p>\n                                <div class=\"\"><a href=\"/transporter\" role=\"button\" class=\"btn btn-sm btn-black geni-btn\">Learn more</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </section>\n            </div>\n        </section>\n        <!-- END section -->\n\n        <section class=\"get-app-section\">\n            <div class=\"get-app\">\n                <img class=\"get-app-image\" src=\"../assets/img/GetAppBackground.jpg\" class=\"img-responsive\" width=\"100%\" alt=\"image\">\n                <div class=\"mobile-app-all\">\n                    <div class=\"col-md-3 mobile-app  probootstrap-animate\">\n                        <img class=\"phone-image\" src=\"../assets/img/DeliverCargo.png\" class=\"img-responsive\" width=\"100%\" alt=\"image\">\n                    </div>\n                    <div class=\"mobile-app-info\">\n                        <h2 style=\" font-weight:  700;\">\n                            Get the Truckr Mobile App\n                        </h2>\n                        <h3 class=\"features_content2\">\n                        Book, manage and track your goods, invoices, payments and waybills online on your android mobile.</h3>\n                        <div class=\"app-store-img\">\n                            <img class=\"#\" href=\"/transporter\" role=\"button\" src=\"../assets/img/googlePlay.png\" class=\"img-responsive\" alt=\"image\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n        <div class=\"subscribe-header \">\n            <div><h1 class=\"mb30 text-black probootstrap-heading\" style=\"font-weight:  700;\">\n                Are you interested to learn more about our product?</h1>\n            </div>\n            <p class=\"subscribe-subheader\">Subsrcribe to our newsletter!</p>\n\n            <div class=\"subscribe-form img-responsive\">\n                <form action=\"\">\n                    <input type=\"text\" placeholder=\"&#9993;    |Enter your email\" style=\"color:white\" class=\"subscribe-text \">\n                    <input type=\"submit\" value=\"subscribe\" class=\"subscribe-btn\">\n                </form>\n            </div>\n        </div>\n\n        <footer class=\"footer\" style=\"background-image: url(../assets/img/footerbg.jpg);\" role=\"contentinfo\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"footer-content\">\n                        <div class=\"contact\" id=\"contact\">\n                            <img class=\"d-block\" src=\"../assets/img/truckrFooterLogo.png\" alt=\"Truckr\">\n                            <ul>\n                                <li><a >No. 20 Aluguntugui Street,</a></li>\n                                <li><a >East Legon, Accra, Ghana</a></li>\n                                <li><a >Tel: +233 206 703 723</a></li>\n                                <li><a href=\"info@truckrtech.com\" >info@truckrtech.com</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"product-footer\">\n                            <h4 class=\"footer-link-header\">Product</h4>\n                            <ul>\n                                <li><a href=\"#\">Cargo Owner</a></li>\n                                <li><a href=\"#\">Transporter</a></li>\n                                <li><a href=\"#\">Features</a></li>\n                                <li><a href=\"#\">FAQs</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"product-footer\">\n                            <h4 class=\"footer-link-header\">Company</h4>\n                            <ul>\n                                <li><a href=\"#\">About</a></li>\n                                <li><a href=\"#\">Contact</a></li>\n                                <li><a href=\"#\">Help</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"product-footer\">\n                            <h4 class=\"footer-link-header\">Website</h4>\n                            <ul>\n                                <li><a href=\"#\">Terms</a></li>\n                                <li><a href=\"#\">Privacy</a></li>\n                            </ul>\n                        </div>\n                        <div class=\"product-footer\">\n                            <h4 class=\"footer-link-header\">Social Media</h4>\n                            <ul>\n                                <li><a href=\"#\">Follow us on facebook</a></li>\n                                <li><a href=\"#\">Follow us on twitter</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"footer-copyright\">\n                <div class=\"copyright\"><p>©2018 <span>Truckr Technologies All rights reserved.</span></p></div>\n            </div>\n        </footer>\n\n        <script src=\"../assets/js/scripts.min.js\"></script>\n        <script src=\"../assets/js/custom.js\"></script>\n\n    </body>\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
var config = __webpack_require__(/*! ../../config/config.json */ "./config/config.json");
var environment = {
    production: false,
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    projectId: config.projectId,
    corporateSiteUrl: 'http://localhost:4200'
};
var firebaseConfig = {
    apiKey: 'AIzaSyBt_vL5iC2hLK9Ss5kc8Uqh9wZyN8rwOrg',
    authDomain: 'truckrtech.firebaseapp.com',
    databaseURL: 'https://truckrtech.firebaseio.com',
    projectId: 'truckrtech',
    storageBucket: 'truckrtech.appspot.com',
    messagingSenderId: '713985223854'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/amaka/newtruckr/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map