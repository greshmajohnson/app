(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\melvin\006-Tech\002-Angular\Hobbyist\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Hobbyist';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [["role", "banner", 1, "toolbar"], ["mat-icon-button", "", 1, "example-icon"], [1, "spacer"], ["mat-raised-button", "", 1, "signin-button"], ["role", "main", 1, "content"], [1, "card-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hobbyist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\r\nfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\nfont-size: 14px;\r\ncolor: #333;\r\nbox-sizing: border-box;\r\n-webkit-font-smoothing: antialiased;\r\n-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\nmargin: 8px 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\nmargin: 0;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\nflex: 1;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\nposition: absolute;\r\ntop: 0;\r\nleft: 0;\r\nright: 0;\r\nheight: 80px;\r\ndisplay: flex;\r\nalign-items: center;\r\nbackground-color: #14222a;\r\ncolor: white;\r\nfont-family: sans-serif;\r\nfont-size: 25px;\r\nfont-weight: 300;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nmargin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\nheight: 40px;\r\nmargin: 0 8px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\r\nheight: 40px;\r\nmargin: 0 16px;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\r\nopacity: 0.8;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\ndisplay: flex;\r\nmargin: 82px auto 32px;\r\npadding: 0 16px;\r\nmax-width: 960px;\r\nflex-direction: column;\r\nalign-items: center;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%] {\r\nheight: 24px;\r\nwidth: auto;\r\n}\r\n\r\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\nmargin-right: 8px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\nfill: #888;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\ndisplay: flex;\r\nflex-wrap: wrap;\r\njustify-content: center;\r\nmargin-top: 16px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\nborder-radius: 4px;\r\nborder: 1px solid #eee;\r\nbackground-color: #fafafa;\r\nheight: 40px;\r\nwidth: 200px;\r\nmargin: 0 8px 16px;\r\npadding: 16px;\r\ndisplay: flex;\r\nflex-direction: row;\r\njustify-content: center;\r\nalign-items: center;\r\ntransition: all 0.2s ease-in-out;\r\nline-height: 24px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\nmargin-right: 0;\r\n}\r\n\r\n.card.card-small[_ngcontent-%COMP%] {\r\nheight: 16px;\r\nwidth: 168px;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\ncursor: pointer;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\ntransform: translateY(-3px);\r\nbox-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\nfill: rgb(105, 103, 103);\r\n}\r\n\r\n.card.highlight-card[_ngcontent-%COMP%] {\r\nbackground-color: #1976d2;\r\ncolor: white;\r\nfont-weight: 600;\r\nborder: none;\r\nwidth: auto;\r\nmin-width: 30%;\r\nposition: relative;\r\n}\r\n\r\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\nmargin-left: 60px;\r\n}\r\n\r\nsvg#rocket[_ngcontent-%COMP%] {\r\nwidth: 80px;\r\nposition: absolute;\r\nleft: -10px;\r\ntop: -24px;\r\n}\r\n\r\nsvg#rocket-smoke[_ngcontent-%COMP%] {\r\nheight: calc(100vh - 95px);\r\nposition: absolute;\r\ntop: 10px;\r\nright: 180px;\r\nz-index: -10;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\ncolor: #1976d2;\r\ntext-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\ncolor: #125699;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%] {\r\nposition: relative;\r\nwidth: 80%;\r\nmax-width: 600px;\r\nborder-radius: 6px;\r\npadding-top: 45px;\r\nmargin-top: 8px;\r\noverflow: hidden;\r\nbackground-color: rgb(15, 15, 16);\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]::before {\r\ncontent: \"\\2022 \\2022 \\2022\";\r\nposition: absolute;\r\ntop: 0;\r\nleft: 0;\r\nheight: 4px;\r\nbackground: rgb(58, 58, 58);\r\ncolor: #c2c3c4;\r\nwidth: 100%;\r\nfont-size: 2rem;\r\nline-height: 0;\r\npadding: 14px 0;\r\ntext-indent: 4px;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\nfont-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\ncolor: white;\r\npadding: 0 1rem 1rem;\r\nmargin: 0;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%] {\r\nheight: 40px;\r\nwidth: 40px;\r\nborder-radius: 40px;\r\nmargin: 8px;\r\nbackground-color: white;\r\nborder: 1px solid #eeeeee;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\ncursor: pointer;\r\nbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\ntransition: 1s ease-out;\r\n}\r\n\r\n.circle-link[_ngcontent-%COMP%]:hover {\r\ntransform: translateY(-0.25rem);\r\nbox-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\nmargin-top: 8px;\r\ndisplay: flex;\r\nalign-items: center;\r\nline-height: 20px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\ndisplay: flex;\r\nalign-items: center;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%] {\r\ncolor: #24292e;\r\ndisplay: flex;\r\nalign-items: center;\r\nfont-size: 12px;\r\npadding: 3px 10px;\r\nborder: 1px solid rgba(27,31,35,.2);\r\nborder-radius: 3px;\r\nbackground-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\nmargin-left: 4px;\r\nfont-weight: 600;\r\nfont-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]:hover {\r\nbackground-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\nborder-color: rgba(27,31,35,.35);\r\nbackground-position: -.5em;\r\n}\r\n\r\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\nheight: 16px;\r\nwidth: 16px;\r\nmargin-right: 4px;\r\n}\r\n\r\n.signin-button[_ngcontent-%COMP%]{\r\n    align-items: center;\r\n    height: 44px;\r\n    padding: 0 35px;\r\n    background: #dd2864;\r\n    border-radius: 5px;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    letter-spacing: 1.5px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    margin-right: 30px;\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\nsvg#clouds[_ngcontent-%COMP%] {\r\nposition: fixed;\r\nbottom: -160px;\r\nleft: -230px;\r\nz-index: -10;\r\nwidth: 1920px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n.card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    height: 16px;\r\n    margin: 8px 0;\r\n}\r\n\r\n.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 72px;\r\n}\r\n\r\nsvg#rocket-smoke[_ngcontent-%COMP%] {\r\n    right: 120px;\r\n    transform: rotate(-5deg);\r\n}\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\nsvg#rocket-smoke[_ngcontent-%COMP%] {\r\n    display: none;\r\n    visibility: hidden;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QWE7QUFDYixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsbUNBQW1DO0FBQ25DLGtCQUFrQjtBQUNsQiw4REFBOEQ7QUFDOUQsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixrSUFBa0k7QUFDbEk7O0FBRUE7QUFDQSw4REFBOEQ7QUFDOUQsZ0NBQWdDO0FBQ2hDLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkLFlBQVk7QUFDWixZQUFZO0FBQ1osYUFBYTtBQUNiOztBQUdBLHNCQUFzQjs7QUFDdEI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmNvbG9yOiAjMzMzO1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4td2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbm1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbnAge1xyXG5tYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG5mbGV4OiAxO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG5yaWdodDogMDtcclxuaGVpZ2h0OiA4MHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTQyMjJhO1xyXG5jb2xvcjogd2hpdGU7XHJcbmZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG5mb250LXNpemU6IDI1cHg7XHJcbmZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi50b29sYmFyIGltZyB7XHJcbm1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuaGVpZ2h0OiA0MHB4O1xyXG5tYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjeW91dHViZS1sb2dvIHtcclxuaGVpZ2h0OiA0MHB4O1xyXG5tYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlcixcclxuLnRvb2xiYXIgI3lvdXR1YmUtbG9nbzpob3ZlciB7XHJcbm9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5tYXJnaW46IDgycHggYXV0byAzMnB4O1xyXG5wYWRkaW5nOiAwIDE2cHg7XHJcbm1heC13aWR0aDogOTYwcHg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbmhlaWdodDogMjRweDtcclxud2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxubWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC13cmFwOiB3cmFwO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxubWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG5ib3JkZXItcmFkaXVzOiA0cHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbmhlaWdodDogNDBweDtcclxud2lkdGg6IDIwMHB4O1xyXG5tYXJnaW46IDAgOHB4IDE2cHg7XHJcbnBhZGRpbmc6IDE2cHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxubGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcclxubWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuaGVpZ2h0OiAxNnB4O1xyXG53aWR0aDogMTY4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG5ib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbmZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG5jb2xvcjogd2hpdGU7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmJvcmRlcjogbm9uZTtcclxud2lkdGg6IGF1dG87XHJcbm1pbi13aWR0aDogMzAlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbm1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0IHtcclxud2lkdGg6IDgwcHg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxubGVmdDogLTEwcHg7XHJcbnRvcDogLTI0cHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQtc21va2Uge1xyXG5oZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDEwcHg7XHJcbnJpZ2h0OiAxODBweDtcclxuei1pbmRleDogLTEwO1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQsXHJcbmE6aG92ZXIge1xyXG5jb2xvcjogIzE5NzZkMjtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuY29sb3I6ICMxMjU2OTk7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxud2lkdGg6IDgwJTtcclxubWF4LXdpZHRoOiA2MDBweDtcclxuYm9yZGVyLXJhZGl1czogNnB4O1xyXG5wYWRkaW5nLXRvcDogNDVweDtcclxubWFyZ2luLXRvcDogOHB4O1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxuaGVpZ2h0OiA0cHg7XHJcbmJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuY29sb3I6ICNjMmMzYzQ7XHJcbndpZHRoOiAxMDAlO1xyXG5mb250LXNpemU6IDJyZW07XHJcbmxpbmUtaGVpZ2h0OiAwO1xyXG5wYWRkaW5nOiAxNHB4IDA7XHJcbnRleHQtaW5kZW50OiA0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCBwcmUge1xyXG5mb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuY29sb3I6IHdoaXRlO1xyXG5wYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbmsge1xyXG5oZWlnaHQ6IDQwcHg7XHJcbndpZHRoOiA0MHB4O1xyXG5ib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5tYXJnaW46IDhweDtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxudHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluazpob3ZlciB7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbmJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbm1hcmdpbi10b3A6IDhweDtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxubGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcclxuY29sb3I6ICMyNDI5MmU7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxucGFkZGluZzogM3B4IDEwcHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsMzEsMzUsLjIpO1xyXG5ib3JkZXItcmFkaXVzOiAzcHg7XHJcbmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG5tYXJnaW4tbGVmdDogNHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcclxuYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuaGVpZ2h0OiAxNnB4O1xyXG53aWR0aDogMTZweDtcclxubWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5zaWduaW4tYnV0dG9ue1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIHBhZGRpbmc6IDAgMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZDI4NjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuc3ZnI2Nsb3VkcyB7XHJcbnBvc2l0aW9uOiBmaXhlZDtcclxuYm90dG9tOiAtMTYwcHg7XHJcbmxlZnQ6IC0yMzBweDtcclxuei1pbmRleDogLTEwO1xyXG53aWR0aDogMTkyMHB4O1xyXG59XHJcblxyXG5cclxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbi5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4udGVybWluYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbnN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map