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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Custom-Modal/partner-modal/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/Custom-Modal/partner-modal/index.ts ***!
  \*****************************************************/
/*! exports provided: PartnerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partner_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-modal.component */ "./src/app/Custom-Modal/partner-modal/partner-modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartnerModalComponent", function() { return _partner_modal_component__WEBPACK_IMPORTED_MODULE_0__["PartnerModalComponent"]; });




/***/ }),

/***/ "./src/app/Custom-Modal/partner-modal/partner-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Custom-Modal/partner-modal/partner-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<modal id=\"partner-modal\">\r\n        <div class=\"modal\" >\r\n            <div class=\"modal-body\">\r\n                <div class=\"close\" (click)=\"closeModal('partner-modal')\">\r\n                    <img src=\"../../../assets/cancel.png\" alt=\"close\">\r\n                </div>\r\n                <h3>Become a Partner Today!</h3>\r\n                <img src=\"../../../assets/line.png\" alt=\"\"><br>\r\n\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"closeModal('partner-modal')\">\r\n                    <div class=\"input-text\">\r\n                        <label for=\"mail\">Email*</label>\r\n                        <input id=\"mail\" formControlName=\"email\" type=\"mail\" required>\r\n                    </div>\r\n                    <div class=\"input-text\">\r\n                        <label class=\"nameLabel\" for=\"firstName\">First name*</label>\r\n                        <label class=\"nameLabel\" for=\"lastName\">Last name*</label>\r\n                    </div>\r\n                    <div class=\"input-text\">\r\n                        <input id=\"firstName\" formControlName=\"firstName\" type=\"text\" required>\r\n                        <input id=\"lastName\" formControlName=\"lastName\" type=\"text\" required>\r\n                    </div>\r\n                    <div class=\"input-text\">\r\n                        <label for=\"jobTitle\">Job Title*</label>\r\n                        <input id=\"jobTitle\" formControlName=\"jobTitle\" type=\"text\" required>\r\n                    </div>\r\n                    <div class=\"input-text\">\r\n                        <label for=\"companyName\">Company name*</label>\r\n                        <input id=\"companyName\" formControlName=\"companyName\" type=\"text\" required>\r\n                    </div>\r\n                    <div class=\"input-text\">\r\n                        <label for=\"country\">Country*</label>\r\n                        <input id=\"country\" formControlName=\"country\" type=\"text\" required>\r\n                    </div>\r\n                    <div class=\"input-text\">\r\n                        <label for=\"url\">Website URL</label>\r\n                        <input id=\"url\" formControlName=\"url\" type=\"text\">\r\n                    </div>\r\n                    <div class=\"input-text\">\r\n                        <label for=\"notes\">Any note to Speed Painting team</label>\r\n                        <textarea id=\"notes\" formControlName=\"notes\" type=\"text\"></textarea>\r\n                    </div>\r\n                    <button type=\"submit\" [ngClass]=\"{ disabled: !form.valid }\" [disabled]=\"!form.valid\">Send</button> \r\n                </form>\r\n            </div>\r\n        </div>\r\n    </modal>"

/***/ }),

/***/ "./src/app/Custom-Modal/partner-modal/partner-modal.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Custom-Modal/partner-modal/partner-modal.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MODAL STYLES\r\n-------------------------------*/\nmodal {\n  /* modals are hidden by default */\n  display: none; }\nmodal .modal {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    z-index: 1000;\n    overflow: auto;\n    background-color: #00000080; }\nmodal .modal .modal-body {\n      width: 600px;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      -webkit-box-flex: 0;\n              flex: none;\n      background-color: white;\n      padding: 0 15px 40px;\n      -webkit-animation-name: animatetop;\n              animation-name: animatetop;\n      -webkit-animation-duration: 0.4s;\n              animation-duration: 0.4s; }\nmodal .modal .modal-body .close {\n        padding-right: 10px;\n        padding-top: 10px;\n        cursor: pointer; }\nmodal .modal .modal-body h3 {\n        text-align: center;\n        margin-left: 25px;\n        margin-top: 40px; }\nmodal .modal .modal-body img {\n        margin-left: 47%; }\nmodal .modal .modal-body form {\n        margin: 0 30px; }\nmodal .modal .modal-body form .input-text {\n          display: -webkit-box;\n          display: flex;\n          flex-wrap: wrap;\n          padding-top: 10px; }\nmodal .modal .modal-body form .input-text label {\n            width: 100%;\n            font-size: 14px;\n            color: #33475b;\n            display: block;\n            float: none;\n            width: auto;\n            font-weight: 500;\n            line-height: 20px;\n            padding-top: 0;\n            margin-bottom: 4px; }\nmodal .modal .modal-body form .input-text input {\n            width: 100%;\n            height: 40px;\n            padding: 9px 10px;\n            font-family: \"Open Sans\";\n            font-size: 14px;\n            font-weight: normal;\n            line-height: 22px;\n            color: #33475b;\n            background-color: #f5f8fa;\n            border: 1px solid #cbd6e2;\n            box-sizing: border-box;\n            border-radius: 3px; }\nmodal .modal .modal-body form .input-text input.ng-touched.ng-invalid {\n            border: 1px solid #dc354563;\n            background-color: #dc354526; }\nmodal .modal .modal-body form .input-text textarea {\n            width: 100%;\n            display: inline-block;\n            padding: 9px 10px;\n            margin-bottom: 25px;\n            font-family: \"Open Sans\";\n            font-size: 14px;\n            font-weight: normal;\n            line-height: 22px;\n            color: #33475b;\n            background-color: #f5f8fa;\n            border: 1px solid #cbd6e2;\n            box-sizing: border-box;\n            border-radius: 3px; }\nmodal .modal .modal-body form .input-text input#firstName, modal .modal .modal-body form .input-text input#lastName, modal .modal .modal-body form .input-text label.nameLabel {\n            width: 246px; }\nmodal .modal .modal-body form .input-text input#firstName, modal .modal .modal-body form .input-text .nameLabel:nth-child(1) {\n            margin-right: 18px; }\nmodal .modal .modal-body form button {\n          font-family: \"Open Sans\";\n          margin: 0;\n          cursor: pointer;\n          display: inline-block;\n          font-weight: 700;\n          line-height: 12px;\n          position: relative;\n          text-align: center;\n          background-color: #ff7a59;\n          color: #fff;\n          border-radius: 3px;\n          border: 1px solid #ff7a59;\n          border-width: 1px;\n          font-size: 14px;\n          padding: 12px 24px; }\nmodal .modal .modal-body form button.disabled {\n          border: 1px solid #999999;\n          background-color: #cccccc;\n          color: #666666;\n          box-shadow: none;\n          cursor: auto; }\n@media (max-height: 858px) {\n    modal .modal {\n      -webkit-box-align: unset;\n              align-items: unset; } }\n@media (max-width: 768px) {\n    modal .modal .modal-body {\n      width: 100%; }\n      modal .modal .modal-body form .input-text input#firstName, modal .modal .modal-body form .input-text input#lastName, modal .modal .modal-body form .input-text label.nameLabel {\n        width: 49%; }\n      modal .modal .modal-body form .input-text input#firstName, modal .modal .modal-body form .input-text .nameLabel:nth-child(1) {\n        margin-right: 2%; } }\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ3VzdG9tLU1vZGFsL3BhcnRuZXItbW9kYWwvQzpcXFVzZXJzXFwxXFxEZXNrdG9wXFxnaXRodWJcXHZrb3J5dHNrYS5naXRodWIuaW9cXHNwLWFwcC9zcmNcXGFwcFxcQ3VzdG9tLU1vZGFsXFxwYXJ0bmVyLW1vZGFsXFxwYXJ0bmVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DdXN0b20tTW9kYWwvcGFydG5lci1tb2RhbC9wYXJ0bmVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO2dDQ0MrQjtBRENoQztFQUNJLGlDQUFBO0VBQ0EsYUFBYSxFQUFBO0FBRmpCO0lBS1Esb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkJBQTJCLEVBQUE7QUFWbkM7TUFjWSxZQUFZO01BQ1osMkJBQW1CO01BQW5CLHdCQUFtQjtNQUFuQixtQkFBbUI7TUFDbkIsbUJBQVU7Y0FBVixVQUFVO01BQ1YsdUJBQXVCO01BQ3ZCLG9CQUFvQjtNQUNwQixrQ0FBMEI7Y0FBMUIsMEJBQTBCO01BQzFCLGdDQUF3QjtjQUF4Qix3QkFBd0IsRUFBQTtBQXBCcEM7UUF1QmdCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsZUFBZSxFQUFBO0FBekIvQjtRQTZCZ0Isa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0IsRUFBQTtBQS9CaEM7UUFtQ2dCLGdCQUFnQixFQUFBO0FBbkNoQztRQXVDZ0IsY0FBYyxFQUFBO0FBdkM5QjtVQTBDb0Isb0JBQWE7VUFBYixhQUFhO1VBQ2IsZUFBZTtVQUNmLGlCQUFpQixFQUFBO0FBNUNyQztZQStDd0IsV0FBVztZQUNYLGVBQWU7WUFDZixjQUFjO1lBQ2QsY0FBYztZQUNkLFdBQVc7WUFDWCxXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsa0JBQWtCLEVBQUE7QUF4RDFDO1lBNER3QixXQUFXO1lBQ1gsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQix3QkFBd0I7WUFDeEIsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLGtCQUFrQixFQUFBO0FBdkUxQztZQTJFd0IsMkJBQTJCO1lBQzNCLDJCQUEyQixFQUFBO0FBNUVuRDtZQWlGd0IsV0FBVztZQUNYLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QseUJBQXlCO1lBQ3pCLHlCQUF5QjtZQUN6QixzQkFBc0I7WUFDdEIsa0JBQWtCLEVBQUE7QUE3RjFDO1lBaUd3QixZQUFZLEVBQUE7QUFqR3BDO1lBcUd3QixrQkFBa0IsRUFBQTtBQXJHMUM7VUEwR29CLHdCQUF3QjtVQUN4QixTQUFTO1VBQ1QsZUFBZTtVQUNmLHFCQUFxQjtVQUNyQixnQkFBZ0I7VUFDaEIsaUJBQWlCO1VBQ2pCLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIseUJBQXlCO1VBQ3pCLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIseUJBQXdCO1VBQ3hCLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2Ysa0JBQWtCLEVBQUE7QUF4SHRDO1VBNEhvQix5QkFBeUI7VUFDekIseUJBQXlCO1VBQ3pCLGNBQWM7VUFDZCxnQkFBZ0I7VUFDaEIsWUFBWSxFQUFBO0FBTTVCO0lBdElKO01Bd0lZLHdCQUFrQjtjQUFsQixrQkFBa0IsRUFBQSxFQUNyQjtBQUdMO0lBNUlKO01BK0lnQixXQUFXLEVBQUE7TUEvSTNCO1FBb0o0QixVQUFVLEVBQUE7TUFwSnRDO1FBd0o0QixnQkFBZ0IsRUFBQSxFQUNuQjtBQVN6QjtFQUNJLDZFQUFBO0VBQ0EsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSTtJQUNFLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFFWjtJQUNFLE1BQU07SUFDTixVQUFVLEVBQUEsRUFBQTtBQVBoQjtFQUNJO0lBQ0UsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUVaO0lBQ0UsTUFBTTtJQUNOLFVBQVUsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ3VzdG9tLU1vZGFsL3BhcnRuZXItbW9kYWwvcGFydG5lci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKiBNT0RBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbm1vZGFsIHtcclxuICAgIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgLm1vZGFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XHJcblxyXG5cclxuICAgICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCA0MHB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG5cclxuICAgICAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQ3JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzQ3NWI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzM0NzViO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNmUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTYzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1MjY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzM0NzViO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNmUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCNmaXJzdE5hbWUsIGlucHV0I2xhc3ROYW1lLCBsYWJlbC5uYW1lTGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCNmaXJzdE5hbWUsIC5uYW1lTGFiZWw6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTU5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNmZjdhNTk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDg1OHB4KSB7XHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAuaW5wdXQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0I2ZpcnN0TmFtZSwgaW5wdXQjbGFzdE5hbWUsIGxhYmVsLm5hbWVMYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQjZmlyc3ROYW1lLCAubmFtZUxhYmVsOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYm9keS5tb2RhbC1vcGVuIHtcclxuICAgIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSBcclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgdG9wOiAtMzAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSIsIi8qIE1PREFMIFNUWUxFU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbm1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lOyB9XG4gIG1vZGFsIC5tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwOyB9XG4gICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBmbGV4OiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAwIDE1cHggNDBweDtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzOyB9XG4gICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLmNsb3NlIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGgzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDsgfVxuICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NyU7IH1cbiAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIHtcbiAgICAgICAgbWFyZ2luOiAwIDMwcHg7IH1cbiAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4OyB9XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgbGFiZWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzNDc1YjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4OyB9XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzQ3NWI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmOGZhO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDZlMjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cbiAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgZm9ybSAuaW5wdXQtdGV4dCBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTYzO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTI2OyB9XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgdGV4dGFyZWEge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA5cHggMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzM0NzViO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ2ZTI7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgaW5wdXQjZmlyc3ROYW1lLCBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgZm9ybSAuaW5wdXQtdGV4dCBpbnB1dCNsYXN0TmFtZSwgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgbGFiZWwubmFtZUxhYmVsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNDZweDsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IGlucHV0I2ZpcnN0TmFtZSwgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgLm5hbWVMYWJlbDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4OyB9XG4gICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdhNTk7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdhNTk7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjRweDsgfVxuICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgZm9ybSBidXR0b24uZGlzYWJsZWQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGN1cnNvcjogYXV0bzsgfVxuICBAbWVkaWEgKG1heC1oZWlnaHQ6IDg1OHB4KSB7XG4gICAgbW9kYWwgLm1vZGFsIHtcbiAgICAgIGFsaWduLWl0ZW1zOiB1bnNldDsgfSB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSB7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgaW5wdXQjZmlyc3ROYW1lLCBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgZm9ybSAuaW5wdXQtdGV4dCBpbnB1dCNsYXN0TmFtZSwgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgbGFiZWwubmFtZUxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDQ5JTsgfVxuICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgaW5wdXQjZmlyc3ROYW1lLCBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgZm9ybSAuaW5wdXQtdGV4dCAubmFtZUxhYmVsOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMiU7IH0gfVxuXG5ib2R5Lm1vZGFsLW9wZW4ge1xuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xuICBmcm9tIHtcbiAgICB0b3A6IC0zMDBweDtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIHRvIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/Custom-Modal/partner-modal/partner-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Custom-Modal/partner-modal/partner-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: PartnerModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerModalComponent", function() { return PartnerModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");




var PartnerModalComponent = /** @class */ (function () {
    function PartnerModalComponent(modalService, formBuilder) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.form = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            jobTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            companyName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: [null],
            notes: [null]
        });
    }
    PartnerModalComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    PartnerModalComponent.prototype.closeModal = function (id) {
        console.warn(this.form.value);
        this.form.reset();
        this.modalService.close(id);
    };
    PartnerModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'partner-modal',
            template: __webpack_require__(/*! ./partner-modal.component.html */ "./src/app/Custom-Modal/partner-modal/partner-modal.component.html"),
            styles: [__webpack_require__(/*! ./partner-modal.component.scss */ "./src/app/Custom-Modal/partner-modal/partner-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["ModalService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PartnerModalComponent);
    return PartnerModalComponent;
}());



/***/ }),

/***/ "./src/app/Custom-Modal/pricing-plan/index.ts":
/*!****************************************************!*\
  !*** ./src/app/Custom-Modal/pricing-plan/index.ts ***!
  \****************************************************/
/*! exports provided: PricingPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pricing_plan_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-plan.component */ "./src/app/Custom-Modal/pricing-plan/pricing-plan.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PricingPlanComponent", function() { return _pricing_plan_component__WEBPACK_IMPORTED_MODULE_0__["PricingPlanComponent"]; });




/***/ }),

/***/ "./src/app/Custom-Modal/pricing-plan/pricing-plan.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Custom-Modal/pricing-plan/pricing-plan.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<modal id=\"pricing-plan\">\r\n    <div class=\"modal\" >\r\n        <div class=\"modal-body\">\r\n            <div class=\"close\" (click)=\"closeModal('pricing-plan')\">\r\n                <img src=\"../../../assets/cancel.png\" alt=\"close\">\r\n            </div>\r\n            <h3>Pricing plan</h3>\r\n            <img src=\"../../../assets/line.png\" alt=\"\"><br>\r\n            <div class=\"wrap pricing-plan-section\">\r\n                <div class=\"category\" *ngIf=\"!isActivated\">\r\n                    <div class=\"category_info\">\r\n                        <span class=\"state\">Free</span><br>\r\n                        <span class=\"currency\">$</span>\r\n                        <span class=\"cost\">0</span>\r\n                        <span class=\"mounth\">/mounth</span>\r\n                        <!--Advantage-->\r\n                        <div>\r\n                            <span class=\"advances active\">Everyday Program</span><br>\r\n                            <span class=\"advances active\">Forum Suport</span><br>\r\n                            <span class=\"advances inactive\">Private Lessons</span><br>\r\n                            <span class=\"advances inactive\">Unlimited Projects</span><br>\r\n                            <span class=\"advances inactive\">250 GB of cloud storage</span><br>\r\n                            <span class=\"advances inactive\">Access to Optimal lessons</span><br>\r\n                            <span class=\"advances inactive\">Access to Plus lessons</span><br>\r\n                            <span class=\"advances inactive\">Access to PRO lessons</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button class=\"signUp\">Sign up</button>\r\n\r\n                </div>\r\n                <div class=\"category popular\">\r\n                    <div class=\"category_info\">\r\n                        <span class=\"state\">Optimal</span><br>\r\n                        <span class=\"currency\">$</span>\r\n                        <span class=\"cost\">9</span>\r\n                        <span class=\"mounth\">/mounth</span>\r\n                        <!--Advantage-->\r\n                        <div>\r\n                            <span class=\"advances active\">Everyday Program</span><br>\r\n                            <span class=\"advances active\">Forum Suport</span><br>\r\n                            <span class=\"advances active\">Private Lessons</span><br>\r\n                            <span class=\"advances active\">Unlimited Projects</span><br>\r\n                            <span class=\"advances active\">250 GB of cloud storage</span><br>\r\n                            <span class=\"advances active\">Access to Optimal lessons</span><br>\r\n                            <span class=\"advances inactive\">Access to Plus lessons</span><br>\r\n                            <span class=\"advances inactive\">Access to PRO lessons</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button>Calculate your price</button>\r\n\r\n                </div>\r\n                <div class=\"category\">\r\n                    <div class=\"category_info\">\r\n                        <span class=\"state\">Plus</span><br>\r\n                        <span class=\"currency\">$</span>\r\n                        <span class=\"cost\">19</span>\r\n                        <span class=\"mounth\">/mounth</span>\r\n                        <!--Advantage-->\r\n                        <div>\r\n                            <span class=\"advances active\">Everyday Program</span><br>\r\n                            <span class=\"advances active\">Forum Suport</span><br>\r\n                            <span class=\"advances active\">Private Lessons</span><br>\r\n                            <span class=\"advances active\">Unlimited Projects</span><br>\r\n                            <span class=\"advances active\">250 GB of cloud storage</span><br>\r\n                            <span class=\"advances active\">Access to Optimal lessons</span><br>\r\n                            <span class=\"advances active\">Access to Plus lessons</span><br>\r\n                            <span class=\"advances inactive\">Access to PRO lessons</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button>Calculate your price</button>\r\n\r\n                </div>\r\n                <div class=\"category\">\r\n                    <div class=\"category_info\">\r\n                        <span class=\"state\">PRO</span><br>\r\n                        <span class=\"currency\">$</span>\r\n                        <span class=\"cost\">59</span>\r\n                        <span class=\"mounth\">/mounth</span>\r\n                        <!--Advantage-->\r\n                        <div>\r\n                            <span class=\"advances active\">Everyday Program</span><br>\r\n                            <span class=\"advances active\">Forum Suport</span><br>\r\n                            <span class=\"advances active\">Private Lessons</span><br>\r\n                            <span class=\"advances active\">Unlimited Projects</span><br>\r\n                            <span class=\"advances active\">250 GB of cloud storage</span><br>\r\n                            <span class=\"advances active\">Access to Optimal lessons</span><br>\r\n                            <span class=\"advances active\">Access to Plus lessons</span><br>\r\n                            <span class=\"advances active\">Access to PRO lessons</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button>Calculate your price</button>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</modal>"

/***/ }),

/***/ "./src/app/Custom-Modal/pricing-plan/pricing-plan.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Custom-Modal/pricing-plan/pricing-plan.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MODAL STYLES\r\n-------------------------------*/\nmodal {\n  /* modals are hidden by default */\n  display: none; }\nmodal .modal {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    z-index: 1000;\n    overflow: auto;\n    background-color: #00000080; }\nmodal .modal .modal-body {\n      width: 90%;\n      max-width: 1420px;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      -webkit-box-flex: 0;\n              flex: none;\n      background-color: white;\n      padding: 0 15px 40px;\n      -webkit-animation-name: animatetop;\n              animation-name: animatetop;\n      -webkit-animation-duration: 0.4s;\n              animation-duration: 0.4s; }\nmodal .modal .modal-body .close {\n        padding-right: 10px;\n        padding-top: 10px;\n        cursor: pointer; }\nmodal .modal .modal-body h3 {\n        text-align: center;\n        margin-left: 25px;\n        margin-top: 40px; }\nmodal .modal .modal-body img {\n        margin-left: 47%; }\nmodal .modal .modal-body .pricing-plan-section {\n        padding: 40px 0;\n        -webkit-box-pack: center;\n                justify-content: center; }\nmodal .modal .modal-body .pricing-plan-section .category {\n          margin: 5px;\n          padding: 40px;\n          border-radius: 6px;\n          border: 1px solid #eaeaeb;\n          text-align: center;\n          cursor: default;\n          -webkit-transition: all 1s;\n          transition: all 1s; }\nmodal .modal .modal-body .pricing-plan-section .category:hover {\n            border: 1px solid #2196f3; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info {\n            width: 100%; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info .state {\n              font-size: 20px;\n              line-height: 42px;\n              color: #041421;\n              font-family: \"Work Sans\";\n              font-weight: 600; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info .currency {\n              font-size: 22px;\n              line-height: 60px;\n              color: #2196f3;\n              font-family: \"Work Sans\";\n              font-weight: 400; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info .cost {\n              font-size: 60px;\n              line-height: 60px;\n              color: #041421;\n              font-family: \"Work Sans\";\n              font-weight: 400; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info .mounth {\n              font-size: 18px;\n              line-height: 60px;\n              color: #041421;\n              font-family: \"Work Sans\";\n              font-weight: 400; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info div {\n              padding-bottom: 40px; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info div .advances {\n                display: -webkit-box;\n                display: flex;\n                -webkit-box-align: center;\n                        align-items: center;\n                font-size: 15px;\n                color: #041421;\n                font-family: \"Open Sans\";\n                font-weight: 400; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info div .active::before {\n                content: \"\";\n                display: inline-block;\n                width: 18px;\n                height: 18px;\n                background: url('pricing_plan_active.png') no-repeat;\n                background-size: cover;\n                margin-right: 10px; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info div .inactive::before {\n                content: \"\";\n                display: inline-block;\n                width: 18px;\n                height: 18px;\n                background: url('pricing_plan_inactive.png') no-repeat;\n                background-size: cover;\n                margin-right: 10px; }\nmodal .modal .modal-body .pricing-plan-section .category button {\n            width: 180px;\n            height: 36px;\n            border-radius: 18px;\n            background-color: #2196f3;\n            border: 1px solid #2196f3;\n            font-size: 15px;\n            line-height: 18px;\n            color: #ffffff;\n            font-family: \"Work Sans\";\n            font-weight: 600;\n            text-align: center;\n            outline: none; }\nmodal .modal .modal-body .pricing-plan-section .category button:hover {\n              box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\nmodal .modal .modal-body .pricing-plan-section .category button.signUp {\n            background-color: #ffffff;\n            color: #2196f3; }\nmodal .modal .modal-body .pricing-plan-section .category button.signUp:hover {\n              background-color: #2196f3;\n              color: #ffffff; }\nmodal .modal .modal-body .pricing-plan-section .popular {\n          padding-top: 6px; }\nmodal .modal .modal-body .pricing-plan-section .popular:before {\n            content: \"\";\n            display: inline-block;\n            position: relative;\n            background: url('popular_pricing_plan.png') no-repeat;\n            background-size: cover;\n            width: 80px;\n            height: 26px;\n            right: 106px;\n            top: 37px; }\n@media (max-width: 1403px) {\n          modal .modal .modal-body .pricing-plan-section .category {\n            width: 398px; }\n          modal .modal .modal-body .pricing-plan-section .popular:before {\n            right: 160px; } }\n@media (max-width: 958px) {\n          modal .modal .modal-body .pricing-plan-section .category {\n            width: 292px; }\n          modal .modal .modal-body .pricing-plan-section .popular:before {\n            right: 106px; } }\n@media (max-width: 704px) {\n          modal .modal .modal-body .pricing-plan-section .category {\n            padding: 6px 15px 40px; } }\n@media (max-width: 425px) {\n          modal .modal .modal-body .pricing-plan-section .category {\n            width: 250px;\n            padding: 6px 5px 40px; }\n          modal .modal .modal-body .pricing-plan-section .popular:before {\n            right: 85px; } }\n@media (max-height: 858px) {\n    modal .modal {\n      -webkit-box-align: unset;\n              align-items: unset; } }\n@media (max-width: 1569px) {\n    modal .modal {\n      -webkit-box-align: unset;\n              align-items: unset; } }\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ3VzdG9tLU1vZGFsL3ByaWNpbmctcGxhbi9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxDdXN0b20tTW9kYWxcXHByaWNpbmctcGxhblxccHJpY2luZy1wbGFuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DdXN0b20tTW9kYWwvcHJpY2luZy1wbGFuL3ByaWNpbmctcGxhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztnQ0NDK0I7QURDaEM7RUFDSSxpQ0FBQTtFQUNBLGFBQWEsRUFBQTtBQUZqQjtJQUtRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQixFQUFBO0FBVm5DO01BYVksVUFBVTtNQUNWLGlCQUFpQjtNQUNqQiwyQkFBbUI7TUFBbkIsd0JBQW1CO01BQW5CLG1CQUFtQjtNQUNuQixtQkFBVTtjQUFWLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsb0JBQW9CO01BQ3BCLGtDQUEwQjtjQUExQiwwQkFBMEI7TUFDMUIsZ0NBQXdCO2NBQXhCLHdCQUF3QixFQUFBO0FBcEJwQztRQXVCZ0IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7QUF6Qi9CO1FBNkJnQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGdCQUFnQixFQUFBO0FBL0JoQztRQW1DZ0IsZ0JBQWdCLEVBQUE7QUFuQ2hDO1FBdUNnQixlQUFlO1FBQ2Ysd0JBQXVCO2dCQUF2Qix1QkFBdUIsRUFBQTtBQXhDdkM7VUEyQ29CLFdBQVc7VUFDWCxhQUFhO1VBQ2Isa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6QixrQkFBa0I7VUFDbEIsZUFBZTtVQUNmLDBCQUFrQjtVQUFsQixrQkFBa0IsRUFBQTtBQWpEdEM7WUFvRHdCLHlCQUF5QixFQUFBO0FBcERqRDtZQXdEd0IsV0FBVyxFQUFBO0FBeERuQztjQTJENEIsZUFBZTtjQUNmLGlCQUFpQjtjQUNqQixjQUFjO2NBQ2Qsd0JBQXdCO2NBQ3hCLGdCQUFnQixFQUFBO0FBL0Q1QztjQW1FNEIsZUFBZTtjQUNmLGlCQUFpQjtjQUNqQixjQUFjO2NBQ2Qsd0JBQXdCO2NBQ3hCLGdCQUFnQixFQUFBO0FBdkU1QztjQTJFNEIsZUFBZTtjQUNmLGlCQUFpQjtjQUNqQixjQUFjO2NBQ2Qsd0JBQXdCO2NBQ3hCLGdCQUFnQixFQUFBO0FBL0U1QztjQW1GNEIsZUFBZTtjQUNmLGlCQUFpQjtjQUNqQixjQUFjO2NBQ2Qsd0JBQXdCO2NBQ3hCLGdCQUFnQixFQUFBO0FBdkY1QztjQTJGNEIsb0JBQW9CLEVBQUE7QUEzRmhEO2dCQThGZ0Msb0JBQWE7Z0JBQWIsYUFBYTtnQkFDYix5QkFBbUI7d0JBQW5CLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixjQUFjO2dCQUNkLHdCQUF3QjtnQkFDeEIsZ0JBQWdCLEVBQUE7QUFuR2hEO2dCQXdHb0MsV0FBVztnQkFDWCxxQkFBcUI7Z0JBQ3JCLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixvREFBb0U7Z0JBQ3BFLHNCQUFzQjtnQkFDdEIsa0JBQWtCLEVBQUE7QUE5R3REO2dCQW9Ib0MsV0FBVztnQkFDWCxxQkFBcUI7Z0JBQ3JCLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixzREFBc0U7Z0JBQ3RFLHNCQUFzQjtnQkFDdEIsa0JBQWtCLEVBQUE7QUExSHREO1lBaUl3QixZQUFZO1lBQ1osWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIseUJBQXlCO1lBQ3pCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGFBQWEsRUFBQTtBQTVJckM7Y0ErSTRCLCtDQUErQyxFQUFBO0FBL0kzRTtZQW9Kd0IseUJBQXlCO1lBQ3pCLGNBQWMsRUFBQTtBQXJKdEM7Y0F3SjRCLHlCQUF5QjtjQUN6QixjQUFjLEVBQUE7QUF6SjFDO1VBK0pvQixnQkFBZ0IsRUFBQTtBQS9KcEM7WUFrS3dCLFdBQVU7WUFDVixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLHFEQUFxRTtZQUNyRSxzQkFBc0I7WUFDdEIsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osU0FBUyxFQUFBO0FBSWpCO1VBOUtoQjtZQWdMd0IsWUFBWSxFQUFBO1VBaExwQztZQXFMNEIsWUFBWSxFQUFBLEVBQ2Y7QUFJVDtVQTFMaEI7WUE0THdCLFlBQVksRUFBQTtVQTVMcEM7WUFpTTRCLFlBQVksRUFBQSxFQUNmO0FBSVQ7VUF0TWhCO1lBd013QixzQkFBc0IsRUFBQSxFQUN6QjtBQUdMO1VBNU1oQjtZQThNd0IsWUFBWTtZQUNaLHFCQUFxQixFQUFBO1VBL003QztZQW9ONEIsV0FBVyxFQUFBLEVBQ2Q7QUFPckI7SUE1Tko7TUE4Tlksd0JBQWtCO2NBQWxCLGtCQUFrQixFQUFBLEVBQ3JCO0FBR0w7SUFsT0o7TUFvT1ksd0JBQWtCO2NBQWxCLGtCQUFrQixFQUFBLEVBQ3JCO0FBSVQ7RUFDSSw2RUFBQTtFQUNBLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0k7SUFDRSxXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBRVo7SUFDRSxNQUFNO0lBQ04sVUFBVSxFQUFBLEVBQUE7QUFQaEI7RUFDSTtJQUNFLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFFWjtJQUNFLE1BQU07SUFDTixVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0N1c3RvbS1Nb2RhbC9wcmljaW5nLXBsYW4vcHJpY2luZy1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qIE1PREFMIFNUWUxFU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxubW9kYWwge1xyXG4gICAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDtcclxuXHJcbiAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE0MjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCA0MHB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG5cclxuICAgICAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQ3JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByaWNpbmctcGxhbi1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnlfaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwNDE0MjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJyZW5jeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjE5NmYzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDQxNDIxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubW91bnRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwNDE0MjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWR2YW5jZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwNDE0MjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3ByaWNpbmdfcGxhbl9hY3RpdmUucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wcmljaW5nX3BsYW5faW5hY3RpdmUucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uc2lnblVwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMTk2ZjM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucG9wdWxhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wb3B1bGFyX3ByaWNpbmdfcGxhbi5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwM3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM5OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcHVsYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI5MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcHVsYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDE1cHggNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggNXB4IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucG9wdWxhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA4NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LWhlaWdodDogODU4cHgpIHtcclxuICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNTY5cHgpIHtcclxuICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5ib2R5Lm1vZGFsLW9wZW4ge1xyXG4gICAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRvcDogLTMwMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCIvKiBNT0RBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTsgfVxuICBtb2RhbCAubW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDsgfVxuICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbWF4LXdpZHRoOiAxNDIwcHg7XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMCAxNXB4IDQwcHg7XG4gICAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40czsgfVxuICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5jbG9zZSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7IH1cbiAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDclOyB9XG4gICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSB7XG4gICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxczsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5OmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7IH1cbiAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSAuY2F0ZWdvcnlfaW5mbyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgLmNhdGVnb3J5X2luZm8gLnN0YXRlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwNDE0MjE7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gICAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSAuY2F0ZWdvcnlfaW5mbyAuY3VycmVuY3kge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IC5jYXRlZ29yeV9pbmZvIC5jb3N0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwNDE0MjE7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSAuY2F0ZWdvcnlfaW5mbyAubW91bnRoIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwNDE0MjE7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSAuY2F0ZWdvcnlfaW5mbyBkaXYge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDsgfVxuICAgICAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSAuY2F0ZWdvcnlfaW5mbyBkaXYgLmFkdmFuY2VzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDQxNDIxO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgICAgICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgLmNhdGVnb3J5X2luZm8gZGl2IC5hY3RpdmU6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wcmljaW5nX3BsYW5fYWN0aXZlLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiAgICAgICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgLmNhdGVnb3J5X2luZm8gZGl2IC5pbmFjdGl2ZTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3ByaWNpbmdfcGxhbl9pbmFjdGl2ZS5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IGJ1dHRvbi5zaWduVXAge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMjE5NmYzOyB9XG4gICAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSBidXR0b24uc2lnblVwOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7IH1cbiAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAucG9wdWxhciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDZweDsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLnBvcHVsYXI6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcG9wdWxhcl9wcmljaW5nX3BsYW4ucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxMDZweDtcbiAgICAgICAgICAgIHRvcDogMzdweDsgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwM3B4KSB7XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkge1xuICAgICAgICAgICAgd2lkdGg6IDM5OHB4OyB9XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAucG9wdWxhcjpiZWZvcmUge1xuICAgICAgICAgICAgcmlnaHQ6IDE2MHB4OyB9IH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OHB4KSB7XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkge1xuICAgICAgICAgICAgd2lkdGg6IDI5MnB4OyB9XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAucG9wdWxhcjpiZWZvcmUge1xuICAgICAgICAgICAgcmlnaHQ6IDEwNnB4OyB9IH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwNHB4KSB7XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkge1xuICAgICAgICAgICAgcGFkZGluZzogNnB4IDE1cHggNDBweDsgfSB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCA1cHggNDBweDsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLnBvcHVsYXI6YmVmb3JlIHtcbiAgICAgICAgICAgIHJpZ2h0OiA4NXB4OyB9IH1cbiAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4NThweCkge1xuICAgIG1vZGFsIC5tb2RhbCB7XG4gICAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH0gfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTU2OXB4KSB7XG4gICAgbW9kYWwgLm1vZGFsIHtcbiAgICAgIGFsaWduLWl0ZW1zOiB1bnNldDsgfSB9XG5cbmJvZHkubW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZXRvcCB7XG4gIGZyb20ge1xuICAgIHRvcDogLTMwMHB4O1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgdG8ge1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Custom-Modal/pricing-plan/pricing-plan.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Custom-Modal/pricing-plan/pricing-plan.component.ts ***!
  \*********************************************************************/
/*! exports provided: PricingPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPlanComponent", function() { return PricingPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");



var PricingPlanComponent = /** @class */ (function () {
    function PricingPlanComponent(modalService) {
        this.modalService = modalService;
        this.isActivated = JSON.parse(localStorage.getItem('isActivated'));
    }
    PricingPlanComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    PricingPlanComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    PricingPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pricing-plan',
            template: __webpack_require__(/*! ./pricing-plan.component.html */ "./src/app/Custom-Modal/pricing-plan/pricing-plan.component.html"),
            styles: [__webpack_require__(/*! ./pricing-plan.component.scss */ "./src/app/Custom-Modal/pricing-plan/pricing-plan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], PricingPlanComponent);
    return PricingPlanComponent;
}());



/***/ }),

/***/ "./src/app/Custom-Modal/user-dialog/index.ts":
/*!***************************************************!*\
  !*** ./src/app/Custom-Modal/user-dialog/index.ts ***!
  \***************************************************/
/*! exports provided: UserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-dialog.component */ "./src/app/Custom-Modal/user-dialog/user-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function() { return _user_dialog_component__WEBPACK_IMPORTED_MODULE_0__["UserDialogComponent"]; });




/***/ }),

/***/ "./src/app/Custom-Modal/user-dialog/user-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Custom-Modal/user-dialog/user-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<modal id=\"user-dialog\">\r\n    <div class=\"modal\" >\r\n        <div class=\"modal-body\">\r\n            <button class=\"profile_btn\" [routerLink]=\"'/myProfile'\">My Profile</button>\r\n            <button class=\"logout_btn\" (click)=\"logOut()\">Log-out</button> \r\n        </div>\r\n    </div>\r\n</modal>"

/***/ }),

/***/ "./src/app/Custom-Modal/user-dialog/user-dialog.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Custom-Modal/user-dialog/user-dialog.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MODAL STYLES\r\n-------------------------------*/\nmodal {\n  /* modals are hidden by default */\n  display: none; }\nmodal .modal {\n    display: block;\n    position: fixed;\n    z-index: 1000;\n    overflow: auto; }\nmodal .modal .modal-body {\n      display: -webkit-box;\n      display: flex;\n      float: right;\n      top: 70px;\n      height: 50px;\n      width: 250px;\n      padding: 0px;\n      position: relative;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      background: #fff;\n      -webkit-box-align: center;\n              align-items: center; }\nmodal .modal .modal-body .profile_btn, modal .modal .modal-body .logout_btn {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center;\n        width: 50%;\n        height: 100%;\n        border: none;\n        font-size: 16px;\n        line-height: 18px;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        outline: none; }\nmodal .modal .modal-body .profile_btn {\n        background: #fff;\n        color: #232128; }\nmodal .modal .modal-body .profile_btn::before {\n          content: \"\";\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          margin-right: 5px;\n          background: url('my-profile.png') no-repeat;\n          background-size: cover; }\nmodal .modal .modal-body .profile_btn:hover {\n          background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(40%, rgba(0, 0, 0, 0.05)), to(rgba(0, 0, 0, 0.1)));\n          background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1)); }\nmodal .modal .modal-body .logout_btn {\n        background: #dc3545;\n        color: #fff; }\nmodal .modal .modal-body .logout_btn::before {\n          content: \"\";\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          margin-right: 5px;\n          background: url('logout.png') no-repeat;\n          background-size: cover; }\nmodal .modal .modal-body .logout_btn:hover {\n          background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(40%, rgba(0, 0, 0, 0.05)), to(rgba(0, 0, 0, 0.1)));\n          background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1)); }\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ3VzdG9tLU1vZGFsL3VzZXItZGlhbG9nL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXEN1c3RvbS1Nb2RhbFxcdXNlci1kaWFsb2dcXHVzZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DdXN0b20tTW9kYWwvdXNlci1kaWFsb2cvdXNlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Z0NDQ2dDO0FEQ2hDO0VBQ0ksaUNBQUE7RUFDQSxhQUFhLEVBQUE7QUFGakI7SUFLUSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjLEVBQUE7QUFSdEI7TUFZWSxvQkFBYTtNQUFiLGFBQWE7TUFDYixZQUFZO01BQ1osU0FBUztNQUNULFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLGtCQUFrQjtNQUNsQix5QkFBOEI7Y0FBOUIsOEJBQThCO01BQzlCLGdCQUFnQjtNQUNoQix5QkFBbUI7Y0FBbkIsbUJBQW1CLEVBQUE7QUFyQi9CO1FBd0JnQixvQkFBYTtRQUFiLGFBQWE7UUFDYix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixnQkFBZ0I7UUFDaEIsYUFBYSxFQUFBO0FBbEM3QjtRQXVDZ0IsZ0JBQWdCO1FBQ2hCLGNBQWMsRUFBQTtBQXhDOUI7VUEyQ29CLFdBQVc7VUFDWCxxQkFBcUI7VUFDckIsV0FBVztVQUNYLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsMkNBQTJEO1VBQzNELHNCQUFzQixFQUFBO0FBakQxQztVQXFEb0Isa0pBQWlGO1VBQWpGLDJGQUFpRixFQUFBO0FBckRyRztRQTJEZ0IsbUJBQW1CO1FBQ25CLFdBQVcsRUFBQTtBQTVEM0I7VUErRG9CLFdBQVc7VUFDWCxxQkFBcUI7VUFDckIsV0FBVztVQUNYLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsdUNBQXVEO1VBQ3ZELHNCQUFzQixFQUFBO0FBckUxQztVQXlFb0Isa0pBQWlGO1VBQWpGLDJGQUFpRixFQUFBO0FBT3JHO0VBQ0ksNkVBQUE7RUFDQSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0N1c3RvbS1Nb2RhbC91c2VyLWRpYWxvZy91c2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PREFMIFNUWUxFU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxubW9kYWwge1xyXG4gICAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuXHJcbiAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAlYnRuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZmlsZV9idG4ge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlYnRuO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjMyMTI4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL215LXByb2ZpbGUucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LHJnYmEoMCwwLDAsLjA1KSA0MCUscmdiYSgwLDAsMCwuMSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9nb3V0X2J0biB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVidG47XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvbG9nb3V0LnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLC4wNSkgNDAlLHJnYmEoMCwwLDAsLjEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYm9keS5tb2RhbC1vcGVuIHtcclxuICAgIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufSIsIi8qIE1PREFMIFNUWUxFU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbm1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lOyB9XG4gIG1vZGFsIC5tb2RhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHRvcDogNzBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByb2ZpbGVfYnRuLCBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLmxvZ291dF9idG4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByb2ZpbGVfYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMyMzIxMjg7IH1cbiAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcm9maWxlX2J0bjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL215LXByb2ZpbGUucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG4gICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJvZmlsZV9idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjA1KSA0MCUsIHJnYmEoMCwgMCwgMCwgMC4xKSk7IH1cbiAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAubG9nb3V0X2J0biB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAubG9nb3V0X2J0bjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ291dC5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cbiAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5sb2dvdXRfYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC4wNSkgNDAlLCByZ2JhKDAsIDAsIDAsIDAuMSkpOyB9XG5cbmJvZHkubW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/Custom-Modal/user-dialog/user-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Custom-Modal/user-dialog/user-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function() { return UserDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");



var UserDialogComponent = /** @class */ (function () {
    function UserDialogComponent(modalService) {
        this.modalService = modalService;
    }
    UserDialogComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
        document.getElementsByClassName('modal-body')[0].setAttribute('clickOutside', 'closeModal("user-dialog")');
        document.getElementsByTagName("body")[0].style.overflow = 'auto';
    };
    UserDialogComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    UserDialogComponent.prototype.openProfilePage = function () {
        window.location.href = "/myProfile";
    };
    UserDialogComponent.prototype.logOut = function () {
        localStorage.setItem('isActivated', 'false');
        window.location.href = "/main";
    };
    UserDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-dialog',
            template: __webpack_require__(/*! ./user-dialog.component.html */ "./src/app/Custom-Modal/user-dialog/user-dialog.component.html"),
            styles: [__webpack_require__(/*! ./user-dialog.component.scss */ "./src/app/Custom-Modal/user-dialog/user-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], UserDialogComponent);
    return UserDialogComponent;
}());



/***/ }),

/***/ "./src/app/Filter/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/Filter/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDataPipe", function() { return FilterDataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterDataPipe = /** @class */ (function () {
    function FilterDataPipe() {
    }
    FilterDataPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!Object.keys(filter).some(function (key) { return filter[key] != ""; })) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter).filter(function (key) { return filter[key] != ""; });
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName]));
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.every(function (keyName) {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]);
                    });
                });
            }
        }
    };
    FilterDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterData'
        })
    ], FilterDataPipe);
    return FilterDataPipe;
}());



/***/ }),

/***/ "./src/app/_directives/click-outside.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/_directives/click-outside.directive.ts ***!
  \********************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(null);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[clickOutside]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/_directives/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'modal'
                && e.currentTarget.getAttribute('id') !== 'pricing-plan'
                && e.currentTarget.getAttribute('id') !== 'partner-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal',
            template: '<ng-content></ng-content>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.service */ "./src/app/_services/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_0__["ModalService"]; });




/***/ }),

/***/ "./src/app/_services/modal.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/modal.service.ts ***!
  \********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_share_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-share/buttons */ "./node_modules/@ngx-share/buttons/fesm5/ngx-share-buttons.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Filter_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Filter/filter.pipe */ "./src/app/Filter/filter.pipe.ts");
/* harmony import */ var _directives_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_directives/modal.component */ "./src/app/_directives/modal.component.ts");
/* harmony import */ var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_directives/click-outside.directive */ "./src/app/_directives/click-outside.directive.ts");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/modal.service */ "./src/app/_services/modal.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _main_page_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-page/main-header/main-header.component */ "./src/app/main-page/main-header/main-header.component.ts");
/* harmony import */ var _main_page_online_courses_online_courses_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-page/online-courses/online-courses.component */ "./src/app/main-page/online-courses/online-courses.component.ts");
/* harmony import */ var _main_page_about_speed_painting_about_speed_painting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-page/about-speed-painting/about-speed-painting.component */ "./src/app/main-page/about-speed-painting/about-speed-painting.component.ts");
/* harmony import */ var _main_page_why_speed_painting_why_speed_painting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main-page/why-speed-painting/why-speed-painting.component */ "./src/app/main-page/why-speed-painting/why-speed-painting.component.ts");
/* harmony import */ var _main_page_welcome_school_welcome_school_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main-page/welcome-school/welcome-school.component */ "./src/app/main-page/welcome-school/welcome-school.component.ts");
/* harmony import */ var _main_page_what_people_say_comments_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main-page/what-people-say/comments.component */ "./src/app/main-page/what-people-say/comments.component.ts");
/* harmony import */ var _main_page_partners_partners_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main-page/partners/partners.component */ "./src/app/main-page/partners/partners.component.ts");
/* harmony import */ var _main_page_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main-page/main-footer/main-footer.component */ "./src/app/main-page/main-footer/main-footer.component.ts");
/* harmony import */ var _main_page_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main-page/log-in/log-in.component */ "./src/app/main-page/log-in/log-in.component.ts");
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "./src/app/profile-page/profile-page.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");
/* harmony import */ var _main_page_main_page_template_main_page_template_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main-page/main-page-template/main-page-template.component */ "./src/app/main-page/main-page-template/main-page-template.component.ts");
/* harmony import */ var _profile_page_header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile-page/header/header.component */ "./src/app/profile-page/header/header.component.ts");
/* harmony import */ var _profile_page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./profile-page/dashboard/dashboard.component */ "./src/app/profile-page/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_page_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./profile-page/user-information/user-information.component */ "./src/app/profile-page/user-information/user-information.component.ts");
/* harmony import */ var _profile_page_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile-page/main-content/main-content.component */ "./src/app/profile-page/main-content/main-content.component.ts");
/* harmony import */ var _profile_page_information_section_information_section_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./profile-page/information-section/information-section.component */ "./src/app/profile-page/information-section/information-section.component.ts");
/* harmony import */ var _profile_page_courses_section_courses_section_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./profile-page/courses-section/courses-section.component */ "./src/app/profile-page/courses-section/courses-section.component.ts");
/* harmony import */ var _profile_page_project_section_project_section_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./profile-page/project-section/project-section.component */ "./src/app/profile-page/project-section/project-section.component.ts");
/* harmony import */ var _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./courses-page/courses-page.component */ "./src/app/courses-page/courses-page.component.ts");
/* harmony import */ var _partners_page_partners_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./partners-page/partners-page.component */ "./src/app/partners-page/partners-page.component.ts");
/* harmony import */ var _partners_page_partner_content_partner_content_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./partners-page/partner-content/partner-content.component */ "./src/app/partners-page/partner-content/partner-content.component.ts");
/* harmony import */ var _courses_page_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./courses-page/teachers/teachers.component */ "./src/app/courses-page/teachers/teachers.component.ts");
/* harmony import */ var _courses_page_online_courses_online_courses_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./courses-page/online-courses/online-courses.component */ "./src/app/courses-page/online-courses/online-courses.component.ts");
/* harmony import */ var _course_page_course_page_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./course-page/course-page.component */ "./src/app/course-page/course-page.component.ts");
/* harmony import */ var _course_page_about_course_about_course_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./course-page/about-course/about-course.component */ "./src/app/course-page/about-course/about-course.component.ts");
/* harmony import */ var _course_page_course_slider_course_slider_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./course-page/course-slider/course-slider.component */ "./src/app/course-page/course-slider/course-slider.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _projects_page_project_page_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./projects-page/project-page.component */ "./src/app/projects-page/project-page.component.ts");
/* harmony import */ var _projects_page_project_content_project_content_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./projects-page/project-content/project-content.component */ "./src/app/projects-page/project-content/project-content.component.ts");
/* harmony import */ var _students_page_students_page_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./students-page/students-page.component */ "./src/app/students-page/students-page.component.ts");
/* harmony import */ var _students_page_student_component_student_content_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./students-page/student-component/student-content.component */ "./src/app/students-page/student-component/student-content.component.ts");
/* harmony import */ var _Custom_Modal_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Custom-Modal/user-dialog/user-dialog.component */ "./src/app/Custom-Modal/user-dialog/user-dialog.component.ts");
/* harmony import */ var _Custom_Modal_pricing_plan_pricing_plan_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Custom-Modal/pricing-plan/pricing-plan.component */ "./src/app/Custom-Modal/pricing-plan/pricing-plan.component.ts");
/* harmony import */ var _Custom_Modal_partner_modal_partner_modal_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Custom-Modal/partner-modal/partner-modal.component */ "./src/app/Custom-Modal/partner-modal/partner-modal.component.ts");

















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _Filter_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterDataPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _main_page_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_13__["MainHeaderComponent"],
                _main_page_online_courses_online_courses_component__WEBPACK_IMPORTED_MODULE_14__["OnlineCoursesComponent"],
                _main_page_about_speed_painting_about_speed_painting_component__WEBPACK_IMPORTED_MODULE_15__["AboutSpeedPaintingComponent"],
                _main_page_why_speed_painting_why_speed_painting_component__WEBPACK_IMPORTED_MODULE_16__["WhySpeedPaintingComponent"],
                _main_page_welcome_school_welcome_school_component__WEBPACK_IMPORTED_MODULE_17__["WelcomeSchoolComponent"],
                _main_page_what_people_say_comments_component__WEBPACK_IMPORTED_MODULE_18__["CommentsComponent"],
                _main_page_partners_partners_component__WEBPACK_IMPORTED_MODULE_19__["PartnersComponent"],
                _main_page_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_20__["MainFooterComponent"],
                _main_page_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_21__["LogInComponent"],
                _not_found_component__WEBPACK_IMPORTED_MODULE_23__["NotFoundComponent"],
                _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_22__["MyProfileComponent"],
                _main_page_main_page_template_main_page_template_component__WEBPACK_IMPORTED_MODULE_24__["MainPageTemplateComponent"],
                _profile_page_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
                _profile_page_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["DashboardComponent"],
                _profile_page_user_information_user_information_component__WEBPACK_IMPORTED_MODULE_27__["UserInformationComponent"],
                _profile_page_main_content_main_content_component__WEBPACK_IMPORTED_MODULE_28__["MainContentComponent"],
                _profile_page_information_section_information_section_component__WEBPACK_IMPORTED_MODULE_29__["InformationSectionComponent"],
                _profile_page_courses_section_courses_section_component__WEBPACK_IMPORTED_MODULE_30__["CoursesComponent"],
                _profile_page_project_section_project_section_component__WEBPACK_IMPORTED_MODULE_31__["ProjectSectionComponent"],
                _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_32__["CoursesPageComponent"],
                _partners_page_partners_page_component__WEBPACK_IMPORTED_MODULE_33__["PartnersPageComponent"],
                _partners_page_partner_content_partner_content_component__WEBPACK_IMPORTED_MODULE_34__["PartnersContentComponent"],
                _courses_page_teachers_teachers_component__WEBPACK_IMPORTED_MODULE_35__["TeachersComponent"],
                _courses_page_online_courses_online_courses_component__WEBPACK_IMPORTED_MODULE_36__["CoursesTemplateComponent"],
                _course_page_course_page_component__WEBPACK_IMPORTED_MODULE_37__["CoursePageComponent"],
                _course_page_about_course_about_course_component__WEBPACK_IMPORTED_MODULE_38__["AboutCourseComponent"],
                _course_page_course_slider_course_slider_component__WEBPACK_IMPORTED_MODULE_39__["CourseSliderComponent"],
                _projects_page_project_page_component__WEBPACK_IMPORTED_MODULE_42__["ProjectPageComponent"],
                _projects_page_project_content_project_content_component__WEBPACK_IMPORTED_MODULE_43__["ProjectContentComponent"],
                _students_page_students_page_component__WEBPACK_IMPORTED_MODULE_44__["StudentsPageComponent"],
                _students_page_student_component_student_content_component__WEBPACK_IMPORTED_MODULE_45__["StudentContentComponent"],
                _Custom_Modal_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_46__["UserDialogComponent"],
                _directives_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
                _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideDirective"],
                _Custom_Modal_pricing_plan_pricing_plan_component__WEBPACK_IMPORTED_MODULE_47__["PricingPlanComponent"],
                _Custom_Modal_partner_modal_partner_modal_component__WEBPACK_IMPORTED_MODULE_48__["PartnerModalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_share_buttons__WEBPACK_IMPORTED_MODULE_4__["ShareButtonsModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__["OwlModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_40__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_41__["environment"].production })
            ],
            providers: [
                _services_modal_service__WEBPACK_IMPORTED_MODULE_10__["ModalService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_page_main_page_template_main_page_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page-template/main-page-template.component */ "./src/app/main-page/main-page-template/main-page-template.component.ts");
/* harmony import */ var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-page/profile-page.component */ "./src/app/profile-page/profile-page.component.ts");
/* harmony import */ var _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses-page/courses-page.component */ "./src/app/courses-page/courses-page.component.ts");
/* harmony import */ var _course_page_course_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-page/course-page.component */ "./src/app/course-page/course-page.component.ts");
/* harmony import */ var _partners_page_partners_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partners-page/partners-page.component */ "./src/app/partners-page/partners-page.component.ts");
/* harmony import */ var _projects_page_project_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-page/project-page.component */ "./src/app/projects-page/project-page.component.ts");
/* harmony import */ var _students_page_students_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./students-page/students-page.component */ "./src/app/students-page/students-page.component.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found.component.ts");









var appRoutes = [
    { path: '', component: _main_page_main_page_template_main_page_template_component__WEBPACK_IMPORTED_MODULE_1__["MainPageTemplateComponent"] },
    { path: 'main', component: _main_page_main_page_template_main_page_template_component__WEBPACK_IMPORTED_MODULE_1__["MainPageTemplateComponent"] },
    { path: 'myProfile', component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"] },
    { path: 'courses', component: _courses_page_courses_page_component__WEBPACK_IMPORTED_MODULE_3__["CoursesPageComponent"] },
    { path: 'course', component: _course_page_course_page_component__WEBPACK_IMPORTED_MODULE_4__["CoursePageComponent"] },
    { path: 'partners', component: _partners_page_partners_page_component__WEBPACK_IMPORTED_MODULE_5__["PartnersPageComponent"] },
    { path: 'projects', component: _projects_page_project_page_component__WEBPACK_IMPORTED_MODULE_6__["ProjectPageComponent"] },
    { path: 'students', component: _students_page_students_page_component__WEBPACK_IMPORTED_MODULE_7__["StudentsPageComponent"] },
    { path: '**', component: _not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-page/about-course/about-course.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/course-page/about-course/about-course.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutCourse container-fluid pr40 pl40 pt70\">\r\n    <div class=\"aboutCourse_container\">\r\n        <div class=\"aboutCourse-section center-text\">\r\n            <h2>About course</h2>\r\n            <img src=\"../../../assets/line.png\" alt=\"\"><br>\r\n            <span class=\"secondary-text\">How often do you admire the works of contemporary illustrators in magazines,\r\n                books or even cups of coffee and catch yourself thinking: \"Would I learn so much!\"? Do you think it's\r\n                the lot of rare lucky people to create illustrations and get paid for it? In fact, this is the result of\r\n                a lot of work. Illustrator can be anyone who is ready to spend enough time and effort to train.</span>\r\n            <h4 class=\"pt35\">What will give you a course:</h4>\r\n        </div>\r\n\r\n        <div class=\"advantage pt40 pb40\">\r\n            <div class=\"advantage-section\">\r\n                <div class=\"advantage-section_single\">\r\n                    <span class=\"round\">1</span>\r\n                    <span>Find out what the work of the modern illustrator is.</span>\r\n                </div>\r\n                <div class=\"advantage-section_single\">\r\n                    <span class=\"round\">2</span>\r\n                    <span>Meet different techniques and types of graphic and pictorial means of expressiveness.</span>\r\n                </div>\r\n                <div class=\"advantage-section_single\">\r\n                    <span class=\"round\">3</span>\r\n                    <span>Find out what stylization is and what its types exist. Learn to use them in your work.</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"advantage-section\">\r\n                <div class=\"advantage-section_single\">\r\n                    <span class=\"round\">4</span>\r\n                    <span>Learn to create whole worlds in which your characters will live and act.</span>\r\n                </div>\r\n                <div class=\"advantage-section_single\">\r\n                    <span class=\"round\">5</span>\r\n                    <span>Learn how to convey the mood and character of the characters, how to properly place the\r\n                        characters in their work.</span>\r\n                </div>\r\n                <div class=\"advantage-section_single\">\r\n                    <span class=\"round\">6</span>\r\n                    <span>Find your own style that not only makes your work recognizable, but also highlights your\r\n                        strengths.</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"teacher container-fluid pr40 pl40 pt70\">\r\n    <div class=\"teacher-container\">\r\n        <h2>Teacher</h2>\r\n        <img src=\"../../../assets/line.png\" alt=\"\"><br>\r\n    </div>\r\n\r\n    <div class=\"teacher-section\">\r\n        <div class=\"teacher-section_about\">\r\n            <h3>Michael Barney</h3>\r\n            <span class=\"category\">Character designer</span><br>\r\n            <span>Graduated from the Kazan Federal University, faculty of art education.</span><br>\r\n            <span>Participant and lecturer at various festivals: \"It's time to draw\" (2015, 2016), Wake up day (2015,\r\n                2016), Doski-Kraski and others. She worked on illustrations for companies such as Kinder, Coca-Cola,\r\n                Dress Code magazine.</span><br>\r\n            <span>Collaborated with such restaurant groups as Itali Group, PROBKA family, Bonappe.</span>\r\n        </div>\r\n        <div class=\"teacher-section_photo\"></div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"watched  container-fluid pr40 pl40 pt70\">\r\n    <div class=\"watched-container\">\r\n        <h2>You watched</h2>\r\n        <img src=\"../../../assets/line.png\" alt=\"\">\r\n        <div class=\"w100 pt40 flex-align-center wrap\">\r\n            <!--Start courses section-->\r\n            <div *ngFor=\"let course of courses; let i=index\" class=\"flex-align-center\">\r\n                <div class=\"course-image\" [style.backgroundImage]=\"'url('+ course.url +')'\">\r\n                    <!--Content of image block-->\r\n                    <div class=\"flex-align-start space-between wrap w-100\">\r\n                        <div class=\"category-section\">\r\n                            <div *ngFor=\"let categ of course.category; let i=index\" class=\"inline\">\r\n                                <div class=\"category\">\r\n                                    <span>{{categ}}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"status\" [ngClass]=\"course.status\">\r\n                            <span>{{course.status}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"flex-align-end space-between w-100\">\r\n                        <div class=\"nameCourse\">\r\n                            <span>{{course.nameCourse}}</span><br>\r\n                            <span class=\"author\">{{course.author}}</span>\r\n                        </div>\r\n                        <div class=\"totalTime\">\r\n                            <span>{{course.totalTime}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--End courses section-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/course-page/about-course/about-course.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/course-page/about-course/about-course.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aboutCourse {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .aboutCourse .aboutCourse_container {\n    width: 1170px; }\n  .aboutCourse .aboutCourse_container .aboutCourse-section img {\n      margin-bottom: 0.5rem; }\n  .aboutCourse .aboutCourse_container .aboutCourse-section .secondary-text {\n      font-size: 16px;\n      line-height: 32px;\n      color: #041421;\n      font-family: \"Work Sans\";\n      font-weight: 400;\n      margin-bottom: 35px; }\n  .aboutCourse .aboutCourse_container .advantage {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      flex-wrap: wrap;\n      font-size: 14px;\n      line-height: 24px;\n      color: #042037;\n      font-family: \"Open Sans\";\n      font-weight: 400;\n      padding-top: 50px;\n      padding-bottom: 50px; }\n  .aboutCourse .aboutCourse_container .advantage .advantage-section {\n        width: 475px; }\n  .aboutCourse .aboutCourse_container .advantage .advantage-section .advantage-section_single {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-align: center;\n                  align-items: center;\n          padding-bottom: 30px; }\n  .aboutCourse .aboutCourse_container .advantage .advantage-section .advantage-section_single span {\n            font-size: 14px;\n            line-height: 24px;\n            color: #042037;\n            font-family: \"Open Sans\";\n            font-weight: 400; }\n  .aboutCourse .aboutCourse_container .advantage .advantage-section .advantage-section_single .round {\n            display: -webkit-box;\n            display: flex;\n            -webkit-box-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                    align-items: center;\n            width: 40px;\n            height: 40px;\n            border-radius: 20px;\n            border: 1px solid #2196f3;\n            font-size: 18px;\n            color: #2196f3;\n            font-family: \"Open Sans\";\n            margin-right: 10px;\n            padding: 0 15px; }\n  @media screen and (max-width: 1029px) {\n        .aboutCourse .aboutCourse_container .advantage .advantage-section {\n          width: 100%; } }\n  .teacher {\n  background-color: #2d2b35;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .teacher .teacher-container {\n    font-size: 36px;\n    line-height: 42px;\n    color: #ffffff;\n    font-family: \"Work Sans\";\n    font-weight: 600;\n    text-align: center;\n    padding-bottom: 55px;\n    width: 100%; }\n  .teacher .teacher-section {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n    width: 1170px; }\n  .teacher .teacher-section .teacher-section_about {\n      width: 675px;\n      padding-right: 90px;\n      padding-bottom: 75px; }\n  .teacher .teacher-section .teacher-section_about h3 {\n        font-size: 26px;\n        line-height: 42px;\n        color: #ffffff;\n        font-family: \"Work Sans\";\n        font-weight: 600; }\n  .teacher .teacher-section .teacher-section_about span {\n        display: block;\n        font-size: 18px;\n        line-height: 30px;\n        color: #ffffff;\n        font-family: \"Open Sans\";\n        font-weight: 400; }\n  .teacher .teacher-section .teacher-section_about .category {\n        display: block;\n        font-size: 16px;\n        line-height: 16px;\n        color: #b9b8bc;\n        font-family: \"Open Sans\";\n        font-weight: 400; }\n  .teacher .teacher-section .teacher-section_photo {\n      width: 300px;\n      height: 400px;\n      background-color: #ffffff;\n      background: url('teacher-photo.png') no-repeat 0 15%;\n      background-size: cover; }\n  @media screen and (max-width: 1141px) {\n    .teacher .teacher-section .teacher-section_about {\n      width: calc(100% - 300px); } }\n  @media screen and (max-width: 768px) {\n    .teacher .teacher-section {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: reverse;\n              flex-direction: column-reverse;\n      -webkit-box-align: center;\n              align-items: center;\n      text-align: center; }\n      .teacher .teacher-section .teacher-section_about {\n        width: 100%;\n        padding-right: 0; } }\n  .watched {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-bottom: 70px; }\n  .watched .watched-container {\n    text-align: center; }\n  .watched .watched-container .course-image {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      width: 325px;\n      height: 232px;\n      border-radius: 6px;\n      background-position: center;\n      background-size: cover;\n      margin: 7.5px;\n      padding: 20px;\n      cursor: pointer; }\n  .watched .watched-container .course-image div .category-section .category {\n        display: inline-block;\n        padding: 3px 10px;\n        color: #fff;\n        background: rgba(0, 0, 0, 0.3);\n        border-radius: 6px;\n        margin-right: 10px;\n        margin-bottom: 5px; }\n  .watched .watched-container .course-image div .status {\n        display: inline-block;\n        float: right;\n        padding: 3px 10px;\n        border-radius: 6px;\n        color: #fff; }\n  .watched .watched-container .course-image div .status.PRO {\n        background: #2196f3; }\n  .watched .watched-container .course-image div .status.Plus {\n        background: #c46cd8; }\n  .watched .watched-container .course-image div .status.Free {\n        background: #7fc400; }\n  .watched .watched-container .course-image div .status.Optimal {\n        background: #5c4af7; }\n  .watched .watched-container .course-image .nameCourse {\n        display: block;\n        color: #fff;\n        text-align: left;\n        font-size: 14px; }\n  .watched .watched-container .course-image .nameCourse .author {\n          font: 14px \"Open Sans\", sans-serif;\n          color: #b9b8bc; }\n  .watched .watched-container .course-image .totalTime {\n        width: 40px;\n        height: 18px;\n        border-radius: 4px;\n        background-color: #232128;\n        font-size: 10px;\n        color: #b9b8bc;\n        font-family: \"Open Sans\";\n        font-weight: 700;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center; }\n  @media screen and (max-width: 1023px) {\n      .watched .watched-container .course-image {\n        width: 325px;\n        height: 210px; } }\n  @media screen and (max-width: 767px) {\n      .watched .watched-container .course-image {\n        width: 520px;\n        height: 405px; } }\n  @media screen and (max-width: 599px) {\n      .watched .watched-container .course-image {\n        width: 340px;\n        height: 225px; } }\n  @media screen and (max-width: 424px) {\n      .watched .watched-container .course-image {\n        width: 295px;\n        height: 195px; }\n        .watched .watched-container .course-image div .category-section {\n          font-size: 14px; }\n          .watched .watched-container .course-image div .category-section .status {\n            font-size: 14px;\n            padding: 0 10px; } }\n  @media screen and (max-width: 374px) {\n      .watched .watched-container .course-image {\n        width: 240px;\n        height: 170px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLXBhZ2UvYWJvdXQtY291cnNlL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXGNvdXJzZS1wYWdlXFxhYm91dC1jb3Vyc2VcXGFib3V0LWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUZ6QjtJQUtJLGFBQWEsRUFBQTtFQUxqQjtNQVNRLHFCQUFxQixFQUFBO0VBVDdCO01BYVEsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQUFjO01BQ2Qsd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixtQkFBbUIsRUFBQTtFQWxCM0I7TUF1Qk0sb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5QixlQUFlO01BQ2YsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQUFjO01BQ2Qsd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUE7RUFoQzFCO1FBbUNRLFlBQVksRUFBQTtFQW5DcEI7VUFzQ1Usb0JBQWE7VUFBYixhQUFhO1VBQ2IseUJBQW1CO2tCQUFuQixtQkFBbUI7VUFDbkIsb0JBQW9CLEVBQUE7RUF4QzlCO1lBMkNZLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0IsRUFBQTtFQS9DNUI7WUFtRFksb0JBQWE7WUFBYixhQUFhO1lBQ2Isd0JBQXVCO29CQUF2Qix1QkFBdUI7WUFDdkIseUJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLGVBQWU7WUFDZixjQUFjO1lBQ2Qsd0JBQXdCO1lBQ3hCLGtCQUFrQjtZQUNsQixlQUFlLEVBQUE7RUFLckI7UUFuRU47VUFxRVUsV0FBVyxFQUFBLEVBQ1o7RUFNVDtFQUNFLHlCQUF5QjtFQUN6QixvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBSnpCO0lBT0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFdBQVcsRUFBQTtFQWRmO0lBa0JJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGFBQWEsRUFBQTtFQXJCakI7TUF1Qk0sWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixvQkFBb0IsRUFBQTtFQXpCMUI7UUEyQlEsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLGdCQUFnQixFQUFBO0VBL0J4QjtRQW1DUSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLGdCQUFnQixFQUFBO0VBeEN4QjtRQTRDUSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLGdCQUFnQixFQUFBO0VBakR4QjtNQXNETSxZQUFZO01BQ1osYUFBYTtNQUNiLHlCQUF5QjtNQUN6QixvREFBb0U7TUFDcEUsc0JBQXNCLEVBQUE7RUFJMUI7SUE5REY7TUFpRVEseUJBQXlCLEVBQUEsRUFDMUI7RUFJTDtJQXRFRjtNQXdFTSw0QkFBOEI7TUFBOUIsOEJBQThCO2NBQTlCLDhCQUE4QjtNQUM5Qix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLGtCQUFrQixFQUFBO01BMUV4QjtRQTZFUSxXQUFXO1FBQ1gsZ0JBQWdCLEVBQUEsRUFDakI7RUFLUDtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQixFQUFBO0VBSnRCO0lBTUksa0JBQWtCLEVBQUE7RUFOdEI7TUFTTSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2YseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5Qiw0QkFBc0I7TUFBdEIsNkJBQXNCO2NBQXRCLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osYUFBYTtNQUNiLGtCQUFrQjtNQUNsQiwyQkFBMkI7TUFDM0Isc0JBQXNCO01BQ3RCLGFBQWE7TUFDYixhQUFhO01BQ2IsZUFBZSxFQUFBO0VBcEJyQjtRQXlCWSxxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLFdBaE1BO1FBaU1BLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBO0VBL0I5QjtRQW9DVSxxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsV0E3TUUsRUFBQTtFQXFLWjtRQTRDVSxtQkFoTkksRUFBQTtFQW9LZDtRQWdEVSxtQkFBbUIsRUFBQTtFQWhEN0I7UUFvRFUsbUJBdk5LLEVBQUE7RUFtS2Y7UUF3RFUsbUJBQW1CLEVBQUE7RUF4RDdCO1FBNkRRLGNBQWM7UUFDZCxXQW5PSTtRQW9PSixnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBO0VBaEV2QjtVQW1FVSxrQ0FBa0M7VUFDbEMsY0FBYyxFQUFBO0VBcEV4QjtRQXlFUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHdCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLHlCQUFtQjtnQkFBbkIsbUJBQW1CLEVBQUE7RUFJdkI7TUF2Rko7UUF5RlEsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNkO0VBR0g7TUE5Rko7UUFnR1EsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNkO0VBR0g7TUFyR0o7UUF1R1EsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNkO0VBR0g7TUE1R0o7UUE4R1EsWUFBWTtRQUNaLGFBQWEsRUFBQTtRQS9HckI7VUFtSFksZUFBZSxFQUFBO1VBbkgzQjtZQXNIYyxlQUFlO1lBQ2YsZUFBZSxFQUFBLEVBQ2hCO0VBTVQ7TUE5SEo7UUFnSVEsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY291cnNlLXBhZ2UvYWJvdXQtY291cnNlL2Fib3V0LWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29sb3JzOlxyXG4kYmc6ICMyOTI3MzE7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRncmVlbjogIzdmYzQwMDtcclxuJGJsYWNrLXRleHQ6ICMwNDE0MjE7XHJcblxyXG4uYWJvdXRDb3Vyc2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC5hYm91dENvdXJzZV9jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDExNzBweDtcclxuXHJcbiAgICAuYWJvdXRDb3Vyc2Utc2VjdGlvbiB7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2Vjb25kYXJ5LXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICBjb2xvcjogIzA0MTQyMTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWR2YW50YWdlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjMDQyMDM3O1xyXG4gICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG5cclxuICAgICAgLmFkdmFudGFnZS1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNDc1cHg7XHJcblxyXG4gICAgICAgIC5hZHZhbnRhZ2Utc2VjdGlvbl9zaW5nbGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwNDIwMzc7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yb3VuZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjE5NmYzO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI5cHgpIHtcclxuICAgICAgICAuYWR2YW50YWdlLXNlY3Rpb24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udGVhY2hlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmIzNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnRlYWNoZXItY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRlYWNoZXItc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDExNzBweDtcclxuICAgIC50ZWFjaGVyLXNlY3Rpb25fYWJvdXQge1xyXG4gICAgICB3aWR0aDogNjc1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3NXB4O1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICBjb2xvcjogI2I5YjhiYztcclxuICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRlYWNoZXItc2VjdGlvbl9waG90byB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3RlYWNoZXItcGhvdG8ucG5nXCIpIG5vLXJlcGVhdCAwIDE1JTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNDFweCkge1xyXG4gICAgLnRlYWNoZXItc2VjdGlvbiB7XHJcbiAgICAgIC50ZWFjaGVyLXNlY3Rpb25fYWJvdXQge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudGVhY2hlci1zZWN0aW9uIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAudGVhY2hlci1zZWN0aW9uX2Fib3V0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ud2F0Y2hlZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbiAgLndhdGNoZWQtY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuY291cnNlLWltYWdlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgaGVpZ2h0OiAyMzJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIG1hcmdpbjogNy41cHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzLlBSTyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMuUGx1cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzQ2Y2Q4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cy5GcmVlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMuT3B0aW1hbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWM0YWY3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWVDb3Vyc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgZm9udDogMTRweCBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgY29sb3I6ICNiOWI4YmM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudG90YWxUaW1lIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIxMjg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjYjliOGJjO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDUyMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgICAuY291cnNlLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNHB4KSB7XHJcbiAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAyOTVweDtcclxuICAgICAgICBoZWlnaHQ6IDE5NXB4O1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcclxuICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/course-page/about-course/about-course.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/course-page/about-course/about-course.component.ts ***!
  \********************************************************************/
/*! exports provided: AboutCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCourseComponent", function() { return AboutCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutCourseComponent = /** @class */ (function () {
    function AboutCourseComponent() {
        this.courses = [
            { id: 1, totalTime: '19:23', url: '../../../assets/course_1.jpg', author: 'Julia Molchanova', nameCourse: 'Character of the fantasy style', category: [Category[0], Category[5]], status: Status[3] },
            { id: 2, totalTime: '22:56', url: '../../../assets/course_2.jpg', author: 'Julia Molchanova', nameCourse: 'How to draw a character', category: [Category[0], Category[5]], status: Status[1] },
            { id: 3, totalTime: '30:43', url: '../../../assets/course_3.jpg', author: 'Sanketh Yayathi', nameCourse: 'Character for the game', category: [Category[0], Category[5]], status: Status[0] },
            { id: 4, totalTime: '14:25', url: '../../../assets/course_4.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2] },
        ];
    }
    AboutCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about-course',
            template: __webpack_require__(/*! ./about-course.component.html */ "./src/app/course-page/about-course/about-course.component.html"),
            styles: [__webpack_require__(/*! ./about-course.component.scss */ "./src/app/course-page/about-course/about-course.component.scss")]
        })
    ], AboutCourseComponent);
    return AboutCourseComponent;
}());

var Category;
(function (Category) {
    Category[Category["DigitalArts"] = 0] = "DigitalArts";
    Category[Category["Portrait"] = 1] = "Portrait";
    Category[Category["Landscape"] = 2] = "Landscape";
    Category[Category["Animals"] = 3] = "Animals";
    Category[Category["Anatomy"] = 4] = "Anatomy";
    Category[Category["Characters"] = 5] = "Characters";
})(Category || (Category = {}));
var Status;
(function (Status) {
    Status[Status["PRO"] = 0] = "PRO";
    Status[Status["Plus"] = 1] = "Plus";
    Status[Status["Free"] = 2] = "Free";
    Status[Status["Optimal"] = 3] = "Optimal";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/course-page/course-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-page/course-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<log-in [hidden]=\"isHidden\" [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></log-in>\r\n<header [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></header>\r\n<courseSlider></courseSlider>\r\n<about-course></about-course>\r\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/course-page/course-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-page/course-page.component.ts ***!
  \******************************************************/
/*! exports provided: CoursePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePageComponent", function() { return CoursePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoursePageComponent = /** @class */ (function () {
    function CoursePageComponent() {
        this.isHidden = true;
    }
    CoursePageComponent.prototype.onChanged = function (isLogInHidden) {
        this.isHidden = isLogInHidden;
    };
    CoursePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'single-course-page',
            template: __webpack_require__(/*! ./course-page.component.html */ "./src/app/course-page/course-page.component.html"),
        })
    ], CoursePageComponent);
    return CoursePageComponent;
}());



/***/ }),

/***/ "./src/app/course-page/course-slider/course-slider.component.html":
/*!************************************************************************!*\
  !*** ./src/app/course-page/course-slider/course-slider.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider pt140\">\r\n    <div class=\"left-slide\" [style.backgroundImage]=\"'url('+ courses[previousNumberOfSlide].url +')'\"\r\n        (click)=\"clickLeft()\">\r\n        <div class=\"slide_bg\"></div>\r\n        <div class=\"layer\">\r\n            <div class=\"array left\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"center-slide\">\r\n        <div class=\"w100\">\r\n            <h1>{{courses[numberOfSlide].nameCourse}}</h1>\r\n            <span>{{courses[numberOfSlide].lesson}}</span>\r\n        </div>\r\n        <div class=\"slide\" [style.backgroundImage]=\"'url('+ courses[numberOfSlide].url +')'\">\r\n            <!--Content of image block-->\r\n            <div class=\"flex-align-start space-between wrap w-100\">\r\n                <div class=\"category-section\">\r\n                    <div *ngFor=\"let categ of courses[numberOfSlide].category; let i=index\" class=\"inline\">\r\n                        <div class=\"category\">\r\n                            <span>{{categ}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"status\" [ngClass]=\"courses[numberOfSlide].status\">\r\n                    <span>{{courses[numberOfSlide].status}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"array-section\">\r\n                <div class=\"array left\" (click)=\"clickLeft()\"></div>\r\n                <a class=\"playHover\" href=\"javascript:void(0);\">\r\n                    <div></div>\r\n                </a>\r\n                <div class=\"array right\" (click)=\"clickRight()\"></div>\r\n            </div>\r\n            <div class=\"flex-align-end space-between w-100\">\r\n                <div class=\"totalTime\">\r\n                    <span>{{courses[numberOfSlide].totalTime}}</span>\r\n                </div>\r\n            </div>\r\n            <!--End Content of image block-->\r\n        </div>\r\n\r\n        <div class=\"sharebutton pt20\">\r\n            <span>Share the video:</span>\r\n            <a href=\"javascript:void(0);\">\r\n                <div class=\"facebook\"></div>\r\n            </a>\r\n            <a href=\"javascript:void(0);\">\r\n                <div class=\"twitter\"></div>\r\n            </a>\r\n            <a href=\"javascript:void(0);\">\r\n                <div class=\"linkedn\"></div>\r\n            </a>\r\n            <a href=\"javascript:void(0);\">\r\n                <div class=\"instagram\"></div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"right-slide\" [style.backgroundImage]=\"'url('+ courses[nextNumberOfSlide].url +')'\"\r\n        (click)=\"clickRight()\">\r\n        <div class=\"slide_bg\"></div>\r\n        <div class=\"layer\">\r\n            <div class=\"array right\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div style=\"display: none\" *ngFor=\"let course of courses\">\r\n        <img [src]=\"course.url\" alt=\"\">\r\n      </div>"

/***/ }),

/***/ "./src/app/course-page/course-slider/course-slider.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/course-page/course-slider/course-slider.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider .left-slide, .slider .right-slide {\n  height: 480px;\n  width: 720px;\n  border-radius: 6px;\n  margin-top: 108px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  cursor: pointer; }\n  .slider .left-slide .layer, .slider .right-slide .layer {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    position: relative;\n    height: 100%;\n    border-radius: 6px;\n    background-color: #292731;\n    opacity: 0.6;\n    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n    -webkit-transition: box-shadow 0.3s;\n    transition: box-shadow 0.3s; }\n  .slider .left-slide .layer:hover, .slider .right-slide .layer:hover {\n      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25); }\n  .slider .left-slide .layer .array, .slider .right-slide .layer .array {\n      width: 56px;\n      height: 56px; }\n  .slider .left-slide .layer .right, .slider .right-slide .layer .right {\n      background: url('rightCourse.png') no-repeat;\n      background-size: cover; }\n  .slider .left-slide .layer .left, .slider .right-slide .layer .left {\n      background: url('leftCourse.png') no-repeat;\n      background-size: cover; }\n  .slider {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: url('slider-section.png') no-repeat center;\n  background-size: cover;\n  color: white;\n  text-align: center;\n  width: 100%; }\n  .slider .center-slide {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 720px;\n    margin: 0 60px; }\n  .slider .center-slide .sharebutton {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 100%;\n      padding-bottom: 80px; }\n  .slider .center-slide .sharebutton div {\n        margin-left: 15px; }\n  .slider .center-slide .sharebutton .facebook {\n        background: url('fb-white.png') no-repeat;\n        background-size: contain;\n        width: 7px;\n        height: 15px; }\n  .slider .center-slide .sharebutton .twitter {\n        background: url('tw-white.png') no-repeat;\n        background-size: contain;\n        width: 14px;\n        height: 11px; }\n  .slider .center-slide .sharebutton .linkedn {\n        background: url('ln-white.png') no-repeat;\n        background-size: contain;\n        width: 14px;\n        height: 15px; }\n  .slider .center-slide .sharebutton .instagram {\n        background: url('in-white.png') no-repeat;\n        background-size: contain;\n        width: 14px;\n        height: 15px; }\n  .slider .center-slide span {\n      font-size: 16px;\n      line-height: 26px;\n      color: #ffffff;\n      font-family: \"Open Sans\";\n      font-weight: 400;\n      text-align: center; }\n  .slider .center-slide .slide {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center;\n      width: 720px;\n      height: 480px;\n      border-radius: 6px;\n      box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n      padding: 10px;\n      margin-top: 25px;\n      -webkit-transition: box-shadow 0.3s;\n      transition: box-shadow 0.3s; }\n  .slider .center-slide .slide:hover {\n        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25); }\n  .slider .center-slide .slide .category-section .category {\n        display: inline-block;\n        padding: 0px 5px;\n        color: #fff;\n        background: rgba(0, 0, 0, 0.3);\n        border-radius: 6px;\n        margin-right: 10px;\n        margin-bottom: 5px; }\n  .slider .center-slide .slide .category-section .category span {\n          font-size: 10px;\n          font-family: \"Open Sans\";\n          font-weight: 700;\n          text-align: center; }\n  .slider .center-slide .slide .status {\n        display: inline-block;\n        float: right;\n        padding: 0px 5px;\n        border-radius: 6px;\n        color: #fff; }\n  .slider .center-slide .slide .status span {\n          font-size: 10px;\n          font-family: \"Open Sans\";\n          font-weight: 700;\n          text-align: center; }\n  .slider .center-slide .slide .status.PRO {\n        background: #2196f3; }\n  .slider .center-slide .slide .status.Plus {\n        background: #c46cd8; }\n  .slider .center-slide .slide .status.Free {\n        background: #7fc400; }\n  .slider .center-slide .slide .status.Optimal {\n        background: #5c4af7; }\n  .slider .center-slide .slide .totalTime {\n        width: 28px;\n        height: 11px;\n        border-radius: 4px;\n        background-color: #232128;\n        font-size: 10px;\n        color: #b9b8bc;\n        font-family: \"Open Sans\";\n        font-weight: 700;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center; }\n  .slider .center-slide .slide .totalTime span {\n          font-size: 10px;\n          line-height: 22px;\n          color: #b9b8bc;\n          font-family: \"Open Sans\";\n          font-weight: 700;\n          text-align: center; }\n  .slider .center-slide .slide .array-section {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n                align-items: center;\n        width: 100%; }\n  .slider .center-slide .slide .array-section .playHover {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n                  justify-content: center;\n          background-color: white;\n          width: 68px;\n          height: 68px;\n          border-radius: 34px;\n          box-shadow: 0 0 3px rgba(0, 0, 0, 0.13); }\n  .slider .center-slide .slide .array-section .playHover div {\n            width: 11px;\n            height: 19px;\n            background: url('playcourse.png') no-repeat;\n            background-size: cover; }\n  .slider .center-slide .slide .array-section .array {\n          width: 56px;\n          height: 56px;\n          visibility: hidden; }\n  .slider .center-slide .slide .array-section .right {\n          background: url('rightCourse.png') no-repeat;\n          background-size: cover; }\n  .slider .center-slide .slide .array-section .left {\n          background: url('leftCourse.png') no-repeat;\n          background-size: cover; }\n  @media screen and (max-width: 1024px) {\n    .slider .left-slide,\n    .slider .right-slide {\n      display: none; }\n    .slider .center-slide .slide .array-section .array {\n      visibility: visible; } }\n  @media screen and (max-width: 768px) {\n    .slider .center-slide {\n      margin: 0; }\n      .slider .center-slide .slide {\n        width: 100%; }\n        .slider .center-slide .slide .array-section .playHover {\n          width: 45px;\n          height: 45px; }\n          .slider .center-slide .slide .array-section .playHover div {\n            width: 6px;\n            height: 11px; }\n        .slider .center-slide .slide .array-section .array {\n          width: 35px;\n          height: 35px; } }\n  @media screen and (max-width: 580px) {\n    .slider .center-slide .slide {\n      height: 380px; } }\n  @media screen and (max-width: 375px) {\n    .slider .center-slide .slide {\n      height: 250px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLXBhZ2UvY291cnNlLXNsaWRlci9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxjb3Vyc2UtcGFnZVxcY291cnNlLXNsaWRlclxcY291cnNlLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7RUFFZjtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxtQ0FBMkI7SUFBM0IsMkJBQTJCLEVBQUE7RUFFM0I7TUFDRSwyQ0FBMkMsRUFBQTtFQUc3QztNQUNFLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFHZDtNQUNFLDRDQUE0RDtNQUM1RCxzQkFBc0IsRUFBQTtFQUd4QjtNQUNFLDJDQUEyRDtNQUMzRCxzQkFBc0IsRUFBQTtFQUs1QjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsc0RBQXNFO0VBQ3RFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtFQVBiO0lBVUksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQWRsQjtNQWlCTSxvQkFBYTtNQUFiLGFBQWE7TUFDYix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLG9CQUFvQixFQUFBO0VBckIxQjtRQXdCUSxpQkFBaUIsRUFBQTtFQXhCekI7UUE0QlEseUNBQXlEO1FBQ3pELHdCQUF3QjtRQUN4QixVQUFVO1FBQ1YsWUFBWSxFQUFBO0VBL0JwQjtRQW1DUSx5Q0FBeUQ7UUFDekQsd0JBQXdCO1FBQ3hCLFdBQVc7UUFDWCxZQUFZLEVBQUE7RUF0Q3BCO1FBMENRLHlDQUF5RDtRQUN6RCx3QkFBd0I7UUFDeEIsV0FBVztRQUNYLFlBQVksRUFBQTtFQTdDcEI7UUFpRFEseUNBQXlEO1FBQ3pELHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsWUFBWSxFQUFBO0VBcERwQjtNQXlETSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCx3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0VBOUR4QjtNQWtFTSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2Ysd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osYUFBYTtNQUNiLGtCQUFrQjtNQUNsQiw0Q0FBNEM7TUFDNUMsNEJBQTRCO01BQzVCLDJCQUEyQjtNQUMzQixzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixtQ0FBMkI7TUFBM0IsMkJBQTJCLEVBQUE7RUE5RWpDO1FBaUZRLDJDQUEyQyxFQUFBO0VBakZuRDtRQXNGVSxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLFdBeElFO1FBeUlGLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBO0VBNUY1QjtVQStGWSxlQUFlO1VBQ2Ysd0JBQXdCO1VBQ3hCLGdCQUFnQjtVQUNoQixrQkFBa0IsRUFBQTtFQWxHOUI7UUF3R1EscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLFdBNUpJLEVBQUE7RUFnRFo7VUErR1UsZUFBZTtVQUNmLHdCQUF3QjtVQUN4QixnQkFBZ0I7VUFDaEIsa0JBQWtCLEVBQUE7RUFsSDVCO1FBdUhRLG1CQXRLTSxFQUFBO0VBK0NkO1FBMkhRLG1CQUFtQixFQUFBO0VBM0gzQjtRQStIUSxtQkE3S08sRUFBQTtFQThDZjtRQW1JUSxtQkFBbUIsRUFBQTtFQW5JM0I7UUF1SVEsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixvQkFBYTtRQUFiLGFBQWE7UUFDYix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQixFQUFBO0VBakozQjtVQW9KVSxlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGNBQWM7VUFDZCx3QkFBd0I7VUFDeEIsZ0JBQWdCO1VBQ2hCLGtCQUFrQixFQUFBO0VBeko1QjtRQThKUSxvQkFBYTtRQUFiLGFBQWE7UUFDYix5QkFBOEI7Z0JBQTlCLDhCQUE4QjtRQUM5Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixXQUFXLEVBQUE7RUFqS25CO1VBb0tVLG9CQUFhO1VBQWIsYUFBYTtVQUNiLHlCQUFtQjtrQkFBbkIsbUJBQW1CO1VBQ25CLHdCQUF1QjtrQkFBdkIsdUJBQXVCO1VBQ3ZCLHVCQUF1QjtVQUN2QixXQUFXO1VBQ1gsWUFBWTtVQUNaLG1CQUFtQjtVQUNuQix1Q0FBdUMsRUFBQTtFQTNLakQ7WUE4S1ksV0FBVztZQUNYLFlBQVk7WUFDWiwyQ0FBMkQ7WUFDM0Qsc0JBQXNCLEVBQUE7RUFqTGxDO1VBc0xVLFdBQVc7VUFDWCxZQUFZO1VBQ1osa0JBQWtCLEVBQUE7RUF4TDVCO1VBNExVLDRDQUE0RDtVQUM1RCxzQkFBc0IsRUFBQTtFQTdMaEM7VUFpTVUsMkNBQTJEO1VBQzNELHNCQUFzQixFQUFBO0VBYzlCO0lBaE5GOztNQW1OTSxhQUFhLEVBQUE7SUFuTm5CO01BME5ZLG1CQUFtQixFQUFBLEVBQ3BCO0VBTVQ7SUFqT0Y7TUFtT1EsU0FBUyxFQUFBO01Bbk9qQjtRQXFPUSxXQUFXLEVBQUE7UUFyT25CO1VBeU9ZLFdBQVc7VUFDWCxZQUFZLEVBQUE7VUExT3hCO1lBNE9jLFVBQVU7WUFDVixZQUFZLEVBQUE7UUE3TzFCO1VBa1BZLFdBQVc7VUFDWCxZQUFZLEVBQUEsRUFDYjtFQU1UO0lBMVBGO01BNlBRLGFBQWEsRUFBQSxFQUNkO0VBSUw7SUFsUUY7TUFxUVEsYUFBYSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2UtcGFnZS9jb3Vyc2Utc2xpZGVyL2NvdXJzZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJGJnOiAjMjkyNzMxO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuJXNsaWRlci1zdHlsZSB7XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxuICB3aWR0aDogNzIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwOHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAubGF5ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI3MzE7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxuXHJcbiAgICAuYXJyYXkge1xyXG4gICAgICB3aWR0aDogNTZweDtcclxuICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9yaWdodENvdXJzZS5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0IHtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xlZnRDb3Vyc2UucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NsaWRlci1zZWN0aW9uLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLmNlbnRlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzIwcHg7XHJcbiAgICBtYXJnaW46IDAgNjBweDtcclxuXHJcbiAgICAuc2hhcmVidXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZhY2Vib29rIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZmItd2hpdGUucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgd2lkdGg6IDdweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50d2l0dGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvdHctd2hpdGUucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlua2VkbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xuLXdoaXRlLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmluc3RhZ3JhbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2luLXdoaXRlLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogNzIwcHg7XHJcbiAgICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0dXMuUFJPIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXR1cy5QbHVzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYzQ2Y2Q4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RhdHVzLkZyZWUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXR1cy5PcHRpbWFsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNWM0YWY3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudG90YWxUaW1lIHtcclxuICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIxMjg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjYjliOGJjO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICNiOWI4YmM7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXJyYXktc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLnBsYXlIb3ZlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB3aWR0aDogNjhweDtcclxuICAgICAgICAgIGhlaWdodDogNjhweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XHJcblxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDExcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3BsYXljb3Vyc2UucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJheSB7XHJcbiAgICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcmlnaHRDb3Vyc2UucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbGVmdENvdXJzZS5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sZWZ0LXNsaWRlIHtcclxuICAgIEBleHRlbmQgJXNsaWRlci1zdHlsZTtcclxuICB9XHJcblxyXG4gIC5yaWdodC1zbGlkZSB7XHJcbiAgICBAZXh0ZW5kICVzbGlkZXItc3R5bGU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5sZWZ0LXNsaWRlLFxyXG4gICAgLnJpZ2h0LXNsaWRlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2VudGVyLXNsaWRlIHtcclxuICAgICAgLnNsaWRlIHtcclxuICAgICAgICAuYXJyYXktc2VjdGlvbiB7XHJcbiAgICAgICAgICAuYXJyYXkge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jZW50ZXItc2xpZGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgLnNsaWRlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLmFycmF5LXNlY3Rpb24ge1xyXG4gICAgICAgICAgLnBsYXlIb3ZlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyYXkge1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC5jZW50ZXItc2xpZGUge1xyXG4gICAgICAuc2xpZGUge1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAuY2VudGVyLXNsaWRlIHtcclxuICAgICAgLnNsaWRlIHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/course-page/course-slider/course-slider.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/course-page/course-slider/course-slider.component.ts ***!
  \**********************************************************************/
/*! exports provided: CourseSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseSliderComponent", function() { return CourseSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourseSliderComponent = /** @class */ (function () {
    function CourseSliderComponent() {
        this.courses = [
            { id: 1, totalTime: '19:23', url: '../../../assets/course_1.jpg', lesson: 'Lesson - 01', nameCourse: 'Character of the fantasy style', category: [Category[0], Category[5]], status: Status[3] },
            { id: 2, totalTime: '22:56', url: '../../../assets/course_2.jpg', lesson: 'Lesson - 02', nameCourse: 'How to draw a character', category: [Category[0], Category[5]], status: Status[1] },
            { id: 3, totalTime: '30:43', url: '../../../assets/course_3.jpg', lesson: 'Lesson - 03', nameCourse: 'Character for the game', category: [Category[0], Category[5]], status: Status[0] },
            { id: 4, totalTime: '14:25', url: '../../../assets/course_4.jpg', lesson: 'Lesson - 04', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2] },
            { id: 5, totalTime: '15:22', url: '../../../assets/course_1.jpg', lesson: 'Lesson - 05', nameCourse: 'Character of the fantasy style', category: [Category[0], Category[5]], status: Status[3] },
            { id: 6, totalTime: '20:55', url: '../../../assets/course_2.jpg', lesson: 'Lesson - 06', nameCourse: 'How to draw a character', category: [Category[0], Category[5]], status: Status[1] },
            { id: 7, totalTime: '16:45', url: '../../../assets/course_3.jpg', lesson: 'Lesson - 07', nameCourse: 'Character for the game', category: [Category[0], Category[5]], status: Status[0] },
            { id: 8, totalTime: '14:25', url: '../../../assets/course_4.jpg', lesson: 'Lesson - 08', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2] },
        ];
        this.previousNumberOfSlide = this.courses.length - 1;
        this.numberOfSlide = 0;
        this.nextNumberOfSlide = 1;
    }
    CourseSliderComponent.prototype.clickRight = function () {
        if (this.numberOfSlide == this.courses.length - 1) {
            this.numberOfSlide = 0;
        }
        else {
            this.numberOfSlide = this.numberOfSlide + 1;
        }
        if (this.numberOfSlide == this.courses.length - 1) {
            this.nextNumberOfSlide = 0;
        }
        else {
            this.nextNumberOfSlide = this.numberOfSlide + 1;
        }
        if (this.numberOfSlide == 0) {
            this.previousNumberOfSlide = this.courses.length - 1;
        }
        else {
            this.previousNumberOfSlide = this.numberOfSlide - 1;
        }
    };
    CourseSliderComponent.prototype.clickLeft = function () {
        if (this.numberOfSlide == 0) {
            this.numberOfSlide = this.courses.length - 1;
        }
        else {
            this.numberOfSlide = this.numberOfSlide - 1;
        }
        if (this.numberOfSlide == 0) {
            this.previousNumberOfSlide = this.courses.length - 1;
        }
        else {
            this.previousNumberOfSlide = this.numberOfSlide - 1;
        }
        if (this.numberOfSlide == this.courses.length - 1) {
            this.nextNumberOfSlide = 0;
        }
        else {
            this.nextNumberOfSlide = this.numberOfSlide + 1;
        }
    };
    CourseSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'courseSlider',
            template: __webpack_require__(/*! ./course-slider.component.html */ "./src/app/course-page/course-slider/course-slider.component.html"),
            styles: [__webpack_require__(/*! ./course-slider.component.scss */ "./src/app/course-page/course-slider/course-slider.component.scss")]
        })
    ], CourseSliderComponent);
    return CourseSliderComponent;
}());

var Category;
(function (Category) {
    Category[Category["DigitalArts"] = 0] = "DigitalArts";
    Category[Category["Portrait"] = 1] = "Portrait";
    Category[Category["Landscape"] = 2] = "Landscape";
    Category[Category["Animals"] = 3] = "Animals";
    Category[Category["Anatomy"] = 4] = "Anatomy";
    Category[Category["Characters"] = 5] = "Characters";
})(Category || (Category = {}));
var Status;
(function (Status) {
    Status[Status["PRO"] = 0] = "PRO";
    Status[Status["Plus"] = 1] = "Plus";
    Status[Status["Free"] = 2] = "Free";
    Status[Status["Optimal"] = 3] = "Optimal";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/courses-page/courses-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/courses-page/courses-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<log-in [hidden]=\"isHidden\" [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></log-in>\r\n<header [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></header>\r\n<courses-template></courses-template>\r\n<teachers></teachers>\r\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/courses-page/courses-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/courses-page/courses-page.component.ts ***!
  \********************************************************/
/*! exports provided: CoursesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageComponent", function() { return CoursesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoursesPageComponent = /** @class */ (function () {
    function CoursesPageComponent() {
        this.isHidden = true;
    }
    CoursesPageComponent.prototype.onChanged = function (isLogInHidden) {
        this.isHidden = isLogInHidden;
    };
    CoursesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'courses-page',
            template: __webpack_require__(/*! ./courses-page.component.html */ "./src/app/courses-page/courses-page.component.html"),
        })
    ], CoursesPageComponent);
    return CoursesPageComponent;
}());



/***/ }),

/***/ "./src/app/courses-page/online-courses/online-courses.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/courses-page/online-courses/online-courses.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-title pr40 pl40\">\r\n    <div>\r\n        <h2>Online courses of drawing and painting</h2>\r\n        <h6>All courses are created on the basis of academic programs including deep theoretical knowledge and practice.\r\n        </h6>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"filtration\">\r\n    <div class=\"search-hero\">\r\n        <div class=\"search\">\r\n            <div class=\"styled-select\">\r\n                <select class=\"custom-select\" (change)=\"changeLevel($event)\">\r\n                    <option>All levels</option>\r\n                    <option *ngFor=\"let level of LevelsDropdown; let i=index\" [ngValue]=\"level\">{{level}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"styled-select\">\r\n                <select class=\"custom-select\" (change)=\"changeCategory($event)\">\r\n                    <option>All category</option>\r\n                    <option *ngFor=\"let category of CategoryDropdown; let i=index\" [ngValue]=\"category\">{{category}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n            <div class=\"styled-select\">\r\n                <select class=\"custom-select\" (change)=\"changeStatus($event)\">\r\n                    <option>Course status</option>\r\n                    <option *ngFor=\"let status of StatusDropdown; let i=index\" [ngValue]=\"status\">{{status}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\"\r\n            placeholder=\"Enter course name...\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"courses container-fluid pr40 pl40\">\r\n    <div class=\"courses-container\">\r\n        <div *ngFor=\"let course of courses| filterData: {nameCourse: searchText, level: searchLevel, category:searchCategory, status:searchStatus}; let i=index\"\r\n            class=\"flex-align-center showHover\">\r\n            <div *ngIf=\"!searchText && !searchLevel && !searchCategory && !searchStatus ? i<=limit : true\"\r\n                class=\"course-image\" [style.backgroundImage]=\"'url('+ course.url +')'\">\r\n                <!--Content of image block-->\r\n                <div class=\"flex-align-start space-between w-100\">\r\n                    <div class=\"category-section\">\r\n                        <div *ngFor=\"let categ of course.category; let i=index\" class=\"inline\">\r\n                            <div class=\"category\">\r\n                                <span>{{categ}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"status\" [ngClass]=\"course.status\">\r\n                        <span>{{course.status}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"flex-align-end space-between w-100\">\r\n                    <div class=\"nameCourse\">\r\n                        <span>{{course.nameCourse}}</span><br>\r\n                        <span class=\"author\">{{course.author}}</span>\r\n                    </div>\r\n                    <div class=\"totalTime\">\r\n                        <span>{{course.totalTime}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!searchText && !searchLevel && !searchCategory && !searchStatus ? i<=limit : true\" class=\"course-image-hover\"> \r\n                <a class=\"countOfLessons\" [routerLink]=\"'/course'\">\r\n                    <span>{{course.count}}</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!searchText && !searchLevel && !searchCategory && !searchStatus\" class=\"show-section w100\">\r\n            <button class=\"show-button\"\r\n                (click)=\"show()\">{{limit == courses.length? 'Less courses' : 'More courses'}}</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngFor=\"let course of courses\" style=\"display: none\">\r\n    <img [src]=\"course.url\" alt=\"\">\r\n</div>"

/***/ }),

/***/ "./src/app/courses-page/online-courses/online-courses.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/courses-page/online-courses/online-courses.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: url('welcome-school-bg.png') no-repeat center center;\n  background-size: cover;\n  padding-top: 130px;\n  padding-bottom: 70px;\n  color: white; }\n  .header-title div h2 {\n    margin-bottom: 20px; }\n  .filtration {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #f6f6f6; }\n  .filtration .search-hero {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    padding: 25px 15px;\n    position: relative;\n    bottom: 45px;\n    border-radius: 6px;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.12);\n    width: 900px;\n    background-color: white; }\n  .filtration .search-hero .search {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      overflow: hidden; }\n  .filtration .search-hero .search .styled-select {\n        background: url('select-arrow.png') no-repeat 98% 15px;\n        background-size: 15px;\n        overflow: hidden;\n        margin-right: 10px;\n        border-bottom: 2px solid #2196f3;\n        overflow: hidden; }\n  .filtration .search-hero .search .styled-select select {\n          background: transparent;\n          border: none;\n          font-size: 16px;\n          padding: 5px;\n          /* If you add too much padding here, the options won't show in IE */\n          width: 150px;\n          color: #1c1a22;\n          font-family: \"Work Sans\";\n          font-weight: 600;\n          overflow: hidden; }\n  .filtration .search-hero .search .styled-select select option {\n            font-size: 16px;\n            line-height: 16px;\n            color: #1c1a22;\n            font-family: \"Work Sans\";\n            overflow: hidden; }\n  .filtration .search-hero .form-control {\n      width: 265px;\n      height: 48px;\n      border-radius: 24px;\n      background-color: #f6f6f6;\n      border: 2px solid #2196f3; }\n  .courses {\n  background-color: #f6f6f6;\n  padding-top: 20px; }\n  .courses .courses-container {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding-bottom: 45px; }\n  .courses .courses-container div .course-image {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      width: 440px;\n      height: 325px;\n      border-radius: 6px;\n      background-position: center;\n      background-size: cover;\n      margin: 7.5px;\n      padding: 20px;\n      cursor: pointer; }\n  .courses .courses-container div .course-image div .category-section {\n        width: 75%; }\n  .courses .courses-container div .course-image div .category-section .category {\n          display: inline-block;\n          padding: 3px 10px;\n          color: #fff;\n          background: rgba(0, 0, 0, 0.3);\n          border-radius: 6px;\n          margin-right: 10px;\n          margin-bottom: 5px; }\n  .courses .courses-container div .course-image div .status {\n        display: inline-block;\n        float: right;\n        padding: 3px 10px;\n        border-radius: 6px;\n        color: #fff; }\n  .courses .courses-container div .course-image div .status.PRO {\n        background: #2196f3; }\n  .courses .courses-container div .course-image div .status.Plus {\n        background: #c46cd8; }\n  .courses .courses-container div .course-image div .status.Free {\n        background: #7fc400; }\n  .courses .courses-container div .course-image div .status.Optimal {\n        background: #5c4af7; }\n  .courses .courses-container div .course-image .nameCourse {\n        display: block;\n        color: #fff;\n        width: 100%;\n        font-size: 14px; }\n  .courses .courses-container div .course-image .nameCourse .author {\n          font: 14px 'Open Sans', sans-serif;\n          color: #b9b8bc; }\n  .courses .courses-container div .course-image .totalTime {\n        width: 40px;\n        height: 18px;\n        border-radius: 4px;\n        background-color: #232128;\n        font-size: 10px;\n        color: #b9b8bc;\n        font-family: \"Open Sans\";\n        font-weight: 700;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center; }\n  .courses .courses-container div .course-image-hover {\n      visibility: hidden;\n      display: -webkit-box;\n      display: flex;\n      position: absolute;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 440px;\n      height: 325px;\n      background-color: #2927317a;\n      border-radius: 6px;\n      cursor: pointer; }\n  .courses .courses-container div .course-image-hover .countOfLessons {\n        width: 64px;\n        height: 64px;\n        border-radius: 32px;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n        background-color: #2196f3;\n        font-size: 12px;\n        line-height: 22px;\n        color: #ffffff;\n        font-family: \"Open Sans\";\n        font-weight: 700; }\n  .courses .courses-container div .course-image-hover .countOfLessons span {\n          position: absolute;\n          margin-top: 15px;\n          margin-left: 25px; }\n  .courses .courses-container div .course-image-hover .countOfLessons::after {\n          content: '';\n          width: 32px;\n          height: 32px;\n          display: block;\n          top: 14px;\n          position: relative;\n          background: url('countOfLessons-form.png') no-repeat;\n          background-size: 100%;\n          margin-left: 19px; }\n  .courses .courses-container div:hover .course-image-hover {\n      visibility: visible; }\n  @media screen and (max-width: 1023px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 325px;\n        height: 210px; } }\n  @media screen and (max-width: 767px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 520px;\n        height: 405px; } }\n  @media screen and (max-width: 599px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 340px;\n        height: 225px; } }\n  @media screen and (max-width: 424px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 295px;\n        height: 195px; } }\n  @media screen and (max-width: 374px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 240px;\n        height: 170px; } }\n  .courses .courses-container .show-section {\n      padding-top: 80px;\n      text-align: center; }\n  .courses .courses-container .show-section .show-button {\n        width: 172px;\n        height: 48px;\n        border: 2px solid #2196f3;\n        border-radius: 24px;\n        font-size: 16px;\n        line-height: 18px;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        margin: 0px 10px;\n        outline: none;\n        background-color: #fff;\n        color: #2196f3;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n  .courses .courses-container .show-section .show-button:hover {\n          background-color: #2196f3;\n          color: #fff;\n          box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n  @media screen and (max-width: 1023px) {\n  .filtration .search-hero {\n    width: 98%; } }\n  @media screen and (max-width: 820px) {\n  .filtration .search-hero .search {\n    padding-bottom: 20px;\n    width: 100%; }\n    .filtration .search-hero .search .styled-select {\n      width: 170px; }\n      .filtration .search-hero .search .styled-select select {\n        width: 100%; }\n  .filtration .search-hero .form-control {\n    width: 100%; } }\n  @media screen and (max-width: 599px) {\n  .filtration .search-hero .search .styled-select {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL29ubGluZS1jb3Vyc2VzL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXGNvdXJzZXMtcGFnZVxcb25saW5lLWNvdXJzZXNcXG9ubGluZS1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0VBQWdGO0VBQ2hGLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTtFQVZoQjtJQWNZLG1CQUFtQixFQUFBO0VBSy9CO0VBQ0csb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBeUIsRUFBQTtFQUg1QjtJQU1RLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVDQUFvQztJQUNwQyxZQUFZO0lBQ1osdUJBQXVCLEVBQUE7RUFoQi9CO01BbUJZLG9CQUFhO01BQWIsYUFBYTtNQUNiLGVBQWU7TUFDZix5QkFBOEI7Y0FBOUIsOEJBQThCO01BQzlCLGdCQUFnQixFQUFBO0VBdEI1QjtRQXlCZ0Isc0RBQXNFO1FBQ3RFLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdDQXBERjtRQXFERSxnQkFBZ0IsRUFBQTtFQTlCaEM7VUFpQ29CLHVCQUF1QjtVQUN2QixZQUFZO1VBQ1osZUFBZTtVQUNmLFlBQVk7VUFBRSxtRUFBQTtVQUNkLFlBQVk7VUFDWixjQUFjO1VBQ2Qsd0JBQXdCO1VBQ3hCLGdCQUFnQjtVQUNoQixnQkFBZ0IsRUFBQTtFQXpDcEM7WUE0Q3dCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0IsRUFBQTtFQWhEeEM7TUF1RFksWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIseUJBQXlCO01BQ3pCLHlCQWxGRSxFQUFBO0VBdUZkO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0VBRnJCO0lBS1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsb0JBQW9CLEVBQUE7RUFSNUI7TUFZZ0Isb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZTtNQUNmLHlCQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsYUFBYTtNQUNiLGVBQWUsRUFBQTtFQXZCL0I7UUEyQndCLFVBQVUsRUFBQTtFQTNCbEM7VUE4QjRCLHFCQUFxQjtVQUNyQixpQkFBaUI7VUFDakIsV0F4SGhCO1VBeUhnQiw4QkFBOEI7VUFDOUIsa0JBQWtCO1VBQ2xCLGtCQUFrQjtVQUNsQixrQkFBa0IsRUFBQTtFQXBDOUM7UUF5Q3dCLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixXQXJJWixFQUFBO0VBd0ZaO1FBaUR3QixtQkF4SVYsRUFBQTtFQXVGZDtRQXFEd0IsbUJBQW1CLEVBQUE7RUFyRDNDO1FBeUR3QixtQkEvSVQsRUFBQTtFQXNGZjtRQTZEd0IsbUJBQW1CLEVBQUE7RUE3RDNDO1FBa0VvQixjQUFjO1FBQ2QsV0EzSlI7UUE0SlEsV0FBVztRQUNYLGVBQWUsRUFBQTtFQXJFbkM7VUF3RXdCLGtDQUFrQztVQUNsQyxjQUFjLEVBQUE7RUF6RXRDO1FBOEVvQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHdCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLHlCQUFtQjtnQkFBbkIsbUJBQW1CLEVBQUE7RUF4RnZDO01BNkZnQixrQkFBa0I7TUFDbEIsb0JBQWE7TUFBYixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGVBQWU7TUFDZix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGFBQWE7TUFDYiwyQkFBMkI7TUFDM0Isa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTtFQXZHL0I7UUEwR29CLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHVDQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLGdCQUFnQixFQUFBO0VBbkhwQztVQXNId0Isa0JBQWtCO1VBQ2xCLGdCQUFnQjtVQUNoQixpQkFBaUIsRUFBQTtFQXhIekM7VUE0SHdCLFdBQVc7VUFDWCxXQUFXO1VBQ1gsWUFBWTtVQUNaLGNBQWM7VUFDZCxTQUFTO1VBQ1Qsa0JBQWtCO1VBQ2xCLG9EQUFvRTtVQUNwRSxxQkFBcUI7VUFDckIsaUJBQWlCLEVBQUE7RUFwSXpDO01BMklvQixtQkFBbUIsRUFBQTtFQUkzQjtNQS9JWjtRQWlKb0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjtFQUdMO01BdEpaO1FBd0pvQixZQUFZO1FBQ1osYUFBYSxFQUFBLEVBQ2hCO0VBR0w7TUE3Slo7UUErSm9CLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDaEI7RUFHTDtNQXBLWjtRQXNLb0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjtFQUdMO01BM0taO1FBNktvQixZQUFZO1FBQ1osYUFBYSxFQUFBLEVBQ2hCO0VBL0tqQjtNQW9MWSxpQkFBaUI7TUFDakIsa0JBQWtCLEVBQUE7RUFyTDlCO1FBd0xnQixZQUFZO1FBQ1osWUFBWTtRQUNaLHlCQWpSRjtRQWtSRSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2Isc0JBMVJKO1FBMlJJLGNBMVJGO1FBMlJFLDRCQUFvQjtRQUFwQixvQkFBb0IsRUFBQTtFQXBNcEM7VUF1TW9CLHlCQTlSTjtVQStSTSxXQWhTUjtVQWlTUSwrQ0FBNEMsRUFBQTtFQU9oRTtFQUNJO0lBRVEsVUFBVSxFQUFBLEVBQ2Q7RUFJUjtFQUNJO0lBR1ksb0JBQW9CO0lBQ3BCLFdBQVcsRUFBQTtJQUp2QjtNQU1lLFlBQVksRUFBQTtNQU4zQjtRQVFvQixXQUFXLEVBQUE7RUFSL0I7SUFjVyxXQUFXLEVBQUEsRUFDZDtFQUtaO0VBQ0k7SUFJZ0IsV0FBVyxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2VzLXBhZ2Uvb25saW5lLWNvdXJzZXMvb25saW5lLWNvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJGJnOiAjMjkyNzMxO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvd2VsY29tZS1zY2hvb2wtYmcucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRyYXRpb24ge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuXHJcbiAgIC5zZWFyY2gtaGVybyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206IDQ1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC5zdHlsZWQtc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3NlbGVjdC1hcnJvdy5wbmcnKSBuby1yZXBlYXQgOTglIDE1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4OyAvKiBJZiB5b3UgYWRkIHRvbyBtdWNoIHBhZGRpbmcgaGVyZSwgdGhlIG9wdGlvbnMgd29uJ3Qgc2hvdyBpbiBJRSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFjMWEyMjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWMxYTIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICB3aWR0aDogMjY1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY291cnNlcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgLmNvdXJzZXMtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzI1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA3LjVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnktc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLlBSTyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cy5QbHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2M0NmNkODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMuRnJlZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMuT3B0aW1hbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1YzRhZjc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAubmFtZUNvdXJzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjliOGJjO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudG90YWxUaW1lIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzIxMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjliOGJjO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY291cnNlLWltYWdlLWhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjczMTdhO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC5jb3VudE9mTGVzc29ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLDAuMTMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NvdW50T2ZMZXNzb25zLWZvcm0ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLmNvdXJzZS1pbWFnZS1ob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2UsIC5jb3Vyc2UtaW1hZ2UtaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAgICAgLmNvdXJzZS1pbWFnZSwgLmNvdXJzZS1pbWFnZS1ob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAgICAgICAgICAgICAuY291cnNlLWltYWdlLCAuY291cnNlLWltYWdlLWhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI0cHgpIHtcclxuICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2UsIC5jb3Vyc2UtaW1hZ2UtaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xyXG4gICAgICAgICAgICAgICAgLmNvdXJzZS1pbWFnZSwgLmNvdXJzZS1pbWFnZS1ob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaG93LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLnNob3ctYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAuZmlsdHJhdGlvbiB7XHJcbiAgICAgICAuc2VhcmNoLWhlcm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgLmZpbHRyYXRpb24ge1xyXG4gICAgICAgLnNlYXJjaC1oZXJvIHtcclxuICAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgIC5zdHlsZWQtc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgLmZpbHRyYXRpb24ge1xyXG4gICAgICAgIC5zZWFyY2gtaGVybyB7XHJcbiAgICAgICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgLnN0eWxlZC1zZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/courses-page/online-courses/online-courses.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/courses-page/online-courses/online-courses.component.ts ***!
  \*************************************************************************/
/*! exports provided: CoursesTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesTemplateComponent", function() { return CoursesTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoursesTemplateComponent = /** @class */ (function () {
    function CoursesTemplateComponent() {
        this.limit = 15;
        this.searchText = '';
        this.searchLevel = '';
        this.searchCategory = '';
        this.searchStatus = '';
        this.LevelsDropdown = [Levels[0], Levels[1], Levels[2]];
        this.CategoryDropdown = [Category[0], Category[1], Category[2], Category[3], Category[4], Category[5]];
        this.StatusDropdown = [Status[0], Status[1], Status[2], Status[3]];
        this.courses = [
            { id: 1, level: Levels[0], count: 12, totalTime: '16:20', url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [Category[0], Category[1]], status: Status[0] },
            { id: 2, level: Levels[1], count: 6, totalTime: '15:10', url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[1] },
            { id: 3, level: Levels[2], count: 13, totalTime: '20:00', url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [Category[0], Category[3]], status: Status[2] },
            { id: 4, level: Levels[0], count: 2, totalTime: '14:25', url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [Category[0], Category[4]], status: Status[3] },
            { id: 5, level: Levels[1], count: 1, totalTime: '5:00', url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [Category[0], Category[5]], status: Status[0] },
            { id: 6, level: Levels[2], count: 12, totalTime: '15:45', url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[3] },
            { id: 7, level: Levels[0], count: 15, totalTime: '20:16', url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2] },
            { id: 8, level: Levels[1], count: 7, totalTime: '17:20', url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Artwork', category: [Category[0], Category[3]], status: Status[1] },
            { id: 9, level: Levels[2], count: 4, totalTime: '12:00', url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [Category[0], Category[4]], status: Status[3] },
            { id: 10, level: Levels[0], count: 2, totalTime: '5:30', url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [Category[0], Category[5]], status: Status[1] },
            { id: 11, level: Levels[1], count: 15, totalTime: '12:30', url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [Category[0], Category[1]], status: Status[1] },
            { id: 12, level: Levels[1], count: 4, totalTime: '6:20', url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2] },
            { id: 13, level: Levels[2], count: 3, totalTime: '3:00', url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [Category[0], Category[3]], status: Status[3] },
            { id: 14, level: Levels[0], count: 3, totalTime: '3:45', url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [Category[0], Category[4]], status: Status[2] },
            { id: 15, level: Levels[1], count: 12, totalTime: '20:00', url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [Category[0], Category[5]], status: Status[1] },
            { id: 16, level: Levels[2], count: 6, totalTime: '15:40', url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Digital drawing of portrait', category: [Category[0], Category[1]], status: Status[1] },
            { id: 17, level: Levels[0], count: 5, totalTime: '4:15', url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape', category: [Category[0], Category[2]], status: Status[2] },
            { id: 18, level: Levels[1], count: 7, totalTime: '27:16', url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Promotional artwork', category: [Category[0], Category[3]], status: Status[3] },
            { id: 19, level: Levels[2], count: 16, totalTime: '16:15', url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [Category[0], Category[4]], status: Status[2] },
            { id: 20, level: Levels[0], count: 12, totalTime: '21:00', url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [Category[0], Category[5]], status: Status[1] },
            { id: 21, level: Levels[0], count: 2, totalTime: '7:45', url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [Category[0], Category[1]], status: Status[1] },
        ];
        this.isActivated = JSON.parse(localStorage.getItem('isActivated'));
    }
    CoursesTemplateComponent.prototype.show = function () {
        var loadCount = 6;
        if (this.courses.length - loadCount >= this.limit) {
            this.limit = this.courses.length - this.limit > loadCount ? this.limit + loadCount : this.courses.length;
        }
        else {
            this.limit = 15;
        }
    };
    CoursesTemplateComponent.prototype.changeLevel = function (e) {
        this.searchLevel = e.target.value == "All levels" ? '' : e.target.value;
    };
    CoursesTemplateComponent.prototype.changeCategory = function (e) {
        this.searchCategory = e.target.value == "All category" ? '' : e.target.value;
    };
    CoursesTemplateComponent.prototype.changeStatus = function (e) {
        this.searchStatus = e.target.value == "Course status" ? '' : e.target.value;
    };
    CoursesTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'courses-template',
            template: __webpack_require__(/*! ./online-courses.component.html */ "./src/app/courses-page/online-courses/online-courses.component.html"),
            styles: [__webpack_require__(/*! ./online-courses.component.scss */ "./src/app/courses-page/online-courses/online-courses.component.scss")]
        })
    ], CoursesTemplateComponent);
    return CoursesTemplateComponent;
}());

var Levels;
(function (Levels) {
    Levels[Levels["Beginner"] = 0] = "Beginner";
    Levels[Levels["Intermediate"] = 1] = "Intermediate";
    Levels[Levels["Advanced"] = 2] = "Advanced";
})(Levels || (Levels = {}));
var Category;
(function (Category) {
    Category[Category["DigitalArts"] = 0] = "DigitalArts";
    Category[Category["Portrait"] = 1] = "Portrait";
    Category[Category["Landscape"] = 2] = "Landscape";
    Category[Category["Animals"] = 3] = "Animals";
    Category[Category["Anatomy"] = 4] = "Anatomy";
    Category[Category["Characters"] = 5] = "Characters";
})(Category || (Category = {}));
var Status;
(function (Status) {
    Status[Status["PRO"] = 0] = "PRO";
    Status[Status["Plus"] = 1] = "Plus";
    Status[Status["Free"] = 2] = "Free";
    Status[Status["Optimal"] = 3] = "Optimal";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/courses-page/teachers/teachers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/courses-page/teachers/teachers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teachers container-fluid pr40 pl40\">\r\n        <div class=\"teachers-container\">\r\n            <div class=\"header-title w100\">\r\n                <h2>Our teachers</h2>\r\n                <img src=\"../../../assets/line.png\" alt=\"\">\r\n                <h6>All our teachers have certificates and diplomas.</h6>\r\n            </div>\r\n            <div class=\"teachers-section w100\">\r\n                <div class=\"teachers-section_block\">\r\n                    <owl-carousel style=\"max-width: 1030px; width: 100%\" [options]=\"carouselOptions\" [items]=\"teachers\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n                        <div class=\"item\" *ngFor=\"let teacher of teachers;let i= index\">\r\n                            <img class=\"slide-image\" src=\"{{teacher.photo}}\" style=\"width: 170px; height: 170px;\">\r\n                            <div class=\"slide-text pt10\" style='width: 170px; text-align: center; font-family: \"Open Sans\"; line-height: 24px;'>\r\n                                <span style='font-size: 15px; color:#b9b8bc; font-weight: 600;'>{{teacher.name}}</span><br>\r\n                                <span style='font-size: 12px; color:#6a696f; font-weight: 400;'>{{teacher.profession}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </owl-carousel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/courses-page/teachers/teachers.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/courses-page/teachers/teachers.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".teachers {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 75px;\n  background: #292731; }\n  .teachers .teachers-container {\n    width: 1170px;\n    text-align: center; }\n  .teachers .teachers-container .header-title {\n      padding-bottom: 65px;\n      color: white; }\n  .teachers .teachers-container .header-title img {\n        padding-bottom: 15px; }\n  .teachers .teachers-container .teachers-section {\n      padding-bottom: 100px; }\n  .teachers .teachers-container .teachers-section .teachers-section_block {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        flex-wrap: wrap; }\n  @media screen and (max-width: 1200px) {\n    .teachers .teachers-container {\n      width: 80%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL3RlYWNoZXJzL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXGNvdXJzZXMtcGFnZVxcdGVhY2hlcnNcXHRlYWNoZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBVlEsRUFBQTtFQU1aO0lBT1EsYUFBYTtJQUNiLGtCQUFrQixFQUFBO0VBUjFCO01BV1ksb0JBQW9CO01BQ3BCLFlBQVksRUFBQTtFQVp4QjtRQWVnQixvQkFBb0IsRUFBQTtFQWZwQztNQW9CWSxxQkFBcUIsRUFBQTtFQXBCakM7UUF1QmdCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHdCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLGVBQWUsRUFBQTtFQUszQjtJQTlCSjtNQWdDWSxVQUFVLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMtcGFnZS90ZWFjaGVycy90ZWFjaGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL2NvbG9yczpcclxuJGJnOiAjMjkyNzMxO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuLnRlYWNoZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZDogJGJnO1xyXG5cclxuICAgIC50ZWFjaGVycy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDY1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRlYWNoZXJzLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAgICAgICAgICAudGVhY2hlcnMtc2VjdGlvbl9ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgICAgICAudGVhY2hlcnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/courses-page/teachers/teachers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/courses-page/teachers/teachers.component.ts ***!
  \*************************************************************/
/*! exports provided: TeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersComponent", function() { return TeachersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeachersComponent = /** @class */ (function () {
    function TeachersComponent() {
        this.teachers = [
            { photo: '../../../assets/teacher-1.png', name: 'Daria Kruglova', profession: 'Illustrator' },
            { photo: '../../../assets/teacher_2.jpg', name: 'Michael Barney', profession: 'Character designer' },
            { photo: '../../../assets/teacher_3.jpg', name: 'Marta Bevacqua', profession: 'Artist architect' },
            { photo: '../../../assets/teacher_4.jpg', name: 'Scott Natyan', profession: 'Painter' },
            { photo: '../../../assets/teacher_5.jpg', name: 'Elizaveta Porodina', profession: 'Digital artist' },
            { photo: '../../../assets/teacher_6.jpg', name: 'Naeem Raza', profession: 'Painter' },
            { photo: '../../../assets/teacher-1.png', name: 'Daria Kruglova', profession: 'Illustrator' },
            { photo: '../../../assets/teacher_2.jpg', name: 'Michael Barney', profession: 'Character designer' },
            { photo: '../../../assets/teacher_3.jpg', name: 'Marta Bevacqua', profession: 'Artist architect' },
            { photo: '../../../assets/teacher_4.jpg', name: 'Scott Natyan', profession: 'Painter' },
            { photo: '../../../assets/teacher_5.jpg', name: 'Elizaveta Porodina', profession: 'Digital artist' },
            { photo: '../../../assets/teacher_6.jpg', name: 'Naeem Raza', profession: 'Painter' },
        ];
        this.carouselOptions = {
            items: 4,
            loop: true,
            center: true,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 2000,
            slideTransition: 'linear',
            navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 2,
                    nav: false,
                    dots: true,
                },
                768: {
                    items: 3,
                },
                1000: {
                    items: 4,
                },
                1201: {
                    items: 5
                }
            }
        };
    }
    TeachersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'teachers',
            template: __webpack_require__(/*! ./teachers.component.html */ "./src/app/courses-page/teachers/teachers.component.html"),
            styles: [__webpack_require__(/*! ./teachers.component.scss */ "./src/app/courses-page/teachers/teachers.component.scss")]
        })
    ], TeachersComponent);
    return TeachersComponent;
}());



/***/ }),

/***/ "./src/app/icons.ts":
/*!**************************!*\
  !*** ./src/app/icons.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookF */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookF.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faRedditAlien */ "./node_modules/@fortawesome/free-brands-svg-icons/faRedditAlien.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLinkedinIn */ "./node_modules/@fortawesome/free-brands-svg-icons/faLinkedinIn.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faGooglePlusG */ "./node_modules/@fortawesome/free-brands-svg-icons/faGooglePlusG.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTumblr */ "./node_modules/@fortawesome/free-brands-svg-icons/faTumblr.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faPinterestP */ "./node_modules/@fortawesome/free-brands-svg-icons/faPinterestP.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faWhatsapp */ "./node_modules/@fortawesome/free-brands-svg-icons/faWhatsapp.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faVk */ "./node_modules/@fortawesome/free-brands-svg-icons/faVk.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookMessenger */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookMessenger.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTelegramPlane */ "./node_modules/@fortawesome/free-brands-svg-icons/faTelegramPlane.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faMix */ "./node_modules/@fortawesome/free-brands-svg-icons/faMix.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faXing */ "./node_modules/@fortawesome/free-brands-svg-icons/faXing.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLine */ "./node_modules/@fortawesome/free-brands-svg-icons/faLine.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCommentAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMinus */ "./node_modules/@fortawesome/free-solid-svg-icons/faMinus.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEllipsisH */ "./node_modules/@fortawesome/free-solid-svg-icons/faEllipsisH.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLink */ "./node_modules/@fortawesome/free-solid-svg-icons/faLink.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamation */ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamation.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPrint */ "./node_modules/@fortawesome/free-solid-svg-icons/faPrint.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEnvelope */ "./node_modules/@fortawesome/free-solid-svg-icons/faEnvelope.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22__);























var icons = [
    _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"], _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__["faTwitter"], _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__["faLinkedinIn"], _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__["faGooglePlusG"], _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__["faPinterestP"], _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__["faRedditAlien"], _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__["faTumblr"],
    _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__["faWhatsapp"], _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__["faVk"], _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__["faFacebookMessenger"], _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__["faTelegramPlane"], _fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12__["faMix"], _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__["faXing"], _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15__["faCommentAlt"], _fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14__["faLine"],
    _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22__["faEnvelope"], _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21__["faCheck"], _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20__["faPrint"], _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19__["faExclamation"], _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__["faLink"], _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17__["faEllipsisH"], _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16__["faMinus"]
];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add.apply(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"], icons);


/***/ }),

/***/ "./src/app/main-page/about-speed-painting/about-speed-painting.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main-page/about-speed-painting/about-speed-painting.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-speed container-fluid pr40 pl40\">\r\n    <div class=\"header-title\">\r\n        <span class=\"header-title_main\">About Speed Painting</span><br>\r\n        <img src=\"../../../assets/line.png\" alt=\"\"><br>\r\n        <div class=\"header-title_secondary\">\r\n            <span>You can draw pictures online on the site while recording the whole process of drawing</span><br>\r\n            <span>and uploading your videos for other artists to popular social networks such as:</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"social-networks\">\r\n        <div class=\"social-networks_block\">\r\n            <div class=\"social-networks_row\">\r\n                <div *ngFor=\"let socialNetwork of socialNetworksFirstRow; let i=index\">\r\n                    <img [src]=\"socialNetwork.url\" [alt]=\"socialNetwork.name\"><br>\r\n                    <span>{{socialNetwork.name}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"social-networks_row\">\r\n                <div *ngFor=\"let network of socialNetworksSecondRow; let i=index\">\r\n                        <img [src]=\"network.url\" [alt]=\"network.name\"><br>\r\n                        <span>{{network.name}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"personal-portfolio\">\r\n        <div class=\"personal-portfolio_block\">\r\n            <div class=\"personal-portfolio_text\">\r\n                <span>Personal portfolio</span><br><br>\r\n                <span>Don’t you have time to finish the drawing? Don’t worry!\r\n                        You can always continue drawing by visiting your Personal\r\n                        Portfolio. All works will be available in the original format\r\n                        so you can always detail and improve your works.</span>\r\n            </div>\r\n\r\n            <div class=\"circ1\"></div>\r\n            <div class=\"circ2\"></div>\r\n\r\n            <div class=\"personal-portfolio_image\">\r\n                <img src=\"../../../assets/bg.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"drawing-process\">\r\n        <div class=\"drawing-process_block\">\r\n            <div class=\"drawing-process_image\">\r\n                <img src=\"../../../assets/macbook.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"circ1\"></div>\r\n            <div class=\"circ2\"></div>\r\n\r\n            <div class=\"drawing-process_text\">\r\n                <span>Drawing process</span><br><br>\r\n                <span>Thanks to Video drawing you can capture the process\r\n                        of creating your picture. Save your skills on your\r\n                        memory cloud and share your success with friends!</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/about-speed-painting/about-speed-painting.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main-page/about-speed-painting/about-speed-painting.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-speed {\n  background: url('about_speed_painting_mask.png') no-repeat center center fixed;\n  background-size: cover; }\n  .about-speed .header-title {\n    text-align: center;\n    padding-top: 120px; }\n  .about-speed .header-title .header-title_main {\n      font-size: 42px;\n      line-height: 60px;\n      font-family: \"Work Sans\";\n      color: #fff;\n      font-weight: 600; }\n  .about-speed .header-title .header-title_secondary {\n      font-size: 16px;\n      line-height: 30px;\n      font-family: \"Open Sans\";\n      color: #fff;\n      padding: 45px 0; }\n  .about-speed .header-title img {\n      padding: 30px 0 0; }\n  .about-speed .social-networks {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    flex-wrap: wrap; }\n  .about-speed .social-networks .social-networks_block {\n      text-align: center;\n      color: #fff;\n      width: 50%;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center; }\n  .about-speed .social-networks .social-networks_block .social-networks_row {\n        display: -webkit-box;\n        display: flex; }\n  .about-speed .social-networks .social-networks_block .social-networks_row div {\n          width: 150px;\n          padding: 20px 0; }\n  .about-speed .social-networks .social-networks_block .social-networks_row div img {\n            margin-bottom: 10px; }\n  .about-speed .personal-portfolio, .about-speed .drawing-process {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    color: #fff; }\n  .about-speed .personal-portfolio {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding-top: 165px; }\n  .about-speed .personal-portfolio .personal-portfolio_block {\n      display: -webkit-box;\n      display: flex;\n      width: 1200px;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center; }\n  .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_image {\n        display: -webkit-box;\n        display: flex; }\n  .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_text {\n        width: 450px; }\n  .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_text span:first-of-type {\n          font-size: 1.2rem;\n          font-weight: bold; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ1 {\n        width: 50px;\n        height: 50px;\n        background: url('personal-portfolio_btn.png') no-repeat;\n        position: relative;\n        top: -175px;\n        left: 505px; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ1:after {\n          content: \"\";\n          position: absolute;\n          bottom: 35px;\n          left: 26px;\n          height: 177px;\n          border-left: 1px solid #2196f3; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ2 {\n        width: 15px;\n        height: 15px;\n        background: #2196f3;\n        border-radius: 50%;\n        position: relative;\n        right: 483px;\n        top: -105px; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ2:after {\n          content: \"\";\n          position: absolute;\n          bottom: 10px;\n          left: 6px;\n          height: 254px;\n          border-left: 1px solid #2196f3; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ2:before {\n          content: \"\";\n          position: absolute;\n          bottom: 34px;\n          left: 8px;\n          height: 230px;\n          border-top: 1px solid #2196f3;\n          width: 860px; }\n  .about-speed .drawing-process {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .about-speed .drawing-process .drawing-process_block {\n      display: -webkit-box;\n      display: flex;\n      width: 1200px;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center;\n      padding: 75px 0; }\n  .about-speed .drawing-process .drawing-process_block .drawing-process_image {\n        position: relative;\n        padding-right: 29px; }\n  .about-speed .drawing-process .drawing-process_block .drawing-process_image img {\n          height: 385px; }\n  .about-speed .drawing-process .drawing-process_block .drawing-process_text span:first-of-type {\n        font-size: 1.2rem;\n        font-weight: bold; }\n  .about-speed .drawing-process .drawing-process_block .circ1 {\n        width: 311px;\n        height: 70px;\n        background: url('drawing-process_btn.png') no-repeat;\n        position: relative;\n        top: -10px;\n        right: 330px; }\n  .about-speed .drawing-process .drawing-process_block .circ1:after {\n          content: \"\";\n          position: absolute;\n          bottom: 0;\n          left: 65px;\n          height: 30px;\n          border-top: 1px solid #2196f3;\n          width: 365px; }\n  .about-speed .drawing-process .drawing-process_block .circ2 {\n        width: 40px;\n        height: 15px;\n        background: #2196f3;\n        border-radius: 50%;\n        position: relative;\n        left: -25px;\n        top: -5px; }\n  @media screen and (max-width: 1280px) {\n    .about-speed .personal-portfolio {\n      padding-top: 30px; }\n      .about-speed .personal-portfolio .personal-portfolio_block {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n                flex-direction: column-reverse;\n        -webkit-box-pack: center;\n                justify-content: center;\n        width: 100%; }\n        .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_image {\n          display: -webkit-box;\n          display: flex;\n          width: 100%;\n          -webkit-box-pack: center;\n                  justify-content: center; }\n        .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_text {\n          text-align: center; }\n        .about-speed .personal-portfolio .personal-portfolio_block .circ2, .about-speed .personal-portfolio .personal-portfolio_block .circ1 {\n          display: none; }\n    .about-speed .drawing-process {\n      padding-top: 30px; }\n      .about-speed .drawing-process .drawing-process_block {\n        display: -webkit-box;\n        display: flex;\n        flex-wrap: wrap;\n        -webkit-box-pack: center;\n                justify-content: center;\n        width: 100%; }\n        .about-speed .drawing-process .drawing-process_block .drawing-process_image {\n          display: -webkit-box;\n          display: flex;\n          width: 100%;\n          -webkit-box-pack: center;\n                  justify-content: center; }\n        .about-speed .drawing-process .drawing-process_block .drawing-process_text {\n          width: 450px;\n          text-align: center; }\n        .about-speed .drawing-process .drawing-process_block .circ2, .about-speed .drawing-process .drawing-process_block .circ1 {\n          display: none; } }\n  @media screen and (max-width: 1024px) {\n    .about-speed .header-title .header-title_secondary {\n      font-size: 16px; }\n    .about-speed .header-title .header-title_main {\n      font-size: 50px; }\n    .about-speed .social-networks .social-networks_block {\n      width: 490px; }\n      .about-speed .social-networks .social-networks_block .social-networks_row {\n        flex-wrap: wrap;\n        -webkit-box-pack: center;\n                justify-content: center; } }\n  @media screen and (max-width: 800px) {\n    .about-speed .drawing-process .drawing-process_block .drawing-process_image {\n      padding: 0%; }\n      .about-speed .drawing-process .drawing-process_block .drawing-process_image img {\n        height: 180px; }\n    .about-speed .drawing-process .drawing-process_block .drawing-process_text {\n      width: 100%; }\n    .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_image img {\n      height: 300px; }\n    .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_text {\n      width: 100%; } }\n  @media screen and (max-width: 425px) {\n    .about-speed .social-networks .social-networks_block .social-networks_row div {\n      width: 120px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL2Fib3V0LXNwZWVkLXBhaW50aW5nL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXG1haW4tcGFnZVxcYWJvdXQtc3BlZWQtcGFpbnRpbmdcXGFib3V0LXNwZWVkLXBhaW50aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksOEVBQTRGO0VBQzVGLHNCQUFzQixFQUFBO0VBRjFCO0lBS1Esa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBTjFCO01BU1ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsV0FmQTtNQWdCQSxnQkFBZ0IsRUFBQTtFQWI1QjtNQWlCWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QixXQXZCQTtNQXdCQSxlQUFlLEVBQUE7RUFyQjNCO01BeUJZLGlCQUFpQixFQUFBO0VBekI3QjtJQThCUSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQTtFQWhDdkI7TUFtQ1ksa0JBQWtCO01BQ2xCLFdBdkNBO01Bd0NBLFVBQVU7TUFDVixvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2Ysd0JBQXVCO2NBQXZCLHVCQUF1QixFQUFBO0VBeENuQztRQTJDZ0Isb0JBQWE7UUFBYixhQUFhLEVBQUE7RUEzQzdCO1VBOENvQixZQUFZO1VBQ1osZUFBZSxFQUFBO0VBL0NuQztZQWtEd0IsbUJBQW1CLEVBQUE7RUFsRDNDO0lBMERRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixXQWhFSSxFQUFBO0VBR1o7SUFpRVEsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixrQkFBa0IsRUFBQTtFQW5FMUI7TUFzRVksb0JBQWE7TUFBYixhQUFhO01BQ2IsYUFBYTtNQUNiLHlCQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIseUJBQW1CO2NBQW5CLG1CQUFtQixFQUFBO0VBekUvQjtRQTZFZ0Isb0JBQWE7UUFBYixhQUFhLEVBQUE7RUE3RTdCO1FBaUZnQixZQUFZLEVBQUE7RUFqRjVCO1VBb0ZvQixpQkFBaUI7VUFDakIsaUJBQWlCLEVBQUE7RUFyRnJDO1FBMEZnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLHVEQUF1RTtRQUN2RSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFdBQVcsRUFBQTtFQS9GM0I7VUFrR29CLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFVBQVU7VUFDVixhQUFhO1VBQ2IsOEJBekdOLEVBQUE7RUFFZDtRQTZHZ0IsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFqSEY7UUFrSEUsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osV0FBVyxFQUFBO0VBbkgzQjtVQXNIb0IsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osU0FBUztVQUNULGFBQWE7VUFDYiw4QkE3SE4sRUFBQTtFQUVkO1VBK0hvQixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLFlBQVk7VUFDWixTQUFTO1VBQ1QsYUFBYTtVQUNiLDZCQXRJTjtVQXVJTSxZQUFZLEVBQUE7RUFySWhDO0lBNElRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQTdJL0I7TUFnSlksb0JBQWE7TUFBYixhQUFhO01BQ2IsYUFBYTtNQUNiLHlCQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7RUFwSjNCO1FBd0pnQixrQkFBa0I7UUFDbEIsbUJBQW1CLEVBQUE7RUF6Sm5DO1VBNEpvQixhQUFhLEVBQUE7RUE1SmpDO1FBbUtvQixpQkFBaUI7UUFDakIsaUJBQWlCLEVBQUE7RUFwS3JDO1FBMktnQixZQUFZO1FBQ1osWUFBWTtRQUNaLG9EQUFrRTtRQUNsRSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFlBQVksRUFBQTtFQWhMNUI7VUFtTG9CLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsU0FBUztVQUNULFVBQVU7VUFDVixZQUFZO1VBQ1osNkJBMUxOO1VBMkxNLFlBQVksRUFBQTtFQXpMaEM7UUE4TGdCLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBbE1GO1FBbU1FLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVMsRUFBQTtFQUtyQjtJQXpNSjtNQTJNWSxpQkFBaUIsRUFBQTtNQTNNN0I7UUE4TWdCLDRCQUE4QjtRQUE5Qiw4QkFBOEI7Z0JBQTlCLDhCQUE4QjtRQUM5Qix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2QixXQUFXLEVBQUE7UUFoTjNCO1VBbU5vQixvQkFBYTtVQUFiLGFBQWE7VUFDYixXQUFXO1VBQ1gsd0JBQXVCO2tCQUF2Qix1QkFBdUIsRUFBQTtRQXJOM0M7VUF5Tm9CLGtCQUFrQixFQUFBO1FBek50QztVQTZOb0IsYUFBYSxFQUFBO0lBN05qQztNQW1PWSxpQkFBaUIsRUFBQTtNQW5PN0I7UUFzT2dCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLGVBQWU7UUFDZix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2QixXQUFXLEVBQUE7UUF6TzNCO1VBNE9vQixvQkFBYTtVQUFiLGFBQWE7VUFDYixXQUFXO1VBQ1gsd0JBQXVCO2tCQUF2Qix1QkFBdUIsRUFBQTtRQTlPM0M7VUFrUG9CLFlBQVk7VUFDWixrQkFBa0IsRUFBQTtRQW5QdEM7VUF1UG9CLGFBQWEsRUFBQSxFQUNoQjtFQUtiO0lBN1BKO01BZ1FnQixlQUFlLEVBQUE7SUFoUS9CO01Bb1FnQixlQUFlLEVBQUE7SUFwUS9CO01BMFFnQixZQUFZLEVBQUE7TUExUTVCO1FBNlFvQixlQUFlO1FBQ2Ysd0JBQXVCO2dCQUF2Qix1QkFBdUIsRUFBQSxFQUMxQjtFQUtiO0lBcFJKO01Bd1JvQixXQUFXLEVBQUE7TUF4Ui9CO1FBMlJ3QixhQUFhLEVBQUE7SUEzUnJDO01BZ1NvQixXQUFXLEVBQUE7SUFoUy9CO01BeVN3QixhQUFhLEVBQUE7SUF6U3JDO01BOFNvQixXQUFXLEVBQUEsRUFDZDtFQUtiO0lBcFRKO01BeVR3QixZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9hYm91dC1zcGVlZC1wYWludGluZy9hYm91dC1zcGVlZC1wYWludGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29sb3JzOlxyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG5cclxuLmFib3V0LXNwZWVkIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYWJvdXRfc3BlZWRfcGFpbnRpbmdfbWFzay5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEyMHB4O1xyXG5cclxuICAgICAgICAuaGVhZGVyLXRpdGxlX21haW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZV9zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0NXB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1uZXR3b3JrcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgIC5zb2NpYWwtbmV0d29ya3NfYmxvY2t7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5zb2NpYWwtbmV0d29ya3Nfcm93e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wZXJzb25hbC1wb3J0Zm9saW8sIC5kcmF3aW5nLXByb2Nlc3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6JHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wZXJzb25hbC1wb3J0Zm9saW8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2NXB4O1xyXG5cclxuICAgICAgICAucGVyc29uYWwtcG9ydGZvbGlvX2Jsb2NrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC5wZXJzb25hbC1wb3J0Zm9saW9faW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBlcnNvbmFsLXBvcnRmb2xpb190ZXh0e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW46Zmlyc3Qtb2YtdHlwZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNpcmMxIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvcGVyc29uYWwtcG9ydGZvbGlvX2J0bi5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xNzVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzdweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jaXJjMiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQ4M3B4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjU0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDM0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZHJhd2luZy1wcm9jZXNzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuZHJhd2luZy1wcm9jZXNzX2Jsb2Nre1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDc1cHggMDtcclxuXHJcblxyXG4gICAgICAgICAgICAuZHJhd2luZy1wcm9jZXNzX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI5cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM4NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZHJhd2luZy1wcm9jZXNzX3RleHQge1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW46Zmlyc3Qtb2YtdHlwZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAuY2lyYzEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMxMXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9kcmF3aW5nLXByb2Nlc3NfYnRuLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLmNpcmMyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcclxuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAucGVyc29uYWwtcG9ydGZvbGlvIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICAucGVyc29uYWwtcG9ydGZvbGlvX2Jsb2Nre1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAucGVyc29uYWwtcG9ydGZvbGlvX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wZXJzb25hbC1wb3J0Zm9saW9fdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNpcmMyLCAuY2lyYzEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kcmF3aW5nLXByb2Nlc3Mge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAuZHJhd2luZy1wcm9jZXNzX2Jsb2Nre1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5kcmF3aW5nLXByb2Nlc3NfaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyYXdpbmctcHJvY2Vzc190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jaXJjMiwgLmNpcmMxIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAuaGVhZGVyLXRpdGxle1xyXG4gICAgICAgICAgICAuaGVhZGVyLXRpdGxlX3NlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9tYWluIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY2lhbC1uZXR3b3Jrc3tcclxuICAgICAgICAgICAgLnNvY2lhbC1uZXR3b3Jrc19ibG9ja3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuc29jaWFsLW5ldHdvcmtzX3Jvd3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAuZHJhd2luZy1wcm9jZXNzIHtcclxuICAgICAgICAgICAgLmRyYXdpbmctcHJvY2Vzc19ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAuZHJhd2luZy1wcm9jZXNzX2ltYWdlIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcmF3aW5nLXByb2Nlc3NfdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBlcnNvbmFsLXBvcnRmb2xpbyB7XHJcbiAgICAgICAgICAgIC5wZXJzb25hbC1wb3J0Zm9saW9fYmxvY2t7XHJcbiAgICAgICAgICAgICAgICAucGVyc29uYWwtcG9ydGZvbGlvX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVyc29uYWwtcG9ydGZvbGlvX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgLnNvY2lhbC1uZXR3b3JrcyB7XHJcbiAgICAgICAgICAgIC5zb2NpYWwtbmV0d29ya3NfYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1uZXR3b3Jrc19yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-page/about-speed-painting/about-speed-painting.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main-page/about-speed-painting/about-speed-painting.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AboutSpeedPaintingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutSpeedPaintingComponent", function() { return AboutSpeedPaintingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutSpeedPaintingComponent = /** @class */ (function () {
    function AboutSpeedPaintingComponent() {
        this.socialNetworksFirstRow = [
            { url: '../../../assets/creative-cloud.png', name: 'Creative Cloud' },
            { url: '../../../assets/behance.png', name: 'Behance' },
            { url: '../../../assets/Dribbble.png', name: 'Dribbble' },
            { url: '../../../assets/Pinterest.png', name: 'Pinterest' },
            { url: '../../../assets/Facebook.png', name: 'Facebook' },
            { url: '../../../assets/Instagram.png', name: 'Instagram' }
        ];
        this.socialNetworksSecondRow = [
            { url: '../../../assets/Awwwards.png', name: 'Awwwards' },
            { url: '../../../assets/DeviantArt.png', name: 'DeviantArt' },
            { url: '../../../assets/Vimeo.png', name: 'Vimeo' },
            { url: '../../../assets/YouTube.png', name: 'YouTube' },
            { url: '../../../assets/Twitter.png', name: 'Twitter' },
            { url: '../../../assets/Tumblr.png', name: 'Tumblr' }
        ];
    }
    AboutSpeedPaintingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'about-speed-painting',
            template: __webpack_require__(/*! ./about-speed-painting.component.html */ "./src/app/main-page/about-speed-painting/about-speed-painting.component.html"),
            styles: [__webpack_require__(/*! ./about-speed-painting.component.scss */ "./src/app/main-page/about-speed-painting/about-speed-painting.component.scss")]
        })
    ], AboutSpeedPaintingComponent);
    return AboutSpeedPaintingComponent;
}());



/***/ }),

/***/ "./src/app/main-page/log-in/log-in.component.html":
/*!********************************************************!*\
  !*** ./src/app/main-page/log-in/log-in.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"log-in\">\r\n    <div class=\"log-in_section\">\r\n        <div class=\"log-in_close\" (click)=\"close()\"><img src=\"../../../assets/cancel.png\" alt=\"Close\"></div>\r\n        <form [formGroup]=\"form\">\r\n            <div class=\"log-in_data\">\r\n                <span class=\"log-in_title\"> Log in to Speed Painting</span>\r\n                <div class=\"log-in_inputs\">\r\n                    <input formControlName=\"email\" type=\"email\" placeholder=\"Your email\" required>\r\n                    <input formControlName=\"password\" type=\"password\" placeholder=\"Your password\" required>\r\n                    <a href=\"#\">Forgot your password?</a>\r\n                </div>\r\n            </div>\r\n            <button (click)=\"changeLocation()\" [ngClass]=\"{ disabled: !form.valid }\" [disabled]=\"!form.valid\" class=\"log-in_button\">Log in</button> \r\n        </form>\r\n\r\n        <div class=\"log-in_ask\">\r\n            <span>Don't have an account? <a href=\"#\">Join</a></span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/log-in/log-in.component.scss":
/*!********************************************************!*\
  !*** ./src/app/main-page/log-in/log-in.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".log-in {\n  display: -webkit-box;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  z-index: 2;\n  background: #000000a3; }\n  .log-in .log-in_section {\n    width: 416px;\n    height: 445px;\n    border-radius: 6px;\n    background-color: #ffffff;\n    padding: 15px 45px 35px; }\n  .log-in .log-in_section .log-in_close {\n      position: relative;\n      float: right;\n      cursor: pointer;\n      right: -20px; }\n  .log-in .log-in_section form {\n      padding-top: 25px; }\n  .log-in .log-in_section form .log-in_data {\n        text-align: center; }\n  .log-in .log-in_section form .log-in_data .log-in_title {\n          font-size: 30px;\n          line-height: 36px;\n          color: #232128;\n          font-family: \"Work Sans\";\n          font-weight: 600; }\n  .log-in .log-in_section form .log-in_data .log-in_inputs {\n          padding-top: 20px; }\n  .log-in .log-in_section form .log-in_data .log-in_inputs input {\n            width: 320px;\n            height: 48px;\n            border-radius: 24px;\n            background-color: #ffeded;\n            border: 1px solid #dcdcdd;\n            padding: 15px;\n            margin: 10px 0 0;\n            outline: none;\n            cursor: text; }\n  .log-in .log-in_section form .log-in_data .log-in_inputs a {\n            display: block;\n            padding-top: 5px;\n            padding-bottom: 25px;\n            text-align: left;\n            font-size: 14px;\n            line-height: 24px;\n            color: #6a696f;\n            font-family: \"Open Sans\";\n            font-weight: 400;\n            text-decoration: underline; }\n  .log-in .log-in_section form .log-in_data .log-in_inputs a:hover {\n              text-decoration: none; }\n  .log-in .log-in_section form .log-in_button {\n        width: 320px;\n        height: 48px;\n        border: none;\n        border-radius: 24px;\n        background-color: #7fc400;\n        outline: none;\n        font-size: 16px;\n        color: #ffffff;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center;\n        text-decoration: none; }\n  .log-in .log-in_section form .log-in_button:hover {\n          box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5); }\n  .log-in .log-in_section form .log-in_button.disabled {\n        padding: 5px 10px;\n        border: 1px solid #999999;\n        background-color: #cccccc;\n        color: #666666;\n        box-shadow: none; }\n  .log-in .log-in_section .log-in_ask {\n      text-align: center;\n      padding-top: 35px; }\n  .log-in .log-in_section .log-in_ask span {\n        font-size: 16px;\n        line-height: 18px;\n        color: #232128;\n        font-family: \"Open Sans\";\n        font-weight: 400; }\n  @media screen and (max-width: 425px) {\n    .log-in .log-in_section {\n      width: 315px; }\n      .log-in .log-in_section form .log-in_data .log-in_inputs input {\n        width: 220px; }\n      .log-in .log-in_section form .log-in_button {\n        width: 220px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL2xvZy1pbi9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXGxvZy1pblxcbG9nLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixxQkFoQlUsRUFBQTtFQVFkO0lBV1EsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBckJPO0lBc0JQLHVCQUF1QixFQUFBO0VBZi9CO01Ba0JZLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZUFBZTtNQUNmLFlBQVksRUFBQTtFQXJCeEI7TUF5QlksaUJBQWlCLEVBQUE7RUF6QjdCO1FBNEJnQixrQkFBa0IsRUFBQTtFQTVCbEM7VUErQm9CLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsY0F0Q0Q7VUF1Q0Msd0JBQXdCO1VBQ3hCLGdCQUFnQixFQUFBO0VBbkNwQztVQXVDb0IsaUJBQWlCLEVBQUE7RUF2Q3JDO1lBMEN3QixZQUFZO1lBQ1osWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix5QkFqRE47WUFrRE0seUJBakRGO1lBa0RFLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLFlBQVksRUFBQTtFQWxEcEM7WUFzRHdCLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBOURMO1lBK0RLLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsMEJBQTBCLEVBQUE7RUEvRGxEO2NBa0U0QixxQkFBcUIsRUFBQTtFQWxFakQ7UUF5RWdCLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix5QkFuRkY7UUFvRkUsYUFBYTtRQUNiLGVBQWU7UUFDZixjQXZGRDtRQXdGQyx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHdCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLHlCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLHFCQUFxQixFQUFBO0VBdEZyQztVQXlGb0IsOENBQThDLEVBQUE7RUF6RmxFO1FBOEZnQixpQkFBaUI7UUFDakIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsZ0JBQWdCLEVBQUE7RUFsR2hDO01BdUdZLGtCQUFrQjtNQUNsQixpQkFBaUIsRUFBQTtFQXhHN0I7UUEyR2dCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FsSEc7UUFtSEgsd0JBQXdCO1FBQ3hCLGdCQUFnQixFQUFBO0VBSzVCO0lBcEhKO01Bc0hZLFlBQVksRUFBQTtNQXRIeEI7UUE0SDRCLFlBQVksRUFBQTtNQTVIeEM7UUFrSW9CLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmc6ICMwMDAwMDBhMztcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kbGltZTogIzdmYzQwMDtcclxuJGRhcmstdGV4dDogIzIzMjEyODtcclxuJGxpZ2h0LWJnOiAjZmZlZGVkO1xyXG4kbGlnaHQtYm9yZGVyOiAjZGNkY2RkO1xyXG4kZ3JleS1saW5rOiAjNmE2OTZmO1xyXG5cclxuLmxvZy1pbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcblxyXG4gICAgLmxvZy1pbl9zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggNDVweCAzNXB4O1xyXG5cclxuICAgICAgICAubG9nLWluX2Nsb3NlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgLmxvZy1pbl9kYXRhIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAubG9nLWluX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrLXRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubG9nLWluX2lucHV0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWJvcmRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5LWxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9nLWluX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbWU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZy1pbl9idXR0b24uZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZy1pbl9hc2sge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyay10ZXh0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgLmxvZy1pbl9zZWN0aW9ue1xyXG4gICAgICAgICAgICB3aWR0aDogMzE1cHg7XHJcblxyXG4gICAgICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICAgICAgLmxvZy1pbl9kYXRhe1xyXG4gICAgICAgICAgICAgICAgICAgIC5sb2ctaW5faW5wdXRze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubG9nLWluX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4OyAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-page/log-in/log-in.component.ts":
/*!******************************************************!*\
  !*** ./src/app/main-page/log-in/log-in.component.ts ***!
  \******************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LogInComponent = /** @class */ (function () {
    function LogInComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LogInComponent.prototype.change = function (isHidden) {
        this.onChanged.emit(isHidden);
        this.isHidden = isHidden;
    };
    LogInComponent.prototype.setStyleAttribute = function (element, attrs) {
        if (attrs !== undefined) {
            Object.keys(attrs).forEach(function (key) {
                element.style[key] = attrs[key];
            });
        }
    };
    LogInComponent.prototype.close = function () {
        this.change(true);
        var elem = document.body;
        this.setStyleAttribute(elem, { 'overflow': 'auto' });
    };
    LogInComponent.prototype.changeLocation = function () {
        localStorage.setItem('isActivated', 'true');
        window.location.href = '/myProfile';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], LogInComponent.prototype, "isHidden", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LogInComponent.prototype, "onChanged", void 0);
    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/main-page/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.scss */ "./src/app/main-page/log-in/log-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-footer/main-footer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/main-page/main-footer/main-footer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-footer-background container-fluid pr40 pl40\">\r\n    <div class=\"main-footer_navigation\">\r\n        <nav>\r\n            <div class=\"pb10\"><span class=\"bold\">About school</span></div>\r\n            <a [routerLink]=\"'/courses'\"><span>Online courses</span></a><br>\r\n            <a [routerLink]=\"'/projects'\"><span>Projects</span></a><br>\r\n            <a [routerLink]=\"'/students'\"><span>Students</span></a><br>\r\n        </nav>\r\n        <nav>\r\n            <div class=\"pb10\"><span class=\"bold\">Partners</span><br></div>\r\n            <a href=\"javascript:void(0)\" (click)=\"openModal('partner-modal')\"><span>Become a partner</span></a><br>\r\n            <a [routerLink]=\"'/partners'\"><span>Our partners</span></a><br>\r\n        </nav>\r\n        <nav>\r\n            <div class=\"pb10\"><span class=\"bold light\">Help</span></div>\r\n            <a href=\"javascript:void(0)\"><span class=\"dark\">Help center</span></a><br>\r\n            <a href=\"javascript:void(0)\"><span>Video School</span></a><br>\r\n            <a href=\"javascript:void(0)\"><span>FAQ</span></a><br>\r\n            <a href=\"javascript:void(0)\"><span>Forums</span></a><br>\r\n        </nav> \r\n        <nav>\r\n            <div class=\"pb10\"><span class=\"bold\">Upgrade artist</span></div>\r\n            <a href=\"javascript:void(0);\" (click)=\"openModal('pricing-plan')\">\r\n                <div class=\"flex\">\r\n                    <span>Speed Painting</span>\r\n                    <div class=\"status\">\r\n                        <span>Optimal</span>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <a href=\"javascript:void(0);\" (click)=\"openModal('pricing-plan')\">\r\n                <div class=\"flex\">\r\n                    <span>Speed Painting</span>\r\n                    <div class=\"status\">\r\n                        <span>Plus</span>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n            <a href=\"javascript:void(0);\" (click)=\"openModal('pricing-plan')\">\r\n                <div class=\"flex\">\r\n                    <span>Speed Painting</span>\r\n                    <div class=\"status\">\r\n                        <span>PRO</span>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </nav>\r\n    </div>\r\n    \r\n    <nav>\r\n        <div class=\"pb10\"><span class=\"bold\">Subscribe</span></div>\r\n        <div>\r\n            <form action=\"#\" method=\"post\">\r\n                <input class=\"mb10\" type=\"email\" name=\"email\" autocomplete=\"off\" placeholder=\"Your email\">\r\n                <input type=\"submit\" value=\"SUBSCRIBE\">\r\n            </form>\r\n            <div class=\"space-between\">\r\n                <a href=\"https://www.facebook.com/\" target=\"blank\"><div class=\"icon fb-icon\"></div></a>\r\n                <a href=\"https://twitter.com/\" target=\"blank\"><div class=\"icon tw-icon\"></div></a>\r\n                <a href=\"www.linkedin.com/‎\" target=\"blank\"><div class=\"icon in-icon\"></div></a>\r\n                <a href=\"https://www.instagram.com/\" target=\"blank\"><div class=\"icon inst-icon\"></div></a>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</div>\r\n<div class=\"under-footer container-fluid pr40 pl40\">\r\n    <div class=\"space-between flex-align-center\">\r\n        <a [routerLink]=\"routerLinkValue\"><img src=\"../../../assets/logotype-footer.png\" alt=\"logotype\"></a>\r\n        <span>V.Korytska, 2019</span>\r\n    </div>\r\n</div>\r\n<pricing-plan></pricing-plan>\r\n<partner-modal></partner-modal>"

/***/ }),

/***/ "./src/app/main-page/main-footer/main-footer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/main-page/main-footer/main-footer.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-footer-background {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: #232128;\n  padding-top: 100px;\n  padding-bottom: 100px; }\n  .main-footer-background .main-footer_navigation {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap; }\n  .main-footer-background .main-footer_navigation nav {\n      padding-right: 50px; }\n  .main-footer-background .status {\n    display: inline-block;\n    padding: 0px 6px;\n    border-radius: 4px;\n    color: #7c7b84;\n    background: #383643;\n    font-size: 12px;\n    margin-left: 5px; }\n  .main-footer-background span {\n    color: #747279;\n    line-height: 1.5; }\n  .main-footer-background span.bold {\n    color: #b9b8bc; }\n  .main-footer-background a {\n    color: #747279; }\n  .main-footer-background .icon {\n    width: 20px;\n    height: 20px; }\n  .main-footer-background .fb-icon {\n    background: url('fb-icon.png') no-repeat center; }\n  .main-footer-background .tw-icon {\n    background: url('tw-icon.png') no-repeat center; }\n  .main-footer-background .in-icon {\n    background: url('in-icon.png') no-repeat center; }\n  .main-footer-background .inst-icon {\n    background: url('inst-icon.png') no-repeat center; }\n  .main-footer-background input {\n    width: 200px;\n    height: 35px;\n    padding: 10px;\n    background-color: #383643;\n    border: 1px solid #747279;\n    color: #bbb5cc;\n    outline: none;\n    font-size: 13px; }\n  .main-footer-background input::-webkit-input-placeholder {\n      color: #747279; }\n  .main-footer-background input::-moz-placeholder {\n      color: #747279; }\n  .main-footer-background input::-ms-input-placeholder {\n      color: #747279; }\n  .main-footer-background input::placeholder {\n      color: #747279; }\n  .main-footer-background input[type=submit] {\n    margin-left: 5px;\n    width: 120px;\n    height: 36px;\n    border-radius: 1px;\n    background-color: #403e47;\n    border: none;\n    color: #b9b8bc;\n    font-weight: 900;\n    font-size: 12px;\n    font-family: \"Lato\"; }\n  .main-footer-background .space-between {\n    width: 200px;\n    padding: 10px 0; }\n  .under-footer {\n  background: #232128;\n  color: #747279; }\n  .under-footer div {\n    border-top: 1px solid #737179;\n    padding: 25px 0; }\n  @media screen and (max-width: 703px) {\n  .main-footer-background nav {\n    width: 100%; }\n    .main-footer-background nav div.pb10 {\n      padding-top: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tZm9vdGVyL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXG1haW4tcGFnZVxcbWFpbi1mb290ZXJcXG1haW4tZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsbUJBYlE7RUFjUixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7RUFOekI7SUFTWSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlLEVBQUE7RUFWM0I7TUFhZ0IsbUJBQW1CLEVBQUE7RUFibkM7SUFrQlkscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0E3Qkk7SUE4QkosbUJBN0JLO0lBOEJMLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTtFQXhCNUI7SUE0QlksY0FsQ0U7SUFtQ0YsZ0JBQWdCLEVBQUE7RUE3QjVCO0lBaUNZLGNBdENRLEVBQUE7RUFLcEI7SUFxQ1ksY0EzQ0UsRUFBQTtFQU1kO0lBeUNZLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUExQ3hCO0lBOENZLCtDQUErRCxFQUFBO0VBOUMzRTtJQWtEWSwrQ0FBK0QsRUFBQTtFQWxEM0U7SUFzRFksK0NBQStELEVBQUE7RUF0RDNFO0lBMERZLGlEQUFpRSxFQUFBO0VBMUQ3RTtJQThEWSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix5QkF4RUs7SUF5RUwseUJBeEVFO0lBeUVGLGNBdkVTO0lBd0VULGFBQWE7SUFDYixlQUFlLEVBQUE7RUFyRTNCO01Bd0VnQixjQTlFRixFQUFBO0VBTWQ7TUF3RWdCLGNBOUVGLEVBQUE7RUFNZDtNQXdFZ0IsY0E5RUYsRUFBQTtFQU1kO01Bd0VnQixjQTlFRixFQUFBO0VBTWQ7SUE2RVksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQXBGTTtJQXFGTixZQUFZO0lBQ1osY0F4RlE7SUF5RlIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQXRGL0I7SUEwRlksWUFBWTtJQUNaLGVBQWUsRUFBQTtFQUszQjtFQUNJLG1CQTFHUTtFQTJHUixjQXhHVSxFQUFBO0VBc0dkO0lBS1EsNkJBdkdRO0lBd0dSLGVBQWUsRUFBQTtFQUl2QjtFQUNJO0lBRVEsV0FBVyxFQUFBO0lBRm5CO01BS1ksaUJBQWlCLEVBQUEsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2UvbWFpbi1mb290ZXIvbWFpbi1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmc6ICMyMzIxMjg7XHJcbiRzdGF0dXM6ICM3YzdiODQ7XHJcbiRkYXJrLWJnOiAjMzgzNjQzO1xyXG4kZ3JleTogIzc0NzI3OTtcclxuJGxpZ2h0LWdyZXk6ICNiOWI4YmM7XHJcbiRpbnB1dC1jb2xvcjogI2JiYjVjYztcclxuJGlucHV0LWJnOiAjNDAzZTQ3O1xyXG4kYm9yZGVyOiAjNzM3MTc5O1xyXG5cclxuLm1haW4tZm9vdGVyLWJhY2tncm91bmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHJcbiAgICAgICAgLm1haW4tZm9vdGVyX25hdmlnYXRpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHN0YXR1cztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGRhcmstYmc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuLmJvbGQge1xyXG4gICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZiLWljb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZmItaWNvbi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50dy1pY29uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3R3LWljb24ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW4taWNvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbi1pY29uLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluc3QtaWNvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbnN0LWljb24ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1iZztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkaW5wdXQtY29sb3I7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJnO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtZ3JleTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJMYXRvXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3BhY2UtYmV0d2VlbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4udW5kZXItZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgIGNvbG9yOiAkZ3JleTtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAzcHgpIHtcclxuICAgIC5tYWluLWZvb3Rlci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGRpdi5wYjEwIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-page/main-footer/main-footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main-page/main-footer/main-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: MainFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function() { return MainFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Custom_Modal_pricing_plan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Custom-Modal/pricing-plan */ "./src/app/Custom-Modal/pricing-plan/index.ts");
/* harmony import */ var src_app_Custom_Modal_partner_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Custom-Modal/partner-modal */ "./src/app/Custom-Modal/partner-modal/index.ts");




var MainFooterComponent = /** @class */ (function () {
    function MainFooterComponent() {
        this.isActivated = JSON.parse(localStorage.getItem('isActivated'));
        this.routerLinkValue = this.isActivated ? '/myProfile' : '/main';
    }
    MainFooterComponent.prototype.openModal = function (id) {
        switch (id) {
            case 'pricing-plan':
                this.pricingPlan.openModal(id);
                break;
            case 'partner-modal':
                this.partnerModal.openModal(id);
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_Custom_Modal_pricing_plan__WEBPACK_IMPORTED_MODULE_2__["PricingPlanComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_Custom_Modal_pricing_plan__WEBPACK_IMPORTED_MODULE_2__["PricingPlanComponent"])
    ], MainFooterComponent.prototype, "pricingPlan", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_Custom_Modal_partner_modal__WEBPACK_IMPORTED_MODULE_3__["PartnerModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_Custom_Modal_partner_modal__WEBPACK_IMPORTED_MODULE_3__["PartnerModalComponent"])
    ], MainFooterComponent.prototype, "partnerModal", void 0);
    MainFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-footer',
            template: __webpack_require__(/*! ./main-footer.component.html */ "./src/app/main-page/main-footer/main-footer.component.html"),
            styles: [__webpack_require__(/*! ./main-footer.component.scss */ "./src/app/main-page/main-footer/main-footer.component.scss")]
        })
    ], MainFooterComponent);
    return MainFooterComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-header/main-header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/main-page/main-header/main-header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"isActivated\"></header>\r\n<div class=\"main-header-background container-fluid pr40 pl40\" [class.activatedHeader]=\"isActivated\">\r\n  <div *ngIf=\"!isActivated\" class=\"row space-between header\">\r\n    <a class=\"w30\" [routerLink]=\"'/main'\">\r\n        <div class=\"logo\">\r\n                <img class=\"logo-small\" src=\"../../../assets/logo.png\" alt=\"logotype\">\r\n                <img class=\"logo-large\" src=\"../../../assets/logotype.png\" alt=\"logotype\">\r\n        </div>\r\n    </a>  \r\n    <div class=\"flex-align-center p0 menu-large\">\r\n      <ul class=\"navigation topBotomBordersOut m0 p0\">\r\n          <a [routerLink]=\"'/courses'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><li>Courses</li></a>\r\n          <a [routerLink]=\"'/projects'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>Projects</li></a>\r\n          <a [routerLink]=\"'/students'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><li>Students</li></a>\r\n          <a [routerLink]=\"'/partners'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>Partners</li></a>\r\n          <a [routerLink]=\"'/main'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>About school</li></a>\r\n      </ul>\r\n    </div>\r\n    <div class=\"w30 flex-align-center flex-end nav-right\">\r\n      <a class=\"search-form\">\r\n          <input name=\"search\" type=\"text\" placeholder=\"Search...\" autocomplete=\"off\">\r\n          <input value=\"\" type=\"submit\">\r\n      </a>\r\n      <button class=\"log-in\" (click)=\"showLogInModal()\">Log in</button>\r\n      <a href=\"javascript:void(0)\" class=\"navigation-pro\" (click)=\"openModal('pricing-plan')\">Become a Pro</a>\r\n      <div class=\"menu-small\" (click)=\"openMenu = !openMenu\">\r\n          <a class=\"burger\" href=\"#\" >\r\n              <span id=\"burger-btn\" [ngClass]=\"openMenu ? 'btn selected' : 'btn'\"></span>\r\n          </a>\r\n          <div [hidden]=\"!openMenu || !hasClassName()\" class=\"menu-mobile\">\r\n              <ul class=\"nav-mobile bordersOut m0 p0\">\r\n                  <a [routerLink]=\"'/courses'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><li>Courses</li></a>\r\n                  <a [routerLink]=\"'/projects'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>Projects</li></a>\r\n                  <a [routerLink]=\"'/students'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><li>Students</li></a>\r\n                  <a [routerLink]=\"'/partners'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>Partners</li></a>\r\n                  <a [routerLink]=\"'/main'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>About school</li></a>\r\n              </ul>\r\n            </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  <div class=\"header-title\">\r\n    <span class=\"header-title_main\">What is Speed painting?</span><br>\r\n    <div class=\"header-title_secondary\">\r\n      <span>We have created for you an unique online drawing school that including all modern methods of online learning in the most sought-after areas in painting.</span>\r\n    </div>\r\n    <div class=\"w-100\">\r\n      <button class=\"pro\" (click)=\"openModal('pricing-plan')\">Join Pro</button>\r\n      <button [class.hide]=\"isActivated\" class=\"free\" (click)=\"openModal('pricing-plan')\">Join Free</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"scroll\">\r\n    <span class=\"scroll_element\">Scroll for more</span>\r\n  </div>\r\n</div>\r\n<pricing-plan></pricing-plan>\r\n"

/***/ }),

/***/ "./src/app/main-page/main-header/main-header.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/main-page/main-header/main-header.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activatedHeader {\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 70px; }\n\n.main-header-background {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: url('mask.png') no-repeat;\n  background-size: cover;\n  height: 835px;\n  /* Top and Bottom borders go out */ }\n\n.main-header-background .header {\n    width: 100%;\n    -webkit-box-align: center;\n            align-items: center;\n    height: 90px; }\n\n.main-header-background .header .menu-mobile {\n      width: 280px;\n      text-align: right;\n      right: 0px;\n      position: absolute;\n      top: 0px;\n      background: #2196f3;\n      padding-top: 115px;\n      padding-bottom: 80px; }\n\n.main-header-background .header .menu-mobile .nav-mobile a {\n        width: 100%;\n        padding: 20px 30px 20px 0px;\n        display: block;\n        font: 14px 'Work Sans', sans-serif;\n        line-height: 18px;\n        color: #fff;\n        font-weight: 600;\n        text-decoration: none;\n        position: relative;\n        z-index: 0;\n        cursor: pointer;\n        background: transparent;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n\n.main-header-background .header .menu-mobile .nav-mobile a:hover {\n          background: #001b5229; }\n\n.main-header-background .header .menu-mobile .nav-mobile a li {\n          list-style: none; }\n\n.main-header-background .header .menu-mobile .bordersOut a:before, .main-header-background .header .menu-mobile .bordersOut a:after {\n        position: absolute;\n        left: 0px;\n        width: 100%;\n        height: 2px;\n        background: #fff;\n        content: \"\";\n        opacity: 0;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n\n.main-header-background .header .menu-mobile .bordersOut a:before {\n        top: 0px;\n        -webkit-transform: translateY(10px);\n                transform: translateY(10px); }\n\n.main-header-background .header .menu-mobile .bordersOut a:after {\n        bottom: 0px;\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px); }\n\n.main-header-background .header .menu-mobile .bordersOut a:hover:before, .main-header-background .header .menu-mobile .bordersOut a:hover:after {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n\n.main-header-background .navigation a {\n    display: inline-block;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    text-decoration: none;\n    margin: 0px 10px;\n    padding: 10px 10px;\n    position: relative;\n    z-index: 0;\n    cursor: pointer; }\n\n.main-header-background .navigation a li {\n      list-style: none; }\n\n.main-header-background .topBotomBordersOut a:before, .main-header-background .topBotomBordersOut a:after {\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 2px;\n    background: #fff;\n    content: \"\";\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n\n.main-header-background .topBotomBordersOut a:before {\n    top: 0px;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n\n.main-header-background .topBotomBordersOut a:after {\n    bottom: 0px;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n\n.main-header-background .topBotomBordersOut a:hover:before, .main-header-background .topBotomBordersOut a:hover:after {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n\n.main-header-background .navigation-pro {\n    text-decoration: none;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    margin: 0px;\n    padding: 10px 10px;\n    border: 2px solid #2196f3;\n    border-radius: 25px; }\n\n.main-header-background .navigation-pro:hover {\n      background: #2196f3; }\n\n.main-header-background .log-in {\n    text-decoration: none;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    padding: 0px 10px;\n    background: no-repeat;\n    border: none;\n    outline: none;\n    cursor: pointer; }\n\n.main-header-background .log-in::before {\n      content: \"\";\n      display: block;\n      background: url('login.png') no-repeat;\n      width: 20px;\n      height: 20px;\n      float: left;\n      margin: 0 6px 0 0; }\n\n.main-header-background .search-form {\n    display: -webkit-box;\n    display: flex;\n    width: auto;\n    height: 49px; }\n\n.main-header-background .search-form:focus-within input[type=\"text\"] {\n      width: 115px;\n      border-bottom: 1px solid #fff;\n      padding: 0 15px 0 10px; }\n\n.main-header-background .search-form input[type=\"text\"] {\n      height: 40px;\n      position: relative;\n      font: 14px 'Work Sans', sans-serif;\n      border: none;\n      outline: none;\n      color: #fff;\n      width: 0px;\n      left: 5px;\n      background: none;\n      -webkit-transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n      transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n      cursor: text; }\n\n.main-header-background .search-form input[type=\"text\"]::-webkit-input-placeholder {\n        color: #ffffff6e; }\n\n.main-header-background .search-form input[type=\"text\"]::-moz-placeholder {\n        color: #ffffff6e; }\n\n.main-header-background .search-form input[type=\"text\"]::-ms-input-placeholder {\n        color: #ffffff6e; }\n\n.main-header-background .search-form input[type=\"text\"]::placeholder {\n        color: #ffffff6e; }\n\n.main-header-background .search-form input[type=\"submit\"] {\n      height: 50px;\n      width: 50px;\n      background: url('icon_search.png') center center no-repeat;\n      border: none;\n      position: relative;\n      cursor: pointer;\n      outline: none; }\n\n.main-header-background .menu-small {\n    width: 60px;\n    height: 43px;\n    cursor: pointer; }\n\n.main-header-background .menu-small .burger span, .main-header-background .menu-small .burger span:before, .main-header-background .menu-small .burger span:after {\n      display: block;\n      width: 25px;\n      height: 3px;\n      background: #fff;\n      -webkit-transition: all 0.5s;\n      transition: all 0.5s;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n.main-header-background .menu-small .burger span {\n      position: relative;\n      margin: 20px 30px;\n      padding: 0%; }\n\n.main-header-background .menu-small .burger span:before, .main-header-background .menu-small .burger span:after {\n      position: absolute;\n      content: \"\"; }\n\n.main-header-background .menu-small .burger span:before {\n      top: -10px;\n      right: -1px; }\n\n.main-header-background .menu-small .burger span:after {\n      top: 9px;\n      right: -1px; }\n\n.main-header-background .menu-small .burger .btn.selected, .main-header-background .menu-small .burger .btn.selected:after, .main-header-background .menu-small .burger .btn.selected:before {\n      width: 8px;\n      height: 8px;\n      border-radius: 30px; }\n\n.main-header-background .menu-small .burger .btn.selected {\n      opacity: 1;\n      z-index: 2; }\n\n.main-header-background .menu-small .burger .btn.selected:before {\n        top: -1px;\n        -webkit-transform: translateX(15px) rotate(0deg);\n                transform: translateX(15px) rotate(0deg); }\n\n.main-header-background .menu-small .burger .btn.selected:after {\n        top: -1px;\n        -webkit-transform: translateX(30px) rotate(0deg);\n                transform: translateX(30px) rotate(0deg); }\n\n.main-header-background .header-title {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n    align-content: flex-start;\n    text-align: center; }\n\n.main-header-background .header-title .header-title_main {\n      font-size: 50px;\n      font-family: \"Work Sans\";\n      color: #fff;\n      font-weight: 600;\n      display: block;\n      width: 100%; }\n\n.main-header-background .header-title .header-title_secondary {\n      width: 65%;\n      font-size: 18px;\n      line-height: 30px;\n      font-family: \"Open Sans\";\n      color: #fff;\n      padding: 35px 0; }\n\n.main-header-background .header-title .pro, .main-header-background .header-title .free {\n      width: 172px;\n      height: 48px;\n      border: none;\n      border-radius: 24px;\n      font-size: 16px;\n      line-height: 18px;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      margin: 0 10px;\n      outline: none; }\n\n.main-header-background .header-title .pro:hover, .main-header-background .header-title .free:hover {\n        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n\n.main-header-background .header-title .pro {\n      background-color: #fff;\n      color: #041421; }\n\n.main-header-background .header-title .free {\n      background-color: #7fc400;\n      color: #fff; }\n\n.main-header-background .scroll {\n    padding-bottom: 40px;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: end;\n            align-items: flex-end; }\n\n.main-header-background .scroll .scroll_element {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      font: 14px 'Open Sans', sans-serif;\n      color: #fff; }\n\n.main-header-background .scroll .scroll_element::before {\n        content: \"\";\n        display: inline-block;\n        background: url('icon_scroll.png') no-repeat;\n        width: 18px;\n        height: 31px;\n        margin-right: 15px; }\n\n@media screen and (max-width: 1440px) {\n  .menu-large {\n    display: none; }\n  .nav-right {\n    width: 70%; } }\n\n@media screen and (min-width: 1441px) {\n  .menu-small {\n    display: none; } }\n\n@media screen and (max-width: 1024px) {\n  .main-header-background .header-title .header-title_main {\n    font-size: 44px; }\n  .main-header-background .header-title .header-title_secondary {\n    font-size: 16px;\n    padding: 30px 0; } }\n\n@media screen and (min-width: 801px) {\n  .main-header-background .header .logo-large {\n    display: inline; }\n  .main-header-background .header .logo-small {\n    display: none; } }\n\n@media screen and (max-width: 800px) {\n  .main-header-background .header-title .header-title_main {\n    font-size: 36px; }\n  .main-header-background .header-title .header-title_secondary {\n    font-size: 14px;\n    padding: 15px 0 30px; }\n  .main-header-background .header .logo-large {\n    display: none; }\n  .main-header-background .header .logo-small {\n    display: inline; }\n  .main-header-background .header .nav-right .search-form {\n    display: none; }\n  .main-header-background .header .nav-right .navigation-pro {\n    display: none; } }\n\n@media screen and (max-width: 463px) {\n  .main-header-background .header-title .free {\n    margin-top: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4taGVhZGVyL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXG1haW4tcGFnZVxcbWFpbi1oZWFkZXJcXG1haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0kseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixxQ0FBcUQ7RUFDckQsc0JBQXNCO0VBQ3RCLGFBQWE7RUE2RlQsa0NBQUEsRUFBbUM7O0FBbkczQztJQVNZLFdBQVc7SUFDWCx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTs7QUFYeEI7TUFlZ0IsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixtQkE3QkY7TUE4QkUsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBOztBQXRCcEM7UUEwQndCLFdBQVc7UUFDWCwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLGtDQUFrQztRQUNsQyxpQkFBaUI7UUFDakIsV0F6Q1o7UUEwQ1ksZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsNEJBQW9CO1FBQXBCLG9CQUFvQixFQUFBOztBQXRDNUM7VUF5QzRCLHFCQUFxQixFQUFBOztBQXpDakQ7VUE2QzRCLGdCQUFnQixFQUFBOztBQTdDNUM7UUFtRG9CLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsV0FBVztRQUNYLFdBQVc7UUFDWCxnQkFqRVI7UUFrRVEsV0FBVztRQUNYLFVBQVU7UUFDViw0QkFBb0I7UUFBcEIsb0JBQW9CLEVBQUE7O0FBMUR4QztRQThEb0IsUUFBUTtRQUNSLG1DQUEyQjtnQkFBM0IsMkJBQTJCLEVBQUE7O0FBL0QvQztRQW1Fb0IsV0FBVztRQUNYLG9DQUE0QjtnQkFBNUIsNEJBQTRCLEVBQUE7O0FBcEVoRDtRQXdFb0IsVUFBVTtRQUNWLGtDQUEwQjtnQkFBMUIsMEJBQTBCLEVBQUE7O0FBekU5QztJQWlGZ0IscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsV0E5Rko7SUErRkksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZSxFQUFBOztBQTNGL0I7TUE4Rm9CLGdCQUFnQixFQUFBOztBQTlGcEM7SUFxR1ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQW5IQTtJQW9IQSxXQUFXO0lBQ1gsVUFBVTtJQUNWLDRCQUFvQjtJQUFwQixvQkFBb0IsRUFBQTs7QUE1R2hDO0lBZ0hZLFFBQVE7SUFDUixtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7O0FBakh2QztJQXFIWSxXQUFXO0lBQ1gsb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBOztBQXRIeEM7SUEwSFksVUFBVTtJQUNWLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTs7QUEzSHRDO0lBK0hZLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLFdBNUlBO0lBNklBLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQS9JRTtJQWdKRixtQkFBbUIsRUFBQTs7QUF2SS9CO01BMElnQixtQkFuSkYsRUFBQTs7QUFTZDtJQStJWSxxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixXQTVKQTtJQTZKQSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWUsRUFBQTs7QUF4SjNCO01BMkpnQixXQUFXO01BQ1gsY0FBYztNQUNkLHNDQUFzRDtNQUN0RCxXQUFXO01BQ1gsWUFBWTtNQUNaLFdBQVc7TUFDWCxpQkFBaUIsRUFBQTs7QUFqS2pDO0lBdUtZLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBekt4QjtNQTZLb0IsWUFBWTtNQUNaLDZCQXhMUjtNQXlMUSxzQkFBc0IsRUFBQTs7QUEvSzFDO01Bb0xnQixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtDQUFrQztNQUNsQyxZQUFZO01BQ1osYUFBYTtNQUNiLFdBbk1KO01Bb01JLFVBQVU7TUFDVixTQUFTO01BQ1QsZ0JBQWdCO01BQ2hCLDJEQUE4RDtNQUE5RCxtREFBOEQ7TUFDOUQsWUFBWSxFQUFBOztBQTlMNUI7UUFpTW9CLGdCQUFnQixFQUFBOztBQWpNcEM7UUFpTW9CLGdCQUFnQixFQUFBOztBQWpNcEM7UUFpTW9CLGdCQUFnQixFQUFBOztBQWpNcEM7UUFpTW9CLGdCQUFnQixFQUFBOztBQWpNcEM7TUF3TWdCLFlBQVk7TUFDWixXQUFXO01BQ1gsMERBQTBFO01BQzFFLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGFBQWEsRUFBQTs7QUE5TTdCO0lBbU5ZLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZSxFQUFBOztBQXJOM0I7TUEwTm9CLGNBQWM7TUFDZCxXQUFXO01BQ1gsV0FBVztNQUNYLGdCQXZPUjtNQXdPUSw0QkFBb0I7TUFBcEIsb0JBQW9CO01BQ3BCLG1DQUEyQjtjQUEzQiwyQkFBMkIsRUFBQTs7QUEvTi9DO01BbU9vQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLFdBQVcsRUFBQTs7QUFyTy9CO01BeU9vQixrQkFBa0I7TUFDbEIsV0FBVyxFQUFBOztBQTFPL0I7TUE4T29CLFVBQVU7TUFDVixXQUFXLEVBQUE7O0FBL08vQjtNQW1Qb0IsUUFBUTtNQUNSLFdBQVcsRUFBQTs7QUFwUC9CO01Bd1BvQixVQUFVO01BQ1YsV0FBVztNQUNYLG1CQUFtQixFQUFBOztBQTFQdkM7TUE4UG9CLFVBQVU7TUFDVixVQUFVLEVBQUE7O0FBL1A5QjtRQWtRd0IsU0FBUztRQUNULGdEQUF3QztnQkFBeEMsd0NBQXdDLEVBQUE7O0FBblFoRTtRQXVRd0IsU0FBUztRQUNULGdEQUF3QztnQkFBeEMsd0NBQXdDLEVBQUE7O0FBeFFoRTtJQStRWSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsa0JBQWtCLEVBQUE7O0FBblI5QjtNQXNSZ0IsZUFBZTtNQUNmLHdCQUF3QjtNQUN4QixXQWxTSjtNQW1TSSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLFdBQVcsRUFBQTs7QUEzUjNCO01BK1JnQixVQUFVO01BQ1YsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsV0E3U0o7TUE4U0ksZUFBZSxFQUFBOztBQXBTL0I7TUF3U2dCLFlBQVk7TUFDWixZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGFBQWEsRUFBQTs7QUFqVDdCO1FBb1RvQiwrQ0FBNEMsRUFBQTs7QUFwVGhFO01BeVRnQixzQkFuVUo7TUFvVUksY0FqVUksRUFBQTs7QUFPcEI7TUErVGdCLHlCQXZVRDtNQXdVQyxXQTFVSixFQUFBOztBQVVaO0lBc1VZLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixzQkFBcUI7WUFBckIscUJBQXFCLEVBQUE7O0FBMVVqQztNQTZVZ0Isb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLGtDQUFrQztNQUNsQyxXQTNWSixFQUFBOztBQVVaO1FBb1ZvQixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLDRDQUE0RDtRQUM1RCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQixFQUFBOztBQU90QztFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBQ0ksVUFBVSxFQUFBLEVBQ2I7O0FBR0w7RUFDSTtJQUNJLGFBQWEsRUFBQSxFQUNoQjs7QUFHTDtFQWhYQTtJQW9YZ0IsZUFBZSxFQUFBO0VBcFgvQjtJQXdYZ0IsZUFBZTtJQUNmLGVBQWUsRUFBQSxFQUNsQjs7QUFLYjtFQUNJO0lBR1ksZUFBZSxFQUFBO0VBSDNCO0lBT1ksYUFBYSxFQUFBLEVBQ2hCOztBQUtiO0VBN1lBO0lBaVpnQixlQUFlLEVBQUE7RUFqWi9CO0lBcVpnQixlQUFlO0lBQ2Ysb0JBQW9CLEVBQUE7RUF0QmhDO0lBNEJZLGFBQWEsRUFBQTtFQTVCekI7SUFnQ1ksZUFBZSxFQUFBO0VBbEIzQjtJQXVCZ0IsYUFBYSxFQUFBO0VBdkI3QjtJQTJCZ0IsYUFBYSxFQUFBLEVBQ2hCOztBQU1qQjtFQWhiQTtJQW9iZ0IsZ0JBQWdCLEVBQUEsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2UvbWFpbi1oZWFkZXIvbWFpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuXHJcbi5hY3RpdmF0ZWRIZWFkZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG59XHJcblxyXG4ubWFpbi1oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9tYXNrLnBuZycpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDgzNXB4O1xyXG5cclxuICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC5tZW51LW1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdi1tb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTRweCAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMWI1MjI5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ib3JkZXJzT3V0IGE6YmVmb3JlLCAuYm9yZGVyc091dCBhOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmJvcmRlcnNPdXQgYTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYm9yZGVyc091dCBhOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5ib3JkZXJzT3V0IGE6aG92ZXI6YmVmb3JlLCAuYm9yZGVyc091dCBhOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2aWdhdGlvbiB7XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFRvcCBhbmQgQm90dG9tIGJvcmRlcnMgZ28gb3V0ICovXHJcbiAgICAgICAgLnRvcEJvdG9tQm9yZGVyc091dCBhOmJlZm9yZSwgLnRvcEJvdG9tQm9yZGVyc091dCBhOmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b3BCb3RvbUJvcmRlcnNPdXQgYTpiZWZvcmUge1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvcEJvdG9tQm9yZGVyc091dCBhOmFmdGVyIHtcclxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9wQm90b21Cb3JkZXJzT3V0IGE6aG92ZXI6YmVmb3JlLCAudG9wQm90b21Cb3JkZXJzT3V0IGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZpZ2F0aW9uLXBybyB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udDogMTRweCAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZy1pbiB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZm9udDogMTRweCAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dpbi5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA2cHggMCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaC1mb3Jte1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OXB4O1xyXG5cclxuICAgICAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjRzIGN1YmljLWJlemllcigwLjAwMCwgMC43OTUsIDAuMDAwLCAxLjAwMCk7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbl9zZWFyY2gucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVudS1zbWFsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5idXJnZXIge1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4sIHNwYW46YmVmb3JlLCBzcGFuOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3BhbjpiZWZvcmUsIHNwYW46YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3BhbjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcGFuOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogLTFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnRuLnNlbGVjdGVkLCAuYnRuLnNlbGVjdGVkOmFmdGVyICwuYnRuLnNlbGVjdGVkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmJ0bi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKDBkZWcpOyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9tYWlue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzVweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAlaGVhZGVyLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTcycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcm8ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjay10ZXh0O1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlaGVhZGVyLWJ1dHRvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZyZWV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlaGVhZGVyLWJ1dHRvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNjcm9sbHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnNjcm9sbF9lbGVtZW50e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbl9zY3JvbGwucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgLm1lbnUtbGFyZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSB7XHJcbiAgICAubWVudS1zbWFsbHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5tYWluLWhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9tYWluIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDFweCkge1xyXG4gICAgLm1haW4taGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAubG9nby1sYXJnZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sb2dvLXNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAubWFpbi1oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfbWFpbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMCAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgLmxvZ28tbGFyZ2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ28tc21hbGwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LXJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZpZ2F0aW9uLXByb3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjNweCkge1xyXG4gICAgLm1haW4taGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgICAgIC5mcmVle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-page/main-header/main-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main-page/main-header/main-header.component.ts ***!
  \****************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Custom_Modal_pricing_plan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Custom-Modal/pricing-plan */ "./src/app/Custom-Modal/pricing-plan/index.ts");



var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent() {
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openMenu = false;
        this.isActivated = JSON.parse(localStorage.getItem('isActivated'));
    }
    MainHeaderComponent.prototype.change = function (isLogInHidden) {
        this.onChanged.emit(isLogInHidden);
        this.isHidden = isLogInHidden;
    };
    MainHeaderComponent.prototype.hasClassName = function () {
        var burgerBtn = document.getElementById("burger-btn");
        return burgerBtn.classList.contains("selected");
    };
    MainHeaderComponent.prototype.setStyleAttribute = function (element, attrs) {
        if (attrs !== undefined) {
            Object.keys(attrs).forEach(function (key) {
                element.style[key] = attrs[key];
            });
        }
    };
    MainHeaderComponent.prototype.showLogInModal = function () {
        this.change(false);
        var elem = document.body;
        this.setStyleAttribute(elem, { 'overflow': 'hidden' });
    };
    MainHeaderComponent.prototype.openModal = function (id) {
        this.pricingPlan.openModal(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MainHeaderComponent.prototype, "isHidden", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainHeaderComponent.prototype, "onChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_Custom_Modal_pricing_plan__WEBPACK_IMPORTED_MODULE_2__["PricingPlanComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_Custom_Modal_pricing_plan__WEBPACK_IMPORTED_MODULE_2__["PricingPlanComponent"])
    ], MainHeaderComponent.prototype, "pricingPlan", void 0);
    MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-header',
            template: __webpack_require__(/*! ./main-header.component.html */ "./src/app/main-page/main-header/main-header.component.html"),
            styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/app/main-page/main-header/main-header.component.scss")]
        })
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page-template/main-page-template.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/main-page/main-page-template/main-page-template.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<log-in [hidden]=\"isHidden\" [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></log-in>\r\n<main-header [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></main-header>\r\n<online-courses></online-courses>\r\n<about-speed-painting></about-speed-painting>\r\n<why-speed-painting></why-speed-painting>\r\n<welcome-school></welcome-school>\r\n<comments></comments>\r\n<partners></partners>\r\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/main-page/main-page-template/main-page-template.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main-page/main-page-template/main-page-template.component.ts ***!
  \******************************************************************************/
/*! exports provided: MainPageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageTemplateComponent", function() { return MainPageTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageTemplateComponent = /** @class */ (function () {
    function MainPageTemplateComponent() {
        this.isHidden = true;
    }
    MainPageTemplateComponent.prototype.onChanged = function (isLogInHidden) {
        this.isHidden = isLogInHidden;
    };
    MainPageTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-page-template',
            template: __webpack_require__(/*! ./main-page-template.component.html */ "./src/app/main-page/main-page-template/main-page-template.component.html")
        })
    ], MainPageTemplateComponent);
    return MainPageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/main-page/online-courses/online-courses.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main-page/online-courses/online-courses.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"online-courses container-fluid pr40 pl40\">\r\n  <div class=\"online-courses-container\">\r\n    <span class=\"online-courses_title\">Online courses of drawing</span><br>\r\n    <img src=\"../../../assets/line.png\" alt=\"\"><br>\r\n    <span class=\"online-courses_subTitle\">Our courses will suitable both beginners and professionals.</span>\r\n      <div class=\"pb50\">\r\n        <div class=\"course-section w-100\" >\r\n          <div class=\"flex-align-center wrap w-100\">\r\n              <div *ngFor=\"let cour of courses; let key=index\" class=\"course-image_small_parent flex-align-center\">\r\n                  <div *ngIf=\"key<2\" class=\"course-image_main\" [style.backgroundImage]=\"'url('+ cour.url +')'\" [routerLink]=\"'/course'\">\r\n                    <div class=\"flex-align-start space-between w-100\">\r\n                      <div class=\"category-section\">\r\n                        <div *ngFor=\"let categ of cour.category; let i=index\">\r\n                            <div class=\"category\">\r\n                              <span>{{categ}}</span>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                    \r\n                      <div class=\"status\" [ngClass]=\"cour.status\">\r\n                          <span>{{cour.status}}</span>\r\n                      </div>\r\n                    </div>\r\n                \r\n                    <div class=\"nameCourse\">\r\n                        <span>{{cour.nameCourse}}</span><br>\r\n                        <span class=\"author\">{{cour.author}}</span>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        \r\n          <div *ngFor=\"let course of courses | slice:2; let i=index\" class=\"course-image_small_parent flex-align-center\">\r\n              <div *ngIf=\"i<limit\" class=\"course-image_small\" [style.backgroundImage]=\"'url('+ course.url +')'\" [routerLink]=\"'/course'\">\r\n                <!--Content of image block-->\r\n                <div class=\"flex-align-start space-between w-100\" >\r\n                  <div class=\"category-section\">\r\n                    <div *ngFor=\"let categ of course.category; let i=index\">\r\n                      <div class=\"category\">\r\n                        <span>{{categ}}</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n            \r\n                  <div class=\"status\" [ngClass]=\"course.status\">\r\n                      <span>{{course.status}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"nameCourse\">\r\n                    <span>{{course.nameCourse}}</span><br>\r\n                    <span class=\"author\">{{course.author}}</span>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n    \r\n        <div class=\"show-section w100\">\r\n            <button class=\"show-button\" (click)=\"show()\">{{limit > 16 ? 'Less courses' : 'More courses'}}</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngFor=\"let course of courses\" style=\"display: none\">\r\n  <img [src]=\"course.url\" alt=\"\">\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/online-courses/online-courses.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main-page/online-courses/online-courses.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".online-courses .online-courses-container .course-image_small .category-section, .online-courses .online-courses-container .course-image_main .category-section {\n  width: 75%; }\n\n.online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n  position: relative;\n  bottom: 0px;\n  left: 0px;\n  background-position: center;\n  background-size: cover;\n  margin: 7.5px;\n  padding: 20px;\n  cursor: pointer;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n\n.online-courses .online-courses-container .course-image_small:hover, .online-courses .online-courses-container .course-image_main:hover {\n    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5);\n    bottom: 2px; }\n\n.online-courses {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: auto;\n  text-align: center;\n  padding-top: 100px; }\n\n.online-courses .online-courses-container {\n    width: 100%;\n    max-width: 1170px; }\n\n.online-courses .online-courses-container .online-courses_title {\n      font-size: 42px;\n      letter-spacing: 0px;\n      line-height: 42px;\n      color: #041421;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      text-align: center; }\n\n.online-courses .online-courses-container img {\n      padding: 30px 0; }\n\n.online-courses .online-courses-container .online-courses_subTitle {\n      font-size: 16x;\n      letter-spacing: 0px;\n      color: #041421;\n      font-family: \"Open Sans\";\n      text-align: center; }\n\n.online-courses .online-courses-container .course-section {\n      padding-top: 50px;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      position: relative;\n      -webkit-box-pack: center;\n              justify-content: center; }\n\n.online-courses .online-courses-container .course-image_small {\n      width: 97%; }\n\n.online-courses .online-courses-container .course-image_main {\n      width: 49%; }\n\n.online-courses .online-courses-container .course-image_main .nameCourse {\n        display: block;\n        color: #fff;\n        text-align: left;\n        bottom: 10px;\n        position: absolute; }\n\n.online-courses .online-courses-container .course-image {\n      height: 440px;\n      width: 440px;\n      background-position: center;\n      background-size: cover;\n      margin: 7.5px;\n      padding: 20px;\n      box-shadow: inset 0px 0px 50px 18px rgba(0, 0, 0, 0.09);\n      cursor: pointer; }\n\n.online-courses .online-courses-container .course-image:hover {\n        box-shadow: none; }\n\n.online-courses .online-courses-container .show-section {\n      padding: 80px 0 45px; }\n\n.online-courses .online-courses-container .show-button {\n      width: 172px;\n      height: 48px;\n      border: 2px solid #2196f3;\n      border-radius: 24px;\n      font-size: 16px;\n      line-height: 18px;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      margin: 0px 10px;\n      outline: none;\n      background-color: #fff;\n      color: #2196f3;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s; }\n\n.online-courses .online-courses-container .show-button:hover {\n        background-color: #2196f3;\n        color: #fff;\n        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n\n.online-courses .online-courses-container .category {\n      display: inline-block;\n      float: left;\n      padding: 3px 10px;\n      color: #fff;\n      background: rgba(0, 0, 0, 0.3);\n      border-radius: 6px;\n      margin-right: 10px;\n      margin-bottom: 5px; }\n\n.online-courses .online-courses-container .status {\n      display: inline-block;\n      float: right;\n      padding: 3px 10px;\n      border-radius: 6px;\n      color: #fff; }\n\n.online-courses .online-courses-container .status.PRO {\n      background: #2196f3; }\n\n.online-courses .online-courses-container .status.Plus {\n      background: #c46cd8; }\n\n.online-courses .online-courses-container .status.Free {\n      background: #7fc400; }\n\n.online-courses .online-courses-container .status.Optimal {\n      background: #5c4af7; }\n\n.online-courses .online-courses-container .nameCourse {\n      display: block;\n      color: #fff;\n      bottom: 15px;\n      position: absolute;\n      text-align: left; }\n\n.online-courses .online-courses-container .nameCourse .author {\n        font: 14px 'Open Sans', sans-serif;\n        color: #b9b8bc; }\n\n@media screen and (min-width: 320px) {\n      .online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n        width: 225px;\n        height: 225px; } }\n\n@media screen and (min-width: 375px) {\n      .online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n        width: 290px;\n        height: 290px; } }\n\n@media screen and (min-width: 425px) {\n      .online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n        width: 345px;\n        height: 345px; } }\n\n@media screen and (min-width: 768px) {\n      .online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n        width: 690px;\n        height: 690px; } }\n\n@media screen and (min-width: 1024px) {\n      .online-courses .online-courses-container .course-image_main {\n        width: 445px;\n        height: 445px; }\n      .online-courses .online-courses-container .course-image_small {\n        width: 290px;\n        height: 290px; } }\n\n@media screen and (min-width: 1170px) {\n      .online-courses .online-courses-container .course-image_main {\n        width: 520px;\n        height: 520px; }\n      .online-courses .online-courses-container .course-image_small {\n        width: 341px;\n        height: 341px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL29ubGluZS1jb3Vyc2VzL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXG1haW4tcGFnZVxcb25saW5lLWNvdXJzZXNcXG9ubGluZS1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZiw0QkFBb0I7RUFBcEIsb0JBQW9CLEVBQUE7O0FBRXBCO0lBQ0ksK0NBQStDO0lBQy9DLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBTHRCO0lBUVEsV0FBVztJQUNYLGlCQUFpQixFQUFBOztBQVR6QjtNQVlZLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGNBdENRO01BdUNSLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7O0FBbEI5QjtNQXNCWSxlQUFlLEVBQUE7O0FBdEIzQjtNQTBCWSxjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGNBbkRRO01Bb0RSLHdCQUF3QjtNQUN4QixrQkFBa0IsRUFBQTs7QUE5QjlCO01Ba0NZLGlCQUFpQjtNQUNqQixvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLHdCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTs7QUF0Q25DO01BMkNZLFVBQVUsRUFBQTs7QUEzQ3RCO01Bb0RZLFVBQVUsRUFBQTs7QUFwRHRCO1FBdURnQixjQUFjO1FBQ2QsV0FsRko7UUFtRkksZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixrQkFBa0IsRUFBQTs7QUEzRGxDO01Bb0VZLGFBQWE7TUFDYixZQUFZO01BQ1osMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsYUFBYTtNQUNiLHVEQUFvRDtNQUNwRCxlQUFlLEVBQUE7O0FBM0UzQjtRQThFZ0IsZ0JBQWdCLEVBQUE7O0FBOUVoQztNQW1GWSxvQkFBb0IsRUFBQTs7QUFuRmhDO01BdUZZLFlBQVk7TUFDWixZQUFZO01BQ1oseUJBbEhFO01BbUhGLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixzQkEzSEE7TUE0SEEsY0EzSEU7TUE0SEYsNEJBQW9CO01BQXBCLG9CQUFvQixFQUFBOztBQW5HaEM7UUFzR2dCLHlCQS9IRjtRQWdJRSxXQWpJSjtRQWtJSSwrQ0FBNEMsRUFBQTs7QUF4RzVEO01BNkdZLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLFdBMUlBO01BMklBLDhCQUE4QjtNQUM5QixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBOztBQXBIOUI7TUF3SFkscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLFdBdEpBLEVBQUE7O0FBMEJaO01BZ0lZLG1CQXpKRSxFQUFBOztBQXlCZDtNQW9JWSxtQkFBbUIsRUFBQTs7QUFwSS9CO01Bd0lZLG1CQWhLRyxFQUFBOztBQXdCZjtNQTRJWSxtQkFBbUIsRUFBQTs7QUE1SS9CO01BZ0pZLGNBQWM7TUFDZCxXQTNLQTtNQTRLQSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGdCQUFnQixFQUFBOztBQXBKNUI7UUF1SmdCLGtDQUFrQztRQUNsQyxjQUFjLEVBQUE7O0FBSXRCO01BNUpSO1FBOEpnQixZQUFZO1FBQ1osYUFBYSxFQUFBLEVBQ2hCOztBQUlMO01BcEtSO1FBc0tnQixZQUFZO1FBQ1osYUFBYSxFQUFBLEVBQ2hCOztBQUdMO01BM0tSO1FBNktnQixZQUFZO1FBQ1osYUFBYSxFQUFBLEVBQ2hCOztBQUlMO01BbkxSO1FBcUxnQixZQUFZO1FBQ1osYUFBYSxFQUFBLEVBQ2hCOztBQUdMO01BMUxSO1FBNExnQixZQUFZO1FBQ1osYUFBYSxFQUFBO01BN0w3QjtRQWlNZ0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjs7QUFHTDtNQXRNUjtRQXdNZ0IsWUFBWTtRQUNaLGFBQWEsRUFBQTtNQXpNN0I7UUE2TWdCLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2Uvb25saW5lLWNvdXJzZXMvb25saW5lLWNvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuJWNhdGVnb3J5U2VjdGlvbiB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4lY291cnNlLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTowcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luOiA3LjVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBib3R0b206IDJweDtcclxuICAgIH1cclxufVxyXG5cclxuLm9ubGluZS1jb3Vyc2VzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuXHJcbiAgICAub25saW5lLWNvdXJzZXMtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG5cclxuICAgICAgICAub25saW5lLWNvdXJzZXNfdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrLXRleHQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub25saW5lLWNvdXJzZXNfc3ViVGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2eDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjay10ZXh0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdXJzZS1zZWN0aW9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdXJzZS1pbWFnZV9zbWFsbCB7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWNvdXJzZS1pbWFnZTtcclxuICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWNhdGVnb3J5U2VjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdXJzZS1pbWFnZV9tYWluIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAlY291cnNlLWltYWdlO1xyXG4gICAgICAgICAgICB3aWR0aDogNDklO1xyXG5cclxuICAgICAgICAgICAgLm5hbWVDb3Vyc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlY2F0ZWdvcnlTZWN0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291cnNlLWltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNy41cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNTBweCAxOHB4IHJnYmEoMCwwLDAsMC4wOSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3ctc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMCA0NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3ctYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE3MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMuUFJPIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzLlBsdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzQ2Y2Q4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cy5GcmVlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cy5PcHRpbWFsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzVjNGFmNztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lQ291cnNlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNiOWI4YmM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2Vfc21hbGwsIC5jb3Vyc2UtaW1hZ2VfbWFpbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAuY291cnNlLWltYWdlX3NtYWxsLCAuY291cnNlLWltYWdlX21haW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgICAgLmNvdXJzZS1pbWFnZV9zbWFsbCwgLmNvdXJzZS1pbWFnZV9tYWluIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzQ1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuY291cnNlLWltYWdlX3NtYWxsLCAuY291cnNlLWltYWdlX21haW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY5MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2OTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2VfbWFpbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDQ1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0NXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY291cnNlLWltYWdlX3NtYWxsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNzBweCkge1xyXG4gICAgICAgICAgICAuY291cnNlLWltYWdlX21haW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvdXJzZS1pbWFnZV9zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzQxcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0MXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/main-page/online-courses/online-courses.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main-page/online-courses/online-courses.component.ts ***!
  \**********************************************************************/
/*! exports provided: OnlineCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineCoursesComponent", function() { return OnlineCoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlineCoursesComponent = /** @class */ (function () {
    function OnlineCoursesComponent() {
        this.category = {
            1: 'Digital Arts',
            2: 'Portrait',
            3: 'Landscape',
            4: 'Animals',
            5: 'Anatomy',
            6: 'Characters'
        };
        this.status = {
            1: 'PRO',
            2: 'Plus',
            3: 'Free',
            4: 'Optimal'
        };
        this.limit = 3;
        this.courses = [
            { id: 1, url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1] },
            { id: 2, url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2] },
            { id: 3, url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [this.category[1], this.category[4]], status: this.status[3] },
            { id: 4, url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4] },
            { id: 5, url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [this.category[1], this.category[6], this.category[5]], status: this.status[1] },
            { id: 6, url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[4] },
            { id: 7, url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2] },
            { id: 8, url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Artwork', category: [this.category[1], this.category[4]], status: this.status[3] },
            { id: 9, url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4] },
            { id: 10, url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [this.category[1], this.category[6]], status: this.status[1] },
            { id: 11, url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1] },
            { id: 12, url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2] },
            { id: 13, url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [this.category[1], this.category[4]], status: this.status[3] },
            { id: 14, url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4] },
            { id: 15, url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [this.category[1], this.category[6]], status: this.status[1] },
            { id: 16, url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1] },
            { id: 17, url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2] },
            { id: 18, url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Promotional artwork', category: [this.category[1], this.category[4]], status: this.status[3] },
            { id: 19, url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4] },
            { id: 20, url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [this.category[1], this.category[6]], status: this.status[1] },
            { id: 21, url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1] },
        ];
    }
    OnlineCoursesComponent.prototype.show = function () {
        if (this.limit < 17) {
            this.limit = this.limit + 6;
        }
        else {
            this.limit = 3;
        }
    };
    OnlineCoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'online-courses',
            template: __webpack_require__(/*! ./online-courses.component.html */ "./src/app/main-page/online-courses/online-courses.component.html"),
            styles: [__webpack_require__(/*! ./online-courses.component.scss */ "./src/app/main-page/online-courses/online-courses.component.scss")]
        })
    ], OnlineCoursesComponent);
    return OnlineCoursesComponent;
}());



/***/ }),

/***/ "./src/app/main-page/partners/partners.component.html":
/*!************************************************************!*\
  !*** ./src/app/main-page/partners/partners.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partners container-fluid pr40 pl40\">\r\n    <div class=\"partners-container\">\r\n        <span class=\"partners_title\">Speed Painting Partners</span><br>\r\n        <img src=\"../../../assets/line.png\" alt=\"\"><br>\r\n        <span class=\"partners_subTitle\">Learn more about our growing list of integrations and outstanding community of collaborators.</span>\r\n        <div class=\"pt50\">\r\n            <div class=\"flex-align-center wrap\">\r\n                <div *ngFor=\"let partner of partners; let i=index\" class=\"partners-section\">\r\n                    <div *ngIf=\"i<limit\">\r\n                    <a href=\"{{partner.site}}\" target=\"blank\"> <img src=\"{{partner.url}}\" alt=\"{{partner.name}}\"></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"show-section w100 pt30\">\r\n            <button  class=\"show-button\" (click)=\"show()\">{{limit > 5 ? 'Less Partners' : 'All Partners'}}</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/partners/partners.component.scss":
/*!************************************************************!*\
  !*** ./src/app/main-page/partners/partners.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partners {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #292731;\n  height: auto;\n  text-align: center;\n  padding-top: 100px;\n  padding-bottom: 100px; }\n  .partners .partners-container {\n    width: 100%;\n    max-width: 1170px; }\n  .partners .partners-container .partners_title {\n      font-size: 42px;\n      letter-spacing: 0px;\n      line-height: 42px;\n      color: white;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      text-align: center; }\n  .partners .partners-container img {\n      padding: 30px 0; }\n  .partners .partners-container .partners_subTitle {\n      font-size: 16x;\n      letter-spacing: 0px;\n      color: white;\n      font-family: \"Open Sans\";\n      text-align: center; }\n  .partners .partners-container .partners-section {\n      display: inline-block;\n      margin: 0 0 20px;\n      cursor: pointer; }\n  .partners .partners-container .partners-section div {\n        width: 204px;\n        height: 140px;\n        border-radius: 6px;\n        padding: 10%;\n        margin: 0 15px;\n        background-color: #383643;\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s; }\n  .partners .partners-container .partners-section div:hover {\n          background-color: #2196f3; }\n  .partners .partners-container .show-section .show-button {\n      width: 164px;\n      height: 48px;\n      border-radius: 24px;\n      background: none;\n      border: 2px solid #38373f;\n      color: #6a696f;\n      outline: none;\n      -webkit-transition: all 0.2s;\n      transition: all 0.2s; }\n  .partners .partners-container .show-section .show-button:hover {\n        background: white;\n        border: 2px solid white; }\n  @media screen and (max-width: 375px) {\n      .partners .partners-container .partners-section div {\n        width: 200px;\n        height: 115px;\n        padding: 7%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL3BhcnRuZXJzL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXG1haW4tcGFnZVxccGFydG5lcnNcXHBhcnRuZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtQkFQUTtFQVFSLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0VBUHpCO0lBVVEsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBWHpCO01BY1ksZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7RUFwQjlCO01Bd0JZLGVBQWUsRUFBQTtFQXhCM0I7TUE0QlksY0FBYztNQUNkLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osd0JBQXdCO01BQ3hCLGtCQUFrQixFQUFBO0VBaEM5QjtNQW9DWSxxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTtFQXRDM0I7UUF5Q2dCLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixjQUFjO1FBQ2QseUJBakRHO1FBa0RILDRCQUFvQjtRQUFwQixvQkFBb0IsRUFBQTtFQS9DcEM7VUFrRG9CLHlCQXBESyxFQUFBO0VBRXpCO01BeURnQixZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxhQUFhO01BQ2IsNEJBQW9CO01BQXBCLG9CQUFvQixFQUFBO0VBaEVwQztRQW1Fb0IsaUJBQWdCO1FBQ2hCLHVCQUF1QixFQUFBO0VBS25DO01BekVSO1FBNEVvQixZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVcsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL3BhcnRuZXJzL3BhcnRuZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjMjkyNzMxO1xyXG4kc2Vjb25kLWJnOiAjMzgzNjQzO1xyXG4kc2Vjb25kLWJnLWhvdmVyOiAjMjE5NmYzO1xyXG5cclxuLnBhcnRuZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHJcbiAgICAucGFydG5lcnMtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcclxuXHJcbiAgICAgICAgLnBhcnRuZXJzX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhcnRuZXJzX3N1YlRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNng7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYXJ0bmVycy1zZWN0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZC1iZztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmQtYmctaG92ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNob3ctc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIC5zaG93LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTY0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzODM3M2Y7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZhNjk2ZjtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAucGFydG5lcnMtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDclO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/main-page/partners/partners.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/main-page/partners/partners.component.ts ***!
  \**********************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
        this.partners = [
            { url: '../../../assets/behance-partner.png', name: 'Behance', site: 'https://www.behance.net/' },
            { url: '../../../assets/deviant-partner.png', name: 'Deviant', site: 'https://www.deviantart.com/' },
            { url: '../../../assets/dribbble-partner.png', name: 'Dribbble', site: 'https://dribbble.com/' },
            { url: '../../../assets/pinterest-partner.png', name: 'Pinterest', site: 'https://www.pinterest.com/' },
            { url: '../../../assets/vimeo-partner.png', name: 'Vimeo', site: 'https://vimeo.com/' },
            { url: '../../../assets/deviant-partner.png', name: 'Deviant', site: 'https://www.deviantart.com/' },
            { url: '../../../assets/dribbble-partner.png', name: 'Dribbble', site: 'https://dribbble.com/' },
            { url: '../../../assets/pinterest-partner.png', name: 'Pinterest', site: 'https://www.pinterest.com/' },
            { url: '../../../assets/vimeo-partner.png', name: 'Vimeo', site: 'https://vimeo.com/' }
        ];
        this.limit = 5;
    }
    PartnersComponent.prototype.show = function () {
        if (this.limit > 5) {
            this.limit = 5;
        }
        else {
            this.limit = this.partners.length;
        }
    };
    PartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/main-page/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.scss */ "./src/app/main-page/partners/partners.component.scss")]
        })
    ], PartnersComponent);
    return PartnersComponent;
}());



/***/ }),

/***/ "./src/app/main-page/welcome-school/welcome-school.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main-page/welcome-school/welcome-school.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-school container-fluid\">\r\n    <div class=\"header-title\">\r\n        <span class=\"header-title_main\">Welcome to the best art school</span>\r\n        <div class=\"header-title_secondary\">\r\n            <span>Start drawing right now!</span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"w-100 wrap flex-align-center\">\r\n        <button class=\"pro\" (click)=\"openModal('pricing-plan')\">Join Pro</button>\r\n        <button [class.hide]=\"isActivated\" class=\"free\" (click)=\"openModal('pricing-plan')\">Join Free</button>\r\n    </div>\r\n</div> \r\n<pricing-plan></pricing-plan>"

/***/ }),

/***/ "./src/app/main-page/welcome-school/welcome-school.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main-page/welcome-school/welcome-school.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-school {\n  background: url('welcome-school-bg.png') no-repeat center top;\n  background-size: cover;\n  padding: 110px 40px; }\n  .welcome-school .header-title {\n    text-align: center; }\n  .welcome-school .header-title .header-title_main {\n      font-size: 42px;\n      line-height: 60px;\n      font-family: \"Work Sans\";\n      color: #fff;\n      font-weight: 600; }\n  .welcome-school .header-title .header-title_secondary {\n      font-size: 16px;\n      line-height: 30px;\n      font-family: \"Open Sans\";\n      color: #fff;\n      padding: 30px 0; }\n  .welcome-school .pro, .welcome-school .free {\n    width: 172px;\n    height: 48px;\n    border: none;\n    border-radius: 24px;\n    font-size: 16px;\n    line-height: 18px;\n    font-family: \"Work Sans\";\n    font-weight: 600;\n    margin: 0 10px 10px;\n    outline: none; }\n  .welcome-school .pro:hover, .welcome-school .free:hover {\n      box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n  .welcome-school .pro {\n    background-color: #fff;\n    color: #041421; }\n  .welcome-school .free {\n    background-color: #7fc400;\n    color: #fff; }\n  @media screen and (max-width: 1024px) {\n  .welcome-school .header-title .header-title_main {\n    font-size: 44px; }\n  .welcome-school .header-title .header-title_secondary {\n    font-size: 16px;\n    padding: 30px 0; } }\n  @media screen and (max-width: 800px) {\n  .welcome-school .header-title .header-title_main {\n    font-size: 36px; }\n  .welcome-school .header-title .header-title_secondary {\n    font-size: 14px;\n    padding: 15px 0 30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL3dlbGNvbWUtc2Nob29sL0M6XFxVc2Vyc1xcMVxcRGVza3RvcFxcZ2l0aHViXFx2a29yeXRza2EuZ2l0aHViLmlvXFxzcC1hcHAvc3JjXFxhcHBcXG1haW4tcGFnZVxcd2VsY29tZS1zY2hvb2xcXHdlbGNvbWUtc2Nob29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksNkRBQTZFO0VBQzdFLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTtFQUh2QjtJQUtRLGtCQUFrQixFQUFBO0VBTDFCO01BUVksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsV0FoQkE7TUFpQkEsZ0JBQWdCLEVBQUE7RUFaNUI7TUFnQlksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsV0F4QkE7TUF5QkEsZUFBZSxFQUFBO0VBcEIzQjtJQXlCUSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhLEVBQUE7RUFsQ3JCO01BcUNZLCtDQUE0QyxFQUFBO0VBckN4RDtJQTBDUSxzQkEvQ0k7SUFnREosY0E3Q1ksRUFBQTtFQUVwQjtJQWdEUSx5QkFuRE87SUFvRFAsV0F0REksRUFBQTtFQTJEWjtFQXREQTtJQTBEZ0IsZUFBZSxFQUFBO0VBMUQvQjtJQThEZ0IsZUFBZTtJQUNmLGVBQWUsRUFBQSxFQUNsQjtFQUtiO0VBckVBO0lBeUVnQixlQUFlLEVBQUE7RUF6RS9CO0lBNkVnQixlQUFlO0lBQ2Ysb0JBQW9CLEVBQUEsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2Uvd2VsY29tZS1zY2hvb2wvd2VsY29tZS1zY2hvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuXHJcbi53ZWxjb21lLXNjaG9vbCAge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvd2VsY29tZS1zY2hvb2wtYmcucG5nJykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMTEwcHggNDBweDtcclxuICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZV9tYWlue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGl0bGVfc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAlaGVhZGVyLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDE3MnB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBybyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiAkYmxhY2stdGV4dDtcclxuICAgICAgICBAZXh0ZW5kICVoZWFkZXItYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuICAgIC5mcmVle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIEBleHRlbmQgJWhlYWRlci1idXR0b247XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLndlbGNvbWUtc2Nob29sIHtcclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9tYWluIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLndlbGNvbWUtc2Nob29sIHtcclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9tYWluIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9zZWNvbmRhcnkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwIDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main-page/welcome-school/welcome-school.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main-page/welcome-school/welcome-school.component.ts ***!
  \**********************************************************************/
/*! exports provided: WelcomeSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeSchoolComponent", function() { return WelcomeSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Custom_Modal_pricing_plan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Custom-Modal/pricing-plan */ "./src/app/Custom-Modal/pricing-plan/index.ts");



var WelcomeSchoolComponent = /** @class */ (function () {
    function WelcomeSchoolComponent() {
        this.isActivated = JSON.parse(localStorage.getItem('isActivated'));
    }
    WelcomeSchoolComponent.prototype.openModal = function (id) {
        this.pricingPlan.openModal(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_Custom_Modal_pricing_plan__WEBPACK_IMPORTED_MODULE_2__["PricingPlanComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_Custom_Modal_pricing_plan__WEBPACK_IMPORTED_MODULE_2__["PricingPlanComponent"])
    ], WelcomeSchoolComponent.prototype, "pricingPlan", void 0);
    WelcomeSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'welcome-school',
            template: __webpack_require__(/*! ./welcome-school.component.html */ "./src/app/main-page/welcome-school/welcome-school.component.html"),
            styles: [__webpack_require__(/*! ./welcome-school.component.scss */ "./src/app/main-page/welcome-school/welcome-school.component.scss")]
        })
    ], WelcomeSchoolComponent);
    return WelcomeSchoolComponent;
}());



/***/ }),

/***/ "./src/app/main-page/what-people-say/comments.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main-page/what-people-say/comments.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comments container-fluid\">\r\n    <div class=\"header-title\">\r\n        <span class=\"header-title_main\">What people say?</span><br>\r\n        <img src=\"../../../assets/line.png\" alt=\"\"><br>\r\n    </div>\r\n    <div class=\"comments-section wrap flex-align-center\">\r\n        <button class=\"previous-btn\" (click)=\"previous()\"></button>\r\n        <div class=\"commentator wrap flex-align-center\">\r\n            <div class=\"photo-small\" [style.backgroundImage]=\"'url('+ comments[key == 0 ? comments.length - 2 : key == 1 ? comments.length - 3 : key - 2].url +')'\"></div>\r\n            <div class=\"photo-small\" [style.backgroundImage]=\"'url('+ comments[key == 0 ? comments.length - 1 : key - 1].url +')'\"></div>\r\n            <div class=\"photo-large\" [style.backgroundImage]=\"'url('+ comments[key].url +')'\">\r\n                <div class=\"status\" [ngClass]=\"comments[key].status\">\r\n                        <span>{{comments[key].status}}</span>\r\n                </div>\r\n                <div class=\"comentator-name\">\r\n                    <span class=\"author\">{{comments[key].author}}</span><br>\r\n                    <span>{{comments[key].date}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"photo-small\" [style.backgroundImage]=\"'url('+ comments[key == comments.length - 1 ? 0 : key + 1].url +')'\"></div>\r\n            <div class=\"photo-small\" [style.backgroundImage]=\"'url('+ comments[key == comments.length - 1 ? 1 : key == comments.length - 2 ? 0 : key + 2].url +')'\"></div>\r\n        </div>\r\n        <button class=\"next-btn\" (click)=\"next()\"></button>\r\n        <div class=\"comment w-100\">\r\n                <span>{{comments[key].comment}}</span>\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/what-people-say/comments.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main-page/what-people-say/comments.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments {\n  padding: 110px 40px; }\n  .comments .header-title {\n    text-align: center; }\n  .comments .header-title .header-title_main {\n      font-size: 42px;\n      line-height: 60px;\n      font-family: \"Work Sans\";\n      color: #041421;\n      font-weight: 600; }\n  .comments .comments-section .comment {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 80px 0 15px;\n    -webkit-box-align: center;\n            align-items: center;\n    min-height: 200px; }\n  .comments .comments-section .comment span {\n      display: block;\n      width: 50%;\n      text-align: center;\n      font-style: italic;\n      color: #69727c;\n      font-size: 1.2rem; }\n  .comments .comments-section .comment ::before, .comments .comments-section .comment ::after {\n      content: \"\";\n      display: inline-block;\n      width: 20px;\n      height: 20px; }\n  .comments .comments-section .comment ::before {\n      background: url('quotation-mark-before.png') no-repeat;\n      background-size: contain;\n      margin-right: 10px; }\n  .comments .comments-section .comment ::after {\n      background: url('quotation-mark-after.png') no-repeat;\n      background-size: contain;\n      margin-left: 10px; }\n  .comments .comments-section .previous-btn, .comments .comments-section .next-btn {\n    width: 60px;\n    height: 60px;\n    border: none;\n    -webkit-transition: background 0.2s;\n    transition: background 0.2s;\n    outline: none; }\n  .comments .comments-section .previous-btn {\n    background: url('previous-btn.png') no-repeat;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n  .comments .comments-section .previous-btn:hover {\n      background: url('previous-btn-hover.png') no-repeat; }\n  .comments .comments-section .next-btn {\n    background: url('next-btn.png') no-repeat;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n  .comments .comments-section .next-btn:hover {\n      background: url('next-btn-hover.png') no-repeat; }\n  .comments .comments-section .commentator {\n    padding: 10px 65px; }\n  .comments .comments-section .commentator .photo-small, .comments .comments-section .commentator .photo-large {\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: contain;\n      margin: 0 15px; }\n  .comments .comments-section .commentator .photo-small {\n      height: 35px;\n      width: 35px;\n      opacity: 0.6; }\n  .comments .comments-section .commentator .photo-large {\n      height: 115px;\n      width: 115px;\n      text-align: center; }\n  .comments .comments-section .commentator .photo-large .status {\n        display: inline-block;\n        padding: 3px 10px;\n        border-radius: 6px;\n        color: #fff;\n        position: relative;\n        top: 100px; }\n  .comments .comments-section .commentator .photo-large .status.PRO {\n        background: #2196f3; }\n  .comments .comments-section .commentator .photo-large .status.Plus {\n        background: #c46cd8; }\n  .comments .comments-section .commentator .photo-large .status.Free {\n        background: #7fc400; }\n  .comments .comments-section .commentator .photo-large .status.Optimal {\n        background: #5c4af7; }\n  .comments .comments-section .commentator .photo-large .comentator-name {\n        display: block;\n        color: #b9b8bc;\n        bottom: 15px;\n        position: relative;\n        text-align: center;\n        top: 120px; }\n  .comments .comments-section .commentator .photo-large .comentator-name .author {\n          font: 14px 'Open Sans', sans-serif;\n          font-weight: bold;\n          color: #041421; }\n  @media screen and (max-width: 800px) {\n  .comments .comments-section .commentator {\n    padding: 10px 0px; }\n    .comments .comments-section .commentator .photo-small {\n      display: none; }\n  .comments .comments-section .previous-btn, .comments .comments-section .next-btn, .comments .comments-section .previous-btn:hover, .comments .comments-section .next-btn:hover {\n    width: 40px;\n    height: 40px;\n    background-size: contain; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL3doYXQtcGVvcGxlLXNheS9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXHdoYXQtcGVvcGxlLXNheVxcY29tbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxtQkFBbUIsRUFBQTtFQUR2QjtJQUlRLGtCQUFrQixFQUFBO0VBSjFCO01BT1ksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsY0FkUTtNQWVSLGdCQUFnQixFQUFBO0VBWDVCO0lBa0JZLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7RUF0QjdCO01BeUJnQixjQUFjO01BQ2QsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsY0EvQkc7TUFnQ0gsaUJBQWlCLEVBQUE7RUE5QmpDO01Ba0NnQixXQUFXO01BQ1gscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFyQzVCO01BMENnQixzREFBc0U7TUFDdEUsd0JBQXdCO01BQ3hCLGtCQUFrQixFQUFBO0VBNUNsQztNQWlEZ0IscURBQXFFO01BQ3JFLHdCQUF3QjtNQUN4QixpQkFBaUIsRUFBQTtFQW5EakM7SUF3RFksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUMzQixhQUFhLEVBQUE7RUE1RHpCO0lBaUVZLDZDQUE2RDtJQUM3RCw0QkFBb0I7SUFBcEIsb0JBQW9CLEVBQUE7RUFsRWhDO01BcUVnQixtREFBbUUsRUFBQTtFQXJFbkY7SUEyRVkseUNBQXlEO0lBQ3pELDRCQUFvQjtJQUFwQixvQkFBb0IsRUFBQTtFQTVFaEM7TUErRWdCLCtDQUErRCxFQUFBO0VBL0UvRTtJQW9GWSxrQkFBa0IsRUFBQTtFQXBGOUI7TUF1RmdCLDRCQUE0QjtNQUM1QiwyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLGNBQWMsRUFBQTtFQTFGOUI7TUErRmdCLFlBQVk7TUFDWixXQUFXO01BQ1gsWUFBWSxFQUFBO0VBakc1QjtNQXNHZ0IsYUFBYTtNQUNiLFlBQVk7TUFDWixrQkFBa0IsRUFBQTtFQXhHbEM7UUEyR29CLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFdBckhSO1FBc0hRLGtCQUFrQjtRQUNsQixVQUFVLEVBQUE7RUFoSDlCO1FBb0hvQixtQkFBbUIsRUFBQTtFQXBIdkM7UUF3SG9CLG1CQUFtQixFQUFBO0VBeEh2QztRQTRIb0IsbUJBQW1CLEVBQUE7RUE1SHZDO1FBZ0lvQixtQkFBbUIsRUFBQTtFQWhJdkM7UUFvSW9CLGNBQWM7UUFDZCxjQXhJTjtRQXlJTSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixVQUFVLEVBQUE7RUF6STlCO1VBNEl3QixrQ0FBa0M7VUFDbEMsaUJBQWlCO1VBQ2pCLGNBbEpKLEVBQUE7RUEwSnBCO0VBdEpBO0lBMEpnQixpQkFBaUIsRUFBQTtJQTFKakM7TUE2Sm9CLGFBQWEsRUFBQTtFQTdKakM7SUFrS2dCLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCLEVBQUEsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2Uvd2hhdC1wZW9wbGUtc2F5L2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuJGdyZXk6ICNiOWI4YmM7XHJcbiRkYXJrLWdyZXk6ICM2OTcyN2M7XHJcblxyXG4uY29tbWVudHMgIHtcclxuICAgIHBhZGRpbmc6IDExMHB4IDQwcHg7XHJcblxyXG4gICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuaGVhZGVyLXRpdGxlX21haW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsYWNrLXRleHQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb21tZW50cy1zZWN0aW9uIHtcclxuXHJcbiAgICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogODBweCAwIDE1cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmstZ3JleTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAlcXVvdGF0aW9uLW1hcmt7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJXF1b3RhdGlvbi1tYXJrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvcXVvdGF0aW9uLW1hcmstYmVmb3JlLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlcXVvdGF0aW9uLW1hcms7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9xdW90YXRpb24tbWFyay1hZnRlci5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJW5hdmlnYXRpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcmV2aW91cy1idG4ge1xyXG4gICAgICAgICAgICBAZXh0ZW5kICVuYXZpZ2F0aW9uO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wcmV2aW91cy1idG4ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvcHJldmlvdXMtYnRuLWhvdmVyLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5leHQtYnRuIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAlbmF2aWdhdGlvbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvbmV4dC1idG4ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvbmV4dC1idG4taG92ZXIucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29tbWVudGF0b3Ige1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDY1cHg7XHJcblxyXG4gICAgICAgICAgICAlcGhvdG8ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGhvdG8tc21hbGwge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlcGhvdG87XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBob3RvLWxhcmdlIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJXBob3RvO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMTVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnN0YXR1cy5QUk8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnN0YXR1cy5QbHVzIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzQ2Y2Q4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5zdGF0dXMuRnJlZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzdmYzQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuc3RhdHVzLk9wdGltYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1YzRhZjc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNvbWVudGF0b3ItbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMjBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmF1dGhvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogMTRweCAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2stdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY29tbWVudHN7XHJcbiAgICAgICAgLmNvbW1lbnRzLXNlY3Rpb257XHJcbiAgICAgICAgICAgIC5jb21tZW50YXRvcntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5waG90by1zbWFsbHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAlc21hbGwtYnRuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJldmlvdXMtYnRuLCAubmV4dC1idG57XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVzbWFsbC1idG47XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVzbWFsbC1idG47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main-page/what-people-say/comments.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main-page/what-people-say/comments.component.ts ***!
  \*****************************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent() {
        this.status = {
            1: 'PRO',
            2: 'Plus',
            3: 'Free',
            4: 'Optimal'
        };
        this.key = 2;
        this.comment = [
            'An excellent school in which professional teachers will always tell and help you, here I am already engaged for a year, very tightened up my technique of drawing! I am glad that the courses are designed for any level of the student, you can be a beginner or an accomplished artist, but still develop further.',
            'Good work!',
            'thanks for courses!',
            'Yeah!',
            'Good!',
            'Good Job'
        ];
        this.comments = [
            { url: '../../../assets/bonnie-chang.png', author: 'Bonnie Chang', date: 'June 09, 2016', status: this.status[1], comment: this.comment[0] },
            { url: '../../../assets/mike-brown.png', author: 'Mike Brown', date: 'April 11, 2017', status: this.status[2], comment: this.comment[1] },
            { url: '../../../assets/bonnie-chang.png', author: 'Bonnie Chang', date: 'June 25, 2018', status: this.status[3], comment: this.comment[2] },
            { url: '../../../assets/mike-brown.png', author: 'Mike Brown', date: 'March 15, 2019', status: this.status[4], comment: this.comment[3] },
            { url: '../../../assets/bonnie-chang.png', author: 'Bonnie Chang', date: 'June 13, 2015', status: this.status[1], comment: this.comment[4] },
            { url: '../../../assets/mike-brown.png', author: 'Mike Brown', date: 'March 15, 2019', status: this.status[4], comment: this.comment[5] }
        ];
    }
    CommentsComponent.prototype.next = function () {
        if (this.key < this.comments.length - 1) {
            this.key = this.key + 1;
        }
        else {
            this.key = 0;
        }
    };
    CommentsComponent.prototype.previous = function () {
        if (this.key == 0) {
            this.key = this.comments.length - 1;
        }
        else {
            this.key = this.key - 1;
        }
    };
    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/main-page/what-people-say/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.scss */ "./src/app/main-page/what-people-say/comments.component.scss")]
        })
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/main-page/why-speed-painting/why-speed-painting.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/main-page/why-speed-painting/why-speed-painting.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"why-speed-painting container-fluid pr40 pl40\">\r\n    <div class=\"why-speed-painting-container\">\r\n        <div class=\"header-title\">\r\n            <span class=\"header-title_main\">Why Speed Painting</span><br>\r\n            <img src=\"../../../assets/line.png\" alt=\"\"><br>\r\n            <div class=\"header-title_secondary\">\r\n                <span>All courses are created on the basis of academic programs including deep theoretical knowledge and practice.</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"reasons wrap\">\r\n            <div class=\"reasons-block\">\r\n                <img src=\"../../../assets/availability.png\" alt=\"\" class=\"reasons-block_img\"><br><br>\r\n                <span class=\"reasons-block_header\">Availability</span><br><br>\r\n                <span class=\"reasons-block_text\">The advantage of our program is the possibility to combine training and work, as the courses are available \r\n                    in any convenient place and at any time.</span>\r\n            </div>\r\n            <div class=\"reasons-block\">\r\n                <img src=\"../../../assets/community.png\" alt=\"\" class=\"reasons-block-img\"><br><br>\r\n                <span class=\"reasons-block_header\">Community of artists</span><br><br>\r\n                <span class=\"reasons-block_text\">In addition, you can meet new friends of like-minded people, gain experience from professionals or share\r\n                        your achievements.</span>\r\n            </div>\r\n            <div class=\"reasons-block\">\r\n                <img src=\"../../../assets/schools.png\" alt=\"\" class=\"reasons-block-img\"><br><br>\r\n                <span class=\"reasons-block_header\">Schools and Universities</span><br><br>\r\n                <span class=\"reasons-block_text\">Courses are developed by certified teachers on the basis of academic programs, including deep theoretical knowledge and practice.</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-page/why-speed-painting/why-speed-painting.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/main-page/why-speed-painting/why-speed-painting.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".why-speed-painting {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .why-speed-painting .why-speed-painting-container {\n    width: 100%;\n    max-width: 1170px; }\n  .why-speed-painting .why-speed-painting-container .header-title {\n      text-align: center;\n      padding-top: 110px; }\n  .why-speed-painting .why-speed-painting-container .header-title .header-title_main {\n        font-size: 42px;\n        line-height: 60px;\n        font-family: \"Work Sans\";\n        color: #041421;\n        font-weight: 600; }\n  .why-speed-painting .why-speed-painting-container .header-title .header-title_secondary {\n        font-size: 16px;\n        line-height: 30px;\n        font-family: \"Open Sans\";\n        color: #041421;\n        padding: 45px 0; }\n  .why-speed-painting .why-speed-painting-container .header-title img {\n        padding: 30px 0 0; }\n  .why-speed-painting .why-speed-painting-container .reasons {\n      padding: 0 30px 110px; }\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block {\n        text-align: center;\n        width: 33.3%;\n        padding: 30px; }\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block .reasons-block_img {\n          height: 65px; }\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block .reasons-block_header {\n          font-weight: bold; }\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block .reasons-block_text {\n          font-weight: 400; }\n  @media screen and (max-width: 991px) {\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL3doeS1zcGVlZC1wYWludGluZy9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXHdoeS1zcGVlZC1wYWludGluZ1xcd2h5LXNwZWVkLXBhaW50aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBRjNCO0lBS1EsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBTnpCO01BU1ksa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBO0VBVjlCO1FBYWdCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLGNBbEJJO1FBbUJKLGdCQUFnQixFQUFBO0VBakJoQztRQXFCZ0IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsY0ExQkk7UUEyQkosZUFBZSxFQUFBO0VBekIvQjtRQTZCZ0IsaUJBQWlCLEVBQUE7RUE3QmpDO01Ba0NZLHFCQUFxQixFQUFBO0VBbENqQztRQXFDZ0Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixhQUFhLEVBQUE7RUF2QzdCO1VBMENvQixZQUFZLEVBQUE7RUExQ2hDO1VBOENvQixpQkFBaUIsRUFBQTtFQTlDckM7VUFrRG9CLGdCQUFnQixFQUFBO0VBT3BDO0VBQ0k7SUFJZ0IsV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2Uvd2h5LXNwZWVkLXBhaW50aW5nL3doeS1zcGVlZC1wYWludGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29sb3JzOlxyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuLndoeS1zcGVlZC1wYWludGluZyAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC53aHktc3BlZWQtcGFpbnRpbmctY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG5cclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTEwcHg7XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyLXRpdGxlX21haW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjay10ZXh0O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjay10ZXh0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNDVweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZWFzb25zIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4IDExMHB4O1xyXG5cclxuICAgICAgICAgICAgLnJlYXNvbnMtYmxvY2t7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMyU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5yZWFzb25zLWJsb2NrX2ltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZWFzb25zLWJsb2NrX2hlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJlYXNvbnMtYmxvY2tfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC53aHktc3BlZWQtcGFpbnRpbmcgIHtcclxuICAgICAgICAud2h5LXNwZWVkLXBhaW50aW5nLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgLnJlYXNvbnMge1xyXG4gICAgICAgICAgICAgICAgLnJlYXNvbnMtYmxvY2t7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/main-page/why-speed-painting/why-speed-painting.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main-page/why-speed-painting/why-speed-painting.component.ts ***!
  \******************************************************************************/
/*! exports provided: WhySpeedPaintingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhySpeedPaintingComponent", function() { return WhySpeedPaintingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WhySpeedPaintingComponent = /** @class */ (function () {
    function WhySpeedPaintingComponent() {
    }
    WhySpeedPaintingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'why-speed-painting',
            template: __webpack_require__(/*! ./why-speed-painting.component.html */ "./src/app/main-page/why-speed-painting/why-speed-painting.component.html"),
            styles: [__webpack_require__(/*! ./why-speed-painting.component.scss */ "./src/app/main-page/why-speed-painting/why-speed-painting.component.scss")]
        })
    ], WhySpeedPaintingComponent);
    return WhySpeedPaintingComponent;
}());



/***/ }),

/***/ "./src/app/not-found.component.ts":
/*!****************************************!*\
  !*** ./src/app/not-found.component.ts ***!
  \****************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'not-found-app',
            template: "<h3>\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430</h3>"
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/partners-page/partner-content/partner-content.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/partners-page/partner-content/partner-content.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partner-dashbord-bg\" [style.background-image]=\"'url(' + imageUrl + ')'\">\r\n    <div class=\"partner-dashboard-bg_section pr40 pl40\">\r\n        <h2>Speed Painting Partner Network</h2><br>\r\n        <h6>Seamless integrations and powerful collaborations for creators, marketers and brands</h6><br>\r\n        <button class=\"becomePartner-link\" (click)=\"openModal('partner-modal')\">\r\n            <span>Become a partner</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"partners container-fluid pr40 pl40\">\r\n    <div class=\"partners-container\">\r\n        <div class=\"header-title w100\">\r\n            <h2>Our Partners</h2>\r\n            <img src=\"../../../assets/line.png\" alt=\"\">\r\n            <h6>Learn more about our growing list of integrations and outstanding community of collaborators.\r\n            </h6>\r\n        </div>\r\n        <div class=\"partners-section w100\">\r\n            <div class=\"partners-section_block\">\r\n                <div *ngFor=\"let partner of partners; let i=index\" [style.background-image]=\"'url(' + partner.url + ')'\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<partner-modal></partner-modal>"

/***/ }),

/***/ "./src/app/partners-page/partner-content/partner-content.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/partners-page/partner-content/partner-content.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partner-dashbord-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  background-image: url('dashboard.png');\n  background-size: cover;\n  background-repeat: no-repeat; }\n  .partner-dashbord-bg .partner-dashboard-bg_section {\n    height: 100%;\n    width: 1170px;\n    padding-bottom: 120px;\n    padding-top: 180px;\n    text-align: center; }\n  .partner-dashbord-bg .partner-dashboard-bg_section h2, .partner-dashbord-bg .partner-dashboard-bg_section h6 {\n      color: white; }\n  .partner-dashbord-bg .partner-dashboard-bg_section h2 {\n      font-family: \"Work Sans\"; }\n  .partner-dashbord-bg .partner-dashboard-bg_section h6 {\n      font-family: \"Open Sans\"; }\n  .partner-dashbord-bg .partner-dashboard-bg_section .becomePartner-link {\n      width: 172px;\n      height: 48px;\n      border: none;\n      border-radius: 24px;\n      font-size: 16px;\n      line-height: 18px;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      margin: 0 10px;\n      outline: none;\n      background: #2196f3;\n      -webkit-transition: all 0.2s;\n      transition: all 0.2s;\n      color: white; }\n  .partner-dashbord-bg .partner-dashboard-bg_section .becomePartner-link:hover {\n        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n  .partners {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 75px; }\n  .partners .partners-container {\n    width: 1170px;\n    text-align: center; }\n  .partners .partners-container .header-title {\n      padding-bottom: 65px; }\n  .partners .partners-container .header-title img {\n        padding-bottom: 15px; }\n  .partners .partners-container .partners-section {\n      padding-bottom: 100px; }\n  .partners .partners-container .partners-section .partners-section_block {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        flex-wrap: wrap; }\n  .partners .partners-container .partners-section .partners-section_block div {\n          background-size: auto;\n          background-repeat: no-repeat;\n          width: 225px;\n          height: 160px;\n          border-radius: 6px;\n          background-color: white;\n          border: 1px solid #eaeaeb;\n          background-position: center;\n          cursor: pointer;\n          margin: 5px;\n          -webkit-transition: all 0.3s;\n          transition: all 0.3s; }\n  .partners .partners-container .partners-section .partners-section_block div:hover {\n            border: 1px solid #2196f3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG5lcnMtcGFnZS9wYXJ0bmVyLWNvbnRlbnQvQzpcXFVzZXJzXFwxXFxEZXNrdG9wXFxnaXRodWJcXHZrb3J5dHNrYS5naXRodWIuaW9cXHNwLWFwcC9zcmNcXGFwcFxccGFydG5lcnMtcGFnZVxccGFydG5lci1jb250ZW50XFxwYXJ0bmVyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQ0FBc0Q7RUFDdEQsc0JBQXNCO0VBQ3RCLDRCQUE0QixFQUFBO0VBTmhDO0lBU1EsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBYjFCO01BZ0JZLFlBQVksRUFBQTtFQWhCeEI7TUFvQlksd0JBQXdCLEVBQUE7RUFwQnBDO01Bd0JZLHdCQUF3QixFQUFBO0VBeEJwQztNQTRCWSxZQUFZO01BQ1osWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxhQUFhO01BQ2IsbUJBMUNFO01BMkNGLDRCQUFvQjtNQUFwQixvQkFBb0I7TUFDcEIsWUFBWSxFQUFBO0VBeEN4QjtRQTJDZ0IsK0NBQStDLEVBQUE7RUFPL0Q7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBO0VBSHJCO0lBTVEsYUFBYTtJQUNiLGtCQUFrQixFQUFBO0VBUDFCO01BVVksb0JBQW9CLEVBQUE7RUFWaEM7UUFhZ0Isb0JBQW9CLEVBQUE7RUFicEM7TUFrQlkscUJBQXFCLEVBQUE7RUFsQmpDO1FBcUJnQixvQkFBYTtRQUFiLGFBQWE7UUFDYix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2QixlQUFlLEVBQUE7RUF2Qi9CO1VBMEJvQixxQkFBcUI7VUFDckIsNEJBQTRCO1VBQzVCLFlBQVk7VUFDWixhQUFhO1VBQ2Isa0JBQWtCO1VBQ2xCLHVCQUF1QjtVQUN2Qix5QkFBeUI7VUFDekIsMkJBQTJCO1VBQzNCLGVBQWU7VUFDZixXQUFXO1VBQ1gsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBO0VBcEN4QztZQXVDd0IseUJBN0ZWLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXJ0bmVycy1wYWdlL3BhcnRuZXItY29udGVudC9wYXJ0bmVyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJGJnOiAjMjMyMTI4O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuLnBhcnRuZXItZGFzaGJvcmQtYmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZGFzaGJvYXJkLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgLnBhcnRuZXItZGFzaGJvYXJkLWJnX3NlY3Rpb24ge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTE3MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBoMiwgaDYge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iZWNvbWVQYXJ0bmVyLWxpbmsge1xyXG4gICAgICAgICAgICB3aWR0aDogMTcycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXJ0bmVycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNzVweDtcclxuXHJcbiAgICAucGFydG5lcnMtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTE3MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2NXB4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGFydG5lcnMtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHJcbiAgICAgICAgICAgIC5wYXJ0bmVycy1zZWN0aW9uX2Jsb2NrIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWViO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/partners-page/partner-content/partner-content.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/partners-page/partner-content/partner-content.component.ts ***!
  \****************************************************************************/
/*! exports provided: PartnersContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersContentComponent", function() { return PartnersContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Custom_Modal_partner_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Custom-Modal/partner-modal */ "./src/app/Custom-Modal/partner-modal/index.ts");



var PartnersContentComponent = /** @class */ (function () {
    function PartnersContentComponent() {
        this.imageUrl = '../../../assets/partner-dashboard.png';
        this.partners = [
            { url: '../../../assets/partner-google-color.png' },
            { url: '../../../assets/partner-adobe-color.png' },
            { url: '../../../assets/partner-mailChimp-color.png' },
            { url: '../../../assets/partner-youtube-color.png' },
            { url: '../../../assets/partner-deviant-color.png' },
            { url: '../../../assets/partner-behance-color.png' },
            { url: '../../../assets/partner-dribbble-color.png' },
            { url: '../../../assets/partner-pinterest-color.png' },
            { url: '../../../assets/partner-vimeo-color.png' },
            { url: '../../../assets/partner-instagram-color.png' },
            { url: '../../../assets/partner-awwwards-color.png' },
            { url: '../../../assets/partner-twitter-color.png' },
            { url: '../../../assets/partner-tumblr-color.png' },
            { url: '../../../assets/partner-dropbox-color.png' },
            { url: '../../../assets/partner-skyDrive-color.png' },
            { url: '../../../assets/partner-box-color.png' }
        ];
    }
    PartnersContentComponent.prototype.openModal = function (id) {
        this.partnerModal.openModal(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_Custom_Modal_partner_modal__WEBPACK_IMPORTED_MODULE_2__["PartnerModalComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_Custom_Modal_partner_modal__WEBPACK_IMPORTED_MODULE_2__["PartnerModalComponent"])
    ], PartnersContentComponent.prototype, "partnerModal", void 0);
    PartnersContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'partners-content',
            template: __webpack_require__(/*! ./partner-content.component.html */ "./src/app/partners-page/partner-content/partner-content.component.html"),
            styles: [__webpack_require__(/*! ./partner-content.component.scss */ "./src/app/partners-page/partner-content/partner-content.component.scss")]
        })
    ], PartnersContentComponent);
    return PartnersContentComponent;
}());



/***/ }),

/***/ "./src/app/partners-page/partners-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/partners-page/partners-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<log-in [hidden]=\"isHidden\" [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></log-in>\r\n<header [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></header>\r\n<partners-content></partners-content>\r\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/partners-page/partners-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/partners-page/partners-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PartnersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersPageComponent", function() { return PartnersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PartnersPageComponent = /** @class */ (function () {
    function PartnersPageComponent() {
        this.isHidden = true;
    }
    PartnersPageComponent.prototype.onChanged = function (isLogInHidden) {
        this.isHidden = isLogInHidden;
    };
    PartnersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'partners-page',
            template: __webpack_require__(/*! ./partners-page.component.html */ "./src/app/partners-page/partners-page.component.html"),
        })
    ], PartnersPageComponent);
    return PartnersPageComponent;
}());



/***/ }),

/***/ "./src/app/profile-page/courses-section/courses-section.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/profile-page/courses-section/courses-section.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"courses-bg\">\r\n        <div class=\"courses\">\r\n            <div class=\"main-content\">\r\n                <div *ngFor=\"let course of courses;\">\r\n                    <div class=\"course-image\" [style.backgroundImage]=\"'url('+ course.url +')'\" [routerLink]=\"'/course'\">\r\n                        <!--Content of image block-->\r\n                        <div class=\"flex-align-start space-between w-100\" >\r\n                            <div class=\"category-section\">\r\n                                <div *ngFor=\"let categ of course.category\">\r\n                                    <div class=\"category\">\r\n                                        <span>{{categ}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                            <div class=\"status\" [ngClass]=\"course.status\">\r\n                                <span>{{course.status}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"nameCourse\">\r\n                            <span>{{course.nameCourse}}</span><br>\r\n                            <span class=\"author\">{{course.author}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/profile-page/courses-section/courses-section.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/profile-page/courses-section/courses-section.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".courses-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f6f6f6;\n  padding: 0 40px; }\n  .courses-bg .courses {\n    width: 100%;\n    max-width: 1170px; }\n  .courses-bg .courses .main-content {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center;\n      padding-bottom: 50px; }\n  .courses-bg .courses .main-content div .course-image {\n        position: relative;\n        background-position: center;\n        background-size: cover;\n        margin: 7.5px;\n        padding: 20px;\n        cursor: pointer;\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s;\n        width: 350px;\n        height: 350px; }\n  .courses-bg .courses .main-content div .course-image:hover {\n          box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5);\n          bottom: 2px; }\n  .courses-bg .courses .main-content div .course-image .category-section {\n          width: 75%; }\n  .courses-bg .courses .main-content div .course-image .category-section div {\n            display: inline-block; }\n  .courses-bg .courses .main-content div .course-image .category-section div .category {\n              display: inline-block;\n              padding: 3px 10px;\n              color: white;\n              background: rgba(0, 0, 0, 0.3);\n              border-radius: 6px;\n              margin-right: 10px;\n              margin-bottom: 5px;\n              font-size: 10px;\n              font-family: \"Open Sans\";\n              font-weight: 700; }\n  .courses-bg .courses .main-content div .course-image .status {\n          padding: 0px 5px;\n          border-radius: 6px;\n          font-size: 10px;\n          line-height: 22px;\n          color: white;\n          font-family: \"Open Sans\";\n          font-weight: 700;\n          text-align: center; }\n  .courses-bg .courses .main-content div .course-image .status.PRO {\n          background: #2196f3; }\n  .courses-bg .courses .main-content div .course-image .status.Plus {\n          background: #c46cd8; }\n  .courses-bg .courses .main-content div .course-image .status.Free {\n          background: #7fc400; }\n  .courses-bg .courses .main-content div .course-image .status.Optimal {\n          background: #5c4af7; }\n  .courses-bg .courses .main-content .nameCourse {\n        font-size: 18px;\n        line-height: 18px;\n        color: #fefeff;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        display: block;\n        bottom: 15px;\n        position: absolute;\n        text-align: left; }\n  .courses-bg .courses .main-content .nameCourse .author {\n          font: 14px 'Open Sans', sans-serif;\n          color: #b9b8bc; }\n  @media screen and (min-width: 320px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 240px;\n          height: 240px; } }\n  @media screen and (min-width: 375px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 295px;\n          height: 295px; } }\n  @media screen and (min-width: 425px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 345px;\n          height: 345px; } }\n  @media screen and (min-width: 768px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 329px;\n          height: 329px; } }\n  @media screen and (min-width: 1024px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 299px;\n          height: 299px; } }\n  @media screen and (min-width: 1170px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 348px;\n          height: 348px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL2NvdXJzZXMtc2VjdGlvbi9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxwcm9maWxlLXBhZ2VcXGNvdXJzZXMtc2VjdGlvblxcY291cnNlcy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG1CQU5RO0VBT1IsZUFBZSxFQUFBO0VBTG5CO0lBUVEsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBVHpCO01BWVksb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZTtNQUNmLHdCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIsb0JBQW9CLEVBQUE7RUFmaEM7UUFvQm9CLGtCQUFrQjtRQUNsQiwyQkFBMkI7UUFDM0Isc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixhQUFhO1FBQ2IsZUFBZTtRQUNmLDRCQUFvQjtRQUFwQixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLGFBQWEsRUFBQTtFQTVCakM7VUErQndCLCtDQUErQztVQUMvQyxXQUFXLEVBQUE7RUFoQ25DO1VBb0N3QixVQUFVLEVBQUE7RUFwQ2xDO1lBdUM0QixxQkFBcUIsRUFBQTtFQXZDakQ7Y0EwQ2dDLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsWUFBWTtjQUNaLDhCQUE4QjtjQUM5QixrQkFBa0I7Y0FDbEIsa0JBQWtCO2NBQ2xCLGtCQUFrQjtjQUNsQixlQUFlO2NBQ2Ysd0JBQXdCO2NBQ3hCLGdCQUFnQixFQUFBO0VBbkRoRDtVQXlEd0IsZ0JBQWdCO1VBQ2hCLGtCQUFrQjtVQUNsQixlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLFlBQVk7VUFDWix3QkFBd0I7VUFDeEIsZ0JBQWdCO1VBQ2hCLGtCQUFrQixFQUFBO0VBaEUxQztVQW9Fd0IsbUJBeEVWLEVBQUE7RUFJZDtVQXdFd0IsbUJBQW1CLEVBQUE7RUF4RTNDO1VBNEV3QixtQkEvRVQsRUFBQTtFQUdmO1VBZ0Z3QixtQkFBbUIsRUFBQTtFQWhGM0M7UUFzRmdCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZ0JBQWdCLEVBQUE7RUE5RmhDO1VBaUdvQixrQ0FBa0M7VUFDbEMsY0FBYyxFQUFBO0VBSXRCO1FBdEdaO1VBeUd3QixZQUFZO1VBQ1osYUFBYSxFQUFBLEVBQ2hCO0VBSVQ7UUEvR1o7VUFrSHdCLFlBQVk7VUFDWixhQUFhLEVBQUEsRUFDaEI7RUFJVDtRQXhIWjtVQTJId0IsWUFBWTtVQUNaLGFBQWEsRUFBQSxFQUNoQjtFQUlUO1FBaklaO1VBb0l3QixZQUFZO1VBQ1osYUFBYSxFQUFBLEVBQ2hCO0VBSVQ7UUExSVo7VUE2SXdCLFlBQVk7VUFDWixhQUFhLEVBQUEsRUFDaEI7RUFJVDtRQW5KWjtVQXNKd0IsWUFBWTtVQUNaLGFBQWEsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcGFnZS9jb3Vyc2VzLXNlY3Rpb24vY291cnNlcy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsdWU6ICMyMTk2ZjM7XHJcbiRncmVlbjogIzdmYzQwMDtcclxuJGJnOiAjZjZmNmY2O1xyXG5cclxuLmNvdXJzZXMtYmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuXHJcbiAgICAuY291cnNlcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcblxyXG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICAgICAgICAgIGRpdiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNy41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLlBSTyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cy5QbHVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2M0NmNkODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMuRnJlZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMuT3B0aW1hbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1YzRhZjc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmFtZUNvdXJzZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmVmZWZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuYXV0aG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjliOGJjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAuY291cnNlLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAuY291cnNlLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjk5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjk5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcwcHgpIHtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNDhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile-page/courses-section/courses-section.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile-page/courses-section/courses-section.component.ts ***!
  \***************************************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
        this.category = {
            1: 'Digital Arts',
            2: 'Portrait',
            3: 'Landscape',
            4: 'Animals',
            5: 'Anatomy',
            6: 'Characters'
        };
        this.status = {
            1: 'PRO',
            2: 'Plus',
            3: 'Free',
            4: 'Optimal'
        };
        this.courses = [
            { id: 1, url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1] },
            { id: 2, url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2] },
            { id: 3, url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [this.category[1], this.category[4]], status: this.status[3] },
            { id: 4, url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4] },
            { id: 5, url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [this.category[1], this.category[6], this.category[5]], status: this.status[1] },
            { id: 6, url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[4] },
            { id: 7, url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2] },
            { id: 8, url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Artwork', category: [this.category[1], this.category[4]], status: this.status[3] },
            { id: 9, url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4] },
            { id: 10, url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [this.category[1], this.category[6]], status: this.status[1] },
            { id: 11, url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1] },
            { id: 12, url: '../../../assets/course_2.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2] },
            { id: 13, url: '../../../assets/course_3.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Promotional artwork', category: [this.category[1], this.category[4]], status: this.status[3] },
            { id: 14, url: '../../../assets/course_4.jpg', author: 'Sanketh Yayathi', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4] },
            { id: 15, url: '../../../assets/course_5.jpg', author: 'Ramón Nuñez', nameCourse: 'Oil painting', category: [this.category[1], this.category[6]], status: this.status[1] },
            { id: 16, url: '../../../assets/course_6.jpg', author: 'Sylvain Sarrailh', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1] },
            { id: 17, url: '../../../assets/course_7.jpg', author: 'Sung Choi', nameCourse: 'Drawing the landscape', category: [this.category[1], this.category[3]], status: this.status[2] },
            { id: 18, url: '../../../assets/course_8.jpg', author: 'Nemanja Abazovic', nameCourse: 'Promotional artwork', category: [this.category[1], this.category[4]], status: this.status[3] },
            { id: 19, url: '../../../assets/course_9.jpg', author: 'Bram Vanhaeren', nameCourse: 'Drawing characters', category: [this.category[1], this.category[5]], status: this.status[4] },
            { id: 20, url: '../../../assets/course_10.jpg', author: 'Ismail Inceoglu', nameCourse: 'Oil painting', category: [this.category[1], this.category[6]], status: this.status[1] },
            { id: 21, url: '../../../assets/course_1.jpg', author: 'Nedko Ivanov', nameCourse: 'Digital drawing of portrait', category: [this.category[1], this.category[2]], status: this.status[1] },
        ];
    }
    CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'courses',
            template: __webpack_require__(/*! ./courses-section.component.html */ "./src/app/profile-page/courses-section/courses-section.component.html"),
            styles: [__webpack_require__(/*! ./courses-section.component.scss */ "./src/app/profile-page/courses-section/courses-section.component.scss")]
        })
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/profile-page/dashboard/dashboard.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/profile-page/dashboard/dashboard.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashbord-bg\" [style.background-image]=\"'url(' + imageUrl + ')'\">\r\n    <div class=\"dashboard-bg_section pr40 pl40\">\r\n      <div class=\"flex-align-center wrap\">\r\n        <button  class=\"share-link\" [ngClass]=\"{'active' : isShownShareBtn}\" (click)='isShownShareBtn = !isShownShareBtn' ></button>\r\n        <share-buttons *ngIf=\"isShownShareBtn\"  class=\" pl10\" \r\n          [include]=\"['google','email','copy']\"\r\n          [url]=\"'#'\"\r\n        ></share-buttons> \r\n      </div>\r\n      <div class=\"upload-btn-wrapper\">\r\n          <div class=\"create-photo\">\r\n              <span>Add photo on cover</span>\r\n          </div>\r\n          <input type=\"file\" name=\"myfile\" accept=\"image/*\" (change)=\"uploadImage($event)\" />\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile-page/dashboard/dashboard.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/profile-page/dashboard/dashboard.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashbord-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  height: 350px;\n  background-image: url('dashboard.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-y: 70px;\n  background-position-x: center; }\n  .dashbord-bg .dashboard-bg_section {\n    height: 100%;\n    width: 1170px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding-bottom: 40px;\n    padding-top: 95px;\n    flex-wrap: wrap; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper {\n      display: -webkit-box;\n      display: flex;\n      border-radius: 25px;\n      background-color: rgba(0, 0, 0, 0.6);\n      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.15);\n      border: 1px solid #212529;\n      outline: none;\n      font-size: 14px;\n      color: #fff;\n      font-family: \"Work Sans\";\n      text-align: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      padding: 10px 20px;\n      -webkit-transition: all .35s ease-in-out;\n      transition: all .35s ease-in-out; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper:hover {\n        box-shadow: 0px 0px 0 7px rgba(0, 0, 0, 0.15); }\n  .dashbord-bg .dashboard-bg_section .share-link {\n      background-color: rgba(0, 0, 0, 0.6);\n      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.15);\n      padding: 8px;\n      width: 55px;\n      height: 55px;\n      border-radius: 50%;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      -webkit-transition: all .35s ease-in-out;\n      transition: all .35s ease-in-out;\n      border: none;\n      outline: none;\n      transform: scale(1);\n      transition: all .35s ease-in-out; }\n  .dashbord-bg .dashboard-bg_section .share-link:hover {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1); }\n  .dashbord-bg .dashboard-bg_section .share-link::before {\n        content: \"\";\n        display: inline-block;\n        background: url('share-link-icon.png') no-repeat;\n        height: 16px;\n        width: 15px; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper {\n      position: relative;\n      overflow: hidden;\n      display: inline-block; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper .create-photo {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        padding-bottom: 0; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper .create-photo::before {\n          content: \"\";\n          display: inline-block;\n          background: url('create-photo-icon.png') no-repeat;\n          height: 17px;\n          width: 20px;\n          margin-right: 10px; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper input[type=file] {\n        font-size: 25px;\n        position: absolute;\n        left: 0;\n        top: 0;\n        opacity: 0;\n        cursor: pointer; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper input[type=file]::-webkit-file-upload-button {\n        cursor: pointer; }\n  @media screen and (max-width: 767px) {\n    .dashbord-bg .dashboard-bg_section {\n      -webkit-box-pack: center;\n              justify-content: center; }\n      .dashbord-bg .dashboard-bg_section div:first-child {\n        width: 100%; }\n        .dashbord-bg .dashboard-bg_section div:first-child share-buttons {\n          margin-top: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL2Rhc2hib2FyZC9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxwcm9maWxlLXBhZ2VcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNDQUFzRDtFQUN0RCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw2QkFBNkIsRUFBQTtFQVRqQztJQVlRLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQWE7SUFBYixhQUFhO0lBQ2Isc0JBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBbkJ2QjtNQXNCWSxvQkFBYTtNQUFiLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsb0NBQW9DO01BQ3BDLHlDQUF5QztNQUN6Qyx5QkFBeUI7TUFDekIsYUFBYTtNQUNiLGVBQWU7TUFDZixXQWxDQTtNQW1DQSx3QkFBd0I7TUFDeEIsa0JBQWtCO01BQ2xCLHdCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsd0NBQWdDO01BQWhDLGdDQUFnQyxFQUFBO0VBbkM1QztRQXNDZ0IsNkNBQTZDLEVBQUE7RUF0QzdEO01BNkNZLG9DQUFvQztNQUNwQyx5Q0FBeUM7TUFDekMsWUFBWTtNQUNaLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLDJCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsd0NBQWdDO01BQWhDLGdDQUFnQztNQUNoQyxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixnQ0FBZ0MsRUFBQTtFQXhENUM7UUEyRGdCLDZCQUFxQjtnQkFBckIscUJBQXFCLEVBQUE7RUEzRHJDO1FBK0RnQixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLGdEQUFnRTtRQUNoRSxZQUFZO1FBQ1osV0FBVyxFQUFBO0VBbkUzQjtNQXlFWSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLHFCQUFxQixFQUFBO0VBM0VqQztRQThFZ0Isb0JBQWE7UUFBYixhQUFhO1FBQ2IseUJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsaUJBQWlCLEVBQUE7RUFoRmpDO1VBbUZvQixXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLGtEQUFrRTtVQUNsRSxZQUFZO1VBQ1osV0FBVztVQUNYLGtCQUFrQixFQUFBO0VBeEZ0QztRQTZGZ0IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsTUFBTTtRQUNOLFVBQVU7UUFDVixlQUFlLEVBQUE7RUFsRy9CO1FBc0dnQixlQUFlLEVBQUE7RUFLM0I7SUEzR0o7TUE2R1ksd0JBQXVCO2NBQXZCLHVCQUF1QixFQUFBO01BN0duQztRQWdIZ0IsV0FBVyxFQUFBO1FBaEgzQjtVQW1Ib0IsZ0JBQWdCLEVBQUEsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLXBhZ2UvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29sb3JzOlxyXG4kYmc6ICMyMzIxMjg7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRncmVlbjogIzdmYzQwMDtcclxuJGJsYWNrLXRleHQ6ICMwNDE0MjE7XHJcblxyXG4uZGFzaGJvcmQtYmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2Rhc2hib2FyZC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcblxyXG4gICAgLmRhc2hib2FyZC1iZ19zZWN0aW9uIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDExNzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDk1cHg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAlYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxMjUyOTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcclxuIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMCA3cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgLnNoYXJlLWxpbmsge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc2hhcmUtbGluay1pY29uLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWJ1dHRvbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAuY3JlYXRlLXBob3RvIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY3JlYXRlLXBob3RvLWljb24ucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgLmRhc2hib2FyZC1iZ19zZWN0aW9uIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgc2hhcmUtYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile-page/dashboard/dashboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/profile-page/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.imageUrl = '../../../assets/dashboard.png';
        this.isShownShareBtn = false;
    }
    DashboardComponent.prototype.uploadImage = function (fileInput) {
        var _this = this;
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (function (e) {
                _this.imageUrl = e.target["result"];
            });
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/profile-page/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/profile-page/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/profile-page/header/header.component.html":
/*!***********************************************************!*\
  !*** ./src/app/profile-page/header/header.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header-background\">\r\n    <div class=\"space-between header pr40 pl40\">\r\n      <a class=\"w25\" [routerLink]=\"routerLinkValue\">\r\n        <div class=\"logo\">\r\n          <img class=\"logo-small\" src=\"../../../assets/logo.png\" alt=\"logotype\">\r\n          <img class=\"logo-large\" src=\"../../../assets/logotype.png\" alt=\"logotype\">\r\n        </div>\r\n      </a>\r\n      <div class=\"flex-align-center p0 menu-large\">\r\n        <ul class=\"navigation topBotomBordersOut m0 p0\">\r\n          <a [routerLink]=\"'/courses'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><li>Courses</li></a>\r\n          <a [routerLink]=\"'/projects'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>Projects</li></a>\r\n          <a [routerLink]=\"'/students'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><li>Students</li></a>\r\n          <a [routerLink]=\"'/partners'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>Partners</li></a>\r\n          <a [routerLink]=\"'/main'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>About school</li></a>\r\n          <a *ngIf='isActivated' [routerLink]=\"'/myProfile'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>My profile</li></a>\r\n        </ul>  \r\n      </div>\r\n      <div class=\"w25 flex-align-center flex-end nav-right\">\r\n        <a class=\"search-form\">\r\n            <input name=\"search\" type=\"text\" placeholder=\"Search...\" autocomplete=\"off\">\r\n            <input value=\"\" type=\"submit\">\r\n        </a>\r\n        <div *ngIf=\"isActivated\" class=\"account\" (click)=\"openModal('user-dialog')\"></div>\r\n\r\n        <button *ngIf=\"!isActivated\" class=\"log-in\" (click)=\"showLogInModal()\">Log in</button>\r\n\r\n        <div class=\"menu-small\" (click)=\"openMenu = !openMenu\">\r\n            <div class=\"burger\">\r\n                <span id=\"burger-btn\" [ngClass]=\"openMenu ? 'btn selected' : 'btn'\"></span>\r\n            </div>\r\n            <div [hidden]=\"!openMenu || !hasClassName()\" class=\"menu-mobile\">\r\n                <ul class=\"nav-mobile bordersOut m0 p0\">\r\n                    <a [routerLink]=\"'/courses'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><li>Courses</li></a>\r\n                    <a [routerLink]=\"'/projects'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>Projects</li></a>\r\n                    <a [routerLink]=\"'/students'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><li>Students</li></a>\r\n                    <a [routerLink]=\"'/partners'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>Partners</li></a>\r\n                    <a [routerLink]=\"'/main'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>About school</li></a>\r\n                    <a *ngIf='isActivated' [routerLink]=\"'/myProfile'\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" ><li>My profile</li></a>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<user-dialog></user-dialog>"

/***/ }),

/***/ "./src/app/profile-page/header/header.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/profile-page/header/header.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-header-background {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #232128;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n  /* Top and Bottom borders go out */ }\n  .main-header-background .header {\n    width: 100%;\n    -webkit-box-align: center;\n            align-items: center;\n    height: 70px; }\n  .main-header-background .header .menu-mobile {\n      width: 280px;\n      text-align: right;\n      right: 0px;\n      position: absolute;\n      top: 0px;\n      background: #2196f3;\n      padding-top: 115px;\n      padding-bottom: 80px;\n      z-index: 1; }\n  .main-header-background .header .menu-mobile .nav-mobile a:not(.active), .main-header-background .header .menu-mobile .nav-mobile a.active {\n        width: 100%;\n        padding: 20px 30px 20px 0px;\n        display: block;\n        font: 14px 'Work Sans', sans-serif;\n        line-height: 18px;\n        color: #fff;\n        font-weight: 600;\n        text-decoration: none;\n        position: relative;\n        z-index: 0;\n        cursor: pointer;\n        background: transparent;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n  .main-header-background .header .menu-mobile .nav-mobile a:hover:not(.active), .main-header-background .header .menu-mobile .nav-mobile a.active:hover {\n          background: #001b5229; }\n  .main-header-background .header .menu-mobile .nav-mobile a:not(.active) li, .main-header-background .header .menu-mobile .nav-mobile a.active li {\n          list-style: none; }\n  .main-header-background .header .menu-mobile .nav-mobile a.active {\n        background: #001b5229; }\n  .main-header-background .header .menu-mobile .bordersOut a.active:before, .main-header-background .header .menu-mobile .bordersOut a.active:after, .main-header-background .header .menu-mobile .bordersOut a:before, .main-header-background .header .menu-mobile .bordersOut a:after {\n        position: absolute;\n        left: 0px;\n        width: 100%;\n        height: 2px;\n        background: #fff;\n        content: \"\";\n        opacity: 0;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n  .main-header-background .header .menu-mobile .bordersOut a.active:before, .main-header-background .header .menu-mobile .bordersOut a.active:after {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n  .main-header-background .header .menu-mobile .bordersOut a.active:before {\n        top: 0px;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n  .main-header-background .header .menu-mobile .bordersOut a.active:after {\n        bottom: 0px;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n  .main-header-background .header .menu-mobile .bordersOut a:before {\n        top: 0px;\n        -webkit-transform: translateY(10px);\n                transform: translateY(10px); }\n  .main-header-background .header .menu-mobile .bordersOut a:after {\n        bottom: 0px;\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px); }\n  .main-header-background .header .menu-mobile .bordersOut a:hover:before, .main-header-background .header .menu-mobile .bordersOut a:hover:after {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n  .main-header-background .navigation a {\n    display: inline-block;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    text-decoration: none;\n    margin: 0px 10px;\n    padding: 10px 10px;\n    position: relative;\n    z-index: 0;\n    cursor: pointer; }\n  .main-header-background .navigation a li {\n      list-style: none; }\n  .main-header-background .navigation a.active {\n    border-radius: 27px;\n    background-color: #2196f3;\n    text-align: center;\n    padding: 10px 20px; }\n  .main-header-background .topBotomBordersOut a:not(.active):before, .main-header-background .topBotomBordersOut a:not(.active):after {\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 2px;\n    background: #fff;\n    content: \"\";\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .main-header-background .topBotomBordersOut a:not(.active):before {\n    top: 0px;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  .main-header-background .topBotomBordersOut a:not(.active):after {\n    bottom: 0px;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  .main-header-background .topBotomBordersOut a:not(.active):hover:before, .main-header-background .topBotomBordersOut a:not(.active):hover:after {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n  .main-header-background .search-form {\n    display: -webkit-box;\n    display: flex;\n    width: auto;\n    height: 49px; }\n  .main-header-background .search-form:focus-within input[type=\"text\"] {\n      width: 115px;\n      border-bottom: 1px solid #fff;\n      padding: 0 15px 0 10px; }\n  .main-header-background .search-form input[type=\"text\"] {\n      height: 40px;\n      position: relative;\n      font: 14px 'Work Sans', sans-serif;\n      border: none;\n      outline: none;\n      color: #fff;\n      width: 0px;\n      left: 5px;\n      background: none;\n      -webkit-transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n      transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n      cursor: text; }\n  .main-header-background .search-form input[type=\"text\"]::-webkit-input-placeholder {\n        color: #ffffff6e; }\n  .main-header-background .search-form input[type=\"text\"]::-moz-placeholder {\n        color: #ffffff6e; }\n  .main-header-background .search-form input[type=\"text\"]::-ms-input-placeholder {\n        color: #ffffff6e; }\n  .main-header-background .search-form input[type=\"text\"]::placeholder {\n        color: #ffffff6e; }\n  .main-header-background .search-form input[type=\"submit\"] {\n      height: 50px;\n      width: 50px;\n      background: url('icon_search.png') center center no-repeat;\n      border: none;\n      position: relative;\n      cursor: pointer;\n      outline: none; }\n  .main-header-background .account {\n    width: 40px;\n    height: 40px;\n    background: url('mike-brown.png') no-repeat;\n    border-radius: 20px;\n    border: 2px solid #6a686d;\n    cursor: pointer;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .main-header-background .account:hover {\n      border: 2px solid #2196f3; }\n  .main-header-background .log-in {\n    text-decoration: none;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    padding: 0px 10px;\n    background: no-repeat;\n    border: none;\n    outline: none;\n    cursor: pointer; }\n  .main-header-background .log-in::before {\n      content: \"\";\n      display: block;\n      background: url('login.png') no-repeat;\n      width: 20px;\n      height: 20px;\n      float: left;\n      margin: 0 6px 0 0; }\n  .main-header-background .menu-small {\n    width: 60px;\n    height: 43px;\n    cursor: pointer; }\n  .main-header-background .menu-small .burger span, .main-header-background .menu-small .burger span:before, .main-header-background .menu-small .burger span:after {\n      display: block;\n      width: 25px;\n      height: 3px;\n      background: #fff;\n      -webkit-transition: all 0.5s;\n      transition: all 0.5s;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n  .main-header-background .menu-small .burger span {\n      position: relative;\n      margin: 20px 30px;\n      padding: 0%; }\n  .main-header-background .menu-small .burger span:before, .main-header-background .menu-small .burger span:after {\n      position: absolute;\n      content: \"\"; }\n  .main-header-background .menu-small .burger span:before {\n      top: -10px;\n      right: -1px; }\n  .main-header-background .menu-small .burger span:after {\n      top: 9px;\n      right: -1px; }\n  .main-header-background .menu-small .burger .btn.selected, .main-header-background .menu-small .burger .btn.selected:after, .main-header-background .menu-small .burger .btn.selected:before {\n      width: 8px;\n      height: 8px;\n      border-radius: 30px; }\n  .main-header-background .menu-small .burger .btn.selected {\n      opacity: 1;\n      z-index: 2; }\n  .main-header-background .menu-small .burger .btn.selected:before {\n        top: -1px;\n        -webkit-transform: translateX(15px) rotate(0deg);\n                transform: translateX(15px) rotate(0deg); }\n  .main-header-background .menu-small .burger .btn.selected:after {\n        top: -1px;\n        -webkit-transform: translateX(30px) rotate(0deg);\n                transform: translateX(30px) rotate(0deg); }\n  @media screen and (max-width: 1440px) {\n  .menu-large {\n    display: none; }\n  .nav-right {\n    width: 70%; } }\n  @media screen and (min-width: 1441px) {\n  .menu-small {\n    display: none; } }\n  @media screen and (min-width: 801px) {\n  .main-header-background .header .logo-large {\n    display: inline; }\n  .main-header-background .header .logo-small {\n    display: none; } }\n  @media screen and (max-width: 800px) {\n  .main-header-background .header .logo-large {\n    display: none; }\n  .main-header-background .header .logo-small {\n    display: inline; }\n  .main-header-background .header .nav-right .search-form {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL2hlYWRlci9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxwcm9maWxlLXBhZ2VcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsbUJBVlE7RUFXUixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFrSVQsa0NBQUEsRUFBbUM7RUF6SXhDO0lBVVEsV0FBVztJQUNYLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0VBWnBCO01BZ0JZLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsbUJBekJFO01BMEJGLGtCQUFrQjtNQUNsQixvQkFBb0I7TUFDcEIsVUFBVSxFQUFBO0VBeEJ0QjtRQTRCb0IsV0FBVztRQUNYLDJCQUEyQjtRQUMzQixjQUFjO1FBQ2Qsa0NBQWtDO1FBQ2xDLGlCQUFpQjtRQUNqQixXQXRDUjtRQXVDUSxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsZUFBZTtRQUNmLHVCQUF1QjtRQUN2Qiw0QkFBb0I7UUFBcEIsb0JBQW9CLEVBQUE7RUF4Q3hDO1VBMkN3QixxQkFBcUIsRUFBQTtFQTNDN0M7VUErQ3dCLGdCQUFnQixFQUFBO0VBL0N4QztRQXlEb0IscUJBQXFCLEVBQUE7RUF6RHpDO1FBOERnQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsZ0JBdkVKO1FBd0VJLFdBQVc7UUFDWCxVQUFVO1FBQ1YsNEJBQW9CO1FBQXBCLG9CQUFvQixFQUFBO0VBckVwQztRQTBFZ0IsVUFBVTtRQUNWLGtDQUEwQjtnQkFBMUIsMEJBQTBCLEVBQUE7RUEzRTFDO1FBK0VnQixRQUFRO1FBQ1Isa0NBQTBCO2dCQUExQiwwQkFBMEIsRUFBQTtFQWhGMUM7UUFvRmdCLFdBQVc7UUFDWCxrQ0FBMEI7Z0JBQTFCLDBCQUEwQixFQUFBO0VBckYxQztRQTZGZ0IsUUFBUTtRQUNSLG1DQUEyQjtnQkFBM0IsMkJBQTJCLEVBQUE7RUE5RjNDO1FBa0dnQixXQUFXO1FBQ1gsb0NBQTRCO2dCQUE1Qiw0QkFBNEIsRUFBQTtFQW5HNUM7UUF1R2dCLFVBQVU7UUFDVixrQ0FBMEI7Z0JBQTFCLDBCQUEwQixFQUFBO0VBeEcxQztJQWdIWSxxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixXQXhIQTtJQXlIQSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlLEVBQUE7RUExSDNCO01BNkhnQixnQkFBZ0IsRUFBQTtFQTdIaEM7SUFrSVksbUJBQW1CO0lBQ25CLHlCQXZJRTtJQXdJRixrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUFySTlCO0lBMklRLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFwSkk7SUFxSkosV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBb0I7SUFBcEIsb0JBQW9CLEVBQUE7RUFsSjVCO0lBc0pRLFFBQVE7SUFDUixtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUF2Sm5DO0lBMkpRLFdBQVc7SUFDWCxvQ0FBNEI7WUFBNUIsNEJBQTRCLEVBQUE7RUE1SnBDO0lBZ0tRLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFqS2xDO0lBcUtRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUF2S3BCO01BMktnQixZQUFZO01BQ1osNkJBakxKO01Ba0xJLHNCQUFzQixFQUFBO0VBN0t0QztNQWtMWSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGtDQUFrQztNQUNsQyxZQUFZO01BQ1osYUFBYTtNQUNiLFdBNUxBO01BNkxBLFVBQVU7TUFDVixTQUFTO01BQ1QsZ0JBQWdCO01BQ2hCLDJEQUE4RDtNQUE5RCxtREFBOEQ7TUFDOUQsWUFBWSxFQUFBO0VBNUx4QjtRQStMZ0IsZ0JBQWdCLEVBQUE7RUEvTGhDO1FBK0xnQixnQkFBZ0IsRUFBQTtFQS9MaEM7UUErTGdCLGdCQUFnQixFQUFBO0VBL0xoQztRQStMZ0IsZ0JBQWdCLEVBQUE7RUEvTGhDO01Bc01ZLFlBQVk7TUFDWixXQUFXO01BQ1gsMERBQTBFO01BQzFFLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGFBQWEsRUFBQTtFQTVNekI7SUFpTlEsV0FBVztJQUNYLFlBQVk7SUFDWiwyQ0FBMkQ7SUFDM0QsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsNEJBQW9CO0lBQXBCLG9CQUFvQixFQUFBO0VBdk41QjtNQTBOWSx5QkFBeUIsRUFBQTtFQTFOckM7SUErTlEscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsV0F2T0k7SUF3T0osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlLEVBQUE7RUF4T3ZCO01BMk9ZLFdBQVc7TUFDWCxjQUFjO01BQ2Qsc0NBQXNEO01BQ3RELFdBQVc7TUFDWCxZQUFZO01BQ1osV0FBVztNQUNYLGlCQUFpQixFQUFBO0VBalA3QjtJQXVQUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWUsRUFBQTtFQXpQdkI7TUE4UGdCLGNBQWM7TUFDZCxXQUFXO01BQ1gsV0FBVztNQUNYLGdCQXRRSjtNQXVRSSw0QkFBb0I7TUFBcEIsb0JBQW9CO01BQ3BCLG1DQUEyQjtjQUEzQiwyQkFBMkIsRUFBQTtFQW5RM0M7TUF1UWdCLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsV0FBVyxFQUFBO0VBelEzQjtNQTZRZ0Isa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQTlRM0I7TUFrUmdCLFVBQVU7TUFDVixXQUFXLEVBQUE7RUFuUjNCO01BdVJnQixRQUFRO01BQ1IsV0FBVyxFQUFBO0VBeFIzQjtNQTRSZ0IsVUFBVTtNQUNWLFdBQVc7TUFDWCxtQkFBbUIsRUFBQTtFQTlSbkM7TUFrU2dCLFVBQVU7TUFDVixVQUFVLEVBQUE7RUFuUzFCO1FBc1NvQixTQUFTO1FBQ1QsZ0RBQXdDO2dCQUF4Qyx3Q0FBd0MsRUFBQTtFQXZTNUQ7UUEyU29CLFNBQVM7UUFDVCxnREFBd0M7Z0JBQXhDLHdDQUF3QyxFQUFBO0VBTzVEO0VBQ0k7SUFDSSxhQUFhLEVBQUE7RUFHakI7SUFDSSxVQUFVLEVBQUEsRUFDYjtFQUdMO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEI7RUFHTDtFQUNJO0lBR1ksZUFBZSxFQUFBO0VBSDNCO0lBT1ksYUFBYSxFQUFBLEVBQ2hCO0VBS2I7RUFiSTtJQWlCWSxhQUFhLEVBQUE7RUFqQnpCO0lBcUJZLGVBQWUsRUFBQTtFQVAzQjtJQVlnQixhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLXBhZ2UvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29sb3JzOlxyXG4kYmc6ICMyMzIxMjg7XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRncmVlbjogIzdmYzQwMDtcclxuJGJsYWNrLXRleHQ6ICMwNDE0MjE7XHJcblxyXG4ubWFpbi1oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuXHJcblxyXG4gICAgICAgIC5tZW51LW1vYmlsZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgLm5hdi1tb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgJWFjdGl2ZS1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMTRweCAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDFiNTIyOTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhOm5vdCguYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlYWN0aXZlLWxpbms7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYS5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWFjdGl2ZS1saW5rO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDFiNTIyOTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJWJvcmRlcnNPdXQtYmVmb3JlLWFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm9yZGVyc091dCBhLmFjdGl2ZTpiZWZvcmUsIC5ib3JkZXJzT3V0IGEuYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWJvcmRlcnNPdXQtYmVmb3JlLWFmdGVyO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm9yZGVyc091dCBhLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJvcmRlcnNPdXQgYS5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJvcmRlcnNPdXQgYTpiZWZvcmUsIC5ib3JkZXJzT3V0IGE6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlYm9yZGVyc091dC1iZWZvcmUtYWZ0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLmJvcmRlcnNPdXQgYTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLmJvcmRlcnNPdXQgYTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLmJvcmRlcnNPdXQgYTpob3ZlcjpiZWZvcmUsIC5ib3JkZXJzT3V0IGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZm9udDogMTRweCAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEuYWN0aXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgLyogVG9wIGFuZCBCb3R0b20gYm9yZGVycyBnbyBvdXQgKi9cclxuICAgIC50b3BCb3RvbUJvcmRlcnNPdXQgYTpub3QoLmFjdGl2ZSk6YmVmb3JlLCAudG9wQm90b21Cb3JkZXJzT3V0IGE6bm90KC5hY3RpdmUpOmFmdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcEJvdG9tQm9yZGVyc091dCBhOm5vdCguYWN0aXZlKTpiZWZvcmUge1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAudG9wQm90b21Cb3JkZXJzT3V0IGE6bm90KC5hY3RpdmUpOmFmdGVyIHtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC50b3BCb3RvbUJvcmRlcnNPdXQgYTpub3QoLmFjdGl2ZSk6aG92ZXI6YmVmb3JlLCAudG9wQm90b21Cb3JkZXJzT3V0IGE6bm90KC5hY3RpdmUpOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtZm9ybXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNDlweDtcclxuXHJcbiAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udDogMTRweCAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC40cyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuNzk1LCAwLjAwMCwgMS4wMDApO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHRleHQ7XHJcblxyXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmNmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbl9zZWFyY2gucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY2NvdW50IHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvbWlrZS1icm93bi5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNmE2ODZkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMTk2ZjM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2ctaW4ge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250OiAxNHB4ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ2luLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNnB4IDAgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LXNtYWxsIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAuYnVyZ2VyIHtcclxuXHJcbiAgICAgICAgICAgIHNwYW4sIHNwYW46YmVmb3JlLCBzcGFuOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMzBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgc3BhbjpiZWZvcmUsIHNwYW46YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHNwYW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHNwYW46YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTFweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi5zZWxlY3RlZCwgLmJ0bi5zZWxlY3RlZDphZnRlciAsLmJ0bi5zZWxlY3RlZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5idG4uc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoMGRlZyk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5tZW51LWxhcmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtcmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkge1xyXG4gICAgLm1lbnUtc21hbGx7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcclxuICAgIC5tYWluLWhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgLmxvZ28tbGFyZ2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9nby1zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLm1haW4taGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAubG9nby1sYXJnZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9nby1zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtcmlnaHR7XHJcbiAgICAgICAgICAgICAgICAuc2VhcmNoLWZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile-page/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile-page/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Custom_Modal_user_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Custom-Modal/user-dialog */ "./src/app/Custom-Modal/user-dialog/index.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openMenu = false;
        this.isActivated = JSON.parse(localStorage.getItem('isActivated'));
        this.routerLinkValue = this.isActivated ? '/myProfile' : '/main';
    }
    HeaderComponent.prototype.openModal = function (id) {
        this.userDialog.openModal(id);
    };
    HeaderComponent.prototype.change = function (isLogInHidden) {
        this.onChanged.emit(isLogInHidden);
        this.isHidden = isLogInHidden;
    };
    HeaderComponent.prototype.hasClassName = function () {
        var burgerBtn = document.getElementById("burger-btn");
        return burgerBtn.classList.contains("selected");
    };
    HeaderComponent.prototype.LogOut = function () {
        localStorage.setItem('isActivated', 'false');
        this.isActivated = false;
        window.location.href = '/main';
    };
    HeaderComponent.prototype.setStyleAttribute = function (element, attrs) {
        if (attrs !== undefined) {
            Object.keys(attrs).forEach(function (key) {
                element.style[key] = attrs[key];
            });
        }
    };
    HeaderComponent.prototype.showLogInModal = function () {
        this.change(false);
        var elem = document.body;
        this.setStyleAttribute(elem, { 'overflow': 'hidden' });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HeaderComponent.prototype, "isHidden", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "onChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_Custom_Modal_user_dialog__WEBPACK_IMPORTED_MODULE_2__["UserDialogComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_Custom_Modal_user_dialog__WEBPACK_IMPORTED_MODULE_2__["UserDialogComponent"])
    ], HeaderComponent.prototype, "userDialog", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/profile-page/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/profile-page/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/profile-page/information-section/information-section.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/profile-page/information-section/information-section.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"information-bg\">\r\n    <div class=\"information_section\">\r\n        <div class=\"main-content\">\r\n            <div>\r\n                <span>About me</span>\r\n                <div>\r\n                    <span>UI/UX Designer with 3+ years of experience in designing websites,\r\n                         mobile apps and corporate identity. Strong skills in user interface \r\n                         design, user experience and also i have skills of drawing with different styles.</span>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <span>Contacts</span>\r\n                <div>\r\n                    <span>skype: maxim_stelmach</span><br>\r\n                    <span>email: stelmach.maxim@gmail.com</span><br>\r\n                    <span>website: www.creative.com</span><br>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <span>Social networks</span>\r\n                <div class=\"social-icons\">\r\n                    <img src=\"../../../assets/v-social-icon.png\" alt=\"Logo\">\r\n                    <img src=\"../../../assets/be-social-icon.png\" alt=\"Logo\">\r\n                    <img src=\"../../../assets/3-social-icon.png\" alt=\"Logo\">\r\n                    <img src=\"../../../assets/4-social-icon.png\" alt=\"Logo\">\r\n                    <img src=\"../../../assets/5-social-icon.png\" alt=\"Logo\">\r\n                    <img src=\"../../../assets/6-social-icon.png\" alt=\"Logo\">\r\n                    <img src=\"../../../assets/7-social-icon.png\" alt=\"Logo\">\r\n                    <img src=\"../../../assets/8-social-icon.png\" alt=\"Logo\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"addInform\">\r\n            <button><span>Add information</span></button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile-page/information-section/information-section.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/profile-page/information-section/information-section.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".information-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f6f6f6;\n  padding: 40px; }\n  .information-bg .information_section {\n    width: 1170px;\n    border-radius: 6px;\n    background-color: white;\n    padding: 30px 25px;\n    border-radius: 6px;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.12); }\n  .information-bg .information_section .main-content {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      padding-bottom: 50px; }\n  .information-bg .information_section .main-content div {\n        width: 320px; }\n  .information-bg .information_section .main-content div span {\n          font-size: 18px;\n          line-height: 42px;\n          color: #041421;\n          font-family: \"Work Sans\";\n          font-weight: 600; }\n  .information-bg .information_section .main-content div div span {\n          font-size: 14px;\n          color: #6a696f;\n          font-weight: 400;\n          line-height: 24px; }\n  .information-bg .information_section .main-content div .social-icons img {\n          padding-right: 10px;\n          cursor: pointer; }\n  @media screen and (max-width: 768px) {\n        .information-bg .information_section .main-content div {\n          width: 100%; } }\n  .information-bg .information_section .addInform {\n      text-align: center; }\n  .information-bg .information_section .addInform button {\n        padding: 15px 20px;\n        font-size: 16px;\n        line-height: 18px;\n        color: #c1c1c1;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        background: transparent;\n        border-radius: 30px;\n        border: 2px solid #dcdcdd;\n        outline: none;\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s; }\n  .information-bg .information_section .addInform button:hover {\n          border: 2px solid #2196f3; }\n  .information-bg .information_section .addInform button span::before {\n          content: \"\";\n          display: inline-block;\n          background: url('add-information.png') no-repeat;\n          width: 17px;\n          height: 19px;\n          margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL2luZm9ybWF0aW9uLXNlY3Rpb24vQzpcXFVzZXJzXFwxXFxEZXNrdG9wXFxnaXRodWJcXHZrb3J5dHNrYS5naXRodWIuaW9cXHNwLWFwcC9zcmNcXGFwcFxccHJvZmlsZS1wYWdlXFxpbmZvcm1hdGlvbi1zZWN0aW9uXFxpbmZvcm1hdGlvbi1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG1CQVBRO0VBUVIsYUFBYSxFQUFBO0VBTGpCO0lBUVEsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1Q0FBb0MsRUFBQTtFQWI1QztNQWdCWSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2YseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5QixvQkFBb0IsRUFBQTtFQW5CaEM7UUFzQmdCLFlBQVksRUFBQTtFQXRCNUI7VUF5Qm9CLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsY0FBYztVQUNkLHdCQUF3QjtVQUN4QixnQkFBZ0IsRUFBQTtFQTdCcEM7VUFrQ3dCLGVBQWU7VUFDZixjQUFjO1VBQ2QsZ0JBQWdCO1VBQ2hCLGlCQUFpQixFQUFBO0VBckN6QztVQTRDd0IsbUJBQW1CO1VBQ25CLGVBQWUsRUFBQTtFQUszQjtRQWxEWjtVQW9Eb0IsV0FBVyxFQUFBLEVBRWQ7RUF0RGpCO01BMkRZLGtCQUFrQixFQUFBO0VBM0Q5QjtRQThEZ0Isa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsYUFBYTtRQUNiLDRCQUFvQjtRQUFwQixvQkFBb0IsRUFBQTtFQXhFcEM7VUEyRW1CLHlCQTdFTCxFQUFBO0VBRWQ7VUFnRndCLFdBQVc7VUFDWCxxQkFBcUI7VUFDckIsZ0RBQWdFO1VBQ2hFLFdBQVc7VUFDWCxZQUFZO1VBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLXBhZ2UvaW5mb3JtYXRpb24tc2VjdGlvbi9pbmZvcm1hdGlvbi1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjZjZmNmY2O1xyXG4kYmx1ZTogIzIxOTZmMztcclxuXHJcbi5pbmZvcm1hdGlvbi1iZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogJGJnO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuXHJcbiAgICAuaW5mb3JtYXRpb25fc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDExNzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwwLDAsMC4xMik7XHJcblxyXG4gICAgICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA0MTQyMTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2YTY5NmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc29jaWFsLWljb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFkZEluZm9ybSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYzFjMWMxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RjZGNkZDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYWRkLWluZm9ybWF0aW9uLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile-page/information-section/information-section.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/profile-page/information-section/information-section.component.ts ***!
  \***********************************************************************************/
/*! exports provided: InformationSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationSectionComponent", function() { return InformationSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformationSectionComponent = /** @class */ (function () {
    function InformationSectionComponent() {
    }
    InformationSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'information-section',
            template: __webpack_require__(/*! ./information-section.component.html */ "./src/app/profile-page/information-section/information-section.component.html"),
            styles: [__webpack_require__(/*! ./information-section.component.scss */ "./src/app/profile-page/information-section/information-section.component.scss")]
        })
    ], InformationSectionComponent);
    return InformationSectionComponent;
}());



/***/ }),

/***/ "./src/app/profile-page/main-content/main-content.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/profile-page/main-content/main-content.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content_bg\">\r\n    <div>\r\n        <button [class.active]=\"isInformation\" (click)=\"getContent(1)\">Information</button>\r\n        <button [class.active]=\"isCourses\" (click)=\"getContent(2)\">Courses</button>\r\n        <button [class.active]=\"isProjects\" (click)=\"getContent(3)\">Projects</button>\r\n    </div>\r\n</div>\r\n<information-section *ngIf=\"isInformation\"></information-section>\r\n<courses *ngIf=\"isCourses\"></courses>\r\n<project *ngIf=\"isProjects\"></project>"

/***/ }),

/***/ "./src/app/profile-page/main-content/main-content.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/profile-page/main-content/main-content.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content_bg {\n  background: #f6f6f6;\n  text-align: center;\n  padding-bottom: 30px; }\n  .main-content_bg div {\n    padding: 0px 40px; }\n  .main-content_bg div button {\n      width: 124px;\n      border-radius: 25px;\n      background-color: #f6f6f6;\n      border: 2px solid #dcdcdd;\n      padding: 10px;\n      outline: none;\n      font-size: 15px;\n      line-height: 18px;\n      color: #c1c1c1;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      margin: 10px;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s; }\n  .main-content_bg div button:hover {\n        border: 2px solid #2196f3;\n        color: #2196f3; }\n  .main-content_bg div button.active {\n      border: 2px solid #2196f3;\n      color: #2196f3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL21haW4tY29udGVudC9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxwcm9maWxlLXBhZ2VcXG1haW4tY29udGVudFxcbWFpbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksbUJBTlE7RUFPUixrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7RUFIeEI7SUFNUSxpQkFBaUIsRUFBQTtFQU56QjtNQVNZLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIseUJBaEJBO01BaUJBLHlCQWZJO01BZ0JKLGFBQWE7TUFDYixhQUFhO01BQ2IsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQW5CRTtNQW9CRix3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWiw0QkFBb0I7TUFBcEIsb0JBQW9CLEVBQUE7RUFyQmhDO1FBd0JnQix5QkE1QkY7UUE2QkUsY0E3QkYsRUFBQTtFQUlkO01BOEJZLHlCQWxDRTtNQW1DRixjQW5DRSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1wYWdlL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmc6ICNmNmY2ZjY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kYm9yZGVyOiAjZGNkY2RkO1xyXG4kdGV4dDogI2MxYzFjMTtcclxuXHJcbi5tYWluLWNvbnRlbnRfYmcge1xyXG4gICAgYmFja2dyb3VuZDogJGJnO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNDBweDtcclxuICAgICAgICBcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTI0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZztcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile-page/main-content/main-content.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/profile-page/main-content/main-content.component.ts ***!
  \*********************************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
        this.isInformation = true;
        this.isCourses = false;
        this.isProjects = false;
    }
    MainContentComponent.prototype.getContent = function (numberOfPage) {
        this.isInformation = numberOfPage == pages.information;
        this.isCourses = numberOfPage == pages.courses;
        this.isProjects = numberOfPage == pages.projects;
    };
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/profile-page/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.scss */ "./src/app/profile-page/main-content/main-content.component.scss")]
        })
    ], MainContentComponent);
    return MainContentComponent;
}());

var pages;
(function (pages) {
    pages[pages["information"] = 1] = "information";
    pages[pages["courses"] = 2] = "courses";
    pages[pages["projects"] = 3] = "projects";
})(pages || (pages = {}));


/***/ }),

/***/ "./src/app/profile-page/profile-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<log-in [hidden]=\"isHidden\" [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></log-in>\r\n<header [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></header>\r\n<dashboard></dashboard>\r\n<user-information></user-information>\r\n<main-content></main-content>\r\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/profile-page/profile-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile-page/profile-page.component.ts ***!
  \********************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent() {
        this.isHidden = true;
    }
    MyProfileComponent.prototype.onChanged = function (isLogInHidden) {
        this.isHidden = isLogInHidden;
    };
    MyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-page',
            template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/profile-page/profile-page.component.html"),
        })
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile-page/project-section/project-section.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/profile-page/project-section/project-section.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-bg\">\r\n        <div class=\"projects\">\r\n            <div class=\"projects-content\">\r\n                <div *ngFor=\"let project of projects; let key = index\">\r\n                    <div class=\"project-item\">\r\n                        <!--Content of image block-->\r\n                        <div class=\"project-image\" [style.backgroundImage]=\"'url('+ project.url +')'\">\r\n                            <div class=\"share-course\" (click)=\"IsShownShareBtn(key)\"><img src=\"../../../assets/share-icon.png\" alt=\"Share\"></div>\r\n                            <div class=\"play-course\"><img src=\"../../../assets/play-icon.png\" alt=\"Play\"></div>\r\n                        </div>\r\n                        <share-buttons class=\"pt20 pl10\" *ngIf=\"project.isShownShareBtn\" \r\n                            [include]=\"['google','email','copy']\"\r\n                            [url]=\"'#'\"\r\n                        ></share-buttons> \r\n                        <div class=\"project-text\">\r\n                            <div class=\"project-name\">{{project.nameProject}}</div>\r\n                            <div class=\"flex project-user\">\r\n                                <img [src]=\"project.photo\" alt=\"User\">\r\n                                <span>{{project.author}}</span>\r\n                            </div>\r\n                            <div class=\"project-social flex\">\r\n                                <span class=\"revision\">{{project.revision}}</span>\r\n                                <span class=\"like\">{{project.like}}</span>\r\n                                <span class=\"comment\">{{project.comment}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/profile-page/project-section/project-section.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/profile-page/project-section/project-section.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f6f6f6;\n  padding: 0 40px 50px; }\n  .projects-bg .projects {\n    width: 100%;\n    max-width: 1170px; }\n  .projects-bg .projects .projects-content {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center; }\n  .projects-bg .projects .projects-content .project-item {\n        width: 256px;\n        border-radius: 6px;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.12);\n        background: white;\n        margin: 10px; }\n  .projects-bg .projects .projects-content .project-item .project-image {\n          height: 210px;\n          background-repeat: no-repeat;\n          border-radius: 6px 6px 0 0;\n          padding: 15px 15px 0;\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-pack: end;\n                  justify-content: flex-end;\n          -webkit-box-align: end;\n                  align-items: flex-end; }\n  .projects-bg .projects .projects-content .project-item .project-image .share-course, .projects-bg .projects .projects-content .project-item .project-image .play-course {\n            display: -webkit-box;\n            display: flex;\n            position: relative;\n            -webkit-box-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                    align-items: center;\n            box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n            background-color: white;\n            float: right;\n            cursor: pointer; }\n  .projects-bg .projects .projects-content .project-item .project-image .share-course {\n            width: 34px;\n            height: 34px;\n            border-radius: 17px;\n            margin-right: 10px;\n            top: 15px; }\n  .projects-bg .projects .projects-content .project-item .project-image .play-course {\n            width: 42px;\n            height: 42px;\n            border-radius: 21px;\n            top: 20px; }\n  .projects-bg .projects .projects-content .project-item .project-text {\n          padding: 15px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-name {\n            font-size: 14px;\n            line-height: 18px;\n            color: #1c1a22;\n            font-family: \"Work Sans\";\n            font-weight: 600; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user {\n            padding: 15px 0; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user img {\n              width: 42px;\n              height: 42px;\n              border-radius: 21px;\n              box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n              background-color: white;\n              margin-right: 10px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user span {\n              font-size: 14px;\n              line-height: 22px;\n              color: #1c1a22;\n              font-family: \"Open Sans\";\n              font-weight: 400; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social {\n            font-size: 12px;\n            line-height: 22px;\n            color: #b9b8bc;\n            font-family: \"Open Sans\";\n            font-weight: 600; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social span {\n              margin-right: 15px;\n              display: -webkit-inline-box;\n              display: inline-flex;\n              -webkit-box-align: center;\n                      align-items: center; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .revision::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('views.png') no-repeat;\n              background-size: cover;\n              width: 19px;\n              height: 12px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .like::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('appreciations.png') no-repeat;\n              background-size: cover;\n              width: 13px;\n              height: 12px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .comment::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('comment.png') no-repeat;\n              background-size: cover;\n              width: 12px;\n              height: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2plY3Qtc2VjdGlvbi9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxwcm9maWxlLXBhZ2VcXHByb2plY3Qtc2VjdGlvblxccHJvamVjdC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG1CQU5RO0VBT1Isb0JBQW9CLEVBQUE7RUFMeEI7SUFRUSxXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFUekI7TUFZWSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2Ysd0JBQXVCO2NBQXZCLHVCQUF1QixFQUFBO0VBZG5DO1FBaUJnQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHVDQUFvQztRQUNwQyxpQkFBaUI7UUFDakIsWUFBWSxFQUFBO0VBckI1QjtVQXdCb0IsYUFBYTtVQUNiLDRCQUE0QjtVQUM1QiwwQkFBMEI7VUFDMUIsb0JBQW9CO1VBQ3BCLG9CQUFhO1VBQWIsYUFBYTtVQUNiLHFCQUF5QjtrQkFBekIseUJBQXlCO1VBQ3pCLHNCQUFxQjtrQkFBckIscUJBQXFCLEVBQUE7RUE5QnpDO1lBaUN3QixvQkFBYTtZQUFiLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsd0JBQXVCO29CQUF2Qix1QkFBdUI7WUFDdkIseUJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsdUNBQW9DO1lBQ3BDLHVCQUF1QjtZQUN2QixZQUFZO1lBQ1osZUFBZSxFQUFBO0VBeEN2QztZQTZDd0IsV0FBVztZQUNYLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLFNBQVMsRUFBQTtFQWpEakM7WUFzRHdCLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFNBQVMsRUFBQTtFQXpEakM7VUE4RG9CLGFBQWEsRUFBQTtFQTlEakM7WUFpRXdCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0IsRUFBQTtFQXJFeEM7WUF5RXdCLGVBQWUsRUFBQTtFQXpFdkM7Y0E0RTRCLFdBQVc7Y0FDWCxZQUFZO2NBQ1osbUJBQW1CO2NBQ25CLHVDQUFvQztjQUNwQyx1QkFBdUI7Y0FDdkIsa0JBQWtCLEVBQUE7RUFqRjlDO2NBcUY0QixlQUFlO2NBQ2YsaUJBQWlCO2NBQ2pCLGNBQWM7Y0FDZCx3QkFBd0I7Y0FDeEIsZ0JBQWdCLEVBQUE7RUF6RjVDO1lBOEZ3QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUE7RUFsR3hDO2NBcUc0QixrQkFBa0I7Y0FDbEIsMkJBQW9CO2NBQXBCLG9CQUFvQjtjQUNwQix5QkFBbUI7c0JBQW5CLG1CQUFtQixFQUFBO0VBdkcvQztjQTZHZ0MsV0FBVztjQUNYLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsc0NBQXNEO2NBQ3RELHNCQUFzQjtjQUN0QixXQUFXO2NBQ1gsWUFBWSxFQUFBO0VBbkg1QztjQTJIZ0MsV0FBVztjQUNYLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsOENBQThEO2NBQzlELHNCQUFzQjtjQUN0QixXQUFXO2NBQ1gsWUFBWSxFQUFBO0VBakk1QztjQXdJZ0MsV0FBVztjQUNYLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsd0NBQXdEO2NBQ3hELHNCQUFzQjtjQUN0QixXQUFXO2NBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2plY3Qtc2VjdGlvbi9wcm9qZWN0LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmc6ICNmNmY2ZjY7XHJcblxyXG4ucHJvamVjdHMtYmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgIHBhZGRpbmc6IDAgNDBweCA1MHB4O1xyXG5cclxuICAgIC5wcm9qZWN0cyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcblxyXG4gICAgICAgIC5wcm9qZWN0cy1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWl0ZW0geyAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1NnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJXByb2plY3QtaW1hZ2UtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLDAsMCwwLjEzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNoYXJlLWNvdXJzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXByb2plY3QtaW1hZ2UtaWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucGxheS1jb3Vyc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVwcm9qZWN0LWltYWdlLWljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2plY3QtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3QtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWMxYTIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LXVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLDAuMTMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFjMWEyMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3Qtc29jaWFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiOWI4YmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXZpc2lvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmlld3MucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saWtlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2FwcHJlY2lhdGlvbnMucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jb21tZW50LnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile-page/project-section/project-section.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile-page/project-section/project-section.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSectionComponent", function() { return ProjectSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons */ "./src/app/icons.ts");



var ProjectSectionComponent = /** @class */ (function () {
    function ProjectSectionComponent() {
        this.projects = [
            { id: 1, isShownShareBtn: false, url: '../../../assets/project-1.png', author: 'Nedko Ivanov', photo: '../../../assets/user-logo.png', nameProject: 'Digital drawing of portrait', revision: 247, like: 53, comment: 12 },
            { id: 2, isShownShareBtn: false, url: '../../../assets/project-2.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1139, like: 128, comment: 120 },
            { id: 3, isShownShareBtn: false, url: '../../../assets/project-3.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Promotional artwork', revision: 1178, like: 138, comment: 27 },
            { id: 4, isShownShareBtn: false, url: '../../../assets/project-4.png', author: 'Sanketh Yayathi', photo: '../../../assets/user-logo.png', nameProject: 'Drawing characters', revision: 1077, like: 357, comment: 12 },
            { id: 5, isShownShareBtn: false, url: '../../../assets/project-5.png', author: 'Ramón Nuñez', photo: '../../../assets/user-logo.png', nameProject: 'Oil painting', revision: 16139, like: 3028, comment: 200 },
            { id: 6, isShownShareBtn: false, url: '../../../assets/project-6.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1276, like: 168, comment: 64 },
            { id: 7, isShownShareBtn: false, url: '../../../assets/project-7.png', author: 'Sung Choi', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1009, like: 88, comment: 36 },
            { id: 8, isShownShareBtn: false, url: '../../../assets/project-8.png', author: 'Nemanja Abazovic', photo: '../../../assets/user-logo.png', nameProject: 'Artwork', revision: 4139, like: 828, comment: 129 },
            { id: 9, isShownShareBtn: false, url: '../../../assets/project-9.png', author: 'Bram Vanhaeren', photo: '../../../assets/user-logo.png', nameProject: 'Drawing characters', revision: 16139, like: 3028, comment: 200 },
            { id: 10, isShownShareBtn: false, url: '../../../assets/project-10.png', author: 'Ismail Inceoglu', photo: '../../../assets/user-logo.png', nameProject: 'Oil painting', revision: 480, like: 90, comment: 12 },
            { id: 11, isShownShareBtn: false, url: '../../../assets/project-11.png', author: 'Nedko Ivanov', photo: '../../../assets/user-logo.png', nameProject: 'Digital drawing of portrait', revision: 1276, like: 168, comment: 64 },
            { id: 12, isShownShareBtn: false, url: '../../../assets/project-12.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1009, like: 138, comment: 36 }
        ];
    }
    ProjectSectionComponent.prototype.IsShownShareBtn = function (key) {
        for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.isShownShareBtn = key == entry.id - 1 && !entry.isShownShareBtn;
        }
    };
    ProjectSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'project',
            template: __webpack_require__(/*! ./project-section.component.html */ "./src/app/profile-page/project-section/project-section.component.html"),
            styles: [__webpack_require__(/*! ./project-section.component.scss */ "./src/app/profile-page/project-section/project-section.component.scss")]
        })
    ], ProjectSectionComponent);
    return ProjectSectionComponent;
}());



/***/ }),

/***/ "./src/app/profile-page/user-information/user-information.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/profile-page/user-information/user-information.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-inform-bg\">\r\n        <div class=\"user-inform_section pr40 pl40\">\r\n          <div class=\"user-logo\">\r\n            <div class=\"user-logo_photo\">            \r\n                <img src=\"../../../assets/user-logo.png\" alt=\"logo\">\r\n                <div class=\"status PRO\"><span>PRO</span></div>\r\n            </div>\r\n\r\n            <div class=\"user-logo_name\">\r\n                <span>Sylvain Sarrailh</span><br>\r\n                <span>Concept artist, Freelance</span><br>\r\n                <span class=\"location\">Toulouse, France</span><br>\r\n            </div>\r\n          </div>\r\n          <div class=\"statistic\">\r\n            <div class=\"statistic_element\">\r\n                <div><span>Account views</span></div>\r\n                <div><span class=\"views\">144,377</span></div>\r\n            </div>\r\n            <div class=\"statistic_element\">\r\n                <div><span>Appreciations</span></div>\r\n                <div class=\"appreciations\"><span>23,195</span></div>\r\n            </div>\r\n            <div class=\"statistic_element\">\r\n                <div><span>Following</span></div>\r\n                <div class=\"following\"><span>320</span></div>\r\n            </div>\r\n            <div class=\"statistic_element\">\r\n                <div><span>Followers</span></div>\r\n                <div class=\"followers\"><span>982</span></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"countProject\">\r\n                <div class=\"countProject_element\">\r\n                    <div><span>My courses</span></div>\r\n                    <div><span>43</span></div>\r\n                </div>\r\n                <div class=\"countProject_element\">\r\n                    <div><span>My project</span></div>\r\n                    <div><span>12</span></div>\r\n                </div>\r\n          </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/profile-page/user-information/user-information.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/profile-page/user-information/user-information.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-inform-bg {\n  background: #f6f6f6;\n  padding: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .user-inform-bg .user-inform_section {\n    display: -webkit-box;\n    display: flex;\n    width: 1170px;\n    -webkit-box-align: baseline;\n            align-items: baseline;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n    background: white;\n    padding: 25px; }\n  .user-inform-bg .user-inform_section .user-logo {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      flex-wrap: wrap; }\n  @media screen and (max-width: 671px) {\n        .user-inform-bg .user-inform_section .user-logo {\n          -webkit-box-pack: center;\n                  justify-content: center;\n          width: 100%; } }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_photo img {\n        width: 110px;\n        height: 110px;\n        border-radius: 55px;\n        margin-right: 25px; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_photo .status.PRO {\n        position: relative;\n        bottom: 15px;\n        left: 25px;\n        width: -webkit-fit-content;\n        width: -moz-fit-content;\n        width: fit-content;\n        padding: 3px 10px;\n        border-radius: 6px;\n        color: white;\n        background: #2196f3; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(1), .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(3), .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(5) {\n        line-height: 25px;\n        color: #1c1a22;\n        font-family: \"Open Sans\";\n        font-weight: 600; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(1) {\n        font-size: 18px; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(3) {\n        font-size: 14px; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(5) {\n        font-size: 14px;\n        color: #6a696f;\n        font-weight: 400; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(5)::before {\n          content: \"\";\n          display: inline-block;\n          background: url('location.png') no-repeat;\n          width: 10px;\n          height: 18px;\n          padding-right: 15px;\n          position: relative;\n          top: 5px; }\n  .user-inform-bg .user-inform_section .statistic {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      flex-wrap: wrap; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element {\n        padding: 0 20px; }\n  @media screen and (max-width: 671px) {\n          .user-inform-bg .user-inform_section .statistic .statistic_element {\n            width: 50%; } }\n  @media screen and (max-width: 435px) {\n          .user-inform-bg .user-inform_section .statistic .statistic_element {\n            width: 100%; } }\n  .user-inform-bg .user-inform_section .statistic .statistic_element div:nth-child(1) {\n          font-size: 15px;\n          line-height: 42px;\n          color: #232128;\n          font-family: \"Work Sans\";\n          font-weight: 600;\n          text-align: center; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element div:nth-child(2) {\n          font-size: 14px;\n          color: #6a696f;\n          font-family: \"Open Sans\";\n          text-align: right;\n          padding: 5px; }\n  @media screen and (max-width: 671px) {\n            .user-inform-bg .user-inform_section .statistic .statistic_element div:nth-child(2) {\n              text-align: center; } }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .views::before, .user-inform-bg .user-inform_section .statistic .statistic_element .appreciations::before, .user-inform-bg .user-inform_section .statistic .statistic_element .following::before, .user-inform-bg .user-inform_section .statistic .statistic_element .followers::before {\n          content: \"\";\n          display: inline-block;\n          height: 27px;\n          position: relative;\n          top: 9px;\n          margin-right: 10px; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .views::before {\n          background: url('views.png') no-repeat;\n          width: 40px; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .appreciations::before {\n          background: url('appreciations.png') no-repeat;\n          width: 27px; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .following::before {\n          background: url('following.png') no-repeat;\n          width: 32px; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .followers::before {\n          background: url('followers.png') no-repeat;\n          width: 32px; }\n  .user-inform-bg .user-inform_section .countProject {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n              justify-content: space-between; }\n  @media screen and (max-width: 671px) {\n        .user-inform-bg .user-inform_section .countProject {\n          width: 100%;\n          -webkit-box-pack: center;\n                  justify-content: center; } }\n  .user-inform-bg .user-inform_section .countProject .countProject_element {\n        padding: 0 20px; }\n  .user-inform-bg .user-inform_section .countProject .countProject_element div:nth-child(1) {\n          font-size: 15px;\n          line-height: 42px;\n          color: #232128;\n          font-family: \"Work Sans\";\n          font-weight: 600;\n          text-align: center; }\n  .user-inform-bg .user-inform_section .countProject .countProject_element div:nth-child(2) {\n          font-size: 36px;\n          color: #2196f3;\n          font-family: \"Open Sans\";\n          padding: 5px;\n          text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL3VzZXItaW5mb3JtYXRpb24vQzpcXFVzZXJzXFwxXFxEZXNrdG9wXFxnaXRodWJcXHZrb3J5dHNrYS5naXRodWIuaW9cXHNwLWFwcC9zcmNcXGFwcFxccHJvZmlsZS1wYWdlXFx1c2VyLWluZm9ybWF0aW9uXFx1c2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksbUJBTlE7RUFPUixhQUFhO0VBQ2Isb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0VBSjNCO0lBT1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWEsRUFBQTtFQWJyQjtNQWlCWSxvQkFBYTtNQUFiLGFBQWE7TUFDYix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLHlCQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIsZUFBZSxFQUFBO0VBRWY7UUF0Qlo7VUF1QmdCLHdCQUF1QjtrQkFBdkIsdUJBQXVCO1VBQ3ZCLFdBQVcsRUFBQSxFQTREbEI7RUFwRlQ7UUE4Qm9CLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQixFQUFBO0VBakN0QztRQXFDb0Isa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixVQUFVO1FBQ1YsMEJBQWtCO1FBQWxCLHVCQUFrQjtRQUFsQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osbUJBaEROLEVBQUE7RUFJZDtRQWlEZ0IsaUJBQWlCO1FBQ2pCLGNBckRFO1FBc0RGLHdCQUF3QjtRQUN4QixnQkFBZ0IsRUFBQTtFQXBEaEM7UUEwRG9CLGVBQWUsRUFBQTtFQTFEbkM7UUErRG9CLGVBQWUsRUFBQTtFQS9EbkM7UUFvRW9CLGVBQWU7UUFDZixjQXZFRDtRQXdFQyxnQkFBZ0IsRUFBQTtFQXRFcEM7VUF5RXdCLFdBQVc7VUFDWCxxQkFBcUI7VUFDckIseUNBQXlEO1VBQ3pELFdBQVc7VUFDWCxZQUFZO1VBQ1osbUJBQW1CO1VBQ25CLGtCQUFrQjtVQUNsQixRQUFRLEVBQUE7RUFoRmhDO01BdUZZLG9CQUFhO01BQWIsYUFBYTtNQUNiLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5QixlQUFlLEVBQUE7RUExRjNCO1FBNkZnQixlQUFlLEVBQUE7RUFFZjtVQS9GaEI7WUFnR29CLFVBQVUsRUFBQSxFQXFFakI7RUFsRUc7VUFuR2hCO1lBb0dvQixXQUFXLEVBQUEsRUFpRWxCO0VBcktiO1VBd0dvQixlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGNBQWM7VUFDZCx3QkFBd0I7VUFDeEIsZ0JBQWdCO1VBQ2hCLGtCQUFrQixFQUFBO0VBN0d0QztVQWlIb0IsZUFBZTtVQUNmLGNBcEhEO1VBcUhDLHdCQUF3QjtVQUN4QixpQkFBaUI7VUFDakIsWUFBWSxFQUFBO0VBRVo7WUF2SHBCO2NBd0h3QixrQkFBa0IsRUFBQSxFQUd6QjtFQTNIakI7VUE4SG9CLFdBQVc7VUFDWCxxQkFBcUI7VUFDckIsWUFBWTtVQUNaLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1Isa0JBQWtCLEVBQUE7RUFuSXRDO1VBeUl3QixzQ0FBc0Q7VUFDdEQsV0FBVyxFQUFBO0VBMUluQztVQWlKd0IsOENBQThEO1VBQzlELFdBQVcsRUFBQTtFQWxKbkM7VUF5SndCLDBDQUEwRDtVQUMxRCxXQUFXLEVBQUE7RUExSm5DO1VBaUt3QiwwQ0FBMEQ7VUFDMUQsV0FBVyxFQUFBO0VBbEtuQztNQXlLWSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2YseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix5QkFBOEI7Y0FBOUIsOEJBQThCLEVBQUE7RUFFOUI7UUE5S1o7VUErS2dCLFdBQVc7VUFDWCx3QkFBdUI7a0JBQXZCLHVCQUF1QixFQUFBLEVBdUI5QjtFQXZNVDtRQW9MZ0IsZUFBZSxFQUFBO0VBcEwvQjtVQXVMb0IsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixjQUFjO1VBQ2Qsd0JBQXdCO1VBQ3hCLGdCQUFnQjtVQUNoQixrQkFBa0IsRUFBQTtFQTVMdEM7VUFnTW9CLGVBQWU7VUFDZixjQXJNTjtVQXNNTSx3QkFBd0I7VUFDeEIsWUFBWTtVQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1wYWdlL3VzZXItaW5mb3JtYXRpb24vdXNlci1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZzogI2Y2ZjZmNjtcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRib2xkLXRleHQ6IzFjMWEyMjtcclxuJGdyZXktdGV4dDogIzZhNjk2ZjtcclxuXHJcbi51c2VyLWluZm9ybS1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC51c2VyLWluZm9ybV9zZWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuXHJcblxyXG4gICAgICAgIC51c2VyLWxvZ28ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MXB4KSB7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci1sb2dvX3Bob3RvIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3RhdHVzLlBSTyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAldXNlck5hbWVGb250IHtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRib2xkLXRleHQ7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51c2VyLWxvZ29fbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldXNlck5hbWVGb250O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldXNlck5hbWVGb250O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAldXNlck5hbWVGb250O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXktdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2xvY2F0aW9uLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0aXN0aWMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICAgIC5zdGF0aXN0aWNfZWxlbWVudCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcxcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjMyMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXktdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICViZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC52aWV3cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlYmVmb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy92aWV3cy5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYXBwcmVjaWF0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlYmVmb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9hcHByZWNpYXRpb25zLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb2xsb3dpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWJlZm9yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9sbG93aW5nLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb2xsb3dlcnMge1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWJlZm9yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9sbG93ZXJzLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRQcm9qZWN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzFweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvdW50UHJvamVjdF9lbGVtZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMzIxMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/profile-page/user-information/user-information.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/profile-page/user-information/user-information.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInformationComponent", function() { return UserInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserInformationComponent = /** @class */ (function () {
    function UserInformationComponent() {
    }
    UserInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-information',
            template: __webpack_require__(/*! ./user-information.component.html */ "./src/app/profile-page/user-information/user-information.component.html"),
            styles: [__webpack_require__(/*! ./user-information.component.scss */ "./src/app/profile-page/user-information/user-information.component.scss")]
        })
    ], UserInformationComponent);
    return UserInformationComponent;
}());



/***/ }),

/***/ "./src/app/projects-page/project-content/project-content.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/projects-page/project-content/project-content.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-bg\">\r\n    <div class=\"projects\">\r\n        <div class=\"projects-content\">\r\n            <div *ngFor=\"let project of projects; let key = index\">\r\n                <div class=\"project-item\">\r\n                    <!--Content of image block-->\r\n                    <div class=\"project-image\" [style.backgroundImage]=\"'url('+ project.url +')'\">\r\n                        <div class=\"share-course\" (click)=\"IsShownShareBtn(key)\"><img src=\"../../../assets/share-icon.png\" alt=\"Share\"></div>\r\n                        <div class=\"play-course\"><img src=\"../../../assets/play-icon.png\" alt=\"Play\"></div>\r\n                    </div>\r\n                    <share-buttons class=\"pt20 pl10\" *ngIf=\"project.isShownShareBtn\" \r\n                        [include]=\"['google','email','copy']\"\r\n                        [url]=\"'#'\"\r\n                    ></share-buttons>  \r\n                    <div class=\"project-text\">\r\n                        <div class=\"project-name\">{{project.nameProject}}</div>\r\n                        <div class=\"flex project-user\">\r\n                            <img [src]=\"project.photo\" alt=\"User\">\r\n                            <span>{{project.author}}</span>\r\n                        </div>\r\n                        <div class=\"project-social flex\">\r\n                            <span class=\"revision\">{{project.revision}}</span>\r\n                            <span class=\"like\">{{project.like}}</span>\r\n                            <span class=\"comment\">{{project.comment}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects-page/project-content/project-content.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/projects-page/project-content/project-content.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f6f6f6;\n  padding: 100px 40px 50px; }\n  .projects-bg .projects {\n    width: 100%; }\n  .projects-bg .projects .projects-content {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center; }\n  .projects-bg .projects .projects-content .project-item {\n        width: 256px;\n        border-radius: 6px;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.12);\n        background: white;\n        margin: 10px; }\n  .projects-bg .projects .projects-content .project-item .project-image {\n          height: 210px;\n          background-repeat: no-repeat;\n          border-radius: 6px 6px 0 0;\n          padding: 15px 15px 0;\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-pack: end;\n                  justify-content: flex-end;\n          -webkit-box-align: end;\n                  align-items: flex-end; }\n  .projects-bg .projects .projects-content .project-item .project-image .share-course, .projects-bg .projects .projects-content .project-item .project-image .play-course {\n            display: -webkit-box;\n            display: flex;\n            position: relative;\n            -webkit-box-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                    align-items: center;\n            box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n            background-color: white;\n            float: right;\n            cursor: pointer; }\n  .projects-bg .projects .projects-content .project-item .project-image .share-course {\n            width: 34px;\n            height: 34px;\n            border-radius: 17px;\n            margin-right: 10px;\n            top: 15px; }\n  .projects-bg .projects .projects-content .project-item .project-image .play-course {\n            width: 42px;\n            height: 42px;\n            border-radius: 21px;\n            top: 20px; }\n  .projects-bg .projects .projects-content .project-item .project-text {\n          padding: 15px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-name {\n            font-size: 14px;\n            line-height: 18px;\n            color: #1c1a22;\n            font-family: \"Work Sans\";\n            font-weight: 600; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user {\n            padding: 15px 0; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user img {\n              width: 42px;\n              height: 42px;\n              border-radius: 21px;\n              box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n              background-color: white;\n              margin-right: 10px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user span {\n              font-size: 14px;\n              line-height: 22px;\n              color: #1c1a22;\n              font-family: \"Open Sans\";\n              font-weight: 400; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social {\n            font-size: 12px;\n            line-height: 22px;\n            color: #b9b8bc;\n            font-family: \"Open Sans\";\n            font-weight: 600; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social span {\n              margin-right: 15px;\n              display: -webkit-inline-box;\n              display: inline-flex;\n              -webkit-box-align: center;\n                      align-items: center; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .revision::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('views.png') no-repeat;\n              background-size: cover;\n              width: 19px;\n              height: 12px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .like::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('appreciations.png') no-repeat;\n              background-size: cover;\n              width: 13px;\n              height: 12px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .comment::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('comment.png') no-repeat;\n              background-size: cover;\n              width: 12px;\n              height: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMtcGFnZS9wcm9qZWN0LWNvbnRlbnQvQzpcXFVzZXJzXFwxXFxEZXNrdG9wXFxnaXRodWJcXHZrb3J5dHNrYS5naXRodWIuaW9cXHNwLWFwcC9zcmNcXGFwcFxccHJvamVjdHMtcGFnZVxccHJvamVjdC1jb250ZW50XFxwcm9qZWN0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsbUJBTlE7RUFPUix3QkFBd0IsRUFBQTtFQUw1QjtJQVFRLFdBQVcsRUFBQTtFQVJuQjtNQVdZLG9CQUFhO01BQWIsYUFBYTtNQUNiLGVBQWU7TUFDZix3QkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUFibkM7UUFnQmdCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsdUNBQW9DO1FBQ3BDLGlCQUFpQjtRQUNqQixZQUFZLEVBQUE7RUFwQjVCO1VBdUJvQixhQUFhO1VBQ2IsNEJBQTRCO1VBQzVCLDBCQUEwQjtVQUMxQixvQkFBb0I7VUFDcEIsb0JBQWE7VUFBYixhQUFhO1VBQ2IscUJBQXlCO2tCQUF6Qix5QkFBeUI7VUFDekIsc0JBQXFCO2tCQUFyQixxQkFBcUIsRUFBQTtFQTdCekM7WUFnQ3dCLG9CQUFhO1lBQWIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQix3QkFBdUI7b0JBQXZCLHVCQUF1QjtZQUN2Qix5QkFBbUI7b0JBQW5CLG1CQUFtQjtZQUNuQix1Q0FBb0M7WUFDcEMsdUJBQXVCO1lBQ3ZCLFlBQVk7WUFDWixlQUFlLEVBQUE7RUF2Q3ZDO1lBNEN3QixXQUFXO1lBQ1gsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsU0FBUyxFQUFBO0VBaERqQztZQXFEd0IsV0FBVztZQUNYLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsU0FBUyxFQUFBO0VBeERqQztVQTZEb0IsYUFBYSxFQUFBO0VBN0RqQztZQWdFd0IsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsd0JBQXdCO1lBQ3hCLGdCQUFnQixFQUFBO0VBcEV4QztZQXdFd0IsZUFBZSxFQUFBO0VBeEV2QztjQTJFNEIsV0FBVztjQUNYLFlBQVk7Y0FDWixtQkFBbUI7Y0FDbkIsdUNBQW9DO2NBQ3BDLHVCQUF1QjtjQUN2QixrQkFBa0IsRUFBQTtFQWhGOUM7Y0FvRjRCLGVBQWU7Y0FDZixpQkFBaUI7Y0FDakIsY0FBYztjQUNkLHdCQUF3QjtjQUN4QixnQkFBZ0IsRUFBQTtFQXhGNUM7WUE2RndCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0IsRUFBQTtFQWpHeEM7Y0FvRzRCLGtCQUFrQjtjQUNsQiwyQkFBb0I7Y0FBcEIsb0JBQW9CO2NBQ3BCLHlCQUFtQjtzQkFBbkIsbUJBQW1CLEVBQUE7RUF0Ry9DO2NBNEdnQyxXQUFXO2NBQ1gscUJBQXFCO2NBQ3JCLGlCQUFpQjtjQUNqQixzQ0FBc0Q7Y0FDdEQsc0JBQXNCO2NBQ3RCLFdBQVc7Y0FDWCxZQUFZLEVBQUE7RUFsSDVDO2NBMEhnQyxXQUFXO2NBQ1gscUJBQXFCO2NBQ3JCLGlCQUFpQjtjQUNqQiw4Q0FBOEQ7Y0FDOUQsc0JBQXNCO2NBQ3RCLFdBQVc7Y0FDWCxZQUFZLEVBQUE7RUFoSTVDO2NBdUlnQyxXQUFXO2NBQ1gscUJBQXFCO2NBQ3JCLGlCQUFpQjtjQUNqQix3Q0FBd0Q7Y0FDeEQsc0JBQXNCO2NBQ3RCLFdBQVc7Y0FDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy1wYWdlL3Byb2plY3QtY29udGVudC9wcm9qZWN0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmc6ICNmNmY2ZjY7XHJcblxyXG4ucHJvamVjdHMtYmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgIHBhZGRpbmc6IDEwMHB4IDQwcHggNTBweDtcclxuXHJcbiAgICAucHJvamVjdHMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAucHJvamVjdHMtY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiBcclxuICAgICAgICAgICAgLnByb2plY3QtaXRlbSB7ICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjU2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2plY3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAlcHJvamVjdC1pbWFnZS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLDAuMTMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2hhcmUtY291cnNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlcHJvamVjdC1pbWFnZS1pY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wbGF5LWNvdXJzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXByb2plY3QtaW1hZ2UtaWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucHJvamVjdC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYzFhMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3QtdXNlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwwLDAsMC4xMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWMxYTIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdC1zb2NpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I5YjhiYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJldmlzaW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy92aWV3cy5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpa2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYXBwcmVjaWF0aW9ucy5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb21tZW50IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2NvbW1lbnQucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/projects-page/project-content/project-content.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/projects-page/project-content/project-content.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectContentComponent", function() { return ProjectContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectContentComponent = /** @class */ (function () {
    function ProjectContentComponent() {
        this.projects = [
            { id: 1, isShownShareBtn: false, url: '../../../assets/project-1.png', author: 'Nedko Ivanov', photo: '../../../assets/user-logo.png', nameProject: 'Digital drawing of portrait', revision: 247, like: 53, comment: 12 },
            { id: 2, isShownShareBtn: false, url: '../../../assets/project-2.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1139, like: 128, comment: 120 },
            { id: 3, isShownShareBtn: false, url: '../../../assets/project-3.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Promotional artwork', revision: 1178, like: 138, comment: 27 },
            { id: 4, isShownShareBtn: false, url: '../../../assets/project-4.png', author: 'Sanketh Yayathi', photo: '../../../assets/user-logo.png', nameProject: 'Drawing characters', revision: 1077, like: 357, comment: 12 },
            { id: 5, isShownShareBtn: false, url: '../../../assets/project-5.png', author: 'Ramón Nuñez', photo: '../../../assets/user-logo.png', nameProject: 'Oil painting', revision: 16139, like: 3028, comment: 200 },
            { id: 6, isShownShareBtn: false, url: '../../../assets/project-6.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1276, like: 168, comment: 64 },
            { id: 7, isShownShareBtn: false, url: '../../../assets/project-7.png', author: 'Sung Choi', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1009, like: 88, comment: 36 },
            { id: 8, isShownShareBtn: false, url: '../../../assets/project-8.png', author: 'Nemanja Abazovic', photo: '../../../assets/user-logo.png', nameProject: 'Artwork', revision: 4139, like: 828, comment: 129 },
            { id: 9, isShownShareBtn: false, url: '../../../assets/project-9.png', author: 'Bram Vanhaeren', photo: '../../../assets/user-logo.png', nameProject: 'Drawing characters', revision: 16139, like: 3028, comment: 200 },
            { id: 10, isShownShareBtn: false, url: '../../../assets/project-10.png', author: 'Ismail Inceoglu', photo: '../../../assets/user-logo.png', nameProject: 'Oil painting', revision: 480, like: 90, comment: 12 },
            { id: 11, isShownShareBtn: false, url: '../../../assets/project-11.png', author: 'Nedko Ivanov', photo: '../../../assets/user-logo.png', nameProject: 'Digital drawing of portrait', revision: 1276, like: 168, comment: 64 },
            { id: 12, isShownShareBtn: false, url: '../../../assets/project-12.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1009, like: 138, comment: 36 },
            { id: 13, isShownShareBtn: false, url: '../../../assets/project-1.png', author: 'Nedko Ivanov', photo: '../../../assets/user-logo.png', nameProject: 'Digital drawing of portrait', revision: 247, like: 53, comment: 12 },
            { id: 14, isShownShareBtn: false, url: '../../../assets/project-2.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1139, like: 128, comment: 120 },
            { id: 15, isShownShareBtn: false, url: '../../../assets/project-3.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Promotional artwork', revision: 1178, like: 138, comment: 27 },
            { id: 16, isShownShareBtn: false, url: '../../../assets/project-4.png', author: 'Sanketh Yayathi', photo: '../../../assets/user-logo.png', nameProject: 'Drawing characters', revision: 1077, like: 357, comment: 12 },
            { id: 17, isShownShareBtn: false, url: '../../../assets/project-5.png', author: 'Ramón Nuñez', photo: '../../../assets/user-logo.png', nameProject: 'Oil painting', revision: 16139, like: 3028, comment: 200 },
            { id: 18, isShownShareBtn: false, url: '../../../assets/project-6.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1276, like: 168, comment: 64 },
            { id: 19, isShownShareBtn: false, url: '../../../assets/project-7.png', author: 'Sung Choi', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1009, like: 88, comment: 36 },
            { id: 20, isShownShareBtn: false, url: '../../../assets/project-8.png', author: 'Nemanja Abazovic', photo: '../../../assets/user-logo.png', nameProject: 'Artwork', revision: 4139, like: 828, comment: 129 },
            { id: 21, isShownShareBtn: false, url: '../../../assets/project-9.png', author: 'Bram Vanhaeren', photo: '../../../assets/user-logo.png', nameProject: 'Drawing characters', revision: 16139, like: 3028, comment: 200 },
            { id: 22, isShownShareBtn: false, url: '../../../assets/project-10.png', author: 'Ismail Inceoglu', photo: '../../../assets/user-logo.png', nameProject: 'Oil painting', revision: 480, like: 90, comment: 12 },
            { id: 23, isShownShareBtn: false, url: '../../../assets/project-11.png', author: 'Nedko Ivanov', photo: '../../../assets/user-logo.png', nameProject: 'Digital drawing of portrait', revision: 1276, like: 168, comment: 64 },
            { id: 24, isShownShareBtn: false, url: '../../../assets/project-12.png', author: 'Sylvain Sarrailh', photo: '../../../assets/user-logo.png', nameProject: 'Drawing the landscape', revision: 1009, like: 138, comment: 36 }
        ];
    }
    ProjectContentComponent.prototype.IsShownShareBtn = function (key) {
        for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.isShownShareBtn = key == entry.id - 1 && !entry.isShownShareBtn;
        }
    };
    ProjectContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'projectContent',
            template: __webpack_require__(/*! ./project-content.component.html */ "./src/app/projects-page/project-content/project-content.component.html"),
            styles: [__webpack_require__(/*! ./project-content.component.scss */ "./src/app/projects-page/project-content/project-content.component.scss")]
        })
    ], ProjectContentComponent);
    return ProjectContentComponent;
}());



/***/ }),

/***/ "./src/app/projects-page/project-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/projects-page/project-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<log-in [hidden]=\"isHidden\" [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></log-in>\r\n<header [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></header>\r\n<projectContent></projectContent>\r\n<main-footer></main-footer> "

/***/ }),

/***/ "./src/app/projects-page/project-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/projects-page/project-page.component.ts ***!
  \*********************************************************/
/*! exports provided: ProjectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageComponent", function() { return ProjectPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectPageComponent = /** @class */ (function () {
    function ProjectPageComponent() {
        this.isHidden = true;
    }
    ProjectPageComponent.prototype.onChanged = function (isLogInHidden) {
        this.isHidden = isLogInHidden;
    };
    ProjectPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'project-page',
            template: __webpack_require__(/*! ./project-page.component.html */ "./src/app/projects-page/project-page.component.html"),
        })
    ], ProjectPageComponent);
    return ProjectPageComponent;
}());



/***/ }),

/***/ "./src/app/students-page/student-component/student-content.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/students-page/student-component/student-content.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-title pr40 pl40\">\r\n    <div>\r\n        <h2>Students of Speed Painting school</h2>\r\n        <h6>All courses are created on the basis of academic programs, combine deep theoretical knowledge and practice.</h6>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"filtration\">\r\n    <div class=\"search-hero\">\r\n        <div class=\"search\">\r\n            <div class=\"styled-select\">\r\n                <select class=\"custom-select\" (change)=\"changeStatus($event)\">\r\n                    <option>Artist status</option>\r\n                    <option *ngFor=\"let state of states; let i=index\" [ngValue]=\"state\">{{state}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"styled-select\">\r\n                <select class=\"custom-select\" (change)=\"changeDirection($event)\">\r\n                    <option>Artistic direction</option>\r\n                    <option *ngFor=\"let direction of directions; let i=index\" [ngValue]=\"direction\">{{direction}}\r\n                    </option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\"\r\n            placeholder=\"Enter Artist name...\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"students container-fluid flex-align-center pr40 pl40\">\r\n    <div class=\"students-container\">\r\n        <div *ngFor=\"let project of projects| filterData: {author: searchText, state: searchStatus, direction:searchDirection}\"\r\n            class=\"flex-align-center w-100 container_bg wrap\">\r\n            <!--Content-->\r\n            <div class=\"student-section\">\r\n                <div class=\"student_photo\">\r\n                    <!--photo-->\r\n                    <img [src]=\"project.photo\" alt=\"\">\r\n                    <!--status-->\r\n                    <div class=\"status\" [ngClass]=\"project.state\">\r\n                        <span>{{project.state}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"student_info\">\r\n                    <span class=\"student_name\">{{project.author}}</span><br>\r\n                    <span class=\"student_direction\">{{project.direction}}</span><br>\r\n                    <span class=\"student_country\">{{project.country}}</span><br>\r\n\r\n                    <button [ngClass]=\"{'active': project.isFollowing}\" (click)=\"project.isFollowing = !project.isFollowing\">{{ project.isFollowing ? 'Following' : 'Follow' }}</button>\r\n                </div>\r\n                <div class=\"student_view\">\r\n                    <span class=\"watchingCount\">{{project.countOfWatching}}</span><br>\r\n                    <span (click)=\"likeStudents(project.id)\" class=\"likeCount\" [ngClass]=\"{'active': project.isLiked}\">{{project.countOfLike}}</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"student-project\">\r\n                <div *ngFor=\"let image of project.images\" [routerLink]=\"'/course'\">\r\n                    <img [src]=\"image\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> "

/***/ }),

/***/ "./src/app/students-page/student-component/student-content.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/students-page/student-component/student-content.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: url('welcome-school-bg.png') no-repeat center center;\n  background-size: cover;\n  padding-top: 130px;\n  padding-bottom: 70px;\n  color: white; }\n  .header-title div h2 {\n    margin-bottom: 20px; }\n  .filtration {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #f6f6f6; }\n  .filtration .search-hero {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    padding: 25px 15px;\n    position: relative;\n    bottom: 45px;\n    border-radius: 6px;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.12);\n    width: 900px;\n    background-color: white; }\n  .filtration .search-hero .search {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      overflow: hidden; }\n  .filtration .search-hero .search .styled-select {\n        background: url('select-arrow.png') no-repeat 98% 15px;\n        background-size: 15px;\n        overflow: hidden;\n        margin-right: 10px;\n        border-bottom: 2px solid #2196f3;\n        overflow: hidden; }\n  .filtration .search-hero .search .styled-select select {\n          background: transparent;\n          border: none;\n          font-size: 16px;\n          padding: 5px;\n          width: 165px;\n          color: #1c1a22;\n          font-family: \"Work Sans\";\n          font-weight: 600;\n          overflow: hidden; }\n  .filtration .search-hero .search .styled-select select option {\n            font-size: 16px;\n            line-height: 16px;\n            color: #1c1a22;\n            font-family: \"Work Sans\";\n            overflow: hidden; }\n  .filtration .search-hero .form-control {\n      width: 265px;\n      height: 48px;\n      border-radius: 24px;\n      background-color: #f6f6f6;\n      border: 2px solid #2196f3; }\n  .students {\n  background-color: #f6f6f6;\n  padding-top: 20px; }\n  @media (max-width: 1240px) {\n    .students {\n      padding-left: 0px;\n      padding-right: 0px; } }\n  .students .students-container {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 1170px;\n    padding-bottom: 45px; }\n  .students .students-container .container_bg {\n      background-color: white;\n      border-radius: 6px;\n      margin-bottom: 5px; }\n  .students .students-container .container_bg .student-section {\n        display: -webkit-box;\n        display: flex;\n        flex-wrap: wrap;\n        -webkit-box-align: center;\n                align-items: center;\n        width: 50%; }\n  .students .students-container .container_bg .student-section .student_photo {\n          display: -webkit-box;\n          display: flex;\n          flex-wrap: wrap;\n          -webkit-box-pack: center;\n                  justify-content: center;\n          width: 120px;\n          height: 140px; }\n  .students .students-container .container_bg .student-section .student_photo img {\n            width: 110px;\n            height: 110px;\n            border-radius: 55px;\n            margin: 10px 0 0 10px; }\n  .students .students-container .container_bg .student-section .student_photo .status {\n            display: -webkit-box;\n            display: flex;\n            border-radius: 4px;\n            color: white;\n            width: -webkit-max-content;\n            width: -moz-max-content;\n            width: max-content;\n            padding: 0 5px;\n            position: relative;\n            bottom: 10px;\n            margin-left: 10px; }\n  .students .students-container .container_bg .student-section .student_photo .status span {\n              font-size: 10px;\n              line-height: 22px;\n              font-family: \"Open Sans\";\n              font-weight: 700;\n              text-align: center; }\n  .students .students-container .container_bg .student-section .student_photo .status.PRO {\n            background: #2196f3; }\n  .students .students-container .container_bg .student-section .student_photo .status.Plus {\n            background: #c46cd8; }\n  .students .students-container .container_bg .student-section .student_photo .status.Free {\n            background: #7fc400; }\n  .students .students-container .container_bg .student-section .student_photo .status.Optimal {\n            background: #5c4af7; }\n  .students .students-container .container_bg .student-section .student_info {\n          padding-left: 20px;\n          width: 205px; }\n  .students .students-container .container_bg .student-section .student_info .student_name {\n            font-size: 18px;\n            line-height: 22px;\n            color: #1c1a22;\n            font-family: \"Open Sans\";\n            font-weight: 600; }\n  .students .students-container .container_bg .student-section .student_info .student_direction {\n            font-size: 14px;\n            line-height: 22px;\n            color: #1c1a22;\n            font-family: \"Open Sans\";\n            font-weight: 600; }\n  .students .students-container .container_bg .student-section .student_info .student_country {\n            font-size: 14px;\n            line-height: 20px;\n            color: #6a696f;\n            font-family: \"Open Sans\";\n            font-weight: 400; }\n  .students .students-container .container_bg .student-section .student_info button {\n            width: 100px;\n            height: 36px;\n            margin-top: 10px;\n            border-radius: 18px;\n            background-color: #2196f3;\n            border: none;\n            font-size: 15px;\n            line-height: 18px;\n            color: #ffffff;\n            font-family: \"Work Sans\";\n            font-weight: 600;\n            text-align: center;\n            outline: none; }\n  .students .students-container .container_bg .student-section .student_info .active {\n            background-color: #eff8fe;\n            font-size: 15px;\n            line-height: 18px;\n            color: #2196f3;\n            font-family: \"Work Sans\";\n            font-weight: 600;\n            text-align: center; }\n  .students .students-container .container_bg .student-section .student_view {\n          display: -webkit-box;\n          display: flex;\n          flex-wrap: wrap;\n          width: calc(100% - 325px);\n          padding-right: 23px; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount {\n            display: -webkit-box;\n            display: flex;\n            -webkit-box-align: center;\n                    align-items: center;\n            -webkit-box-pack: end;\n                    justify-content: flex-end;\n            width: 100%;\n            cursor: pointer; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount::-moz-selection {\n              background: transparent; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount::selection {\n              background: transparent; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount:hover::after {\n              box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);\n              border-radius: 50%; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount::after {\n              content: '';\n              width: 48px;\n              height: 48px;\n              display: inline-block;\n              position: relative;\n              background: url('student_watching.png') no-repeat;\n              margin-left: 19px;\n              margin-bottom: 5px;\n              background-size: auto;\n              background-position-x: center;\n              background-position-y: 14px; }\n  .students .students-container .container_bg .student-section .student_view .likeCount {\n            display: -webkit-box;\n            display: flex;\n            -webkit-box-align: center;\n                    align-items: center;\n            -webkit-box-pack: end;\n                    justify-content: flex-end;\n            width: 100%;\n            cursor: pointer; }\n  .students .students-container .container_bg .student-section .student_view .likeCount::-moz-selection {\n              background: transparent; }\n  .students .students-container .container_bg .student-section .student_view .likeCount::selection {\n              background: transparent; }\n  .students .students-container .container_bg .student-section .student_view .likeCount:hover::after {\n              box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);\n              border-radius: 50%; }\n  .students .students-container .container_bg .student-section .student_view .likeCount::after {\n              content: '';\n              width: 48px;\n              height: 48px;\n              display: inline-block;\n              position: relative;\n              background: url('student_like.png') no-repeat;\n              margin-left: 19px;\n              margin-bottom: 5px;\n              background-size: auto;\n              background-position-x: center;\n              background-position-y: 15px; }\n  .students .students-container .container_bg .student-section .student_view .likeCount.active::after {\n            content: '';\n            width: 48px;\n            height: 48px;\n            display: inline-block;\n            position: relative;\n            background: url('student_like_active.png') no-repeat;\n            margin-left: 19px;\n            margin-bottom: 5px;\n            background-size: auto;\n            background-position-x: center;\n            background-position-y: 15px; }\n  .students .students-container .student-project {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 50%; }\n  .students .students-container .student-project div {\n        padding-right: 5px;\n        outline: none;\n        cursor: pointer; }\n  .students .students-container .student-project div img {\n          width: 140px;\n          height: 116px;\n          border-radius: 6px;\n          -webkit-transition: all 0.3s;\n          transition: all 0.3s; }\n  .students .students-container .student-project div img:hover {\n            box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n  @media (max-width: 1169px) {\n    .students .students-container {\n      width: 1024px; }\n      .students .students-container .student-project div img {\n        width: 123px;\n        height: 110px; } }\n  @media (max-width: 1024px) {\n    .students .students-container {\n      width: 768px; }\n      .students .students-container .student-project div img {\n        width: 90px;\n        height: 80px; } }\n  @media (max-width: 768px) {\n    .students .students-container {\n      width: 96%; }\n      .students .students-container .container_bg .student-section {\n        width: 100%; }\n      .students .students-container .student-project {\n        width: 100%;\n        padding: 10px 0 10px 10px; }\n        .students .students-container .student-project div img {\n          width: 22.7vw;\n          height: 125px; } }\n  @media (max-width: 620px) {\n    .students .students-container .student-project div {\n      width: 50%;\n      padding: 3px; }\n      .students .students-container .student-project div img {\n        width: 100%;\n        height: 100%; } }\n  @media (max-width: 475px) {\n    .students .students-container .container_bg .student-section .student_view {\n      display: none; } }\n  @media (max-width: 375px) {\n    .students .students-container .container_bg .student-section {\n      -webkit-box-pack: center;\n              justify-content: center; }\n      .students .students-container .container_bg .student-section .student_info {\n        width: 100%;\n        text-align: center; } }\n  @media (max-width: 768px) {\n  .filtration .search-hero {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n    -webkit-box-pack: center;\n            justify-content: center; }\n    .filtration .search-hero .form-control {\n      margin-bottom: 15px; }\n    .filtration .search-hero .search {\n      width: 100%;\n      -webkit-box-pack: center;\n              justify-content: center; } }\n  @media (max-width: 425px) {\n  .filtration .search-hero .form-control {\n    width: 100%; }\n  .filtration .search-hero .search .styled-select {\n    width: 100%; }\n    .filtration .search-hero .search .styled-select select {\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMtcGFnZS9zdHVkZW50LWNvbXBvbmVudC9DOlxcVXNlcnNcXDFcXERlc2t0b3BcXGdpdGh1Ylxcdmtvcnl0c2thLmdpdGh1Yi5pb1xcc3AtYXBwL3NyY1xcYXBwXFxzdHVkZW50cy1wYWdlXFxzdHVkZW50LWNvbXBvbmVudFxcc3R1ZGVudC1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0VBQWdGO0VBQ2hGLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTtFQVZoQjtJQWNZLG1CQUFtQixFQUFBO0VBSy9CO0VBQ0csb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBeUIsRUFBQTtFQUg1QjtJQU1RLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVDQUFvQztJQUNwQyxZQUFZO0lBQ1osdUJBQXVCLEVBQUE7RUFoQi9CO01BbUJZLG9CQUFhO01BQWIsYUFBYTtNQUNiLGVBQWU7TUFDZix5QkFBOEI7Y0FBOUIsOEJBQThCO01BQzlCLGdCQUFnQixFQUFBO0VBdEI1QjtRQXlCZ0Isc0RBQXNFO1FBQ3RFLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdDQXBERjtRQXFERSxnQkFBZ0IsRUFBQTtFQTlCaEM7VUFpQ29CLHVCQUF1QjtVQUN2QixZQUFZO1VBQ1osZUFBZTtVQUNmLFlBQVk7VUFDWixZQUFZO1VBQ1osY0FBYztVQUNkLHdCQUF3QjtVQUN4QixnQkFBZ0I7VUFDaEIsZ0JBQWdCLEVBQUE7RUF6Q3BDO1lBNEN3QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUE7RUFoRHhDO01BdURZLFlBQVk7TUFDWixZQUFZO01BQ1osbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6Qix5QkFsRkUsRUFBQTtFQXVGZDtFQUNJLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtFQUVqQjtJQUpKO01BS1EsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBLEVBb1Z6QjtFQTFWRDtJQVVRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixvQkFBb0IsRUFBQTtFQWQ1QjtNQWlCWSx1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGtCQUFrQixFQUFBO0VBbkI5QjtRQXVCZ0Isb0JBQWE7UUFBYixhQUFhO1FBQ2IsZUFBZTtRQUNmLHlCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLFVBQVUsRUFBQTtFQTFCMUI7VUE4Qm9CLG9CQUFhO1VBQWIsYUFBYTtVQUNiLGVBQWU7VUFDZix3QkFBdUI7a0JBQXZCLHVCQUF1QjtVQUN2QixZQUFZO1VBQ1osYUFBYSxFQUFBO0VBbENqQztZQXFDd0IsWUFBWTtZQUNaLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIscUJBQXFCLEVBQUE7RUF4QzdDO1lBNEN3QixvQkFBYTtZQUFiLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLDBCQUFrQjtZQUFsQix1QkFBa0I7WUFBbEIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLGlCQUFpQixFQUFBO0VBbkR6QztjQXNEZ0MsZUFBZTtjQUNmLGlCQUFpQjtjQUNqQix3QkFBd0I7Y0FDeEIsZ0JBQWdCO2NBQ2hCLGtCQUFrQixFQUFBO0VBMURsRDtZQStEd0IsbUJBdEpWLEVBQUE7RUF1RmQ7WUFtRXdCLG1CQUFtQixFQUFBO0VBbkUzQztZQXVFd0IsbUJBN0pULEVBQUE7RUFzRmY7WUEyRXdCLG1CQUFtQixFQUFBO0VBM0UzQztVQWdGb0Isa0JBQWtCO1VBQ2xCLFlBQVksRUFBQTtFQWpGaEM7WUFvRndCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0IsRUFBQTtFQXhGeEM7WUE0RndCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0IsRUFBQTtFQWhHeEM7WUFvR3dCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0IsRUFBQTtFQXhHeEM7WUE0R3dCLFlBQVk7WUFDWixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGFBQWEsRUFBQTtFQXhIckM7WUE0SHdCLHlCQUF5QjtZQUN6QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLGtCQUFrQixFQUFBO0VBbEkxQztVQXlJb0Isb0JBQWE7VUFBYixhQUFhO1VBQ2IsZUFBZTtVQUNmLHlCQUF5QjtVQUN6QixtQkFBbUIsRUFBQTtFQTVJdkM7WUErSXdCLG9CQUFhO1lBQWIsYUFBYTtZQUNiLHlCQUFtQjtvQkFBbkIsbUJBQW1CO1lBQ25CLHFCQUF5QjtvQkFBekIseUJBQXlCO1lBQ3pCLFdBQVc7WUFDWCxlQUFlLEVBQUE7RUFuSnZDO2NBc0o0Qix1QkFBdUIsRUFBQTtFQXRKbkQ7Y0FzSjRCLHVCQUF1QixFQUFBO0VBdEpuRDtjQTJKZ0MsZ0RBQWdEO2NBQ2hELGtCQUFrQixFQUFBO0VBNUpsRDtjQWlLNEIsV0FBVztjQUNYLFdBQVc7Y0FDWCxZQUFZO2NBQ1oscUJBQXFCO2NBQ3JCLGtCQUFrQjtjQUNsQixpREFBaUU7Y0FDakUsaUJBQWlCO2NBQ2pCLGtCQUFrQjtjQUNsQixxQkFBcUI7Y0FDckIsNkJBQTZCO2NBQzdCLDJCQUEyQixFQUFBO0VBM0t2RDtZQWdMd0Isb0JBQWE7WUFBYixhQUFhO1lBQ2IseUJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIscUJBQXlCO29CQUF6Qix5QkFBeUI7WUFDekIsV0FBVztZQUNYLGVBQWUsRUFBQTtFQXBMdkM7Y0F1TDRCLHVCQUF1QixFQUFBO0VBdkxuRDtjQXVMNEIsdUJBQXVCLEVBQUE7RUF2TG5EO2NBNExnQyxnREFBZ0Q7Y0FDaEQsa0JBQWtCLEVBQUE7RUE3TGxEO2NBa000QixXQUFXO2NBQ1gsV0FBVztjQUNYLFlBQVk7Y0FDWixxQkFBcUI7Y0FDckIsa0JBQWtCO2NBQ2xCLDZDQUE2RDtjQUM3RCxpQkFBaUI7Y0FDakIsa0JBQWtCO2NBQ2xCLHFCQUFxQjtjQUNyQiw2QkFBNkI7Y0FDN0IsMkJBQTJCLEVBQUE7RUE1TXZEO1lBa040QixXQUFXO1lBQ1gsV0FBVztZQUNYLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLG9EQUFvRTtZQUNwRSxpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQiw2QkFBNkI7WUFDN0IsMkJBQTJCLEVBQUE7RUE1TnZEO01Bb09ZLG9CQUFhO01BQWIsYUFBYTtNQUNiLGVBQWU7TUFDZix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLFVBQVUsRUFBQTtFQXZPdEI7UUEwT2dCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsZUFBZSxFQUFBO0VBNU8vQjtVQStPb0IsWUFBWTtVQUNaLGFBQWE7VUFDYixrQkFBa0I7VUFDbEIsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBO0VBbFB4QztZQXFQb0IsK0NBQStDLEVBQUE7RUFPL0Q7SUE1UEo7TUE4UFksYUFBYSxFQUFBO01BOVB6QjtRQW1Rd0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjtFQU1qQjtJQTNRSjtNQTZRWSxZQUFZLEVBQUE7TUE3UXhCO1FBa1J3QixXQUFXO1FBQ1gsWUFBWSxFQUFBLEVBQ2Y7RUFNakI7SUExUko7TUE0UlksVUFBVSxFQUFBO01BNVJ0QjtRQWdTb0IsV0FBVyxFQUFBO01BaFMvQjtRQXFTZ0IsV0FBVztRQUNYLHlCQUF5QixFQUFBO1FBdFN6QztVQXlTd0IsYUFBYTtVQUNiLGFBQWEsRUFBQSxFQUNoQjtFQU1qQjtJQWpUSjtNQXFUb0IsVUFBVTtNQUNWLFlBQVksRUFBQTtNQXRUaEM7UUF3VHdCLFdBQVc7UUFDWCxZQUFZLEVBQUEsRUFDZjtFQU1qQjtJQWhVSjtNQXFVd0IsYUFBYSxFQUFBLEVBQ2hCO0VBTWpCO0lBNVVKO01BZ1ZvQix3QkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7TUFoVjNDO1FBa1Z3QixXQUFXO1FBQ1gsa0JBQWtCLEVBQUEsRUFDckI7RUFRckI7RUFDSTtJQUVRLDRCQUE4QjtJQUE5Qiw4QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHdCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtJQUgvQjtNQU1ZLG1CQUFtQixFQUFBO0lBTi9CO01BVVksV0FBVztNQUNYLHdCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQSxFQUMxQjtFQUtiO0VBQ0k7SUFHWSxXQUFXLEVBQUE7RUFIdkI7SUFRZ0IsV0FBVyxFQUFBO0lBUjNCO01BV29CLFdBQVcsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudHMtcGFnZS9zdHVkZW50LWNvbXBvbmVudC9zdHVkZW50LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJGJnOiAjMjkyNzMxO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvd2VsY29tZS1zY2hvb2wtYmcucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRyYXRpb24ge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuXHJcbiAgIC5zZWFyY2gtaGVybyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206IDQ1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICB3aWR0aDogOTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC5zdHlsZWQtc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3NlbGVjdC1hcnJvdy5wbmcnKSBuby1yZXBlYXQgOTglIDE1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4OyBcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYzFhMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFjMWEyMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI2NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN0dWRlbnRzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTI0MHB4KSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4OyBcclxuICAgIH1cclxuXHJcbiAgICAuc3R1ZGVudHMtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTE3MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG5cclxuICAgICAgICAuY29udGFpbmVyX2JnIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC5zdHVkZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAuc3R1ZGVudF9waG90byB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cy5QUk8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMuUGx1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjNDZjZDg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLkZyZWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLk9wdGltYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWM0YWY3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3R1ZGVudF9pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc3R1ZGVudF9uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYzFhMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0dWRlbnRfZGlyZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYzFhMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0dWRlbnRfY291bnRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNmE2OTZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY4ZmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjE5NmYzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zdHVkZW50X3ZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLndhdGNoaW5nQ291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6c2VsZWN0aW9uIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N0dWRlbnRfd2F0Y2hpbmcucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5saWtlQ291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6c2VsZWN0aW9uIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3N0dWRlbnRfbGlrZS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpa2VDb3VudC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdHVkZW50X2xpa2VfYWN0aXZlLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0dWRlbnQtcHJvamVjdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTY5cHgpIHtcclxuICAgICAgICAuc3R1ZGVudHMtY29udGFpbmVyIHsgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDI0cHg7XHJcblxyXG4gICAgICAgICAgICAuc3R1ZGVudC1wcm9qZWN0e1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAuc3R1ZGVudHMtY29udGFpbmVyIHsgXHJcbiAgICAgICAgICAgIHdpZHRoOiA3NjhweDtcclxuXHJcbiAgICAgICAgICAgIC5zdHVkZW50LXByb2plY3R7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5zdHVkZW50cy1jb250YWluZXIgeyBcclxuICAgICAgICAgICAgd2lkdGg6IDk2JTtcclxuXHJcbiAgICAgICAgICAgIC5jb250YWluZXJfYmcge1xyXG4gICAgICAgICAgICAgICAgLnN0dWRlbnQtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdHVkZW50LXByb2plY3R7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMi43dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgICAgIC5zdHVkZW50cy1jb250YWluZXIgeyBcclxuICAgICAgICAgICAgLnN0dWRlbnQtcHJvamVjdHtcclxuICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ3NXB4KSB7XHJcbiAgICAgICAgLnN0dWRlbnRzLWNvbnRhaW5lciB7IFxyXG4gICAgICAgICAgICAuY29udGFpbmVyX2JnIHtcclxuICAgICAgICAgICAgICAgIC5zdHVkZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIC5zdHVkZW50X3ZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAuc3R1ZGVudHMtY29udGFpbmVyIHsgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJfYmcge1xyXG4gICAgICAgICAgICAgICAgLnN0dWRlbnQtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0dWRlbnRfaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZmlsdHJhdGlvbiB7XHJcbiAgICAgICAgLnNlYXJjaC1oZXJvIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgIC5maWx0cmF0aW9uIHtcclxuICAgICAgICAuc2VhcmNoLWhlcm8ge1xyXG4gICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgIC5zdHlsZWQtc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/students-page/student-component/student-content.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/students-page/student-component/student-content.component.ts ***!
  \******************************************************************************/
/*! exports provided: StudentContentComponent, State, Direction, Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentContentComponent", function() { return StudentContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentContentComponent = /** @class */ (function () {
    function StudentContentComponent() {
        this.states = [
            State.Free,
            State.Optimal,
            State.PRO,
            State.Plus
        ];
        this.directions = [
            Direction.ConceptArtist,
            Direction.DigitalArtist,
            Direction.DrawThings,
            Direction.FineArtist,
            Direction.Freelance,
            Direction.Hobbyist,
            Direction.Illustrator,
            Direction.MotionGraphics,
            Direction.TwodArtist,
            Direction.UIUX
        ];
        this.searchStatus = '';
        this.searchDirection = '';
        this.searchText = '';
        this.projects = [
            {
                id: 1,
                isFollowing: true,
                isLiked: true,
                photo: '../../../assets/student_1.png',
                state: State.PRO,
                author: 'Sylvain Sarrailh',
                direction: Direction.ConceptArtist,
                country: Country.France,
                countOfWatching: 247,
                countOfLike: 53,
                images: [
                    "../../../assets/student-content_sarrailh_1.png",
                    "../../../assets/student-content_sarrailh_2.png",
                    "../../../assets/student-content_sarrailh_3.png",
                    "../../../assets/student-content_sarrailh_4.png"
                ]
            },
            {
                id: 2,
                isFollowing: false,
                isLiked: false,
                photo: '../../../assets/student_2.png',
                state: State.Plus,
                author: 'Ramón Nuñez',
                direction: Direction.DrawThings,
                country: Country.Spain,
                countOfWatching: 1139,
                countOfLike: 128,
                images: [
                    "../../../assets/student-content_nunez_1.png",
                    "../../../assets/student-content_nunez_2.png",
                    "../../../assets/student-content_nunez_3.png",
                    "../../../assets/student-content_nunez_4.png"
                ]
            },
            {
                id: 3,
                isFollowing: false,
                isLiked: true,
                photo: '../../../assets/student_3.png',
                state: State.Free,
                author: 'Veronika Olchovych',
                direction: Direction.UIUX,
                country: Country.Ukraine,
                countOfWatching: 1178,
                countOfLike: 138,
                images: [
                    "../../../assets/student-content_olchovych_1.png",
                    "../../../assets/student-content_olchovych_2.png",
                    "../../../assets/student-content_olchovych_3.png"
                ]
            },
            {
                id: 4,
                isFollowing: true,
                isLiked: false,
                photo: '../../../assets/student_4.png',
                state: State.PRO,
                author: 'Jolene Lai',
                direction: Direction.FineArtist,
                country: Country.USA,
                countOfWatching: 1077,
                countOfLike: 357,
                images: [
                    "../../../assets/student-content_Lai_1.png",
                    "../../../assets/student-content_Lai_2.png",
                    "../../../assets/student-content_Lai_3.png",
                    "../../../assets/student-content_Lai_4.png"
                ]
            },
            {
                id: 5,
                isFollowing: true,
                isLiked: false,
                photo: '../../../assets/student_5.png',
                state: State.Optimal,
                author: 'Nedko Ivanov',
                direction: Direction.Hobbyist,
                country: Country.Bulgaria,
                countOfWatching: 16139,
                countOfLike: 3028,
                images: [
                    "../../../assets/student-content_Ivanov_1.png",
                    "../../../assets/student-content_Ivanov_2.png",
                    "../../../assets/student-content_Ivanov_3.png",
                    "../../../assets/student-content_Ivanov_4.png"
                ]
            },
            {
                id: 6,
                isFollowing: false,
                isLiked: false,
                photo: '../../../assets/student_6.png',
                state: State.Free,
                author: 'Benze',
                direction: Direction.Illustrator,
                country: Country.Hungary,
                countOfWatching: 1276,
                countOfLike: 168,
                images: [
                    "../../../assets/student-content_Benze_1.png",
                    "../../../assets/student-content_Benze_2.png",
                    "../../../assets/student-content_Benze_3.png",
                    "../../../assets/student-content_Benze_4.png"
                ]
            },
            {
                id: 7,
                isFollowing: false,
                isLiked: false,
                photo: '../../../assets/student_7.png',
                state: State.Optimal,
                author: 'Simon Prades',
                direction: Direction.Illustrator,
                country: Country.Germany,
                countOfWatching: 1009,
                countOfLike: 88,
                images: [
                    "../../../assets/student-content_Prades_1.png",
                    "../../../assets/student-content_Prades_2.png"
                ]
            },
            {
                id: 8,
                isFollowing: false,
                isLiked: false,
                photo: '../../../assets/student_8.png',
                state: State.Optimal,
                author: 'Novans V. Adikresna',
                direction: Direction.DigitalArtist,
                country: Country.Indonesia,
                countOfWatching: 4139,
                countOfLike: 828,
                images: [
                    "../../../assets/student-content_Adikresna_1.png",
                    "../../../assets/student-content_Prades_2.png",
                    "../../../assets/student-content_Benze_3.png"
                ]
            },
            {
                id: 9,
                isFollowing: false,
                isLiked: false,
                photo: '../../../assets/student_9.png',
                state: State.Plus,
                author: 'Sanketh Yayathi',
                direction: Direction.MotionGraphics,
                country: Country.USA,
                countOfWatching: 16139,
                countOfLike: 3028,
                images: [
                    "../../../assets/student-content_Yayathi_1.png",
                    "../../../assets/student-content_Yayathi_2.png",
                    "../../../assets/student-content_Yayathi_3.png",
                    "../../../assets/student-content_Yayathi_4.png"
                ]
            },
            {
                id: 10,
                isFollowing: false,
                isLiked: false,
                photo: '../../../assets/student_1.png',
                state: State.PRO,
                author: 'Ismail Inceoglu',
                direction: Direction.TwodArtist,
                country: Country.Belarus,
                countOfWatching: 480,
                countOfLike: 90,
                images: [
                    "../../../assets/student-content_Inceoglu_1.png",
                    "../../../assets/student-content_Inceoglu_2.png"
                ]
            }
        ];
    }
    StudentContentComponent.prototype.changeStatus = function (e) {
        this.searchStatus = e.target.value == "Artist status" ? '' : e.target.value;
    };
    StudentContentComponent.prototype.changeDirection = function (e) {
        this.searchDirection = e.target.value == "Artistic direction" ? '' : e.target.value;
    };
    StudentContentComponent.prototype.likeStudents = function (id) {
        if (this.projects.find(function (x) { return x.id === id; }).isLiked) {
            this.projects.find(function (x) { return x.id === id; }).isLiked = false;
            this.projects.find(function (x) { return x.id === id; }).countOfLike = --this.projects.find(function (x) { return x.id === id; }).countOfLike;
        }
        else {
            this.projects.find(function (x) { return x.id === id; }).isLiked = true;
            this.projects.find(function (x) { return x.id === id; }).countOfLike = ++this.projects.find(function (x) { return x.id === id; }).countOfLike;
        }
    };
    StudentContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'studentContent',
            template: __webpack_require__(/*! ./student-content.component.html */ "./src/app/students-page/student-component/student-content.component.html"),
            styles: [__webpack_require__(/*! ./student-content.component.scss */ "./src/app/students-page/student-component/student-content.component.scss")]
        })
    ], StudentContentComponent);
    return StudentContentComponent;
}());

var State;
(function (State) {
    State["PRO"] = "PRO";
    State["Plus"] = "Plus";
    State["Free"] = "Free";
    State["Optimal"] = "Optimal";
})(State || (State = {}));
var Direction;
(function (Direction) {
    Direction["ConceptArtist"] = "Concept artist";
    Direction["Freelance"] = "Freelance";
    Direction["DrawThings"] = "Draw things";
    Direction["UIUX"] = "UI/UX Designer";
    Direction["FineArtist"] = "Fine Artist";
    Direction["Hobbyist"] = "Hobbyist";
    Direction["Illustrator"] = "Illustrator";
    Direction["DigitalArtist"] = "Digital artist";
    Direction["MotionGraphics"] = "Motion Graphics";
    Direction["TwodArtist"] = "2d artist";
})(Direction || (Direction = {}));
var Country;
(function (Country) {
    Country["France"] = "Toulouse, France";
    Country["Spain"] = "Alacant/Alicante, Spain";
    Country["Ukraine"] = "Kyiv, Ukraine";
    Country["USA"] = "Los Angeles, CA, USA";
    Country["Bulgaria"] = "Varna, Bulgaria";
    Country["Hungary"] = "Budapest, Hungary";
    Country["Germany"] = "Saarbr\u00FCcken, Germany";
    Country["Indonesia"] = "Surabaya, Indonesia";
    Country["Belarus"] = "Minsk, Belarus";
})(Country || (Country = {}));


/***/ }),

/***/ "./src/app/students-page/students-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/students-page/students-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<log-in [hidden]=\"isHidden\" [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></log-in>\r\n<header [isHidden]=\"isHidden\" (onChanged)=\"onChanged($event)\"></header>\r\n<studentContent></studentContent>\r\n<main-footer></main-footer> "

/***/ }),

/***/ "./src/app/students-page/students-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/students-page/students-page.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPageComponent", function() { return StudentsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentsPageComponent = /** @class */ (function () {
    function StudentsPageComponent() {
        this.isHidden = true;
    }
    StudentsPageComponent.prototype.onChanged = function (isLogInHidden) {
        this.isHidden = isLogInHidden;
    };
    StudentsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'students-page',
            template: __webpack_require__(/*! ./students-page.component.html */ "./src/app/students-page/students-page.component.html"),
        })
    ], StudentsPageComponent);
    return StudentsPageComponent;
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

module.exports = __webpack_require__(/*! C:\Users\1\Desktop\github\vkorytska.github.io\sp-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map