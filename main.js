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

module.exports = "/* MODAL STYLES\r\n-------------------------------*/\nmodal {\n  /* modals are hidden by default */\n  display: none; }\nmodal .modal {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    z-index: 1000;\n    overflow: auto;\n    background-color: #00000080; }\nmodal .modal .modal-body {\n      width: 600px;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      -webkit-box-flex: 0;\n              flex: none;\n      background-color: white;\n      padding: 0 15px 40px;\n      -webkit-animation-name: animatetop;\n              animation-name: animatetop;\n      -webkit-animation-duration: 0.4s;\n              animation-duration: 0.4s; }\nmodal .modal .modal-body .close {\n        padding-right: 10px;\n        padding-top: 10px;\n        cursor: pointer; }\nmodal .modal .modal-body h3 {\n        text-align: center;\n        margin-left: 25px;\n        margin-top: 40px; }\nmodal .modal .modal-body img {\n        margin-left: 47%; }\nmodal .modal .modal-body form {\n        margin: 0 30px; }\nmodal .modal .modal-body form .input-text {\n          display: -webkit-box;\n          display: flex;\n          flex-wrap: wrap;\n          padding-top: 10px; }\nmodal .modal .modal-body form .input-text label {\n            width: 100%;\n            font-size: 14px;\n            color: #33475b;\n            display: block;\n            float: none;\n            width: auto;\n            font-weight: 500;\n            line-height: 20px;\n            padding-top: 0;\n            margin-bottom: 4px; }\nmodal .modal .modal-body form .input-text input {\n            width: 100%;\n            height: 40px;\n            padding: 9px 10px;\n            font-family: \"Open Sans\";\n            font-size: 14px;\n            font-weight: normal;\n            line-height: 22px;\n            color: #33475b;\n            background-color: #f5f8fa;\n            border: 1px solid #cbd6e2;\n            box-sizing: border-box;\n            border-radius: 3px; }\nmodal .modal .modal-body form .input-text input.ng-touched.ng-invalid {\n            border: 1px solid #dc354563;\n            background-color: #dc354526; }\nmodal .modal .modal-body form .input-text textarea {\n            width: 100%;\n            display: inline-block;\n            padding: 9px 10px;\n            margin-bottom: 25px;\n            font-family: \"Open Sans\";\n            font-size: 14px;\n            font-weight: normal;\n            line-height: 22px;\n            color: #33475b;\n            background-color: #f5f8fa;\n            border: 1px solid #cbd6e2;\n            box-sizing: border-box;\n            border-radius: 3px; }\nmodal .modal .modal-body form .input-text input#firstName, modal .modal .modal-body form .input-text input#lastName, modal .modal .modal-body form .input-text label.nameLabel {\n            width: 246px; }\nmodal .modal .modal-body form .input-text input#firstName, modal .modal .modal-body form .input-text .nameLabel:nth-child(1) {\n            margin-right: 18px; }\nmodal .modal .modal-body form button {\n          font-family: \"Open Sans\";\n          margin: 0;\n          cursor: pointer;\n          display: inline-block;\n          font-weight: 700;\n          line-height: 12px;\n          position: relative;\n          text-align: center;\n          background-color: #ff7a59;\n          color: #fff;\n          border-radius: 3px;\n          border: 1px solid #ff7a59;\n          border-width: 1px;\n          font-size: 14px;\n          padding: 12px 24px; }\nmodal .modal .modal-body form button.disabled {\n          border: 1px solid #999999;\n          background-color: #cccccc;\n          color: #666666;\n          box-shadow: none;\n          cursor: auto; }\n@media (max-height: 858px) {\n    modal .modal {\n      -webkit-box-align: unset;\n              align-items: unset; } }\n@media (max-width: 768px) {\n    modal .modal .modal-body {\n      width: 100%; }\n      modal .modal .modal-body form .input-text input#firstName, modal .modal .modal-body form .input-text input#lastName, modal .modal .modal-body form .input-text label.nameLabel {\n        width: 49%; }\n      modal .modal .modal-body form .input-text input#firstName, modal .modal .modal-body form .input-text .nameLabel:nth-child(1) {\n        margin-right: 2%; } }\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ3VzdG9tLU1vZGFsL3BhcnRuZXItbW9kYWwvSDpcXFZpa2FcXGZyb250ZW5kXFxzcGVlZFBhaW50aW5nXFxzcC1hcHAvc3JjXFxhcHBcXEN1c3RvbS1Nb2RhbFxccGFydG5lci1tb2RhbFxccGFydG5lci1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ3VzdG9tLU1vZGFsL3BhcnRuZXItbW9kYWwvcGFydG5lci1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztnQ0NDK0I7QURDaEM7RUFDSSxpQ0FBQTtFQUNBLGFBQWEsRUFBQTtBQUZqQjtJQUtRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLDJCQUEyQixFQUFBO0FBVm5DO01BY1ksWUFBWTtNQUNaLDJCQUFtQjtNQUFuQix3QkFBbUI7TUFBbkIsbUJBQW1CO01BQ25CLG1CQUFVO2NBQVYsVUFBVTtNQUNWLHVCQUF1QjtNQUN2QixvQkFBb0I7TUFDcEIsa0NBQTBCO2NBQTFCLDBCQUEwQjtNQUMxQixnQ0FBd0I7Y0FBeEIsd0JBQXdCLEVBQUE7QUFwQnBDO1FBdUJnQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGVBQWUsRUFBQTtBQXpCL0I7UUE2QmdCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCLEVBQUE7QUEvQmhDO1FBbUNnQixnQkFBZ0IsRUFBQTtBQW5DaEM7UUF1Q2dCLGNBQWMsRUFBQTtBQXZDOUI7VUEwQ29CLG9CQUFhO1VBQWIsYUFBYTtVQUNiLGVBQWU7VUFDZixpQkFBaUIsRUFBQTtBQTVDckM7WUErQ3dCLFdBQVc7WUFDWCxlQUFlO1lBQ2YsY0FBYztZQUNkLGNBQWM7WUFDZCxXQUFXO1lBQ1gsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGtCQUFrQixFQUFBO0FBeEQxQztZQTREd0IsV0FBVztZQUNYLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsd0JBQXdCO1lBQ3hCLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx5QkFBeUI7WUFDekIseUJBQXlCO1lBQ3pCLHNCQUFzQjtZQUN0QixrQkFBa0IsRUFBQTtBQXZFMUM7WUEyRXdCLDJCQUEyQjtZQUMzQiwyQkFBMkIsRUFBQTtBQTVFbkQ7WUFpRndCLFdBQVc7WUFDWCxxQkFBcUI7WUFDckIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHlCQUF5QjtZQUN6Qix5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLGtCQUFrQixFQUFBO0FBN0YxQztZQWlHd0IsWUFBWSxFQUFBO0FBakdwQztZQXFHd0Isa0JBQWtCLEVBQUE7QUFyRzFDO1VBMEdvQix3QkFBd0I7VUFDeEIsU0FBUztVQUNULGVBQWU7VUFDZixxQkFBcUI7VUFDckIsZ0JBQWdCO1VBQ2hCLGlCQUFpQjtVQUNqQixrQkFBa0I7VUFDbEIsa0JBQWtCO1VBQ2xCLHlCQUF5QjtVQUN6QixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLHlCQUF3QjtVQUN4QixpQkFBaUI7VUFDakIsZUFBZTtVQUNmLGtCQUFrQixFQUFBO0FBeEh0QztVQTRIb0IseUJBQXlCO1VBQ3pCLHlCQUF5QjtVQUN6QixjQUFjO1VBQ2QsZ0JBQWdCO1VBQ2hCLFlBQVksRUFBQTtBQU01QjtJQXRJSjtNQXdJWSx3QkFBa0I7Y0FBbEIsa0JBQWtCLEVBQUEsRUFDckI7QUFHTDtJQTVJSjtNQStJZ0IsV0FBVyxFQUFBO01BL0kzQjtRQW9KNEIsVUFBVSxFQUFBO01BcEp0QztRQXdKNEIsZ0JBQWdCLEVBQUEsRUFDbkI7QUFTekI7RUFDSSw2RUFBQTtFQUNBLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0k7SUFDRSxXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBRVo7SUFDRSxNQUFNO0lBQ04sVUFBVSxFQUFBLEVBQUE7QUFQaEI7RUFDSTtJQUNFLFdBQVc7SUFDWCxVQUFVLEVBQUE7RUFFWjtJQUNFLE1BQU07SUFDTixVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0N1c3RvbS1Nb2RhbC9wYXJ0bmVyLW1vZGFsL3BhcnRuZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogTU9EQUwgU1RZTEVTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5tb2RhbCB7XHJcbiAgICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIC5tb2RhbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwO1xyXG5cclxuXHJcbiAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggNDBweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHJcbiAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NyU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmlucHV0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzM0NzViO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzNDc1YjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDZlMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU2MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTI2O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzNDc1YjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDZlMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQjZmlyc3ROYW1lLCBpbnB1dCNsYXN0TmFtZSwgbGFiZWwubmFtZUxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQjZmlyc3ROYW1lLCAubmFtZUxhYmVsOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2E1OTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjZmY3YTU5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4NThweCkge1xyXG4gICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiB1bnNldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCNmaXJzdE5hbWUsIGlucHV0I2xhc3ROYW1lLCBsYWJlbC5uYW1lTGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0I2ZpcnN0TmFtZSwgLm5hbWVMYWJlbDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtb3BlbiB7XHJcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0gXHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRvcDogLTMwMHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCIvKiBNT0RBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTsgfVxuICBtb2RhbCAubW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDsgfVxuICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSB7XG4gICAgICB3aWR0aDogNjAwcHg7XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgZmxleDogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMCAxNXB4IDQwcHg7XG4gICAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0ZXRvcDtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40czsgfVxuICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5jbG9zZSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7IH1cbiAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDclOyB9XG4gICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgZm9ybSB7XG4gICAgICAgIG1hcmdpbjogMCAzMHB4OyB9XG4gICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IGxhYmVsIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzQ3NWI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzM0NzViO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjhmYTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ2ZTI7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU2MztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDUyNjsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IHRleHRhcmVhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzNDc1YjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNmUyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IGlucHV0I2ZpcnN0TmFtZSwgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgaW5wdXQjbGFzdE5hbWUsIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IGxhYmVsLm5hbWVMYWJlbCB7XG4gICAgICAgICAgICB3aWR0aDogMjQ2cHg7IH1cbiAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgZm9ybSAuaW5wdXQtdGV4dCBpbnB1dCNmaXJzdE5hbWUsIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IC5uYW1lTGFiZWw6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMThweDsgfVxuICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgZm9ybSBidXR0b24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YTU5O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3YTU5O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7IH1cbiAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gYnV0dG9uLmRpc2FibGVkIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBjdXJzb3I6IGF1dG87IH1cbiAgQG1lZGlhIChtYXgtaGVpZ2h0OiA4NThweCkge1xuICAgIG1vZGFsIC5tb2RhbCB7XG4gICAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH0gfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkge1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IGlucHV0I2ZpcnN0TmFtZSwgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgaW5wdXQjbGFzdE5hbWUsIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IGxhYmVsLm5hbWVMYWJlbCB7XG4gICAgICAgIHdpZHRoOiA0OSU7IH1cbiAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSBmb3JtIC5pbnB1dC10ZXh0IGlucHV0I2ZpcnN0TmFtZSwgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IGZvcm0gLmlucHV0LXRleHQgLm5hbWVMYWJlbDpudGgtY2hpbGQoMSkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlOyB9IH1cblxuYm9keS5tb2RhbC1vcGVuIHtcbiAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcbiAgZnJvbSB7XG4gICAgdG9wOiAtMzAwcHg7XG4gICAgb3BhY2l0eTogMDsgfVxuICB0byB7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuIl19 */"

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

module.exports = "/* MODAL STYLES\r\n-------------------------------*/\nmodal {\n  /* modals are hidden by default */\n  display: none; }\nmodal .modal {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    z-index: 1000;\n    overflow: auto;\n    background-color: #00000080; }\nmodal .modal .modal-body {\n      width: 90%;\n      max-width: 1420px;\n      height: -webkit-fit-content;\n      height: -moz-fit-content;\n      height: fit-content;\n      -webkit-box-flex: 0;\n              flex: none;\n      background-color: white;\n      padding: 0 15px 40px;\n      -webkit-animation-name: animatetop;\n              animation-name: animatetop;\n      -webkit-animation-duration: 0.4s;\n              animation-duration: 0.4s; }\nmodal .modal .modal-body .close {\n        padding-right: 10px;\n        padding-top: 10px;\n        cursor: pointer; }\nmodal .modal .modal-body h3 {\n        text-align: center;\n        margin-left: 25px;\n        margin-top: 40px; }\nmodal .modal .modal-body img {\n        margin-left: 47%; }\nmodal .modal .modal-body .pricing-plan-section {\n        padding: 40px 0;\n        -webkit-box-pack: center;\n                justify-content: center; }\nmodal .modal .modal-body .pricing-plan-section .category {\n          margin: 5px;\n          padding: 40px;\n          border-radius: 6px;\n          border: 1px solid #eaeaeb;\n          text-align: center;\n          cursor: default;\n          -webkit-transition: all 1s;\n          transition: all 1s; }\nmodal .modal .modal-body .pricing-plan-section .category:hover {\n            border: 1px solid #2196f3; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info {\n            width: 100%; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info .state {\n              font-size: 20px;\n              line-height: 42px;\n              color: #041421;\n              font-family: \"Work Sans\";\n              font-weight: 600; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info .currency {\n              font-size: 22px;\n              line-height: 60px;\n              color: #2196f3;\n              font-family: \"Work Sans\";\n              font-weight: 400; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info .cost {\n              font-size: 60px;\n              line-height: 60px;\n              color: #041421;\n              font-family: \"Work Sans\";\n              font-weight: 400; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info .mounth {\n              font-size: 18px;\n              line-height: 60px;\n              color: #041421;\n              font-family: \"Work Sans\";\n              font-weight: 400; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info div {\n              padding-bottom: 40px; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info div .advances {\n                display: -webkit-box;\n                display: flex;\n                -webkit-box-align: center;\n                        align-items: center;\n                font-size: 15px;\n                color: #041421;\n                font-family: \"Open Sans\";\n                font-weight: 400; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info div .active::before {\n                content: \"\";\n                display: inline-block;\n                width: 18px;\n                height: 18px;\n                background: url('pricing_plan_active.png') no-repeat;\n                background-size: cover;\n                margin-right: 10px; }\nmodal .modal .modal-body .pricing-plan-section .category .category_info div .inactive::before {\n                content: \"\";\n                display: inline-block;\n                width: 18px;\n                height: 18px;\n                background: url('pricing_plan_inactive.png') no-repeat;\n                background-size: cover;\n                margin-right: 10px; }\nmodal .modal .modal-body .pricing-plan-section .category button {\n            width: 180px;\n            height: 36px;\n            border-radius: 18px;\n            background-color: #2196f3;\n            border: 1px solid #2196f3;\n            font-size: 15px;\n            line-height: 18px;\n            color: #ffffff;\n            font-family: \"Work Sans\";\n            font-weight: 600;\n            text-align: center;\n            outline: none; }\nmodal .modal .modal-body .pricing-plan-section .category button:hover {\n              box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\nmodal .modal .modal-body .pricing-plan-section .category button.signUp {\n            background-color: #ffffff;\n            color: #2196f3; }\nmodal .modal .modal-body .pricing-plan-section .category button.signUp:hover {\n              background-color: #2196f3;\n              color: #ffffff; }\nmodal .modal .modal-body .pricing-plan-section .popular {\n          padding-top: 6px; }\nmodal .modal .modal-body .pricing-plan-section .popular:before {\n            content: \"\";\n            display: inline-block;\n            position: relative;\n            background: url('popular_pricing_plan.png') no-repeat;\n            background-size: cover;\n            width: 80px;\n            height: 26px;\n            right: 106px;\n            top: 37px; }\n@media (max-width: 1403px) {\n          modal .modal .modal-body .pricing-plan-section .category {\n            width: 398px; }\n          modal .modal .modal-body .pricing-plan-section .popular:before {\n            right: 160px; } }\n@media (max-width: 958px) {\n          modal .modal .modal-body .pricing-plan-section .category {\n            width: 292px; }\n          modal .modal .modal-body .pricing-plan-section .popular:before {\n            right: 106px; } }\n@media (max-width: 704px) {\n          modal .modal .modal-body .pricing-plan-section .category {\n            padding: 6px 15px 40px; } }\n@media (max-width: 425px) {\n          modal .modal .modal-body .pricing-plan-section .category {\n            width: 250px;\n            padding: 6px 5px 40px; }\n          modal .modal .modal-body .pricing-plan-section .popular:before {\n            right: 85px; } }\n@media (max-height: 858px) {\n    modal .modal {\n      -webkit-box-align: unset;\n              align-items: unset; } }\n@media (max-width: 1569px) {\n    modal .modal {\n      -webkit-box-align: unset;\n              align-items: unset; } }\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ3VzdG9tLU1vZGFsL3ByaWNpbmctcGxhbi9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxcQ3VzdG9tLU1vZGFsXFxwcmljaW5nLXBsYW5cXHByaWNpbmctcGxhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ3VzdG9tLU1vZGFsL3ByaWNpbmctcGxhbi9wcmljaW5nLXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7Z0NDQytCO0FEQ2hDO0VBQ0ksaUNBQUE7RUFDQSxhQUFhLEVBQUE7QUFGakI7SUFLUSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCwyQkFBMkIsRUFBQTtBQVZuQztNQWFZLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsMkJBQW1CO01BQW5CLHdCQUFtQjtNQUFuQixtQkFBbUI7TUFDbkIsbUJBQVU7Y0FBVixVQUFVO01BQ1YsdUJBQXVCO01BQ3ZCLG9CQUFvQjtNQUNwQixrQ0FBMEI7Y0FBMUIsMEJBQTBCO01BQzFCLGdDQUF3QjtjQUF4Qix3QkFBd0IsRUFBQTtBQXBCcEM7UUF1QmdCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsZUFBZSxFQUFBO0FBekIvQjtRQTZCZ0Isa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0IsRUFBQTtBQS9CaEM7UUFtQ2dCLGdCQUFnQixFQUFBO0FBbkNoQztRQXVDZ0IsZUFBZTtRQUNmLHdCQUF1QjtnQkFBdkIsdUJBQXVCLEVBQUE7QUF4Q3ZDO1VBMkNvQixXQUFXO1VBQ1gsYUFBYTtVQUNiLGtCQUFrQjtVQUNsQix5QkFBeUI7VUFDekIsa0JBQWtCO1VBQ2xCLGVBQWU7VUFDZiwwQkFBa0I7VUFBbEIsa0JBQWtCLEVBQUE7QUFqRHRDO1lBb0R3Qix5QkFBeUIsRUFBQTtBQXBEakQ7WUF3RHdCLFdBQVcsRUFBQTtBQXhEbkM7Y0EyRDRCLGVBQWU7Y0FDZixpQkFBaUI7Y0FDakIsY0FBYztjQUNkLHdCQUF3QjtjQUN4QixnQkFBZ0IsRUFBQTtBQS9ENUM7Y0FtRTRCLGVBQWU7Y0FDZixpQkFBaUI7Y0FDakIsY0FBYztjQUNkLHdCQUF3QjtjQUN4QixnQkFBZ0IsRUFBQTtBQXZFNUM7Y0EyRTRCLGVBQWU7Y0FDZixpQkFBaUI7Y0FDakIsY0FBYztjQUNkLHdCQUF3QjtjQUN4QixnQkFBZ0IsRUFBQTtBQS9FNUM7Y0FtRjRCLGVBQWU7Y0FDZixpQkFBaUI7Y0FDakIsY0FBYztjQUNkLHdCQUF3QjtjQUN4QixnQkFBZ0IsRUFBQTtBQXZGNUM7Y0EyRjRCLG9CQUFvQixFQUFBO0FBM0ZoRDtnQkE4RmdDLG9CQUFhO2dCQUFiLGFBQWE7Z0JBQ2IseUJBQW1CO3dCQUFuQixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCx3QkFBd0I7Z0JBQ3hCLGdCQUFnQixFQUFBO0FBbkdoRDtnQkF3R29DLFdBQVc7Z0JBQ1gscUJBQXFCO2dCQUNyQixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osb0RBQW9FO2dCQUNwRSxzQkFBc0I7Z0JBQ3RCLGtCQUFrQixFQUFBO0FBOUd0RDtnQkFvSG9DLFdBQVc7Z0JBQ1gscUJBQXFCO2dCQUNyQixXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osc0RBQXNFO2dCQUN0RSxzQkFBc0I7Z0JBQ3RCLGtCQUFrQixFQUFBO0FBMUh0RDtZQWlJd0IsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLHlCQUF5QjtZQUN6QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixhQUFhLEVBQUE7QUE1SXJDO2NBK0k0QiwrQ0FBK0MsRUFBQTtBQS9JM0U7WUFvSndCLHlCQUF5QjtZQUN6QixjQUFjLEVBQUE7QUFySnRDO2NBd0o0Qix5QkFBeUI7Y0FDekIsY0FBYyxFQUFBO0FBekoxQztVQStKb0IsZ0JBQWdCLEVBQUE7QUEvSnBDO1lBa0t3QixXQUFVO1lBQ1YscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixxREFBcUU7WUFDckUsc0JBQXNCO1lBQ3RCLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLFNBQVMsRUFBQTtBQUlqQjtVQTlLaEI7WUFnTHdCLFlBQVksRUFBQTtVQWhMcEM7WUFxTDRCLFlBQVksRUFBQSxFQUNmO0FBSVQ7VUExTGhCO1lBNEx3QixZQUFZLEVBQUE7VUE1THBDO1lBaU00QixZQUFZLEVBQUEsRUFDZjtBQUlUO1VBdE1oQjtZQXdNd0Isc0JBQXNCLEVBQUEsRUFDekI7QUFHTDtVQTVNaEI7WUE4TXdCLFlBQVk7WUFDWixxQkFBcUIsRUFBQTtVQS9NN0M7WUFvTjRCLFdBQVcsRUFBQSxFQUNkO0FBT3JCO0lBNU5KO01BOE5ZLHdCQUFrQjtjQUFsQixrQkFBa0IsRUFBQSxFQUNyQjtBQUdMO0lBbE9KO01Bb09ZLHdCQUFrQjtjQUFsQixrQkFBa0IsRUFBQSxFQUNyQjtBQUlUO0VBQ0ksNkVBQUE7RUFDQSxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJO0lBQ0UsV0FBVztJQUNYLFVBQVUsRUFBQTtFQUVaO0lBQ0UsTUFBTTtJQUNOLFVBQVUsRUFBQSxFQUFBO0FBUGhCO0VBQ0k7SUFDRSxXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBRVo7SUFDRSxNQUFNO0lBQ04sVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9DdXN0b20tTW9kYWwvcHJpY2luZy1wbGFuL3ByaWNpbmctcGxhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKiBNT0RBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbm1vZGFsIHtcclxuICAgIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgLm1vZGFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XHJcblxyXG4gICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggNDBweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHJcbiAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NyU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcmljaW5nLXBsYW4tc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5X2luZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDQxNDIxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3VycmVuY3kge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA0MTQyMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vdW50aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDQxNDIxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkdmFuY2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDQxNDIxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wcmljaW5nX3BsYW5fYWN0aXZlLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvcHJpY2luZ19wbGFuX2luYWN0aXZlLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnNpZ25VcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjE5NmYzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnBvcHVsYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvcG9wdWxhcl9wcmljaW5nX3BsYW4ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDNweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzOThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3B1bGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NThweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyOTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3B1bGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDRweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxNXB4IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDVweCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcHVsYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogODVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDg1OHB4KSB7XHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTU2OXB4KSB7XHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYm9keS5tb2RhbC1vcGVuIHtcclxuICAgIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0b3A6IC0zMDBweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59IiwiLyogTU9EQUwgU1RZTEVTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xubW9kYWwge1xuICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gIGRpc3BsYXk6IG5vbmU7IH1cbiAgbW9kYWwgLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7IH1cbiAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1heC13aWR0aDogMTQyMHB4O1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgIGZsZXg6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDAgMTVweCA0MHB4O1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGV0b3A7XG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7IH1cbiAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAuY2xvc2Uge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgaDMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4OyB9XG4gICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgaW1nIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ3JTsgfVxuICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkge1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7IH1cbiAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzOyB9XG4gICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgLmNhdGVnb3J5X2luZm8ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IC5jYXRlZ29yeV9pbmZvIC5zdGF0ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDQxNDIxO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgLmNhdGVnb3J5X2luZm8gLmN1cnJlbmN5IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMTk2ZjM7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSAuY2F0ZWdvcnlfaW5mbyAuY29zdCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDQxNDIxO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgLmNhdGVnb3J5X2luZm8gLm1vdW50aCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDQxNDIxO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuICAgICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgLmNhdGVnb3J5X2luZm8gZGl2IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7IH1cbiAgICAgICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgLmNhdGVnb3J5X2luZm8gZGl2IC5hZHZhbmNlcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzA0MTQyMTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gICAgICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IC5jYXRlZ29yeV9pbmZvIGRpdiAuYWN0aXZlOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcHJpY2luZ19wbGFuX2FjdGl2ZS5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gICAgICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IC5jYXRlZ29yeV9pbmZvIGRpdiAuaW5hY3RpdmU6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wcmljaW5nX3BsYW5faW5hY3RpdmUucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IGJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cbiAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSBidXR0b24uc2lnblVwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBjb2xvcjogIzIxOTZmMzsgfVxuICAgICAgICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcmljaW5nLXBsYW4tc2VjdGlvbiAuY2F0ZWdvcnkgYnV0dG9uLnNpZ25VcDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmOyB9XG4gICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLnBvcHVsYXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7IH1cbiAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5wb3B1bGFyOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3BvcHVsYXJfcHJpY2luZ19wbGFuLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICByaWdodDogMTA2cHg7XG4gICAgICAgICAgICB0b3A6IDM3cHg7IH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDNweCkge1xuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IHtcbiAgICAgICAgICAgIHdpZHRoOiAzOThweDsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLnBvcHVsYXI6YmVmb3JlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxNjBweDsgfSB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NThweCkge1xuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IHtcbiAgICAgICAgICAgIHdpZHRoOiAyOTJweDsgfVxuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLnBvcHVsYXI6YmVmb3JlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMDZweDsgfSB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDRweCkge1xuICAgICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJpY2luZy1wbGFuLXNlY3Rpb24gLmNhdGVnb3J5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxNXB4IDQwcHg7IH0gfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5jYXRlZ29yeSB7XG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggNXB4IDQwcHg7IH1cbiAgICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByaWNpbmctcGxhbi1zZWN0aW9uIC5wb3B1bGFyOmJlZm9yZSB7XG4gICAgICAgICAgICByaWdodDogODVweDsgfSB9XG4gIEBtZWRpYSAobWF4LWhlaWdodDogODU4cHgpIHtcbiAgICBtb2RhbCAubW9kYWwge1xuICAgICAgYWxpZ24taXRlbXM6IHVuc2V0OyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1NjlweCkge1xuICAgIG1vZGFsIC5tb2RhbCB7XG4gICAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH0gfVxuXG5ib2R5Lm1vZGFsLW9wZW4ge1xuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xuICBmcm9tIHtcbiAgICB0b3A6IC0zMDBweDtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIHRvIHtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTsgfSB9XG4iXX0= */"

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

module.exports = "/* MODAL STYLES\r\n-------------------------------*/\nmodal {\n  /* modals are hidden by default */\n  display: none; }\nmodal .modal {\n    display: block;\n    position: fixed;\n    z-index: 1000;\n    overflow: auto; }\nmodal .modal .modal-body {\n      display: -webkit-box;\n      display: flex;\n      float: right;\n      top: 70px;\n      height: 50px;\n      width: 250px;\n      padding: 0px;\n      position: relative;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      background: #fff;\n      -webkit-box-align: center;\n              align-items: center; }\nmodal .modal .modal-body .profile_btn, modal .modal .modal-body .logout_btn {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center;\n        width: 50%;\n        height: 100%;\n        border: none;\n        font-size: 16px;\n        line-height: 18px;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        outline: none; }\nmodal .modal .modal-body .profile_btn {\n        background: #fff;\n        color: #232128; }\nmodal .modal .modal-body .profile_btn::before {\n          content: \"\";\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          margin-right: 5px;\n          background: url('my-profile.png') no-repeat;\n          background-size: cover; }\nmodal .modal .modal-body .profile_btn:hover {\n          background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(40%, rgba(0, 0, 0, 0.05)), to(rgba(0, 0, 0, 0.1)));\n          background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1)); }\nmodal .modal .modal-body .logout_btn {\n        background: #dc3545;\n        color: #fff; }\nmodal .modal .modal-body .logout_btn::before {\n          content: \"\";\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          margin-right: 5px;\n          background: url('logout.png') no-repeat;\n          background-size: cover; }\nmodal .modal .modal-body .logout_btn:hover {\n          background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(40%, rgba(0, 0, 0, 0.05)), to(rgba(0, 0, 0, 0.1)));\n          background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1)); }\nbody.modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ3VzdG9tLU1vZGFsL3VzZXItZGlhbG9nL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxDdXN0b20tTW9kYWxcXHVzZXItZGlhbG9nXFx1c2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ3VzdG9tLU1vZGFsL3VzZXItZGlhbG9nL3VzZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQ0NnQztBRENoQztFQUNJLGlDQUFBO0VBQ0EsYUFBYSxFQUFBO0FBRmpCO0lBS1EsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYyxFQUFBO0FBUnRCO01BWVksb0JBQWE7TUFBYixhQUFhO01BQ2IsWUFBWTtNQUNaLFNBQVM7TUFDVCxZQUFZO01BQ1osWUFBWTtNQUNaLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5QixnQkFBZ0I7TUFDaEIseUJBQW1CO2NBQW5CLG1CQUFtQixFQUFBO0FBckIvQjtRQXdCZ0Isb0JBQWE7UUFBYixhQUFhO1FBQ2Isd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIseUJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLGFBQWEsRUFBQTtBQWxDN0I7UUF1Q2dCLGdCQUFnQjtRQUNoQixjQUFjLEVBQUE7QUF4QzlCO1VBMkNvQixXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLFdBQVc7VUFDWCxZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLDJDQUEyRDtVQUMzRCxzQkFBc0IsRUFBQTtBQWpEMUM7VUFxRG9CLGtKQUFpRjtVQUFqRiwyRkFBaUYsRUFBQTtBQXJEckc7UUEyRGdCLG1CQUFtQjtRQUNuQixXQUFXLEVBQUE7QUE1RDNCO1VBK0RvQixXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLFdBQVc7VUFDWCxZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLHVDQUF1RDtVQUN2RCxzQkFBc0IsRUFBQTtBQXJFMUM7VUF5RW9CLGtKQUFpRjtVQUFqRiwyRkFBaUYsRUFBQTtBQU9yRztFQUNJLDZFQUFBO0VBQ0EsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9DdXN0b20tTW9kYWwvdXNlci1kaWFsb2cvdXNlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNT0RBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbm1vZGFsIHtcclxuICAgIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgLm1vZGFsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcblxyXG4gICAgICAgIC5tb2RhbC1ib2R5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJWJ0biB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2ZpbGVfYnRuIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWJ0bjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIzMjEyODtcclxuXHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9teS1wcm9maWxlLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLC4wNSkgNDAlLHJnYmEoMCwwLDAsLjEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ291dF9idG4ge1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlYnRuO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2xvZ291dC5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQscmdiYSgwLDAsMCwuMDUpIDQwJSxyZ2JhKDAsMCwwLC4xKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtb3BlbiB7XHJcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iLCIvKiBNT0RBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTsgfVxuICBtb2RhbCAubW9kYWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB0b3A6IDcwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB3aWR0aDogMjUwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcm9maWxlX2J0biwgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5sb2dvdXRfYnRuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgbW9kYWwgLm1vZGFsIC5tb2RhbC1ib2R5IC5wcm9maWxlX2J0biB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjMjMyMTI4OyB9XG4gICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAucHJvZmlsZV9idG46OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9teS1wcm9maWxlLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxuICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLnByb2ZpbGVfYnRuOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwgMCwgMCwgMC4wNSkgNDAlLCByZ2JhKDAsIDAsIDAsIDAuMSkpOyB9XG4gICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLmxvZ291dF9idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgICAgICBtb2RhbCAubW9kYWwgLm1vZGFsLWJvZHkgLmxvZ291dF9idG46OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dvdXQucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG4gICAgICAgIG1vZGFsIC5tb2RhbCAubW9kYWwtYm9keSAubG9nb3V0X2J0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDQwJSwgcmdiYSgwLCAwLCAwLCAwLjEpKTsgfVxuXG5ib2R5Lm1vZGFsLW9wZW4ge1xuICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuIl19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserDialogComponent = /** @class */ (function () {
    function UserDialogComponent(router, modalService) {
        this.router = router;
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
        this.router.navigate(['/myProfile']);
    };
    UserDialogComponent.prototype.logOut = function () {
        localStorage.setItem('isActivated', 'false');
        this.router.navigate(['/main']);
    };
    UserDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-dialog',
            template: __webpack_require__(/*! ./user-dialog.component.html */ "./src/app/Custom-Modal/user-dialog/user-dialog.component.html"),
            styles: [__webpack_require__(/*! ./user-dialog.component.scss */ "./src/app/Custom-Modal/user-dialog/user-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
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
        var path = localStorage.getItem('path');
        if (path) {
            localStorage.removeItem('path');
            this.router.navigate([path]);
        }
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
    { path: '', redirectTo: 'main', pathMatch: 'full' },
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

module.exports = ".aboutCourse {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .aboutCourse .aboutCourse_container {\n    width: 1170px; }\n  .aboutCourse .aboutCourse_container .aboutCourse-section img {\n      margin-bottom: 0.5rem; }\n  .aboutCourse .aboutCourse_container .aboutCourse-section .secondary-text {\n      font-size: 16px;\n      line-height: 32px;\n      color: #041421;\n      font-family: \"Work Sans\";\n      font-weight: 400;\n      margin-bottom: 35px; }\n  .aboutCourse .aboutCourse_container .advantage {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      flex-wrap: wrap;\n      font-size: 14px;\n      line-height: 24px;\n      color: #042037;\n      font-family: \"Open Sans\";\n      font-weight: 400;\n      padding-top: 50px;\n      padding-bottom: 50px; }\n  .aboutCourse .aboutCourse_container .advantage .advantage-section {\n        width: 475px; }\n  .aboutCourse .aboutCourse_container .advantage .advantage-section .advantage-section_single {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-align: center;\n                  align-items: center;\n          padding-bottom: 30px; }\n  .aboutCourse .aboutCourse_container .advantage .advantage-section .advantage-section_single span {\n            font-size: 14px;\n            line-height: 24px;\n            color: #042037;\n            font-family: \"Open Sans\";\n            font-weight: 400; }\n  .aboutCourse .aboutCourse_container .advantage .advantage-section .advantage-section_single .round {\n            display: -webkit-box;\n            display: flex;\n            -webkit-box-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                    align-items: center;\n            width: 40px;\n            height: 40px;\n            border-radius: 20px;\n            border: 1px solid #2196f3;\n            font-size: 18px;\n            color: #2196f3;\n            font-family: \"Open Sans\";\n            margin-right: 10px;\n            padding: 0 15px; }\n  @media screen and (max-width: 1029px) {\n        .aboutCourse .aboutCourse_container .advantage .advantage-section {\n          width: 100%; } }\n  .teacher {\n  background-color: #2d2b35;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .teacher .teacher-container {\n    font-size: 36px;\n    line-height: 42px;\n    color: #ffffff;\n    font-family: \"Work Sans\";\n    font-weight: 600;\n    text-align: center;\n    padding-bottom: 55px;\n    width: 100%; }\n  .teacher .teacher-section {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n    width: 1170px; }\n  .teacher .teacher-section .teacher-section_about {\n      width: 675px;\n      padding-right: 90px;\n      padding-bottom: 75px; }\n  .teacher .teacher-section .teacher-section_about h3 {\n        font-size: 26px;\n        line-height: 42px;\n        color: #ffffff;\n        font-family: \"Work Sans\";\n        font-weight: 600; }\n  .teacher .teacher-section .teacher-section_about span {\n        display: block;\n        font-size: 18px;\n        line-height: 30px;\n        color: #ffffff;\n        font-family: \"Open Sans\";\n        font-weight: 400; }\n  .teacher .teacher-section .teacher-section_about .category {\n        display: block;\n        font-size: 16px;\n        line-height: 16px;\n        color: #b9b8bc;\n        font-family: \"Open Sans\";\n        font-weight: 400; }\n  .teacher .teacher-section .teacher-section_photo {\n      width: 300px;\n      height: 400px;\n      background-color: #ffffff;\n      background: url('teacher-photo.png') no-repeat 0 15%;\n      background-size: cover; }\n  @media screen and (max-width: 1141px) {\n    .teacher .teacher-section .teacher-section_about {\n      width: calc(100% - 300px); } }\n  @media screen and (max-width: 768px) {\n    .teacher .teacher-section {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: reverse;\n              flex-direction: column-reverse;\n      -webkit-box-align: center;\n              align-items: center;\n      text-align: center; }\n      .teacher .teacher-section .teacher-section_about {\n        width: 100%;\n        padding-right: 0; } }\n  .watched {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-bottom: 70px; }\n  .watched .watched-container {\n    text-align: center; }\n  .watched .watched-container .course-image {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      width: 325px;\n      height: 232px;\n      border-radius: 6px;\n      background-position: center;\n      background-size: cover;\n      margin: 7.5px;\n      padding: 20px;\n      cursor: pointer; }\n  .watched .watched-container .course-image div .category-section .category {\n        display: inline-block;\n        padding: 3px 10px;\n        color: #fff;\n        background: rgba(0, 0, 0, 0.3);\n        border-radius: 6px;\n        margin-right: 10px;\n        margin-bottom: 5px; }\n  .watched .watched-container .course-image div .status {\n        display: inline-block;\n        float: right;\n        padding: 3px 10px;\n        border-radius: 6px;\n        color: #fff; }\n  .watched .watched-container .course-image div .status.PRO {\n        background: #2196f3; }\n  .watched .watched-container .course-image div .status.Plus {\n        background: #c46cd8; }\n  .watched .watched-container .course-image div .status.Free {\n        background: #7fc400; }\n  .watched .watched-container .course-image div .status.Optimal {\n        background: #5c4af7; }\n  .watched .watched-container .course-image .nameCourse {\n        display: block;\n        color: #fff;\n        text-align: left;\n        font-size: 14px; }\n  .watched .watched-container .course-image .nameCourse .author {\n          font: 14px \"Open Sans\", sans-serif;\n          color: #b9b8bc; }\n  .watched .watched-container .course-image .totalTime {\n        width: 40px;\n        height: 18px;\n        border-radius: 4px;\n        background-color: #232128;\n        font-size: 10px;\n        color: #b9b8bc;\n        font-family: \"Open Sans\";\n        font-weight: 700;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center; }\n  @media screen and (max-width: 1023px) {\n      .watched .watched-container .course-image {\n        width: 325px;\n        height: 210px; } }\n  @media screen and (max-width: 767px) {\n      .watched .watched-container .course-image {\n        width: 520px;\n        height: 405px; } }\n  @media screen and (max-width: 599px) {\n      .watched .watched-container .course-image {\n        width: 340px;\n        height: 225px; } }\n  @media screen and (max-width: 424px) {\n      .watched .watched-container .course-image {\n        width: 295px;\n        height: 195px; }\n        .watched .watched-container .course-image div .category-section {\n          font-size: 14px; }\n          .watched .watched-container .course-image div .category-section .status {\n            font-size: 14px;\n            padding: 0 10px; } }\n  @media screen and (max-width: 374px) {\n      .watched .watched-container .course-image {\n        width: 240px;\n        height: 170px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLXBhZ2UvYWJvdXQtY291cnNlL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxjb3Vyc2UtcGFnZVxcYWJvdXQtY291cnNlXFxhYm91dC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7RUFGekI7SUFLSSxhQUFhLEVBQUE7RUFMakI7TUFTUSxxQkFBcUIsRUFBQTtFQVQ3QjtNQWFRLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYztNQUNkLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7RUFsQjNCO01BdUJNLG9CQUFhO01BQWIsYUFBYTtNQUNiLHlCQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIsZUFBZTtNQUNmLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYztNQUNkLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLG9CQUFvQixFQUFBO0VBaEMxQjtRQW1DUSxZQUFZLEVBQUE7RUFuQ3BCO1VBc0NVLG9CQUFhO1VBQWIsYUFBYTtVQUNiLHlCQUFtQjtrQkFBbkIsbUJBQW1CO1VBQ25CLG9CQUFvQixFQUFBO0VBeEM5QjtZQTJDWSxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUE7RUEvQzVCO1lBbURZLG9CQUFhO1lBQWIsYUFBYTtZQUNiLHdCQUF1QjtvQkFBdkIsdUJBQXVCO1lBQ3ZCLHlCQUFtQjtvQkFBbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6QixlQUFlO1lBQ2YsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixrQkFBa0I7WUFDbEIsZUFBZSxFQUFBO0VBS3JCO1FBbkVOO1VBcUVVLFdBQVcsRUFBQSxFQUNaO0VBTVQ7RUFDRSx5QkFBeUI7RUFDekIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUp6QjtJQU9JLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXLEVBQUE7RUFkZjtJQWtCSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixhQUFhLEVBQUE7RUFyQmpCO01BdUJNLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsb0JBQW9CLEVBQUE7RUF6QjFCO1FBMkJRLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixnQkFBZ0IsRUFBQTtFQS9CeEI7UUFtQ1EsY0FBYztRQUNkLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixnQkFBZ0IsRUFBQTtFQXhDeEI7UUE0Q1EsY0FBYztRQUNkLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixnQkFBZ0IsRUFBQTtFQWpEeEI7TUFzRE0sWUFBWTtNQUNaLGFBQWE7TUFDYix5QkFBeUI7TUFDekIsb0RBQW9FO01BQ3BFLHNCQUFzQixFQUFBO0VBSTFCO0lBOURGO01BaUVRLHlCQUF5QixFQUFBLEVBQzFCO0VBSUw7SUF0RUY7TUF3RU0sNEJBQThCO01BQTlCLDhCQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixrQkFBa0IsRUFBQTtNQTFFeEI7UUE2RVEsV0FBVztRQUNYLGdCQUFnQixFQUFBLEVBQ2pCO0VBS1A7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixvQkFBb0IsRUFBQTtFQUp0QjtJQU1JLGtCQUFrQixFQUFBO0VBTnRCO01BU00sb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZTtNQUNmLHlCQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsYUFBYTtNQUNiLGVBQWUsRUFBQTtFQXBCckI7UUF5QlkscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixXQWhNQTtRQWlNQSw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixrQkFBa0IsRUFBQTtFQS9COUI7UUFvQ1UscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFdBN01FLEVBQUE7RUFxS1o7UUE0Q1UsbUJBaE5JLEVBQUE7RUFvS2Q7UUFnRFUsbUJBQW1CLEVBQUE7RUFoRDdCO1FBb0RVLG1CQXZOSyxFQUFBO0VBbUtmO1FBd0RVLG1CQUFtQixFQUFBO0VBeEQ3QjtRQTZEUSxjQUFjO1FBQ2QsV0FuT0k7UUFvT0osZ0JBQWdCO1FBQ2hCLGVBQWUsRUFBQTtFQWhFdkI7VUFtRVUsa0NBQWtDO1VBQ2xDLGNBQWMsRUFBQTtFQXBFeEI7UUF5RVEsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixvQkFBYTtRQUFiLGFBQWE7UUFDYix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQixFQUFBO0VBSXZCO01BdkZKO1FBeUZRLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDZDtFQUdIO01BOUZKO1FBZ0dRLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDZDtFQUdIO01BckdKO1FBdUdRLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDZDtFQUdIO01BNUdKO1FBOEdRLFlBQVk7UUFDWixhQUFhLEVBQUE7UUEvR3JCO1VBbUhZLGVBQWUsRUFBQTtVQW5IM0I7WUFzSGMsZUFBZTtZQUNmLGVBQWUsRUFBQSxFQUNoQjtFQU1UO01BOUhKO1FBZ0lRLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1wYWdlL2Fib3V0LWNvdXJzZS9hYm91dC1jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJGJnOiAjMjkyNzMxO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuLmFib3V0Q291cnNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAuYWJvdXRDb3Vyc2VfY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMTcwcHg7XHJcblxyXG4gICAgLmFib3V0Q291cnNlLXNlY3Rpb24ge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlY29uZGFyeS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgY29sb3I6ICMwNDE0MjE7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkdmFudGFnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzA0MjAzNztcclxuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuXHJcbiAgICAgIC5hZHZhbnRhZ2Utc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQ3NXB4O1xyXG5cclxuICAgICAgICAuYWR2YW50YWdlLXNlY3Rpb25fc2luZ2xlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDQyMDM3O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucm91bmQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZmMztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyOXB4KSB7XHJcbiAgICAgICAgLmFkdmFudGFnZS1zZWN0aW9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRlYWNoZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJiMzU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC50ZWFjaGVyLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50ZWFjaGVyLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgICAudGVhY2hlci1zZWN0aW9uX2Fib3V0IHtcclxuICAgICAgd2lkdGg6IDY3NXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA5MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNzVweDtcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNiOWI4YmM7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZWFjaGVyLXNlY3Rpb25fcGhvdG8ge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy90ZWFjaGVyLXBob3RvLnBuZ1wiKSBuby1yZXBlYXQgMCAxNSU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTQxcHgpIHtcclxuICAgIC50ZWFjaGVyLXNlY3Rpb24ge1xyXG4gICAgICAudGVhY2hlci1zZWN0aW9uX2Fib3V0IHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRlYWNoZXItc2VjdGlvbiB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgLnRlYWNoZXItc2VjdGlvbl9hYm91dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndhdGNoZWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG4gIC53YXRjaGVkLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgIGhlaWdodDogMjMycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBtYXJnaW46IDcuNXB4O1xyXG4gICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cy5QUk8ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzLlBsdXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2M0NmNkODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMuRnJlZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzLk9wdGltYWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzVjNGFmNztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYW1lQ291cnNlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAuYXV0aG9yIHtcclxuICAgICAgICAgIGZvbnQ6IDE0cHggXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjYjliOGJjO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvdGFsVGltZSB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMTI4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBjb2xvcjogI2I5YjhiYztcclxuICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gICAgICAuY291cnNlLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA1MjBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjI1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjRweCkge1xyXG4gICAgICAuY291cnNlLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMjk1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTVweDtcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7XHJcbiAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */"

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

module.exports = ".slider .left-slide, .slider .right-slide {\n  height: 480px;\n  width: 720px;\n  border-radius: 6px;\n  margin-top: 108px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  cursor: pointer; }\n  .slider .left-slide .layer, .slider .right-slide .layer {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    position: relative;\n    height: 100%;\n    border-radius: 6px;\n    background-color: #292731;\n    opacity: 0.6;\n    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n    -webkit-transition: box-shadow 0.3s;\n    transition: box-shadow 0.3s; }\n  .slider .left-slide .layer:hover, .slider .right-slide .layer:hover {\n      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25); }\n  .slider .left-slide .layer .array, .slider .right-slide .layer .array {\n      width: 56px;\n      height: 56px; }\n  .slider .left-slide .layer .right, .slider .right-slide .layer .right {\n      background: url('rightCourse.png') no-repeat;\n      background-size: cover; }\n  .slider .left-slide .layer .left, .slider .right-slide .layer .left {\n      background: url('leftCourse.png') no-repeat;\n      background-size: cover; }\n  .slider {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: url('slider-section.png') no-repeat center;\n  background-size: cover;\n  color: white;\n  text-align: center;\n  width: 100%; }\n  .slider .center-slide {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 720px;\n    margin: 0 60px; }\n  .slider .center-slide .sharebutton {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 100%;\n      padding-bottom: 80px; }\n  .slider .center-slide .sharebutton div {\n        margin-left: 15px; }\n  .slider .center-slide .sharebutton .facebook {\n        background: url('fb-white.png') no-repeat;\n        background-size: contain;\n        width: 7px;\n        height: 15px; }\n  .slider .center-slide .sharebutton .twitter {\n        background: url('tw-white.png') no-repeat;\n        background-size: contain;\n        width: 14px;\n        height: 11px; }\n  .slider .center-slide .sharebutton .linkedn {\n        background: url('ln-white.png') no-repeat;\n        background-size: contain;\n        width: 14px;\n        height: 15px; }\n  .slider .center-slide .sharebutton .instagram {\n        background: url('in-white.png') no-repeat;\n        background-size: contain;\n        width: 14px;\n        height: 15px; }\n  .slider .center-slide span {\n      font-size: 16px;\n      line-height: 26px;\n      color: #ffffff;\n      font-family: \"Open Sans\";\n      font-weight: 400;\n      text-align: center; }\n  .slider .center-slide .slide {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center;\n      width: 720px;\n      height: 480px;\n      border-radius: 6px;\n      box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n      padding: 10px;\n      margin-top: 25px;\n      -webkit-transition: box-shadow 0.3s;\n      transition: box-shadow 0.3s; }\n  .slider .center-slide .slide:hover {\n        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25); }\n  .slider .center-slide .slide .category-section .category {\n        display: inline-block;\n        padding: 0px 5px;\n        color: #fff;\n        background: rgba(0, 0, 0, 0.3);\n        border-radius: 6px;\n        margin-right: 10px;\n        margin-bottom: 5px; }\n  .slider .center-slide .slide .category-section .category span {\n          font-size: 10px;\n          font-family: \"Open Sans\";\n          font-weight: 700;\n          text-align: center; }\n  .slider .center-slide .slide .status {\n        display: inline-block;\n        float: right;\n        padding: 0px 5px;\n        border-radius: 6px;\n        color: #fff; }\n  .slider .center-slide .slide .status span {\n          font-size: 10px;\n          font-family: \"Open Sans\";\n          font-weight: 700;\n          text-align: center; }\n  .slider .center-slide .slide .status.PRO {\n        background: #2196f3; }\n  .slider .center-slide .slide .status.Plus {\n        background: #c46cd8; }\n  .slider .center-slide .slide .status.Free {\n        background: #7fc400; }\n  .slider .center-slide .slide .status.Optimal {\n        background: #5c4af7; }\n  .slider .center-slide .slide .totalTime {\n        width: 28px;\n        height: 11px;\n        border-radius: 4px;\n        background-color: #232128;\n        font-size: 10px;\n        color: #b9b8bc;\n        font-family: \"Open Sans\";\n        font-weight: 700;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center; }\n  .slider .center-slide .slide .totalTime span {\n          font-size: 10px;\n          line-height: 22px;\n          color: #b9b8bc;\n          font-family: \"Open Sans\";\n          font-weight: 700;\n          text-align: center; }\n  .slider .center-slide .slide .array-section {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n                align-items: center;\n        width: 100%; }\n  .slider .center-slide .slide .array-section .playHover {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n                  justify-content: center;\n          background-color: white;\n          width: 68px;\n          height: 68px;\n          border-radius: 34px;\n          box-shadow: 0 0 3px rgba(0, 0, 0, 0.13); }\n  .slider .center-slide .slide .array-section .playHover div {\n            width: 11px;\n            height: 19px;\n            background: url('playcourse.png') no-repeat;\n            background-size: cover; }\n  .slider .center-slide .slide .array-section .array {\n          width: 56px;\n          height: 56px;\n          visibility: hidden; }\n  .slider .center-slide .slide .array-section .right {\n          background: url('rightCourse.png') no-repeat;\n          background-size: cover; }\n  .slider .center-slide .slide .array-section .left {\n          background: url('leftCourse.png') no-repeat;\n          background-size: cover; }\n  @media screen and (max-width: 1024px) {\n    .slider .left-slide,\n    .slider .right-slide {\n      display: none; }\n    .slider .center-slide .slide .array-section .array {\n      visibility: visible; } }\n  @media screen and (max-width: 768px) {\n    .slider .center-slide {\n      margin: 0; }\n      .slider .center-slide .slide {\n        width: 100%; }\n        .slider .center-slide .slide .array-section .playHover {\n          width: 45px;\n          height: 45px; }\n          .slider .center-slide .slide .array-section .playHover div {\n            width: 6px;\n            height: 11px; }\n        .slider .center-slide .slide .array-section .array {\n          width: 35px;\n          height: 35px; } }\n  @media screen and (max-width: 580px) {\n    .slider .center-slide .slide {\n      height: 380px; } }\n  @media screen and (max-width: 375px) {\n    .slider .center-slide .slide {\n      height: 250px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlLXBhZ2UvY291cnNlLXNsaWRlci9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxcY291cnNlLXBhZ2VcXGNvdXJzZS1zbGlkZXJcXGNvdXJzZS1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsZUFBZSxFQUFBO0VBRWY7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsbUNBQTJCO0lBQTNCLDJCQUEyQixFQUFBO0VBRTNCO01BQ0UsMkNBQTJDLEVBQUE7RUFHN0M7TUFDRSxXQUFXO01BQ1gsWUFBWSxFQUFBO0VBR2Q7TUFDRSw0Q0FBNEQ7TUFDNUQsc0JBQXNCLEVBQUE7RUFHeEI7TUFDRSwyQ0FBMkQ7TUFDM0Qsc0JBQXNCLEVBQUE7RUFLNUI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHNEQUFzRTtFQUN0RSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFQYjtJQVVJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjLEVBQUE7RUFkbEI7TUFpQk0sb0JBQWE7TUFBYixhQUFhO01BQ2Isd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2Qix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxvQkFBb0IsRUFBQTtFQXJCMUI7UUF3QlEsaUJBQWlCLEVBQUE7RUF4QnpCO1FBNEJRLHlDQUF5RDtRQUN6RCx3QkFBd0I7UUFDeEIsVUFBVTtRQUNWLFlBQVksRUFBQTtFQS9CcEI7UUFtQ1EseUNBQXlEO1FBQ3pELHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsWUFBWSxFQUFBO0VBdENwQjtRQTBDUSx5Q0FBeUQ7UUFDekQsd0JBQXdCO1FBQ3hCLFdBQVc7UUFDWCxZQUFZLEVBQUE7RUE3Q3BCO1FBaURRLHlDQUF5RDtRQUN6RCx3QkFBd0I7UUFDeEIsV0FBVztRQUNYLFlBQVksRUFBQTtFQXBEcEI7TUF5RE0sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQUFjO01BQ2Qsd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQTlEeEI7TUFrRU0sb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZTtNQUNmLHdCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsNENBQTRDO01BQzVDLDRCQUE0QjtNQUM1QiwyQkFBMkI7TUFDM0Isc0JBQXNCO01BQ3RCLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsbUNBQTJCO01BQTNCLDJCQUEyQixFQUFBO0VBOUVqQztRQWlGUSwyQ0FBMkMsRUFBQTtFQWpGbkQ7UUFzRlUscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixXQXhJRTtRQXlJRiw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixrQkFBa0IsRUFBQTtFQTVGNUI7VUErRlksZUFBZTtVQUNmLHdCQUF3QjtVQUN4QixnQkFBZ0I7VUFDaEIsa0JBQWtCLEVBQUE7RUFsRzlCO1FBd0dRLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixXQTVKSSxFQUFBO0VBZ0RaO1VBK0dVLGVBQWU7VUFDZix3QkFBd0I7VUFDeEIsZ0JBQWdCO1VBQ2hCLGtCQUFrQixFQUFBO0VBbEg1QjtRQXVIUSxtQkF0S00sRUFBQTtFQStDZDtRQTJIUSxtQkFBbUIsRUFBQTtFQTNIM0I7UUErSFEsbUJBN0tPLEVBQUE7RUE4Q2Y7UUFtSVEsbUJBQW1CLEVBQUE7RUFuSTNCO1FBdUlRLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixlQUFlO1FBQ2YsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixnQkFBZ0I7UUFDaEIsb0JBQWE7UUFBYixhQUFhO1FBQ2Isd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIseUJBQW1CO2dCQUFuQixtQkFBbUIsRUFBQTtFQWpKM0I7VUFvSlUsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixjQUFjO1VBQ2Qsd0JBQXdCO1VBQ3hCLGdCQUFnQjtVQUNoQixrQkFBa0IsRUFBQTtFQXpKNUI7UUE4SlEsb0JBQWE7UUFBYixhQUFhO1FBQ2IseUJBQThCO2dCQUE5Qiw4QkFBOEI7UUFDOUIseUJBQW1CO2dCQUFuQixtQkFBbUI7UUFDbkIsV0FBVyxFQUFBO0VBaktuQjtVQW9LVSxvQkFBYTtVQUFiLGFBQWE7VUFDYix5QkFBbUI7a0JBQW5CLG1CQUFtQjtVQUNuQix3QkFBdUI7a0JBQXZCLHVCQUF1QjtVQUN2Qix1QkFBdUI7VUFDdkIsV0FBVztVQUNYLFlBQVk7VUFDWixtQkFBbUI7VUFDbkIsdUNBQXVDLEVBQUE7RUEzS2pEO1lBOEtZLFdBQVc7WUFDWCxZQUFZO1lBQ1osMkNBQTJEO1lBQzNELHNCQUFzQixFQUFBO0VBakxsQztVQXNMVSxXQUFXO1VBQ1gsWUFBWTtVQUNaLGtCQUFrQixFQUFBO0VBeEw1QjtVQTRMVSw0Q0FBNEQ7VUFDNUQsc0JBQXNCLEVBQUE7RUE3TGhDO1VBaU1VLDJDQUEyRDtVQUMzRCxzQkFBc0IsRUFBQTtFQWM5QjtJQWhORjs7TUFtTk0sYUFBYSxFQUFBO0lBbk5uQjtNQTBOWSxtQkFBbUIsRUFBQSxFQUNwQjtFQU1UO0lBak9GO01BbU9RLFNBQVMsRUFBQTtNQW5PakI7UUFxT1EsV0FBVyxFQUFBO1FBck9uQjtVQXlPWSxXQUFXO1VBQ1gsWUFBWSxFQUFBO1VBMU94QjtZQTRPYyxVQUFVO1lBQ1YsWUFBWSxFQUFBO1FBN08xQjtVQWtQWSxXQUFXO1VBQ1gsWUFBWSxFQUFBLEVBQ2I7RUFNVDtJQTFQRjtNQTZQUSxhQUFhLEVBQUEsRUFDZDtFQUlMO0lBbFFGO01BcVFRLGFBQWEsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY291cnNlLXBhZ2UvY291cnNlLXNsaWRlci9jb3Vyc2Utc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb2xvcnM6XHJcbiRiZzogIzI5MjczMTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuXHJcbiVzbGlkZXItc3R5bGUge1xyXG4gIGhlaWdodDogNDgwcHg7XHJcbiAgd2lkdGg6IDcyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiAxMDhweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLmxheWVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyNzMxO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFycmF5IHtcclxuICAgICAgd2lkdGg6IDU2cHg7XHJcbiAgICAgIGhlaWdodDogNTZweDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcmlnaHRDb3Vyc2UucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sZWZ0Q291cnNlLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zbGlkZXItc2VjdGlvbi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5jZW50ZXItc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDcyMHB4O1xyXG4gICAgbWFyZ2luOiAwIDYwcHg7XHJcblxyXG4gICAgLnNoYXJlYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mYWNlYm9vayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZiLXdoaXRlLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudHdpdHRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3R3LXdoaXRlLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMTFweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpbmtlZG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sbi13aGl0ZS5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbnN0YWdyYW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbi13aGl0ZS5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDcyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RhdHVzLlBSTyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0dXMuUGx1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2M0NmNkODtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0YXR1cy5GcmVlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGF0dXMuT3B0aW1hbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzVjNGFmNztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvdGFsVGltZSB7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMTI4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBjb2xvcjogI2I5YjhiYztcclxuICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgIGNvbG9yOiAjYjliOGJjO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFycmF5LXNlY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5wbGF5SG92ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDY4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY4cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xyXG5cclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wbGF5Y291cnNlLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyYXkge1xyXG4gICAgICAgICAgd2lkdGg6IDU2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3JpZ2h0Q291cnNlLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xlZnRDb3Vyc2UucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGVmdC1zbGlkZSB7XHJcbiAgICBAZXh0ZW5kICVzbGlkZXItc3R5bGU7XHJcbiAgfVxyXG5cclxuICAucmlnaHQtc2xpZGUge1xyXG4gICAgQGV4dGVuZCAlc2xpZGVyLXN0eWxlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAubGVmdC1zbGlkZSxcclxuICAgIC5yaWdodC1zbGlkZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlci1zbGlkZSB7XHJcbiAgICAgIC5zbGlkZSB7XHJcbiAgICAgICAgLmFycmF5LXNlY3Rpb24ge1xyXG4gICAgICAgICAgLmFycmF5IHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY2VudGVyLXNsaWRlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIC5zbGlkZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5hcnJheS1zZWN0aW9uIHtcclxuICAgICAgICAgIC5wbGF5SG92ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycmF5IHtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgICAuY2VudGVyLXNsaWRlIHtcclxuICAgICAgLnNsaWRlIHtcclxuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgLmNlbnRlci1zbGlkZSB7XHJcbiAgICAgIC5zbGlkZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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

module.exports = ".header-title {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: url('welcome-school-bg.png') no-repeat center center;\n  background-size: cover;\n  padding-top: 130px;\n  padding-bottom: 70px;\n  color: white; }\n  .header-title div h2 {\n    margin-bottom: 20px; }\n  .filtration {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #f6f6f6; }\n  .filtration .search-hero {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    padding: 25px 15px;\n    position: relative;\n    bottom: 45px;\n    border-radius: 6px;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.12);\n    width: 900px;\n    background-color: white; }\n  .filtration .search-hero .search {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      overflow: hidden; }\n  .filtration .search-hero .search .styled-select {\n        background: url('select-arrow.png') no-repeat 98% 15px;\n        background-size: 15px;\n        overflow: hidden;\n        margin-right: 10px;\n        border-bottom: 2px solid #2196f3;\n        overflow: hidden; }\n  .filtration .search-hero .search .styled-select select {\n          background: transparent;\n          border: none;\n          font-size: 16px;\n          padding: 5px;\n          /* If you add too much padding here, the options won't show in IE */\n          width: 150px;\n          color: #1c1a22;\n          font-family: \"Work Sans\";\n          font-weight: 600;\n          overflow: hidden; }\n  .filtration .search-hero .search .styled-select select option {\n            font-size: 16px;\n            line-height: 16px;\n            color: #1c1a22;\n            font-family: \"Work Sans\";\n            overflow: hidden; }\n  .filtration .search-hero .form-control {\n      width: 265px;\n      height: 48px;\n      border-radius: 24px;\n      background-color: #f6f6f6;\n      border: 2px solid #2196f3; }\n  .courses {\n  background-color: #f6f6f6;\n  padding-top: 20px; }\n  .courses .courses-container {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding-bottom: 45px; }\n  .courses .courses-container div .course-image {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      width: 440px;\n      height: 325px;\n      border-radius: 6px;\n      background-position: center;\n      background-size: cover;\n      margin: 7.5px;\n      padding: 20px;\n      cursor: pointer; }\n  .courses .courses-container div .course-image div .category-section {\n        width: 75%; }\n  .courses .courses-container div .course-image div .category-section .category {\n          display: inline-block;\n          padding: 3px 10px;\n          color: #fff;\n          background: rgba(0, 0, 0, 0.3);\n          border-radius: 6px;\n          margin-right: 10px;\n          margin-bottom: 5px; }\n  .courses .courses-container div .course-image div .status {\n        display: inline-block;\n        float: right;\n        padding: 3px 10px;\n        border-radius: 6px;\n        color: #fff; }\n  .courses .courses-container div .course-image div .status.PRO {\n        background: #2196f3; }\n  .courses .courses-container div .course-image div .status.Plus {\n        background: #c46cd8; }\n  .courses .courses-container div .course-image div .status.Free {\n        background: #7fc400; }\n  .courses .courses-container div .course-image div .status.Optimal {\n        background: #5c4af7; }\n  .courses .courses-container div .course-image .nameCourse {\n        display: block;\n        color: #fff;\n        width: 100%;\n        font-size: 14px; }\n  .courses .courses-container div .course-image .nameCourse .author {\n          font: 14px 'Open Sans', sans-serif;\n          color: #b9b8bc; }\n  .courses .courses-container div .course-image .totalTime {\n        width: 40px;\n        height: 18px;\n        border-radius: 4px;\n        background-color: #232128;\n        font-size: 10px;\n        color: #b9b8bc;\n        font-family: \"Open Sans\";\n        font-weight: 700;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center; }\n  .courses .courses-container div .course-image-hover {\n      visibility: hidden;\n      display: -webkit-box;\n      display: flex;\n      position: absolute;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 440px;\n      height: 325px;\n      background-color: #2927317a;\n      border-radius: 6px;\n      cursor: pointer; }\n  .courses .courses-container div .course-image-hover .countOfLessons {\n        width: 64px;\n        height: 64px;\n        border-radius: 32px;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n        background-color: #2196f3;\n        font-size: 12px;\n        line-height: 22px;\n        color: #ffffff;\n        font-family: \"Open Sans\";\n        font-weight: 700; }\n  .courses .courses-container div .course-image-hover .countOfLessons span {\n          position: absolute;\n          margin-top: 15px;\n          margin-left: 25px; }\n  .courses .courses-container div .course-image-hover .countOfLessons::after {\n          content: '';\n          width: 32px;\n          height: 32px;\n          display: block;\n          top: 14px;\n          position: relative;\n          background: url('countOfLessons-form.png') no-repeat;\n          background-size: 100%;\n          margin-left: 19px; }\n  .courses .courses-container div:hover .course-image-hover {\n      visibility: visible; }\n  @media screen and (max-width: 1023px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 325px;\n        height: 210px; } }\n  @media screen and (max-width: 767px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 520px;\n        height: 405px; } }\n  @media screen and (max-width: 599px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 340px;\n        height: 225px; } }\n  @media screen and (max-width: 424px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 295px;\n        height: 195px; } }\n  @media screen and (max-width: 374px) {\n      .courses .courses-container div .course-image, .courses .courses-container div .course-image-hover {\n        width: 240px;\n        height: 170px; } }\n  .courses .courses-container .show-section {\n      padding-top: 80px;\n      text-align: center; }\n  .courses .courses-container .show-section .show-button {\n        width: 172px;\n        height: 48px;\n        border: 2px solid #2196f3;\n        border-radius: 24px;\n        font-size: 16px;\n        line-height: 18px;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        margin: 0px 10px;\n        outline: none;\n        background-color: #fff;\n        color: #2196f3;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n  .courses .courses-container .show-section .show-button:hover {\n          background-color: #2196f3;\n          color: #fff;\n          box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n  @media screen and (max-width: 1023px) {\n  .filtration .search-hero {\n    width: 98%; } }\n  @media screen and (max-width: 820px) {\n  .filtration .search-hero .search {\n    padding-bottom: 20px;\n    width: 100%; }\n    .filtration .search-hero .search .styled-select {\n      width: 170px; }\n      .filtration .search-hero .search .styled-select select {\n        width: 100%; }\n  .filtration .search-hero .form-control {\n    width: 100%; } }\n  @media screen and (max-width: 599px) {\n  .filtration .search-hero .search .styled-select {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL29ubGluZS1jb3Vyc2VzL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxjb3Vyc2VzLXBhZ2VcXG9ubGluZS1jb3Vyc2VzXFxvbmxpbmUtY291cnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdFQUFnRjtFQUNoRixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZLEVBQUE7RUFWaEI7SUFjWSxtQkFBbUIsRUFBQTtFQUsvQjtFQUNHLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUE7RUFINUI7SUFNUSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1Q0FBb0M7SUFDcEMsWUFBWTtJQUNaLHVCQUF1QixFQUFBO0VBaEIvQjtNQW1CWSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2YseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5QixnQkFBZ0IsRUFBQTtFQXRCNUI7UUF5QmdCLHNEQUFzRTtRQUN0RSxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixnQ0FwREY7UUFxREUsZ0JBQWdCLEVBQUE7RUE5QmhDO1VBaUNvQix1QkFBdUI7VUFDdkIsWUFBWTtVQUNaLGVBQWU7VUFDZixZQUFZO1VBQUUsbUVBQUE7VUFDZCxZQUFZO1VBQ1osY0FBYztVQUNkLHdCQUF3QjtVQUN4QixnQkFBZ0I7VUFDaEIsZ0JBQWdCLEVBQUE7RUF6Q3BDO1lBNEN3QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUE7RUFoRHhDO01BdURZLFlBQVk7TUFDWixZQUFZO01BQ1osbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6Qix5QkFsRkUsRUFBQTtFQXVGZDtFQUNJLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTtFQUZyQjtJQUtRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQixFQUFBO0VBUjVCO01BWWdCLG9CQUFhO01BQWIsYUFBYTtNQUNiLGVBQWU7TUFDZix5QkFBOEI7Y0FBOUIsOEJBQThCO01BQzlCLDRCQUFzQjtNQUF0Qiw2QkFBc0I7Y0FBdEIsc0JBQXNCO01BQ3RCLFlBQVk7TUFDWixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLDJCQUEyQjtNQUMzQixzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLGFBQWE7TUFDYixlQUFlLEVBQUE7RUF2Qi9CO1FBMkJ3QixVQUFVLEVBQUE7RUEzQmxDO1VBOEI0QixxQkFBcUI7VUFDckIsaUJBQWlCO1VBQ2pCLFdBeEhoQjtVQXlIZ0IsOEJBQThCO1VBQzlCLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIsa0JBQWtCLEVBQUE7RUFwQzlDO1FBeUN3QixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsV0FySVosRUFBQTtFQXdGWjtRQWlEd0IsbUJBeElWLEVBQUE7RUF1RmQ7UUFxRHdCLG1CQUFtQixFQUFBO0VBckQzQztRQXlEd0IsbUJBL0lULEVBQUE7RUFzRmY7UUE2RHdCLG1CQUFtQixFQUFBO0VBN0QzQztRQWtFb0IsY0FBYztRQUNkLFdBM0pSO1FBNEpRLFdBQVc7UUFDWCxlQUFlLEVBQUE7RUFyRW5DO1VBd0V3QixrQ0FBa0M7VUFDbEMsY0FBYyxFQUFBO0VBekV0QztRQThFb0IsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixvQkFBYTtRQUFiLGFBQWE7UUFDYix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQixFQUFBO0VBeEZ2QztNQTZGZ0Isa0JBQWtCO01BQ2xCLG9CQUFhO01BQWIsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixlQUFlO01BQ2Ysd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2Qix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixhQUFhO01BQ2IsMkJBQTJCO01BQzNCLGtCQUFrQjtNQUNsQixlQUFlLEVBQUE7RUF2Ry9CO1FBMEdvQixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1Q0FBb0M7UUFDcEMseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixnQkFBZ0IsRUFBQTtFQW5IcEM7VUFzSHdCLGtCQUFrQjtVQUNsQixnQkFBZ0I7VUFDaEIsaUJBQWlCLEVBQUE7RUF4SHpDO1VBNEh3QixXQUFXO1VBQ1gsV0FBVztVQUNYLFlBQVk7VUFDWixjQUFjO1VBQ2QsU0FBUztVQUNULGtCQUFrQjtVQUNsQixvREFBb0U7VUFDcEUscUJBQXFCO1VBQ3JCLGlCQUFpQixFQUFBO0VBcEl6QztNQTJJb0IsbUJBQW1CLEVBQUE7RUFJM0I7TUEvSVo7UUFpSm9CLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDaEI7RUFHTDtNQXRKWjtRQXdKb0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjtFQUdMO01BN0paO1FBK0pvQixZQUFZO1FBQ1osYUFBYSxFQUFBLEVBQ2hCO0VBR0w7TUFwS1o7UUFzS29CLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDaEI7RUFHTDtNQTNLWjtRQTZLb0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjtFQS9LakI7TUFvTFksaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBO0VBckw5QjtRQXdMZ0IsWUFBWTtRQUNaLFlBQVk7UUFDWix5QkFqUkY7UUFrUkUsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLHNCQTFSSjtRQTJSSSxjQTFSRjtRQTJSRSw0QkFBb0I7UUFBcEIsb0JBQW9CLEVBQUE7RUFwTXBDO1VBdU1vQix5QkE5Uk47VUErUk0sV0FoU1I7VUFpU1EsK0NBQTRDLEVBQUE7RUFPaEU7RUFDSTtJQUVRLFVBQVUsRUFBQSxFQUNkO0VBSVI7RUFDSTtJQUdZLG9CQUFvQjtJQUNwQixXQUFXLEVBQUE7SUFKdkI7TUFNZSxZQUFZLEVBQUE7TUFOM0I7UUFRb0IsV0FBVyxFQUFBO0VBUi9CO0lBY1csV0FBVyxFQUFBLEVBQ2Q7RUFLWjtFQUNJO0lBSWdCLFdBQVcsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy1wYWdlL29ubGluZS1jb3Vyc2VzL29ubGluZS1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb2xvcnM6XHJcbiRiZzogIzI5MjczMTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3dlbGNvbWUtc2Nob29sLWJnLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0cmF0aW9uIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcblxyXG4gICAuc2VhcmNoLWhlcm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiA0NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAuc3R5bGVkLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zZWxlY3QtYXJyb3cucG5nJykgbm8tcmVwZWF0IDk4JSAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDsgLyogSWYgeW91IGFkZCB0b28gbXVjaCBwYWRkaW5nIGhlcmUsIHRoZSBvcHRpb25zIHdvbid0IHNob3cgaW4gSUUgKi9cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYzFhMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFjMWEyMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI2NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvdXJzZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuICAgIC5jb3Vyc2VzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQ1cHg7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNy41cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cy5QUk8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMuUGx1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjNDZjZDg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLkZyZWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLk9wdGltYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWM0YWY3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgLm5hbWVDb3Vyc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I5YjhiYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRvdGFsVGltZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I5YjhiYztcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvdXJzZS1pbWFnZS1ob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI3MzE3YTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAuY291bnRPZkxlc3NvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLDAsMCwwLjEzKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jb3VudE9mTGVzc29ucy1mb3JtLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2UtaG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAgICAgICAgICAgICAuY291cnNlLWltYWdlLCAuY291cnNlLWltYWdlLWhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2UsIC5jb3Vyc2UtaW1hZ2UtaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgICAgICAgICAgICAgLmNvdXJzZS1pbWFnZSwgLmNvdXJzZS1pbWFnZS1ob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAuY291cnNlLWltYWdlLCAuY291cnNlLWltYWdlLWhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjk1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc0cHgpIHtcclxuICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2UsIC5jb3Vyc2UtaW1hZ2UtaG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2hvdy1zZWN0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5zaG93LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTcycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gICAgLmZpbHRyYXRpb24ge1xyXG4gICAgICAgLnNlYXJjaC1oZXJvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5maWx0cmF0aW9uIHtcclxuICAgICAgIC5zZWFyY2gtaGVybyB7XHJcbiAgICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAuc3R5bGVkLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5maWx0cmF0aW9uIHtcclxuICAgICAgICAuc2VhcmNoLWhlcm8ge1xyXG4gICAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgIC5zdHlsZWQtc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = ".teachers {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 75px;\n  background: #292731; }\n  .teachers .teachers-container {\n    width: 1170px;\n    text-align: center; }\n  .teachers .teachers-container .header-title {\n      padding-bottom: 65px;\n      color: white; }\n  .teachers .teachers-container .header-title img {\n        padding-bottom: 15px; }\n  .teachers .teachers-container .teachers-section {\n      padding-bottom: 100px; }\n  .teachers .teachers-container .teachers-section .teachers-section_block {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        flex-wrap: wrap; }\n  @media screen and (max-width: 1200px) {\n    .teachers .teachers-container {\n      width: 80%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy1wYWdlL3RlYWNoZXJzL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxjb3Vyc2VzLXBhZ2VcXHRlYWNoZXJzXFx0ZWFjaGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQVZRLEVBQUE7RUFNWjtJQU9RLGFBQWE7SUFDYixrQkFBa0IsRUFBQTtFQVIxQjtNQVdZLG9CQUFvQjtNQUNwQixZQUFZLEVBQUE7RUFaeEI7UUFlZ0Isb0JBQW9CLEVBQUE7RUFmcEM7TUFvQlkscUJBQXFCLEVBQUE7RUFwQmpDO1FBdUJnQixvQkFBYTtRQUFiLGFBQWE7UUFDYix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2QixlQUFlLEVBQUE7RUFLM0I7SUE5Qko7TUFnQ1ksVUFBVSxFQUFBLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb3Vyc2VzLXBhZ2UvdGVhY2hlcnMvdGVhY2hlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy9jb2xvcnM6XHJcbiRiZzogIzI5MjczMTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuXHJcbi50ZWFjaGVycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNzVweDtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuXHJcbiAgICAudGVhY2hlcnMtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTE3MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2NXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFjaGVycy1zZWN0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgLnRlYWNoZXJzLXNlY3Rpb25fYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAgICAgLnRlYWNoZXJzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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

module.exports = ".about-speed {\n  background: url('about_speed_painting_mask.png') no-repeat center center fixed;\n  background-size: cover; }\n  .about-speed .header-title {\n    text-align: center;\n    padding-top: 120px; }\n  .about-speed .header-title .header-title_main {\n      font-size: 42px;\n      line-height: 60px;\n      font-family: \"Work Sans\";\n      color: #fff;\n      font-weight: 600; }\n  .about-speed .header-title .header-title_secondary {\n      font-size: 16px;\n      line-height: 30px;\n      font-family: \"Open Sans\";\n      color: #fff;\n      padding: 45px 0; }\n  .about-speed .header-title img {\n      padding: 30px 0 0; }\n  .about-speed .social-networks {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    flex-wrap: wrap; }\n  .about-speed .social-networks .social-networks_block {\n      text-align: center;\n      color: #fff;\n      width: 50%;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center; }\n  .about-speed .social-networks .social-networks_block .social-networks_row {\n        display: -webkit-box;\n        display: flex; }\n  .about-speed .social-networks .social-networks_block .social-networks_row div {\n          width: 150px;\n          padding: 20px 0; }\n  .about-speed .social-networks .social-networks_block .social-networks_row div img {\n            margin-bottom: 10px; }\n  .about-speed .personal-portfolio, .about-speed .drawing-process {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    color: #fff; }\n  .about-speed .personal-portfolio {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding-top: 165px; }\n  .about-speed .personal-portfolio .personal-portfolio_block {\n      display: -webkit-box;\n      display: flex;\n      width: 1200px;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center; }\n  .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_image {\n        display: -webkit-box;\n        display: flex; }\n  .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_text {\n        width: 450px; }\n  .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_text span:first-of-type {\n          font-size: 1.2rem;\n          font-weight: bold; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ1 {\n        width: 50px;\n        height: 50px;\n        background: url('personal-portfolio_btn.png') no-repeat;\n        position: relative;\n        top: -175px;\n        left: 505px; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ1:after {\n          content: \"\";\n          position: absolute;\n          bottom: 35px;\n          left: 26px;\n          height: 177px;\n          border-left: 1px solid #2196f3; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ2 {\n        width: 15px;\n        height: 15px;\n        background: #2196f3;\n        border-radius: 50%;\n        position: relative;\n        right: 483px;\n        top: -105px; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ2:after {\n          content: \"\";\n          position: absolute;\n          bottom: 10px;\n          left: 6px;\n          height: 254px;\n          border-left: 1px solid #2196f3; }\n  .about-speed .personal-portfolio .personal-portfolio_block .circ2:before {\n          content: \"\";\n          position: absolute;\n          bottom: 34px;\n          left: 8px;\n          height: 230px;\n          border-top: 1px solid #2196f3;\n          width: 860px; }\n  .about-speed .drawing-process {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .about-speed .drawing-process .drawing-process_block {\n      display: -webkit-box;\n      display: flex;\n      width: 1200px;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center;\n      padding: 75px 0; }\n  .about-speed .drawing-process .drawing-process_block .drawing-process_image {\n        position: relative;\n        padding-right: 29px; }\n  .about-speed .drawing-process .drawing-process_block .drawing-process_image img {\n          height: 385px; }\n  .about-speed .drawing-process .drawing-process_block .drawing-process_text span:first-of-type {\n        font-size: 1.2rem;\n        font-weight: bold; }\n  .about-speed .drawing-process .drawing-process_block .circ1 {\n        width: 311px;\n        height: 70px;\n        background: url('drawing-process_btn.png') no-repeat;\n        position: relative;\n        top: -10px;\n        right: 330px; }\n  .about-speed .drawing-process .drawing-process_block .circ1:after {\n          content: \"\";\n          position: absolute;\n          bottom: 0;\n          left: 65px;\n          height: 30px;\n          border-top: 1px solid #2196f3;\n          width: 365px; }\n  .about-speed .drawing-process .drawing-process_block .circ2 {\n        width: 40px;\n        height: 15px;\n        background: #2196f3;\n        border-radius: 50%;\n        position: relative;\n        left: -25px;\n        top: -5px; }\n  @media screen and (max-width: 1280px) {\n    .about-speed .personal-portfolio {\n      padding-top: 30px; }\n      .about-speed .personal-portfolio .personal-portfolio_block {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: reverse;\n                flex-direction: column-reverse;\n        -webkit-box-pack: center;\n                justify-content: center;\n        width: 100%; }\n        .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_image {\n          display: -webkit-box;\n          display: flex;\n          width: 100%;\n          -webkit-box-pack: center;\n                  justify-content: center; }\n        .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_text {\n          text-align: center; }\n        .about-speed .personal-portfolio .personal-portfolio_block .circ2, .about-speed .personal-portfolio .personal-portfolio_block .circ1 {\n          display: none; }\n    .about-speed .drawing-process {\n      padding-top: 30px; }\n      .about-speed .drawing-process .drawing-process_block {\n        display: -webkit-box;\n        display: flex;\n        flex-wrap: wrap;\n        -webkit-box-pack: center;\n                justify-content: center;\n        width: 100%; }\n        .about-speed .drawing-process .drawing-process_block .drawing-process_image {\n          display: -webkit-box;\n          display: flex;\n          width: 100%;\n          -webkit-box-pack: center;\n                  justify-content: center; }\n        .about-speed .drawing-process .drawing-process_block .drawing-process_text {\n          width: 450px;\n          text-align: center; }\n        .about-speed .drawing-process .drawing-process_block .circ2, .about-speed .drawing-process .drawing-process_block .circ1 {\n          display: none; } }\n  @media screen and (max-width: 1024px) {\n    .about-speed .header-title .header-title_secondary {\n      font-size: 16px; }\n    .about-speed .header-title .header-title_main {\n      font-size: 50px; }\n    .about-speed .social-networks .social-networks_block {\n      width: 490px; }\n      .about-speed .social-networks .social-networks_block .social-networks_row {\n        flex-wrap: wrap;\n        -webkit-box-pack: center;\n                justify-content: center; } }\n  @media screen and (max-width: 800px) {\n    .about-speed .drawing-process .drawing-process_block .drawing-process_image {\n      padding: 0%; }\n      .about-speed .drawing-process .drawing-process_block .drawing-process_image img {\n        height: 180px; }\n    .about-speed .drawing-process .drawing-process_block .drawing-process_text {\n      width: 100%; }\n    .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_image img {\n      height: 300px; }\n    .about-speed .personal-portfolio .personal-portfolio_block .personal-portfolio_text {\n      width: 100%; } }\n  @media screen and (max-width: 425px) {\n    .about-speed .social-networks .social-networks_block .social-networks_row div {\n      width: 120px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL2Fib3V0LXNwZWVkLXBhaW50aW5nL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXGFib3V0LXNwZWVkLXBhaW50aW5nXFxhYm91dC1zcGVlZC1wYWludGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLDhFQUE0RjtFQUM1RixzQkFBc0IsRUFBQTtFQUYxQjtJQUtRLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQU4xQjtNQVNZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsd0JBQXdCO01BQ3hCLFdBZkE7TUFnQkEsZ0JBQWdCLEVBQUE7RUFiNUI7TUFpQlksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsV0F2QkE7TUF3QkEsZUFBZSxFQUFBO0VBckIzQjtNQXlCWSxpQkFBaUIsRUFBQTtFQXpCN0I7SUE4QlEsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixlQUFlLEVBQUE7RUFoQ3ZCO01BbUNZLGtCQUFrQjtNQUNsQixXQXZDQTtNQXdDQSxVQUFVO01BQ1Ysb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZTtNQUNmLHdCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtFQXhDbkM7UUEyQ2dCLG9CQUFhO1FBQWIsYUFBYSxFQUFBO0VBM0M3QjtVQThDb0IsWUFBWTtVQUNaLGVBQWUsRUFBQTtFQS9DbkM7WUFrRHdCLG1CQUFtQixFQUFBO0VBbEQzQztJQTBEUSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsV0FoRUksRUFBQTtFQUdaO0lBaUVRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsa0JBQWtCLEVBQUE7RUFuRTFCO01Bc0VZLG9CQUFhO01BQWIsYUFBYTtNQUNiLGFBQWE7TUFDYix5QkFBOEI7Y0FBOUIsOEJBQThCO01BQzlCLHlCQUFtQjtjQUFuQixtQkFBbUIsRUFBQTtFQXpFL0I7UUE2RWdCLG9CQUFhO1FBQWIsYUFBYSxFQUFBO0VBN0U3QjtRQWlGZ0IsWUFBWSxFQUFBO0VBakY1QjtVQW9Gb0IsaUJBQWlCO1VBQ2pCLGlCQUFpQixFQUFBO0VBckZyQztRQTBGZ0IsV0FBVztRQUNYLFlBQVk7UUFDWix1REFBdUU7UUFDdkUsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXLEVBQUE7RUEvRjNCO1VBa0dvQixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLFlBQVk7VUFDWixVQUFVO1VBQ1YsYUFBYTtVQUNiLDhCQXpHTixFQUFBO0VBRWQ7UUE2R2dCLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBakhGO1FBa0hFLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVcsRUFBQTtFQW5IM0I7VUFzSG9CLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFNBQVM7VUFDVCxhQUFhO1VBQ2IsOEJBN0hOLEVBQUE7RUFFZDtVQStIb0IsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osU0FBUztVQUNULGFBQWE7VUFDYiw2QkF0SU47VUF1SU0sWUFBWSxFQUFBO0VBckloQztJQTRJUSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7RUE3SS9CO01BZ0pZLG9CQUFhO01BQWIsYUFBYTtNQUNiLGFBQWE7TUFDYix5QkFBOEI7Y0FBOUIsOEJBQThCO01BQzlCLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsZUFBZSxFQUFBO0VBcEozQjtRQXdKZ0Isa0JBQWtCO1FBQ2xCLG1CQUFtQixFQUFBO0VBekpuQztVQTRKb0IsYUFBYSxFQUFBO0VBNUpqQztRQW1Lb0IsaUJBQWlCO1FBQ2pCLGlCQUFpQixFQUFBO0VBcEtyQztRQTJLZ0IsWUFBWTtRQUNaLFlBQVk7UUFDWixvREFBa0U7UUFDbEUsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixZQUFZLEVBQUE7RUFoTDVCO1VBbUxvQixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLFNBQVM7VUFDVCxVQUFVO1VBQ1YsWUFBWTtVQUNaLDZCQTFMTjtVQTJMTSxZQUFZLEVBQUE7RUF6TGhDO1FBOExnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQWxNRjtRQW1NRSxrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxTQUFTLEVBQUE7RUFLckI7SUF6TUo7TUEyTVksaUJBQWlCLEVBQUE7TUEzTTdCO1FBOE1nQiw0QkFBOEI7UUFBOUIsOEJBQThCO2dCQUE5Qiw4QkFBOEI7UUFDOUIsd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIsV0FBVyxFQUFBO1FBaE4zQjtVQW1Ob0Isb0JBQWE7VUFBYixhQUFhO1VBQ2IsV0FBVztVQUNYLHdCQUF1QjtrQkFBdkIsdUJBQXVCLEVBQUE7UUFyTjNDO1VBeU5vQixrQkFBa0IsRUFBQTtRQXpOdEM7VUE2Tm9CLGFBQWEsRUFBQTtJQTdOakM7TUFtT1ksaUJBQWlCLEVBQUE7TUFuTzdCO1FBc09nQixvQkFBYTtRQUFiLGFBQWE7UUFDYixlQUFlO1FBQ2Ysd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIsV0FBVyxFQUFBO1FBek8zQjtVQTRPb0Isb0JBQWE7VUFBYixhQUFhO1VBQ2IsV0FBVztVQUNYLHdCQUF1QjtrQkFBdkIsdUJBQXVCLEVBQUE7UUE5TzNDO1VBa1BvQixZQUFZO1VBQ1osa0JBQWtCLEVBQUE7UUFuUHRDO1VBdVBvQixhQUFhLEVBQUEsRUFDaEI7RUFLYjtJQTdQSjtNQWdRZ0IsZUFBZSxFQUFBO0lBaFEvQjtNQW9RZ0IsZUFBZSxFQUFBO0lBcFEvQjtNQTBRZ0IsWUFBWSxFQUFBO01BMVE1QjtRQTZRb0IsZUFBZTtRQUNmLHdCQUF1QjtnQkFBdkIsdUJBQXVCLEVBQUEsRUFDMUI7RUFLYjtJQXBSSjtNQXdSb0IsV0FBVyxFQUFBO01BeFIvQjtRQTJSd0IsYUFBYSxFQUFBO0lBM1JyQztNQWdTb0IsV0FBVyxFQUFBO0lBaFMvQjtNQXlTd0IsYUFBYSxFQUFBO0lBelNyQztNQThTb0IsV0FBVyxFQUFBLEVBQ2Q7RUFLYjtJQXBUSjtNQXlUd0IsWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9tYWluLXBhZ2UvYWJvdXQtc3BlZWQtcGFpbnRpbmcvYWJvdXQtc3BlZWQtcGFpbnRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuXHJcbi5hYm91dC1zcGVlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Fib3V0X3NwZWVkX3BhaW50aW5nX21hc2sucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZV9tYWlue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGl0bGVfc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogNDVweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtbmV0d29ya3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAuc29jaWFsLW5ldHdvcmtzX2Jsb2Nre1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAuc29jaWFsLW5ldHdvcmtzX3Jvd3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucGVyc29uYWwtcG9ydGZvbGlvLCAuZHJhd2luZy1wcm9jZXNzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiR3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAucGVyc29uYWwtcG9ydGZvbGlvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNjVweDtcclxuXHJcbiAgICAgICAgLnBlcnNvbmFsLXBvcnRmb2xpb19ibG9jayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG4gICAgICAgICAgICAucGVyc29uYWwtcG9ydGZvbGlvX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wZXJzb25hbC1wb3J0Zm9saW9fdGV4dHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuOmZpcnN0LW9mLXR5cGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jaXJjMSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3BlcnNvbmFsLXBvcnRmb2xpb19idG4ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTc1cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY2lyYzIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA0ODNweDtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEwNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGJsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODYwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRyYXdpbmctcHJvY2VzcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmRyYXdpbmctcHJvY2Vzc19ibG9ja3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3NXB4IDA7XHJcblxyXG5cclxuICAgICAgICAgICAgLmRyYXdpbmctcHJvY2Vzc19pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzODVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRyYXdpbmctcHJvY2Vzc190ZXh0IHtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuOmZpcnN0LW9mLXR5cGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLmNpcmMxIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMTFweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZHJhd2luZy1wcm9jZXNzX2J0bi5wbmcpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMzMwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNjVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jaXJjMiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgLnBlcnNvbmFsLXBvcnRmb2xpbyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgLnBlcnNvbmFsLXBvcnRmb2xpb19ibG9ja3tcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLnBlcnNvbmFsLXBvcnRmb2xpb19pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVyc29uYWwtcG9ydGZvbGlvX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jaXJjMiwgLmNpcmMxIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZHJhd2luZy1wcm9jZXNzIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLmRyYXdpbmctcHJvY2Vzc19ibG9ja3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuZHJhd2luZy1wcm9jZXNzX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcmF3aW5nLXByb2Nlc3NfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2lyYzIsIC5jaXJjMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgLmhlYWRlci10aXRsZXtcclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9zZWNvbmRhcnl7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfbWFpbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWwtbmV0d29ya3N7XHJcbiAgICAgICAgICAgIC5zb2NpYWwtbmV0d29ya3NfYmxvY2t7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDkwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1uZXR3b3Jrc19yb3d7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgLmRyYXdpbmctcHJvY2VzcyB7XHJcbiAgICAgICAgICAgIC5kcmF3aW5nLXByb2Nlc3NfYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgLmRyYXdpbmctcHJvY2Vzc19pbWFnZSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJhd2luZy1wcm9jZXNzX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wZXJzb25hbC1wb3J0Zm9saW8ge1xyXG4gICAgICAgICAgICAucGVyc29uYWwtcG9ydGZvbGlvX2Jsb2Nre1xyXG4gICAgICAgICAgICAgICAgLnBlcnNvbmFsLXBvcnRmb2xpb19pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnBlcnNvbmFsLXBvcnRmb2xpb190ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgICAgIC5zb2NpYWwtbmV0d29ya3Mge1xyXG4gICAgICAgICAgICAuc29jaWFsLW5ldHdvcmtzX2Jsb2NrIHtcclxuICAgICAgICAgICAgICAgIC5zb2NpYWwtbmV0d29ya3Nfcm93IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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

module.exports = ".log-in {\n  display: -webkit-box;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  z-index: 2;\n  background: #000000a3; }\n  .log-in .log-in_section {\n    width: 416px;\n    height: 445px;\n    border-radius: 6px;\n    background-color: #ffffff;\n    padding: 15px 45px 35px; }\n  .log-in .log-in_section .log-in_close {\n      position: relative;\n      float: right;\n      cursor: pointer;\n      right: -20px; }\n  .log-in .log-in_section form {\n      padding-top: 25px; }\n  .log-in .log-in_section form .log-in_data {\n        text-align: center; }\n  .log-in .log-in_section form .log-in_data .log-in_title {\n          font-size: 30px;\n          line-height: 36px;\n          color: #232128;\n          font-family: \"Work Sans\";\n          font-weight: 600; }\n  .log-in .log-in_section form .log-in_data .log-in_inputs {\n          padding-top: 20px; }\n  .log-in .log-in_section form .log-in_data .log-in_inputs input {\n            width: 320px;\n            height: 48px;\n            border-radius: 24px;\n            background-color: #ffeded;\n            border: 1px solid #dcdcdd;\n            padding: 15px;\n            margin: 10px 0 0;\n            outline: none;\n            cursor: text; }\n  .log-in .log-in_section form .log-in_data .log-in_inputs a {\n            display: block;\n            padding-top: 5px;\n            padding-bottom: 25px;\n            text-align: left;\n            font-size: 14px;\n            line-height: 24px;\n            color: #6a696f;\n            font-family: \"Open Sans\";\n            font-weight: 400;\n            text-decoration: underline; }\n  .log-in .log-in_section form .log-in_data .log-in_inputs a:hover {\n              text-decoration: none; }\n  .log-in .log-in_section form .log-in_button {\n        width: 320px;\n        height: 48px;\n        border: none;\n        border-radius: 24px;\n        background-color: #7fc400;\n        outline: none;\n        font-size: 16px;\n        color: #ffffff;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center;\n        text-decoration: none; }\n  .log-in .log-in_section form .log-in_button:hover {\n          box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5); }\n  .log-in .log-in_section form .log-in_button.disabled {\n        padding: 5px 10px;\n        border: 1px solid #999999;\n        background-color: #cccccc;\n        color: #666666;\n        box-shadow: none; }\n  .log-in .log-in_section .log-in_ask {\n      text-align: center;\n      padding-top: 35px; }\n  .log-in .log-in_section .log-in_ask span {\n        font-size: 16px;\n        line-height: 18px;\n        color: #232128;\n        font-family: \"Open Sans\";\n        font-weight: 400; }\n  @media screen and (max-width: 425px) {\n    .log-in .log-in_section {\n      width: 315px; }\n      .log-in .log-in_section form .log-in_data .log-in_inputs input {\n        width: 220px; }\n      .log-in .log-in_section form .log-in_button {\n        width: 220px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL2xvZy1pbi9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxcbWFpbi1wYWdlXFxsb2ctaW5cXGxvZy1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YscUJBaEJVLEVBQUE7RUFRZDtJQVdRLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQXJCTztJQXNCUCx1QkFBdUIsRUFBQTtFQWYvQjtNQWtCWSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLGVBQWU7TUFDZixZQUFZLEVBQUE7RUFyQnhCO01BeUJZLGlCQUFpQixFQUFBO0VBekI3QjtRQTRCZ0Isa0JBQWtCLEVBQUE7RUE1QmxDO1VBK0JvQixlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGNBdENEO1VBdUNDLHdCQUF3QjtVQUN4QixnQkFBZ0IsRUFBQTtFQW5DcEM7VUF1Q29CLGlCQUFpQixFQUFBO0VBdkNyQztZQTBDd0IsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBakROO1lBa0RNLHlCQWpERjtZQWtERSxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixZQUFZLEVBQUE7RUFsRHBDO1lBc0R3QixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtZQUNwQixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixjQTlETDtZQStESyx3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLDBCQUEwQixFQUFBO0VBL0RsRDtjQWtFNEIscUJBQXFCLEVBQUE7RUFsRWpEO1FBeUVnQixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIseUJBbkZGO1FBb0ZFLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0F2RkQ7UUF3RkMsd0JBQXdCO1FBQ3hCLGdCQUFnQjtRQUNoQixvQkFBYTtRQUFiLGFBQWE7UUFDYix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixxQkFBcUIsRUFBQTtFQXRGckM7VUF5Rm9CLDhDQUE4QyxFQUFBO0VBekZsRTtRQThGZ0IsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGdCQUFnQixFQUFBO0VBbEdoQztNQXVHWSxrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUE7RUF4RzdCO1FBMkdnQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBbEhHO1FBbUhILHdCQUF3QjtRQUN4QixnQkFBZ0IsRUFBQTtFQUs1QjtJQXBISjtNQXNIWSxZQUFZLEVBQUE7TUF0SHhCO1FBNEg0QixZQUFZLEVBQUE7TUE1SHhDO1FBa0lvQixZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjMDAwMDAwYTM7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGxpbWU6ICM3ZmM0MDA7XHJcbiRkYXJrLXRleHQ6ICMyMzIxMjg7XHJcbiRsaWdodC1iZzogI2ZmZWRlZDtcclxuJGxpZ2h0LWJvcmRlcjogI2RjZGNkZDtcclxuJGdyZXktbGluazogIzZhNjk2ZjtcclxuXHJcbi5sb2ctaW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYmFja2dyb3VuZDogJGJnO1xyXG5cclxuICAgIC5sb2ctaW5fc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQxNnB4O1xyXG4gICAgICAgIGhlaWdodDogNDQ1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDQ1cHggMzVweDtcclxuXHJcbiAgICAgICAgLmxvZy1pbl9jbG9zZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuXHJcbiAgICAgICAgICAgIC5sb2ctaW5fZGF0YSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLmxvZy1pbl90aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyay10ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxvZy1pbl9pbnB1dHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleS1saW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZy1pbl9idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW1lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sb2ctaW5fYnV0dG9uLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2ctaW5fYXNrIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzVweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmstdGV4dDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgICAgIC5sb2ctaW5fc2VjdGlvbntcclxuICAgICAgICAgICAgd2lkdGg6IDMxNXB4O1xyXG5cclxuICAgICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgICAgIC5sb2ctaW5fZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICAubG9nLWluX2lucHV0c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxvZy1pbl9idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDsgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LogInComponent = /** @class */ (function () {
    function LogInComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
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
        this.router.navigateByUrl('/myProfile');
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = ".main-footer-background {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: #232128;\n  padding-top: 100px;\n  padding-bottom: 100px; }\n  .main-footer-background .main-footer_navigation {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap; }\n  .main-footer-background .main-footer_navigation nav {\n      padding-right: 50px; }\n  .main-footer-background .status {\n    display: inline-block;\n    padding: 0px 6px;\n    border-radius: 4px;\n    color: #7c7b84;\n    background: #383643;\n    font-size: 12px;\n    margin-left: 5px; }\n  .main-footer-background span {\n    color: #747279;\n    line-height: 1.5; }\n  .main-footer-background span.bold {\n    color: #b9b8bc; }\n  .main-footer-background a {\n    color: #747279; }\n  .main-footer-background .icon {\n    width: 20px;\n    height: 20px; }\n  .main-footer-background .fb-icon {\n    background: url('fb-icon.png') no-repeat center; }\n  .main-footer-background .tw-icon {\n    background: url('tw-icon.png') no-repeat center; }\n  .main-footer-background .in-icon {\n    background: url('in-icon.png') no-repeat center; }\n  .main-footer-background .inst-icon {\n    background: url('inst-icon.png') no-repeat center; }\n  .main-footer-background input {\n    width: 200px;\n    height: 35px;\n    padding: 10px;\n    background-color: #383643;\n    border: 1px solid #747279;\n    color: #bbb5cc;\n    outline: none;\n    font-size: 13px; }\n  .main-footer-background input::-webkit-input-placeholder {\n      color: #747279; }\n  .main-footer-background input::-moz-placeholder {\n      color: #747279; }\n  .main-footer-background input::-ms-input-placeholder {\n      color: #747279; }\n  .main-footer-background input::placeholder {\n      color: #747279; }\n  .main-footer-background input[type=submit] {\n    margin-left: 5px;\n    width: 120px;\n    height: 36px;\n    border-radius: 1px;\n    background-color: #403e47;\n    border: none;\n    color: #b9b8bc;\n    font-weight: 900;\n    font-size: 12px;\n    font-family: \"Lato\"; }\n  .main-footer-background .space-between {\n    width: 200px;\n    padding: 10px 0; }\n  .under-footer {\n  background: #232128;\n  color: #747279; }\n  .under-footer div {\n    border-top: 1px solid #737179;\n    padding: 25px 0; }\n  @media screen and (max-width: 703px) {\n  .main-footer-background nav {\n    width: 100%; }\n    .main-footer-background nav div.pb10 {\n      padding-top: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tZm9vdGVyL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXG1haW4tZm9vdGVyXFxtYWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLG1CQWJRO0VBY1Isa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0VBTnpCO0lBU1ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZSxFQUFBO0VBVjNCO01BYWdCLG1CQUFtQixFQUFBO0VBYm5DO0lBa0JZLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBN0JJO0lBOEJKLG1CQTdCSztJQThCTCxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUF4QjVCO0lBNEJZLGNBbENFO0lBbUNGLGdCQUFnQixFQUFBO0VBN0I1QjtJQWlDWSxjQXRDUSxFQUFBO0VBS3BCO0lBcUNZLGNBM0NFLEVBQUE7RUFNZDtJQXlDWSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBMUN4QjtJQThDWSwrQ0FBK0QsRUFBQTtFQTlDM0U7SUFrRFksK0NBQStELEVBQUE7RUFsRDNFO0lBc0RZLCtDQUErRCxFQUFBO0VBdEQzRTtJQTBEWSxpREFBaUUsRUFBQTtFQTFEN0U7SUE4RFksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBeEVLO0lBeUVMLHlCQXhFRTtJQXlFRixjQXZFUztJQXdFVCxhQUFhO0lBQ2IsZUFBZSxFQUFBO0VBckUzQjtNQXdFZ0IsY0E5RUYsRUFBQTtFQU1kO01Bd0VnQixjQTlFRixFQUFBO0VBTWQ7TUF3RWdCLGNBOUVGLEVBQUE7RUFNZDtNQXdFZ0IsY0E5RUYsRUFBQTtFQU1kO0lBNkVZLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFwRk07SUFxRk4sWUFBWTtJQUNaLGNBeEZRO0lBeUZSLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUF0Ri9CO0lBMEZZLFlBQVk7SUFDWixlQUFlLEVBQUE7RUFLM0I7RUFDSSxtQkExR1E7RUEyR1IsY0F4R1UsRUFBQTtFQXNHZDtJQUtRLDZCQXZHUTtJQXdHUixlQUFlLEVBQUE7RUFJdkI7RUFDSTtJQUVRLFdBQVcsRUFBQTtJQUZuQjtNQUtZLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4tZm9vdGVyL21haW4tZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjMjMyMTI4O1xyXG4kc3RhdHVzOiAjN2M3Yjg0O1xyXG4kZGFyay1iZzogIzM4MzY0MztcclxuJGdyZXk6ICM3NDcyNzk7XHJcbiRsaWdodC1ncmV5OiAjYjliOGJjO1xyXG4kaW5wdXQtY29sb3I6ICNiYmI1Y2M7XHJcbiRpbnB1dC1iZzogIzQwM2U0NztcclxuJGJvcmRlcjogIzczNzE3OTtcclxuXHJcbi5tYWluLWZvb3Rlci1iYWNrZ3JvdW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAgICAgIC5tYWluLWZvb3Rlcl9uYXZpZ2F0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgY29sb3I6ICRzdGF0dXM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRkYXJrLWJnO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3Bhbi5ib2xkIHtcclxuICAgICAgICAgICAgY29sb3I6ICRsaWdodC1ncmV5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mYi1pY29uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZiLWljb24ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHctaWNvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy90dy1pY29uLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluLWljb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW4taWNvbi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnN0LWljb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW5zdC1pY29uLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmc7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmV5O1xyXG4gICAgICAgICAgICBjb2xvcjogJGlucHV0LWNvbG9yO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iZztcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNwYWNlLWJldHdlZW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLnVuZGVyLWZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgICBjb2xvcjogJGdyZXk7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwM3B4KSB7XHJcbiAgICAubWFpbi1mb290ZXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBkaXYucGIxMCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = ".activatedHeader {\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 70px; }\n\n.main-header-background {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: url('mask.png') no-repeat;\n  background-size: cover;\n  height: 835px;\n  /* Top and Bottom borders go out */ }\n\n.main-header-background .header {\n    width: 100%;\n    -webkit-box-align: center;\n            align-items: center;\n    height: 90px; }\n\n.main-header-background .header .menu-mobile {\n      width: 280px;\n      text-align: right;\n      right: 0px;\n      position: absolute;\n      top: 0px;\n      background: #2196f3;\n      padding-top: 115px;\n      padding-bottom: 80px; }\n\n.main-header-background .header .menu-mobile .nav-mobile a {\n        width: 100%;\n        padding: 20px 30px 20px 0px;\n        display: block;\n        font: 14px 'Work Sans', sans-serif;\n        line-height: 18px;\n        color: #fff;\n        font-weight: 600;\n        text-decoration: none;\n        position: relative;\n        z-index: 0;\n        cursor: pointer;\n        background: transparent;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n\n.main-header-background .header .menu-mobile .nav-mobile a:hover {\n          background: #001b5229; }\n\n.main-header-background .header .menu-mobile .nav-mobile a li {\n          list-style: none; }\n\n.main-header-background .header .menu-mobile .bordersOut a:before, .main-header-background .header .menu-mobile .bordersOut a:after {\n        position: absolute;\n        left: 0px;\n        width: 100%;\n        height: 2px;\n        background: #fff;\n        content: \"\";\n        opacity: 0;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n\n.main-header-background .header .menu-mobile .bordersOut a:before {\n        top: 0px;\n        -webkit-transform: translateY(10px);\n                transform: translateY(10px); }\n\n.main-header-background .header .menu-mobile .bordersOut a:after {\n        bottom: 0px;\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px); }\n\n.main-header-background .header .menu-mobile .bordersOut a:hover:before, .main-header-background .header .menu-mobile .bordersOut a:hover:after {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n\n.main-header-background .navigation a {\n    display: inline-block;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    text-decoration: none;\n    margin: 0px 10px;\n    padding: 10px 10px;\n    position: relative;\n    z-index: 0;\n    cursor: pointer; }\n\n.main-header-background .navigation a li {\n      list-style: none; }\n\n.main-header-background .topBotomBordersOut a:before, .main-header-background .topBotomBordersOut a:after {\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 2px;\n    background: #fff;\n    content: \"\";\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n\n.main-header-background .topBotomBordersOut a:before {\n    top: 0px;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n\n.main-header-background .topBotomBordersOut a:after {\n    bottom: 0px;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n\n.main-header-background .topBotomBordersOut a:hover:before, .main-header-background .topBotomBordersOut a:hover:after {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n\n.main-header-background .navigation-pro {\n    text-decoration: none;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    margin: 0px;\n    padding: 10px 10px;\n    border: 2px solid #2196f3;\n    border-radius: 25px; }\n\n.main-header-background .navigation-pro:hover {\n      background: #2196f3; }\n\n.main-header-background .log-in {\n    text-decoration: none;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    padding: 0px 10px;\n    background: no-repeat;\n    border: none;\n    outline: none;\n    cursor: pointer; }\n\n.main-header-background .log-in::before {\n      content: \"\";\n      display: block;\n      background: url('login.png') no-repeat;\n      width: 20px;\n      height: 20px;\n      float: left;\n      margin: 0 6px 0 0; }\n\n.main-header-background .search-form {\n    display: -webkit-box;\n    display: flex;\n    width: auto;\n    height: 49px; }\n\n.main-header-background .search-form:focus-within input[type=\"text\"] {\n      width: 115px;\n      border-bottom: 1px solid #fff;\n      padding: 0 15px 0 10px; }\n\n.main-header-background .search-form input[type=\"text\"] {\n      height: 40px;\n      position: relative;\n      font: 14px 'Work Sans', sans-serif;\n      border: none;\n      outline: none;\n      color: #fff;\n      width: 0px;\n      left: 5px;\n      background: none;\n      -webkit-transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n      transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n      cursor: text; }\n\n.main-header-background .search-form input[type=\"text\"]::-webkit-input-placeholder {\n        color: #ffffff6e; }\n\n.main-header-background .search-form input[type=\"text\"]::-moz-placeholder {\n        color: #ffffff6e; }\n\n.main-header-background .search-form input[type=\"text\"]::-ms-input-placeholder {\n        color: #ffffff6e; }\n\n.main-header-background .search-form input[type=\"text\"]::placeholder {\n        color: #ffffff6e; }\n\n.main-header-background .search-form input[type=\"submit\"] {\n      height: 50px;\n      width: 50px;\n      background: url('icon_search.png') center center no-repeat;\n      border: none;\n      position: relative;\n      cursor: pointer;\n      outline: none; }\n\n.main-header-background .menu-small {\n    width: 60px;\n    height: 43px;\n    cursor: pointer; }\n\n.main-header-background .menu-small .burger span, .main-header-background .menu-small .burger span:before, .main-header-background .menu-small .burger span:after {\n      display: block;\n      width: 25px;\n      height: 3px;\n      background: #fff;\n      -webkit-transition: all 0.5s;\n      transition: all 0.5s;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n.main-header-background .menu-small .burger span {\n      position: relative;\n      margin: 20px 30px;\n      padding: 0%; }\n\n.main-header-background .menu-small .burger span:before, .main-header-background .menu-small .burger span:after {\n      position: absolute;\n      content: \"\"; }\n\n.main-header-background .menu-small .burger span:before {\n      top: -10px;\n      right: -1px; }\n\n.main-header-background .menu-small .burger span:after {\n      top: 9px;\n      right: -1px; }\n\n.main-header-background .menu-small .burger .btn.selected, .main-header-background .menu-small .burger .btn.selected:after, .main-header-background .menu-small .burger .btn.selected:before {\n      width: 8px;\n      height: 8px;\n      border-radius: 30px; }\n\n.main-header-background .menu-small .burger .btn.selected {\n      opacity: 1;\n      z-index: 2; }\n\n.main-header-background .menu-small .burger .btn.selected:before {\n        top: -1px;\n        -webkit-transform: translateX(15px) rotate(0deg);\n                transform: translateX(15px) rotate(0deg); }\n\n.main-header-background .menu-small .burger .btn.selected:after {\n        top: -1px;\n        -webkit-transform: translateX(30px) rotate(0deg);\n                transform: translateX(30px) rotate(0deg); }\n\n.main-header-background .header-title {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n    align-content: flex-start;\n    text-align: center; }\n\n.main-header-background .header-title .header-title_main {\n      font-size: 50px;\n      font-family: \"Work Sans\";\n      color: #fff;\n      font-weight: 600;\n      display: block;\n      width: 100%; }\n\n.main-header-background .header-title .header-title_secondary {\n      width: 65%;\n      font-size: 18px;\n      line-height: 30px;\n      font-family: \"Open Sans\";\n      color: #fff;\n      padding: 35px 0; }\n\n.main-header-background .header-title .pro, .main-header-background .header-title .free {\n      width: 172px;\n      height: 48px;\n      border: none;\n      border-radius: 24px;\n      font-size: 16px;\n      line-height: 18px;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      margin: 0 10px;\n      outline: none; }\n\n.main-header-background .header-title .pro:hover, .main-header-background .header-title .free:hover {\n        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n\n.main-header-background .header-title .pro {\n      background-color: #fff;\n      color: #041421; }\n\n.main-header-background .header-title .free {\n      background-color: #7fc400;\n      color: #fff; }\n\n.main-header-background .scroll {\n    padding-bottom: 40px;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: end;\n            align-items: flex-end; }\n\n.main-header-background .scroll .scroll_element {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      font: 14px 'Open Sans', sans-serif;\n      color: #fff; }\n\n.main-header-background .scroll .scroll_element::before {\n        content: \"\";\n        display: inline-block;\n        background: url('icon_scroll.png') no-repeat;\n        width: 18px;\n        height: 31px;\n        margin-right: 15px; }\n\n@media screen and (max-width: 1440px) {\n  .menu-large {\n    display: none; }\n  .nav-right {\n    width: 70%; } }\n\n@media screen and (min-width: 1441px) {\n  .menu-small {\n    display: none; } }\n\n@media screen and (max-width: 1024px) {\n  .main-header-background .header-title .header-title_main {\n    font-size: 44px; }\n  .main-header-background .header-title .header-title_secondary {\n    font-size: 16px;\n    padding: 30px 0; } }\n\n@media screen and (min-width: 801px) {\n  .main-header-background .header .logo-large {\n    display: inline; }\n  .main-header-background .header .logo-small {\n    display: none; } }\n\n@media screen and (max-width: 800px) {\n  .main-header-background .header-title .header-title_main {\n    font-size: 36px; }\n  .main-header-background .header-title .header-title_secondary {\n    font-size: 14px;\n    padding: 15px 0 30px; }\n  .main-header-background .header .logo-large {\n    display: none; }\n  .main-header-background .header .logo-small {\n    display: inline; }\n  .main-header-background .header .nav-right .search-form {\n    display: none; }\n  .main-header-background .header .nav-right .navigation-pro {\n    display: none; } }\n\n@media screen and (max-width: 463px) {\n  .main-header-background .header-title .free {\n    margin-top: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4taGVhZGVyL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXG1haW4taGVhZGVyXFxtYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIscUNBQXFEO0VBQ3JELHNCQUFzQjtFQUN0QixhQUFhO0VBNkZULGtDQUFBLEVBQW1DOztBQW5HM0M7SUFTWSxXQUFXO0lBQ1gseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7O0FBWHhCO01BZWdCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsbUJBN0JGO01BOEJFLGtCQUFrQjtNQUNsQixvQkFBb0IsRUFBQTs7QUF0QnBDO1FBMEJ3QixXQUFXO1FBQ1gsMkJBQTJCO1FBQzNCLGNBQWM7UUFDZCxrQ0FBa0M7UUFDbEMsaUJBQWlCO1FBQ2pCLFdBekNaO1FBMENZLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLDRCQUFvQjtRQUFwQixvQkFBb0IsRUFBQTs7QUF0QzVDO1VBeUM0QixxQkFBcUIsRUFBQTs7QUF6Q2pEO1VBNkM0QixnQkFBZ0IsRUFBQTs7QUE3QzVDO1FBbURvQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsZ0JBakVSO1FBa0VRLFdBQVc7UUFDWCxVQUFVO1FBQ1YsNEJBQW9CO1FBQXBCLG9CQUFvQixFQUFBOztBQTFEeEM7UUE4RG9CLFFBQVE7UUFDUixtQ0FBMkI7Z0JBQTNCLDJCQUEyQixFQUFBOztBQS9EL0M7UUFtRW9CLFdBQVc7UUFDWCxvQ0FBNEI7Z0JBQTVCLDRCQUE0QixFQUFBOztBQXBFaEQ7UUF3RW9CLFVBQVU7UUFDVixrQ0FBMEI7Z0JBQTFCLDBCQUEwQixFQUFBOztBQXpFOUM7SUFpRmdCLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLFdBOUZKO0lBK0ZJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWUsRUFBQTs7QUEzRi9CO01BOEZvQixnQkFBZ0IsRUFBQTs7QUE5RnBDO0lBcUdZLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFuSEE7SUFvSEEsV0FBVztJQUNYLFVBQVU7SUFDViw0QkFBb0I7SUFBcEIsb0JBQW9CLEVBQUE7O0FBNUdoQztJQWdIWSxRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBOztBQWpIdkM7SUFxSFksV0FBVztJQUNYLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTs7QUF0SHhDO0lBMEhZLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7O0FBM0h0QztJQStIWSxxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixXQTVJQTtJQTZJQSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkEvSUU7SUFnSkYsbUJBQW1CLEVBQUE7O0FBdkkvQjtNQTBJZ0IsbUJBbkpGLEVBQUE7O0FBU2Q7SUErSVkscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsV0E1SkE7SUE2SkEsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlLEVBQUE7O0FBeEozQjtNQTJKZ0IsV0FBVztNQUNYLGNBQWM7TUFDZCxzQ0FBc0Q7TUFDdEQsV0FBVztNQUNYLFlBQVk7TUFDWixXQUFXO01BQ1gsaUJBQWlCLEVBQUE7O0FBaktqQztJQXVLWSxvQkFBYTtJQUFiLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQXpLeEI7TUE2S29CLFlBQVk7TUFDWiw2QkF4TFI7TUF5TFEsc0JBQXNCLEVBQUE7O0FBL0sxQztNQW9MZ0IsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixrQ0FBa0M7TUFDbEMsWUFBWTtNQUNaLGFBQWE7TUFDYixXQW5NSjtNQW9NSSxVQUFVO01BQ1YsU0FBUztNQUNULGdCQUFnQjtNQUNoQiwyREFBOEQ7TUFBOUQsbURBQThEO01BQzlELFlBQVksRUFBQTs7QUE5TDVCO1FBaU1vQixnQkFBZ0IsRUFBQTs7QUFqTXBDO1FBaU1vQixnQkFBZ0IsRUFBQTs7QUFqTXBDO1FBaU1vQixnQkFBZ0IsRUFBQTs7QUFqTXBDO1FBaU1vQixnQkFBZ0IsRUFBQTs7QUFqTXBDO01Bd01nQixZQUFZO01BQ1osV0FBVztNQUNYLDBEQUEwRTtNQUMxRSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixhQUFhLEVBQUE7O0FBOU03QjtJQW1OWSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWUsRUFBQTs7QUFyTjNCO01BME5vQixjQUFjO01BQ2QsV0FBVztNQUNYLFdBQVc7TUFDWCxnQkF2T1I7TUF3T1EsNEJBQW9CO01BQXBCLG9CQUFvQjtNQUNwQixtQ0FBMkI7Y0FBM0IsMkJBQTJCLEVBQUE7O0FBL04vQztNQW1Pb0Isa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixXQUFXLEVBQUE7O0FBck8vQjtNQXlPb0Isa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTs7QUExTy9CO01BOE9vQixVQUFVO01BQ1YsV0FBVyxFQUFBOztBQS9PL0I7TUFtUG9CLFFBQVE7TUFDUixXQUFXLEVBQUE7O0FBcFAvQjtNQXdQb0IsVUFBVTtNQUNWLFdBQVc7TUFDWCxtQkFBbUIsRUFBQTs7QUExUHZDO01BOFBvQixVQUFVO01BQ1YsVUFBVSxFQUFBOztBQS9QOUI7UUFrUXdCLFNBQVM7UUFDVCxnREFBd0M7Z0JBQXhDLHdDQUF3QyxFQUFBOztBQW5RaEU7UUF1UXdCLFNBQVM7UUFDVCxnREFBd0M7Z0JBQXhDLHdDQUF3QyxFQUFBOztBQXhRaEU7SUErUVksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBOztBQW5SOUI7TUFzUmdCLGVBQWU7TUFDZix3QkFBd0I7TUFDeEIsV0FsU0o7TUFtU0ksZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXLEVBQUE7O0FBM1IzQjtNQStSZ0IsVUFBVTtNQUNWLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsd0JBQXdCO01BQ3hCLFdBN1NKO01BOFNJLGVBQWUsRUFBQTs7QUFwUy9CO01Bd1NnQixZQUFZO01BQ1osWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxhQUFhLEVBQUE7O0FBalQ3QjtRQW9Ub0IsK0NBQTRDLEVBQUE7O0FBcFRoRTtNQXlUZ0Isc0JBblVKO01Bb1VJLGNBalVJLEVBQUE7O0FBT3BCO01BK1RnQix5QkF2VUQ7TUF3VUMsV0ExVUosRUFBQTs7QUFVWjtJQXNVWSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsc0JBQXFCO1lBQXJCLHFCQUFxQixFQUFBOztBQTFVakM7TUE2VWdCLG9CQUFhO01BQWIsYUFBYTtNQUNiLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixrQ0FBa0M7TUFDbEMsV0EzVkosRUFBQTs7QUFVWjtRQW9Wb0IsV0FBVztRQUNYLHFCQUFxQjtRQUNyQiw0Q0FBNEQ7UUFDNUQsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0IsRUFBQTs7QUFPdEM7RUFDSTtJQUNJLGFBQWEsRUFBQTtFQUdqQjtJQUNJLFVBQVUsRUFBQSxFQUNiOztBQUdMO0VBQ0k7SUFDSSxhQUFhLEVBQUEsRUFDaEI7O0FBR0w7RUFoWEE7SUFvWGdCLGVBQWUsRUFBQTtFQXBYL0I7SUF3WGdCLGVBQWU7SUFDZixlQUFlLEVBQUEsRUFDbEI7O0FBS2I7RUFDSTtJQUdZLGVBQWUsRUFBQTtFQUgzQjtJQU9ZLGFBQWEsRUFBQSxFQUNoQjs7QUFLYjtFQTdZQTtJQWlaZ0IsZUFBZSxFQUFBO0VBalovQjtJQXFaZ0IsZUFBZTtJQUNmLG9CQUFvQixFQUFBO0VBdEJoQztJQTRCWSxhQUFhLEVBQUE7RUE1QnpCO0lBZ0NZLGVBQWUsRUFBQTtFQWxCM0I7SUF1QmdCLGFBQWEsRUFBQTtFQXZCN0I7SUEyQmdCLGFBQWEsRUFBQSxFQUNoQjs7QUFNakI7RUFoYkE7SUFvYmdCLGdCQUFnQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb2xvcnM6XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRncmVlbjogIzdmYzQwMDtcclxuJGJsYWNrLXRleHQ6ICMwNDE0MjE7XHJcblxyXG4uYWN0aXZhdGVkSGVhZGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxufVxyXG5cclxuLm1haW4taGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvbWFzay5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiA4MzVweDtcclxuXHJcbiAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuXHJcblxyXG4gICAgICAgICAgICAubWVudS1tb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMTVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5uYXYtbW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDFiNTIyOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYm9yZGVyc091dCBhOmJlZm9yZSwgLmJvcmRlcnNPdXQgYTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5ib3JkZXJzT3V0IGE6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmJvcmRlcnNPdXQgYTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYm9yZGVyc091dCBhOmhvdmVyOmJlZm9yZSwgLmJvcmRlcnNPdXQgYTpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdmlnYXRpb24ge1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBUb3AgYW5kIEJvdHRvbSBib3JkZXJzIGdvIG91dCAqL1xyXG4gICAgICAgIC50b3BCb3RvbUJvcmRlcnNPdXQgYTpiZWZvcmUsIC50b3BCb3RvbUJvcmRlcnNPdXQgYTphZnRlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9wQm90b21Cb3JkZXJzT3V0IGE6YmVmb3JlIHtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b3BCb3RvbUJvcmRlcnNPdXQgYTphZnRlciB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvcEJvdG9tQm9yZGVyc091dCBhOmhvdmVyOmJlZm9yZSwgLnRvcEJvdG9tQm9yZGVyc091dCBhOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2aWdhdGlvbi1wcm8ge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2ctaW4ge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbG9naW4ucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNnB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2gtZm9ybXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogNDlweDtcclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMtd2l0aGluIHtcclxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIC40cyBjdWJpYy1iZXppZXIoMC4wMDAsIDAuNzk1LCAwLjAwMCwgMS4wMDApO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG5cclxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmNmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25fc2VhcmNoLnBuZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUtc21hbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAuYnVyZ2VyIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuLCBzcGFuOmJlZm9yZSwgc3BhbjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNwYW46YmVmb3JlLCBzcGFuOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNwYW46YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3BhbjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ0bi5zZWxlY3RlZCwgLmJ0bi5zZWxlY3RlZDphZnRlciAsLmJ0bi5zZWxlY3RlZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5idG4uc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSgwZGVnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfbWFpbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyLXRpdGxlX3NlY29uZGFyeXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJWhlYWRlci1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3MnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2stdGV4dDtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWhlYWRlci1idXR0b247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mcmVle1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWhlYWRlci1idXR0b247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY3JvbGx7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zY3JvbGxfZWxlbWVudHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ljb25fc2Nyb2xsLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5tZW51LWxhcmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtcmlnaHQge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkge1xyXG4gICAgLm1lbnUtc21hbGx7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAubWFpbi1oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfbWFpbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAxcHgpIHtcclxuICAgIC5tYWluLWhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgLmxvZ28tbGFyZ2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9nby1zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLm1haW4taGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgICAuaGVhZGVyLXRpdGxlX21haW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyLXRpdGxlX3NlY29uZGFyeSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDAgMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIC5sb2dvLWxhcmdlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sb2dvLXNtYWxsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdi1yaWdodHtcclxuICAgICAgICAgICAgICAgIC5zZWFyY2gtZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2aWdhdGlvbi1wcm97XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYzcHgpIHtcclxuICAgIC5tYWluLWhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAuaGVhZGVyLXRpdGxle1xyXG4gICAgICAgICAgICAuZnJlZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = ".online-courses .online-courses-container .course-image_small .category-section, .online-courses .online-courses-container .course-image_main .category-section {\n  width: 75%; }\n\n.online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n  position: relative;\n  bottom: 0px;\n  left: 0px;\n  background-position: center;\n  background-size: cover;\n  margin: 7.5px;\n  padding: 20px;\n  cursor: pointer;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n\n.online-courses .online-courses-container .course-image_small:hover, .online-courses .online-courses-container .course-image_main:hover {\n    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5);\n    bottom: 2px; }\n\n.online-courses {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: auto;\n  text-align: center;\n  padding-top: 100px; }\n\n.online-courses .online-courses-container {\n    width: 100%;\n    max-width: 1170px; }\n\n.online-courses .online-courses-container .online-courses_title {\n      font-size: 42px;\n      letter-spacing: 0px;\n      line-height: 42px;\n      color: #041421;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      text-align: center; }\n\n.online-courses .online-courses-container img {\n      padding: 30px 0; }\n\n.online-courses .online-courses-container .online-courses_subTitle {\n      font-size: 16x;\n      letter-spacing: 0px;\n      color: #041421;\n      font-family: \"Open Sans\";\n      text-align: center; }\n\n.online-courses .online-courses-container .course-section {\n      padding-top: 50px;\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      position: relative;\n      -webkit-box-pack: center;\n              justify-content: center; }\n\n.online-courses .online-courses-container .course-image_small {\n      width: 97%; }\n\n.online-courses .online-courses-container .course-image_main {\n      width: 49%; }\n\n.online-courses .online-courses-container .course-image_main .nameCourse {\n        display: block;\n        color: #fff;\n        text-align: left;\n        bottom: 10px;\n        position: absolute; }\n\n.online-courses .online-courses-container .course-image {\n      height: 440px;\n      width: 440px;\n      background-position: center;\n      background-size: cover;\n      margin: 7.5px;\n      padding: 20px;\n      box-shadow: inset 0px 0px 50px 18px rgba(0, 0, 0, 0.09);\n      cursor: pointer; }\n\n.online-courses .online-courses-container .course-image:hover {\n        box-shadow: none; }\n\n.online-courses .online-courses-container .show-section {\n      padding: 80px 0 45px; }\n\n.online-courses .online-courses-container .show-button {\n      width: 172px;\n      height: 48px;\n      border: 2px solid #2196f3;\n      border-radius: 24px;\n      font-size: 16px;\n      line-height: 18px;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      margin: 0px 10px;\n      outline: none;\n      background-color: #fff;\n      color: #2196f3;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s; }\n\n.online-courses .online-courses-container .show-button:hover {\n        background-color: #2196f3;\n        color: #fff;\n        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n\n.online-courses .online-courses-container .category {\n      display: inline-block;\n      float: left;\n      padding: 3px 10px;\n      color: #fff;\n      background: rgba(0, 0, 0, 0.3);\n      border-radius: 6px;\n      margin-right: 10px;\n      margin-bottom: 5px; }\n\n.online-courses .online-courses-container .status {\n      display: inline-block;\n      float: right;\n      padding: 3px 10px;\n      border-radius: 6px;\n      color: #fff; }\n\n.online-courses .online-courses-container .status.PRO {\n      background: #2196f3; }\n\n.online-courses .online-courses-container .status.Plus {\n      background: #c46cd8; }\n\n.online-courses .online-courses-container .status.Free {\n      background: #7fc400; }\n\n.online-courses .online-courses-container .status.Optimal {\n      background: #5c4af7; }\n\n.online-courses .online-courses-container .nameCourse {\n      display: block;\n      color: #fff;\n      bottom: 15px;\n      position: absolute;\n      text-align: left; }\n\n.online-courses .online-courses-container .nameCourse .author {\n        font: 14px 'Open Sans', sans-serif;\n        color: #b9b8bc; }\n\n@media screen and (min-width: 320px) {\n      .online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n        width: 225px;\n        height: 225px; } }\n\n@media screen and (min-width: 375px) {\n      .online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n        width: 290px;\n        height: 290px; } }\n\n@media screen and (min-width: 425px) {\n      .online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n        width: 345px;\n        height: 345px; } }\n\n@media screen and (min-width: 768px) {\n      .online-courses .online-courses-container .course-image_small, .online-courses .online-courses-container .course-image_main {\n        width: 690px;\n        height: 690px; } }\n\n@media screen and (min-width: 1024px) {\n      .online-courses .online-courses-container .course-image_main {\n        width: 445px;\n        height: 445px; }\n      .online-courses .online-courses-container .course-image_small {\n        width: 290px;\n        height: 290px; } }\n\n@media screen and (min-width: 1170px) {\n      .online-courses .online-courses-container .course-image_main {\n        width: 520px;\n        height: 520px; }\n      .online-courses .online-courses-container .course-image_small {\n        width: 341px;\n        height: 341px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL29ubGluZS1jb3Vyc2VzL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXG9ubGluZS1jb3Vyc2VzXFxvbmxpbmUtY291cnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsU0FBUztFQUNULDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsNEJBQW9CO0VBQXBCLG9CQUFvQixFQUFBOztBQUVwQjtJQUNJLCtDQUErQztJQUMvQyxXQUFXLEVBQUE7O0FBSW5CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUx0QjtJQVFRLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTs7QUFUekI7TUFZWSxlQUFlO01BQ2YsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixjQXRDUTtNQXVDUix3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBOztBQWxCOUI7TUFzQlksZUFBZSxFQUFBOztBQXRCM0I7TUEwQlksY0FBYztNQUNkLG1CQUFtQjtNQUNuQixjQW5EUTtNQW9EUix3QkFBd0I7TUFDeEIsa0JBQWtCLEVBQUE7O0FBOUI5QjtNQWtDWSxpQkFBaUI7TUFDakIsb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQix3QkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7O0FBdENuQztNQTJDWSxVQUFVLEVBQUE7O0FBM0N0QjtNQW9EWSxVQUFVLEVBQUE7O0FBcER0QjtRQXVEZ0IsY0FBYztRQUNkLFdBbEZKO1FBbUZJLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osa0JBQWtCLEVBQUE7O0FBM0RsQztNQW9FWSxhQUFhO01BQ2IsWUFBWTtNQUNaLDJCQUEyQjtNQUMzQixzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLGFBQWE7TUFDYix1REFBb0Q7TUFDcEQsZUFBZSxFQUFBOztBQTNFM0I7UUE4RWdCLGdCQUFnQixFQUFBOztBQTlFaEM7TUFtRlksb0JBQW9CLEVBQUE7O0FBbkZoQztNQXVGWSxZQUFZO01BQ1osWUFBWTtNQUNaLHlCQWxIRTtNQW1IRixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixhQUFhO01BQ2Isc0JBM0hBO01BNEhBLGNBM0hFO01BNEhGLDRCQUFvQjtNQUFwQixvQkFBb0IsRUFBQTs7QUFuR2hDO1FBc0dnQix5QkEvSEY7UUFnSUUsV0FqSUo7UUFrSUksK0NBQTRDLEVBQUE7O0FBeEc1RDtNQTZHWSxxQkFBcUI7TUFDckIsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixXQTFJQTtNQTJJQSw4QkFBOEI7TUFDOUIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTs7QUFwSDlCO01Bd0hZLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixXQXRKQSxFQUFBOztBQTBCWjtNQWdJWSxtQkF6SkUsRUFBQTs7QUF5QmQ7TUFvSVksbUJBQW1CLEVBQUE7O0FBcEkvQjtNQXdJWSxtQkFoS0csRUFBQTs7QUF3QmY7TUE0SVksbUJBQW1CLEVBQUE7O0FBNUkvQjtNQWdKWSxjQUFjO01BQ2QsV0EzS0E7TUE0S0EsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixnQkFBZ0IsRUFBQTs7QUFwSjVCO1FBdUpnQixrQ0FBa0M7UUFDbEMsY0FBYyxFQUFBOztBQUl0QjtNQTVKUjtRQThKZ0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjs7QUFJTDtNQXBLUjtRQXNLZ0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjs7QUFHTDtNQTNLUjtRQTZLZ0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjs7QUFJTDtNQW5MUjtRQXFMZ0IsWUFBWTtRQUNaLGFBQWEsRUFBQSxFQUNoQjs7QUFHTDtNQTFMUjtRQTRMZ0IsWUFBWTtRQUNaLGFBQWEsRUFBQTtNQTdMN0I7UUFpTWdCLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDaEI7O0FBR0w7TUF0TVI7UUF3TWdCLFlBQVk7UUFDWixhQUFhLEVBQUE7TUF6TTdCO1FBNk1nQixZQUFZO1FBQ1osYUFBYSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL29ubGluZS1jb3Vyc2VzL29ubGluZS1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuXHJcbiVjYXRlZ29yeVNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuJWNvdXJzZS1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1hcmdpbjogNy41cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vbmxpbmUtY291cnNlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcblxyXG4gICAgLm9ubGluZS1jb3Vyc2VzLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcclxuXHJcbiAgICAgICAgLm9ubGluZS1jb3Vyc2VzX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjay10ZXh0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9ubGluZS1jb3Vyc2VzX3N1YlRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNng7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2stdGV4dDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3Vyc2Utc2VjdGlvbntcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3Vyc2UtaW1hZ2Vfc21hbGwge1xyXG4gICAgICAgICAgICBAZXh0ZW5kICVjb3Vyc2UtaW1hZ2U7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NyU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY2F0ZWdvcnktc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVjYXRlZ29yeVNlY3Rpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3Vyc2UtaW1hZ2VfbWFpbiB7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWNvdXJzZS1pbWFnZTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ5JTtcclxuXHJcbiAgICAgICAgICAgIC5uYW1lQ291cnNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWNhdGVnb3J5U2VjdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDcuNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDUwcHggMThweCByZ2JhKDAsMCwwLDAuMDkpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaG93LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4MHB4IDAgNDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaG93LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNzJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdHVzLlBSTyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YXR1cy5QbHVzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2M0NmNkODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMuRnJlZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGF0dXMuT3B0aW1hbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1YzRhZjc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZUNvdXJzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgICAgICAgZm9udDogMTRweCAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjliOGJjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgICAuY291cnNlLWltYWdlX3NtYWxsLCAuY291cnNlLWltYWdlX21haW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgLmNvdXJzZS1pbWFnZV9zbWFsbCwgLmNvdXJzZS1pbWFnZV9tYWluIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2Vfc21hbGwsIC5jb3Vyc2UtaW1hZ2VfbWFpbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzQ1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLmNvdXJzZS1pbWFnZV9zbWFsbCwgLmNvdXJzZS1pbWFnZV9tYWluIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2OTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAuY291cnNlLWltYWdlX21haW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ0NXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvdXJzZS1pbWFnZV9zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjkwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcwcHgpIHtcclxuICAgICAgICAgICAgLmNvdXJzZS1pbWFnZV9tYWluIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2Vfc21hbGwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM0MXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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

module.exports = ".partners {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #292731;\n  height: auto;\n  text-align: center;\n  padding-top: 100px;\n  padding-bottom: 100px; }\n  .partners .partners-container {\n    width: 100%;\n    max-width: 1170px; }\n  .partners .partners-container .partners_title {\n      font-size: 42px;\n      letter-spacing: 0px;\n      line-height: 42px;\n      color: white;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      text-align: center; }\n  .partners .partners-container img {\n      padding: 30px 0; }\n  .partners .partners-container .partners_subTitle {\n      font-size: 16x;\n      letter-spacing: 0px;\n      color: white;\n      font-family: \"Open Sans\";\n      text-align: center; }\n  .partners .partners-container .partners-section {\n      display: inline-block;\n      margin: 0 0 20px;\n      cursor: pointer; }\n  .partners .partners-container .partners-section div {\n        width: 204px;\n        height: 140px;\n        border-radius: 6px;\n        padding: 10%;\n        margin: 0 15px;\n        background-color: #383643;\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s; }\n  .partners .partners-container .partners-section div:hover {\n          background-color: #2196f3; }\n  .partners .partners-container .show-section .show-button {\n      width: 164px;\n      height: 48px;\n      border-radius: 24px;\n      background: none;\n      border: 2px solid #38373f;\n      color: #6a696f;\n      outline: none;\n      -webkit-transition: all 0.2s;\n      transition: all 0.2s; }\n  .partners .partners-container .show-section .show-button:hover {\n        background: white;\n        border: 2px solid white; }\n  @media screen and (max-width: 375px) {\n      .partners .partners-container .partners-section div {\n        width: 200px;\n        height: 115px;\n        padding: 7%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL3BhcnRuZXJzL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXHBhcnRuZXJzXFxwYXJ0bmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsbUJBUFE7RUFRUixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTtFQVB6QjtJQVVRLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQVh6QjtNQWNZLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWix3QkFBd0I7TUFDeEIsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0VBcEI5QjtNQXdCWSxlQUFlLEVBQUE7RUF4QjNCO01BNEJZLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixrQkFBa0IsRUFBQTtFQWhDOUI7TUFvQ1kscUJBQXFCO01BQ3JCLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7RUF0QzNCO1FBeUNnQixZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osY0FBYztRQUNkLHlCQWpERztRQWtESCw0QkFBb0I7UUFBcEIsb0JBQW9CLEVBQUE7RUEvQ3BDO1VBa0RvQix5QkFwREssRUFBQTtFQUV6QjtNQXlEZ0IsWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixjQUFjO01BQ2QsYUFBYTtNQUNiLDRCQUFvQjtNQUFwQixvQkFBb0IsRUFBQTtFQWhFcEM7UUFtRW9CLGlCQUFnQjtRQUNoQix1QkFBdUIsRUFBQTtFQUtuQztNQXpFUjtRQTRFb0IsWUFBWTtRQUNaLGFBQWE7UUFDYixXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9wYXJ0bmVycy9wYXJ0bmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZzogIzI5MjczMTtcclxuJHNlY29uZC1iZzogIzM4MzY0MztcclxuJHNlY29uZC1iZy1ob3ZlcjogIzIxOTZmMztcclxuXHJcbi5wYXJ0bmVycyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAgLnBhcnRuZXJzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcblxyXG4gICAgICAgIC5wYXJ0bmVyc190aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYXJ0bmVyc19zdWJUaXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZ4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGFydG5lcnMtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmQtYmc7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kLWJnLWhvdmVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaG93LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAuc2hvdy1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzgzNzNmO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2YTY5NmY7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgLnBhcnRuZXJzLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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

module.exports = ".welcome-school {\n  background: url('welcome-school-bg.png') no-repeat center top;\n  background-size: cover;\n  padding: 110px 40px; }\n  .welcome-school .header-title {\n    text-align: center; }\n  .welcome-school .header-title .header-title_main {\n      font-size: 42px;\n      line-height: 60px;\n      font-family: \"Work Sans\";\n      color: #fff;\n      font-weight: 600; }\n  .welcome-school .header-title .header-title_secondary {\n      font-size: 16px;\n      line-height: 30px;\n      font-family: \"Open Sans\";\n      color: #fff;\n      padding: 30px 0; }\n  .welcome-school .pro, .welcome-school .free {\n    width: 172px;\n    height: 48px;\n    border: none;\n    border-radius: 24px;\n    font-size: 16px;\n    line-height: 18px;\n    font-family: \"Work Sans\";\n    font-weight: 600;\n    margin: 0 10px 10px;\n    outline: none; }\n  .welcome-school .pro:hover, .welcome-school .free:hover {\n      box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n  .welcome-school .pro {\n    background-color: #fff;\n    color: #041421; }\n  .welcome-school .free {\n    background-color: #7fc400;\n    color: #fff; }\n  @media screen and (max-width: 1024px) {\n  .welcome-school .header-title .header-title_main {\n    font-size: 44px; }\n  .welcome-school .header-title .header-title_secondary {\n    font-size: 16px;\n    padding: 30px 0; } }\n  @media screen and (max-width: 800px) {\n  .welcome-school .header-title .header-title_main {\n    font-size: 36px; }\n  .welcome-school .header-title .header-title_secondary {\n    font-size: 14px;\n    padding: 15px 0 30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL3dlbGNvbWUtc2Nob29sL0g6XFxWaWthXFxmcm9udGVuZFxcc3BlZWRQYWludGluZ1xcc3AtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXHdlbGNvbWUtc2Nob29sXFx3ZWxjb21lLXNjaG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLDZEQUE2RTtFQUM3RSxzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7RUFIdkI7SUFLUSxrQkFBa0IsRUFBQTtFQUwxQjtNQVFZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsd0JBQXdCO01BQ3hCLFdBaEJBO01BaUJBLGdCQUFnQixFQUFBO0VBWjVCO01BZ0JZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsd0JBQXdCO01BQ3hCLFdBeEJBO01BeUJBLGVBQWUsRUFBQTtFQXBCM0I7SUF5QlEsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYSxFQUFBO0VBbENyQjtNQXFDWSwrQ0FBNEMsRUFBQTtFQXJDeEQ7SUEwQ1Esc0JBL0NJO0lBZ0RKLGNBN0NZLEVBQUE7RUFFcEI7SUFnRFEseUJBbkRPO0lBb0RQLFdBdERJLEVBQUE7RUEyRFo7RUF0REE7SUEwRGdCLGVBQWUsRUFBQTtFQTFEL0I7SUE4RGdCLGVBQWU7SUFDZixlQUFlLEVBQUEsRUFDbEI7RUFLYjtFQXJFQTtJQXlFZ0IsZUFBZSxFQUFBO0VBekUvQjtJQTZFZ0IsZUFBZTtJQUNmLG9CQUFvQixFQUFBLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL3dlbGNvbWUtc2Nob29sL3dlbGNvbWUtc2Nob29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb2xvcnM6XHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRncmVlbjogIzdmYzQwMDtcclxuJGJsYWNrLXRleHQ6ICMwNDE0MjE7XHJcblxyXG4ud2VsY29tZS1zY2hvb2wgIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3dlbGNvbWUtc2Nob29sLWJnLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmc6IDExMHB4IDQwcHg7XHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGl0bGVfbWFpbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyLXRpdGxlX3NlY29uZGFyeXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJWhlYWRlci1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxNzJweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBjb2xvcjogJGJsYWNrLXRleHQ7XHJcbiAgICAgICAgQGV4dGVuZCAlaGVhZGVyLWJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICAuZnJlZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBAZXh0ZW5kICVoZWFkZXItYnV0dG9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC53ZWxjb21lLXNjaG9vbCB7XHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfbWFpbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC53ZWxjb21lLXNjaG9vbCB7XHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfbWFpbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfc2Vjb25kYXJ5IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMCAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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

module.exports = ".comments {\n  padding: 110px 40px; }\n  .comments .header-title {\n    text-align: center; }\n  .comments .header-title .header-title_main {\n      font-size: 42px;\n      line-height: 60px;\n      font-family: \"Work Sans\";\n      color: #041421;\n      font-weight: 600; }\n  .comments .comments-section .comment {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 80px 0 15px;\n    -webkit-box-align: center;\n            align-items: center;\n    min-height: 200px; }\n  .comments .comments-section .comment span {\n      display: block;\n      width: 50%;\n      text-align: center;\n      font-style: italic;\n      color: #69727c;\n      font-size: 1.2rem; }\n  .comments .comments-section .comment ::before, .comments .comments-section .comment ::after {\n      content: \"\";\n      display: inline-block;\n      width: 20px;\n      height: 20px; }\n  .comments .comments-section .comment ::before {\n      background: url('quotation-mark-before.png') no-repeat;\n      background-size: contain;\n      margin-right: 10px; }\n  .comments .comments-section .comment ::after {\n      background: url('quotation-mark-after.png') no-repeat;\n      background-size: contain;\n      margin-left: 10px; }\n  .comments .comments-section .previous-btn, .comments .comments-section .next-btn {\n    width: 60px;\n    height: 60px;\n    border: none;\n    -webkit-transition: background 0.2s;\n    transition: background 0.2s;\n    outline: none; }\n  .comments .comments-section .previous-btn {\n    background: url('previous-btn.png') no-repeat;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n  .comments .comments-section .previous-btn:hover {\n      background: url('previous-btn-hover.png') no-repeat; }\n  .comments .comments-section .next-btn {\n    background: url('next-btn.png') no-repeat;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n  .comments .comments-section .next-btn:hover {\n      background: url('next-btn-hover.png') no-repeat; }\n  .comments .comments-section .commentator {\n    padding: 10px 65px; }\n  .comments .comments-section .commentator .photo-small, .comments .comments-section .commentator .photo-large {\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: contain;\n      margin: 0 15px; }\n  .comments .comments-section .commentator .photo-small {\n      height: 35px;\n      width: 35px;\n      opacity: 0.6; }\n  .comments .comments-section .commentator .photo-large {\n      height: 115px;\n      width: 115px;\n      text-align: center; }\n  .comments .comments-section .commentator .photo-large .status {\n        display: inline-block;\n        padding: 3px 10px;\n        border-radius: 6px;\n        color: #fff;\n        position: relative;\n        top: 100px; }\n  .comments .comments-section .commentator .photo-large .status.PRO {\n        background: #2196f3; }\n  .comments .comments-section .commentator .photo-large .status.Plus {\n        background: #c46cd8; }\n  .comments .comments-section .commentator .photo-large .status.Free {\n        background: #7fc400; }\n  .comments .comments-section .commentator .photo-large .status.Optimal {\n        background: #5c4af7; }\n  .comments .comments-section .commentator .photo-large .comentator-name {\n        display: block;\n        color: #b9b8bc;\n        bottom: 15px;\n        position: relative;\n        text-align: center;\n        top: 120px; }\n  .comments .comments-section .commentator .photo-large .comentator-name .author {\n          font: 14px 'Open Sans', sans-serif;\n          font-weight: bold;\n          color: #041421; }\n  @media screen and (max-width: 800px) {\n  .comments .comments-section .commentator {\n    padding: 10px 0px; }\n    .comments .comments-section .commentator .photo-small {\n      display: none; }\n  .comments .comments-section .previous-btn, .comments .comments-section .next-btn, .comments .comments-section .previous-btn:hover, .comments .comments-section .next-btn:hover {\n    width: 40px;\n    height: 40px;\n    background-size: contain; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL3doYXQtcGVvcGxlLXNheS9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxcbWFpbi1wYWdlXFx3aGF0LXBlb3BsZS1zYXlcXGNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksbUJBQW1CLEVBQUE7RUFEdkI7SUFJUSxrQkFBa0IsRUFBQTtFQUoxQjtNQU9ZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsd0JBQXdCO01BQ3hCLGNBZFE7TUFlUixnQkFBZ0IsRUFBQTtFQVg1QjtJQWtCWSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0VBdEI3QjtNQXlCZ0IsY0FBYztNQUNkLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGNBL0JHO01BZ0NILGlCQUFpQixFQUFBO0VBOUJqQztNQWtDZ0IsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsWUFBWSxFQUFBO0VBckM1QjtNQTBDZ0Isc0RBQXNFO01BQ3RFLHdCQUF3QjtNQUN4QixrQkFBa0IsRUFBQTtFQTVDbEM7TUFpRGdCLHFEQUFxRTtNQUNyRSx3QkFBd0I7TUFDeEIsaUJBQWlCLEVBQUE7RUFuRGpDO0lBd0RZLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFDM0IsYUFBYSxFQUFBO0VBNUR6QjtJQWlFWSw2Q0FBNkQ7SUFDN0QsNEJBQW9CO0lBQXBCLG9CQUFvQixFQUFBO0VBbEVoQztNQXFFZ0IsbURBQW1FLEVBQUE7RUFyRW5GO0lBMkVZLHlDQUF5RDtJQUN6RCw0QkFBb0I7SUFBcEIsb0JBQW9CLEVBQUE7RUE1RWhDO01BK0VnQiwrQ0FBK0QsRUFBQTtFQS9FL0U7SUFvRlksa0JBQWtCLEVBQUE7RUFwRjlCO01BdUZnQiw0QkFBNEI7TUFDNUIsMkJBQTJCO01BQzNCLHdCQUF3QjtNQUN4QixjQUFjLEVBQUE7RUExRjlCO01BK0ZnQixZQUFZO01BQ1osV0FBVztNQUNYLFlBQVksRUFBQTtFQWpHNUI7TUFzR2dCLGFBQWE7TUFDYixZQUFZO01BQ1osa0JBQWtCLEVBQUE7RUF4R2xDO1FBMkdvQixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixXQXJIUjtRQXNIUSxrQkFBa0I7UUFDbEIsVUFBVSxFQUFBO0VBaEg5QjtRQW9Ib0IsbUJBQW1CLEVBQUE7RUFwSHZDO1FBd0hvQixtQkFBbUIsRUFBQTtFQXhIdkM7UUE0SG9CLG1CQUFtQixFQUFBO0VBNUh2QztRQWdJb0IsbUJBQW1CLEVBQUE7RUFoSXZDO1FBb0lvQixjQUFjO1FBQ2QsY0F4SU47UUF5SU0sWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsVUFBVSxFQUFBO0VBekk5QjtVQTRJd0Isa0NBQWtDO1VBQ2xDLGlCQUFpQjtVQUNqQixjQWxKSixFQUFBO0VBMEpwQjtFQXRKQTtJQTBKZ0IsaUJBQWlCLEVBQUE7SUExSmpDO01BNkpvQixhQUFhLEVBQUE7RUE3SmpDO0lBa0tnQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QixFQUFBLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL3doYXQtcGVvcGxlLXNheS9jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZTogI2ZmZjtcclxuJGJsdWU6ICMyMTk2ZjM7XHJcbiRncmVlbjogIzdmYzQwMDtcclxuJGJsYWNrLXRleHQ6ICMwNDE0MjE7XHJcbiRncmV5OiAjYjliOGJjO1xyXG4kZGFyay1ncmV5OiAjNjk3MjdjO1xyXG5cclxuLmNvbW1lbnRzICB7XHJcbiAgICBwYWRkaW5nOiAxMTBweCA0MHB4O1xyXG5cclxuICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZV9tYWlue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjay10ZXh0O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29tbWVudHMtc2VjdGlvbiB7XHJcblxyXG4gICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDgwcHggMCAxNXB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJXF1b3RhdGlvbi1tYXJre1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVxdW90YXRpb24tbWFyaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3F1b3RhdGlvbi1tYXJrLWJlZm9yZS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICA6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJXF1b3RhdGlvbi1tYXJrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvcXVvdGF0aW9uLW1hcmstYWZ0ZXIucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICVuYXZpZ2F0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJldmlvdXMtYnRuIHtcclxuICAgICAgICAgICAgQGV4dGVuZCAlbmF2aWdhdGlvbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvcHJldmlvdXMtYnRuLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3ByZXZpb3VzLWJ0bi1ob3Zlci5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uZXh0LWJ0biB7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJW5hdmlnYXRpb247XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL25leHQtYnRuLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL25leHQtYnRuLWhvdmVyLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbW1lbnRhdG9yIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA2NXB4O1xyXG5cclxuICAgICAgICAgICAgJXBob3RvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBob3RvLXNtYWxsIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJXBob3RvO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5waG90by1sYXJnZSB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVwaG90bztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5zdGF0dXMuUFJPIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5zdGF0dXMuUGx1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2M0NmNkODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuc3RhdHVzLkZyZWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmM0MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnN0YXR1cy5PcHRpbWFsIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWM0YWY3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jb21lbnRhdG9yLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTIwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5hdXRob3J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrLXRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNvbW1lbnRze1xyXG4gICAgICAgIC5jb21tZW50cy1zZWN0aW9ue1xyXG4gICAgICAgICAgICAuY29tbWVudGF0b3J7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAucGhvdG8tc21hbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJXNtYWxsLWJ0biB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByZXZpb3VzLWJ0biwgLm5leHQtYnRue1xyXG4gICAgICAgICAgICAgICAgQGV4dGVuZCAlc21hbGwtYnRuO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlc21hbGwtYnRuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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

module.exports = ".why-speed-painting {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .why-speed-painting .why-speed-painting-container {\n    width: 100%;\n    max-width: 1170px; }\n  .why-speed-painting .why-speed-painting-container .header-title {\n      text-align: center;\n      padding-top: 110px; }\n  .why-speed-painting .why-speed-painting-container .header-title .header-title_main {\n        font-size: 42px;\n        line-height: 60px;\n        font-family: \"Work Sans\";\n        color: #041421;\n        font-weight: 600; }\n  .why-speed-painting .why-speed-painting-container .header-title .header-title_secondary {\n        font-size: 16px;\n        line-height: 30px;\n        font-family: \"Open Sans\";\n        color: #041421;\n        padding: 45px 0; }\n  .why-speed-painting .why-speed-painting-container .header-title img {\n        padding: 30px 0 0; }\n  .why-speed-painting .why-speed-painting-container .reasons {\n      padding: 0 30px 110px; }\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block {\n        text-align: center;\n        width: 33.3%;\n        padding: 30px; }\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block .reasons-block_img {\n          height: 65px; }\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block .reasons-block_header {\n          font-weight: bold; }\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block .reasons-block_text {\n          font-weight: 400; }\n  @media screen and (max-width: 991px) {\n  .why-speed-painting .why-speed-painting-container .reasons .reasons-block {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL3doeS1zcGVlZC1wYWludGluZy9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxcbWFpbi1wYWdlXFx3aHktc3BlZWQtcGFpbnRpbmdcXHdoeS1zcGVlZC1wYWludGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUYzQjtJQUtRLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQU56QjtNQVNZLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTtFQVY5QjtRQWFnQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixjQWxCSTtRQW1CSixnQkFBZ0IsRUFBQTtFQWpCaEM7UUFxQmdCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLGNBMUJJO1FBMkJKLGVBQWUsRUFBQTtFQXpCL0I7UUE2QmdCLGlCQUFpQixFQUFBO0VBN0JqQztNQWtDWSxxQkFBcUIsRUFBQTtFQWxDakM7UUFxQ2dCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osYUFBYSxFQUFBO0VBdkM3QjtVQTBDb0IsWUFBWSxFQUFBO0VBMUNoQztVQThDb0IsaUJBQWlCLEVBQUE7RUE5Q3JDO1VBa0RvQixnQkFBZ0IsRUFBQTtFQU9wQztFQUNJO0lBSWdCLFdBQVcsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL3doeS1zcGVlZC1wYWludGluZy93aHktc3BlZWQtcGFpbnRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuXHJcbi53aHktc3BlZWQtcGFpbnRpbmcgIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAud2h5LXNwZWVkLXBhaW50aW5nLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcclxuXHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExMHB4O1xyXG5cclxuICAgICAgICAgICAgLmhlYWRlci10aXRsZV9tYWlue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2stdGV4dDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGVfc2Vjb25kYXJ5e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2stdGV4dDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVhc29ucyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAxMTBweDtcclxuXHJcbiAgICAgICAgICAgIC5yZWFzb25zLWJsb2Nre1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAucmVhc29ucy1ibG9ja19pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVhc29ucy1ibG9ja19oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZWFzb25zLWJsb2NrX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAud2h5LXNwZWVkLXBhaW50aW5nICB7XHJcbiAgICAgICAgLndoeS1zcGVlZC1wYWludGluZy1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIC5yZWFzb25zIHtcclxuICAgICAgICAgICAgICAgIC5yZWFzb25zLWJsb2Nre1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICB9ICBcclxuICAgIH1cclxufSJdfQ== */"

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
    NotFoundComponent.prototype.ngOnInit = function () {
        var path = window.location.pathname.slice(1);
        localStorage.setItem('path', path);
        window.location.href = '../';
    };
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

module.exports = ".partner-dashbord-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  background-image: url('dashboard.png');\n  background-size: cover;\n  background-repeat: no-repeat; }\n  .partner-dashbord-bg .partner-dashboard-bg_section {\n    height: 100%;\n    width: 1170px;\n    padding-bottom: 120px;\n    padding-top: 180px;\n    text-align: center; }\n  .partner-dashbord-bg .partner-dashboard-bg_section h2, .partner-dashbord-bg .partner-dashboard-bg_section h6 {\n      color: white; }\n  .partner-dashbord-bg .partner-dashboard-bg_section h2 {\n      font-family: \"Work Sans\"; }\n  .partner-dashbord-bg .partner-dashboard-bg_section h6 {\n      font-family: \"Open Sans\"; }\n  .partner-dashbord-bg .partner-dashboard-bg_section .becomePartner-link {\n      width: 172px;\n      height: 48px;\n      border: none;\n      border-radius: 24px;\n      font-size: 16px;\n      line-height: 18px;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      margin: 0 10px;\n      outline: none;\n      background: #2196f3;\n      -webkit-transition: all 0.2s;\n      transition: all 0.2s;\n      color: white; }\n  .partner-dashbord-bg .partner-dashboard-bg_section .becomePartner-link:hover {\n        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n  .partners {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 75px; }\n  .partners .partners-container {\n    width: 1170px;\n    text-align: center; }\n  .partners .partners-container .header-title {\n      padding-bottom: 65px; }\n  .partners .partners-container .header-title img {\n        padding-bottom: 15px; }\n  .partners .partners-container .partners-section {\n      padding-bottom: 100px; }\n  .partners .partners-container .partners-section .partners-section_block {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: center;\n                justify-content: center;\n        flex-wrap: wrap; }\n  .partners .partners-container .partners-section .partners-section_block div {\n          background-size: auto;\n          background-repeat: no-repeat;\n          width: 225px;\n          height: 160px;\n          border-radius: 6px;\n          background-color: white;\n          border: 1px solid #eaeaeb;\n          background-position: center;\n          cursor: pointer;\n          margin: 5px;\n          -webkit-transition: all 0.3s;\n          transition: all 0.3s; }\n  .partners .partners-container .partners-section .partners-section_block div:hover {\n            border: 1px solid #2196f3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydG5lcnMtcGFnZS9wYXJ0bmVyLWNvbnRlbnQvSDpcXFZpa2FcXGZyb250ZW5kXFxzcGVlZFBhaW50aW5nXFxzcC1hcHAvc3JjXFxhcHBcXHBhcnRuZXJzLXBhZ2VcXHBhcnRuZXItY29udGVudFxccGFydG5lci1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0NBQXNEO0VBQ3RELHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTtFQU5oQztJQVNRLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQWIxQjtNQWdCWSxZQUFZLEVBQUE7RUFoQnhCO01Bb0JZLHdCQUF3QixFQUFBO0VBcEJwQztNQXdCWSx3QkFBd0IsRUFBQTtFQXhCcEM7TUE0QlksWUFBWTtNQUNaLFlBQVk7TUFDWixZQUFZO01BQ1osbUJBQW1CO01BQ25CLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsYUFBYTtNQUNiLG1CQTFDRTtNQTJDRiw0QkFBb0I7TUFBcEIsb0JBQW9CO01BQ3BCLFlBQVksRUFBQTtFQXhDeEI7UUEyQ2dCLCtDQUErQyxFQUFBO0VBTy9EO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTtFQUhyQjtJQU1RLGFBQWE7SUFDYixrQkFBa0IsRUFBQTtFQVAxQjtNQVVZLG9CQUFvQixFQUFBO0VBVmhDO1FBYWdCLG9CQUFvQixFQUFBO0VBYnBDO01Ba0JZLHFCQUFxQixFQUFBO0VBbEJqQztRQXFCZ0Isb0JBQWE7UUFBYixhQUFhO1FBQ2Isd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIsZUFBZSxFQUFBO0VBdkIvQjtVQTBCb0IscUJBQXFCO1VBQ3JCLDRCQUE0QjtVQUM1QixZQUFZO1VBQ1osYUFBYTtVQUNiLGtCQUFrQjtVQUNsQix1QkFBdUI7VUFDdkIseUJBQXlCO1VBQ3pCLDJCQUEyQjtVQUMzQixlQUFlO1VBQ2YsV0FBVztVQUNYLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTtFQXBDeEM7WUF1Q3dCLHlCQTdGVixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFydG5lcnMtcGFnZS9wYXJ0bmVyLWNvbnRlbnQvcGFydG5lci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb2xvcnM6XHJcbiRiZzogIzIzMjEyODtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuXHJcbi5wYXJ0bmVyLWRhc2hib3JkLWJnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2Rhc2hib2FyZC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIC5wYXJ0bmVyLWRhc2hib2FyZC1iZ19zZWN0aW9uIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDExNzBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaDIsIGg2IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmVjb21lUGFydG5lci1saW5rIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE3MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ucGFydG5lcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDc1cHg7XHJcblxyXG4gICAgLnBhcnRuZXJzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDExNzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjVweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhcnRuZXJzLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcblxyXG4gICAgICAgICAgICAucGFydG5lcnMtc2VjdGlvbl9ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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

module.exports = ".courses-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f6f6f6;\n  padding: 0 40px; }\n  .courses-bg .courses {\n    width: 100%;\n    max-width: 1170px; }\n  .courses-bg .courses .main-content {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center;\n      padding-bottom: 50px; }\n  .courses-bg .courses .main-content div .course-image {\n        position: relative;\n        background-position: center;\n        background-size: cover;\n        margin: 7.5px;\n        padding: 20px;\n        cursor: pointer;\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s;\n        width: 350px;\n        height: 350px; }\n  .courses-bg .courses .main-content div .course-image:hover {\n          box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5);\n          bottom: 2px; }\n  .courses-bg .courses .main-content div .course-image .category-section {\n          width: 75%; }\n  .courses-bg .courses .main-content div .course-image .category-section div {\n            display: inline-block; }\n  .courses-bg .courses .main-content div .course-image .category-section div .category {\n              display: inline-block;\n              padding: 3px 10px;\n              color: white;\n              background: rgba(0, 0, 0, 0.3);\n              border-radius: 6px;\n              margin-right: 10px;\n              margin-bottom: 5px;\n              font-size: 10px;\n              font-family: \"Open Sans\";\n              font-weight: 700; }\n  .courses-bg .courses .main-content div .course-image .status {\n          padding: 0px 5px;\n          border-radius: 6px;\n          font-size: 10px;\n          line-height: 22px;\n          color: white;\n          font-family: \"Open Sans\";\n          font-weight: 700;\n          text-align: center; }\n  .courses-bg .courses .main-content div .course-image .status.PRO {\n          background: #2196f3; }\n  .courses-bg .courses .main-content div .course-image .status.Plus {\n          background: #c46cd8; }\n  .courses-bg .courses .main-content div .course-image .status.Free {\n          background: #7fc400; }\n  .courses-bg .courses .main-content div .course-image .status.Optimal {\n          background: #5c4af7; }\n  .courses-bg .courses .main-content .nameCourse {\n        font-size: 18px;\n        line-height: 18px;\n        color: #fefeff;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        display: block;\n        bottom: 15px;\n        position: absolute;\n        text-align: left; }\n  .courses-bg .courses .main-content .nameCourse .author {\n          font: 14px 'Open Sans', sans-serif;\n          color: #b9b8bc; }\n  @media screen and (min-width: 320px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 240px;\n          height: 240px; } }\n  @media screen and (min-width: 375px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 295px;\n          height: 295px; } }\n  @media screen and (min-width: 425px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 345px;\n          height: 345px; } }\n  @media screen and (min-width: 768px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 329px;\n          height: 329px; } }\n  @media screen and (min-width: 1024px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 299px;\n          height: 299px; } }\n  @media screen and (min-width: 1170px) {\n        .courses-bg .courses .main-content div .course-image {\n          width: 348px;\n          height: 348px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL2NvdXJzZXMtc2VjdGlvbi9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxccHJvZmlsZS1wYWdlXFxjb3Vyc2VzLXNlY3Rpb25cXGNvdXJzZXMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtQkFOUTtFQU9SLGVBQWUsRUFBQTtFQUxuQjtJQVFRLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTtFQVR6QjtNQVlZLG9CQUFhO01BQWIsYUFBYTtNQUNiLGVBQWU7TUFDZix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLG9CQUFvQixFQUFBO0VBZmhDO1FBb0JvQixrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQzNCLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsYUFBYTtRQUNiLGVBQWU7UUFDZiw0QkFBb0I7UUFBcEIsb0JBQW9CO1FBQ3BCLFlBQVk7UUFDWixhQUFhLEVBQUE7RUE1QmpDO1VBK0J3QiwrQ0FBK0M7VUFDL0MsV0FBVyxFQUFBO0VBaENuQztVQW9Dd0IsVUFBVSxFQUFBO0VBcENsQztZQXVDNEIscUJBQXFCLEVBQUE7RUF2Q2pEO2NBMENnQyxxQkFBcUI7Y0FDckIsaUJBQWlCO2NBQ2pCLFlBQVk7Y0FDWiw4QkFBOEI7Y0FDOUIsa0JBQWtCO2NBQ2xCLGtCQUFrQjtjQUNsQixrQkFBa0I7Y0FDbEIsZUFBZTtjQUNmLHdCQUF3QjtjQUN4QixnQkFBZ0IsRUFBQTtFQW5EaEQ7VUF5RHdCLGdCQUFnQjtVQUNoQixrQkFBa0I7VUFDbEIsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixZQUFZO1VBQ1osd0JBQXdCO1VBQ3hCLGdCQUFnQjtVQUNoQixrQkFBa0IsRUFBQTtFQWhFMUM7VUFvRXdCLG1CQXhFVixFQUFBO0VBSWQ7VUF3RXdCLG1CQUFtQixFQUFBO0VBeEUzQztVQTRFd0IsbUJBL0VULEVBQUE7RUFHZjtVQWdGd0IsbUJBQW1CLEVBQUE7RUFoRjNDO1FBc0ZnQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQixFQUFBO0VBOUZoQztVQWlHb0Isa0NBQWtDO1VBQ2xDLGNBQWMsRUFBQTtFQUl0QjtRQXRHWjtVQXlHd0IsWUFBWTtVQUNaLGFBQWEsRUFBQSxFQUNoQjtFQUlUO1FBL0daO1VBa0h3QixZQUFZO1VBQ1osYUFBYSxFQUFBLEVBQ2hCO0VBSVQ7UUF4SFo7VUEySHdCLFlBQVk7VUFDWixhQUFhLEVBQUEsRUFDaEI7RUFJVDtRQWpJWjtVQW9Jd0IsWUFBWTtVQUNaLGFBQWEsRUFBQSxFQUNoQjtFQUlUO1FBMUlaO1VBNkl3QixZQUFZO1VBQ1osYUFBYSxFQUFBLEVBQ2hCO0VBSVQ7UUFuSlo7VUFzSndCLFlBQVk7VUFDWixhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLXBhZ2UvY291cnNlcy1zZWN0aW9uL2NvdXJzZXMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRiZzogI2Y2ZjZmNjtcclxuXHJcbi5jb3Vyc2VzLWJnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHg7XHJcblxyXG4gICAgLmNvdXJzZXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG5cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG5cclxuICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDcuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cy5QUk8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMuUGx1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjNDZjZDg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLkZyZWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLk9wdGltYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWM0YWY3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hbWVDb3Vyc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZlZmVmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmF1dGhvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMTRweCAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I5YjhiYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjk1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjk1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjVweCkge1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAuY291cnNlLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvdXJzZS1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMjlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjlweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAuY291cnNlLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE3MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb3Vyc2UtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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

module.exports = ".dashbord-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  height: 350px;\n  background-image: url('dashboard.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position-y: 70px;\n  background-position-x: center; }\n  .dashbord-bg .dashboard-bg_section {\n    height: 100%;\n    width: 1170px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding-bottom: 40px;\n    padding-top: 95px;\n    flex-wrap: wrap; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper {\n      display: -webkit-box;\n      display: flex;\n      border-radius: 25px;\n      background-color: rgba(0, 0, 0, 0.6);\n      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.15);\n      border: 1px solid #212529;\n      outline: none;\n      font-size: 14px;\n      color: #fff;\n      font-family: \"Work Sans\";\n      text-align: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      padding: 10px 20px;\n      -webkit-transition: all .35s ease-in-out;\n      transition: all .35s ease-in-out; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper:hover {\n        box-shadow: 0px 0px 0 7px rgba(0, 0, 0, 0.15); }\n  .dashbord-bg .dashboard-bg_section .share-link {\n      background-color: rgba(0, 0, 0, 0.6);\n      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.15);\n      padding: 8px;\n      width: 55px;\n      height: 55px;\n      border-radius: 50%;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      -webkit-transition: all .35s ease-in-out;\n      transition: all .35s ease-in-out;\n      border: none;\n      outline: none;\n      transform: scale(1);\n      transition: all .35s ease-in-out; }\n  .dashbord-bg .dashboard-bg_section .share-link:hover {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1); }\n  .dashbord-bg .dashboard-bg_section .share-link::before {\n        content: \"\";\n        display: inline-block;\n        background: url('share-link-icon.png') no-repeat;\n        height: 16px;\n        width: 15px; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper {\n      position: relative;\n      overflow: hidden;\n      display: inline-block; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper .create-photo {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        padding-bottom: 0; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper .create-photo::before {\n          content: \"\";\n          display: inline-block;\n          background: url('create-photo-icon.png') no-repeat;\n          height: 17px;\n          width: 20px;\n          margin-right: 10px; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper input[type=file] {\n        font-size: 25px;\n        position: absolute;\n        left: 0;\n        top: 0;\n        opacity: 0;\n        cursor: pointer; }\n  .dashbord-bg .dashboard-bg_section .upload-btn-wrapper input[type=file]::-webkit-file-upload-button {\n        cursor: pointer; }\n  @media screen and (max-width: 767px) {\n    .dashbord-bg .dashboard-bg_section {\n      -webkit-box-pack: center;\n              justify-content: center; }\n      .dashbord-bg .dashboard-bg_section div:first-child {\n        width: 100%; }\n        .dashbord-bg .dashboard-bg_section div:first-child share-buttons {\n          margin-top: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL2Rhc2hib2FyZC9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxccHJvZmlsZS1wYWdlXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQ0FBc0Q7RUFDdEQsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNkJBQTZCLEVBQUE7RUFUakM7SUFZUSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHNCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQW5CdkI7TUFzQlksb0JBQWE7TUFBYixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLG9DQUFvQztNQUNwQyx5Q0FBeUM7TUFDekMseUJBQXlCO01BQ3pCLGFBQWE7TUFDYixlQUFlO01BQ2YsV0FsQ0E7TUFtQ0Esd0JBQXdCO01BQ3hCLGtCQUFrQjtNQUNsQix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLHdDQUFnQztNQUFoQyxnQ0FBZ0MsRUFBQTtFQW5DNUM7UUFzQ2dCLDZDQUE2QyxFQUFBO0VBdEM3RDtNQTZDWSxvQ0FBb0M7TUFDcEMseUNBQXlDO01BQ3pDLFlBQVk7TUFDWixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQiwyQkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLHdDQUFnQztNQUFoQyxnQ0FBZ0M7TUFDaEMsWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZ0NBQWdDLEVBQUE7RUF4RDVDO1FBMkRnQiw2QkFBcUI7Z0JBQXJCLHFCQUFxQixFQUFBO0VBM0RyQztRQStEZ0IsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixnREFBZ0U7UUFDaEUsWUFBWTtRQUNaLFdBQVcsRUFBQTtFQW5FM0I7TUF5RVksa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixxQkFBcUIsRUFBQTtFQTNFakM7UUE4RWdCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHlCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLGlCQUFpQixFQUFBO0VBaEZqQztVQW1Gb0IsV0FBVztVQUNYLHFCQUFxQjtVQUNyQixrREFBa0U7VUFDbEUsWUFBWTtVQUNaLFdBQVc7VUFDWCxrQkFBa0IsRUFBQTtFQXhGdEM7UUE2RmdCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLE1BQU07UUFDTixVQUFVO1FBQ1YsZUFBZSxFQUFBO0VBbEcvQjtRQXNHZ0IsZUFBZSxFQUFBO0VBSzNCO0lBM0dKO01BNkdZLHdCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtNQTdHbkM7UUFnSGdCLFdBQVcsRUFBQTtRQWhIM0I7VUFtSG9CLGdCQUFnQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1wYWdlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJGJnOiAjMjMyMTI4O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuLmRhc2hib3JkLWJnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9kYXNoYm9hcmQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNzBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG5cclxuICAgIC5kYXNoYm9hcmQtYmdfc2VjdGlvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA5NXB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgJWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTI1Mjk7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZS1pbi1vdXQ7XHJcbiBcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIC5zaGFyZS1saW5rIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3NoYXJlLWxpbmstaWNvbi5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51cGxvYWQtYnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBAZXh0ZW5kICVidXR0b247XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICAgICAgLmNyZWF0ZS1waG90byB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NyZWF0ZS1waG90by1pY29uLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5kYXNoYm9hcmQtYmdfc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIHNoYXJlLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = ".main-header-background {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #232128;\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n  /* Top and Bottom borders go out */ }\n  .main-header-background .header {\n    width: 100%;\n    -webkit-box-align: center;\n            align-items: center;\n    height: 70px; }\n  .main-header-background .header .menu-mobile {\n      width: 280px;\n      text-align: right;\n      right: 0px;\n      position: absolute;\n      top: 0px;\n      background: #2196f3;\n      padding-top: 115px;\n      padding-bottom: 80px;\n      z-index: 1; }\n  .main-header-background .header .menu-mobile .nav-mobile a:not(.active), .main-header-background .header .menu-mobile .nav-mobile a.active {\n        width: 100%;\n        padding: 20px 30px 20px 0px;\n        display: block;\n        font: 14px 'Work Sans', sans-serif;\n        line-height: 18px;\n        color: #fff;\n        font-weight: 600;\n        text-decoration: none;\n        position: relative;\n        z-index: 0;\n        cursor: pointer;\n        background: transparent;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n  .main-header-background .header .menu-mobile .nav-mobile a:hover:not(.active), .main-header-background .header .menu-mobile .nav-mobile a.active:hover {\n          background: #001b5229; }\n  .main-header-background .header .menu-mobile .nav-mobile a:not(.active) li, .main-header-background .header .menu-mobile .nav-mobile a.active li {\n          list-style: none; }\n  .main-header-background .header .menu-mobile .nav-mobile a.active {\n        background: #001b5229; }\n  .main-header-background .header .menu-mobile .bordersOut a.active:before, .main-header-background .header .menu-mobile .bordersOut a.active:after, .main-header-background .header .menu-mobile .bordersOut a:before, .main-header-background .header .menu-mobile .bordersOut a:after {\n        position: absolute;\n        left: 0px;\n        width: 100%;\n        height: 2px;\n        background: #fff;\n        content: \"\";\n        opacity: 0;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s; }\n  .main-header-background .header .menu-mobile .bordersOut a.active:before, .main-header-background .header .menu-mobile .bordersOut a.active:after {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n  .main-header-background .header .menu-mobile .bordersOut a.active:before {\n        top: 0px;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n  .main-header-background .header .menu-mobile .bordersOut a.active:after {\n        bottom: 0px;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n  .main-header-background .header .menu-mobile .bordersOut a:before {\n        top: 0px;\n        -webkit-transform: translateY(10px);\n                transform: translateY(10px); }\n  .main-header-background .header .menu-mobile .bordersOut a:after {\n        bottom: 0px;\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px); }\n  .main-header-background .header .menu-mobile .bordersOut a:hover:before, .main-header-background .header .menu-mobile .bordersOut a:hover:after {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n  .main-header-background .navigation a {\n    display: inline-block;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    text-decoration: none;\n    margin: 0px 10px;\n    padding: 10px 10px;\n    position: relative;\n    z-index: 0;\n    cursor: pointer; }\n  .main-header-background .navigation a li {\n      list-style: none; }\n  .main-header-background .navigation a.active {\n    border-radius: 27px;\n    background-color: #2196f3;\n    text-align: center;\n    padding: 10px 20px; }\n  .main-header-background .topBotomBordersOut a:not(.active):before, .main-header-background .topBotomBordersOut a:not(.active):after {\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 2px;\n    background: #fff;\n    content: \"\";\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .main-header-background .topBotomBordersOut a:not(.active):before {\n    top: 0px;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  .main-header-background .topBotomBordersOut a:not(.active):after {\n    bottom: 0px;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px); }\n  .main-header-background .topBotomBordersOut a:not(.active):hover:before, .main-header-background .topBotomBordersOut a:not(.active):hover:after {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px); }\n  .main-header-background .search-form {\n    display: -webkit-box;\n    display: flex;\n    width: auto;\n    height: 49px; }\n  .main-header-background .search-form:focus-within input[type=\"text\"] {\n      width: 115px;\n      border-bottom: 1px solid #fff;\n      padding: 0 15px 0 10px; }\n  .main-header-background .search-form input[type=\"text\"] {\n      height: 40px;\n      position: relative;\n      font: 14px 'Work Sans', sans-serif;\n      border: none;\n      outline: none;\n      color: #fff;\n      width: 0px;\n      left: 5px;\n      background: none;\n      -webkit-transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n      transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);\n      cursor: text; }\n  .main-header-background .search-form input[type=\"text\"]::-webkit-input-placeholder {\n        color: #ffffff6e; }\n  .main-header-background .search-form input[type=\"text\"]::-moz-placeholder {\n        color: #ffffff6e; }\n  .main-header-background .search-form input[type=\"text\"]::-ms-input-placeholder {\n        color: #ffffff6e; }\n  .main-header-background .search-form input[type=\"text\"]::placeholder {\n        color: #ffffff6e; }\n  .main-header-background .search-form input[type=\"submit\"] {\n      height: 50px;\n      width: 50px;\n      background: url('icon_search.png') center center no-repeat;\n      border: none;\n      position: relative;\n      cursor: pointer;\n      outline: none; }\n  .main-header-background .account {\n    width: 40px;\n    height: 40px;\n    background: url('mike-brown.png') no-repeat;\n    border-radius: 20px;\n    border: 2px solid #6a686d;\n    cursor: pointer;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .main-header-background .account:hover {\n      border: 2px solid #2196f3; }\n  .main-header-background .log-in {\n    text-decoration: none;\n    font: 14px 'Work Sans', sans-serif;\n    line-height: 18px;\n    color: #fff;\n    font-weight: 600;\n    padding: 0px 10px;\n    background: no-repeat;\n    border: none;\n    outline: none;\n    cursor: pointer; }\n  .main-header-background .log-in::before {\n      content: \"\";\n      display: block;\n      background: url('login.png') no-repeat;\n      width: 20px;\n      height: 20px;\n      float: left;\n      margin: 0 6px 0 0; }\n  .main-header-background .menu-small {\n    width: 60px;\n    height: 43px;\n    cursor: pointer; }\n  .main-header-background .menu-small .burger span, .main-header-background .menu-small .burger span:before, .main-header-background .menu-small .burger span:after {\n      display: block;\n      width: 25px;\n      height: 3px;\n      background: #fff;\n      -webkit-transition: all 0.5s;\n      transition: all 0.5s;\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n  .main-header-background .menu-small .burger span {\n      position: relative;\n      margin: 20px 30px;\n      padding: 0%; }\n  .main-header-background .menu-small .burger span:before, .main-header-background .menu-small .burger span:after {\n      position: absolute;\n      content: \"\"; }\n  .main-header-background .menu-small .burger span:before {\n      top: -10px;\n      right: -1px; }\n  .main-header-background .menu-small .burger span:after {\n      top: 9px;\n      right: -1px; }\n  .main-header-background .menu-small .burger .btn.selected, .main-header-background .menu-small .burger .btn.selected:after, .main-header-background .menu-small .burger .btn.selected:before {\n      width: 8px;\n      height: 8px;\n      border-radius: 30px; }\n  .main-header-background .menu-small .burger .btn.selected {\n      opacity: 1;\n      z-index: 2; }\n  .main-header-background .menu-small .burger .btn.selected:before {\n        top: -1px;\n        -webkit-transform: translateX(15px) rotate(0deg);\n                transform: translateX(15px) rotate(0deg); }\n  .main-header-background .menu-small .burger .btn.selected:after {\n        top: -1px;\n        -webkit-transform: translateX(30px) rotate(0deg);\n                transform: translateX(30px) rotate(0deg); }\n  @media screen and (max-width: 1440px) {\n  .menu-large {\n    display: none; }\n  .nav-right {\n    width: 70%; } }\n  @media screen and (min-width: 1441px) {\n  .menu-small {\n    display: none; } }\n  @media screen and (min-width: 801px) {\n  .main-header-background .header .logo-large {\n    display: inline; }\n  .main-header-background .header .logo-small {\n    display: none; } }\n  @media screen and (max-width: 800px) {\n  .main-header-background .header .logo-large {\n    display: none; }\n  .main-header-background .header .logo-small {\n    display: inline; }\n  .main-header-background .header .nav-right .search-form {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL2hlYWRlci9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxccHJvZmlsZS1wYWdlXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG1CQVZRO0VBV1IsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBa0lULGtDQUFBLEVBQW1DO0VBekl4QztJQVVRLFdBQVc7SUFDWCx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQVpwQjtNQWdCWSxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLG1CQXpCRTtNQTBCRixrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLFVBQVUsRUFBQTtFQXhCdEI7UUE0Qm9CLFdBQVc7UUFDWCwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLGtDQUFrQztRQUNsQyxpQkFBaUI7UUFDakIsV0F0Q1I7UUF1Q1EsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsNEJBQW9CO1FBQXBCLG9CQUFvQixFQUFBO0VBeEN4QztVQTJDd0IscUJBQXFCLEVBQUE7RUEzQzdDO1VBK0N3QixnQkFBZ0IsRUFBQTtFQS9DeEM7UUF5RG9CLHFCQUFxQixFQUFBO0VBekR6QztRQThEZ0Isa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsV0FBVztRQUNYLGdCQXZFSjtRQXdFSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLDRCQUFvQjtRQUFwQixvQkFBb0IsRUFBQTtFQXJFcEM7UUEwRWdCLFVBQVU7UUFDVixrQ0FBMEI7Z0JBQTFCLDBCQUEwQixFQUFBO0VBM0UxQztRQStFZ0IsUUFBUTtRQUNSLGtDQUEwQjtnQkFBMUIsMEJBQTBCLEVBQUE7RUFoRjFDO1FBb0ZnQixXQUFXO1FBQ1gsa0NBQTBCO2dCQUExQiwwQkFBMEIsRUFBQTtFQXJGMUM7UUE2RmdCLFFBQVE7UUFDUixtQ0FBMkI7Z0JBQTNCLDJCQUEyQixFQUFBO0VBOUYzQztRQWtHZ0IsV0FBVztRQUNYLG9DQUE0QjtnQkFBNUIsNEJBQTRCLEVBQUE7RUFuRzVDO1FBdUdnQixVQUFVO1FBQ1Ysa0NBQTBCO2dCQUExQiwwQkFBMEIsRUFBQTtFQXhHMUM7SUFnSFkscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsV0F4SEE7SUF5SEEsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZSxFQUFBO0VBMUgzQjtNQTZIZ0IsZ0JBQWdCLEVBQUE7RUE3SGhDO0lBa0lZLG1CQUFtQjtJQUNuQix5QkF2SUU7SUF3SUYsa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFBO0VBckk5QjtJQTJJUSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBcEpJO0lBcUpKLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNEJBQW9CO0lBQXBCLG9CQUFvQixFQUFBO0VBbEo1QjtJQXNKUSxRQUFRO0lBQ1IsbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBO0VBdkpuQztJQTJKUSxXQUFXO0lBQ1gsb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBNUpwQztJQWdLUSxVQUFVO0lBQ1Ysa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBaktsQztJQXFLUSxvQkFBYTtJQUFiLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBdktwQjtNQTJLZ0IsWUFBWTtNQUNaLDZCQWpMSjtNQWtMSSxzQkFBc0IsRUFBQTtFQTdLdEM7TUFrTFksWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixrQ0FBa0M7TUFDbEMsWUFBWTtNQUNaLGFBQWE7TUFDYixXQTVMQTtNQTZMQSxVQUFVO01BQ1YsU0FBUztNQUNULGdCQUFnQjtNQUNoQiwyREFBOEQ7TUFBOUQsbURBQThEO01BQzlELFlBQVksRUFBQTtFQTVMeEI7UUErTGdCLGdCQUFnQixFQUFBO0VBL0xoQztRQStMZ0IsZ0JBQWdCLEVBQUE7RUEvTGhDO1FBK0xnQixnQkFBZ0IsRUFBQTtFQS9MaEM7UUErTGdCLGdCQUFnQixFQUFBO0VBL0xoQztNQXNNWSxZQUFZO01BQ1osV0FBVztNQUNYLDBEQUEwRTtNQUMxRSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGVBQWU7TUFDZixhQUFhLEVBQUE7RUE1TXpCO0lBaU5RLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkNBQTJEO0lBQzNELG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDRCQUFvQjtJQUFwQixvQkFBb0IsRUFBQTtFQXZONUI7TUEwTlkseUJBQXlCLEVBQUE7RUExTnJDO0lBK05RLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLFdBdk9JO0lBd09KLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZSxFQUFBO0VBeE92QjtNQTJPWSxXQUFXO01BQ1gsY0FBYztNQUNkLHNDQUFzRDtNQUN0RCxXQUFXO01BQ1gsWUFBWTtNQUNaLFdBQVc7TUFDWCxpQkFBaUIsRUFBQTtFQWpQN0I7SUF1UFEsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlLEVBQUE7RUF6UHZCO01BOFBnQixjQUFjO01BQ2QsV0FBVztNQUNYLFdBQVc7TUFDWCxnQkF0UUo7TUF1UUksNEJBQW9CO01BQXBCLG9CQUFvQjtNQUNwQixtQ0FBMkI7Y0FBM0IsMkJBQTJCLEVBQUE7RUFuUTNDO01BdVFnQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLFdBQVcsRUFBQTtFQXpRM0I7TUE2UWdCLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7RUE5UTNCO01Ba1JnQixVQUFVO01BQ1YsV0FBVyxFQUFBO0VBblIzQjtNQXVSZ0IsUUFBUTtNQUNSLFdBQVcsRUFBQTtFQXhSM0I7TUE0UmdCLFVBQVU7TUFDVixXQUFXO01BQ1gsbUJBQW1CLEVBQUE7RUE5Um5DO01Ba1NnQixVQUFVO01BQ1YsVUFBVSxFQUFBO0VBblMxQjtRQXNTb0IsU0FBUztRQUNULGdEQUF3QztnQkFBeEMsd0NBQXdDLEVBQUE7RUF2UzVEO1FBMlNvQixTQUFTO1FBQ1QsZ0RBQXdDO2dCQUF4Qyx3Q0FBd0MsRUFBQTtFQU81RDtFQUNJO0lBQ0ksYUFBYSxFQUFBO0VBR2pCO0lBQ0ksVUFBVSxFQUFBLEVBQ2I7RUFHTDtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCO0VBR0w7RUFDSTtJQUdZLGVBQWUsRUFBQTtFQUgzQjtJQU9ZLGFBQWEsRUFBQSxFQUNoQjtFQUtiO0VBYkk7SUFpQlksYUFBYSxFQUFBO0VBakJ6QjtJQXFCWSxlQUFlLEVBQUE7RUFQM0I7SUFZZ0IsYUFBYSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1wYWdlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yczpcclxuJGJnOiAjMjMyMTI4O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kZ3JlZW46ICM3ZmM0MDA7XHJcbiRibGFjay10ZXh0OiAjMDQxNDIxO1xyXG5cclxuLm1haW4taGVhZGVyLWJhY2tncm91bmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogJGJnO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcblxyXG5cclxuICAgICAgICAubWVudS1tb2JpbGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgICAgIC5uYXYtbW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICVhY3RpdmUtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAxYjUyMjk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYTpub3QoLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWFjdGl2ZS1saW5rO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGEuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVhY3RpdmUtbGluaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAxYjUyMjk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICVib3JkZXJzT3V0LWJlZm9yZS1hZnRlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJvcmRlcnNPdXQgYS5hY3RpdmU6YmVmb3JlLCAuYm9yZGVyc091dCBhLmFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kICVib3JkZXJzT3V0LWJlZm9yZS1hZnRlcjtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJvcmRlcnNPdXQgYS5hY3RpdmU6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3JkZXJzT3V0IGEuYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3JkZXJzT3V0IGE6YmVmb3JlLCAuYm9yZGVyc091dCBhOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIEBleHRlbmQgJWJvcmRlcnNPdXQtYmVmb3JlLWFmdGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC5ib3JkZXJzT3V0IGE6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC5ib3JkZXJzT3V0IGE6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC5ib3JkZXJzT3V0IGE6aG92ZXI6YmVmb3JlLCAuYm9yZGVyc091dCBhOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmF2aWdhdGlvbiB7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI3cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIC8qIFRvcCBhbmQgQm90dG9tIGJvcmRlcnMgZ28gb3V0ICovXHJcbiAgICAudG9wQm90b21Cb3JkZXJzT3V0IGE6bm90KC5hY3RpdmUpOmJlZm9yZSwgLnRvcEJvdG9tQm9yZGVyc091dCBhOm5vdCguYWN0aXZlKTphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgfVxyXG5cclxuICAgIC50b3BCb3RvbUJvcmRlcnNPdXQgYTpub3QoLmFjdGl2ZSk6YmVmb3JlIHtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcEJvdG9tQm9yZGVyc091dCBhOm5vdCguYWN0aXZlKTphZnRlciB7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAudG9wQm90b21Cb3JkZXJzT3V0IGE6bm90KC5hY3RpdmUpOmhvdmVyOmJlZm9yZSwgLnRvcEJvdG9tQm9yZGVyc091dCBhOm5vdCguYWN0aXZlKTpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWZvcm17XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDQ5cHg7XHJcblxyXG4gICAgICAgICY6Zm9jdXMtd2l0aGluIHtcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuNHMgY3ViaWMtYmV6aWVyKDAuMDAwLCAwLjc5NSwgMC4wMDAsIDEuMDAwKTtcclxuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG5cclxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljb25fc2VhcmNoLnBuZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWNjb3VudCB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL21pa2UtYnJvd24ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzZhNjg2ZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjE5NmYzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9nLWluIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udDogMTRweCAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dpbi5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDZweCAwIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAubWVudS1zbWFsbCB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgLmJ1cmdlciB7XHJcblxyXG4gICAgICAgICAgICBzcGFuLCBzcGFuOmJlZm9yZSwgc3BhbjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHNwYW46YmVmb3JlLCBzcGFuOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBzcGFuOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBzcGFuOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idG4uc2VsZWN0ZWQsIC5idG4uc2VsZWN0ZWQ6YWZ0ZXIgLC5idG4uc2VsZWN0ZWQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnRuLnNlbGVjdGVkIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKDBkZWcpOyBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAubWVudS1sYXJnZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIHtcclxuICAgIC5tZW51LXNtYWxse1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KSB7XHJcbiAgICAubWFpbi1oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIC5sb2dvLWxhcmdlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ28tc21hbGwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5tYWluLWhlYWRlci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgLmxvZ28tbGFyZ2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ28tc21hbGwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LXJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1mb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
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
        this.router.navigate(['/main']);
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
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = ".information-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f6f6f6;\n  padding: 40px; }\n  .information-bg .information_section {\n    width: 1170px;\n    border-radius: 6px;\n    background-color: white;\n    padding: 30px 25px;\n    border-radius: 6px;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.12); }\n  .information-bg .information_section .main-content {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      padding-bottom: 50px; }\n  .information-bg .information_section .main-content div {\n        width: 320px; }\n  .information-bg .information_section .main-content div span {\n          font-size: 18px;\n          line-height: 42px;\n          color: #041421;\n          font-family: \"Work Sans\";\n          font-weight: 600; }\n  .information-bg .information_section .main-content div div span {\n          font-size: 14px;\n          color: #6a696f;\n          font-weight: 400;\n          line-height: 24px; }\n  .information-bg .information_section .main-content div .social-icons img {\n          padding-right: 10px;\n          cursor: pointer; }\n  @media screen and (max-width: 768px) {\n        .information-bg .information_section .main-content div {\n          width: 100%; } }\n  .information-bg .information_section .addInform {\n      text-align: center; }\n  .information-bg .information_section .addInform button {\n        padding: 15px 20px;\n        font-size: 16px;\n        line-height: 18px;\n        color: #c1c1c1;\n        font-family: \"Work Sans\";\n        font-weight: 600;\n        background: transparent;\n        border-radius: 30px;\n        border: 2px solid #dcdcdd;\n        outline: none;\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s; }\n  .information-bg .information_section .addInform button:hover {\n          border: 2px solid #2196f3; }\n  .information-bg .information_section .addInform button span::before {\n          content: \"\";\n          display: inline-block;\n          background: url('add-information.png') no-repeat;\n          width: 17px;\n          height: 19px;\n          margin-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL2luZm9ybWF0aW9uLXNlY3Rpb24vSDpcXFZpa2FcXGZyb250ZW5kXFxzcGVlZFBhaW50aW5nXFxzcC1hcHAvc3JjXFxhcHBcXHByb2ZpbGUtcGFnZVxcaW5mb3JtYXRpb24tc2VjdGlvblxcaW5mb3JtYXRpb24tc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtQkFQUTtFQVFSLGFBQWEsRUFBQTtFQUxqQjtJQVFRLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUNBQW9DLEVBQUE7RUFiNUM7TUFnQlksb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZTtNQUNmLHlCQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIsb0JBQW9CLEVBQUE7RUFuQmhDO1FBc0JnQixZQUFZLEVBQUE7RUF0QjVCO1VBeUJvQixlQUFlO1VBQ2YsaUJBQWlCO1VBQ2pCLGNBQWM7VUFDZCx3QkFBd0I7VUFDeEIsZ0JBQWdCLEVBQUE7RUE3QnBDO1VBa0N3QixlQUFlO1VBQ2YsY0FBYztVQUNkLGdCQUFnQjtVQUNoQixpQkFBaUIsRUFBQTtFQXJDekM7VUE0Q3dCLG1CQUFtQjtVQUNuQixlQUFlLEVBQUE7RUFLM0I7UUFsRFo7VUFvRG9CLFdBQVcsRUFBQSxFQUVkO0VBdERqQjtNQTJEWSxrQkFBa0IsRUFBQTtFQTNEOUI7UUE4RGdCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLGFBQWE7UUFDYiw0QkFBb0I7UUFBcEIsb0JBQW9CLEVBQUE7RUF4RXBDO1VBMkVtQix5QkE3RUwsRUFBQTtFQUVkO1VBZ0Z3QixXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLGdEQUFnRTtVQUNoRSxXQUFXO1VBQ1gsWUFBWTtVQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1wYWdlL2luZm9ybWF0aW9uLXNlY3Rpb24vaW5mb3JtYXRpb24tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZzogI2Y2ZjZmNjtcclxuJGJsdWU6ICMyMTk2ZjM7XHJcblxyXG4uaW5mb3JtYXRpb24tYmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcblxyXG4gICAgLmluZm9ybWF0aW9uX3NlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMTcwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG5cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwNDE0MjE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNmE2OTZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGRJbmZvcm0ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2MxYzFjMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkY2RjZGQ7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2FkZC1pbmZvcm1hdGlvbi5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = ".main-content_bg {\n  background: #f6f6f6;\n  text-align: center;\n  padding-bottom: 30px; }\n  .main-content_bg div {\n    padding: 0px 40px; }\n  .main-content_bg div button {\n      width: 124px;\n      border-radius: 25px;\n      background-color: #f6f6f6;\n      border: 2px solid #dcdcdd;\n      padding: 10px;\n      outline: none;\n      font-size: 15px;\n      line-height: 18px;\n      color: #c1c1c1;\n      font-family: \"Work Sans\";\n      font-weight: 600;\n      margin: 10px;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s; }\n  .main-content_bg div button:hover {\n        border: 2px solid #2196f3;\n        color: #2196f3; }\n  .main-content_bg div button.active {\n      border: 2px solid #2196f3;\n      color: #2196f3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL21haW4tY29udGVudC9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxccHJvZmlsZS1wYWdlXFxtYWluLWNvbnRlbnRcXG1haW4tY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLG1CQU5RO0VBT1Isa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBO0VBSHhCO0lBTVEsaUJBQWlCLEVBQUE7RUFOekI7TUFTWSxZQUFZO01BQ1osbUJBQW1CO01BQ25CLHlCQWhCQTtNQWlCQSx5QkFmSTtNQWdCSixhQUFhO01BQ2IsYUFBYTtNQUNiLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FuQkU7TUFvQkYsd0JBQXdCO01BQ3hCLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osNEJBQW9CO01BQXBCLG9CQUFvQixFQUFBO0VBckJoQztRQXdCZ0IseUJBNUJGO1FBNkJFLGNBN0JGLEVBQUE7RUFJZDtNQThCWSx5QkFsQ0U7TUFtQ0YsY0FuQ0UsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcGFnZS9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjZjZmNmY2O1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGJvcmRlcjogI2RjZGNkZDtcclxuJHRleHQ6ICNjMWMxYzE7XHJcblxyXG4ubWFpbi1jb250ZW50X2JnIHtcclxuICAgIGJhY2tncm91bmQ6ICRiZztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDQwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRib3JkZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24uYWN0aXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = ".projects-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f6f6f6;\n  padding: 0 40px 50px; }\n  .projects-bg .projects {\n    width: 100%;\n    max-width: 1170px; }\n  .projects-bg .projects .projects-content {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center; }\n  .projects-bg .projects .projects-content .project-item {\n        width: 256px;\n        border-radius: 6px;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.12);\n        background: white;\n        margin: 10px; }\n  .projects-bg .projects .projects-content .project-item .project-image {\n          height: 210px;\n          background-repeat: no-repeat;\n          border-radius: 6px 6px 0 0;\n          padding: 15px 15px 0;\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-pack: end;\n                  justify-content: flex-end;\n          -webkit-box-align: end;\n                  align-items: flex-end; }\n  .projects-bg .projects .projects-content .project-item .project-image .share-course, .projects-bg .projects .projects-content .project-item .project-image .play-course {\n            display: -webkit-box;\n            display: flex;\n            position: relative;\n            -webkit-box-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                    align-items: center;\n            box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n            background-color: white;\n            float: right;\n            cursor: pointer; }\n  .projects-bg .projects .projects-content .project-item .project-image .share-course {\n            width: 34px;\n            height: 34px;\n            border-radius: 17px;\n            margin-right: 10px;\n            top: 15px; }\n  .projects-bg .projects .projects-content .project-item .project-image .play-course {\n            width: 42px;\n            height: 42px;\n            border-radius: 21px;\n            top: 20px; }\n  .projects-bg .projects .projects-content .project-item .project-text {\n          padding: 15px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-name {\n            font-size: 14px;\n            line-height: 18px;\n            color: #1c1a22;\n            font-family: \"Work Sans\";\n            font-weight: 600; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user {\n            padding: 15px 0; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user img {\n              width: 42px;\n              height: 42px;\n              border-radius: 21px;\n              box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n              background-color: white;\n              margin-right: 10px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user span {\n              font-size: 14px;\n              line-height: 22px;\n              color: #1c1a22;\n              font-family: \"Open Sans\";\n              font-weight: 400; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social {\n            font-size: 12px;\n            line-height: 22px;\n            color: #b9b8bc;\n            font-family: \"Open Sans\";\n            font-weight: 600; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social span {\n              margin-right: 15px;\n              display: -webkit-inline-box;\n              display: inline-flex;\n              -webkit-box-align: center;\n                      align-items: center; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .revision::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('views.png') no-repeat;\n              background-size: cover;\n              width: 19px;\n              height: 12px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .like::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('appreciations.png') no-repeat;\n              background-size: cover;\n              width: 13px;\n              height: 12px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .comment::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('comment.png') no-repeat;\n              background-size: cover;\n              width: 12px;\n              height: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL3Byb2plY3Qtc2VjdGlvbi9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxccHJvZmlsZS1wYWdlXFxwcm9qZWN0LXNlY3Rpb25cXHByb2plY3Qtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtQkFOUTtFQU9SLG9CQUFvQixFQUFBO0VBTHhCO0lBUVEsV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBVHpCO01BWVksb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZTtNQUNmLHdCQUF1QjtjQUF2Qix1QkFBdUIsRUFBQTtFQWRuQztRQWlCZ0IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix1Q0FBb0M7UUFDcEMsaUJBQWlCO1FBQ2pCLFlBQVksRUFBQTtFQXJCNUI7VUF3Qm9CLGFBQWE7VUFDYiw0QkFBNEI7VUFDNUIsMEJBQTBCO1VBQzFCLG9CQUFvQjtVQUNwQixvQkFBYTtVQUFiLGFBQWE7VUFDYixxQkFBeUI7a0JBQXpCLHlCQUF5QjtVQUN6QixzQkFBcUI7a0JBQXJCLHFCQUFxQixFQUFBO0VBOUJ6QztZQWlDd0Isb0JBQWE7WUFBYixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLHdCQUF1QjtvQkFBdkIsdUJBQXVCO1lBQ3ZCLHlCQUFtQjtvQkFBbkIsbUJBQW1CO1lBQ25CLHVDQUFvQztZQUNwQyx1QkFBdUI7WUFDdkIsWUFBWTtZQUNaLGVBQWUsRUFBQTtFQXhDdkM7WUE2Q3dCLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixTQUFTLEVBQUE7RUFqRGpDO1lBc0R3QixXQUFXO1lBQ1gsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixTQUFTLEVBQUE7RUF6RGpDO1VBOERvQixhQUFhLEVBQUE7RUE5RGpDO1lBaUV3QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUE7RUFyRXhDO1lBeUV3QixlQUFlLEVBQUE7RUF6RXZDO2NBNEU0QixXQUFXO2NBQ1gsWUFBWTtjQUNaLG1CQUFtQjtjQUNuQix1Q0FBb0M7Y0FDcEMsdUJBQXVCO2NBQ3ZCLGtCQUFrQixFQUFBO0VBakY5QztjQXFGNEIsZUFBZTtjQUNmLGlCQUFpQjtjQUNqQixjQUFjO2NBQ2Qsd0JBQXdCO2NBQ3hCLGdCQUFnQixFQUFBO0VBekY1QztZQThGd0IsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsd0JBQXdCO1lBQ3hCLGdCQUFnQixFQUFBO0VBbEd4QztjQXFHNEIsa0JBQWtCO2NBQ2xCLDJCQUFvQjtjQUFwQixvQkFBb0I7Y0FDcEIseUJBQW1CO3NCQUFuQixtQkFBbUIsRUFBQTtFQXZHL0M7Y0E2R2dDLFdBQVc7Y0FDWCxxQkFBcUI7Y0FDckIsaUJBQWlCO2NBQ2pCLHNDQUFzRDtjQUN0RCxzQkFBc0I7Y0FDdEIsV0FBVztjQUNYLFlBQVksRUFBQTtFQW5INUM7Y0EySGdDLFdBQVc7Y0FDWCxxQkFBcUI7Y0FDckIsaUJBQWlCO2NBQ2pCLDhDQUE4RDtjQUM5RCxzQkFBc0I7Y0FDdEIsV0FBVztjQUNYLFlBQVksRUFBQTtFQWpJNUM7Y0F3SWdDLFdBQVc7Y0FDWCxxQkFBcUI7Y0FDckIsaUJBQWlCO2NBQ2pCLHdDQUF3RDtjQUN4RCxzQkFBc0I7Y0FDdEIsV0FBVztjQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcGFnZS9wcm9qZWN0LXNlY3Rpb24vcHJvamVjdC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjZjZmNmY2O1xyXG5cclxuLnByb2plY3RzLWJnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHggNTBweDtcclxuXHJcbiAgICAucHJvamVjdHMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG5cclxuICAgICAgICAucHJvamVjdHMtY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAucHJvamVjdC1pdGVtIHsgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLDAsMCwwLjEyKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvamVjdC1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICVwcm9qZWN0LWltYWdlLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwwLDAsMC4xMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaGFyZS1jb3Vyc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVwcm9qZWN0LWltYWdlLWljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBsYXktY291cnNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGV4dGVuZCAlcHJvamVjdC1pbWFnZS1pY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFjMWEyMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdC11c2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLDAsMCwwLjEzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYzFhMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LXNvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjliOGJjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmV2aXNpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3ZpZXdzLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGlrZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9hcHByZWNpYXRpb25zLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbW1lbnQge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvY29tbWVudC5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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

module.exports = ".user-inform-bg {\n  background: #f6f6f6;\n  padding: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .user-inform-bg .user-inform_section {\n    display: -webkit-box;\n    display: flex;\n    width: 1170px;\n    -webkit-box-align: baseline;\n            align-items: baseline;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    flex-wrap: wrap;\n    background: white;\n    padding: 25px; }\n  .user-inform-bg .user-inform_section .user-logo {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      flex-wrap: wrap; }\n  @media screen and (max-width: 671px) {\n        .user-inform-bg .user-inform_section .user-logo {\n          -webkit-box-pack: center;\n                  justify-content: center;\n          width: 100%; } }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_photo img {\n        width: 110px;\n        height: 110px;\n        border-radius: 55px;\n        margin-right: 25px; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_photo .status.PRO {\n        position: relative;\n        bottom: 15px;\n        left: 25px;\n        width: -webkit-fit-content;\n        width: -moz-fit-content;\n        width: fit-content;\n        padding: 3px 10px;\n        border-radius: 6px;\n        color: white;\n        background: #2196f3; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(1), .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(3), .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(5) {\n        line-height: 25px;\n        color: #1c1a22;\n        font-family: \"Open Sans\";\n        font-weight: 600; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(1) {\n        font-size: 18px; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(3) {\n        font-size: 14px; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(5) {\n        font-size: 14px;\n        color: #6a696f;\n        font-weight: 400; }\n  .user-inform-bg .user-inform_section .user-logo .user-logo_name span:nth-child(5)::before {\n          content: \"\";\n          display: inline-block;\n          background: url('location.png') no-repeat;\n          width: 10px;\n          height: 18px;\n          padding-right: 15px;\n          position: relative;\n          top: 5px; }\n  .user-inform-bg .user-inform_section .statistic {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      flex-wrap: wrap; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element {\n        padding: 0 20px; }\n  @media screen and (max-width: 671px) {\n          .user-inform-bg .user-inform_section .statistic .statistic_element {\n            width: 50%; } }\n  @media screen and (max-width: 435px) {\n          .user-inform-bg .user-inform_section .statistic .statistic_element {\n            width: 100%; } }\n  .user-inform-bg .user-inform_section .statistic .statistic_element div:nth-child(1) {\n          font-size: 15px;\n          line-height: 42px;\n          color: #232128;\n          font-family: \"Work Sans\";\n          font-weight: 600;\n          text-align: center; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element div:nth-child(2) {\n          font-size: 14px;\n          color: #6a696f;\n          font-family: \"Open Sans\";\n          text-align: right;\n          padding: 5px; }\n  @media screen and (max-width: 671px) {\n            .user-inform-bg .user-inform_section .statistic .statistic_element div:nth-child(2) {\n              text-align: center; } }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .views::before, .user-inform-bg .user-inform_section .statistic .statistic_element .appreciations::before, .user-inform-bg .user-inform_section .statistic .statistic_element .following::before, .user-inform-bg .user-inform_section .statistic .statistic_element .followers::before {\n          content: \"\";\n          display: inline-block;\n          height: 27px;\n          position: relative;\n          top: 9px;\n          margin-right: 10px; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .views::before {\n          background: url('views.png') no-repeat;\n          width: 40px; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .appreciations::before {\n          background: url('appreciations.png') no-repeat;\n          width: 27px; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .following::before {\n          background: url('following.png') no-repeat;\n          width: 32px; }\n  .user-inform-bg .user-inform_section .statistic .statistic_element .followers::before {\n          background: url('followers.png') no-repeat;\n          width: 32px; }\n  .user-inform-bg .user-inform_section .countProject {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n              justify-content: space-between; }\n  @media screen and (max-width: 671px) {\n        .user-inform-bg .user-inform_section .countProject {\n          width: 100%;\n          -webkit-box-pack: center;\n                  justify-content: center; } }\n  .user-inform-bg .user-inform_section .countProject .countProject_element {\n        padding: 0 20px; }\n  .user-inform-bg .user-inform_section .countProject .countProject_element div:nth-child(1) {\n          font-size: 15px;\n          line-height: 42px;\n          color: #232128;\n          font-family: \"Work Sans\";\n          font-weight: 600;\n          text-align: center; }\n  .user-inform-bg .user-inform_section .countProject .countProject_element div:nth-child(2) {\n          font-size: 36px;\n          color: #2196f3;\n          font-family: \"Open Sans\";\n          padding: 5px;\n          text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1wYWdlL3VzZXItaW5mb3JtYXRpb24vSDpcXFZpa2FcXGZyb250ZW5kXFxzcGVlZFBhaW50aW5nXFxzcC1hcHAvc3JjXFxhcHBcXHByb2ZpbGUtcGFnZVxcdXNlci1pbmZvcm1hdGlvblxcdXNlci1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLG1CQU5RO0VBT1IsYUFBYTtFQUNiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUozQjtJQU9RLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhLEVBQUE7RUFickI7TUFpQlksb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix5QkFBOEI7Y0FBOUIsOEJBQThCO01BQzlCLGVBQWUsRUFBQTtFQUVmO1FBdEJaO1VBdUJnQix3QkFBdUI7a0JBQXZCLHVCQUF1QjtVQUN2QixXQUFXLEVBQUEsRUE0RGxCO0VBcEZUO1FBOEJvQixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixrQkFBa0IsRUFBQTtFQWpDdEM7UUFxQ29CLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osVUFBVTtRQUNWLDBCQUFrQjtRQUFsQix1QkFBa0I7UUFBbEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLG1CQWhETixFQUFBO0VBSWQ7UUFpRGdCLGlCQUFpQjtRQUNqQixjQXJERTtRQXNERix3QkFBd0I7UUFDeEIsZ0JBQWdCLEVBQUE7RUFwRGhDO1FBMERvQixlQUFlLEVBQUE7RUExRG5DO1FBK0RvQixlQUFlLEVBQUE7RUEvRG5DO1FBb0VvQixlQUFlO1FBQ2YsY0F2RUQ7UUF3RUMsZ0JBQWdCLEVBQUE7RUF0RXBDO1VBeUV3QixXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLHlDQUF5RDtVQUN6RCxXQUFXO1VBQ1gsWUFBWTtVQUNaLG1CQUFtQjtVQUNuQixrQkFBa0I7VUFDbEIsUUFBUSxFQUFBO0VBaEZoQztNQXVGWSxvQkFBYTtNQUFiLGFBQWE7TUFDYix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLHlCQUE4QjtjQUE5Qiw4QkFBOEI7TUFDOUIsZUFBZSxFQUFBO0VBMUYzQjtRQTZGZ0IsZUFBZSxFQUFBO0VBRWY7VUEvRmhCO1lBZ0dvQixVQUFVLEVBQUEsRUFxRWpCO0VBbEVHO1VBbkdoQjtZQW9Hb0IsV0FBVyxFQUFBLEVBaUVsQjtFQXJLYjtVQXdHb0IsZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixjQUFjO1VBQ2Qsd0JBQXdCO1VBQ3hCLGdCQUFnQjtVQUNoQixrQkFBa0IsRUFBQTtFQTdHdEM7VUFpSG9CLGVBQWU7VUFDZixjQXBIRDtVQXFIQyx3QkFBd0I7VUFDeEIsaUJBQWlCO1VBQ2pCLFlBQVksRUFBQTtFQUVaO1lBdkhwQjtjQXdId0Isa0JBQWtCLEVBQUEsRUFHekI7RUEzSGpCO1VBOEhvQixXQUFXO1VBQ1gscUJBQXFCO1VBQ3JCLFlBQVk7VUFDWixrQkFBa0I7VUFDbEIsUUFBUTtVQUNSLGtCQUFrQixFQUFBO0VBbkl0QztVQXlJd0Isc0NBQXNEO1VBQ3RELFdBQVcsRUFBQTtFQTFJbkM7VUFpSndCLDhDQUE4RDtVQUM5RCxXQUFXLEVBQUE7RUFsSm5DO1VBeUp3QiwwQ0FBMEQ7VUFDMUQsV0FBVyxFQUFBO0VBMUpuQztVQWlLd0IsMENBQTBEO1VBQzFELFdBQVcsRUFBQTtFQWxLbkM7TUF5S1ksb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZTtNQUNmLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIseUJBQThCO2NBQTlCLDhCQUE4QixFQUFBO0VBRTlCO1FBOUtaO1VBK0tnQixXQUFXO1VBQ1gsd0JBQXVCO2tCQUF2Qix1QkFBdUIsRUFBQSxFQXVCOUI7RUF2TVQ7UUFvTGdCLGVBQWUsRUFBQTtFQXBML0I7VUF1TG9CLGVBQWU7VUFDZixpQkFBaUI7VUFDakIsY0FBYztVQUNkLHdCQUF3QjtVQUN4QixnQkFBZ0I7VUFDaEIsa0JBQWtCLEVBQUE7RUE1THRDO1VBZ01vQixlQUFlO1VBQ2YsY0FyTU47VUFzTU0sd0JBQXdCO1VBQ3hCLFlBQVk7VUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtcGFnZS91c2VyLWluZm9ybWF0aW9uL3VzZXItaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmc6ICNmNmY2ZjY7XHJcbiRibHVlOiAjMjE5NmYzO1xyXG4kYm9sZC10ZXh0OiMxYzFhMjI7XHJcbiRncmV5LXRleHQ6ICM2YTY5NmY7XHJcblxyXG4udXNlci1pbmZvcm0tYmcge1xyXG4gICAgYmFja2dyb3VuZDogJGJnO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAudXNlci1pbmZvcm1fc2VjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTE3MHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcblxyXG5cclxuICAgICAgICAudXNlci1sb2dvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzFweCkge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItbG9nb19waG90byB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN0YXR1cy5QUk8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJXVzZXJOYW1lRm9udCB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYm9sZC10ZXh0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci1sb2dvX25hbWUge1xyXG4gICAgICAgICAgICAgICAgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXVzZXJOYW1lRm9udDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXVzZXJOYW1lRm9udDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXVzZXJOYW1lRm9udDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5LXRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9sb2NhdGlvbi5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RhdGlzdGljIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAuc3RhdGlzdGljX2VsZW1lbnQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIzMjEyODtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5LXRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzFweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAlYmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudmlld3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWJlZm9yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmlld3MucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFwcHJlY2lhdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWJlZm9yZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYXBwcmVjaWF0aW9ucy5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9sbG93aW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICViZWZvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbGxvd2luZy5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9sbG93ZXJzIHtcclxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICViZWZvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ZvbGxvd2Vycy5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdW50UHJvamVjdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcxcHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb3VudFByb2plY3RfZWxlbWVudCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjMyMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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

module.exports = ".projects-bg {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f6f6f6;\n  padding: 100px 40px 50px; }\n  .projects-bg .projects {\n    width: 100%; }\n  .projects-bg .projects .projects-content {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: center;\n              justify-content: center; }\n  .projects-bg .projects .projects-content .project-item {\n        width: 256px;\n        border-radius: 6px;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.12);\n        background: white;\n        margin: 10px; }\n  .projects-bg .projects .projects-content .project-item .project-image {\n          height: 210px;\n          background-repeat: no-repeat;\n          border-radius: 6px 6px 0 0;\n          padding: 15px 15px 0;\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-pack: end;\n                  justify-content: flex-end;\n          -webkit-box-align: end;\n                  align-items: flex-end; }\n  .projects-bg .projects .projects-content .project-item .project-image .share-course, .projects-bg .projects .projects-content .project-item .project-image .play-course {\n            display: -webkit-box;\n            display: flex;\n            position: relative;\n            -webkit-box-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                    align-items: center;\n            box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n            background-color: white;\n            float: right;\n            cursor: pointer; }\n  .projects-bg .projects .projects-content .project-item .project-image .share-course {\n            width: 34px;\n            height: 34px;\n            border-radius: 17px;\n            margin-right: 10px;\n            top: 15px; }\n  .projects-bg .projects .projects-content .project-item .project-image .play-course {\n            width: 42px;\n            height: 42px;\n            border-radius: 21px;\n            top: 20px; }\n  .projects-bg .projects .projects-content .project-item .project-text {\n          padding: 15px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-name {\n            font-size: 14px;\n            line-height: 18px;\n            color: #1c1a22;\n            font-family: \"Work Sans\";\n            font-weight: 600; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user {\n            padding: 15px 0; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user img {\n              width: 42px;\n              height: 42px;\n              border-radius: 21px;\n              box-shadow: 0 0 3px rgba(0, 0, 0, 0.13);\n              background-color: white;\n              margin-right: 10px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-user span {\n              font-size: 14px;\n              line-height: 22px;\n              color: #1c1a22;\n              font-family: \"Open Sans\";\n              font-weight: 400; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social {\n            font-size: 12px;\n            line-height: 22px;\n            color: #b9b8bc;\n            font-family: \"Open Sans\";\n            font-weight: 600; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social span {\n              margin-right: 15px;\n              display: -webkit-inline-box;\n              display: inline-flex;\n              -webkit-box-align: center;\n                      align-items: center; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .revision::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('views.png') no-repeat;\n              background-size: cover;\n              width: 19px;\n              height: 12px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .like::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('appreciations.png') no-repeat;\n              background-size: cover;\n              width: 13px;\n              height: 12px; }\n  .projects-bg .projects .projects-content .project-item .project-text .project-social .comment::before {\n              content: \"\";\n              display: inline-block;\n              margin-right: 5px;\n              background: url('comment.png') no-repeat;\n              background-size: cover;\n              width: 12px;\n              height: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMtcGFnZS9wcm9qZWN0LWNvbnRlbnQvSDpcXFZpa2FcXGZyb250ZW5kXFxzcGVlZFBhaW50aW5nXFxzcC1hcHAvc3JjXFxhcHBcXHByb2plY3RzLXBhZ2VcXHByb2plY3QtY29udGVudFxccHJvamVjdC1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG1CQU5RO0VBT1Isd0JBQXdCLEVBQUE7RUFMNUI7SUFRUSxXQUFXLEVBQUE7RUFSbkI7TUFXWSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2Ysd0JBQXVCO2NBQXZCLHVCQUF1QixFQUFBO0VBYm5DO1FBZ0JnQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHVDQUFvQztRQUNwQyxpQkFBaUI7UUFDakIsWUFBWSxFQUFBO0VBcEI1QjtVQXVCb0IsYUFBYTtVQUNiLDRCQUE0QjtVQUM1QiwwQkFBMEI7VUFDMUIsb0JBQW9CO1VBQ3BCLG9CQUFhO1VBQWIsYUFBYTtVQUNiLHFCQUF5QjtrQkFBekIseUJBQXlCO1VBQ3pCLHNCQUFxQjtrQkFBckIscUJBQXFCLEVBQUE7RUE3QnpDO1lBZ0N3QixvQkFBYTtZQUFiLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsd0JBQXVCO29CQUF2Qix1QkFBdUI7WUFDdkIseUJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsdUNBQW9DO1lBQ3BDLHVCQUF1QjtZQUN2QixZQUFZO1lBQ1osZUFBZSxFQUFBO0VBdkN2QztZQTRDd0IsV0FBVztZQUNYLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLFNBQVMsRUFBQTtFQWhEakM7WUFxRHdCLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFNBQVMsRUFBQTtFQXhEakM7VUE2RG9CLGFBQWEsRUFBQTtFQTdEakM7WUFnRXdCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixnQkFBZ0IsRUFBQTtFQXBFeEM7WUF3RXdCLGVBQWUsRUFBQTtFQXhFdkM7Y0EyRTRCLFdBQVc7Y0FDWCxZQUFZO2NBQ1osbUJBQW1CO2NBQ25CLHVDQUFvQztjQUNwQyx1QkFBdUI7Y0FDdkIsa0JBQWtCLEVBQUE7RUFoRjlDO2NBb0Y0QixlQUFlO2NBQ2YsaUJBQWlCO2NBQ2pCLGNBQWM7Y0FDZCx3QkFBd0I7Y0FDeEIsZ0JBQWdCLEVBQUE7RUF4RjVDO1lBNkZ3QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUE7RUFqR3hDO2NBb0c0QixrQkFBa0I7Y0FDbEIsMkJBQW9CO2NBQXBCLG9CQUFvQjtjQUNwQix5QkFBbUI7c0JBQW5CLG1CQUFtQixFQUFBO0VBdEcvQztjQTRHZ0MsV0FBVztjQUNYLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsc0NBQXNEO2NBQ3RELHNCQUFzQjtjQUN0QixXQUFXO2NBQ1gsWUFBWSxFQUFBO0VBbEg1QztjQTBIZ0MsV0FBVztjQUNYLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsOENBQThEO2NBQzlELHNCQUFzQjtjQUN0QixXQUFXO2NBQ1gsWUFBWSxFQUFBO0VBaEk1QztjQXVJZ0MsV0FBVztjQUNYLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsd0NBQXdEO2NBQ3hELHNCQUFzQjtjQUN0QixXQUFXO2NBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMtcGFnZS9wcm9qZWN0LWNvbnRlbnQvcHJvamVjdC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjZjZmNmY2O1xyXG5cclxuLnByb2plY3RzLWJnIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcbiAgICBwYWRkaW5nOiAxMDBweCA0MHB4IDUwcHg7XHJcblxyXG4gICAgLnByb2plY3RzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLnByb2plY3RzLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWl0ZW0geyAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1NnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJXByb2plY3QtaW1hZ2UtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLDAsMCwwLjEzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNoYXJlLWNvdXJzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJXByb2plY3QtaW1hZ2UtaWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucGxheS1jb3Vyc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZXh0ZW5kICVwcm9qZWN0LWltYWdlLWljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2plY3QtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3QtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWMxYTIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0LXVzZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLDAuMTMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFjMWEyMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3Qtc29jaWFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNiOWI4YmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXZpc2lvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvdmlld3MucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saWtlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2FwcHJlY2lhdGlvbnMucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jb21tZW50LnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

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

module.exports = ".header-title {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: url('welcome-school-bg.png') no-repeat center center;\n  background-size: cover;\n  padding-top: 130px;\n  padding-bottom: 70px;\n  color: white; }\n  .header-title div h2 {\n    margin-bottom: 20px; }\n  .filtration {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #f6f6f6; }\n  .filtration .search-hero {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    padding: 25px 15px;\n    position: relative;\n    bottom: 45px;\n    border-radius: 6px;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.12);\n    width: 900px;\n    background-color: white; }\n  .filtration .search-hero .search {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      overflow: hidden; }\n  .filtration .search-hero .search .styled-select {\n        background: url('select-arrow.png') no-repeat 98% 15px;\n        background-size: 15px;\n        overflow: hidden;\n        margin-right: 10px;\n        border-bottom: 2px solid #2196f3;\n        overflow: hidden; }\n  .filtration .search-hero .search .styled-select select {\n          background: transparent;\n          border: none;\n          font-size: 16px;\n          padding: 5px;\n          width: 165px;\n          color: #1c1a22;\n          font-family: \"Work Sans\";\n          font-weight: 600;\n          overflow: hidden; }\n  .filtration .search-hero .search .styled-select select option {\n            font-size: 16px;\n            line-height: 16px;\n            color: #1c1a22;\n            font-family: \"Work Sans\";\n            overflow: hidden; }\n  .filtration .search-hero .form-control {\n      width: 265px;\n      height: 48px;\n      border-radius: 24px;\n      background-color: #f6f6f6;\n      border: 2px solid #2196f3; }\n  .students {\n  background-color: #f6f6f6;\n  padding-top: 20px; }\n  @media (max-width: 1240px) {\n    .students {\n      padding-left: 0px;\n      padding-right: 0px; } }\n  .students .students-container {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 1170px;\n    padding-bottom: 45px; }\n  .students .students-container .container_bg {\n      background-color: white;\n      border-radius: 6px;\n      margin-bottom: 5px; }\n  .students .students-container .container_bg .student-section {\n        display: -webkit-box;\n        display: flex;\n        flex-wrap: wrap;\n        -webkit-box-align: center;\n                align-items: center;\n        width: 50%; }\n  .students .students-container .container_bg .student-section .student_photo {\n          display: -webkit-box;\n          display: flex;\n          flex-wrap: wrap;\n          -webkit-box-pack: center;\n                  justify-content: center;\n          width: 120px;\n          height: 140px; }\n  .students .students-container .container_bg .student-section .student_photo img {\n            width: 110px;\n            height: 110px;\n            border-radius: 55px;\n            margin: 10px 0 0 10px; }\n  .students .students-container .container_bg .student-section .student_photo .status {\n            display: -webkit-box;\n            display: flex;\n            border-radius: 4px;\n            color: white;\n            width: -webkit-max-content;\n            width: -moz-max-content;\n            width: max-content;\n            padding: 0 5px;\n            position: relative;\n            bottom: 10px;\n            margin-left: 10px; }\n  .students .students-container .container_bg .student-section .student_photo .status span {\n              font-size: 10px;\n              line-height: 22px;\n              font-family: \"Open Sans\";\n              font-weight: 700;\n              text-align: center; }\n  .students .students-container .container_bg .student-section .student_photo .status.PRO {\n            background: #2196f3; }\n  .students .students-container .container_bg .student-section .student_photo .status.Plus {\n            background: #c46cd8; }\n  .students .students-container .container_bg .student-section .student_photo .status.Free {\n            background: #7fc400; }\n  .students .students-container .container_bg .student-section .student_photo .status.Optimal {\n            background: #5c4af7; }\n  .students .students-container .container_bg .student-section .student_info {\n          padding-left: 20px;\n          width: 205px; }\n  .students .students-container .container_bg .student-section .student_info .student_name {\n            font-size: 18px;\n            line-height: 22px;\n            color: #1c1a22;\n            font-family: \"Open Sans\";\n            font-weight: 600; }\n  .students .students-container .container_bg .student-section .student_info .student_direction {\n            font-size: 14px;\n            line-height: 22px;\n            color: #1c1a22;\n            font-family: \"Open Sans\";\n            font-weight: 600; }\n  .students .students-container .container_bg .student-section .student_info .student_country {\n            font-size: 14px;\n            line-height: 20px;\n            color: #6a696f;\n            font-family: \"Open Sans\";\n            font-weight: 400; }\n  .students .students-container .container_bg .student-section .student_info button {\n            width: 100px;\n            height: 36px;\n            margin-top: 10px;\n            border-radius: 18px;\n            background-color: #2196f3;\n            border: none;\n            font-size: 15px;\n            line-height: 18px;\n            color: #ffffff;\n            font-family: \"Work Sans\";\n            font-weight: 600;\n            text-align: center;\n            outline: none; }\n  .students .students-container .container_bg .student-section .student_info .active {\n            background-color: #eff8fe;\n            font-size: 15px;\n            line-height: 18px;\n            color: #2196f3;\n            font-family: \"Work Sans\";\n            font-weight: 600;\n            text-align: center; }\n  .students .students-container .container_bg .student-section .student_view {\n          display: -webkit-box;\n          display: flex;\n          flex-wrap: wrap;\n          width: calc(100% - 325px);\n          padding-right: 23px; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount {\n            display: -webkit-box;\n            display: flex;\n            -webkit-box-align: center;\n                    align-items: center;\n            -webkit-box-pack: end;\n                    justify-content: flex-end;\n            width: 100%;\n            cursor: pointer; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount::-moz-selection {\n              background: transparent; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount::selection {\n              background: transparent; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount:hover::after {\n              box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);\n              border-radius: 50%; }\n  .students .students-container .container_bg .student-section .student_view .watchingCount::after {\n              content: '';\n              width: 48px;\n              height: 48px;\n              display: inline-block;\n              position: relative;\n              background: url('student_watching.png') no-repeat;\n              margin-left: 19px;\n              margin-bottom: 5px;\n              background-size: auto;\n              background-position-x: center;\n              background-position-y: 14px; }\n  .students .students-container .container_bg .student-section .student_view .likeCount {\n            display: -webkit-box;\n            display: flex;\n            -webkit-box-align: center;\n                    align-items: center;\n            -webkit-box-pack: end;\n                    justify-content: flex-end;\n            width: 100%;\n            cursor: pointer; }\n  .students .students-container .container_bg .student-section .student_view .likeCount::-moz-selection {\n              background: transparent; }\n  .students .students-container .container_bg .student-section .student_view .likeCount::selection {\n              background: transparent; }\n  .students .students-container .container_bg .student-section .student_view .likeCount:hover::after {\n              box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);\n              border-radius: 50%; }\n  .students .students-container .container_bg .student-section .student_view .likeCount::after {\n              content: '';\n              width: 48px;\n              height: 48px;\n              display: inline-block;\n              position: relative;\n              background: url('student_like.png') no-repeat;\n              margin-left: 19px;\n              margin-bottom: 5px;\n              background-size: auto;\n              background-position-x: center;\n              background-position-y: 15px; }\n  .students .students-container .container_bg .student-section .student_view .likeCount.active::after {\n            content: '';\n            width: 48px;\n            height: 48px;\n            display: inline-block;\n            position: relative;\n            background: url('student_like_active.png') no-repeat;\n            margin-left: 19px;\n            margin-bottom: 5px;\n            background-size: auto;\n            background-position-x: center;\n            background-position-y: 15px; }\n  .students .students-container .student-project {\n      display: -webkit-box;\n      display: flex;\n      flex-wrap: wrap;\n      -webkit-box-align: center;\n              align-items: center;\n      width: 50%; }\n  .students .students-container .student-project div {\n        padding-right: 5px;\n        outline: none;\n        cursor: pointer; }\n  .students .students-container .student-project div img {\n          width: 140px;\n          height: 116px;\n          border-radius: 6px;\n          -webkit-transition: all 0.3s;\n          transition: all 0.3s; }\n  .students .students-container .student-project div img:hover {\n            box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n  @media (max-width: 1169px) {\n    .students .students-container {\n      width: 1024px; }\n      .students .students-container .student-project div img {\n        width: 123px;\n        height: 110px; } }\n  @media (max-width: 1024px) {\n    .students .students-container {\n      width: 768px; }\n      .students .students-container .student-project div img {\n        width: 90px;\n        height: 80px; } }\n  @media (max-width: 768px) {\n    .students .students-container {\n      width: 96%; }\n      .students .students-container .container_bg .student-section {\n        width: 100%; }\n      .students .students-container .student-project {\n        width: 100%;\n        padding: 10px 0 10px 10px; }\n        .students .students-container .student-project div img {\n          width: 22.7vw;\n          height: 125px; } }\n  @media (max-width: 620px) {\n    .students .students-container .student-project div {\n      width: 50%;\n      padding: 3px; }\n      .students .students-container .student-project div img {\n        width: 100%;\n        height: 100%; } }\n  @media (max-width: 475px) {\n    .students .students-container .container_bg .student-section .student_view {\n      display: none; } }\n  @media (max-width: 375px) {\n    .students .students-container .container_bg .student-section {\n      -webkit-box-pack: center;\n              justify-content: center; }\n      .students .students-container .container_bg .student-section .student_info {\n        width: 100%;\n        text-align: center; } }\n  @media (max-width: 768px) {\n  .filtration .search-hero {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse;\n    -webkit-box-pack: center;\n            justify-content: center; }\n    .filtration .search-hero .form-control {\n      margin-bottom: 15px; }\n    .filtration .search-hero .search {\n      width: 100%;\n      -webkit-box-pack: center;\n              justify-content: center; } }\n  @media (max-width: 425px) {\n  .filtration .search-hero .form-control {\n    width: 100%; }\n  .filtration .search-hero .search .styled-select {\n    width: 100%; }\n    .filtration .search-hero .search .styled-select select {\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudHMtcGFnZS9zdHVkZW50LWNvbXBvbmVudC9IOlxcVmlrYVxcZnJvbnRlbmRcXHNwZWVkUGFpbnRpbmdcXHNwLWFwcC9zcmNcXGFwcFxcc3R1ZGVudHMtcGFnZVxcc3R1ZGVudC1jb21wb25lbnRcXHN0dWRlbnQtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdFQUFnRjtFQUNoRixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZLEVBQUE7RUFWaEI7SUFjWSxtQkFBbUIsRUFBQTtFQUsvQjtFQUNHLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUE7RUFINUI7SUFNUSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2YseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1Q0FBb0M7SUFDcEMsWUFBWTtJQUNaLHVCQUF1QixFQUFBO0VBaEIvQjtNQW1CWSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2YseUJBQThCO2NBQTlCLDhCQUE4QjtNQUM5QixnQkFBZ0IsRUFBQTtFQXRCNUI7UUF5QmdCLHNEQUFzRTtRQUN0RSxxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixnQ0FwREY7UUFxREUsZ0JBQWdCLEVBQUE7RUE5QmhDO1VBaUNvQix1QkFBdUI7VUFDdkIsWUFBWTtVQUNaLGVBQWU7VUFDZixZQUFZO1VBQ1osWUFBWTtVQUNaLGNBQWM7VUFDZCx3QkFBd0I7VUFDeEIsZ0JBQWdCO1VBQ2hCLGdCQUFnQixFQUFBO0VBekNwQztZQTRDd0IsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsd0JBQXdCO1lBQ3hCLGdCQUFnQixFQUFBO0VBaER4QztNQXVEWSxZQUFZO01BQ1osWUFBWTtNQUNaLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIseUJBbEZFLEVBQUE7RUF1RmQ7RUFDSSx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7RUFFakI7SUFKSjtNQUtRLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQSxFQW9WekI7RUExVkQ7SUFVUSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isb0JBQW9CLEVBQUE7RUFkNUI7TUFpQlksdUJBQXVCO01BQ3ZCLGtCQUFrQjtNQUNsQixrQkFBa0IsRUFBQTtFQW5COUI7UUF1QmdCLG9CQUFhO1FBQWIsYUFBYTtRQUNiLGVBQWU7UUFDZix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixVQUFVLEVBQUE7RUExQjFCO1VBOEJvQixvQkFBYTtVQUFiLGFBQWE7VUFDYixlQUFlO1VBQ2Ysd0JBQXVCO2tCQUF2Qix1QkFBdUI7VUFDdkIsWUFBWTtVQUNaLGFBQWEsRUFBQTtFQWxDakM7WUFxQ3dCLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLHFCQUFxQixFQUFBO0VBeEM3QztZQTRDd0Isb0JBQWE7WUFBYixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWiwwQkFBa0I7WUFBbEIsdUJBQWtCO1lBQWxCLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixpQkFBaUIsRUFBQTtFQW5EekM7Y0FzRGdDLGVBQWU7Y0FDZixpQkFBaUI7Y0FDakIsd0JBQXdCO2NBQ3hCLGdCQUFnQjtjQUNoQixrQkFBa0IsRUFBQTtFQTFEbEQ7WUErRHdCLG1CQXRKVixFQUFBO0VBdUZkO1lBbUV3QixtQkFBbUIsRUFBQTtFQW5FM0M7WUF1RXdCLG1CQTdKVCxFQUFBO0VBc0ZmO1lBMkV3QixtQkFBbUIsRUFBQTtFQTNFM0M7VUFnRm9CLGtCQUFrQjtVQUNsQixZQUFZLEVBQUE7RUFqRmhDO1lBb0Z3QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUE7RUF4RnhDO1lBNEZ3QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUE7RUFoR3hDO1lBb0d3QixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCLEVBQUE7RUF4R3hDO1lBNEd3QixZQUFZO1lBQ1osWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixhQUFhLEVBQUE7RUF4SHJDO1lBNEh3Qix5QkFBeUI7WUFDekIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsd0JBQXdCO1lBQ3hCLGdCQUFnQjtZQUNoQixrQkFBa0IsRUFBQTtFQWxJMUM7VUF5SW9CLG9CQUFhO1VBQWIsYUFBYTtVQUNiLGVBQWU7VUFDZix5QkFBeUI7VUFDekIsbUJBQW1CLEVBQUE7RUE1SXZDO1lBK0l3QixvQkFBYTtZQUFiLGFBQWE7WUFDYix5QkFBbUI7b0JBQW5CLG1CQUFtQjtZQUNuQixxQkFBeUI7b0JBQXpCLHlCQUF5QjtZQUN6QixXQUFXO1lBQ1gsZUFBZSxFQUFBO0VBbkp2QztjQXNKNEIsdUJBQXVCLEVBQUE7RUF0Sm5EO2NBc0o0Qix1QkFBdUIsRUFBQTtFQXRKbkQ7Y0EySmdDLGdEQUFnRDtjQUNoRCxrQkFBa0IsRUFBQTtFQTVKbEQ7Y0FpSzRCLFdBQVc7Y0FDWCxXQUFXO2NBQ1gsWUFBWTtjQUNaLHFCQUFxQjtjQUNyQixrQkFBa0I7Y0FDbEIsaURBQWlFO2NBQ2pFLGlCQUFpQjtjQUNqQixrQkFBa0I7Y0FDbEIscUJBQXFCO2NBQ3JCLDZCQUE2QjtjQUM3QiwyQkFBMkIsRUFBQTtFQTNLdkQ7WUFnTHdCLG9CQUFhO1lBQWIsYUFBYTtZQUNiLHlCQUFtQjtvQkFBbkIsbUJBQW1CO1lBQ25CLHFCQUF5QjtvQkFBekIseUJBQXlCO1lBQ3pCLFdBQVc7WUFDWCxlQUFlLEVBQUE7RUFwTHZDO2NBdUw0Qix1QkFBdUIsRUFBQTtFQXZMbkQ7Y0F1TDRCLHVCQUF1QixFQUFBO0VBdkxuRDtjQTRMZ0MsZ0RBQWdEO2NBQ2hELGtCQUFrQixFQUFBO0VBN0xsRDtjQWtNNEIsV0FBVztjQUNYLFdBQVc7Y0FDWCxZQUFZO2NBQ1oscUJBQXFCO2NBQ3JCLGtCQUFrQjtjQUNsQiw2Q0FBNkQ7Y0FDN0QsaUJBQWlCO2NBQ2pCLGtCQUFrQjtjQUNsQixxQkFBcUI7Y0FDckIsNkJBQTZCO2NBQzdCLDJCQUEyQixFQUFBO0VBNU12RDtZQWtONEIsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixvREFBb0U7WUFDcEUsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixxQkFBcUI7WUFDckIsNkJBQTZCO1lBQzdCLDJCQUEyQixFQUFBO0VBNU52RDtNQW9PWSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlO01BQ2YseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixVQUFVLEVBQUE7RUF2T3RCO1FBME9nQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGVBQWUsRUFBQTtFQTVPL0I7VUErT29CLFlBQVk7VUFDWixhQUFhO1VBQ2Isa0JBQWtCO1VBQ2xCLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTtFQWxQeEM7WUFxUG9CLCtDQUErQyxFQUFBO0VBTy9EO0lBNVBKO01BOFBZLGFBQWEsRUFBQTtNQTlQekI7UUFtUXdCLFlBQVk7UUFDWixhQUFhLEVBQUEsRUFDaEI7RUFNakI7SUEzUUo7TUE2UVksWUFBWSxFQUFBO01BN1F4QjtRQWtSd0IsV0FBVztRQUNYLFlBQVksRUFBQSxFQUNmO0VBTWpCO0lBMVJKO01BNFJZLFVBQVUsRUFBQTtNQTVSdEI7UUFnU29CLFdBQVcsRUFBQTtNQWhTL0I7UUFxU2dCLFdBQVc7UUFDWCx5QkFBeUIsRUFBQTtRQXRTekM7VUF5U3dCLGFBQWE7VUFDYixhQUFhLEVBQUEsRUFDaEI7RUFNakI7SUFqVEo7TUFxVG9CLFVBQVU7TUFDVixZQUFZLEVBQUE7TUF0VGhDO1FBd1R3QixXQUFXO1FBQ1gsWUFBWSxFQUFBLEVBQ2Y7RUFNakI7SUFoVUo7TUFxVXdCLGFBQWEsRUFBQSxFQUNoQjtFQU1qQjtJQTVVSjtNQWdWb0Isd0JBQXVCO2NBQXZCLHVCQUF1QixFQUFBO01BaFYzQztRQWtWd0IsV0FBVztRQUNYLGtCQUFrQixFQUFBLEVBQ3JCO0VBUXJCO0VBQ0k7SUFFUSw0QkFBOEI7SUFBOUIsOEJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix3QkFBdUI7WUFBdkIsdUJBQXVCLEVBQUE7SUFIL0I7TUFNWSxtQkFBbUIsRUFBQTtJQU4vQjtNQVVZLFdBQVc7TUFDWCx3QkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUEsRUFDMUI7RUFLYjtFQUNJO0lBR1ksV0FBVyxFQUFBO0VBSHZCO0lBUWdCLFdBQVcsRUFBQTtJQVIzQjtNQVdvQixXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzLXBhZ2Uvc3R1ZGVudC1jb21wb25lbnQvc3R1ZGVudC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb2xvcnM6XHJcbiRiZzogIzI5MjczMTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzIxOTZmMztcclxuJGdyZWVuOiAjN2ZjNDAwO1xyXG4kYmxhY2stdGV4dDogIzA0MTQyMTtcclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3dlbGNvbWUtc2Nob29sLWJnLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWx0cmF0aW9uIHtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcblxyXG4gICAuc2VhcmNoLWhlcm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiA0NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwwLDAsMC4xMik7XHJcbiAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAuc3R5bGVkLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zZWxlY3QtYXJyb3cucG5nJykgbm8tcmVwZWF0IDk4JSAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWMxYTIyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYzFhMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdHVkZW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNDBweCkge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDsgXHJcbiAgICB9XHJcblxyXG4gICAgLnN0dWRlbnRzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDExNzBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcclxuXHJcbiAgICAgICAgLmNvbnRhaW5lcl9iZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcblxyXG4gICAgICAgICAgICAuc3R1ZGVudC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLnN0dWRlbnRfcGhvdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0dXMuUFJPIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuc3RhdHVzLlBsdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzQ2Y2Q4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cy5GcmVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXR1cy5PcHRpbWFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzVjNGFmNztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN0dWRlbnRfaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0dWRlbnRfbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWMxYTIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHVkZW50X2RpcmVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWMxYTIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdHVkZW50X2NvdW50cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzZhNjk2ZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmOGZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIxOTZmMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3R1ZGVudF92aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzI1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIzcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC53YXRjaGluZ0NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OnNlbGVjdGlvbiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdHVkZW50X3dhdGNoaW5nLnBuZycpIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubGlrZUNvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OnNlbGVjdGlvbiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zdHVkZW50X2xpa2UucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5saWtlQ291bnQuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvc3R1ZGVudF9saWtlX2FjdGl2ZS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdHVkZW50LXByb2plY3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE2OXB4KSB7XHJcbiAgICAgICAgLnN0dWRlbnRzLWNvbnRhaW5lciB7IFxyXG4gICAgICAgICAgICB3aWR0aDogMTAyNHB4O1xyXG5cclxuICAgICAgICAgICAgLnN0dWRlbnQtcHJvamVjdHtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgLnN0dWRlbnRzLWNvbnRhaW5lciB7IFxyXG4gICAgICAgICAgICB3aWR0aDogNzY4cHg7XHJcblxyXG4gICAgICAgICAgICAuc3R1ZGVudC1wcm9qZWN0e1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAuc3R1ZGVudHMtY29udGFpbmVyIHsgXHJcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XHJcblxyXG4gICAgICAgICAgICAuY29udGFpbmVyX2JnIHtcclxuICAgICAgICAgICAgICAgIC5zdHVkZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3R1ZGVudC1wcm9qZWN0e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIuN3Z3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgICAgICAuc3R1ZGVudHMtY29udGFpbmVyIHsgXHJcbiAgICAgICAgICAgIC5zdHVkZW50LXByb2plY3R7XHJcbiAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NzVweCkge1xyXG4gICAgICAgIC5zdHVkZW50cy1jb250YWluZXIgeyBcclxuICAgICAgICAgICAgLmNvbnRhaW5lcl9iZyB7XHJcbiAgICAgICAgICAgICAgICAuc3R1ZGVudC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAuc3R1ZGVudF92aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgLnN0dWRlbnRzLWNvbnRhaW5lciB7IFxyXG4gICAgICAgICAgICAuY29udGFpbmVyX2JnIHtcclxuICAgICAgICAgICAgICAgIC5zdHVkZW50LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC5zdHVkZW50X2luZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZpbHRyYXRpb24ge1xyXG4gICAgICAgIC5zZWFyY2gtaGVybyB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAuZmlsdHJhdGlvbiB7XHJcbiAgICAgICAgLnNlYXJjaC1oZXJvIHtcclxuICAgICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAuc3R5bGVkLXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

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

module.exports = __webpack_require__(/*! H:\Vika\frontend\speedPainting\sp-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map