(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cryptos\"  class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 \">\n      <div *ngIf=\"!mobileView\" class=\"logoContainer mx-auto mt-4\">\n          <img src=\"../assets/images/logo.png\" class=\"img-fluid logoImage center\" alt=\"logo\">\n      </div>\n      <div *ngIf=\"mobileView\" class=\"logoContainer mt-4\">\n        <img src=\"../assets/images/logo.png\" class=\"img-fluid logoImage center\" alt=\"logo\">\n    </div>\n    </div>\n    <div class=\"col-12\">\n\n        <hr /> \n    </div>\n    \n  </div>\n</div>\n\n    <div class=\"panel  \">\n        <div class=\"subPanel  mx-auto\">\n  \n            <form class=\"form-inline \">\n                <div class=\"text-center\"  style=\"width: 30%\">\n   \n                 <input type=\"text\" \n                 [(ngModel)]=\"inputValue\" \n                 name=\"inputValue\"\n                 id=\"inputValue\"\n                 (change)=\"onChangeValueInput($event)\" \n                 class=\"inputContainer form-control p-2\" \n                 style=\"width: 100%;\" \n                 />\n               </div>\n   \n               <div class=\"text-center\" style=\"width: 15%\">\n                 <select \n                 (change)=\"onChangeCryptoInput($event)\" \n                 class=\"form-control cryptoSelect p-2\"  \n                 style=\"width: 90%; \">\n                     <option *ngFor=\"let cryptoCoin of inputListCrypto\" >\n                       {{ cryptoCoin }}\n                     </option>\n                   </select>\n               </div>\n               <div class=\"text-center \" style=\"width: 10%;\">\n                 <h1> = </h1>\n               </div>\n               \n                  <div class=\"text-center\"  style=\"width: 30%\">\n   \n                   <input type=\"text\"  \n                   [(ngModel)]=\"outputValue\" \n                   id=\"outputValue\"\n                   name=\"outputValue\"\n                   (change)=\"onChangeValueOutput($event)\" \n                   class=\"inputContainer p-2 form-control\" \n                   ng-pattern=\"/^[0-9]+(\\.[0-9]{1,2})?$/\" step=\"0.01\"\n                   style=\"width: 100%;\" />\n                 </div>\n     \n                 <div class=\"cryptoSelectContainer text-center\" style=\"width: 15%\">\n                    <select \n                     (change)=\"onChangeCryptoOutput($event)\"\n                     class=\"form-control cryptoSelect p-2\" \n                     style=\"width: 90%; \">\n                     <option *ngFor=\"let crypto of outputListCrypto\" >\n                         {{ crypto }}\n                     </option>\n                   </select> \n                 </div>\n             </form>\n        </div>\n      </div>\n<footer class=\"footer mt-auto py-3\">\n    <div class=\"container-fluid\">\n        <div class=\"currencySelectContainer text-center\">\n            <select \n             class=\"form-control currencySelect cryptoSelect p-2\" \n             style=\"width: 100%; \">\n             <option *ngFor=\"let option of footerSelectorList\">\n               {{option}}\n             </option>\n           </select> \n         </div>\n      <hr />\n      <div *ngIf=\"cryptos\" class=\"col-12\">\n          <ul class=\"cryptoList\">\n              <li *ngFor=\"let crypto of objectKeys(cryptos)\">\n                <a  >\n                  <span class=\"left\">{{ crypto }}<i class=\"fa fa-circle m-2\" aria-hidden=\"true\"></i> </span>\n                  <span class=\"right\">{{ cryptos[crypto].USD | currency:'USD':true }}</span>\n                </a>\n              </li>\n            </ul>\n      </div>\n  \n    </div>\n  </footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logoContainer {\n  max-width: 12%;\n  border: 0 0 0 5px solid #323232;\n  border-radius: 5px;\n}\n\n.inputContainer {\n  font-size: 20px;\n  color: #111;\n}\n\n.inputContainer, .cryptoSelect {\n  height: 40px;\n  border-radius: 2px !important;\n  border: 1px solid #919aa1;\n}\n\n.logoImage {\n  min-width: 100px !important;\n}\n\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\nli {\n  float: left;\n}\n\nli a {\n  display: block;\n  text-align: center;\n  padding: 8px 12px;\n  text-decoration: none;\n  color: #919aa1;\n  cursor: default;\n  transition: 1s all;\n}\n\n/* Change the link color to #111 (black) on hover */\n\nli a:hover {\n  color: #111;\n}\n\n.fa-circle {\n  font-size: 6px;\n}\n\n.cryptoList {\n  margin: 0 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.cryptoSelect, .currencySelect {\n  background: #111;\n  color: white;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  /* remove default arrow */\n  background-image: url('arrow.png');\n  background-position: 90% center;\n  background-repeat: no-repeat;\n  background-size: 12px;\n  /* add custom arrow */\n  border-color: #111;\n}\n\n.currencySelect {\n  font-size: 11px !important;\n  background-size: 10px !important;\n  border-radius: 5px 5px 0 0 !important;\n}\n\n.currencySelectContainer {\n  position: relative;\n  width: 70px;\n  top: 1rem;\n  left: 94%;\n}\n\n.panel {\n  position: absolute;\n  display: table;\n  top: calc(50% - 40px);\n  width: 60%;\n  left: 20%;\n}\n\n.subPanel {\n  display: table-cell;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mdW5jaGV0YS9EZXNrdG9wL2JpdGNvaW4tY2FsY3VsYXRvci9jcnlwdG8tY2FsY3VsYXRvci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ0dKOztBRERBO0VBQ0ksMkJBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESEU7RUFDRSxXQUFBO0FDTUo7O0FESEU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ01KOztBREhFLG1EQUFBOztBQUNBO0VBQ0UsV0FBQTtBQ01KOztBREpFO0VBQ0ksY0FBQTtBQ09OOztBRExFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQXdCLHlCQUFBO0VBQ3hCLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQXdCLHFCQUFBO0VBQ3hCLGtCQUFBO0FDV0o7O0FEVEE7RUFDRSwwQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7QUNZRjs7QURWQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDYUY7O0FEWEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDY0Y7O0FEWkE7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FDY0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb0NvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOjEyJTsgXG4gICAgYm9yZGVyOiAwIDAgMCA1cHggc29saWQgIzMyMzIzMjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaW5wdXRDb250YWluZXIge1xuICBmb250LXNpemU6IDIwcHg7IFxuICBjb2xvcjogIzExMTtcbn1cbi5pbnB1dENvbnRhaW5lciwgLmNyeXB0b1NlbGVjdCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50OyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTE5YWExO1xufVxuLmxvZ29JbWFnZSB7XG4gICAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzkxOWFhMTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgdHJhbnNpdGlvbjogMXMgYWxsO1xuICB9XG4gIFxuICAvKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXG4gIGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTExO1xuICB9XG4gIC5mYS1jaXJjbGUge1xuICAgICAgZm9udC1zaXplOiA2cHg7XG4gIH1cbiAgLmNyeXB0b0xpc3Qge1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgd2lkdGg6Zml0LWNvbnRlbnRcbiAgfVxuLmNyeXB0b1NlbGVjdCwgLmN1cnJlbmN5U2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lOyAgICAgICAvKiByZW1vdmUgZGVmYXVsdCBhcnJvdyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL2Fycm93LnBuZyk7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkwJSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEycHg7ICAvKiBhZGQgY3VzdG9tIGFycm93ICovXG4gICAgYm9yZGVyLWNvbG9yOiAjMTExO1xufVxuLmN1cnJlbmN5U2VsZWN0IHtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogIDEwcHghaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMCAhaW1wb3J0YW50O1xufVxuLmN1cnJlbmN5U2VsZWN0Q29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNzBweDtcbiAgdG9wOiAgMXJlbTtcbiAgbGVmdDogOTQlO1xufVxuLnBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdG9wOmNhbGMoNTAlIC0gNDBweCk7XG4gIHdpZHRoOiA2MCU7XG4gIGxlZnQ6IDIwJTtcbn1cbi5zdWJQYW5lbCB7XG5cbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iLCIubG9nb0NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIlO1xuICBib3JkZXI6IDAgMCAwIDVweCBzb2xpZCAjMzIzMjMyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dENvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMxMTE7XG59XG5cbi5pbnB1dENvbnRhaW5lciwgLmNyeXB0b1NlbGVjdCB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5MTlhYTE7XG59XG5cbi5sb2dvSW1hZ2Uge1xuICBtaW4td2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxubGkge1xuICBmbG9hdDogbGVmdDtcbn1cblxubGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOTE5YWExO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHRyYW5zaXRpb246IDFzIGFsbDtcbn1cblxuLyogQ2hhbmdlIHRoZSBsaW5rIGNvbG9yIHRvICMxMTEgKGJsYWNrKSBvbiBob3ZlciAqL1xubGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4uZmEtY2lyY2xlIHtcbiAgZm9udC1zaXplOiA2cHg7XG59XG5cbi5jcnlwdG9MaXN0IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmNyeXB0b1NlbGVjdCwgLmN1cnJlbmN5U2VsZWN0IHtcbiAgYmFja2dyb3VuZDogIzExMTtcbiAgY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogcmVtb3ZlIGRlZmF1bHQgYXJyb3cgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvYXJyb3cucG5nKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMnB4O1xuICAvKiBhZGQgY3VzdG9tIGFycm93ICovXG4gIGJvcmRlci1jb2xvcjogIzExMTtcbn1cblxuLmN1cnJlbmN5U2VsZWN0IHtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMCAhaW1wb3J0YW50O1xufVxuXG4uY3VycmVuY3lTZWxlY3RDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3MHB4O1xuICB0b3A6IDFyZW07XG4gIGxlZnQ6IDk0JTtcbn1cblxuLnBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDQwcHgpO1xuICB3aWR0aDogNjAlO1xuICBsZWZ0OiAyMCU7XG59XG5cbi5zdWJQYW5lbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_data, rd) {
        this._data = _data;
        this.rd = rd;
        this.title = 'crypto-calculator';
        this.mobileView = false;
        this.objectKeys = Object.keys;
        this.objectValues = Object.values;
        this.footerSelectorList = ["$ - USD", "€ - EUR", "£ - GBP"];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.selectedInputCrypto = "BTC";
        this.selectedOutputCrypto = "USD";
        this.selectedInputValue = 1;
        if (this.innerWidth < 500)
            this.mobileView = true;
        this._data.getPrices()
            .subscribe(function (res) {
            _this.cryptos = res;
            _this.outputListCrypto = _this.objectKeys(res['BTC']);
            _this.inputListCrypto = _this.objectKeys(res);
            _this.outputValue = res['BTC'].USD;
            _this.inputValue = 1;
        });
    };
    AppComponent.prototype.updateValues = function () {
        var inputValue = this.selectedInputValue;
        var outputValueArray;
        var outputValue;
        var priceOfOne;
        outputValueArray = this.objectValues(this.cryptos[this.selectedInputCrypto]);
        for (var i = 0; i < this.outputListCrypto.length; i++) {
            if (this.selectedOutputCrypto == this.outputListCrypto[i]) {
                outputValue = inputValue * outputValueArray[i];
                priceOfOne = outputValueArray[i];
            }
        }
        document.getElementById("outputValue").value = outputValue.toString();
        console.log("selected crypto input ", this.selectedInputCrypto);
        console.log("selected crypto output ", this.selectedOutputCrypto);
        console.log("1 ", this.selectedInputCrypto, "=", priceOfOne, this.selectedOutputCrypto);
    };
    AppComponent.prototype.updateInputValues = function () {
        var output = this.selectedOutputValue;
        var outputValueArray;
        var priceOfOne;
        outputValueArray = this.objectValues(this.cryptos[this.selectedInputCrypto]);
        for (var i = 0; i < this.outputListCrypto.length; i++) {
            if (this.selectedOutputCrypto == this.outputListCrypto[i]) {
                priceOfOne = outputValueArray[i];
            }
        }
        document.getElementById("inputValue").value = (this.selectedOutputValue / priceOfOne).toString();
        console.log("selected crypto input ", this.selectedInputCrypto);
        console.log("selected crypto output ", this.selectedOutputCrypto);
        console.log("1 ", this.selectedInputCrypto, "=", priceOfOne, this.selectedOutputCrypto);
    };
    AppComponent.prototype.onChangeValueInput = function (event) {
        this.selectedInputValue = event.srcElement.value;
        console.log("changing Value input ", this.selectedInputValue);
        this.updateValues();
    };
    AppComponent.prototype.onChangeValueOutput = function (event) {
        this.selectedOutputValue = event.srcElement.value;
        console.log("changing Value output ", this.selectedOutputValue);
        this.updateInputValues();
    };
    AppComponent.prototype.onChangeCryptoInput = function (event) {
        this.selectedInputCrypto = event.srcElement.value;
        console.log("changing crypto input ", this.selectedInputCrypto);
        this.updateValues();
    };
    AppComponent.prototype.onChangeCryptoOutput = function (event) {
        this.selectedOutputCrypto = event.srcElement.value;
        console.log("changing crypto output ", this.selectedOutputCrypto);
        this.updateValues();
    };
    AppComponent.prototype.onResize = function (event) {
        this.innerWidth = event.target.innerWidth;
        if (this.innerWidth < 500) {
            this.mobileView = true;
        }
        else {
            this.mobileView = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getPrices = function () {
        var _this = this;
        return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?' +
            'fsyms=BTC,ETH,DASH,LTC,XRP,BCH,ETC,XMR,EOS&tsyms=USD,EUR,GBP&api_key=4905f546a9bece7b79573117dc421947384b4ec0a2b3ef6fadfbd2a4376161aa')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return _this.result = result; }));
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/funcheta/Desktop/bitcoin-calculator/crypto-calculator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map