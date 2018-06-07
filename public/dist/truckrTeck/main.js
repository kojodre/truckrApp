(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
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
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\n   background-image: url(\"banner1.jpg\");\n   height: 781px;\n   background-color: #000;\n   opacity: 1.0;\n   border: none;\n   margin: 0;\n   padding: 0;\n} */\n/* .carousel-item {\n    position: relative;\n    display: inline;\n    -ms-flex-align: center;\n    align-items: center;\n} */\n.register-form .btn-primary {\n    color: white;\n}\n.carousel-caption {\n    position: absolute;\n    right: 15%;\n    bottom: 20px;\n    left: 15%;\n    z-index: 10;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    color: #fff;\n    text-align: -webkit-left;\n}\n.container-fluid {\n    width: 100%;\n    padding-right: 0px;\n    padding-left: 0px;\n    margin-right: auto;\n    margin-left: auto;\n    color: white;\n}\n#nav-bar-content{\n    font-size: 1rem;\n    font-weight: 1000;\n    line-height: 10;\n    color: white;\n    text-align: left;\n}\n.about-header{\n    padding: 30px 0px;\n    text-align: center;\n    margin-bottom: 30px;\n}\n.about_section .about_parent{\n    display: flex;\n    align-items: center;\n    margin-bottom: 40px;\n}\n.about_section .about_parent .about_content{\n    margin-bottom: 50px;\n}\n.features{\n    display: flex;\n    align-items: center;\n    margin-bottom: 50px;\n}\n.features .single-feature{\n    display: flex;\n    align-items: center;\n    text-align: center;\n    flex-direction: column;\n    margin: 0px 20px;\n}\n.features .single-feature h4{\n    font-size: 18px;\n    font-weight: bold;\n}\n.feature .learn-more-feature{\n    text-align: center !important;\n    margin-bottom: 50px;\n}\n.btn-sm {\n    padding: .25rem .5rem;\n    font-size: .875rem;\n    line-height: 1.2;\n    border-radius: .7rem;\n    color: white;\n    background-color: black;\n    margin-bottom: 60px;\n    text-align: center !important;\n}\n.quote-image{\n    width: 100%;\n    height: 400px;\n    opacity: 1;\n    background-color: rgba(178, 178, 178, 0.72);\n}\n.quote{\n    text-align: center;\n    font-weight: bold;\n    font-size: 2.9rem !important;\n    margin-bottom: 70px;\n}\n.quote .single-paragraph{\n    margin-bottom: 0;\n    font-style: italic;\n    font-family: raleway;\n}\n.quote-paragraphs{\n    position: relative;\n}\n.single-paragraph{\n    width: 670px;\n    font-size: 37px;\n    margin: 0 auto;\n    line-height: 1.2;\n    position: absolute;\n    top: 0px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n}\n.features-header{\n    padding: 30px 0px;\n    text-align: center !important;\n    margin-bottom: 30px;\n}\n.more-features2 .features-content2{\n    display: flex;\n    align-items: center;\n    margin-bottom: 40px;\n}\n.features-content2{\n    text-align: center;\n    margin-left: 40px;\n}\n.first-features-content2{\n    margin-left: 50px;\n}\n.first-features-content2 h4{\n    font-size: 18px;\n    font-weight: bold;\n}\n.logistic-manager{\n    text-align: center;\n    position: relative;\n}\n.logistic-manager .single-paragraph-holder{\n    position: absolute;\n    width: 450px;\n    bottom: -20px;\n    left: 330px;\n    text-align: left;\n    padding: 20px 0px;\n}\n.gen-btn{\n    padding: 12px 40px;\n    border-radius: 50px;\n}\n.fleet-trucks{\n    text-align: center;\n    position: relative;\n}\n.fleet-trucks .fleet-paragraph{\n    position: absolute;\n    bottom: 100px;\n    left: 300px;\n}\n.fleet-trucks .fleet-paragraph .learn-more-feature{\n    margin-top: 50px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en-US\" prefix=\"og: http://ogp.me/ns#\">\n  <head>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\"\n      crossorigin=\"anonymous\">\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\n      crossorigin=\"anonymous\">\n    </script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\"\n      crossorigin=\"anonymous\">\n    </script>\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\"\n      crossorigin=\"anonymous\">\n    </script>\n    <link href=\"assets/img/favicon.ico\" rel=\"shortcut icon\">\n  </head>\n\n  <body class=\"site-body\">\n    <header id=\"header\" class=\"site-header\" role=\"navigation\">\n      <div class=\"container-fluid\">        \n        <div class=\"menu-wrapper\">\n          <div id=\"nav-bar-wrap\" class=\"col-md-14 nav-col\">\n            <nav id=\"nav-bar-content\" class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n              <div class=\"container\">\n                <a href=\"home.component.html\">Home</a>\n                <a href=\"shipper.html\">About </a>\n                <a href=\"https://jobs.lever.co/convoy\">Cargo Owners</a>\n                <div id=\"logo\" class=\"logo\">\n                  <a href=\"home.component.html\" rel=\"home\"><img class=\"d-block\"src=\"assets/img/homeImages/logo1.jpg\" alt=\"Truckr\" height=\"200\"></a>\n                </div>\n                <a href=\"about-us.html\"> Truck Owner</a>\n                <a href=\"contact-us/index.html\">Contact</a>\n                <a href=\"contact-us/index.html\">FAQs</a>\n              </div>\n              <div class=\"col-md-2 register-form\">\n                <div class=\"btn btn-primary\">\n                  <a href=\"/signup\" class=\"label\">Sign Up</a>\n                </div>\n                <div class=\"btn btn-primary\">\n                  <a href=\"/signin\" class=\"label\">Sign In</a>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <div id=\"content\" class=\"content-wrapper\" role=\"main\">\n      <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"assets/img/homeImages/banner1.jpg\" alt=\"truckpicture\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/img/homeImages/banner2.jpg\" alt=\"Second slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/img/homeImages/banner3.jpg\" alt=\"Third slide\">\n          </div>\n          <div class=\"carousel-caption d-md-block\">\n            <h1>Book a Truck,</h1>\n            <h1>Track your cargo!</h1>\n            <p>the quickest and easiest way to order for a Truck</p>\n            <p>and track your cargo in Ghana.</p>\n            <button class=\"btn btn-sm btn-outline-secondary\" type=\"button\">Learn more</button>\n            <button class=\"btn btn-sm btn-outline-secondary\" type=\"button\">get started</button>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-12 about-header\">\n      <h1 class=\"vendor-title\"> About </h1>\n    </div>\n\n    <section class=\"about_section section-parent\">\n      <div class=\"container\">\n        <div class=\"row about_parent\">\n          <div class=\"col-6\">\n            <p class=\"about_content\">Truckr is giving cargo owners such as manufacturing companies, fast moving consumer goods, distributors,\n              exporteres, importers, freight forwarders the ability to book for any kind of haulage truck to haul their\n              goods just by a click of a button. Truckr also offers cargo owners the luxury of tracking their goods with\n              our accurate tracking technology and can also message and call the truck drivers all on the platform.\n            </p>\n            <button class=\"btn btn-sm btn-outline-secondary\" type=\"button\">Learn more</button>\n          </div>\n          <div class=\"col-6\">\n            <img class=\"d-block w-100\" src=\"assets/img/homeImages/aboutDisplay.png\" alt=\"Image\">\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"page-features\">\n      <div class=\"features-content\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"features\">\n              <div class=\"single-feature\">\n                <img class=\"d-block\" src=\"assets/img/homeImages/tag.png\" alt=\"Image\" height=\"100\">\n                <h4>\n                  Transparent Pricing\n                </h4>\n                <p>\n                  Our pricing is simple and all-inclusive. No hidden fees, and itemized invoices alleviate accounting burdens.\n                </p>\n              </div>\n              <div class=\"single-feature\">\n                <img class=\"d-block\" src=\"assets/img/homeImages/Icons.png\" alt=\"Image\" height=\"100\">\n                <h4>\n                  Real-time Visibility\n                </h4>\n                <p>\n                  Pinpoint the exact location of your cargo from pickup to delivery. Receive alerts to deal with issues as they arise.\n                </p>\n              </div>\n              <div class=\"single-feature\">\n                <img class=\"d-block\" src=\"assets/img/homeImages/coin.png\" alt=\"Image\" height=\"100\">\n                <h4>\n                  Efficiency & Save Cost\n                </h4>\n                <p>\n                  Save time booking and on track and trace. Pay less margin than with traditional brokers.\n                </p>\n              </div>\n              <div class=\"single-feature\">\n                <img class=\"d-block\" src=\"assets/img/homeImages/fluid.png\" alt=\"Image\" height=\"100\">\n                <h4>\n                  Fluid Execution\n                </h4>\n                <p>\n                  Get matched with a network of 4,000+ vetted trucks and drivers, a full insurance coverage and benefit from 24/7 support.\n                </p>\n              </div>\n            </div>\n            <div class=\"learn-more-feature\">\n              <button class=\"btn btn-sm btn-outline-secondary\" type=\"button\">Learn more</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"quote\">\n      <div class=\"quote-paragraphs\">\n        <img class=\"quote-image\" src=\"assets/img/homeImages/tires.png\" width=\"100%\">\n        <p class=\"single-paragraph\">\n          \"By injecting technology and transparency\n          into logistics, you get an accelerated\n          shipment experience that is convenient,\n          cost-effective and reliable\"\n        </p>\n      </div>  \n    </section>\n\n    <div class=\"col-12 features-header\">\n      <h1 class=\"vendor-title\"> Features </h1>\n    </div>\n    \n    <section class=\"more-features2\">\n      <div class=\"container\">\n        <div class=\"row features-content2\">\n            <div class=\"col-6\">\n              <img class=\"d-block w-100\" height=\"380\" src=\"assets/img/homeImages/DesktopDisplay.png\" alt=\"Image\">\n            </div>\n            <div class=\"col-4 first-features-content2\">\n              <h4>\n                Complete control & visibility\n              </h4>\n              <p class=\"features_content\"> Get end-to-end visibility of your shipments, online. Book, manage and track your global shipments, documents, shipping\n                instructions, payments on desktop or mobile.\n              </p>\n            </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"more-features3\">\n      <div class=\"container\">\n        <div class=\"row features-content3\">\n          <div class=\"col-4 first-features-content2\">\n            <h4>\n                Transparent Pricing\n            </h4>\n            <p class=\"features_content\">Know exactly how much you will spend on each shipment with our detailed online quote. We give you 100% transparency, upfront.\n            No surprises.\n            </p>\n          </div>\n          <div class=\"col-6\">\n            <img class=\"d-block w-100\" height=\"380\" src=\"assets/img/homeImages/NewOrder.jpg\" alt=\"Image\">\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"more-features2\">\n      <div class=\"container\">\n        <div class=\"row features-content2\">\n          <div class=\"col-6\">\n            <img class=\"d-block w-100\" height=\"380\" src=\"assets/img/homeImages/DesktopDisplay.png\" alt=\"Image\">\n          </div>\n          <div class=\"col-4 first-features-content2\">\n            <h4>\n                Real-time freight visibility\n            </h4>\n            <p class=\"features_content\"> From pickup to delivery, monitor your argo with our advanced real-time tracking system. Get timely alerts about delays &\n            unusual waiting times.\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <div class=\"col-12 features-header\">\n      <h1 class=\"vendor-title\"> Are you a Logistics manager/</h1>\n      <h1 class=\"vendor-title\"> Freight forwarder?</h1>\n    </div>\n\n    <section class=\"logistic-manager\">\n      <div class=\"container\">\n        <img class=\"logistics-manager-image\" src=\"assets/img/homeImages/cargoOwner.png\" height=\"700\" alt=\"image\">\n        <div class=\"single-paragraph-holder\">\n          <p>\n            Truckr instantly gives you access to thousands of trusted and reviewed truck drivers at short notice, at a competitive rate\n            and allows you to track your delivery status and location at every stage of the journey. No phone calls, no paperwork,\n            just a fast and efficient trucking service .\n          </p>\n          <div class=\"learn-more-feature\">\n            <button class=\"btn btn-sm btn-outline-secondary gen-btn\" type=\"button\">Learn more</button>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <div class=\"col-12 features-header\">\n      <h1 class=\"vendor-title\">Do you own a truck or a</h1>\n      <h1 class=\"vendor-title\"> fleet of trucks?</h1>\n    </div>\n\n    <section class=\"fleet-trucks\">\n      <div class=\"container\">\n        <img class=\"logistics-manager-image\" src=\"assets/img/homeImages/TruckOwner.png\" height=\"600\" alt=\"image\">\n        <div class=\"fleet-paragraph\">\n          <p>\n            Truckr helps you to get more work at great rates and get paid quickly\n          </p>\n          <div class=\"learn-more-feature\">\n            <button class=\"btn btn-sm btn-outline-secondary gen-btn\" type=\"button\">Learn more</button>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"getApp-section\">\n      <div class=\"getApp\">\n        <img class=\"getApp-image\" src=\"assets/img/homeImages/GetApp.jpg\" width=\"100%\" alt=\"image\">\n        <div>\n          <div>\n            <img class=\"phone-image\" src=\"assets/img/homeImages/DeliverCargo.png\" height=\"500\" alt=\"image\">\n          </div>\n          <div class=\"\">\n            <h4>\n              Get the Truckr Mobile App\n            </h4>\n            <p class=\"features_content\">Get end-to-end visibility of your shipments, online. Book, manage and track your global shipments, documents,\n              shipping instructions, payments on desktop or mobile.\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <div class=\"col-6\">\n      <h4>\n        Subsrcribe to our newsletter!\n      </h4>\n      <p class=\"features_content\">Are you interested to learn more about our product? You can simply fill our contact form.\n      </p>\n    </div>\n\n\n    <footer class=\"footer\" role=\"contentinfo\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"footer-content\">\n            <div>\n              <img class=\"d-block\" src=\"assets/img/homeImages/truckrFooterLogo.png\" alt=\"Truckr\" height=\"150\">\n            </div>\n            <div class=\"col-6\" id=\"contact\">\n                <p class=\"address\">20 Aluguntugui Street, East Legon, Accra, Ghana</p>\n                <p class=\"help-phone\">tel:+233206703723</p>\n                <p><a class=\"contact-email\" href=\"support@truckrtech.com\">support@truckrtech.com</a></p>\n            </div>\n            <div class=\"col-6 product-footer\">\n                <h4>Product</h4>\n                  <p class=\"\"><a href=\"\">Cargo Owner</a></p>\n                  <p class=\"\"><a href=\"\">Truck Owner</a></p>\n                  <p class=\"\"><a href=\"\">How it works</a></p>\n                  <p class=\"\"><a href=\"\">Features</a></p>\n            </div>\n            <div class=\"col-6 product-footer\">\n              <h4>Company</h4>\n              <p class=\"\"><a href=\"\"> About</a></p>\n              <p class=\"\"><a href=\"\">Contact</a></p>\n              <p class=\"\"><a href=\"\">Help</a></p>\n            </div>\n            <div class=\"col-6 product-footer\">\n              <h4>Website</h4>\n              <p class=\"\"><a href=\"\"> Terms</a></p>\n              <p class=\"\"><a href=\"\">Privacy</a></p>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"follow-us\">\n                <p><a class=\"\" href=\"\" target=\"\">Like us</a></p>\n                <p><a class=\"\" href=\"\" target=\"\">Follow us on facebook</a></p>\n                <p><a class=\"\" href=\"\" target=\"\">Follow us on twitter</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"footer-copyright\">\n        <div class=\"copyright\">©2018 <span>Truckr Technologies All rights reserved.</span></div>\n      </div>\n    </footer>\n  </body>\n</html>"

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

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"/assets/img/homeImages/truckrFooterLogo.png\" width=\"30\" height=\"30\" alt=\"\">\n    </a>\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Sign In</a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" href=\"#\">Driver</a>\n      <a class=\"dropdown-item\" href=\"#\">Truck Owner</a>\n    </div>\n  </li>\n</nav>\n\n<div class=\"dropdown-menu\">\n  <div>\n    <h4>Cargo Owner Sign In</h4>\n    <p> By signing up, I agree to Truckrs privacy & terms.</p>\n    <button type=\"button\" class=\"btn btn-primary\">Sign Up with Facebook</button>\n    <p>OR</p>\n  </div>\n  <form class=\"px-4 py-3\">\n    <div class=\"form-group\">\n      <label for=\"exampleDropdownFormEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmail1\" placeholder=\"email@example.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleDropdownFormPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleDropdownFormPassword1\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n      <p>Forgot Password?</p>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Sign In</button>\n  </form>\n</div>\n<div class=\"dropdown-divider\">\n  <a class=\"dropdown-item\" href=\"#\">Don't have an account? Sign Up</a>\n</div>\n\n<footer>\n  <ul>\n    <li>\n      <a>Help</a>\n      <a>Privacy</a>\n      <a>Terms</a>\n    </li>\n  </ul>\n  <div class=\"footer-copyright\">\n    <div class=\"copyright\"> ©2018 <span>Truckr Technoligies All rights reserved. </span></div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
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

var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"/assets/img/homeImages/truckrFooterLogo.png\" width=\"30\" height=\"30\" alt=\"\">\n    </a>\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Sign Up</a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" href=\"#\">Driver</a>\n      <a class=\"dropdown-item\" href=\"#\">Truck Owner</a>\n    </div>\n  </li>\n</nav>\n\n<div class=\"dropdown-menu\">\n  <div>\n    <h4>Cargo Owner Sign Up</h4>\n    <p> By signing up, I agree to Truckrs privacy & terms.</p>\n    <button type=\"button\" class=\"btn btn-primary\">Sign Up with Facebook</button>\n    <p>OR</p>\n  </div>\n  <form class=\"px-4 py-3\">\n    <div class=\"form-group\">\n      <label for=\"exampleDropdownFormEmail1\">First Name</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmail1\" placeholder=\"First Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleDropdownFormEmail1\">Last Name</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmail1\" placeholder=\"Last Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleDropdownFormEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmail1\" placeholder=\"email@example.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleDropdownFormPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleDropdownFormPassword1\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleDropdownFormEmail1\">Phone Number</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleDropdownFormEmail1\" placeholder=\"Phone Number\">\n      <p>we'll send a verification code via sms to confirm your mobile number.</p>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n  </form>\n</div>\n<div class=\"dropdown-divider\">\n  <a class=\"dropdown-item\" href=\"#\">Have an account? Sign in</a>\n</div>\n\n<footer>\n  <ul>\n    <li>\n      <a>Help</a>\n      <a>Privacy</a>\n      <a>Terms</a>\n    </li>\n  </ul>\n  <div class=\"footer-copyright\">\n    <div class=\"copyright\"> ©2018 <span>Truckr Technoligies All rights reserved. </span></div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
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
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

module.exports = __webpack_require__(/*! /home/amaka/truckrdev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map