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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header-padding test\">\r\n  <app-header></app-header>\r\n  <div *ngIf=\"loading\" class=\"loading-wrapper\">\r\n    <mat-progress-bar mode=\"indeterminate\" color=\"red\"></mat-progress-bar>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-padding {\n  padding: 0; }\n\n.container-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: auto;\n  margin-left: auto; }\n\n.loading-wrapper {\n  display: block;\n  margin-top: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUNGLEVBQUE7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG9cclxufVxyXG5cclxuLmxvYWRpbmctd3JhcHBlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/stomp-client.service */ "./src/app/shared/stomp-client.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/loading.service */ "./src/app/shared/loading.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(titleService, authService, stompClient, loadingService) {
        this.titleService = titleService;
        this.authService = authService;
        this.stompClient = stompClient;
        this.loadingService = loadingService;
        this.loading = false;
        this.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["title"]);
        if (!authService.currentUserValue || authService.isTokenExpired()) {
            authService.logout();
        }
        else {
            stompClient.connect();
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingSubscription = this.loadingService.test.subscribe(function (value) {
            _this.loading = value;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.loadingSubscription.unsubscribe();
    };
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_4__["StompClientService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, initGapi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGapi", function() { return initGapi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _system_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system/header/header.component */ "./src/app/system/header/header.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _system_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./system/index/index.component */ "./src/app/system/index/index.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/edit-user/edit-user.component */ "./src/app/user/edit-user/edit-user.component.ts");
/* harmony import */ var _auth_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/password-recovery/password-recovery.component */ "./src/app/auth/password-recovery/password-recovery.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_HttpError_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @helpers/HttpError.interceptor */ "./src/app/helpers/HttpError.interceptor.ts");
/* harmony import */ var _user_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user-summary/user-summary.component */ "./src/app/user/user-summary/user-summary.component.ts");
/* harmony import */ var _user_user_users_user_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user-users/user-users.component */ "./src/app/user/user-users/user-users.component.ts");
/* harmony import */ var _user_user_bundles_user_bundles_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/user-bundles/user-bundles.component */ "./src/app/user/user-bundles/user-bundles.component.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _user_user_trips_user_trips_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user-trips/user-trips.component */ "./src/app/user/user-trips/user-trips.component.ts");
/* harmony import */ var _user_user_services_user_services_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/user-services/user-services.component */ "./src/app/user/user-services/user-services.component.ts");
/* harmony import */ var _user_user_discounts_user_discounts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/user-discounts/user-discounts.component */ "./src/app/user/user-discounts/user-discounts.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _user_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/admin-dashboard/admin.dashboard.component */ "./src/app/user/admin-dashboard/admin.dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _system_data_table_toTitle_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./system/data-table/toTitle.pipe */ "./src/app/system/data-table/toTitle.pipe.ts");
/* harmony import */ var _system_data_table_formatCell_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./system/data-table/formatCell.pipe */ "./src/app/system/data-table/formatCell.pipe.ts");
/* harmony import */ var _system_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./system/data-table/data-table.component */ "./src/app/system/data-table/data-table.component.ts");
/* harmony import */ var _auth_registration_registration_successful_registration_successful_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth/registration/registration-successful/registration-successful.component */ "./src/app/auth/registration/registration-successful/registration-successful.component.ts");
/* harmony import */ var _helpers_material_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @helpers/material.module */ "./src/app/helpers/material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_user_trips_suggestion_service_suggestion_service_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/user-trips/suggestion-service/suggestion-service.component */ "./src/app/user/user-trips/suggestion-service/suggestion-service.component.ts");
/* harmony import */ var _user_user_trips_trip_suggestion_trip_suggestion_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user/user-trips/trip-suggestion/trip-suggestion.component */ "./src/app/user/user-trips/trip-suggestion/trip-suggestion.component.ts");
/* harmony import */ var _user_table_table_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user/table/table.component */ "./src/app/user/table/table.component.ts");
/* harmony import */ var _user_table_users_resolver__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./user/table/users.resolver */ "./src/app/user/table/users.resolver.ts");
/* harmony import */ var _notification_notification_ring_notification_ring_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./notification/notification-ring/notification-ring.component */ "./src/app/notification/notification-ring/notification-ring.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var _user_user_report_report_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/user-report/report.component */ "./src/app/user/user-report/report.component.ts");
/* harmony import */ var _user_user_trips_trip_form_trip_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./user/user-trips/trip-form/trip-form.component */ "./src/app/user/user-trips/trip-form/trip-form.component.ts");
/* harmony import */ var _user_user_trips_trips_resolver__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./user/user-trips/trips.resolver */ "./src/app/user/user-trips/trips.resolver.ts");
/* harmony import */ var _user_carrier_dashboard_carrier_dashboard_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./user/carrier-dashboard/carrier.dashboard.component */ "./src/app/user/carrier-dashboard/carrier.dashboard.component.ts");
/* harmony import */ var _service_buttons_service_buttons_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./service.buttons/service.buttons.component */ "./src/app/service.buttons/service.buttons.component.ts");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/trip/trip.component.ts");
/* harmony import */ var _trip_trip_resolver__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./trip/trip.resolver */ "./src/app/trip/trip.resolver.ts");
/* harmony import */ var _auth_registration_registration_confirm_registration_confirm_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./auth/registration/registration-confirm/registration-confirm.component */ "./src/app/auth/registration/registration-confirm/registration-confirm.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./user-profile/edit-profile/edit-profile.component */ "./src/app/user-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _user_approver_dashboard_approver_dashboard_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./user/approver-dashboard/approver-dashboard.component */ "./src/app/user/approver-dashboard/approver-dashboard.component.ts");
/* harmony import */ var _system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./system/header/user-basket/user-basket.component */ "./src/app/system/header/user-basket/user-basket.component.ts");
/* harmony import */ var _system_header_user_basket_total_user_basket_total_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./system/header/user-basket-total/user-basket-total.component */ "./src/app/system/header/user-basket-total/user-basket-total.component.ts");
/* harmony import */ var _system_header_user_basket_total_price_user_basket_total_price_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./system/header/user-basket-total-price/user-basket-total-price.component */ "./src/app/system/header/user-basket-total-price/user-basket-total-price.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _discount_form_discount_form_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./discount-form/discount-form.component */ "./src/app/discount-form/discount-form.component.ts");
/* harmony import */ var _trip_discount_manager_trip_discount_manager_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./trip-discount-manager/trip-discount-manager.component */ "./src/app/trip-discount-manager/trip-discount-manager.component.ts");
/* harmony import */ var _trip_discount_manager_trip_discounts_resolver__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./trip-discount-manager/trip-discounts.resolver */ "./src/app/trip-discount-manager/trip-discounts.resolver.ts");
/* harmony import */ var _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @services/stomp-client.service */ "./src/app/shared/stomp-client.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _chat_global_chat_global_chat_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./chat/global-chat/global-chat.component */ "./src/app/chat/global-chat/global-chat.component.ts");
/* harmony import */ var _user_user_trouble_tickets_user_trouble_tickets_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./user/user-trouble-tickets/user-trouble-tickets.component */ "./src/app/user/user-trouble-tickets/user-trouble-tickets.component.ts");
/* harmony import */ var _chat_approvers_chat_approvers_chat_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./chat/approvers-chat/approvers-chat.component */ "./src/app/chat/approvers-chat/approvers-chat.component.ts");
/* harmony import */ var _chat_support_chat_support_chat_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./chat/support-chat/support-chat.component */ "./src/app/chat/support-chat/support-chat.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./chat/chat-component */ "./src/app/chat/chat-component.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _model_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./model/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _provider_provider_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./provider/provider.component */ "./src/app/provider/provider.component.ts");
/* harmony import */ var _provider_provider_resolver__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./provider/provider.resolver */ "./src/app/provider/provider.resolver.ts");
/* harmony import */ var _user_user_subscriptions_user_subscriptions_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./user/user-subscriptions/user-subscriptions.component */ "./src/app/user/user-subscriptions/user-subscriptions.component.ts");
/* harmony import */ var _user_user_bundles_bundle_form_bundle_form_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./user/user-bundles/bundle-form/bundle-form.component */ "./src/app/user/user-bundles/bundle-form/bundle-form.component.ts");
/* harmony import */ var _bundle_bundle_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./bundle/bundle.component */ "./src/app/bundle/bundle.component.ts");
/* harmony import */ var _user_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./user/user-orders/user-orders.component */ "./src/app/user/user-orders/user-orders.component.ts");
/* harmony import */ var _bundle_bundle_resolver__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./bundle/bundle.resolver */ "./src/app/bundle/bundle.resolver.ts");
/* harmony import */ var _user_user_bundles_bundles_resolver__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./user/user-bundles/bundles.resolver */ "./src/app/user/user-bundles/bundles.resolver.ts");
/* harmony import */ var _trip_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./trip/blank-page/blank-page.component */ "./src/app/trip/blank-page/blank-page.component.ts");
/* harmony import */ var _bundle_list_bundle_list_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./bundle-list/bundle-list.component */ "./src/app/bundle-list/bundle-list.component.ts");
/* harmony import */ var _session_gapi_session__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./session/gapi.session */ "./src/app/session/gapi.session.ts");















































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _system_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                _system_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_10__["EditUserComponent"],
                _auth_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_11__["PasswordRecoveryComponent"],
                _user_user_summary_user_summary_component__WEBPACK_IMPORTED_MODULE_16__["UserSummaryComponent"],
                _user_user_users_user_users_component__WEBPACK_IMPORTED_MODULE_17__["UserUsersComponent"],
                _user_user_bundles_user_bundles_component__WEBPACK_IMPORTED_MODULE_18__["UserBundlesComponent"],
                _user_user_trips_user_trips_component__WEBPACK_IMPORTED_MODULE_20__["UserTripsComponent"],
                _user_user_services_user_services_component__WEBPACK_IMPORTED_MODULE_21__["UserServicesComponent"],
                _user_user_discounts_user_discounts_component__WEBPACK_IMPORTED_MODULE_22__["UserDiscountsComponent"],
                _user_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"],
                _auth_registration_registration_successful_registration_successful_component__WEBPACK_IMPORTED_MODULE_30__["RegistrationSuccessfulComponent"],
                _system_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_29__["DataTableComponent"],
                _system_data_table_formatCell_pipe__WEBPACK_IMPORTED_MODULE_28__["FormatCellPipe"],
                _system_data_table_toTitle_pipe__WEBPACK_IMPORTED_MODULE_27__["ToTitlePipe"],
                _user_user_trips_suggestion_service_suggestion_service_component__WEBPACK_IMPORTED_MODULE_33__["SuggestionServiceComponent"],
                _user_user_trips_trip_suggestion_trip_suggestion_component__WEBPACK_IMPORTED_MODULE_34__["TripSuggestionComponent"],
                _user_user_report_report_component__WEBPACK_IMPORTED_MODULE_39__["ReportComponent"],
                _user_table_table_component__WEBPACK_IMPORTED_MODULE_35__["TableComponent"],
                _notification_notification_ring_notification_ring_component__WEBPACK_IMPORTED_MODULE_37__["NotificationRingComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_38__["NotificationComponent"],
                _user_user_trips_trip_form_trip_form_component__WEBPACK_IMPORTED_MODULE_40__["TripFormComponent"],
                _user_carrier_dashboard_carrier_dashboard_component__WEBPACK_IMPORTED_MODULE_42__["CarrierDashboardComponent"],
                _service_buttons_service_buttons_component__WEBPACK_IMPORTED_MODULE_43__["ServiceButtonsComponent"],
                _auth_registration_registration_confirm_registration_confirm_component__WEBPACK_IMPORTED_MODULE_46__["RegistrationConfirmComponent"],
                _user_approver_dashboard_approver_dashboard_component__WEBPACK_IMPORTED_MODULE_49__["ApproverDashboardComponent"],
                _trip_trip_component__WEBPACK_IMPORTED_MODULE_44__["TripComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_47__["UserProfileComponent"],
                _user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_48__["EditProfileComponent"],
                _chat_global_chat_global_chat_component__WEBPACK_IMPORTED_MODULE_59__["GlobalChat"],
                _user_user_trouble_tickets_user_trouble_tickets_component__WEBPACK_IMPORTED_MODULE_60__["UserTroubleTicketsComponent"],
                _chat_approvers_chat_approvers_chat_component__WEBPACK_IMPORTED_MODULE_61__["ApproversChatComponent"],
                _chat_support_chat_support_chat_component__WEBPACK_IMPORTED_MODULE_62__["SupportChatComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_64__["ChatComponent"],
                _model_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_66__["SnackbarComponent"],
                _discount_form_discount_form_component__WEBPACK_IMPORTED_MODULE_54__["DiscountFormComponent"],
                _trip_discount_manager_trip_discount_manager_component__WEBPACK_IMPORTED_MODULE_55__["TripDiscountManagerComponent"],
                _user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_48__["EditProfileComponent"],
                _system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_50__["UserBasketComponent"],
                _system_header_user_basket_total_user_basket_total_component__WEBPACK_IMPORTED_MODULE_51__["UserBasketTotalComponent"],
                _system_header_user_basket_total_price_user_basket_total_price_component__WEBPACK_IMPORTED_MODULE_52__["UserBasketTotalPriceComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_53__["CheckoutComponent"],
                _provider_provider_component__WEBPACK_IMPORTED_MODULE_68__["ProviderComponent"],
                _user_user_subscriptions_user_subscriptions_component__WEBPACK_IMPORTED_MODULE_70__["UserSubscriptionsComponent"],
                _user_user_bundles_bundle_form_bundle_form_component__WEBPACK_IMPORTED_MODULE_71__["BundleFormComponent"],
                _bundle_bundle_component__WEBPACK_IMPORTED_MODULE_72__["BundleComponent"],
                _user_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_73__["UserOrdersComponent"],
                _trip_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_76__["BlankPageComponent"],
                _bundle_list_bundle_list_component__WEBPACK_IMPORTED_MODULE_77__["BundleListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_26__["MDBBootstrapModule"].forRoot(),
                _helpers_material_module__WEBPACK_IMPORTED_MODULE_31__["MaterialModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__["AngularMultiSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_67__["NgbModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_58__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAcaaElwdGQIGIRnr2Ay1Hl9BuqEwDpjeY'
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_67__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_63__["NgSelectModule"]
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
                _angular_common__WEBPACK_IMPORTED_MODULE_32__["CurrencyPipe"],
                _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"],
                _user_table_users_resolver__WEBPACK_IMPORTED_MODULE_36__["UserResolver"],
                _system_data_table_formatCell_pipe__WEBPACK_IMPORTED_MODULE_28__["FormatCellPipe"],
                _user_user_trips_trips_resolver__WEBPACK_IMPORTED_MODULE_41__["TripsResolver"],
                _trip_trip_resolver__WEBPACK_IMPORTED_MODULE_45__["TripResolver"],
                _trip_discount_manager_trip_discounts_resolver__WEBPACK_IMPORTED_MODULE_56__["TripDiscountsResolver"],
                _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_57__["StompClientService"],
                _bundle_bundle_resolver__WEBPACK_IMPORTED_MODULE_74__["BundleResolver"],
                _user_user_bundles_bundles_resolver__WEBPACK_IMPORTED_MODULE_75__["BundlesResolver"],
                _services_share_data_service__WEBPACK_IMPORTED_MODULE_65__["ShareDataService"],
                _provider_provider_resolver__WEBPACK_IMPORTED_MODULE_69__["ProviderResolver"],
                _session_gapi_session__WEBPACK_IMPORTED_MODULE_78__["GapiSession"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_HttpError_interceptor__WEBPACK_IMPORTED_MODULE_15__["HttpErrorInterceptor"], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: initGapi, deps: [_session_gapi_session__WEBPACK_IMPORTED_MODULE_78__["GapiSession"]], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_model_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_66__["SnackbarComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function initGapi(gapiSession) {
    return function () { return gapiSession.initClient(); };
}


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
/* harmony import */ var _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/edit-user/edit-user.component */ "./src/app/user/edit-user/edit-user.component.ts");
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/password-recovery/password-recovery.component */ "./src/app/auth/password-recovery/password-recovery.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _auth_registration_registration_successful_registration_successful_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/registration/registration-successful/registration-successful.component */ "./src/app/auth/registration/registration-successful/registration-successful.component.ts");
/* harmony import */ var _user_table_users_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/table/users.resolver */ "./src/app/user/table/users.resolver.ts");
/* harmony import */ var _user_user_trips_trips_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user-trips/trips.resolver */ "./src/app/user/user-trips/trips.resolver.ts");
/* harmony import */ var _system_index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./system/index/index.component */ "./src/app/system/index/index.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var _auth_registration_registration_confirm_registration_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/registration/registration-confirm/registration-confirm.component */ "./src/app/auth/registration/registration-confirm/registration-confirm.component.ts");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/trip/trip.component.ts");
/* harmony import */ var _trip_trip_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trip/trip.resolver */ "./src/app/trip/trip.resolver.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-profile/edit-profile/edit-profile.component */ "./src/app/user-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _trip_discount_manager_trip_discounts_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trip-discount-manager/trip-discounts.resolver */ "./src/app/trip-discount-manager/trip-discounts.resolver.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chat/chat-component */ "./src/app/chat/chat-component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _provider_provider_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./provider/provider.component */ "./src/app/provider/provider.component.ts");
/* harmony import */ var _provider_provider_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./provider/provider.resolver */ "./src/app/provider/provider.resolver.ts");
/* harmony import */ var _user_user_bundles_bundles_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/user-bundles/bundles.resolver */ "./src/app/user/user-bundles/bundles.resolver.ts");
/* harmony import */ var _bundle_bundle_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bundle/bundle.component */ "./src/app/bundle/bundle.component.ts");
/* harmony import */ var _bundle_bundle_resolver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bundle/bundle.resolver */ "./src/app/bundle/bundle.resolver.ts");
/* harmony import */ var _trip_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./trip/blank-page/blank-page.component */ "./src/app/trip/blank-page/blank-page.component.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @models/role */ "./src/app/model/role.ts");
/* harmony import */ var _bundle_list_bundle_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./bundle-list/bundle-list.component */ "./src/app/bundle-list/bundle-list.component.ts");




























var appRoutes = [
    { path: 'registration', component: _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
    { path: 'passwordRecovery', component: _auth_password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_4__["PasswordRecoveryComponent"] },
    { path: 'registrationSuccessful', component: _auth_registration_registration_successful_registration_successful_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationSuccessfulComponent"] },
    { path: 'registrationConfirm/:token', component: _auth_registration_registration_confirm_registration_confirm_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationConfirmComponent"] },
    {
        path: 'account',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        resolve: { userData: _user_table_users_resolver__WEBPACK_IMPORTED_MODULE_8__["UserResolver"], tripData: _user_user_trips_trips_resolver__WEBPACK_IMPORTED_MODULE_9__["TripsResolver"], bundleData: _user_user_bundles_bundles_resolver__WEBPACK_IMPORTED_MODULE_22__["BundlesResolver"] },
        runGuardsAndResolvers: 'always'
    },
    { path: 'account/edit', component: _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["EditUserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'edit/:id', component: _user_profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__["EditProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { roles: [_models_role__WEBPACK_IMPORTED_MODULE_26__["Role"].Admin] } },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    {
        path: 'trip/:id',
        component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_13__["TripComponent"],
        resolve: { tripData: _trip_trip_resolver__WEBPACK_IMPORTED_MODULE_14__["TripResolver"], tripDiscountsData: _trip_discount_manager_trip_discounts_resolver__WEBPACK_IMPORTED_MODULE_17__["TripDiscountsResolver"] },
        runGuardsAndResolvers: 'always',
    },
    { path: 'blank', component: _trip_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_25__["BlankPageComponent"] },
    { path: 'user/:id', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["UserProfileComponent"] },
    { path: 'bundles', component: _bundle_list_bundle_list_component__WEBPACK_IMPORTED_MODULE_27__["BundleListComponent"] },
    { path: 'bundle/:id', component: _bundle_bundle_component__WEBPACK_IMPORTED_MODULE_23__["BundleComponent"], resolve: { bundleData: _bundle_bundle_resolver__WEBPACK_IMPORTED_MODULE_24__["BundleResolver"] } },
    { path: 'provider/:id', component: _provider_provider_component__WEBPACK_IMPORTED_MODULE_20__["ProviderComponent"], resolve: { providerData: _provider_provider_resolver__WEBPACK_IMPORTED_MODULE_21__["ProviderResolver"] } },
    { path: 'notifications', component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_11__["NotificationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_19__["CheckoutComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '', component: _system_index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"] },
    { path: '**', redirectTo: '' },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true, onSameUrlNavigation: "reload" });


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authService.currentUserValue;
        var currentUserRole = this.authService.getDecodedToken().authority;
        if (currentUser) {
            if (route.data.roles && route.data.roles.indexOf(currentUserRole) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-layout\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card card-layout\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\" class=\"card-block card-content form-layout\">\r\n          <h2 class=\"card-title\" align=\"center\">Sign in</h2>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\"\r\n                   id=\"username\"\r\n                   name=\"username\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Enter a username\"\r\n                   formControlName=\"username\"\r\n                   autocomplete=\"name\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"\r\n            />\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.username.errors.required\">Field is empty</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Password -->\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <a class=\"forgot-link\" routerLink=\"/passwordRecovery\">Forgot password?</a>\r\n            <input type=\"password\"\r\n                   id=\"password\"\r\n                   name=\"password\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Enter your password\"\r\n                   formControlName=\"password\"\r\n                   autocomplete=\"password\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\r\n            />\r\n\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.password.errors.required\">Field is empty</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <button class=\"btn btn-wide styledButton\" color=\"primary\" mdbBtn mdbWavesEffect>\r\n              Sign in\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n            </button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <img alt=\"javaImg\" src=\"../../../assets/images/java.png\">\r\n    </div>\r\n    <div class=\"offset-3\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgot-link {\n  float: right;\n  color: gray; }\n\n.forgot-link:hover {\n  float: right;\n  color: blue; }\n\nimg {\n  padding-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290LWxpbmsge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmZvcmdvdC1saW5rOmhvdmVyIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/stomp-client.service */ "./src/app/shared/stomp-client.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, route, router, stompClient) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.stompClient = stompClient;
        this.submitted = false;
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.currentUserValue) {
            this.router.navigate(['']);
        }
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        window.scrollTo(0, 0);
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        var loginPayload = {
            "usernameOrEmail": this.f.username.value.trim(),
            "password": this.f.password.value.trim()
        };
        this.authService.login(loginPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function () {
            _this.router.navigate(['account']);
            _this.stompClient.connect();
        }, function (err) {
            _this.error = err;
            _this.loading = false;
            setTimeout(function () {
                _this.error = '';
            }, 5000);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_6__["StompClientService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/password-recovery/password-recovery.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/auth/password-recovery/password-recovery.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-layout\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card card-layout\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"recoveryPasswordForm\" class=\"card-block card-content form-layout\">\r\n          <h2 align=\"center\">Password recovery</h2>\r\n\r\n          <!-- Email -->\r\n          <div class=\"form-group\">\r\n            <label>Email:</label>\r\n            <input type=\"email\"\r\n                   id=\"email\"\r\n                   name=\"email\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Enter your email address\"\r\n                   formControlName=\"email\"\r\n                   autocomplete=\"email\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\r\n                   email required\r\n            />\r\n\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.email.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.email.errors.email\">Email is not valid</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <button class=\"btn btn-primary btn-wide\">Send password reset email</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"offset-3\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/password-recovery/password-recovery.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/auth/password-recovery/password-recovery.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFzc3dvcmQtcmVjb3ZlcnkvcGFzc3dvcmQtcmVjb3ZlcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/password-recovery/password-recovery.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/auth/password-recovery/password-recovery.component.ts ***!
  \***********************************************************************/
/*! exports provided: PasswordRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRecoveryComponent", function() { return PasswordRecoveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PasswordRecoveryComponent = /** @class */ (function () {
    function PasswordRecoveryComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.error = '';
        this.loading = false;
    }
    PasswordRecoveryComponent.prototype.ngOnInit = function () {
        this.recoveryPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
        window.scrollTo(0, 0);
    };
    Object.defineProperty(PasswordRecoveryComponent.prototype, "f", {
        get: function () { return this.recoveryPasswordForm.controls; },
        enumerable: true,
        configurable: true
    });
    PasswordRecoveryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.recoveryPasswordForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.recoveryPassword(this.recoveryPasswordForm.controls.email.value.trim()).subscribe(function () {
            _this.router.navigate(['login']);
        }, function (err) {
            _this.error = err;
            _this.loading = false;
            window.setTimeout(function () {
                _this.error = '';
            }, 5000);
        });
    };
    PasswordRecoveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-recovery',
            template: __webpack_require__(/*! ./password-recovery.component.html */ "./src/app/auth/password-recovery/password-recovery.component.html"),
            styles: [__webpack_require__(/*! ./password-recovery.component.scss */ "./src/app/auth/password-recovery/password-recovery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PasswordRecoveryComponent);
    return PasswordRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration-confirm/registration-confirm.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/auth/registration/registration-confirm/registration-confirm.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"message-layout\">\r\n    <h1>Registration confirm</h1>\r\n    <h3></h3>\r\n    <p>{{regConfirmResponse?.message}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/registration/registration-confirm/registration-confirm.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/auth/registration/registration-confirm/registration-confirm.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-layout {\n  text-align: center;\n  margin-top: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLWNvbmZpcm0vQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGF1dGhcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLWNvbmZpcm1cXHJlZ2lzdHJhdGlvbi1jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi1jb25maXJtL3JlZ2lzdHJhdGlvbi1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtbGF5b3V0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/registration/registration-confirm/registration-confirm.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/auth/registration/registration-confirm/registration-confirm.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RegistrationConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationConfirmComponent", function() { return RegistrationConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var RegistrationConfirmComponent = /** @class */ (function () {
    function RegistrationConfirmComponent(router, route, http, aRoute) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.aRoute = aRoute;
    }
    RegistrationConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.token = this.aRoute.snapshot.paramMap.get("token");
        window.scrollTo(0, 0);
        window.setTimeout(function () {
            _this.router.navigate(['login']);
        }, 10000);
    };
    RegistrationConfirmComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["REGISTRATION_CONFIRM_URL"] + this.token).subscribe(function (data) {
            _this.regConfirmResponse = data;
        }, function (err) {
            alert(err);
        });
    };
    RegistrationConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-confirm',
            template: __webpack_require__(/*! ./registration-confirm.component.html */ "./src/app/auth/registration/registration-confirm/registration-confirm.component.html"),
            styles: [__webpack_require__(/*! ./registration-confirm.component.scss */ "./src/app/auth/registration/registration-confirm/registration-confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RegistrationConfirmComponent);
    return RegistrationConfirmComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration-successful/registration-successful.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/auth/registration/registration-successful/registration-successful.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"message-layout\">\r\n    <h1>Registration Successful!</h1>\r\n    <h3>Email with confirmation was sent to your email</h3>\r\n    <p>You will be navigated to login page or you can do it manually</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/registration/registration-successful/registration-successful.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/auth/registration/registration-successful/registration-successful.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-layout {\n  text-align: center;\n  margin-top: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLXN1Y2Nlc3NmdWwvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGF1dGhcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLXN1Y2Nlc3NmdWxcXHJlZ2lzdHJhdGlvbi1zdWNjZXNzZnVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi1zdWNjZXNzZnVsL3JlZ2lzdHJhdGlvbi1zdWNjZXNzZnVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtbGF5b3V0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/registration/registration-successful/registration-successful.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/auth/registration/registration-successful/registration-successful.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RegistrationSuccessfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationSuccessfulComponent", function() { return RegistrationSuccessfulComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RegistrationSuccessfulComponent = /** @class */ (function () {
    function RegistrationSuccessfulComponent(router) {
        this.router = router;
    }
    RegistrationSuccessfulComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.router.navigate(['login']);
        }, 10000);
    };
    RegistrationSuccessfulComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-successful',
            template: __webpack_require__(/*! ./registration-successful.component.html */ "./src/app/auth/registration/registration-successful/registration-successful.component.html"),
            styles: [__webpack_require__(/*! ./registration-successful.component.scss */ "./src/app/auth/registration/registration-successful/registration-successful.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationSuccessfulComponent);
    return RegistrationSuccessfulComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-layout\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card card-layout\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registrationForm\" class=\"card-block card-content form-layout\">\r\n          <h2 align=\"center\">Sign up</h2>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\r\n          <!-- Username -->\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\"\r\n                   id=\"username\"\r\n                   class=\"form-control\"\r\n                   name=\"username\"\r\n                   placeholder=\"Pick up a username\"\r\n                   formControlName=\"username\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.username.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.username.errors.minlength\">Name must be at least 4 characters long</div>\r\n              <div *ngIf=\"f.username.errors.maxlength\">Name must be less than 64 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- First name -->\r\n          <div class=\"form-group\">\r\n            <label>First name</label>\r\n            <input type=\"text\"\r\n                   id=\"firstName\"\r\n                   class=\"form-control\"\r\n                   name=\"firstName\"\r\n                   placeholder=\"Enter your first name\"\r\n                   formControlName=\"firstName\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.firstName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.firstName.errors.minlength\">First name must be at least 4 characters long</div>\r\n              <div *ngIf=\"f.firstName.errors.maxlength\">First name must be less than 40 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Last name -->\r\n          <div class=\"form-group\">\r\n            <label>Last name</label>\r\n            <input type=\"text\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"lastName\"\r\n                   id=\"lastName\"\r\n                   name=\"lastName\"\r\n                   placeholder=\"Enter your last name\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.lastName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.lastName.errors.minlength\">Last name must be at least 4 characters long</div>\r\n              <div *ngIf=\"f.lastName.errors.maxlength\">Last name must be less than 40 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Email -->\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"email\"\r\n                   id=\"email\"\r\n                   name=\"email\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"you@example.com\"\r\n                   formControlName=\"email\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.email.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.email.errors.email\">Email is not valid</div>\r\n              <div *ngIf=\"f.email.errors.maxlength\">Email name must be less than 128 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!--<input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">-->\r\n\r\n          <!-- Password -->\r\n          <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\"\r\n                   id=\"password\"\r\n                   class=\"form-control\"\r\n                   name=\"password\"\r\n                   placeholder=\"Create a password\"\r\n                   formControlName=\"password\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.password.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters long</div>\r\n              <div *ngIf=\"f.password.errors.maxlength\">Password must be less than 128 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- PasswordConfirm -->\r\n          <div class=\"form-group\">\r\n            <label>Password confirmation</label>\r\n            <input type=\"password\"\r\n                   id=\"passwordConfirm\"\r\n                   class=\"form-control\"\r\n                   name=\"passwordConfirm\"\r\n                   formControlName=\"passwordConfirm\"\r\n                   placeholder=\"Repeat password\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.passwordConfirm.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.passwordConfirm.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.passwordConfirm.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.passwordConfirm.errors.mustMatch\">Passwords must match</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <button class=\"btn btn-wide styledButton\" color=\"primary\" mdbBtn mdbWavesEffect>\r\n              Sign up\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n            </button>\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <img alt=\"javaImg\" class=\"img-brand\" src=\"../../../assets/images/java.png\">\r\n    </div>\r\n    <div class=\"offset-3\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 350px;\n  width: 350px;\n  margin-left: 90px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24vQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGF1dGhcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_must_mutch_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/must-mutch.validator */ "./src/app/helpers/must-mutch.validator.ts");






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.error = '';
        this.loading = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        if (this.authService.currentUserValue) {
            this.router.navigate(['']);
        }
        this.registrationForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(128)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(128)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: Object(_helpers_must_mutch_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'passwordConfirm')
        });
        window.scrollTo(0, 0);
    };
    Object.defineProperty(RegistrationComponent.prototype, "f", {
        get: function () {
            return this.registrationForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registrationForm.invalid) {
            return;
        }
        this.loading = true;
        var registrationPayload = {
            "firstName": this.registrationForm.controls.firstName.value.trim(),
            "lastName": this.registrationForm.controls.lastName.value.trim(),
            "username": this.registrationForm.controls.username.value.trim(),
            "email": this.registrationForm.controls.email.value.trim(),
            "password": this.registrationForm.controls.password.value,
            "role": "ROLE_USER"
        };
        this.authService.registration(registrationPayload).subscribe(function () {
            _this.router.navigate(['registrationSuccessful']);
        }, function (err) {
            _this.error = err;
            _this.loading = false;
            window.setTimeout(function () {
                _this.error = '';
            }, 10000);
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/auth/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/auth/registration/registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/bundle-list/bundle-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/bundle-list/bundle-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"test\">\r\n  <div *ngFor=\"let trip of trips\" class=\"col-md-3\">\r\n    <mat-card class=\"tripCard\">\r\n      <mat-card-header>\r\n        <!--<div mat-card-avatar class=\"tripCard-header-image\"></div>-->\r\n        <p>\r\n          <mat-card-title>{{trip.name}}</mat-card-title>\r\n        </p>\r\n        <!--<mat-card-subtitle>{{trip.location.country}}</mat-card-subtitle>-->\r\n      </mat-card-header>\r\n      <!--<img height=\"110px\" mat-card-image src={{trip.imgSrc}} alt=\"No picture available\">-->\r\n\r\n      <mat-card-content>\r\n        <div *ngIf=\"trip.imgSrc !== null && trip.imgSrc !== ''\">\r\n          <img alt=\"tripImg\" mat-card-image src=\"{{trip.imgSrc}}\">\r\n        </div>\r\n\r\n        <div *ngIf=\"trip.imgSrc === null || trip.imgSrc === ''\">\r\n          <img\r\n            alt=\"defaultTripImg\"\r\n            mat-card-image\r\n            src=\"https://filetandvine.com/wp-content/uploads/2015/07/pix-uploaded-placeholder.jpg\">\r\n        </div>\r\n\r\n\r\n        <div>\r\n          <p class=\"pl-3\">\r\n            From {{trip.location.name}} to {{trip.destination.name}}\r\n          </p>\r\n        </div>\r\n\r\n\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n\r\n        <label class=\"money-label\">$ {{trip.price}}</label>\r\n        <button (click)=this.intoBundlePage(trip.id) class=\"right\" color=\"info\" mat-stroked-button mdbBtn\r\n                mdbWavesEffect>\r\n          View details\r\n        </button>\r\n\r\n      </mat-card-actions>\r\n    </mat-card>\r\n    <br>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/bundle-list/bundle-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/bundle-list/bundle-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tripCard {\n  max-width: 400px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.tripCard {\n  margin-top: 20px;\n  min-width: 200px; }\n\n#test {\n  margin-right: 2%;\n  margin-left: 2%; }\n\n.right {\n  float: right;\n  margin-right: 7%;\n  background-color: #2E294E !important; }\n\n.money-label {\n  color: darkgreen;\n  -webkit-text-decoration: #004444;\n          text-decoration: #004444;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 120%;\n  margin-left: 5%; }\n\n.money-label-for-select {\n  color: darkgreen;\n  -webkit-text-decoration: #004444;\n          text-decoration: #004444;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 100%; }\n\n.tripCard {\n  max-width: 400px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.tripCard {\n  margin-top: 20px;\n  min-width: 200px; }\n\n.mat-card-image {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  height: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVuZGxlLWxpc3QvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGJ1bmRsZS1saXN0XFxidW5kbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBRWhCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFFaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnVuZGxlLWxpc3QvYnVuZGxlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0cmlwQ2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuLnRyaXBDYXJkIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jdGVzdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogNyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMjk0RSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9uZXktbGFiZWwge1xyXG4gIGNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiAjMDA0NDQ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLm1vbmV5LWxhYmVsLWZvci1zZWxlY3Qge1xyXG4gIGNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiAjMDA0NDQ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4udHJpcENhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi50cmlwQ2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICAvL2JhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWltYWdlIHtcclxuICAvL2Zsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bundle-list/bundle-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bundle-list/bundle-list.component.ts ***!
  \******************************************************/
/*! exports provided: BundleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundleListComponent", function() { return BundleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bundle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/bundle.service */ "./src/app/shared/bundle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BundleListComponent = /** @class */ (function () {
    function BundleListComponent(bundleService, router) {
        this.bundleService = bundleService;
        this.router = router;
    }
    BundleListComponent.prototype.ngOnInit = function () {
        this.getAllBundle();
    };
    BundleListComponent.prototype.getAllBundle = function () {
        var _this = this;
        this.bundleService.getAllBundles().subscribe(function (res) {
            _this.trips = res;
        });
    };
    BundleListComponent.prototype.intoBundlePage = function (id) {
        this.router.navigate(['bundle/' + id]);
    };
    BundleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bundle-list',
            template: __webpack_require__(/*! ./bundle-list.component.html */ "./src/app/bundle-list/bundle-list.component.html"),
            styles: [__webpack_require__(/*! ./bundle-list.component.scss */ "./src/app/bundle-list/bundle-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bundle_service__WEBPACK_IMPORTED_MODULE_2__["BundleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BundleListComponent);
    return BundleListComponent;
}());



/***/ }),

/***/ "./src/app/bundle/bundle.component.html":
/*!**********************************************!*\
  !*** ./src/app/bundle/bundle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n  <div class=\"container\">\r\n\r\n    <br>\r\n    <div class=\"row\">\r\n      <div *ngIf=\"bundle.imgSrc !== null && bundle.imgSrc !== ''\" class=\"col-md-8\">\r\n        <img alt=\"bundleImg\" class=\"img-responsive mainImage\" src=\"{{bundle.imgSrc}}\">\r\n      </div>\r\n\r\n      <div *ngIf=\"bundle.imgSrc === null || bundle.imgSrc === ''\" class=\"col-md-8\">\r\n        <img\r\n          alt=\"defaultBundleImg\"\r\n          class=\"img-responsive mainImage\"\r\n          src=\"https://secure.instantsoftwareonline.com/StayUSA/PropertyImages/2397/PD%2077820%20MountainView/L1.jpg?h=eS9IOEloWWlmNEc4WTArNVhzTkg1QT09\">\r\n      </div>\r\n\r\n      <div class=\"col-md-4 card headerCard\">\r\n\r\n        <div class=\"row pt-3\">\r\n          <div class=\"col-md-12 px-3 myHeaderText text-center\">\r\n            <b>{{bundle.name}}</b>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row py-0\">\r\n          <div class=\"col-md-12 px-3 myHeaderText text-center\">\r\n\r\n            <ng-template #t let-fill=\"fill\">\r\n              <span [class.full]=\"fill === 100\" class=\"star\">\r\n                <span [style.width.%]=\"fill\" class=\"half\">&#9733;</span>&#9733;\r\n              </span>\r\n            </ng-template>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row pt-3\">\r\n          <div class=\"offset-md-1\"></div>\r\n          <div class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-users\"></i> {{bundle.numberOfPeople}}\r\n          </div>\r\n\r\n          <div class=\"offset-md-1\"></div>\r\n          <div class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-dollar-sign\"></i> {{bundle.price}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row pt-3\">\r\n          <div class=\"offset-md-1\"></div>\r\n          <div class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-plane-departure\"></i> {{bundle.location.name}}\r\n          </div>\r\n\r\n          <div class=\"offset-md-1\"></div>\r\n          <div class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-plane-arrival\"></i> {{bundle.destination.name}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-auto mb-3\">\r\n          <div class=\"offset-md-2\"></div>\r\n          <div class=\"col-md-8\">\r\n            <button [disabled]=\"authority != 'ROLE_USER'\" block=\"true\"\r\n                    class=\"buyButton styledButton text-coloured mx-auto\" color=\"deep-purple\"\r\n                    mat-stroked-button\r\n                    mdbBtn\r\n                    mdbWavesEffect>\r\n              Add to cart\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row descriptionText mt-3\">\r\n\r\n      <div class=\"col-md-12 py-3 card roundedCard\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row px-5\">\r\n              <b>Description:</b>\r\n            </div>\r\n\r\n            <div class=\"row px-4\">\r\n              {{bundle.description}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <agm-map [latitude]=\"(bundle.location.coordinate.latitude+bundle.destination.coordinate.latitude)/2\"\r\n             [longitude]=\"(bundle.location.coordinate.longitude+bundle.destination.coordinate.longitude)/2\" [zoom]=\"2\"\r\n             class=\"mt-3\" style=\"height: 300px\"\r\n    >\r\n      <agm-marker [latitude]=\"bundle.location.coordinate.latitude\"\r\n                  [longitude]=\"bundle.location.coordinate.longitude\"\r\n      ></agm-marker>\r\n      <agm-marker [latitude]=\"bundle.destination.coordinate.latitude\"\r\n                  [longitude]=\"bundle.destination.coordinate.longitude\"></agm-marker>\r\n\r\n      <agm-polyline [editable]=\"false\">\r\n        <agm-polyline-point\r\n          [latitude]=\"bundle.location.coordinate.latitude\"\r\n          [longitude]=\"bundle.location.coordinate.longitude\">\r\n        </agm-polyline-point>\r\n        <agm-polyline-point\r\n          [latitude]=\"bundle.destination.coordinate.latitude\"\r\n          [longitude]=\"bundle.destination.coordinate.longitude\">\r\n        </agm-polyline-point>\r\n      </agm-polyline>\r\n    </agm-map>\r\n\r\n    <div class=\"row mt-3\">\r\n      <div *ngFor=\"let trip of bundle.bundleTrips\" class=\"col-md-4 descriptionText\">\r\n        <div class=\"py-3 mx-2 mb-1 card roundedCard\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 px-auto text-center\">\r\n              <b>{{trip.name}}</b>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-md-12 pl-4\">\r\n              {{trip.price}}\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row pt-3\">\r\n            <div class=\"col-md-5 myText text-left\">\r\n              <i class=\"fas fa-plane-departure\"></i> {{trip.location.name}}\r\n            </div>\r\n\r\n            <div class=\"col-md-5 myText text-left\">\r\n              <i class=\"fas fa-plane-arrival\"></i> {{trip.destination.name}}\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"bundleEditMode\">\r\n\r\n  <div class=\"row\">\r\n    <button (click)=\"switchBundleEditMode()\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" color=\"info\"\r\n            mdbBtn\r\n            mdbWavesEffect\r\n            type=\"button\">\r\n      Back\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-bundle-form [updateMode]=\"true\" [bundle]=\"bundle\"></app-bundle-form>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/bundle/bundle.component.scss":
/*!**********************************************!*\
  !*** ./src/app/bundle/bundle.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainImage {\n  border-bottom-left-radius: 5px !important;\n  border-top-left-radius: 5px !important;\n  min-height: 28em;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVuZGxlL0M6XFxVc2Vyc1xcVXNlclxcTmV0Y3JhY2tlclxcdHJpcGdvZFxcZnJvbnRlbmRcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxidW5kbGVcXGJ1bmRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J1bmRsZS9idW5kbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkltYWdlIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAyOGVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bundle/bundle.component.ts":
/*!********************************************!*\
  !*** ./src/app/bundle/bundle.component.ts ***!
  \********************************************/
/*! exports provided: BundleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundleComponent", function() { return BundleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_bundle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/bundle.service */ "./src/app/shared/bundle.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../system/header/user-basket/user-basket.component */ "./src/app/system/header/user-basket/user-basket.component.ts");






var BundleComponent = /** @class */ (function () {
    function BundleComponent(route, bundleService, authService, userBasket) {
        this.route = route;
        this.bundleService = bundleService;
        this.authService = authService;
        this.userBasket = userBasket;
        this.bundleEditMode = false;
        this.currentRating = 0;
    }
    BundleComponent.prototype.ngOnInit = function () {
        if (this.authService.getDecodedToken()) {
            this.authority = this.authService.getDecodedToken().authority;
        }
        this.bundle = this.route.snapshot.data.bundleData;
        var token = this.authService.getDecodedToken();
        window.scrollTo(0, 0);
    };
    BundleComponent.prototype.switchBundleEditMode = function () {
        this.bundleEditMode = !this.bundleEditMode;
    };
    BundleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bundle',
            template: __webpack_require__(/*! ./bundle.component.html */ "./src/app/bundle/bundle.component.html"),
            providers: [_system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_5__["UserBasketComponent"]],
            styles: [__webpack_require__(/*! ./bundle.component.scss */ "./src/app/bundle/bundle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_bundle_service__WEBPACK_IMPORTED_MODULE_3__["BundleService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_5__["UserBasketComponent"]])
    ], BundleComponent);
    return BundleComponent;
}());



/***/ }),

/***/ "./src/app/bundle/bundle.resolver.ts":
/*!*******************************************!*\
  !*** ./src/app/bundle/bundle.resolver.ts ***!
  \*******************************************/
/*! exports provided: BundleResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundleResolver", function() { return BundleResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bundle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/bundle.service */ "./src/app/shared/bundle.service.ts");



var BundleResolver = /** @class */ (function () {
    function BundleResolver(bundleService) {
        this.bundleService = bundleService;
    }
    BundleResolver.prototype.resolve = function (route) {
        return this.bundleService.getBundleById(+route.paramMap.get('id'));
    };
    BundleResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bundle_service__WEBPACK_IMPORTED_MODULE_2__["BundleService"]])
    ], BundleResolver);
    return BundleResolver;
}());



/***/ }),

/***/ "./src/app/chat/approvers-chat/approvers-chat.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/chat/approvers-chat/approvers-chat.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card chat-container\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-3\">\r\n        <div class=\"tab-container\">\r\n          <div class=\"tab-header\">\r\n            Dialogs\r\n          </div>\r\n          <div *ngFor=\"let chat of chats\" class=\"scrollbar-ripe-malinka\">\r\n            <button (click)=\"getChatByChatId(chat)\">\r\n              {{chat.username}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-9\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div #approversChat class=\"card chat-list scrollbar-ripe-malinka\">\r\n              <div *ngFor=\"let message of getCurrentChat()\">\r\n                <div *ngIf=\"message.username !== authService.getDecodedToken().username\">\r\n                  <div class=\"row mw-85\">\r\n                    <div class=\"col-md-auto col-auto pl-4 py-1\">\r\n                      <div class=\"row\">\r\n\r\n                        <div class=\"col-md-12 card pt-2\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-auto col-md-auto p-1 py-2 ml-2\">\r\n                              <a routerLink=\"/user/{{message.userId}}\">\r\n                                <img alt=\"User pic\"\r\n                                     src=\"{{gravatar.getGravatarLink(message.email)}}?s=35&d=mp\"\r\n                                     class=\"img-responsive userPic\"/>\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"col-auto col-md-auto\">\r\n\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                  <a routerLink=\"/user/{{message.userId}}\"><u>{{message.username}}</u></a>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                  <span>{{message.message}}</span>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"row\">\r\n                                <div class=\"col-md-12 pt-1\" style=\"padding-right: 5px; padding-bottom: 5px\">\r\n                                  <small class=\"float-right\">{{message.messageTime | date: 'h:mm a'}}</small>\r\n                                </div>\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"message.username === authService.getDecodedToken().username\">\r\n                  <div class=\"row pull-right mw-85\">\r\n                    <div class=\"col-md-auto col-auto pl-4 pr-4 py-1\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12 card pt-2\">\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <span>{{message.message}}</span>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12 pt-1\" style=\"padding-right: 5px; padding-bottom: 5px\">\r\n                              <small class=\"float-right\">{{message.messageTime | date: 'h:mm a'}}</small>\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <div class=\"col-12\" style=\"padding:0\">\r\n          <mat-card>\r\n            <mat-card-content>\r\n              <div class=\"row\">\r\n                <div class=\"col-1\">\r\n                  <mat-icon>message</mat-icon>\r\n                </div>\r\n                <div class=\"col-9\">\r\n                  <div class=\"textarea-border\">\r\n                    <textarea #input\r\n                              (keypress)=\"onKeyDown($event, input.value)\"\r\n                              [(ngModel)]=\"inputValue\"\r\n                              class=\"textarea-layout\"\r\n                              matInput\r\n                              placeholder=\"Type your message\"\r\n                              rows=\"3\">\r\n                    </textarea>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                  <button (click)=\"sendMessage(input.value); input.value = null\" class=\"btn btn-info btn-md btn-send\"\r\n                          type=\"button\">Send\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/approvers-chat/approvers-chat.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/chat/approvers-chat/approvers-chat.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-header {\n  display: block;\n  background-color: #2E294E !important;\n  border: 1px solid #2E294E;\n  border-radius: 5px 5px 0 0;\n  width: 100%;\n  color: white;\n  padding: 5px 10px 5px 5px;\n  text-align: left; }\n\n.tab-container {\n  float: left;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 100%; }\n\n.tab-container button {\n  display: block;\n  background-color: inherit;\n  color: black;\n  width: 100%;\n  padding: 5px 10px 5px 5px;\n  border: none;\n  outline: none;\n  text-align: left;\n  cursor: pointer;\n  transition: 0.3s; }\n\n.tab-container button:hover {\n  background-color: #ddd; }\n\n.tab-container button.active {\n  background-color: #ccc; }\n\n.chat-input {\n  width: 100%;\n  resize: none;\n  border: none;\n  outline: none; }\n\nu:hover {\n  cursor: pointer; }\n\nu {\n  color: black;\n  outline: none; }\n\nsmall {\n  font-size: 10px;\n  color: grey; }\n\n.bold-font {\n  font-weight: bold; }\n\n.btn-send {\n  background-color: #2E294E !important;\n  margin-top: 0; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #F5F5F5;\n  border-radius: 10px; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #2E294E !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9hcHByb3ZlcnMtY2hhdC9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcY2hhdFxcYXBwcm92ZXJzLWNoYXRcXGFwcHJvdmVycy1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFJYjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLG9DQUFvQztFQUNwQyxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxvREFBb0Q7RUFDcEQseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxtQkFBbUI7RUFDbkIsb0RBQW9EO0VBQ3BELG9DQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9hcHByb3ZlcnMtY2hhdC9hcHByb3ZlcnMtY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJFMjk0RTtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGFiLWNvbnRhaW5lciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9wYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGFiLWNvbnRhaW5lciBidXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLnRhYi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4udGFiLWNvbnRhaW5lciBidXR0b24uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uY2hhdC1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG51OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uYm9sZC1mb250IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bi1zZW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnNjcm9sbGJhci1yaXBlLW1hbGlua2E6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNjcm9sbGJhci1yaXBlLW1hbGlua2E6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXJpcGUtbWFsaW5rYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/approvers-chat/approvers-chat.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/chat/approvers-chat/approvers-chat.component.ts ***!
  \*****************************************************************/
/*! exports provided: ApproversChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproversChatComponent", function() { return ApproversChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/stomp-client.service */ "./src/app/shared/stomp-client.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/message.service */ "./src/app/shared/message.service.ts");
/* harmony import */ var _helpers_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/utils.service */ "./src/app/helpers/utils.service.ts");






var ApproversChatComponent = /** @class */ (function () {
    function ApproversChatComponent(stompClientService, authService, messageService) {
        this.stompClientService = stompClientService;
        this.authService = authService;
        this.messageService = messageService;
        this.inputValue = null;
        this.chats = [];
        this.chosenChat = null;
        this.userEmail = null;
        this.gravatar = _helpers_utils_service__WEBPACK_IMPORTED_MODULE_5__["Utils"];
    }
    ApproversChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.authService.getDecodedToken();
        this.username = token.username;
        this.userId = token.sub;
        this.role = token.authority;
        this.userEmail = token.email;
        this.messageService.getChatsForApprover().subscribe(function (data) {
            if (data) {
                _this.chats = data;
            }
        });
        this.stompClientService.messagesForSupportChat.subscribe(function (message) {
            if (message) {
                if (_this.chosenChat) {
                    if (_this.chosenChat.id == message.chatId) {
                        _this.currentChat.push(message);
                        _helpers_utils_service__WEBPACK_IMPORTED_MODULE_5__["Utils"].scrollToBottom(_this.scrollContainer);
                    }
                }
                _this.messageService.getChatsForApprover().subscribe(function (data) {
                    _this.chats = data;
                });
            }
        });
    };
    ApproversChatComponent.prototype.sendMessage = function (message) {
        if (!message.trim() || !this.chosenChat) {
            return;
        }
        var messagePayload = {
            username: this.username,
            userId: this.userId,
            ownerId: this.chosenChat.userId,
            message: message,
            chatId: this.chosenChat.id,
            messageTime: new Date(),
            email: this.userEmail
        };
        this.stompClientService.sendMessageToSupportChat(messagePayload);
        this.inputValue = '';
        _helpers_utils_service__WEBPACK_IMPORTED_MODULE_5__["Utils"].scrollToBottom(this.scrollContainer);
    };
    ApproversChatComponent.prototype.onKeyDown = function (event, msg) {
        if (event.key == 'Enter') {
            this.sendMessage(msg);
            event.preventDefault();
        }
    };
    ApproversChatComponent.prototype.getChatByChatId = function (chat) {
        var _this = this;
        this.chosenChat = chat;
        this.messageService.getChatMessagesByChatId(chat.id).subscribe(function (data) {
            _this.currentChat = data;
        });
    };
    ApproversChatComponent.prototype.getCurrentChat = function () {
        if (this.chosenChat) {
            return this.currentChat;
        }
        else {
            return [];
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('approversChat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ApproversChatComponent.prototype, "scrollContainer", void 0);
    ApproversChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approvers-chat',
            template: __webpack_require__(/*! ./approvers-chat.component.html */ "./src/app/chat/approvers-chat/approvers-chat.component.html"),
            styles: [__webpack_require__(/*! ./approvers-chat.component.scss */ "./src/app/chat/approvers-chat/approvers-chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stomp_client_service__WEBPACK_IMPORTED_MODULE_2__["StompClientService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], ApproversChatComponent);
    return ApproversChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat-component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");



var ChatComponent = /** @class */ (function () {
    function ChatComponent(authService) {
        this.authService = authService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.authority = this.authService.getDecodedToken().authority;
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card card-layout\">\r\n\r\n    <mat-tab-group>\r\n      <mat-tab *ngIf=\"authority == 'ROLE_USER'\" label=\"Support chat\">\r\n        <app-support-chat></app-support-chat>\r\n      </mat-tab>\r\n      <mat-tab *ngIf=\"authority == 'ROLE_APPROVER'\" label=\"Approvers chat\">\r\n        <app-approvers-chat></app-approvers-chat>\r\n      </mat-tab>\r\n      <mat-tab label=\"Global chat\">\r\n        <app-global-chat></app-global-chat>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab {\n  font-weight: bolder; }\n\n.tabBorderPadding {\n  padding: 50px 0 50px 0; }\n\n.container, .grid-container {\n  padding: 0;\n  border-radius: 5px;\n  margin-top: 20px;\n  background-color: white;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdGFiIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4udGFiQm9yZGVyUGFkZGluZyB7XHJcbiAgcGFkZGluZzogNTBweCAwIDUwcHggMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciwgLmdyaWQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chat/global-chat/global-chat.component.html":
/*!*************************************************************!*\
  !*** ./src/app/chat/global-chat/global-chat.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-container\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"offset-1\"></div>\r\n\r\n    <div class=\"col-10\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div #globalChat class=\"card chat-list scrollbar-ripe-malinka\">\r\n            <div *ngFor=\"let message of messages\">\r\n\r\n              <div *ngIf=\"message.userId !== userId\">\r\n                <div class=\"row mw-85\">\r\n                  <div class=\"col-md-auto col-auto pl-4 py-1\">\r\n                    <div class=\"row\">\r\n\r\n                      <div class=\"col-md-12 card pt-2\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-auto col-md-auto p-1 py-2 ml-2\">\r\n                            <a routerLink=\"/user/{{message.userId}}\">\r\n                              <img alt=\"User pic\"\r\n                                   src=\"{{gravatar.getGravatarLink(message.email)}}?s=35&d=mp\"\r\n                                   class=\"img-responsive userPic\"/>\r\n                            </a>\r\n                          </div>\r\n                          <div class=\"col-auto col-md-auto\">\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <a routerLink=\"/user/{{message.userId}}\"><u>{{message.username}}</u></a>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <span>{{message.message}}</span>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12 pt-1\" style=\"padding-right: 5px; padding-bottom: 5px\">\r\n                                <small class=\"float-right\">{{message.time | date: 'h:mm a'}}</small>\r\n                              </div>\r\n                            </div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"message.userId === userId\">\r\n                <div *ngIf=\"message.username === authService.getDecodedToken().username\">\r\n                  <div class=\"row pull-right mw-85\">\r\n                    <div class=\"col-md-auto col-auto pl-4 pr-4 py-1\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12 card pt-2\">\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <span>{{message.message}}</span>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12 pt-1\" style=\"padding-right: 5px; padding-bottom: 5px\">\r\n                              <small class=\"float-right\">{{message.time | date: 'h:mm a'}}</small>\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <i *ngIf=\"!notConfirmedMessages.indexOf(message)\" class=\"fa fa-spinner fa-spin\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div class=\"col-12\" style=\"padding:0\">\r\n        <mat-card>\r\n          <mat-card-content>\r\n            <div class=\"row\">\r\n              <div class=\"col-1\">\r\n                <mat-icon>message</mat-icon>\r\n              </div>\r\n              <div class=\"col-9\">\r\n                <div class=\"textarea-border\">\r\n                    <textarea #input\r\n                              (keypress)=\"onKeyDown($event, input.value)\"\r\n                              class=\"textarea-layout from-control\"\r\n                              [(ngModel)]=\"value\"\r\n                              matInput\r\n                              placeholder=\"Type your message\"\r\n                              rows=\"3\">\r\n                    </textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <button (click)=\"sendMessage(input.value); input.value = null\" class=\"btn btn-info btn-md btn-send\"\r\n                        type=\"button\">Send\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <br>\r\n      </div>\r\n      <br>\r\n    </div>\r\n    <div class=\"offset-1\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/global-chat/global-chat.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/chat/global-chat/global-chat.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "strong {\n  font-weight: bold; }\n\nsmall {\n  font-size: 10px;\n  color: grey; }\n\nu {\n  color: black;\n  outline: none; }\n\nu:hover {\n  cursor: pointer; }\n\n.btn-send {\n  background-color: #2E294E !important;\n  margin-top: 0; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #F5F5F5;\n  border-radius: 10px; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #2E294E !important; }\n\n.bold-font {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9nbG9iYWwtY2hhdC9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcY2hhdFxcZ2xvYmFsLWNoYXRcXGdsb2JhbC1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWEsRUFBQTs7QUFHZjtFQUNFLG9EQUFvRDtFQUNwRCx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG1CQUFtQjtFQUNuQixvREFBb0Q7RUFDcEQsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2dsb2JhbC1jaGF0L2dsb2JhbC1jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG51IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxudTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLXNlbmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXJpcGUtbWFsaW5rYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXJpcGUtbWFsaW5rYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXItcmlwZS1tYWxpbmthOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvbGQtZm9udCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/chat/global-chat/global-chat.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/global-chat/global-chat.component.ts ***!
  \***********************************************************/
/*! exports provided: GlobalChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalChat", function() { return GlobalChat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/stomp-client.service */ "./src/app/shared/stomp-client.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _helpers_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/utils.service */ "./src/app/helpers/utils.service.ts");





var GlobalChat = /** @class */ (function () {
    function GlobalChat(stompClientService, authService) {
        this.stompClientService = stompClientService;
        this.authService = authService;
        this.messages = [];
        this.value = null;
        this.userEmail = null;
        this.notConfirmedMessages = [];
        this.gravatar = _helpers_utils_service__WEBPACK_IMPORTED_MODULE_4__["Utils"];
    }
    GlobalChat.prototype.ngOnInit = function () {
        var _this = this;
        this.userEmail = this.authService.getDecodedToken().email;
        this.stompClientService.messageInGlobalChat.subscribe(function (data) {
            if (data) {
                if (data && data.userId == _this.userId) {
                    _this.checkIfSent(data);
                }
                else {
                    _this.messages.push(data);
                }
                _helpers_utils_service__WEBPACK_IMPORTED_MODULE_4__["Utils"].scrollToBottom(_this.scrollContainer);
            }
        });
        var token = this.authService.getDecodedToken();
        this.username = token.username;
        this.userId = token.sub;
        this.role = token.authority;
        _helpers_utils_service__WEBPACK_IMPORTED_MODULE_4__["Utils"].scrollToBottom(this.scrollContainer);
    };
    GlobalChat.prototype.sendMessage = function (message) {
        if (!message.trim()) {
            return;
        }
        var messagePayload = {
            username: this.username,
            userId: this.userId,
            role: this.role,
            message: message,
            time: new Date(),
            destinationId: this.userId,
            email: this.userEmail
        };
        this.stompClientService.sendMessageToGlobalChat(messagePayload);
        this.notConfirmedMessages.push(messagePayload);
        this.messages.push(messagePayload);
        this.value = null;
        _helpers_utils_service__WEBPACK_IMPORTED_MODULE_4__["Utils"].scrollToBottom(this.scrollContainer);
    };
    GlobalChat.prototype.onKeyDown = function (event, msg) {
        if (event.key == 'Enter') {
            this.sendMessage(msg);
            event.preventDefault();
        }
    };
    GlobalChat.prototype.checkIfSent = function (message) {
        if (this.notConfirmedMessages.indexOf(message)) {
            this.notConfirmedMessages.splice(this.notConfirmedMessages.indexOf(message), 1);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('globalChat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GlobalChat.prototype, "scrollContainer", void 0);
    GlobalChat = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-global-chat',
            template: __webpack_require__(/*! ./global-chat.component.html */ "./src/app/chat/global-chat/global-chat.component.html"),
            styles: [__webpack_require__(/*! ./global-chat.component.scss */ "./src/app/chat/global-chat/global-chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stomp_client_service__WEBPACK_IMPORTED_MODULE_2__["StompClientService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], GlobalChat);
    return GlobalChat;
}());



/***/ }),

/***/ "./src/app/chat/support-chat/support-chat.component.html":
/*!***************************************************************!*\
  !*** ./src/app/chat/support-chat/support-chat.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-container\">\r\n  <div class=\"row no-gutters\">\r\n    <div class=\"offset-1\"></div>\r\n    <div class=\"col-10\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div #supportChat class=\"card chat-list scrollbar-ripe-malinka\">\r\n            <div *ngFor=\"let message of messages\">\r\n              <div *ngIf=\"message.username !== username\">\r\n                <div class=\"row mw-85\">\r\n                  <div class=\"col-md-auto col-auto pl-4 py-1\">\r\n                    <div class=\"row\">\r\n\r\n                      <div class=\"col-md-12 card pt-2\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-auto col-md-auto p-1 py-2 ml-2\">\r\n                            <a routerLink=\"/user/{{message.userId}}\">\r\n                              <img alt=\"User pic\"\r\n                                   src=\"{{gravatar.getGravatarLink(message.email)}}?s=35&d=mp\"\r\n                                   class=\"img-responsive userPic\"/>\r\n                            </a>\r\n                          </div>\r\n                          <div class=\"col-auto col-md-auto\">\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <a routerLink=\"/user/{{message.userId}}\"><u>{{message.username}}</u></a>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <span>{{message.message}}</span>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12 pt-1\" style=\"padding-right: 5px; padding-bottom: 5px\">\r\n                                <small class=\"float-right\">{{message.messageTime | date: 'h:mm a'}}</small>\r\n                              </div>\r\n                            </div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"message.username === username\">\r\n                <div *ngIf=\"message.username === authService.getDecodedToken().username\">\r\n                  <div class=\"row pull-right mw-85\">\r\n                    <div class=\"col-md-auto col-auto pl-4 pr-4 py-1\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12 card pt-2\">\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <span>{{message.message}}</span>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12 pt-1\" style=\"padding-right: 5px; padding-bottom: 5px\">\r\n                              <small class=\"float-right\">{{message.messageTime | date: 'h:mm a'}}</small>\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <i *ngIf=\"!notConfirmedMessages.indexOf(message)\" class=\"fa fa-spinner fa-spin\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div class=\"col-12\" style=\"padding: 0;\">\r\n        <mat-card>\r\n          <mat-card-content>\r\n            <div class=\"row\">\r\n              <div class=\"col-1\">\r\n                <mat-icon>message</mat-icon>\r\n              </div>\r\n              <div class=\"col-9\">\r\n                <div class=\"textarea-border\">\r\n                    <textarea #input\r\n                              (keypress)=\"onKeyDown($event, input.value)\"\r\n                              [(ngModel)]=\"value\"\r\n                              class=\"textarea-layout\"\r\n                              matInput\r\n                              placeholder=\"Type your message\"\r\n                              rows=\"3\">\r\n                    </textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <button (click)=\"sendMsg(input.value); input.value = null\" class=\"btn btn-info btn-md btn-send\"\r\n                        type=\"button\">Send\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <br>\r\n      </div>\r\n      <br>\r\n    </div>\r\n  </div>\r\n  <div class=\"offset-1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/support-chat/support-chat.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/chat/support-chat/support-chat.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "strong {\n  font-weight: bold; }\n\nsmall {\n  font-size: 10px;\n  color: grey; }\n\nu {\n  color: black;\n  outline: none; }\n\nu:hover {\n  cursor: pointer; }\n\n.btn-send {\n  background-color: #2E294E !important;\n  margin-top: 0; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #F5F5F5;\n  border-radius: 10px; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #2E294E !important; }\n\n.bold-font {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9zdXBwb3J0LWNoYXQvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGNoYXRcXHN1cHBvcnQtY2hhdFxcc3VwcG9ydC1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWEsRUFBQTs7QUFHZjtFQUNFLG9EQUFvRDtFQUNwRCx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG1CQUFtQjtFQUNuQixvREFBb0Q7RUFDcEQsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGF0L3N1cHBvcnQtY2hhdC9zdXBwb3J0LWNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG51IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxudTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLXNlbmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXJpcGUtbWFsaW5rYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXJpcGUtbWFsaW5rYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXItcmlwZS1tYWxpbmthOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvbGQtZm9udCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat/support-chat/support-chat.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/chat/support-chat/support-chat.component.ts ***!
  \*************************************************************/
/*! exports provided: SupportChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportChatComponent", function() { return SupportChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/stomp-client.service */ "./src/app/shared/stomp-client.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/message.service */ "./src/app/shared/message.service.ts");
/* harmony import */ var _helpers_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/utils.service */ "./src/app/helpers/utils.service.ts");






var SupportChatComponent = /** @class */ (function () {
    function SupportChatComponent(stompClientService, authService, messageService) {
        this.stompClientService = stompClientService;
        this.authService = authService;
        this.messageService = messageService;
        this.value = null;
        this.notConfirmedMessages = [];
        this.currentChat = null;
        this.messages = [];
        this.userEmail = null;
        this.gravatar = _helpers_utils_service__WEBPACK_IMPORTED_MODULE_5__["Utils"];
    }
    SupportChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.authService.getDecodedToken();
        this.username = token.username;
        this.userId = token.sub;
        this.role = token.authority;
        this.userEmail = this.authService.getDecodedToken().email;
        this.messageService.getChatForCurrentUser().subscribe(function (chat) {
            _this.currentChat = chat;
            _this.messageService.getChatMessagesByChatId(chat.id).subscribe(function (data) {
                _this.messages = data;
            });
        });
        this.stompClientService.messagesForSupportChat.subscribe(function (data) {
            if (data) {
                if (data.userId == _this.userId) {
                    _this.checkIfSent(data);
                }
                else {
                    _this.messages.push(data);
                }
                _helpers_utils_service__WEBPACK_IMPORTED_MODULE_5__["Utils"].scrollToBottom(_this.scrollContainer);
            }
        });
        _helpers_utils_service__WEBPACK_IMPORTED_MODULE_5__["Utils"].scrollToBottom(this.scrollContainer);
    };
    SupportChatComponent.prototype.ngOnDestroy = function () {
        this.stompClientService.messagesForSupportChat.unsubscribe();
    };
    SupportChatComponent.prototype.sendMsg = function (msg) {
        if (!msg.trim()) {
            return;
        }
        var messagePayload = {
            chatId: this.currentChat.id,
            ownerId: this.currentChat.userId,
            username: this.username,
            userId: this.userId,
            message: msg,
            messageTime: new Date(),
            email: this.userEmail
        };
        this.stompClientService.sendMessageToSupportChat(messagePayload);
        this.notConfirmedMessages.push(messagePayload);
        this.messages.push(messagePayload);
        this.value = null;
        _helpers_utils_service__WEBPACK_IMPORTED_MODULE_5__["Utils"].scrollToBottom(this.scrollContainer);
    };
    SupportChatComponent.prototype.onKeyDown = function (event, msg) {
        if (event.key == 'Enter') {
            this.sendMsg(msg);
            event.preventDefault();
        }
    };
    SupportChatComponent.prototype.checkIfSent = function (message) {
        if (this.notConfirmedMessages.indexOf(message)) {
            this.notConfirmedMessages.splice(this.notConfirmedMessages.indexOf(message), 1);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('supportChat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SupportChatComponent.prototype, "scrollContainer", void 0);
    SupportChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support-chat',
            template: __webpack_require__(/*! ./support-chat.component.html */ "./src/app/chat/support-chat/support-chat.component.html"),
            styles: [__webpack_require__(/*! ./support-chat.component.scss */ "./src/app/chat/support-chat/support-chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stomp_client_service__WEBPACK_IMPORTED_MODULE_2__["StompClientService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], SupportChatComponent);
    return SupportChatComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"offset-3\"></div>\r\n<div class=\"col-6 container container-layout\" *ngIf=\"isViewable\">\r\n  <child></child>\r\n  <div class=\"row btn-panel\">\r\n    <div class=\"col-12\">\r\n      <button type=\"button\" (click)=\"pay()\" class=\"btn btn-info btn-md btn-not\">\r\n        Pay\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-6 container container-layout\" *ngIf=\"!isViewable\">\r\n  <h3>\r\n    ORDER COMPLETED\r\n  </h3>\r\n</div>\r\n<div class=\"offset-3\"></div>\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.scss":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-layout {\n  text-align: center;\n  margin-top: 15%; }\n\n.btn-not {\n  width: 100%;\n  margin-left: 0;\n  alignment: center;\n  max-width: 20%;\n  background-color: #2E294E !important; }\n\n.btn-panel {\n  padding: 0 5px 0 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXGNoZWNrb3V0XFxjaGVja291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWxheW91dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG5cclxuLmJ0bi1ub3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIGFsaWdubWVudDogY2VudGVyO1xyXG4gIG1heC13aWR0aDogMjAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wYW5lbCB7XHJcbiAgcGFkZGluZzogMCA1cHggMCA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../system/header/user-basket/user-basket.component */ "./src/app/system/header/user-basket/user-basket.component.ts");





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(http, userBasket) {
        this.http = http;
        this.userBasket = userBasket;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.isViewable = true;
        window.scrollTo(0, 0);
    };
    CheckoutComponent.prototype.pay = function () {
        this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["COMPLETE_ORDER"]).subscribe(function (data) {
        }, function (err) {
        });
        this.userBasket.clear();
        this.isViewable = false;
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            providers: [_system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_4__["UserBasketComponent"]],
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/checkout/checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_4__["UserBasketComponent"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/discount-form/discount-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/discount-form/discount-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-4\">\r\n  <div class=\"row pt-0 mt-0\">\r\n    <div class=\"offset-md-1\"></div>\r\n    <div class=\"col-md-10\">\r\n      ​\r\n      <h2 *ngIf=\"!editMode\" align=\"center\" class=\"mb-0\">Add discount</h2>\r\n      <h2 *ngIf=\"editMode\" align=\"center\" class=\"mb-0\">Edit discount</h2>\r\n\r\n      <div *ngIf=\"error\" align=\"center\" class=\"alert alert-danger\">{{error}}</div>\r\n      ​\r\n      <div class=\"row mb-0\">\r\n        <div *ngIf=\"!editMode\" class=\"form-group col-md-12\">\r\n          <label for=\"serviceControl\">Discounted trip or suggestion</label>\r\n\r\n          <ng-select [formControl]=\"serviceControl\"\r\n                     [items]=\"availableServices\"\r\n                     bindLabel=\"name\"\r\n                     bindValue=\"id\"\r\n                     id=\"serviceControl\">\r\n          </ng-select>\r\n        </div>\r\n\r\n        <div *ngIf=\"editMode\" class=\"form-group col-md-12\">\r\n          <label for=\"serviceControlReadonly\">Discounted trip or suggestion</label>\r\n          <select [formControl]=\"serviceControl\"\r\n                  class=\"form-control\"\r\n                  id=\"serviceControlReadonly\"\r\n                  readonly=\"true\">\r\n            <option [value]=\"editableDiscount.serviceId\">{{editableDiscount.service.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <form (ngSubmit)=\"saveDiscount(discountForm.value)\"\r\n            *ngIf=\"serviceControl.value != null && serviceControl.value != 0\"\r\n            [formGroup]=\"discountForm\"\r\n            class=\"pt-0 mt-0\">\r\n        ​\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-6 px-1\">\r\n            <div class=\"form-row\">\r\n\r\n              <div *ngIf=\"!startDatePassed\" class=\"form-group col-md-12\">\r\n                <label for=\"inputStartDate\">Discount start date</label>\r\n                <input [ngClass]=\"{ 'is-invalid': submitted && discountForm.controls.startDate.errors }\"\r\n                       class=\"form-control\"\r\n                       formControlName=\"startDate\"\r\n                       id=\"inputStartDate\"\r\n                       max=\"3000-01-01\"\r\n                       min=\"2019-01-01\"\r\n                       type=\"date\"\r\n                       value=\"{{getDateString(startDate)}}\"/>\r\n\r\n                <div *ngIf=\"submitted && discountForm.controls.startDate.errors\" class=\"invalid-input\">\r\n                  <div *ngIf=\"discountForm.controls.startDate.errors.required\">Field is required</div>\r\n                  <div *ngIf=\"discountForm.controls.startDate.errors.startDate\">Start date must be tomorrow or later\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div *ngIf=\"startDatePassed\" class=\"form-group col-md-12\">\r\n                <label for=\"inputEditStartDate\">Discount start date</label>\r\n                <input class=\"form-control\"\r\n                       formControlName=\"startDate\"\r\n                       id=\"inputEditStartDate\"\r\n                       readonly\r\n                       type=\"date\"\r\n                       value=\"{{getDateString(startDate)}}\"/>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <div *ngIf=\"!endDatePassed\" class=\"form-group col-md-12\">\r\n                <label for=\"inputEndDate\">Discount end date</label>\r\n                <input [ngClass]=\"{ 'is-invalid': submitted && discountForm.controls.endDate.errors }\"\r\n                       class=\"form-control\"\r\n                       formControlName=\"endDate\"\r\n                       id=\"inputEndDate\"\r\n                       max=\"3000-01-01\"\r\n                       min=\"2019-01-01\"\r\n                       type=\"date\"\r\n                       value=\"{{getDateString(endDate)}}\"/>\r\n\r\n                <div *ngIf=\"submitted && discountForm.controls.endDate.errors\" class=\"invalid-input\">\r\n                  <div *ngIf=\"discountForm.controls.endDate.errors.required\">Field is required</div>\r\n                  <div *ngIf=\"discountForm.controls.endDate.errors.dateOrder\">Incorrect date order</div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div *ngIf=\"endDatePassed\" class=\"form-group col-md-12\">\r\n                <label for=\"inputEditEndDate\">Discount end date</label>\r\n                <input class=\"form-control\"\r\n                       formControlName=\"endDate\"\r\n                       id=\"inputEditEndDate\"\r\n                       type=\"date\"\r\n                       value=\"{{getDateString(endDate)}}\"/>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <div *ngIf=\"!startDatePassed\" class=\"form-group col-md-12\">\r\n                <label for=\"discountType\">Discount type</label>\r\n                <select (change)=\"selectChangeHandler($event)\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && discountForm.controls.type.errors }\"\r\n                        class=\"form-control\"\r\n                        formControlName=\"type\"\r\n                        id=\"discountType\">\r\n                  <option value={{FixedDiscountType}}>Fixed</option>\r\n                  <option value={{PercentageDiscountType}}>Percentage</option>\r\n                </select>\r\n\r\n                <div *ngIf=\"submitted && discountForm.controls.type.errors\" class=\"invalid-input\">\r\n                  <div *ngIf=\"discountForm.controls.type.errors.required\">Field is required</div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div *ngIf=\"startDatePassed\" class=\"form-group col-md-12\">\r\n                <label for=\"discountEditType\">Discount type</label>\r\n                <select class=\"form-control\"\r\n                        formControlName=\"type\"\r\n                        id=\"discountEditType\"\r\n                        readonly>\r\n                  <option value={{FixedDiscountType}}>Fixed</option>\r\n                  <option value={{PercentageDiscountType}}>Percentage</option>\r\n                </select>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <div *ngIf=\"!startDatePassed\" class=\"col-md-12\">\r\n                <label for=\"discountAmount\">Amount</label>\r\n                <div class=\"input-group \">\r\n                  <input [ngClass]=\"{ 'is-invalid': submitted && discountForm.controls.amount.errors }\"\r\n                         aria-describedby=\"symbol-addon\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"amount\"\r\n                         id=\"discountAmount\"\r\n                         placeholder=\"Amount of your suggestion discount\"\r\n                         type=\"number\"/>\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" id=\"symbol-addon\">{{discountSymbol}}</span>\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"submitted && discountForm.controls.amount.errors\" class=\"invalid-input\">\r\n                  <div *ngIf=\"discountForm.controls.amount.errors.required\">Field is required</div>\r\n                  <div *ngIf=\"discountForm.controls.amount.errors.min\">Must be at least 0.1 or more</div>\r\n                  <div *ngIf=\"discountForm.controls.amount.errors.wrongPercentage\">Wrong percentage</div>\r\n                  <div *ngIf=\"discountForm.controls.amount.errors.invalidDiscount\">Discount can't be\r\n                    bigger then price\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"startDatePassed\" class=\"col-md-12\">\r\n                <label for=\"discountAmount\">Amount</label>\r\n                <div class=\"input-group \">\r\n                  <input aria-describedby=\"symbol-edit-addon\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"amount\"\r\n                         id=\"discountEditAmount\"\r\n                         readonly\r\n                         type=\"number\"/>\r\n                  <div class=\"input-group-append\">\r\n                    <span class=\"input-group-text\" id=\"symbol-edit-addon\">{{discountSymbol}}</span>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6 px-1\">\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"offset-md-3\"></div>\r\n              <div class=\"form-group col-md-9\">\r\n                <label for=\"inputBasePrice\">Base price</label>\r\n                <input class=\"form-control\"\r\n                       id=\"inputBasePrice\"\r\n                       readonly\r\n                       type=\"text\"\r\n                       [value]=\"basePrice\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"offset-md-3\"></div>\r\n              <div class=\"form-group col-md-9\">\r\n                <label for=\"inputDiscount\">Discount</label>\r\n                <input class=\"form-control\"\r\n                       id=\"inputDiscount\"\r\n                       readonly\r\n                       type=\"text\"\r\n                       [value]=\"discount\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"offset-md-3\"></div>\r\n              <div class=\"form-group col-md-9\">\r\n                <label for=\"inputFinalPrice\">Price with discount</label>\r\n                <input class=\"form-control\"\r\n                       id=\"inputFinalPrice\"\r\n                       readonly\r\n                       type=\"text\"\r\n                       [value]=\"finalPrice\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-row mt-4\">\r\n\r\n              <div class=\"offset-md-3\"></div>\r\n\r\n              <div *ngIf=\"editMode\" class=\"col-md-6 px-1 my-auto\">\r\n                <button class=\"btn redButton\" data-target=\"#discountDeletionModal\" data-toggle=\"modal\" type=\"button\">\r\n                  Deactivate\r\n                </button>\r\n              </div>\r\n\r\n              <div *ngIf=\"editMode\" class=\"col-md-3 col-auto px-1 my-auto\">\r\n                <button class=\"btn float-right submitButton styledButton\" color=\"success\" mdbBtn mdbWavesEffect\r\n                        type=\"submit\">\r\n                  Submit\r\n                  <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n                </button>\r\n              </div>\r\n\r\n              <div *ngIf=\"!editMode\" class=\"col-md-9 col-auto px-1 my-auto\">\r\n                <button class=\"btn float-right submitButton styledButton\" color=\"success\" mdbBtn mdbWavesEffect\r\n                        type=\"submit\">\r\n                  Submit\r\n                  <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"offset-3\"></div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"discountDeletionModal\" tabindex=\"-1\" role=\"dialog\"\r\n     aria-labelledby=\"discountDeletionModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"discountDeletionModalLabel\">Discount deactivation confirmation</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure that you want to deactivate this discount?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn styledButton\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn redButton\" (click)=\"deactivateDiscount()\">\r\n          Deactivate <i *ngIf=\"deactivationLoading\" class=\"fa fa-spinner fa-spin\"></i></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/discount-form/discount-form.component.scss":
/*!************************************************************!*\
  !*** ./src/app/discount-form/discount-form.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submitButton {\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzY291bnQtZm9ybS9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcZGlzY291bnQtZm9ybVxcZGlzY291bnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rpc2NvdW50LWZvcm0vZGlzY291bnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXRCdXR0b24ge1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/discount-form/discount-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/discount-form/discount-form.component.ts ***!
  \**********************************************************/
/*! exports provided: DiscountFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountFormComponent", function() { return DiscountFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/trip */ "./src/app/model/trip.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_right_date_order_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/right-date-order.validator */ "./src/app/helpers/right-date-order.validator.ts");
/* harmony import */ var _helpers_percentage_discount_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/percentage-discount.validator */ "./src/app/helpers/percentage-discount.validator.ts");
/* harmony import */ var _helpers_fixed_discount_eased_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @helpers/fixed-discount-eased.validator */ "./src/app/helpers/fixed-discount-eased.validator.ts");
/* harmony import */ var _services_discount_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/discount.service */ "./src/app/shared/discount.service.ts");
/* harmony import */ var _helpers_CustomValidators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @helpers/CustomValidators */ "./src/app/helpers/CustomValidators.ts");









var DiscountFormComponent = /** @class */ (function () {
    function DiscountFormComponent(formBuilder, discountService) {
        this.formBuilder = formBuilder;
        this.discountService = discountService;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.FixedDiscountType = 'Fixed discount';
        this.PercentageDiscountType = 'Percentage';
        this.FixedDiscountSymbol = '$';
        this.PercentageDiscountSymbol = '%';
        this.submitted = false;
        this.loading = false;
        this.error = null;
        this.deactivationLoading = false;
        this.startDatePassed = false;
        this.endDatePassed = false;
    }
    Object.defineProperty(DiscountFormComponent.prototype, "discount", {
        get: function () {
            if (this.discountSymbol === this.FixedDiscountSymbol) {
                return this.discountForm.get('amount').value;
            }
            else if (this.discountSymbol === this.PercentageDiscountSymbol) {
                return (this.basePrice * this.discountForm.get('amount').value) / 100;
            }
            else
                return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscountFormComponent.prototype, "finalPrice", {
        get: function () {
            return this.basePrice - this.discount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscountFormComponent.prototype, "startDate", {
        get: function () {
            if (this.editableDiscount == null)
                return '';
            else
                return this.editableDiscount.startDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiscountFormComponent.prototype, "endDate", {
        get: function () {
            if (this.editableDiscount == null)
                return '';
            else
                return this.editableDiscount.endDate;
        },
        enumerable: true,
        configurable: true
    });
    DiscountFormComponent.prototype.getDateString = function (dateNumber) {
        var date = new Date(dateNumber);
        var monthString = (date.getMonth() + 1).toString();
        if ((date.getMonth() + 1) < 10) {
            monthString = '0' + monthString;
        }
        var dayString = date.getDate().toString();
        if (date.getDate() < 10) {
            dayString = '0' + dayString;
        }
        return date.getFullYear() + '-' + monthString + '-' + dayString;
    };
    DiscountFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.editableDiscount == null) {
            this.initAvailableServices();
            this.discountForm = this.initDiscount();
            this.serviceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0);
            this.serviceControl.valueChanges.subscribe(function (data) {
                _this.discountForm.controls.serviceId.patchValue(data);
                if (_this.service.id == data)
                    _this.basePrice = _this.service.price;
                else {
                    _this.basePrice = _this.service.suggestions
                        .find(function (suggestion) {
                        return suggestion.id == data;
                    }).price;
                }
            });
        }
        else {
            this.editMode = true;
            this.discountForm = this.initExistingDiscount(this.editableDiscount);
            this.serviceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editableDiscount.serviceId);
            if (this.service.id == this.editableDiscount.serviceId)
                this.basePrice = this.service.price;
            else {
                this.basePrice = this.service.suggestions
                    .find(function (suggestion) {
                    return suggestion.id == _this.editableDiscount.serviceId;
                }).price;
            }
            if (this.editableDiscount.type === this.FixedDiscountType) {
                this.discountSymbol = this.FixedDiscountSymbol;
            }
            else if (this.editableDiscount.type === this.PercentageDiscountType) {
                this.discountSymbol = this.PercentageDiscountSymbol;
            }
            if (new Date(this.editableDiscount.startDate) < new Date(Date.now()))
                this.startDatePassed = true;
            if (new Date(this.editableDiscount.endDate) < new Date(Date.now()))
                this.endDatePassed = true;
        }
    };
    DiscountFormComponent.prototype.initAvailableServices = function () {
        this.availableServices = new Array();
        this.availableServices.push(this.service);
        for (var _i = 0, _a = this.service.suggestions; _i < _a.length; _i++) {
            var suggestion = _a[_i];
            this.availableServices.push(new _models_trip__WEBPACK_IMPORTED_MODULE_2__["Trip"](suggestion));
        }
    };
    DiscountFormComponent.prototype.initDiscount = function () {
        return this.formBuilder.group({
            startDate: ['', [_helpers_CustomValidators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"].startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            amount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0.1)]],
            serviceId: [],
            id: []
        }, {
            validator: [Object(_helpers_right_date_order_validator__WEBPACK_IMPORTED_MODULE_4__["RightDateOrder"])('startDate', 'endDate'),
                Object(_helpers_percentage_discount_validator__WEBPACK_IMPORTED_MODULE_5__["PercentageDiscount"])(),
                Object(_helpers_fixed_discount_eased_validator__WEBPACK_IMPORTED_MODULE_6__["FixedDiscountEased"])(this.service.price)]
        });
    };
    DiscountFormComponent.prototype.initExistingDiscount = function (discountPayload) {
        return this.formBuilder.group({
            startDate: [discountPayload.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            endDate: [discountPayload.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            type: [discountPayload.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            amount: [discountPayload.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0.1)]],
            serviceId: [discountPayload.serviceId],
            id: [discountPayload.id]
        }, {
            validator: [Object(_helpers_right_date_order_validator__WEBPACK_IMPORTED_MODULE_4__["RightDateOrder"])('startDate', 'endDate'),
                Object(_helpers_percentage_discount_validator__WEBPACK_IMPORTED_MODULE_5__["PercentageDiscount"])(),
                Object(_helpers_fixed_discount_eased_validator__WEBPACK_IMPORTED_MODULE_6__["FixedDiscountEased"])(this.service.price)]
        });
    };
    DiscountFormComponent.prototype.selectChangeHandler = function (event) {
        if (event.target.value === this.FixedDiscountType) {
            this.discountSymbol = this.FixedDiscountSymbol;
        }
        else if (event.target.value === this.PercentageDiscountType) {
            this.discountSymbol = this.PercentageDiscountSymbol;
        }
    };
    DiscountFormComponent.prototype.saveDiscount = function (discountPayload) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        if (this.discountForm.invalid) {
            this.loading = false;
            return;
        }
        if (!this.editMode) {
            this.discountService.createDiscount(discountPayload).subscribe(function (data) {
                discountPayload.id = data.id;
                _this.onSubmit.emit(discountPayload);
            }, function (err) {
                _this.handleError(err);
            });
        }
        else {
            this.discountService.updateDiscount(discountPayload).subscribe(function () {
                _this.onSubmit.emit(discountPayload);
            }, function (err) {
                _this.handleError(err);
            });
        }
    };
    DiscountFormComponent.prototype.deactivateDiscount = function () {
        var _this = this;
        this.deactivationLoading = true;
        if (this.startDatePassed) {
            this.discountForm.controls.endDate.patchValue(Date.now() - 10);
            this.saveDiscount(this.discountForm.value);
        }
        else {
            this.discountService.deleteDiscount(this.discountForm.value).subscribe(function (data) { return _this.onDelete.emit(_this.discountForm.value); }, function (err) { return _this.handleError(err); });
        }
    };
    DiscountFormComponent.prototype.handleError = function (err) {
        var _this = this;
        this.error = err;
        this.loading = false;
        this.deactivationLoading = false;
        window.setTimeout(function () {
            _this.error = '';
        }, 5000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_trip__WEBPACK_IMPORTED_MODULE_2__["Trip"])
    ], DiscountFormComponent.prototype, "service", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiscountFormComponent.prototype, "editableDiscount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiscountFormComponent.prototype, "onSubmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiscountFormComponent.prototype, "onDelete", void 0);
    DiscountFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discount-form',
            template: __webpack_require__(/*! ./discount-form.component.html */ "./src/app/discount-form/discount-form.component.html"),
            styles: [__webpack_require__(/*! ./discount-form.component.scss */ "./src/app/discount-form/discount-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_discount_service__WEBPACK_IMPORTED_MODULE_7__["DiscountService"]])
    ], DiscountFormComponent);
    return DiscountFormComponent;
}());



/***/ }),

/***/ "./src/app/environments/environment.ts":
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/*! exports provided: environment, title, BASE_URL, LOGIN_URL, REGISTRATION_URL, REGISTRATION_SPECIAL_USER_URL, PASSWORD_RECOVERY_URL, REGISTRATION_CONFIRM_URL, GET_ALL_USERS, GET_CURRENT_USER, GET_USER_BY_ID, DELETE_USER_BY_ID, EDIT_SUMMARY, CHANGE_PASSWORD_SUMMARY, GET_ADMIN_DASHBOARDS, GET_CARRIER_DASHBOARDS, GET_APPROVER_DASHBOARDS, GET_ALL_TRIPS, GET_ALL_TRIPS_WITH_DETAIL, GET_ALL_TRIPS_FOR_CURRENT_USER, GET_TRIP_BY_ID, GET_TRIP_BY_PROVIDER_ID, GET_ALL_TRIPS_SORTED_BY_IMG, CREATE_OR_UPDATE_TRIP_URL, CREATE_BUNDLE_URL, GET_PURCHASED_SERVICES, GET_TROUBLE_TICKET_BY_ID, GET_TROUBLE_TICKET_BY_SERVICE_ID, GET_TROUBLE_TICKET_MESSAGES_BY_ID, CREATE_TROUBLE_TICKET, POST_TT_MESSAGE, POST_TT_FEEDBACK, CHANGE_TT_STATUS, GET_SERVICE_MESSAGE, POST_CLARIFICATION_REQUEST, CHANGE_STATUS_APPROVER, CHANGE_STATUS_PROVIDER, GET_TRIP_FEEDBACK_BY_TRIP_ID, CHECK_USER_FEEDBACK_PERMIT_FOR_TRIP_ID, ADD_FEEDBACK, UPDATE_FEEDBACK, DELETE_FEEDBACK, GET_REPORT_URL, GET_ALL_BUNDLE_WITH_IMG, GET_ALL_BUNDLES, GET_BUNDLE_BY_ID, DELETE_BUNDLE_BY_ID, GET_ORDERS_OF_USER, GET_ALL_COUNTRIES, GET_SEARCHED_TRIPS_BY_RATING, GET_SEARCHED_TRIPS_BY_PROVIDER, GET_SEARCHED_TRIPS_BY_DISCOUNT, GET_SEARCHED_TRIPS_BY_PRICE, GET_SEARCHED_TRIPS_BY_LENGTH, GET_SEARCHED_TRIPS_BY_BUNDLE, DISCOUNT_CONTROLLER, DELETE_DISCOUNT, GET_ALL_TRIP_RELATED_DISCOUNTS_BY_TRIP_ID, VIEW_CONTROLLER, COUNT_VIEWS_BY_TRIP_ID, GET_SERVICES_BY_PROVIDER_ID, GET_ALL_NOT_READ_NOTIFICATION_FOR_APPROVER, GET_ALL_NOT_READ_NOTIFICATION_FOR_PROVIDER, GET_ALL_NOT_READ_NOTIFICATION_FOR_USER, GET_CHAT_FOR_CURRENT_USER, GET_CHATS_FOR_APPROVER, GET_CHAT_MESSAGES_BY_CHAT_ID, POST_CHAT_MESSAGE_WITH_CHAT_ID, PUT_CHANGING_CHAT_ASSIGNMENT, GET_USER_BASKET, ADD_TO_USER_BASKET, COMPLETE_ORDER, SUBSCRIBE_BY_ID, GET_SUB_COUNT_FOR_PROVIDER, GET_USER_SUBSCRIPTIONS, GET_COUNTRIES, GET_CITIES_BY_COUNTRY_ID, GRAVATAR_BASE_URL, GOOGLE_DRIVE_PICTURE_BASE_URL, GOOGLE_DRIVE_OAUTH2_REFRESH_TOKEN_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_URL", function() { return LOGIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_URL", function() { return REGISTRATION_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_SPECIAL_USER_URL", function() { return REGISTRATION_SPECIAL_USER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_RECOVERY_URL", function() { return PASSWORD_RECOVERY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_CONFIRM_URL", function() { return REGISTRATION_CONFIRM_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_USERS", function() { return GET_ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CURRENT_USER", function() { return GET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_BY_ID", function() { return GET_USER_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_BY_ID", function() { return DELETE_USER_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_SUMMARY", function() { return EDIT_SUMMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_SUMMARY", function() { return CHANGE_PASSWORD_SUMMARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ADMIN_DASHBOARDS", function() { return GET_ADMIN_DASHBOARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CARRIER_DASHBOARDS", function() { return GET_CARRIER_DASHBOARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_APPROVER_DASHBOARDS", function() { return GET_APPROVER_DASHBOARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_TRIPS", function() { return GET_ALL_TRIPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_TRIPS_WITH_DETAIL", function() { return GET_ALL_TRIPS_WITH_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_TRIPS_FOR_CURRENT_USER", function() { return GET_ALL_TRIPS_FOR_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRIP_BY_ID", function() { return GET_TRIP_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRIP_BY_PROVIDER_ID", function() { return GET_TRIP_BY_PROVIDER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_TRIPS_SORTED_BY_IMG", function() { return GET_ALL_TRIPS_SORTED_BY_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_OR_UPDATE_TRIP_URL", function() { return CREATE_OR_UPDATE_TRIP_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BUNDLE_URL", function() { return CREATE_BUNDLE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PURCHASED_SERVICES", function() { return GET_PURCHASED_SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TROUBLE_TICKET_BY_ID", function() { return GET_TROUBLE_TICKET_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TROUBLE_TICKET_BY_SERVICE_ID", function() { return GET_TROUBLE_TICKET_BY_SERVICE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TROUBLE_TICKET_MESSAGES_BY_ID", function() { return GET_TROUBLE_TICKET_MESSAGES_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_TROUBLE_TICKET", function() { return CREATE_TROUBLE_TICKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_TT_MESSAGE", function() { return POST_TT_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_TT_FEEDBACK", function() { return POST_TT_FEEDBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_TT_STATUS", function() { return CHANGE_TT_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SERVICE_MESSAGE", function() { return GET_SERVICE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_CLARIFICATION_REQUEST", function() { return POST_CLARIFICATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_STATUS_APPROVER", function() { return CHANGE_STATUS_APPROVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_STATUS_PROVIDER", function() { return CHANGE_STATUS_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRIP_FEEDBACK_BY_TRIP_ID", function() { return GET_TRIP_FEEDBACK_BY_TRIP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_USER_FEEDBACK_PERMIT_FOR_TRIP_ID", function() { return CHECK_USER_FEEDBACK_PERMIT_FOR_TRIP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FEEDBACK", function() { return ADD_FEEDBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FEEDBACK", function() { return UPDATE_FEEDBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FEEDBACK", function() { return DELETE_FEEDBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REPORT_URL", function() { return GET_REPORT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_BUNDLE_WITH_IMG", function() { return GET_ALL_BUNDLE_WITH_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_BUNDLES", function() { return GET_ALL_BUNDLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BUNDLE_BY_ID", function() { return GET_BUNDLE_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BUNDLE_BY_ID", function() { return DELETE_BUNDLE_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ORDERS_OF_USER", function() { return GET_ORDERS_OF_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_COUNTRIES", function() { return GET_ALL_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCHED_TRIPS_BY_RATING", function() { return GET_SEARCHED_TRIPS_BY_RATING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCHED_TRIPS_BY_PROVIDER", function() { return GET_SEARCHED_TRIPS_BY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCHED_TRIPS_BY_DISCOUNT", function() { return GET_SEARCHED_TRIPS_BY_DISCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCHED_TRIPS_BY_PRICE", function() { return GET_SEARCHED_TRIPS_BY_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCHED_TRIPS_BY_LENGTH", function() { return GET_SEARCHED_TRIPS_BY_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SEARCHED_TRIPS_BY_BUNDLE", function() { return GET_SEARCHED_TRIPS_BY_BUNDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOUNT_CONTROLLER", function() { return DISCOUNT_CONTROLLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DISCOUNT", function() { return DELETE_DISCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_TRIP_RELATED_DISCOUNTS_BY_TRIP_ID", function() { return GET_ALL_TRIP_RELATED_DISCOUNTS_BY_TRIP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_CONTROLLER", function() { return VIEW_CONTROLLER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_VIEWS_BY_TRIP_ID", function() { return COUNT_VIEWS_BY_TRIP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SERVICES_BY_PROVIDER_ID", function() { return GET_SERVICES_BY_PROVIDER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_NOT_READ_NOTIFICATION_FOR_APPROVER", function() { return GET_ALL_NOT_READ_NOTIFICATION_FOR_APPROVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_NOT_READ_NOTIFICATION_FOR_PROVIDER", function() { return GET_ALL_NOT_READ_NOTIFICATION_FOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_NOT_READ_NOTIFICATION_FOR_USER", function() { return GET_ALL_NOT_READ_NOTIFICATION_FOR_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAT_FOR_CURRENT_USER", function() { return GET_CHAT_FOR_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHATS_FOR_APPROVER", function() { return GET_CHATS_FOR_APPROVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CHAT_MESSAGES_BY_CHAT_ID", function() { return GET_CHAT_MESSAGES_BY_CHAT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_CHAT_MESSAGE_WITH_CHAT_ID", function() { return POST_CHAT_MESSAGE_WITH_CHAT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT_CHANGING_CHAT_ASSIGNMENT", function() { return PUT_CHANGING_CHAT_ASSIGNMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_BASKET", function() { return GET_USER_BASKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_USER_BASKET", function() { return ADD_TO_USER_BASKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLETE_ORDER", function() { return COMPLETE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIBE_BY_ID", function() { return SUBSCRIBE_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUB_COUNT_FOR_PROVIDER", function() { return GET_SUB_COUNT_FOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_SUBSCRIPTIONS", function() { return GET_USER_SUBSCRIPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COUNTRIES", function() { return GET_COUNTRIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CITIES_BY_COUNTRY_ID", function() { return GET_CITIES_BY_COUNTRY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAVATAR_BASE_URL", function() { return GRAVATAR_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_DRIVE_PICTURE_BASE_URL", function() { return GOOGLE_DRIVE_PICTURE_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_DRIVE_OAUTH2_REFRESH_TOKEN_URL", function() { return GOOGLE_DRIVE_OAUTH2_REFRESH_TOKEN_URL; });
var environment = {
    production: false,
    ws: 'http://localhost:8080/socket'
    // ws: '/socket'
};
var title = 'TripGod';
var BASE_URL = "http://localhost:8080/";
// export const BASE_URL = "/";
var LOGIN_URL = BASE_URL + "api/auth/signin";
var REGISTRATION_URL = BASE_URL + "api/auth/signup";
var REGISTRATION_SPECIAL_USER_URL = BASE_URL + "api/account/users";
var PASSWORD_RECOVERY_URL = BASE_URL + "api/auth/recovery";
var REGISTRATION_CONFIRM_URL = BASE_URL + "api/auth/signup/";
var GET_ALL_USERS = BASE_URL + "api/account/users";
var GET_CURRENT_USER = BASE_URL + "api/account/summary";
var GET_USER_BY_ID = BASE_URL + "api/account/summary/";
var DELETE_USER_BY_ID = BASE_URL + "api/account/users";
var EDIT_SUMMARY = BASE_URL + "api/account/summary/edit";
var CHANGE_PASSWORD_SUMMARY = BASE_URL + "api/account/summary/changePassword";
var GET_ADMIN_DASHBOARDS = BASE_URL + "api/account/dashboards/admin";
var GET_CARRIER_DASHBOARDS = BASE_URL + "api/account/dashboards/carrier";
var GET_APPROVER_DASHBOARDS = BASE_URL + "api/account/dashboards/approver";
var GET_ALL_TRIPS = BASE_URL + "api/account/trips";
var GET_ALL_TRIPS_WITH_DETAIL = BASE_URL + "api/account/trips/withDetail";
var GET_ALL_TRIPS_FOR_CURRENT_USER = BASE_URL + "api/account/trips/currentUser";
var GET_TRIP_BY_ID = BASE_URL + "api/account/trips/";
var GET_TRIP_BY_PROVIDER_ID = BASE_URL + "api/account/trips/forProvider/";
var GET_ALL_TRIPS_SORTED_BY_IMG = BASE_URL + "api/account/trips/withImg";
var CREATE_OR_UPDATE_TRIP_URL = BASE_URL + "api/account/trips";
var CREATE_BUNDLE_URL = BASE_URL + "api/account/bundles";
var GET_PURCHASED_SERVICES = BASE_URL + "api/account/services/purchased";
var GET_TROUBLE_TICKET_BY_ID = BASE_URL + "api/account/troubleTickets/";
var GET_TROUBLE_TICKET_BY_SERVICE_ID = BASE_URL + "api/account/troubleTickets/service/";
var GET_TROUBLE_TICKET_MESSAGES_BY_ID = BASE_URL + "api/account/troubleTickets/messages/";
var CREATE_TROUBLE_TICKET = BASE_URL + "api/account/troubleTickets";
var POST_TT_MESSAGE = BASE_URL + "api/account/troubleTickets/messages/";
var POST_TT_FEEDBACK = BASE_URL + "api/account/troubleTickets/feedback";
var CHANGE_TT_STATUS = BASE_URL + "api/account/troubleTickets";
var GET_SERVICE_MESSAGE = BASE_URL + "api/trip/spec/";
var POST_CLARIFICATION_REQUEST = BASE_URL + "api/trip/spec";
var CHANGE_STATUS_APPROVER = BASE_URL + "api/trip/spec/approver";
var CHANGE_STATUS_PROVIDER = BASE_URL + "api/trip/spec/carrier";
var GET_TRIP_FEEDBACK_BY_TRIP_ID = BASE_URL + "api/feedback/trip/";
var CHECK_USER_FEEDBACK_PERMIT_FOR_TRIP_ID = BASE_URL + "api/feedback/trip/checkFeedbackPermit/";
var ADD_FEEDBACK = BASE_URL + "api/feedback";
var UPDATE_FEEDBACK = BASE_URL + "api/feedback";
var DELETE_FEEDBACK = BASE_URL + "api/feedback/";
// export const GET_ALL_TOURS = BASE_URL + "api/account/report/";
var GET_REPORT_URL = BASE_URL + "api/account/report/";
var GET_ALL_BUNDLE_WITH_IMG = BASE_URL + "api/account/bundles/withImg";
var GET_ALL_BUNDLES = BASE_URL + "api/account/bundles";
var GET_BUNDLE_BY_ID = BASE_URL + "api/account/bundles/";
var DELETE_BUNDLE_BY_ID = BASE_URL + "api/account/bundles/";
var GET_ORDERS_OF_USER = BASE_URL + "api/account/orders/";
var GET_ALL_COUNTRIES = BASE_URL + "api/account/search/country";
var GET_SEARCHED_TRIPS_BY_RATING = BASE_URL + "api/account/search/rating";
var GET_SEARCHED_TRIPS_BY_PROVIDER = BASE_URL + "api/account/search/provider";
var GET_SEARCHED_TRIPS_BY_DISCOUNT = BASE_URL + "api/account/search/discount";
var GET_SEARCHED_TRIPS_BY_PRICE = BASE_URL + "api/account/search/price";
var GET_SEARCHED_TRIPS_BY_LENGTH = BASE_URL + "api/account/search/length";
var GET_SEARCHED_TRIPS_BY_BUNDLE = BASE_URL + "api/account/search/bundle";
var DISCOUNT_CONTROLLER = BASE_URL + "api/discounts";
var DELETE_DISCOUNT = BASE_URL + "api/discounts/";
var GET_ALL_TRIP_RELATED_DISCOUNTS_BY_TRIP_ID = BASE_URL + "api/discounts/trip/";
var VIEW_CONTROLLER = BASE_URL + "api/views";
var COUNT_VIEWS_BY_TRIP_ID = VIEW_CONTROLLER + "/trip/";
var GET_SERVICES_BY_PROVIDER_ID = BASE_URL + "api/account/services/provider";
var GET_ALL_NOT_READ_NOTIFICATION_FOR_APPROVER = BASE_URL + "api/notifications/approver/";
var GET_ALL_NOT_READ_NOTIFICATION_FOR_PROVIDER = BASE_URL + "api/notifications/provider/";
var GET_ALL_NOT_READ_NOTIFICATION_FOR_USER = BASE_URL + "api/notifications/user/";
// export const GET_ALL_MESSAGES_FOR_USER_BY_ID = BASE_URL + "api/messages/user/";
var GET_CHAT_FOR_CURRENT_USER = BASE_URL + "api/chat";
var GET_CHATS_FOR_APPROVER = BASE_URL + "api/chat/approver";
var GET_CHAT_MESSAGES_BY_CHAT_ID = BASE_URL + "api/chat/";
var POST_CHAT_MESSAGE_WITH_CHAT_ID = BASE_URL + "api/chat/";
var PUT_CHANGING_CHAT_ASSIGNMENT = BASE_URL + "api/chat";
var GET_USER_BASKET = BASE_URL + "api/basket";
var ADD_TO_USER_BASKET = BASE_URL + "api/basket/";
var COMPLETE_ORDER = BASE_URL + "api/basket/pay";
var SUBSCRIBE_BY_ID = BASE_URL + "api/subscribe/";
var GET_SUB_COUNT_FOR_PROVIDER = BASE_URL + "api/subscribe/count/";
var GET_USER_SUBSCRIPTIONS = BASE_URL + "api/subscribe";
var GET_COUNTRIES = BASE_URL + "api/countries";
var GET_CITIES_BY_COUNTRY_ID = BASE_URL + "api/cities/country/";
var GRAVATAR_BASE_URL = "https://www.gravatar.com/avatar/";
var GOOGLE_DRIVE_PICTURE_BASE_URL = "https://drive.google.com/uc?id=";
var GOOGLE_DRIVE_OAUTH2_REFRESH_TOKEN_URL = "https://www.googleapis.com/oauth2/v4/token";
// export const CVET_YAIZ_DROZDA = "#1fcecb";


/***/ }),

/***/ "./src/app/helpers/CustomValidators.ts":
/*!*********************************************!*\
  !*** ./src/app/helpers/CustomValidators.ts ***!
  \*********************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.required = function (control) {
        return (Object(util__WEBPACK_IMPORTED_MODULE_0__["isString"])(control.value) && control.value.trim() == "") ?
            { "required": true } :
            null;
    };
    CustomValidators.minLength = function (control, minLength) {
        return (Object(util__WEBPACK_IMPORTED_MODULE_0__["isString"])(control.value) && control.value.trim().length < minLength) ?
            { "minLength": true } :
            null;
    };
    CustomValidators.startDate = function (control, editMode) {
        if (editMode === void 0) { editMode = false; }
        return (new Date(control.value) < new Date(Date.now())) ?
            { "startDate": true } :
            null;
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/app/helpers/HttpError.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/helpers/HttpError.interceptor.ts ***!
  \**************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");





var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(authService) {
        this.authService = authService;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                _this.authService.logout();
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/excel.service.ts":
/*!******************************************!*\
  !*** ./src/app/helpers/excel.service.ts ***!
  \******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/helpers/fixed-discount-eased.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/helpers/fixed-discount-eased.validator.ts ***!
  \***********************************************************/
/*! exports provided: FixedDiscountEased */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedDiscountEased", function() { return FixedDiscountEased; });
function FixedDiscountEased(price) {
    return function (formGroup) {
        var valueControl = formGroup.controls['amount'];
        var discountTypeControl = formGroup.controls['type'];
        if (valueControl.errors && !valueControl.errors.invalidDiscount) {
            return;
        }
        if (discountTypeControl.value == 'Fixed discount' && valueControl.value >= price) {
            valueControl.setErrors({ invalidDiscount: true });
        }
        else {
            valueControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authService) {
        this.authService = authService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authService.currentUserValue;
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/helpers/must-mutch.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/must-mutch.validator.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/helpers/percentage-discount.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/helpers/percentage-discount.validator.ts ***!
  \**********************************************************/
/*! exports provided: PercentageDiscount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentageDiscount", function() { return PercentageDiscount; });
function PercentageDiscount() {
    return function (formGroup) {
        var valueControl = formGroup.controls['amount'];
        var discountTypeControl = formGroup.controls['type'];
        if (valueControl.errors && !valueControl.errors.wrongPercentage) {
            return;
        }
        if (discountTypeControl.value == 'Percentage' && valueControl.value >= 100) {
            valueControl.setErrors({ wrongPercentage: true });
        }
        else {
            valueControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/helpers/right-date-order.validator.ts":
/*!*******************************************************!*\
  !*** ./src/app/helpers/right-date-order.validator.ts ***!
  \*******************************************************/
/*! exports provided: RightDateOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightDateOrder", function() { return RightDateOrder; });
function RightDateOrder(startDateControlName, endDateControlName) {
    return function (formGroup) {
        var startDateControl = formGroup.controls[startDateControlName];
        var endDateControl = formGroup.controls[endDateControlName];
        if (endDateControl.errors && !endDateControl.errors.dateOrder) {
            return;
        }
        if (startDateControl.value >= endDateControl.value) {
            endDateControl.setErrors({ dateOrder: true });
        }
        else {
            endDateControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/helpers/utils.service.ts":
/*!******************************************!*\
  !*** ./src/app/helpers/utils.service.ts ***!
  \******************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getGravatarLink = function (email) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GRAVATAR_BASE_URL"] + ts_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(email.trim().toLowerCase()).toString();
    };
    Utils.scrollToBottom = function (element) {
        try {
            // setTimeout(() => {}, 100);
            element.nativeElement.scrollTop = element.nativeElement.scrollHeight;
        }
        catch (err) {
            /**
             * catch errors with scroll which going beyond its max value
             * no need to handle or log smth
             */
        }
    };
    Utils = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Utils);
    return Utils;
}());



/***/ }),

/***/ "./src/app/model/file-info.ts":
/*!************************************!*\
  !*** ./src/app/model/file-info.ts ***!
  \************************************/
/*! exports provided: MIME_TYPE_FOLDER, FileInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE_FOLDER", function() { return MIME_TYPE_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInfo", function() { return FileInfo; });
var MIME_TYPE_FOLDER = "application/vnd.google-apps.folder";
var FileInfo = /** @class */ (function () {
    function FileInfo() {
    }
    Object.defineProperty(FileInfo.prototype, "Icon", {
        get: function () {
            if (this.IsFolder) {
                return "folder";
            }
            else {
                return "file";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "IsFolder", {
        get: function () {
            return this.MimeType === MIME_TYPE_FOLDER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "ModifiedTimeText", {
        get: function () {
            return this.ModifiedTime.getDate() + "." + (this.ModifiedTime.getMonth() + 1) + "." + this.ModifiedTime.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "SizeText", {
        get: function () {
            if (!this.Size)
                return "-";
            var size = parseInt(this.Size);
            if (size < Math.pow(1024, 1))
                return size.toString();
            else if (size < Math.pow(1024, 2))
                return Math.floor(size / Math.pow(1024, 1)) + " KB";
            else if (size < Math.pow(1024, 3))
                return Math.floor(size / Math.pow(1024, 2)) + " MB";
            else if (size < Math.pow(1024, 3))
                return Math.floor(size / Math.pow(1024, 3)) + " GB";
            else
                return Math.floor(size / Math.pow(1024, 4)) + " GB";
        },
        enumerable: true,
        configurable: true
    });
    FileInfo.fromGoogleFile = function (file) {
        var fileInfo = new FileInfo();
        fileInfo.Id = file.id;
        fileInfo.MimeType = file.mimeType;
        fileInfo.ModifiedTime = new Date(file.modifiedTime);
        fileInfo.Name = file.name;
        fileInfo.Size = file.size;
        return fileInfo;
    };
    return FileInfo;
}());



/***/ }),

/***/ "./src/app/model/role.ts":
/*!*******************************!*\
  !*** ./src/app/model/role.ts ***!
  \*******************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["User"] = "ROLE_USER";
    Role["Admin"] = "ROLE_ADMIN";
    Role["Approver"] = "ROLE_APPROVER";
    Role["Provider"] = "ROLE_PROVIDER";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/model/snackbar/snackbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/model/snackbar/snackbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"snackbar\">\r\n  {{shareService.snackBarMessage}}\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/model/snackbar/snackbar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/model/snackbar/snackbar.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".snackbar {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwvc25hY2tiYXIvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXG1vZGVsXFxzbmFja2Jhclxcc25hY2tiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2RlbC9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbmFja2JhciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/model/snackbar/snackbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/model/snackbar/snackbar.component.ts ***!
  \******************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");



var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(shareService) {
        this.shareService = shareService;
    }
    SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/model/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/model/snackbar/snackbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_share_data_service__WEBPACK_IMPORTED_MODULE_2__["ShareDataService"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/model/trip.ts":
/*!*******************************!*\
  !*** ./src/app/model/trip.ts ***!
  \*******************************/
/*! exports provided: Trip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
var Trip = /** @class */ (function () {
    function Trip(init) {
        Object.assign(this, init);
    }
    return Trip;
}());



/***/ }),

/***/ "./src/app/notification/notification-ring/notification-ring.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/notification/notification-ring/notification-ring.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\r\n  <div aria-expanded=\"false\" aria-haspopup=\"true\" class=\"btn-group\">\r\n    <button class=\"notify-btn\"\r\n            data-target=\"#modalNotifications\"\r\n            data-toggle=\"modal\"\r\n            mat-mini-fab>\r\n      <mat-icon class=\"white-icon\"\r\n                matBadge=\"{{counter == 0 ? null : counter}}\"\r\n                matBadgePosition=\"above after\">\r\n        notifications_none\r\n      </mat-icon>\r\n    </button>\r\n  </div>\r\n</li>\r\n\r\n<!--Modal: modalNotifications-->\r\n<div class=\"modal fade top\"\r\n     id=\"modalNotifications\"\r\n     tabindex=\"-1\"\r\n     role=\"dialog\"\r\n     aria-labelledby=\"notificationsLabel\"\r\n     aria-hidden=\"true\"\r\n     data-backdrop=\"true\">\r\n  <div class=\"modal-dialog modal-sm modal-side modal-top-right modal-notify modal-info modal-notification\"\r\n       role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-header header-layout\">\r\n        <p class=\"heading\">Last notifications</p>\r\n        <button type=\"button\" class=\"close close-modal-btn\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\" *ngFor=\"let notification of showedNotifications\">\r\n          <div class=\"col-10\">\r\n            <div *ngIf=\"notification?.serviceStatus\">\r\n              <p><strong>{{notification.serviceStatus}}: </strong>\r\n                {{notification.serviceTypeName}} - <a\r\n                  routerLink=\"/trip/{{notification.serviceId}}\"><u>\"{{notification.serviceName}}\"</u></a>\r\n                by <a routerLink=\"/user/{{notification.userId}}\"><u>{{notification.username}}</u></a>\r\n                <br>\r\n                <small>{{notification.notificationTime | date: 'd/M/yy, h:mm a'}}</small>\r\n              </p>\r\n            </div>\r\n            <div *ngIf=\"notification?.troubleTicketStatus && !notification.message\">\r\n              <p><strong>{{notification.troubleTicketStatus}}: </strong>\r\n                Trouble <u\r\n                  (click)=\"setTicketDataAndRedirect(notification)\">ticket #{{notification.troubleTicketId}}</u>\r\n                by\r\n                <a routerLink=\"/user/{{notification.userId}}\"><u>{{notification.username}}</u></a>\r\n                <br>\r\n                <small>{{notification.notificationTime | date: 'd/M/yy, h:mm a'}}</small>\r\n              </p>\r\n            </div>\r\n            <div *ngIf=\"notification?.message\">\r\n              <div *ngIf=\"notification?.troubleTicketId\">\r\n                <p><strong>New message: </strong>on trouble <u\r\n                  (click)=\"setTicketDataAndRedirect(notification)\">ticket #{{notification.troubleTicketId}}</u>\r\n                  from\r\n                  <a routerLink=\"/user/{{notification.userId}}\"><u>{{notification.username}}</u></a>\r\n                  <br>\r\n                  <small>{{notification.notificationTime | date: 'd/M/yy, h:mm a'}}</small>\r\n                </p>\r\n              </div>\r\n\r\n              <div *ngIf=\"notification?.serviceId\">\r\n                <p><strong>New message: </strong>in <u\r\n                  (click)=\"setTicketDataAndRedirect(notification)\">chat</u>\r\n                  from\r\n                  <a routerLink=\"/user/{{notification.userId}}\"><u>{{notification.username}}</u></a>\r\n                  <br>\r\n                  <small>{{notification.notificationTime | date: 'd/M/yy, h:mm a'}}</small>\r\n                </p>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <hr>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"readOne(notification)\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row btn-panel\">\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" routerLink=\"/notifications\" class=\"btn btn-secondary btn-md btn-not styledButton\">\r\n            Show all\r\n          </button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button type=\"button\" class=\"btn btn-secondary btn-md btn-not clear-btn \" (click)=\"clearAll()\">\r\n            Clear all\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/notification/notification-ring/notification-ring.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/notification/notification-ring/notification-ring.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white-icon {\n  color: white;\n  cursor: pointer; }\n\n.notify-btn {\n  background-color: Transparent;\n  outline: none; }\n\n.modal-notification {\n  margin-top: 50px; }\n\n.btn-not {\n  width: 100%;\n  margin-left: 0;\n  alignment: center; }\n\n.clear-btn {\n  background-color: #FE4A49 !important; }\n\n.btn-panel {\n  padding: 0 5px 0 5px; }\n\nstrong {\n  font-weight: bold; }\n\nsmall {\n  float: right; }\n\nu:hover {\n  cursor: pointer; }\n\nu {\n  outline: none;\n  color: grey; }\n\n.header-layout {\n  background-color: #2E294E !important;\n  padding: 5px 5px 5px 10px; }\n\n.close-modal-btn {\n  outline: none;\n  padding-top: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1yaW5nL0M6XFxVc2Vyc1xcVXNlclxcTmV0Y3JhY2tlclxcdHJpcGdvZFxcZnJvbnRlbmRcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxub3RpZmljYXRpb25cXG5vdGlmaWNhdGlvbi1yaW5nXFxub3RpZmljYXRpb24tcmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUNGLEVBQUE7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdiO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGFBQWE7RUFDYixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24tcmluZy9ub3RpZmljYXRpb24tcmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZS1pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubm90aWZ5LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLW5vdGlmaWNhdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweFxyXG59XHJcblxyXG4uYnRuLW5vdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgYWxpZ25tZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbGVhci1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRTRBNDkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wYW5lbCB7XHJcbiAgcGFkZGluZzogMCA1cHggMCA1cHg7XHJcbn1cclxuXHJcbnN0cm9uZyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbnU6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmhlYWRlci1sYXlvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xyXG59XHJcblxyXG4uY2xvc2UtbW9kYWwtYnRuIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmctdG9wOiAyMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/notification/notification-ring/notification-ring.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/notification/notification-ring/notification-ring.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationRingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRingComponent", function() { return NotificationRingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/stomp-client.service */ "./src/app/shared/stomp-client.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/notifications.service */ "./src/app/shared/notifications.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/role */ "./src/app/model/role.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var NotificationRingComponent = /** @class */ (function () {
    function NotificationRingComponent(stompClient, authService, notificationService, shareDataService, router) {
        this.stompClient = stompClient;
        this.authService = authService;
        this.notificationService = notificationService;
        this.shareDataService = shareDataService;
        this.router = router;
        this.notifications = [];
        this.showedNotifications = [];
    }
    NotificationRingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.role = this.authService.getDecodedToken().authority;
        this.userId = this.authService.getDecodedToken().sub;
        this.stompClient.lastNotification.subscribe(function (data) { return _this.newNotifications(data); });
        this.counter = 0;
        if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Approver) {
            this.notificationService.getAllNotReadNotificationsForApprover(this.userId).subscribe(function (data) {
                _this.notifications = data;
                _this.counter = _this.notifications.length;
                _this.formArray();
            });
        }
        if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Provider) {
            this.notificationService.getAllNotReadNotificationsForProvider(this.userId).subscribe(function (data) {
                _this.notifications = data;
                _this.counter = _this.notifications.length;
                _this.formArray();
            });
        }
        if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].User) {
            this.notificationService.getAllNotReadNotificationsForUser(this.userId).subscribe(function (data) {
                _this.notifications = data;
                _this.counter = _this.notifications.length;
                _this.formArray();
            });
        }
    };
    NotificationRingComponent.prototype.newNotifications = function (notification) {
        if (notification) {
            this.notifications.unshift(notification);
            this.formArray();
        }
        this.counter++;
    };
    NotificationRingComponent.prototype.clearAll = function () {
        this.counter = 0;
        this.notifications = null;
        this.showedNotifications = null;
    };
    NotificationRingComponent.prototype.readOne = function (notification) {
        this.notifications.splice(this.notifications.indexOf(notification), 1);
        this.formArray();
        this.counter--;
        this.counter < 0 ? this.counter = null : {};
    };
    NotificationRingComponent.prototype.formArray = function () {
        this.showedNotifications = [];
        for (var i in this.notifications) {
            if (this.showedNotifications.length < 5) {
                this.showedNotifications.push(this.notifications[i]);
            }
        }
    };
    NotificationRingComponent.prototype.setTicketDataAndRedirect = function (notification) {
        if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Approver) {
            if (notification.serviceId) {
                this.shareDataService.dialog = notification.username;
                this.router.navigate(['chat']);
            }
            else {
                this.shareDataService.tabIndex = 3;
                this.shareDataService.ticketId = notification.troubleTicketId;
                this.router.navigate(['account']);
            }
        }
        else if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].User) {
            if (notification.serviceId) {
                this.router.navigate(['chat']);
            }
            else {
                this.shareDataService.tabIndex = 2;
                this.shareDataService.ticketId = notification.troubleTicketId;
                this.router.navigate(['account']);
            }
        }
    };
    NotificationRingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification-ring',
            template: __webpack_require__(/*! ./notification-ring.component.html */ "./src/app/notification/notification-ring/notification-ring.component.html"),
            styles: [__webpack_require__(/*! ./notification-ring.component.scss */ "./src/app/notification/notification-ring/notification-ring.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stomp_client_service__WEBPACK_IMPORTED_MODULE_2__["StompClientService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ShareDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], NotificationRingComponent);
    return NotificationRingComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"width: 100%\">\r\n  <div class=\"offset-2\"></div>\r\n  <div class=\"col-8\">\r\n    <div class=\"container\">\r\n      <mat-tab-group>\r\n        <div class=\"card card-layout\">\r\n          <mat-tab label=\"Services\" class=\"tabBorderPadding\">\r\n            <div *ngIf=\"!serviceNotifications?.length\">\r\n              <div class=\"card card-body\">\r\n                <strong>\r\n                  There is no notifications yet\r\n                </strong>\r\n              </div>\r\n            </div>\r\n            <div *ngFor=\"let notification of serviceNotifications\" class=\"not-container\">\r\n\r\n              <div class=\"card not-hover not-layout\">\r\n                <div class=\"row justify-content-center align-items-center\">\r\n\r\n                  <div class=\"col-9\" style=\"margin-top: 15px;\">\r\n\r\n                    <p><strong>{{notification.serviceStatus}}: </strong>\r\n                      {{notification.serviceTypeName}} - <a\r\n                        routerLink=\"/trip/{{notification.serviceId}}\">\"{{notification.serviceName}}\"</a>\r\n                      by\r\n                      <a routerLink=\"/user/{{notification.userId}}\"><u>{{notification.username}}</u></a>\r\n                    </p>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"col-2\">\r\n                    <small>{{notification.notificationTime | date: 'd/M/yy, h:mm a'}}</small>\r\n                  </div>\r\n\r\n                  <div class=\"col-1\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"outline: none;\"\r\n                            (click)=\"deleteServiceNot(notification)\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <br>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Trouble tickets\" class=\"tabBorderPadding\" *ngIf=\"role !== 'ROLE_PROVIDER'\">\r\n            <div *ngIf=\"!troubleTicketsNotifications?.length\">\r\n              <div class=\"card card-body\">\r\n                <strong>\r\n                  There is no notifications yet\r\n                </strong>\r\n              </div>\r\n            </div>\r\n            <div *ngFor=\"let notification of troubleTicketsNotifications\" class=\"not-container\">\r\n              <div class=\"card not-hover not-layout\">\r\n                <div class=\"row justify-content-center align-items-center\">\r\n\r\n                  <div class=\"col-9\" style=\"margin-top: 15px;\">\r\n                    <p><strong>{{notification.troubleTicketStatus}}: </strong>\r\n                      Trouble <a (click)=\"setTicketDataAndRedirect(notification.troubleTicketId)\">ticket #{{notification.troubleTicketId}}</a>\r\n                      by\r\n                      <a routerLink=\"/user/{{notification.userId}}\"><u>{{notification.username}}</u></a>\r\n                    </p>\r\n                  </div>\r\n\r\n                  <div class=\"col-2\">\r\n                    <small>{{notification.notificationTime | date: 'MMMM d, h:mm:ss a'}}</small>\r\n                  </div>\r\n\r\n                  <div class=\"col-1\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"outline: none;\"\r\n                            (click)=\"deleteTicketNot(notification)\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <br>\r\n            </div>\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Messages\" class=\"tabBorderPadding\">\r\n            <div *ngIf=\"!messageNotifications?.length\">\r\n              <div class=\"card card-body\">\r\n                <strong>\r\n                  There is no messages yet\r\n                </strong>\r\n              </div>\r\n            </div>\r\n            <div *ngFor=\"let notification of messageNotifications\" class=\"not-container\">\r\n              <div class=\"card not-hover not-layout\">\r\n                <div class=\"row justify-content-center align-items-center\">\r\n\r\n                  <div class=\"col-9\" style=\"margin-top: 15px;\" *ngIf=\"notification.troubleTicketId\">\r\n                    <p><strong>New message: </strong> on trouble\r\n                      <a (click)=\"setTicketDataAndRedirect(notification.troubleTicketId)\">ticket #{{notification.troubleTicketId}}</a>\r\n                      from\r\n                      <a routerLink=\"/user/{{notification.userId}}\"><u>{{notification.username}}</u></a>\r\n                    </p>\r\n                  </div>\r\n\r\n                  <div class=\"col-9\" style=\"margin-top: 15px;\" *ngIf=\"notification.serviceId\">\r\n                    <p><strong>New message: </strong> in\r\n                      <a (click)=\"setTicketDataAndRedirect(notification.troubleTicketId)\">chat</a>\r\n                      from\r\n                      <a routerLink=\"/user/{{notification.userId}}\"><u>{{notification.username}}</u></a>\r\n                    </p>\r\n                  </div>\r\n\r\n                  <div class=\"col-2\">\r\n                    <small>{{notification.notificationTime | date: 'MMMM d, h:mm:ss a'}}</small>\r\n                  </div>\r\n\r\n                  <div class=\"col-1\">\r\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"outline: none;\"\r\n                            (click)=\"deleteTicketNot(notification)\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <br>\r\n            </div>\r\n          </mat-tab>\r\n\r\n        </div>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n  <div class=\"offset-2\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/notification/notification.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-container {\n  padding: 5px 20px 5px 20px; }\n\n.not-hover:hover {\n  box-shadow: 1px 8px 20px grey;\n  -webkit-transition: box-shadow ease-in; }\n\n.not-layout {\n  min-height: 60px;\n  padding: 10px 5px 10px 5px;\n  border-radius: 8px; }\n\n.container {\n  padding: 0;\n  border-radius: 15px;\n  margin-top: 20px;\n  background-color: white;\n  height: auto; }\n\n.read {\n  background-color: #D3D3D3; }\n\nu {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL0M6XFxVc2Vyc1xcVXNlclxcTmV0Y3JhY2tlclxcdHJpcGdvZFxcZnJvbnRlbmRcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxub3RpZmljYXRpb25cXG5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLDZCQUE2QjtFQUM3QixzQ0FBc0MsRUFBQTs7QUFHeEM7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBeUIsRUFBQTs7QUFTM0I7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xyXG59XHJcblxyXG4ubm90LWhvdmVyOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggZ3JleTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgZWFzZS1pbjtcclxufVxyXG5cclxuLm5vdC1sYXlvdXQge1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xyXG59XHJcblxyXG4vLy9kZWVwLyAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsXHJcbi8vLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kXHJcbi8ve1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogIzJFMjk0RSAhaW1wb3J0YW50O1xyXG4vL31cclxuXHJcbnUge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/notifications.service */ "./src/app/shared/notifications.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models/role */ "./src/app/model/role.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(authService, notificationService, shareService, router) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.shareService = shareService;
        this.router = router;
        this.serviceNotifications = [];
        this.troubleTicketsNotifications = [];
        this.messageNotifications = [];
        this.notifications = [];
        this.role = null;
        this.userId = null;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.role = this.authService.getDecodedToken().authority;
        this.userId = this.authService.getDecodedToken().sub;
        if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Approver) {
            this.notificationService.getAllNotReadNotificationsForApprover(this.userId).subscribe(function (data) {
                _this.notificationFilter(data);
            });
        }
        if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Provider) {
            this.notificationService.getAllNotReadNotificationsForProvider(this.userId).subscribe(function (data) {
                _this.notificationFilter(data);
            });
        }
        if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].User) {
            this.notificationService.getAllNotReadNotificationsForUser(this.userId).subscribe(function (data) {
                _this.notificationFilter(data);
            });
        }
        window.scrollTo(0, 0);
    };
    NotificationComponent.prototype.deleteServiceNot = function (notification) {
        this.serviceNotifications.splice(this.serviceNotifications.indexOf(notification), 1);
    };
    NotificationComponent.prototype.deleteTicketNot = function (notification) {
        this.troubleTicketsNotifications.splice(this.troubleTicketsNotifications.indexOf(notification), 1);
    };
    NotificationComponent.prototype.notificationFilter = function (notifications) {
        var that = this;
        notifications.forEach(function (value) {
            if (value.message === 'MESSAGE') {
                that.messageNotifications.push(value);
            }
            else if (value.serviceStatus) {
                that.serviceNotifications.push(value);
            }
            else if (value.troubleTicketStatus) {
                that.troubleTicketsNotifications.push(value);
            }
        });
    };
    NotificationComponent.prototype.setTicketDataAndRedirect = function (troubleTicketId) {
        if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Approver) {
            this.shareService.tabIndex = 3;
        }
        else if (this.role == _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].User) {
            this.shareService.tabIndex = 2;
        }
        // this.shareService.serviceId = serviceId;
        this.shareService.ticketId = troubleTicketId;
        this.router.navigate(['account']);
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/notification/notification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_5__["ShareDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/provider/provider.component.html":
/*!**************************************************!*\
  !*** ./src/app/provider/provider.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div *ngIf=\"user.details.imageSrc !== null && user.details.imageSrc !== ''\" class=\"col-md-8\">\r\n        <img alt=\"providerImg\" class=\"img-responsive mainImage\" src=\"{{user.details.imageSrc}}\">\r\n      </div>\r\n\r\n      <div *ngIf=\"user.details.imageSrc === null || user.details.imageSrc === ''\" class=\"col-md-8\">\r\n        <img\r\n          alt=\"defaultTripImg\"\r\n          class=\"img-responsive mainImage\"\r\n          src=\"https://secure.instantsoftwareonline.com/StayUSA/PropertyImages/2397/PD%2077820%20MountainView/L1.jpg?h=eS9IOEloWWlmNEc4WTArNVhzTkg1QT09\">\r\n      </div>\r\n\r\n      <div class=\"col-md-4 card headerCard\">\r\n\r\n        <div class=\"row pt-3\">\r\n          <div class=\"col-md-12 px-3 myHeaderText text-center\">\r\n            <b>{{user.username}}</b>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row pt-3\">\r\n          <div class=\"col-md-12 px-3 myHeaderText text-center\">\r\n            <b>Subscriptions: {{subscriptions}}</b>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-auto mb-3\">\r\n          <div class=\"offset-md-2\"></div>\r\n          <div class=\"col-md-8\" *ngIf=\"isViewable\">\r\n            <button [disabled]=\"isDisabled || authority != 'ROLE_USER'\" block=\"true\" (click)=\"toggleSub()\"\r\n                    class=\"buyButton styledButton text-coloured mx-auto\"\r\n                    color=\"deep-purple\"\r\n                    mat-stroked-button\r\n                    mdbBtn\r\n                    mdbWavesEffect>\r\n              Subscribe\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-8\" *ngIf=\"!isViewable\">\r\n            <button [disabled]=\"isDisabled || authority != 'ROLE_USER'\" block=\"true\" (click)=\"toggleUnSub()\"\r\n                    class=\"buyButton styledButton text-coloured mx-auto\"\r\n                    color=\"deep-purple\"\r\n                    mat-stroked-button\r\n                    mdbBtn\r\n                    mdbWavesEffect>\r\n              Unsubscribe\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--/.Tour-->\r\n<div class=\"row\" id=\"test\">\r\n  <div class=\"col-md-3\" *ngFor=\"let trip of trips\">\r\n    <mat-card class=\"tripCard\">\r\n      <mat-card-header>\r\n        <!--<div mat-card-avatar class=\"tripCard-header-image\"></div>-->\r\n        <p>\r\n          <mat-card-title>{{trip.name}}</mat-card-title>\r\n        </p>\r\n        <!--<mat-card-subtitle>{{trip.location.country}}</mat-card-subtitle>-->\r\n      </mat-card-header>\r\n      <!--<img height=\"110px\" mat-card-image src={{trip.imgSrc}} alt=\"No picture available\">-->\r\n\r\n      <mat-card-content>\r\n        <div *ngIf=\"trip.imgSrc !== null && trip.imgSrc !== ''\">\r\n          <img alt=\"tripImg\" mat-card-image src=\"{{trip.imgSrc}}\">\r\n        </div>\r\n\r\n        <div *ngIf=\"trip.imgSrc === null || trip.imgSrc === ''\">\r\n          <img\r\n            alt=\"defaultTripImg\"\r\n            mat-card-image\r\n            src=\"https://filetandvine.com/wp-content/uploads/2015/07/pix-uploaded-placeholder.jpg\">\r\n        </div>\r\n\r\n\r\n        <div>\r\n          <p class=\"pl-3\">\r\n            From {{trip.location.name}} to {{trip.destination.name}}\r\n          </p>\r\n        </div>\r\n\r\n\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n\r\n        <label class=\"money-label\">$ {{trip.price}}</label>\r\n        <button mat-stroked-button class=\"right\" mdbBtn color=\"info\" mdbWavesEffect routerLink=\"/trip/{{trip.id}}\">\r\n          View details\r\n        </button>\r\n\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/provider/provider.component.scss":
/*!**************************************************!*\
  !*** ./src/app/provider/provider.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container, .grid-container {\n  padding: 0;\n  border-radius: 15px;\n  margin-top: 20px;\n  border: 30px solid #E7E6F7;\n  background-color: #E7E6F7;\n  height: auto; }\n\n.card-content {\n  margin-top: 10px;\n  margin-left: 50px;\n  padding: 5px; }\n\n.content-width {\n  width: 100%; }\n\n.headerCard {\n  border-bottom-right-radius: 5px !important;\n  border-top-right-radius: 5px !important;\n  border-bottom-left-radius: 0 !important;\n  border-top-left-radius: 0 !important; }\n\n.roundedCard {\n  border-radius: 5px !important; }\n\n.buyButton {\n  bottom: 0; }\n\n.row {\n  margin: 0; }\n\n.myHeaderText {\n  font-size: 30px; }\n\n.myText {\n  font-size: 25px; }\n\n.descriptionText {\n  font-size: 20px; }\n\n.right {\n  float: right;\n  background-color: #2E294E !important; }\n\ndiv {\n  padding: 0; }\n\n.mainImage {\n  border-bottom-left-radius: 5px !important;\n  border-top-left-radius: 5px !important;\n  min-height: 27em;\n  width: 100%; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 3rem;\n  color: #d3d3d3; }\n\n.full {\n  color: yellow; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: yellow; }\n\n.discountedPrice {\n  color: green; }\n\n.oldPrice {\n  font-size: 15px;\n  color: #7f7f7f; }\n\n.greyComment {\n  background-color: #F7F7F7; }\n\n.commentSection {\n  padding-bottom: 0; }\n\n.commentFooter {\n  border-bottom-right-radius: 5px !important;\n  border-bottom-left-radius: 5px !important; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 3rem;\n  color: #d3d3d3; }\n\n.smallerStar {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: #2E294E; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: #2E294E; }\n\n.carousel-caption {\n  margin-bottom: 5%; }\n\n#mb {\n  background-color: #4183c4;\n  border-radius: 10px; }\n\n#bundleSlider {\n  padding-bottom: 46.25%; }\n\n.tripCard {\n  max-width: 400px;\n  padding-left: 0;\n  padding-right: 0;\n  margin: 20px;\n  min-width: 200px; }\n\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.carousel {\n  max-height: 500px; }\n\n#bundleSlider {\n  max-height: 400px; }\n\n.mainPage {\n  margin-right: 5%;\n  margin-left: 5%; }\n\n#test {\n  margin-right: 2%;\n  margin-left: 2%; }\n\n.right {\n  float: right;\n  margin-right: 7%;\n  background-color: #2E294E !important; }\n\n.money-label {\n  color: darkgreen;\n  -webkit-text-decoration: #004444;\n          text-decoration: #004444;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 120%;\n  margin-left: 5%; }\n\n.filter {\n  /*background-color: #ea8a11\t;*/\n  /*background-color: #BF7C44\t;*/\n  margin-right: 1%;\n  margin-left: 1%;\n  margin-bottom: 10px; }\n\n.FindTour {\n  width: 80%;\n  height: 90%; }\n\n.aligncenter {\n  width: auto;\n  height: 0;\n  border-top: 7px solid #2E294E;\n  font-size: 0; }\n\n.row {\n  margin: 0; }\n\nng-select /deep/ .selected {\n  display: none; }\n\n.form-control {\n  border: 0; }\n\n.mat-card-image {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  height: 150px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXHByb3ZpZGVyXFxwcm92aWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSwwQ0FBMEM7RUFDMUMsdUNBQXVDO0VBQ3ZDLHVDQUF1QztFQUN2QyxvQ0FBb0MsRUFBQTs7QUFJdEM7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFFRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUliO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBRUUseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsMENBQTBDO0VBQzFDLHlDQUF5QyxFQUFBOztBQUczQztFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUVaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFNBQVM7RUFDVCxpREFBaUQsRUFBQTs7QUFHbkQ7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFDRixFQUFBOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULDZCQUE2QjtFQUM3QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxTQUFTLEVBQUE7O0FBT1g7RUFDRSxhQUNGLEVBQUE7O0FBRUE7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm92aWRlci9wcm92aWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIsIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyOiAzMHB4IHNvbGlkICNFN0U2Rjc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U3RTZGNztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uY29udGVudC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXJDYXJkIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3VuZGVkQ2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXlCdXR0b24ge1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubXlIZWFkZXJUZXh0IHtcclxuICAvL2ZvbnQtc2l6ZTogMi41dnc7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubXlUZXh0IHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvblRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMjk0RSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tYWluSW1hZ2Uge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDI3ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc3RhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgY29sb3I6ICNkM2QzZDM7XHJcbn1cclxuXHJcbi5mdWxsIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uaGFsZiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5kaXNjb3VudGVkUHJpY2Uge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLm9sZFByaWNlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM3ZjdmN2Y7XHJcbn1cclxuXHJcbi5ncmV5Q29tbWVudCB7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjRTlEREVEO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbn1cclxuXHJcbi5jb21tZW50U2VjdGlvbiB7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5jb21tZW50Rm9vdGVyIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogI2QzZDNkMztcclxufVxyXG5cclxuLnNtYWxsZXJTdGFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogI2QzZDNkMztcclxufVxyXG5cclxuLmZ1bGwge1xyXG4gIGNvbG9yOiAjMkUyOTRFO1xyXG59XHJcblxyXG4uaGFsZiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNvbG9yOiAjMkUyOTRFO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbiNtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxODNjNDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jYnVuZGxlU2xpZGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNDYuMjUlO1xyXG59XHJcblxyXG4udHJpcENhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4jYnVuZGxlU2xpZGVyIHtcclxuICBtYXgtaGVpZ2h0OiA0MDBweFxyXG59XHJcblxyXG4ubWFpblBhZ2Uge1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4jdGVzdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogNyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMjk0RSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9uZXktbGFiZWwge1xyXG4gIGNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiAjMDA0NDQ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZWE4YTExXHQ7Ki9cclxuICAvKmJhY2tncm91bmQtY29sb3I6ICNCRjdDNDRcdDsqL1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5GaW5kVG91ciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLmFsaWduY2VudGVyIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMyRTI5NEU7XHJcbiAgZm9udC1zaXplOiAwO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tdWx0aXNlbGVjdE1haW5QYWdlIHtcclxuXHJcbn1cclxuXHJcbm5nLXNlbGVjdCAvZGVlcC8gLnNlbGVjdGVkIHtcclxuICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWltYWdlIHtcclxuICAvL2Zsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/provider/provider.component.ts":
/*!************************************************!*\
  !*** ./src/app/provider/provider.component.ts ***!
  \************************************************/
/*! exports provided: ProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderComponent", function() { return ProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/provider.service */ "./src/app/shared/provider.service.ts");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/trip.service */ "./src/app/shared/trip.service.ts");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");









var ProviderComponent = /** @class */ (function () {
    function ProviderComponent(providerService, route, tripService, authService, shareDataService, snackBar) {
        this.providerService = providerService;
        this.route = route;
        this.tripService = tripService;
        this.authService = authService;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.isDisabled = false;
    }
    ProviderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.getDecodedToken()) {
            this.authority = this.authService.getDecodedToken().authority;
        }
        this.route.params.subscribe(function (params) {
            _this.providerService.isSubscribed(params['id']).subscribe(function (data) {
                _this.isViewable = !data;
            });
            _this.tripService.getAllByProviderId(params['id']).subscribe(function (res) {
                _this.trips = res;
            });
            _this.providerService.getSubscriptionCount(params['id']).subscribe(function (data) {
                _this.subscriptions = data;
            });
        });
        this.user = this.route.snapshot.data.providerData;
        window.scrollTo(0, 0);
    };
    ProviderComponent.prototype.toggleSub = function () {
        var _this = this;
        this.isDisabled = true;
        this.route.params.subscribe(function (params) {
            _this.providerService.subscribeToProvider(_this.user.id).subscribe();
            _this.openSnackBar("Subscribed successfully");
        });
        this.isDisabled = false;
        this.isViewable = !this.isViewable;
    };
    ProviderComponent.prototype.toggleUnSub = function () {
        var _this = this;
        this.isDisabled = true;
        this.route.params.subscribe(function (params) {
            _this.providerService.unsubscribeToProvider(params['id']).subscribe();
            _this.openSnackBar("Unsubscribed successfully");
        });
        this.isDisabled = false;
        this.isViewable = !this.isViewable;
    };
    ProviderComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], {
            duration: 1000
        });
    };
    ProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-provider',
            template: __webpack_require__(/*! ./provider.component.html */ "./src/app/provider/provider.component.html"),
            styles: [__webpack_require__(/*! ./provider.component.scss */ "./src/app/provider/provider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_trip_service__WEBPACK_IMPORTED_MODULE_4__["TripService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_7__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], ProviderComponent);
    return ProviderComponent;
}());



/***/ }),

/***/ "./src/app/provider/provider.resolver.ts":
/*!***********************************************!*\
  !*** ./src/app/provider/provider.resolver.ts ***!
  \***********************************************/
/*! exports provided: ProviderResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderResolver", function() { return ProviderResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/users.service */ "./src/app/shared/users.service.ts");



var ProviderResolver = /** @class */ (function () {
    function ProviderResolver(usersService) {
        this.usersService = usersService;
    }
    ProviderResolver.prototype.resolve = function (route) {
        return this.usersService.getUserSummaryById(+route.paramMap.get('id'));
    };
    ProviderResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], ProviderResolver);
    return ProviderResolver;
}());



/***/ }),

/***/ "./src/app/service.buttons/service.buttons.component.html":
/*!****************************************************************!*\
  !*** ./src/app/service.buttons/service.buttons.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n  <div class=\"col-md-12 px-0 py-3 mx-auto  card roundedCard\">\r\n\r\n    <div *ngIf=\"!tripEditMode && !discountManagerMode\" class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-4\">\r\n\r\n            <div class=\"row no-gutters\" style=\"margin-bottom: 10px;\">\r\n              <div class=\"col col-md\">\r\n                <!--<span class=\"inline\">-->\r\n                <!--<mat-icon style=\"vertical-align: text-bottom;\">keyboard_arrow_down</mat-icon>-->\r\n                <!--</span>-->\r\n                <span class=\"inline h4\" style=\"font-weight: bolder; font-size: 20px;\">\r\n                  Details:\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <p class=\"headText\">Status: <span class=\"details-text\">{{trip.status}}</span></p>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"approver\">\r\n              <p class=\"headText\">Assignee:\r\n                <span class=\"details-text\">\r\n                  <a routerLink=\"/user/{{approver.id}}\">\r\n                    <img alt=\"User pic\"\r\n                         src=\"{{gravatar.getGravatarLink(approver.email)}}?s=35&d=mp\"\r\n                         class=\"img-responsive userPic cursor-custom\"/>\r\n                  </a>\r\n                  <a [routerLink]=\"['/user/', trip.approverId]\">  {{approver.username}}</a>\r\n                </span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-8\">\r\n            <div class=\"row no-gutters\">\r\n              <div class=\"col-md-12 col-12\">\r\n                <div class=\"row no-gutters\" style=\"margin-bottom: 10px;\">\r\n                  <div class=\"col col-md\">\r\n                    <!--<span class=\"inline\">-->\r\n                    <!--<mat-icon style=\"vertical-align: text-bottom;\">keyboard_arrow_down</mat-icon>-->\r\n                    <!--</span>-->\r\n                    <span class=\"inline h4\" style=\"font-weight: bolder; font-size: 20px;\">\r\n                      Actions:\r\n                    </span>\r\n\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"isProvider\" class=\"row no-gutters\">\r\n                  <div *ngIf=\"(!isAssigned || isUnderClarification || isPublished || isArchived) && !isRemoved\"\r\n                       class=\"providerButton col-auto col-md-auto\">\r\n                    <button [disabled]=\"isDisabled\" (click)=\"switchTripEditMode()\" block=\"true\"\r\n                            class=\"relative waves-light styledButton m-0\"\r\n                            color=\"deep-purple\"\r\n                            mdbBtn\r\n                            mdbWavesEffect type=\"button\">\r\n                      Edit\r\n                    </button>\r\n                  </div>\r\n                  <div *ngIf=\"isPublished\" class=\"providerButton col-auto col-md-auto\">\r\n                    <button [disabled]=\"isDisabled\" (click)=\"archiveService()\" block=\"true\"\r\n                            class=\"relative waves-light styledButton m-0\"\r\n                            color=\"deep-purple\"\r\n                            mdbBtn\r\n                            mdbWavesEffect type=\"button\">\r\n                      Archive\r\n                    </button>\r\n                  </div>\r\n                  <div *ngIf=\"isArchived\" class=\"providerButton col-auto col-md-auto\">\r\n                    <button [disabled]=\"isDisabled\" (click)=\"openService()\" block=\"true\"\r\n                            class=\"relative waves-light styledButton m-0\"\r\n                            color=\"deep-purple\"\r\n                            mdbBtn\r\n                            mdbWavesEffect\r\n                            type=\"button\">\r\n                      Open\r\n                    </button>\r\n                  </div>\r\n                  <div *ngIf=\"isArchived\" class=\"providerButton col-auto col-md-auto3\">\r\n                    <button [disabled]=\"isDisabled\" (click)=\"removeService()\" block=\"true\"\r\n                            class=\"relative waves-light styledButton m-0\"\r\n                            color=\"deep-purple\"\r\n                            mdbBtn\r\n                            mdbWavesEffect\r\n                            type=\"button\">\r\n                      Remove\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"providerButton col-auto col-md-auto\" *ngIf=\"!isRemoved\">\r\n                    <button [disabled]=\"isDisabled\" (click)=\"switchDiscountManagerMode()\" block=\"true\"\r\n                            class=\"relative waves-light styledButton m-0\"\r\n                            color=\"deep-purple\" mdbBtn\r\n                            mdbWavesEffect\r\n                            type=\"button\">\r\n                      Manage Discounts\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"isApprover\" class=\"row no-gutters\">\r\n                  <div *ngIf=\"!isAssigned && !isDrafted && !isArchived && isOpened\"\r\n                       class=\"approverButton col-auto col-md-auto\">\r\n                    <button [disabled]=\"isDisabled\" (click)=\"assignService()\"\r\n                            class=\"relative waves-light styledButton m-0\" color=\"deep-purple\"\r\n                            mdbBtn\r\n                            mdbWavesEffect\r\n                            type=\"button\">\r\n                      Assign to me\r\n                    </button>\r\n                  </div>\r\n                  <div *ngIf=\"isAssignedToMe && !isPublished && !isOpened && !isUnderClarification\"\r\n                       class=\"approverButton col-auto col-md-auto\">\r\n                    <button [disabled]=\"isDisabled\" (click)=\"publishService()\"\r\n                            class=\"relative waves-light styledButton m-0\" color=\"deep-purple\"\r\n                            mdbBtn\r\n                            mdbWavesEffect\r\n                            type=\"button\">\r\n                      Publish\r\n                    </button>\r\n                  </div>\r\n                  <div *ngIf=\"isAssignedToMe && !isUnderClarification\" class=\"approverButton col-auto col-md-auto\">\r\n                    <button [disabled]=\"isDisabled\" (click)=\"basicModal.show()\"\r\n                            class=\"relative waves-light styledButton m-0\"\r\n                            color=\"deep-purple\"\r\n                            mdbBtn\r\n                            mdbWavesEffect\r\n                            type=\"button\">\r\n                      Put under clarification\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters\">\r\n                  <div class=\"col-12 col-md-12\"\r\n                       *ngIf=\"(isUnderClarification || hasMessage) && !isPublished && !isArchived\">\r\n                    <mat-expansion-panel>\r\n                      <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                          <b>Clarification request: </b>\r\n                        </mat-panel-title>\r\n                      </mat-expansion-panel-header>\r\n                      <p>{{thisServiceMessage.message}}</p>\r\n                    </mat-expansion-panel>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"tripEditMode\">\r\n\r\n      <div class=\"row\">\r\n        <button (click)=\"switchTripEditMode()\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" color=\"deep-purple\"\r\n                mdbBtn\r\n                mdbWavesEffect\r\n                type=\"button\">\r\n          Back\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <app-trip-form (onEdit)=\"onTripEditEventCather($event)\" (onArchivedEdit)=\"onTripArchivedEdit($event)\"\r\n                         [trip]=\"trip\"></app-trip-form>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"discountManagerMode\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <app-trip-discount-manager (onBack)=\"switchDiscountManagerMode()\"\r\n                                     (onUpdate)=\"onUpdateDiscountManager($event)\"\r\n                                     [service]=\"trip\"></app-trip-discount-manager>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div mdbModal #basicModal=\"mdbModal\" class=\"modal fade right\" tabindex=\"-1\" role=\"dialog\"\r\n     aria-labelledby=\"myBasicModalLabel\"\r\n     [config]='{backdrop: false, ignoreBackdropClick: false}' aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-full-height modal-right\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"basicModal.hide()\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n        <h4 class=\"modal-title w-100 font-weight-bold\" id=\"myModalLabel\">Clarification request</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"md-form\" (ngSubmit)=\"sendServiceMessage()\" [formGroup]=\"messageForm\">\r\n          <mdb-icon far icon=\"edit\"></mdb-icon>\r\n          <label for=\"message\">Fill in the message with the requirements:</label>\r\n          <textarea type=\"text\"\r\n                    id=\"message\"\r\n                    class=\"md-textarea md-textarea-auto form-control input-scroll\"\r\n                    mdbInput\r\n                    formControlName=\"message\">\r\n\r\n          </textarea>\r\n          <mat-error *ngIf=\"f.message.hasError('maxlength')\">Max amount of symbols is 2000</mat-error>\r\n          <mat-error *ngIf=\"f.message.hasError('required')\">Field is empty</mat-error>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer justify-content-center\">\r\n        <button type=\"button\" mdbBtn color=\"danger\" class=\"waves-light\" aria-label=\"Close\"\r\n                (click)=\"basicModal.hide()\" mdbWavesEffect>Cancel\r\n        </button>\r\n        <button type=\"submit\" mdbBtn color=\"success\" class=\"relative waves-light\" mdbWavesEffect\r\n                (click)=\"!f.message.errors ? sendServiceMessage() : {}\"\r\n                (keyup)=\"!f.message.errors ? basicModal.hide() : {}\" (click)=\"basicModal.hide()\">Send\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/service.buttons/service.buttons.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/service.buttons/service.buttons.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-header {\n  margin-top: 60px; }\n\n.modal {\n  left: 10px; }\n\n.modal-footer {\n  margin-bottom: 700px; }\n\n.roundedCard {\n  border-radius: 5px !important; }\n\n.row {\n  margin: 0; }\n\n.headText {\n  font-size: 20px;\n  color: grey; }\n\n.approverButton, .providerButton {\n  margin-bottom: 15px;\n  margin-right: 15px; }\n\n.cursor-custom {\n  cursor: pointer; }\n\n.input-scroll {\n  max-height: 400px; }\n\n.details-text {\n  font-weight: bold;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS5idXR0b25zL0M6XFxVc2Vyc1xcVXNlclxcTmV0Y3JhY2tlclxcdHJpcGdvZFxcZnJvbnRlbmRcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxzZXJ2aWNlLmJ1dHRvbnNcXHNlcnZpY2UuYnV0dG9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2I7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQjtFQUNqQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlLmJ1dHRvbnMvc2VydmljZS5idXR0b25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWhlYWRlciB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA3MDBweDtcclxufVxyXG5cclxuLnJvdW5kZWRDYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaGVhZFRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmFwcHJvdmVyQnV0dG9uLCAucHJvdmlkZXJCdXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIC8vbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jdXJzb3ItY3VzdG9tIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1zY3JvbGwge1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uZGV0YWlscy10ZXh0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/service.buttons/service.buttons.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/service.buttons/service.buttons.component.ts ***!
  \**************************************************************/
/*! exports provided: ServiceButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceButtonsComponent", function() { return ServiceButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service.service */ "./src/app/shared/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _models_trip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/trip */ "./src/app/model/trip.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/trip.service */ "./src/app/shared/trip.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _helpers_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @helpers/utils.service */ "./src/app/helpers/utils.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/loading.service */ "./src/app/shared/loading.service.ts");














var ServiceButtonsComponent = /** @class */ (function () {
    function ServiceButtonsComponent(serviceService, tripService, userService, formBuilder, authService, route, aRoute, shareDataService, snackBar, loadingService) {
        this.serviceService = serviceService;
        this.tripService = tripService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.aRoute = aRoute;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.loadingService = loadingService;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tripEditMode = false;
        this.discountManagerMode = false;
        this.approver = null;
        this.gravatar = _helpers_utils_service__WEBPACK_IMPORTED_MODULE_12__["Utils"];
        this.isDisabled = false;
        this.serviceMessage = {
            id: 0,
            serviceId: 0,
            messageTime: null,
            message: "",
            approverId: 0,
            approverUsername: ""
        };
    }
    Object.defineProperty(ServiceButtonsComponent.prototype, "isApprover", {
        get: function () {
            return this.authService.getDecodedToken().authority == "ROLE_APPROVER";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "isProvider", {
        get: function () {
            return this.authService.getDecodedToken().authority == "ROLE_PROVIDER";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "isDrafted", {
        get: function () {
            return this.trip.status == "Draft";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "isArchived", {
        get: function () {
            return this.trip.status == "Archived";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "isAssigned", {
        get: function () {
            return this.trip.approverId != 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "isUnderClarification", {
        get: function () {
            return this.trip.status == "Under clarification";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "hasMessage", {
        get: function () {
            return this.serviceMessage.message != "" && this.serviceMessage.message != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "isAssignedToMe", {
        get: function () {
            return this.trip.approverId == this.authService.getDecodedToken().sub;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "isPublished", {
        get: function () {
            return this.trip.status == "Published";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "thisTrip", {
        get: function () {
            return this.trip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "thisServiceMessage", {
        get: function () {
            return this.serviceMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "isOpened", {
        get: function () {
            return this.trip.status == "Open";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceButtonsComponent.prototype, "isRemoved", {
        get: function () {
            return this.trip.status == "Removed";
        },
        enumerable: true,
        configurable: true
    });
    ServiceButtonsComponent.prototype.getApproverSummary = function () {
        var _this = this;
        if (this.trip.approverId && this.trip.approverId != 0) {
            this.userService.getUserSummaryById(this.trip.approverId).subscribe(function (data) {
                _this.approver = data;
            });
        }
    };
    ServiceButtonsComponent.prototype.ngOnInit = function () {
        this.messageForm = this.formBuilder.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2000)]]
        });
        this.getApproverSummary();
    };
    ServiceButtonsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.serviceService.getServiceMessage(+this.aRoute.snapshot.paramMap.get("id")).subscribe(function (data) {
            _this.serviceMessage = data;
        });
    };
    ServiceButtonsComponent.prototype.ngOnChanges = function () {
        if (this.isOpened) {
            this.approver = null;
        }
    };
    ServiceButtonsComponent.prototype.switchTripEditMode = function () {
        this.tripEditMode = !this.tripEditMode;
    };
    ServiceButtonsComponent.prototype.switchDiscountManagerMode = function () {
        this.discountManagerMode = !this.discountManagerMode;
    };
    ServiceButtonsComponent.prototype.openService = function () {
        this.changeStatusByProvider(2, "Open");
    };
    ServiceButtonsComponent.prototype.assignService = function () {
        this.changeStatusByApprover(3, "Assigned");
    };
    ServiceButtonsComponent.prototype.publishService = function () {
        this.changeStatusByApprover(4, "Published");
    };
    ServiceButtonsComponent.prototype.removeService = function () {
        this.changeStatusByProvider(6, "Removed");
    };
    ServiceButtonsComponent.prototype.archiveService = function () {
        this.changeStatusByProvider(7, "Archived");
    };
    ServiceButtonsComponent.prototype.sendServiceMessage = function () {
        var _this = this;
        this.isDisabled = true;
        this.loadingService.startLoading();
        if (!this.f.message.errors) {
            this.serviceService.sendServiceMessage(this.thisTrip, this.messageForm.controls.message.value).subscribe(function (data) {
                _this.trip.approverId = _this.authService.getDecodedToken().sub;
                _this.trip.status = "Under clarification";
                _this.serviceService.getServiceMessage(+_this.aRoute.snapshot.paramMap.get("id")).subscribe(function (data) {
                    _this.serviceMessage = data;
                });
                _this.tripService.getTripById(+_this.aRoute.snapshot.paramMap.get("id")).subscribe(function (data) {
                    _this.trip = data;
                });
                _this.openSnackBar("Trip's clarification request posted");
                _this.isDisabled = false;
                _this.loadingService.stopLoading();
            }, function (error) {
                console.log("Error while changing status by Approver:" + error);
                _this.isDisabled = false;
                _this.loadingService.stopLoading();
            });
        }
        else {
            this.isDisabled = false;
            this.loadingService.stopLoading();
        }
    };
    ServiceButtonsComponent.prototype.changeStatusByApprover = function (statusId, status) {
        var _this = this;
        this.isDisabled = true;
        this.loadingService.startLoading();
        this.serviceService.changeStatusByApprover(this.thisTrip, statusId).subscribe(function (data) {
            _this.trip.approverId = _this.authService.getDecodedToken().sub;
            _this.trip.status = status;
            _this.serviceService.getServiceMessage(+_this.aRoute.snapshot.paramMap.get("id")).subscribe(function (data) {
                _this.serviceMessage = data;
            });
            _this.tripService.getTripById(+_this.aRoute.snapshot.paramMap.get("id")).subscribe(function (data) {
                _this.trip = data;
            });
            if (_this.trip.approverId && _this.trip.approverId != 0) {
                _this.userService.getUserSummaryById(_this.trip.approverId).subscribe(function (data) {
                    _this.approver = data;
                });
            }
            _this.openSnackBar("Trip " + status);
            _this.isDisabled = false;
            _this.loadingService.stopLoading();
        }, function (error) {
            console.log("Error while changing status by Approver:" + error);
            _this.isDisabled = false;
            _this.loadingService.stopLoading();
        });
    };
    ServiceButtonsComponent.prototype.changeStatusByProvider = function (statusId, status) {
        var _this = this;
        this.isDisabled = true;
        this.loadingService.startLoading();
        this.serviceService.changeStatusByProvider(this.thisTrip, statusId).subscribe(function (data) {
            _this.trip.approverId = null;
            _this.trip.status = status;
            _this.serviceService.getServiceMessage(+_this.aRoute.snapshot.paramMap.get("id")).subscribe(function (data) {
                _this.serviceMessage = data;
            });
            _this.tripService.getTripById(+_this.aRoute.snapshot.paramMap.get("id")).subscribe(function (data) {
                _this.trip = data;
            });
            if (_this.trip.approverId && _this.trip.approverId != 0) {
                _this.userService.getUserSummaryById(_this.trip.approverId).subscribe(function (data) {
                    _this.approver = data;
                });
            }
            _this.openSnackBar("Trip " + status);
            _this.approver = null;
            _this.isDisabled = false;
            _this.loadingService.stopLoading();
        }, function (error) {
            _this.isDisabled = false;
            _this.loadingService.stopLoading();
            console.log("Error while changing status by Provider:" + error);
        });
    };
    Object.defineProperty(ServiceButtonsComponent.prototype, "f", {
        get: function () {
            return this.messageForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ServiceButtonsComponent.prototype.routeToApprover = function () {
        if (this.serviceMessage.approverId) {
            this.route.navigate(['/user/' + this.serviceMessage.approverId]);
        }
    };
    ServiceButtonsComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarComponent"], {
            duration: 1000
        });
    };
    ServiceButtonsComponent.prototype.onUpdateDiscountManager = function (discount) {
        var _this = this;
        this.switchDiscountManagerMode();
        this.switchDiscountManagerMode();
        this.tripService.getTripById(this.trip.id).subscribe(function (data) { return _this.onEdit.emit(data); }, function (err) { return alert(err); });
    };
    ServiceButtonsComponent.prototype.onTripEditEventCather = function (editedTrip) {
        this.switchTripEditMode();
        this.onEdit.emit(editedTrip);
    };
    ServiceButtonsComponent.prototype.onTripArchivedEdit = function (editedTrip) {
        var _this = this;
        this.removeService();
        this.serviceService.getServiceMessage(editedTrip.id).subscribe(function (data) {
            _this.serviceMessage = data;
        });
        this.onTripEditEventCather(editedTrip);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("trip"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_trip__WEBPACK_IMPORTED_MODULE_5__["Trip"])
    ], ServiceButtonsComponent.prototype, "trip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServiceButtonsComponent.prototype, "onEdit", void 0);
    ServiceButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-buttons',
            template: __webpack_require__(/*! ./service.buttons.component.html */ "./src/app/service.buttons/service.buttons.component.html"),
            styles: [__webpack_require__(/*! ./service.buttons.component.scss */ "./src/app/service.buttons/service.buttons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"],
            _services_trip_service__WEBPACK_IMPORTED_MODULE_7__["TripService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_11__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_13__["LoadingService"]])
    ], ServiceButtonsComponent);
    return ServiceButtonsComponent;
}());



/***/ }),

/***/ "./src/app/session/gapi.session.ts":
/*!*****************************************!*\
  !*** ./src/app/session/gapi.session.ts ***!
  \*****************************************/
/*! exports provided: GapiSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapiSession", function() { return GapiSession; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CLIENT_ID = "946828012865-5hd0k6f22l95r15943usdhr3ja777adh.apps.googleusercontent.com";
var API_KEY = "AIzaSyAcaaElwdGQIGIRnr2Ay1Hl9BuqEwDpjeY";
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive';
var GapiSession = /** @class */ (function () {
    function GapiSession() {
    }
    GapiSession.prototype.initClient = function () {
        return new Promise(function (resolve, reject) {
            gapi.load('client:auth2', function () {
                return gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(function () {
                    //this.googleAuth = gapi.auth2.getAuthInstance();
                    resolve();
                });
            });
        });
    };
    GapiSession = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GapiSession);
    return GapiSession;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.currentUsername);
        this.tokenForObesrver = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.getDecodedToken());
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(this.token));
        this.username.next(this.currentUsername);
        this.tokenForObesrver.next(this.getDecodedToken());
    }
    AuthService.prototype.login = function (loginPayload) {
        var _this = this;
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["LOGIN_URL"], loginPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            if (data) {
                localStorage.setItem('currentUser', JSON.stringify(data.accessToken));
                _this.currentUserSubject.next(data.accessToken);
                _this.username.next(_this.currentUsername);
                _this.tokenForObesrver.next(_this.getDecodedToken());
            }
            return data;
        }));
    };
    ;
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthService.prototype.registration = function (registrationPayload) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["REGISTRATION_URL"], registrationPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }));
    };
    AuthService.prototype.registrationSpecUser = function (registrationPayload) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["REGISTRATION_SPECIAL_USER_URL"], registrationPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }));
    };
    AuthService.prototype.recoveryPassword = function (recoveryPasswordPayload) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["PASSWORD_RECOVERY_URL"] + "?email=" + recoveryPasswordPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }));
    };
    Object.defineProperty(AuthService.prototype, "currentUsername", {
        get: function () {
            if (this.token) {
                return this.getDecodedToken().username;
            }
            else
                return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return localStorage.getItem('currentUser');
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getTokenAsObservable = function () {
        return this.tokenForObesrver.asObservable();
    };
    AuthService.prototype.getDecodedToken = function () {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_6__(this.token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_6__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthService.prototype.isTokenExpired = function () {
        var date = this.getTokenExpirationDate(this.token);
        if (date === undefined)
            return true;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/bundle.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/bundle.service.ts ***!
  \******************************************/
/*! exports provided: BundleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundleService", function() { return BundleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var BundleService = /** @class */ (function () {
    function BundleService(http) {
        this.http = http;
    }
    BundleService.prototype.createBundle = function (bundle) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["CREATE_BUNDLE_URL"], bundle);
    };
    BundleService.prototype.getAllBundles = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_BUNDLES"]);
    };
    BundleService.prototype.getBundleById = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_BUNDLE_BY_ID"] + id);
    };
    BundleService.prototype.getAllBundleWithImg = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_BUNDLE_WITH_IMG"]);
    };
    BundleService.prototype.deleteBundleById = function (id) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["DELETE_BUNDLE_BY_ID"] + id);
    };
    BundleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BundleService);
    return BundleService;
}());



/***/ }),

/***/ "./src/app/shared/city.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/city.service.ts ***!
  \****************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getCitiesByCountryId = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_CITIES_BY_COUNTRY_ID"] + id);
    };
    CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/shared/country.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/country.service.ts ***!
  \*******************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getAllCountries = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_COUNTRIES"]);
    };
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/shared/dashboard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/dashboard.service.ts ***!
  \*********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.ngOnInit = function () {
    };
    DashboardService.prototype.getAdminDashboard = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_ADMIN_DASHBOARDS"]);
    };
    DashboardService.prototype.getCarrierDashboard = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_CARRIER_DASHBOARDS"]);
    };
    DashboardService.prototype.getApproverDashboard = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_APPROVER_DASHBOARDS"]);
    };
    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/shared/discount.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/discount.service.ts ***!
  \********************************************/
/*! exports provided: DiscountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountService", function() { return DiscountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DiscountService = /** @class */ (function () {
    function DiscountService(http) {
        this.http = http;
    }
    DiscountService.prototype.createDiscount = function (discountPayload) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["DISCOUNT_CONTROLLER"], discountPayload);
    };
    DiscountService.prototype.getTripRelatedDiscounts = function (tripId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_TRIP_RELATED_DISCOUNTS_BY_TRIP_ID"] + tripId);
    };
    DiscountService.prototype.updateDiscount = function (discountPayload) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["DISCOUNT_CONTROLLER"], discountPayload);
    };
    DiscountService.prototype.deleteDiscount = function (discountPayload) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["DELETE_DISCOUNT"] + discountPayload.id);
    };
    DiscountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DiscountService);
    return DiscountService;
}());



/***/ }),

/***/ "./src/app/shared/feedback.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/feedback.service.ts ***!
  \********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var FeedbackService = /** @class */ (function () {
    function FeedbackService(http) {
        this.http = http;
    }
    FeedbackService.prototype.addFeedback = function (feedbackPayload) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["ADD_FEEDBACK"], feedbackPayload);
    };
    FeedbackService.prototype.updateFeedback = function (feedbackPayload) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["UPDATE_FEEDBACK"], feedbackPayload);
    };
    FeedbackService.prototype.deleteFeedback = function (id) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["DELETE_FEEDBACK"] + id);
    };
    FeedbackService.prototype.getTripFeedback = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_TRIP_FEEDBACK_BY_TRIP_ID"] + id);
    };
    FeedbackService.prototype.checkUserFeedbackAbility = function (tripId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["CHECK_USER_FEEDBACK_PERMIT_FOR_TRIP_ID"] + tripId);
    };
    FeedbackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/shared/google-drive.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/google-drive.service.ts ***!
  \************************************************/
/*! exports provided: GoogleDriveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleDriveService", function() { return GoogleDriveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var CLIENT_ID = "946828012865-5hd0k6f22l95r15943usdhr3ja777adh.apps.googleusercontent.com";
var CLIENT_SECRET = '4ELWxGRWw7YmatTO9-tXcQfs';
var REFRESH_TOKEN = '1/0MTQE1dKqrX6YMRp_qXuqc6_GttII7tYDKBccGXtO08';
var FOLDER_ID = '1bbOqyXHzpAYA4ygVzxWuIylkIk91KLWF';
var GoogleDriveService = /** @class */ (function () {
    function GoogleDriveService(http) {
        this.http = http;
        this.access_token = 'ya29.GlvVBlErtsHHegEzbXtDZ0WjseUDPTJvTahCL3CB6LKa9lxO0zSHvVULgbjgxZTX_FCjJt9Q486ktO1WVARQltJrKvpelo-u5IAilmyTmSzs7BACoWjEZBSSFVCD';
    }
    GoogleDriveService.prototype.importFile = function (file, onError, onComplete, onProgress) {
        var _this = this;
        this.refreshToken().subscribe(function (res) {
            _this.access_token = res['access_token'];
            var contentType = file.Blob.type || 'application/octet-stream';
            var metadata = {
                name: file.Blob.name,
                mimeType: contentType,
                parents: [FOLDER_ID]
            };
            var uploader = new UploaderForGoogleDrive({
                file: file.Blob,
                token: _this.access_token,
                metadata: metadata,
                onError: onError,
                onComplete: onComplete,
                onProgress: onProgress,
                params: {
                    convert: false,
                    ocr: false
                }
            });
            uploader.upload();
        }, function (err) {
            alert(err);
        });
    };
    GoogleDriveService.prototype.refreshToken = function () {
        var body = 'client_id=' + CLIENT_ID
            + '&client_secret=' + CLIENT_SECRET
            + '&refresh_token=' + REFRESH_TOKEN
            + '&grant_type=refresh_token';
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GOOGLE_DRIVE_OAUTH2_REFRESH_TOKEN_URL"], body, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
    };
    GoogleDriveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GoogleDriveService);
    return GoogleDriveService;
}());



/***/ }),

/***/ "./src/app/shared/loading.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/loading.service.ts ***!
  \*******************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.test = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    LoadingService.prototype.startLoading = function () {
        this.test.next(true);
    };
    LoadingService.prototype.stopLoading = function () {
        this.test.next(false);
    };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/shared/message.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/message.service.ts ***!
  \*******************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getChatForCurrentUser = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_CHAT_FOR_CURRENT_USER"]);
    };
    MessageService.prototype.getChatsForApprover = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_CHATS_FOR_APPROVER"]);
    };
    MessageService.prototype.getChatMessagesByChatId = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_CHAT_MESSAGES_BY_CHAT_ID"] + id);
    };
    MessageService.prototype.postChatMessageWithChatId = function (message, id) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["POST_CHAT_MESSAGE_WITH_CHAT_ID"] + id, message);
    };
    MessageService.prototype.putChangingChatAssignment = function (chat) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["PUT_CHANGING_CHAT_ASSIGNMENT"], chat);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/shared/notifications.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/notifications.service.ts ***!
  \*************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var NotificationsService = /** @class */ (function () {
    function NotificationsService(http) {
        this.http = http;
    }
    NotificationsService.prototype.getAllNotReadNotificationsForApprover = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_NOT_READ_NOTIFICATION_FOR_APPROVER"] + id);
    };
    NotificationsService.prototype.getAllNotReadNotificationsForProvider = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_NOT_READ_NOTIFICATION_FOR_PROVIDER"] + id);
    };
    NotificationsService.prototype.getAllNotReadNotificationsForUser = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_NOT_READ_NOTIFICATION_FOR_USER"] + id);
    };
    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/shared/order.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/order.service.ts ***!
  \*****************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.getOrdersOfUser = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_ORDERS_OF_USER"] + id);
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/shared/provider.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/provider.service.ts ***!
  \********************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProviderService = /** @class */ (function () {
    function ProviderService(http) {
        this.http = http;
    }
    ProviderService.prototype.isSubscribed = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["SUBSCRIBE_BY_ID"] + id);
    };
    ProviderService.prototype.unsubscribeToProvider = function (id) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["SUBSCRIBE_BY_ID"] + id);
    };
    ProviderService.prototype.subscribeToProvider = function (subscribePayload) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["SUBSCRIBE_BY_ID"], subscribePayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }));
    };
    ProviderService.prototype.getSubscriptionCount = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_SUB_COUNT_FOR_PROVIDER"] + id);
    };
    ProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/shared/report.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/report.service.ts ***!
  \******************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
    }
    ReportService.prototype.getTour = function (dates, serviceType) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_REPORT_URL"] + serviceType, dates); // any[]
    };
    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/shared/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.getAllCountries = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_COUNTRIES"]);
    };
    SearchService.prototype.getSearchByRating = function (tripSearch) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_SEARCHED_TRIPS_BY_RATING"], tripSearch);
    };
    SearchService.prototype.getSearchByProvider = function (tripSearch) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_SEARCHED_TRIPS_BY_PROVIDER"], tripSearch);
    };
    SearchService.prototype.getSearchByDiscount = function (tripSearch) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_SEARCHED_TRIPS_BY_DISCOUNT"], tripSearch);
    };
    SearchService.prototype.getSearchByPrice = function (tripSearch) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_SEARCHED_TRIPS_BY_PRICE"], tripSearch);
    };
    SearchService.prototype.getSearchByLength = function (tripSearch) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_SEARCHED_TRIPS_BY_LENGTH"], tripSearch);
    };
    SearchService.prototype.getSearchByBundle = function (tripSearch) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_SEARCHED_TRIPS_BY_BUNDLE"], tripSearch);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/service.service.ts ***!
  \*******************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
    }
    ServiceService.prototype.ngOnInit = function () {
    };
    ServiceService.prototype.getServiceMessage = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_SERVICE_MESSAGE"] + id);
    };
    ServiceService.prototype.changeStatusByApprover = function (trip, statusId) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["CHANGE_STATUS_APPROVER"], { "service": trip, "statusId": statusId });
    };
    ServiceService.prototype.changeStatusByProvider = function (trip, statusId) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["CHANGE_STATUS_PROVIDER"], { "service": trip, "statusId": statusId });
    };
    ServiceService.prototype.sendServiceMessage = function (trip, message) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["POST_CLARIFICATION_REQUEST"], { "service": trip, "message": message });
    };
    ServiceService.prototype.getPurchasedServices = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_PURCHASED_SERVICES"]);
    };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/shared/share-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/share-data.service.ts ***!
  \**********************************************/
/*! exports provided: ShareDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataService", function() { return ShareDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShareDataService = /** @class */ (function () {
    function ShareDataService() {
    }
    ShareDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ShareDataService);
    return ShareDataService;
}());



/***/ }),

/***/ "./src/app/shared/stomp-client.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/stomp-client.service.ts ***!
  \************************************************/
/*! exports provided: StompClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompClientService", function() { return StompClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models/role */ "./src/app/model/role.ts");








var StompClientService = /** @class */ (function () {
    function StompClientService(authService) {
        this.authService = authService;
        this.lastNotification = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.messageInGlobalChat = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.messagesForSupportChat = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.troubleTicketsMessage = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.troubleTicketChanging = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.troubleTicketCreating = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
    }
    Object.defineProperty(StompClientService.prototype, "userId", {
        get: function () {
            return this.authService.getDecodedToken().sub;
        },
        enumerable: true,
        configurable: true
    });
    StompClientService.prototype.disconnect = function () {
        this.stompClient.disconnect();
        this.lastNotification.next(null);
        this.messagesForSupportChat.next(null);
        this.messageInGlobalChat.next(null);
        this.stompClient.unsubscribe();
    };
    StompClientService.prototype.connect = function () {
        var _this = this;
        var ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ws, null, { reconnectIfNotNormalClose: true });
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_3__["over"](ws);
        this.stompClient.debug = null;
        if (this.authService.currentUserValue) {
            this.stompClient.connect({}, function (frame) {
                _this.stompClient.subscribe('/notification/user/' + _this.userId, function (message) {
                    _this.lastNotification.next(JSON.parse(message.body));
                });
                _this.stompClient.subscribe('/messages/globalChat', function (message) {
                    _this.messageInGlobalChat.next(JSON.parse(message.body));
                });
                // user support chat chanel
                if (_this.authService.getDecodedToken().authority === _models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].User) {
                    _this.stompClient.subscribe('/messages/chat/' + _this.userId, function (message) {
                        _this.messagesForSupportChat.next(JSON.parse(message.body));
                    });
                }
                // notifications for support chat new message
                _this.stompClient.subscribe('/notification/messages/' + _this.userId, function (message) {
                    _this.lastNotification.next(JSON.parse(message.body));
                });
                // notifications about trouble tickets for user
                _this.stompClient.subscribe('/troubleTickets/messageForUser/' + _this.userId, function (message) {
                    _this.troubleTicketsMessage.next(JSON.parse(message.body));
                });
                _this.stompClient.subscribe('/troubleTickets/changeStatusForUser/' + _this.userId, function (message) {
                    _this.troubleTicketChanging.next(JSON.parse(message.body));
                });
                _this.stompClient.subscribe('/troubleTickets/newTicket', function (message) {
                    _this.troubleTicketCreating.next(JSON.parse(message.body));
                });
                // notifications for approvers
                if (_this.authService.getDecodedToken().authority == _models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Approver) {
                    // for all approvers
                    _this.stompClient.subscribe('/notification/approvers', function (message) {
                        _this.lastNotification.next(JSON.parse(message.body));
                    });
                    // for approver by id
                    _this.stompClient.subscribe('/notification/approver/' + _this.userId, function (message) {
                        _this.lastNotification.next(JSON.parse(message.body));
                    });
                    // messages for approvers chat
                    _this.stompClient.subscribe('/messages/chat', function (message) {
                        _this.messagesForSupportChat.next(JSON.parse(message.body));
                    });
                    // notifications about trouble tickets
                    _this.stompClient.subscribe('/troubleTickets/messageForApprover/' + _this.userId, function (message) {
                        _this.troubleTicketsMessage.next(JSON.parse(message.body));
                    });
                    _this.stompClient.subscribe('/troubleTickets/changeStatusForApprover/' + _this.userId, function (message) {
                        _this.troubleTicketChanging.next(JSON.parse(message.body));
                    });
                }
                // notifications for provider
                if (_this.authService.getDecodedToken().authority == _models_role__WEBPACK_IMPORTED_MODULE_7__["Role"].Provider) {
                    // for all providers
                    _this.stompClient.subscribe('/notification/provider/' + _this.userId, function (message) {
                        _this.lastNotification.next(JSON.parse(message.body));
                    });
                }
            });
        }
    };
    StompClientService.prototype.sendMessageToSupportChat = function (message) {
        this.stompClient.send('/app/supportChat', {}, JSON.stringify(message));
    };
    StompClientService.prototype.sendMessageToGlobalChat = function (message) {
        this.stompClient.send('/app/globalChat', {}, JSON.stringify(message));
    };
    StompClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], StompClientService);
    return StompClientService;
}());



/***/ }),

/***/ "./src/app/shared/trip.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/trip.service.ts ***!
  \****************************************/
/*! exports provided: TripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripService", function() { return TripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TripService = /** @class */ (function () {
    function TripService(http) {
        this.http = http;
    }
    TripService.prototype.createOrUpdateTrip = function (tripPayload) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["CREATE_OR_UPDATE_TRIP_URL"], tripPayload);
    };
    TripService.prototype.getAllTrips = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_TRIPS"]);
    };
    TripService.prototype.getAllByProviderId = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_TRIP_BY_PROVIDER_ID"] + id);
    };
    TripService.prototype.getAllTripsForCurrentUser = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_TRIPS_FOR_CURRENT_USER"]);
    };
    TripService.prototype.getTripById = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_TRIP_BY_ID"] + id);
    };
    TripService.prototype.getAllTripSortedByImg = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_TRIPS_SORTED_BY_IMG"]);
    };
    TripService.prototype.getAllTripsWithDetails = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_ALL_TRIPS_WITH_DETAIL"]);
    };
    TripService.prototype.getAvailableServices = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["GET_SERVICES_BY_PROVIDER_ID"]);
    };
    TripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TripService);
    return TripService;
}());



/***/ }),

/***/ "./src/app/shared/trouble.ticket.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/trouble.ticket.service.ts ***!
  \**************************************************/
/*! exports provided: TroubleTicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TroubleTicketService", function() { return TroubleTicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var TroubleTicketService = /** @class */ (function () {
    function TroubleTicketService(http) {
        this.http = http;
    }
    TroubleTicketService.prototype.ngOnInit = function () {
    };
    TroubleTicketService.prototype.getTroubleTicketById = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_TROUBLE_TICKET_BY_ID"] + id);
    };
    TroubleTicketService.prototype.getTroubleTicketByServiceId = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_TROUBLE_TICKET_BY_SERVICE_ID"] + id);
    };
    TroubleTicketService.prototype.getTroubleTicketMessagesById = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_TROUBLE_TICKET_MESSAGES_BY_ID"] + id);
    };
    TroubleTicketService.prototype.createTroubleTicketWithFirstMessage = function (serviceId, headline, message) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["CREATE_TROUBLE_TICKET"], {
            "serviceId": serviceId,
            "headline": headline,
            "message": message
        });
    };
    TroubleTicketService.prototype.postMessage = function (id, message) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["POST_TT_MESSAGE"] + id, message);
    };
    TroubleTicketService.prototype.postFeedback = function (id, rating, text) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["POST_TT_FEEDBACK"], { "id": id, "rating": rating, "text": text });
    };
    TroubleTicketService.prototype.changeStatus = function (troubleTicket, statusId) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["CHANGE_TT_STATUS"], { "troubleTicket": troubleTicket, "statusId": statusId });
    };
    TroubleTicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TroubleTicketService);
    return TroubleTicketService;
}());



/***/ }),

/***/ "./src/app/shared/users.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/users.service.ts ***!
  \*****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.ngOnInit = function () {
    };
    UsersService.prototype.getAllUsers = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_USERS"]);
    };
    ;
    UsersService.prototype.deleteUserById = function (id) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["DELETE_USER_BY_ID"] + id);
    };
    UsersService.prototype.getUserSummary = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_CURRENT_USER"]);
    };
    UsersService.prototype.getUserSummaryById = function (id) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_USER_BY_ID"] + id);
    };
    UsersService.prototype.updateSummary = function (user) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["EDIT_SUMMARY"], user);
    };
    UsersService.prototype.changePassword = function (user, oldPassword) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PASSWORD_SUMMARY"], { "user": user, "oldPassword": oldPassword });
    };
    UsersService.prototype.getCurrentUser = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_CURRENT_USER"]);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/shared/view.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/view.service.ts ***!
  \****************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");




var ViewService = /** @class */ (function () {
    function ViewService(http) {
        this.http = http;
    }
    ViewService.prototype.addFeedback = function (serviceId) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["VIEW_CONTROLLER"], serviceId);
    };
    ViewService.prototype.countViewByTripId = function (tripId) {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["COUNT_VIEWS_BY_TRIP_ID"] + tripId);
    };
    ViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ViewService);
    return ViewService;
}());



/***/ }),

/***/ "./src/app/system/data-table/data-table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/system/data-table/data-table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container table-container\">\r\n  <!--<h2>{{tableName}}</h2>-->\r\n\r\n  <div>\r\n    <mat-form-field>\r\n      <input (keyup)=\"doFilter($event.target.value)\" matInput placeholder=\"Search\" type=\"text\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <ng-container *ngFor=\"let columnName of propertyNames; index as i\" [matColumnDef]=\"columnName\">\r\n      <mat-header-cell *matHeaderCellDef class=\"col-name-layout\" mat-sort-header>\r\n        {{columnName | toTitle}}\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">{{element[columnName] | formatCell: settings[i]}}</mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <!-- edit column -->\r\n    <ng-container matColumnDef=\"edit\">\r\n      <mat-header-cell *matHeaderCellDef class=\"edit-col-layout\"></mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">\r\n          <div *ngIf=\"!url\">\r\n            <button (click)=\"info(element.id)\" class=\"btn-edit\" mat-icon-button>\r\n              <img src=\"../../../assets/images/more.png\" alt=\"detailedInfoImg\">\r\n            </button>\r\n          </div>\r\n        <div *ngIf=\"url\">\r\n          <a routerLink=\"{{url}}{{element.id}}\">\r\n            <img src=\"../../../assets/images/more.png\" alt=\"detailedInfoImg\">\r\n          </a>\r\n        </div>\r\n        <button (click)=\"record = element\" data-target=\"#deleteModal\" data-toggle=\"modal\" mat-icon-button *ngIf=\"flagOfDeletingButtons\">\r\n          <i class=\"far fa-trash-alt\"></i>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: columnsToDisplay\"></mat-row>\r\n  </mat-table>\r\n  <mat-paginator [length]=\"dataSource.data.length\"\r\n                 [pageIndex]=\"0\"\r\n                 [pageSizeOptions]=\"[1, 2, 10, 25, 50]\"\r\n                 [pageSize]=\"10\"\r\n                 showFirstLastButtons>\r\n  </mat-paginator>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"deleteModalLabel\">Delete confirmation</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure to delete this record?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary styledButton\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary redButton\" data-dismiss=\"modal\" (click)=\"delete()\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/system/data-table/data-table.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/system/data-table/data-table.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-layout {\n  width: 100%;\n  margin: 0 auto; }\n\n.table-data-layout {\n  padding: 10px 20px 0 20px; }\n\n.btn-edit {\n  color: #FFC107; }\n\n.col-name-layout {\n  color: black;\n  font-weight: bold;\n  font-size: 15px;\n  /*margin: 0 10px 0 10px;*/ }\n\n.edit-col-layout {\n  color: black;\n  font-weight: bold;\n  font-size: 15px;\n  /*float: right;*/ }\n\n.modal {\n  overflow-y: auto;\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2RhdGEtdGFibGUvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXHN5c3RlbVxcZGF0YS10YWJsZVxcZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBSWhCO0VBQ0UseUJBQXlCLEVBQUE7O0FBSTNCO0VBQ0UsY0FBYyxFQUFBOztBQUloQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUFBLEVBQTBCOztBQUc1QjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFBLEVBQWlCOztBQUluQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtbGF5b3V0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuXHJcbi50YWJsZS1kYXRhLWxheW91dCB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4IDAgMjBweDtcclxufVxyXG5cclxuXHJcbi5idG4tZWRpdCB7XHJcbiAgY29sb3I6ICNGRkMxMDc7XHJcbn1cclxuXHJcblxyXG4uY29sLW5hbWUtbGF5b3V0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIC8qbWFyZ2luOiAwIDEwcHggMCAxMHB4OyovXHJcbn1cclxuXHJcbi5lZGl0LWNvbC1sYXlvdXQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgLypmbG9hdDogcmlnaHQ7Ki9cclxuXHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/system/data-table/data-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/system/data-table/data-table.component.ts ***!
  \***********************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        var _this = this;
        this.infoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.propertyNames = [];
        /* names of for-loop columns + manually added static columns if editable*/
        this.columnsToDisplay = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.flagOfDeletingButtons = false;
        this.doFilter = function (value) {
            _this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.records);
        this.propertyNames = this.settings.map(function (x) { return x.propertyName; });
        this.columnsToDisplay = this.propertyNames;
        if (this.editable) {
            this.columnsToDisplay = this.propertyNames.concat('edit');
            if (this.deleting == true) {
                this.flagOfDeletingButtons = true;
            }
        }
    };
    DataTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    DataTableComponent.prototype.getProperty = function (columnName) {
        return this.settings.find(function (x) { return x.propertyName === columnName; });
    };
    DataTableComponent.prototype.info = function (id) {
        this.infoEvent.emit(id);
    };
    DataTableComponent.prototype.delete = function () {
        this.deleteEvent.emit(this.record);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.records);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "records", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataTableComponent.prototype, "tableName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DataTableComponent.prototype, "editable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DataTableComponent.prototype, "deleting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DataTableComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DataTableComponent.prototype, "settings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "infoEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataTableComponent.prototype, "deleteEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DataTableComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/system/data-table/data-table.component.html"),
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/system/data-table/data-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/system/data-table/formatCell.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/system/data-table/formatCell.pipe.ts ***!
  \******************************************************/
/*! exports provided: FormatCellPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatCellPipe", function() { return FormatCellPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _models_trip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/trip */ "./src/app/model/trip.ts");




var FormatCellPipe = /** @class */ (function () {
    function FormatCellPipe(currencyPipe, datePipe) {
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
    }
    FormatCellPipe.prototype.transform = function (value, formatting) {
        if (value === undefined || value === null) {
            return 'not available';
        }
        /* Date */
        if (formatting.type === 'date') {
            if (formatting.formatArgs) {
                return this.datePipe.transform(value, formatting.formatArgs);
            }
            return this.datePipe.transform(value, 'fullDate');
        }
        /* Currency */
        if (formatting.type === 'currency') {
            return this.currencyPipe.transform(value);
        }
        if (formatting.type === 'location') {
            return value.name;
        }
        if (formatting.type === 'discountServiceName') {
            return (new _models_trip__WEBPACK_IMPORTED_MODULE_3__["Trip"](value)).name;
        }
        return value;
    };
    FormatCellPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'formatCell' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], FormatCellPipe);
    return FormatCellPipe;
}());



/***/ }),

/***/ "./src/app/system/data-table/toTitle.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/system/data-table/toTitle.pipe.ts ***!
  \***************************************************/
/*! exports provided: ToTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToTitlePipe", function() { return ToTitlePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ToTitlePipe = /** @class */ (function () {
    function ToTitlePipe() {
    }
    ToTitlePipe.prototype.transform = function (value) {
        if (value === undefined) {
            return 'not available';
        }
        var defaultTitlePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]();
        return defaultTitlePipe.transform(value.replace(/([^A-Z])([A-Z])/g, '$1 $2'));
    };
    ToTitlePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'toTitle' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToTitlePipe);
    return ToTitlePipe;
}());



/***/ }),

/***/ "./src/app/system/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/system/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    <img alt=\"brandImg\" class=\"img-brand\" src=\"../../../assets/images/java.png\">\r\n    <span style=\"color: #E7E6F7;\"> TripGod</span>\r\n  </a>\r\n  <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\"\r\n          aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"navbar-collapse collapse flex-row-reverse\" id=\"navbar\">\r\n\r\n    <div *ngIf=\"isLoggedIn()\">\r\n      <ul class=\"navbar-nav mr-1\">\r\n        <li *ngIf=\"authority == 'ROLE_USER'\">\r\n          <app-user-basket></app-user-basket>\r\n        </li>\r\n        <li>\r\n          <button class=\"message-btn\" mat-mini-fab routerLink=\"/chat\">\r\n            <img alt=\"envelopeImg\" src=\"../../../assets/images/email-outline.png\">\r\n          </button>\r\n        </li>\r\n        <app-notification-ring></app-notification-ring>\r\n        <li class=\"nav-item\">\r\n          <!--<a class=\"nav-link\" routerLink=\"/account\">Welcome, {{username}}</a>-->\r\n          <!-- test variant -->\r\n          <a class=\"nav-link inline\" routerLink=\"/account\" style=\"padding: 2px 0 0 0; margin-left: 2px\">\r\n            <img alt=\"User pic\"\r\n                 src=\"{{gravatar.getGravatarLink(token.email)}}?s=37&d=mp\"\r\n                 class=\"img-responsive userPicHeader cursor-custom\"/>\r\n            {{token.username}}\r\n          </a>\r\n\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isLoggedIn()\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Sign in</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/registration\">Sign up</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<br><br>\r\n"

/***/ }),

/***/ "./src/app/system/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/system/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-brand {\n  width: 25px;\n  height: 25px;\n  margin-bottom: 2px; }\n\n.navbar {\n  margin-bottom: 30px; }\n\n.bg-dark {\n  /*background-color: #100123 !important;*/\n  background-color: #2E294E !important; }\n\nspan {\n  color: #C8E0F4;\n  font-weight: bolder; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n.dropdown-content {\n  border-radius: 5px;\n  font-size: 20px;\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  padding: 12px 16px;\n  border-spacing: 5px;\n  z-index: 1; }\n\n.dropdown-content:hover {\n  background-color: #aaaaaa; }\n\n.message-btn {\n  background-color: Transparent;\n  outline: none;\n  margin-right: 5px; }\n\n.white-icon {\n  color: white;\n  cursor: pointer; }\n\n.notify-btn {\n  background-color: Transparent; }\n\n.modal-notification {\n  margin-top: 50px; }\n\n.userPicHeader {\n  width: 37px;\n  height: 37px;\n  border-radius: 50%;\n  margin-left: 2px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2hlYWRlci9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcc3lzdGVtXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usd0NBQUE7RUFDQSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw2QkFDRixFQUFBOztBQUVBO0VBQ0UsZ0JBQ0YsRUFBQTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zeXN0ZW0vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctYnJhbmQge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5iZy1kYXJrIHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6ICMxMDAxMjMgIWltcG9ydGFudDsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgY29sb3I6ICNDOEUwRjQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDVweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcclxufVxyXG5cclxuLm1lc3NhZ2UtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ud2hpdGUtaWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5vdGlmeS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5tb2RhbC1ub3RpZmljYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDUwcHhcclxufVxyXG5cclxuLnVzZXJQaWNIZWFkZXIge1xyXG4gIHdpZHRoOiAzN3B4O1xyXG4gIGhlaWdodDogMzdweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/system/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/system/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/stomp-client.service */ "./src/app/shared/stomp-client.service.ts");
/* harmony import */ var _helpers_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/utils.service */ "./src/app/helpers/utils.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, stompClient) {
        var _this = this;
        this.authService = authService;
        this.stompClient = stompClient;
        this.gravatar = _helpers_utils_service__WEBPACK_IMPORTED_MODULE_4__["Utils"];
        authService.getTokenAsObservable().subscribe(function (data) {
            _this.token = data;
        });
    }
    Object.defineProperty(HeaderComponent.prototype, "authority", {
        get: function () {
            return this.authService.getDecodedToken().authority;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authService.currentUserValue !== null;
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.stompClient.disconnect();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/system/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/system/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_3__["StompClientService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/system/header/user-basket-total-price/user-basket-total-price.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/system/header/user-basket-total-price/user-basket-total-price.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Total: <p class=\"totalprice\">{{count}}</p></div>\r\n"

/***/ }),

/***/ "./src/app/system/header/user-basket-total-price/user-basket-total-price.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/system/header/user-basket-total-price/user-basket-total-price.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".totalprice {\n  color: #1fcecb;\n  font-weight: bold;\n  display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2hlYWRlci91c2VyLWJhc2tldC10b3RhbC1wcmljZS9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcc3lzdGVtXFxoZWFkZXJcXHVzZXItYmFza2V0LXRvdGFsLXByaWNlXFx1c2VyLWJhc2tldC10b3RhbC1wcmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL2hlYWRlci91c2VyLWJhc2tldC10b3RhbC1wcmljZS91c2VyLWJhc2tldC10b3RhbC1wcmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RhbHByaWNlIHtcclxuICBjb2xvcjogIzFmY2VjYjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/system/header/user-basket-total-price/user-basket-total-price.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/system/header/user-basket-total-price/user-basket-total-price.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UserBasketTotalPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBasketTotalPriceComponent", function() { return UserBasketTotalPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_basket_total_user_basket_total_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-basket-total/user-basket-total.component */ "./src/app/system/header/user-basket-total/user-basket-total.component.ts");



var UserBasketTotalPriceComponent = /** @class */ (function () {
    function UserBasketTotalPriceComponent(userBasketTotal) {
        this.userBasketTotal = userBasketTotal;
    }
    UserBasketTotalPriceComponent.prototype.ngOnInit = function () {
        this.count = this.userBasketTotal.getTotal();
    };
    UserBasketTotalPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-basket-total-price',
            template: __webpack_require__(/*! ./user-basket-total-price.component.html */ "./src/app/system/header/user-basket-total-price/user-basket-total-price.component.html"),
            styles: [__webpack_require__(/*! ./user-basket-total-price.component.scss */ "./src/app/system/header/user-basket-total-price/user-basket-total-price.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_basket_total_user_basket_total_component__WEBPACK_IMPORTED_MODULE_2__["UserBasketTotalComponent"]])
    ], UserBasketTotalPriceComponent);
    return UserBasketTotalPriceComponent;
}());



/***/ }),

/***/ "./src/app/system/header/user-basket-total/user-basket-total.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/system/header/user-basket-total/user-basket-total.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let service of services\" class=\"row records\">\r\n  <div class=\"col-10\">\r\n    <div class=\"record\">\r\n      <div class=\"col-12 row\">\r\n        <!--routerLink=\"trip/{{service.id}}-->\r\n        <a (click)=\"onTabChange(service.id)\">{{service.name}}</a>\r\n      </div>\r\n      <div class=\"col-12 row\">\r\n        <p>{{service.location.country.name}}, {{service.location.name}} ->\r\n          {{service.destination.country.name}} , {{service.destination.name}}</p>\r\n      </div>\r\n      <div class=\"col-12 row\">\r\n        <p><b>${{service.price}}</b></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <button (click)=\"delOne(service)\" aria-label=\"Close\" class=\"close\" type=\"button\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div>\r\n  <ng-container #outletchild>\r\n  </ng-container>\r\n</div>\r\n\r\n<ng-template #contentchild>\r\n  <app-user-basket-total-price></app-user-basket-total-price>\r\n</ng-template>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/system/header/user-basket-total/user-basket-total.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/system/header/user-basket-total/user-basket-total.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".records {\n  background: white;\n  border: 1px solid #ecf0f1;\n  border-radius: 10px; }\n\n.record {\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2hlYWRlci91c2VyLWJhc2tldC10b3RhbC9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcc3lzdGVtXFxoZWFkZXJcXHVzZXItYmFza2V0LXRvdGFsXFx1c2VyLWJhc2tldC10b3RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL2hlYWRlci91c2VyLWJhc2tldC10b3RhbC91c2VyLWJhc2tldC10b3RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWNvcmRzIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnJlY29yZCB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/system/header/user-basket-total/user-basket-total.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/system/header/user-basket-total/user-basket-total.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserBasketTotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBasketTotalComponent", function() { return UserBasketTotalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-basket/user-basket.component */ "./src/app/system/header/user-basket/user-basket.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var total;
var UserBasketTotalComponent = /** @class */ (function () {
    function UserBasketTotalComponent(userBasket, router) {
        this.userBasket = userBasket;
        this.router = router;
        this.services = [];
    }
    UserBasketTotalComponent.prototype.ngOnInit = function () {
        this.services = this.userBasket.getTrips();
    };
    UserBasketTotalComponent.prototype.ngAfterContentInit = function () {
        this.outletRef.createEmbeddedView(this.contentRef);
    };
    UserBasketTotalComponent.prototype.rerender = function () {
        this.outletRef.clear();
        this.outletRef.createEmbeddedView(this.contentRef);
    };
    UserBasketTotalComponent.prototype.delOne = function (trip) {
        this.userBasket.delOne(trip);
        this.rerender();
    };
    UserBasketTotalComponent.prototype.getTotal = function () {
        total = 0;
        for (var item in this.services) {
            total = total + this.services[item].price; // 0,1,2
        }
        return total;
    };
    UserBasketTotalComponent.prototype.onTabChange = function (id) {
        var _this = this;
        if (this.router.navigated === false) {
            // Case when route was not used yet
            this.router.navigateByUrl("/trip/" + id);
        }
        else {
            // Case when route was used once or more
            this.router.navigateByUrl("/blank").then(function () {
                _this.router.navigateByUrl("/trip/" + id);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("outletchild", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], UserBasketTotalComponent.prototype, "outletRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("contentchild", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserBasketTotalComponent.prototype, "contentRef", void 0);
    UserBasketTotalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'child',
            template: __webpack_require__(/*! ./user-basket-total.component.html */ "./src/app/system/header/user-basket-total/user-basket-total.component.html"),
            providers: [_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_2__["UserBasketComponent"]],
            styles: [__webpack_require__(/*! ./user-basket-total.component.scss */ "./src/app/system/header/user-basket-total/user-basket-total.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_2__["UserBasketComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserBasketTotalComponent);
    return UserBasketTotalComponent;
}());



/***/ }),

/***/ "./src/app/system/header/user-basket/user-basket.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/system/header/user-basket/user-basket.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\r\n  <div aria-expanded=\"false\" aria-haspopup=\"true\" class=\"btn-group\">\r\n    <button (click)=\"rerender()\"\r\n            class=\"notify-btn\"\r\n            data-target=\"#modalBasket\"\r\n            data-toggle=\"modal\"\r\n            mat-mini-fab>\r\n      <mat-icon class=\"white-icon\"\r\n                matBadge=\"{{getLenght() == 0 ? null : getLenght()}}\"\r\n                matBadgePosition=\"above after\">\r\n        shopping_cart\r\n      </mat-icon>\r\n    </button>\r\n  </div>\r\n</li>\r\n\r\n<!--Modal: modalNotifications-->\r\n<div class=\"modal fade top\"\r\n     id=\"modalBasket\"\r\n     tabindex=\"-1\"\r\n     role=\"dialog\"\r\n     aria-labelledby=\"basketLabel\"\r\n     aria-hidden=\"true\"\r\n     data-backdrop=\"true\">\r\n  <div class=\"modal-dialog modal-lg modal-side modal-top-right modal-notify modal-info modal-notification\"\r\n       role=\"document\">\r\n    <div class=\"modal-content\">\r\n\r\n      <div class=\"modal-header header-layout\">\r\n        <p class=\"heading\">Shopping cart</p>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\" class=\"white-text\">&times;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"modal-body overflow overflow-auto\">\r\n\r\n        <div>\r\n          <ng-container #outlet>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ng-template #content>\r\n          <child></child>\r\n        </ng-template>\r\n        <div class=\"row btn-panel\">\r\n          <div class=\"col-12\">\r\n            <button type=\"button\" routerLink=\"/checkout\" class=\"btn btn-info btn-md btn-not\">\r\n              Proceed to checkout\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/system/header/user-basket/user-basket.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/system/header/user-basket/user-basket.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white-icon {\n  color: white;\n  cursor: pointer; }\n\n.notify-btn {\n  background-color: Transparent;\n  outline: none; }\n\n.modal-notification {\n  margin-top: 50px; }\n\nstrong {\n  font-weight: bold; }\n\nsmall {\n  float: right; }\n\nu:hover {\n  cursor: pointer; }\n\n.header-layout {\n  background-color: #2E294E !important;\n  padding: 5px 5px 5px 10px; }\n\n.overflow {\n  max-height: 500px; }\n\n.btn-not {\n  width: 100%;\n  margin-left: 0;\n  alignment: center;\n  background-color: #2E294E !important; }\n\n.btn-panel {\n  padding: 0 5px 0 5px; }\n\nstrong {\n  font-weight: bold; }\n\nsmall {\n  float: right; }\n\nu:hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2hlYWRlci91c2VyLWJhc2tldC9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcc3lzdGVtXFxoZWFkZXJcXHVzZXItYmFza2V0XFx1c2VyLWJhc2tldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL2hlYWRlci91c2VyLWJhc2tldC91c2VyLWJhc2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZS1pY29uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubm90aWZ5LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLW5vdGlmaWNhdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxudTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWxheW91dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMjk0RSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5vdmVyZmxvdyB7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5idG4tbm90IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBhbGlnbm1lbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tcGFuZWwge1xyXG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xyXG59XHJcblxyXG5zdHJvbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG51OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/system/header/user-basket/user-basket.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/system/header/user-basket/user-basket.component.ts ***!
  \********************************************************************/
/*! exports provided: UserBasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBasketComponent", function() { return UserBasketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");






var services = [];
var UserBasketComponent = /** @class */ (function () {
    function UserBasketComponent(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
    }
    UserBasketComponent.prototype.ngAfterContentInit = function () {
        this.outletRef.createEmbeddedView(this.contentRef);
    };
    UserBasketComponent.prototype.rerender = function () {
        this.outletRef.clear();
        this.outletRef.createEmbeddedView(this.contentRef);
    };
    UserBasketComponent.prototype.ngOnInit = function () {
        this.setTrips();
    };
    UserBasketComponent.prototype.getTrips = function () {
        return services;
    };
    UserBasketComponent.prototype.getLenght = function () {
        return services.length;
    };
    UserBasketComponent.prototype.addToBasket = function (trip) {
        services.push(trip);
        this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["ADD_TO_USER_BASKET"] + trip.id, null).subscribe();
    };
    UserBasketComponent.prototype.delOne = function (trip) {
        services.splice(services.indexOf(trip), 1);
        this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["ADD_TO_USER_BASKET"] + trip.id).subscribe();
    };
    UserBasketComponent.prototype.clear = function () {
        services = [];
    };
    ;
    UserBasketComponent.prototype.setTrips = function () {
        if (this.authService.currentUserValue) {
            this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["GET_USER_BASKET"]).subscribe(function (data) {
                services = data;
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("outlet", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], UserBasketComponent.prototype, "outletRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("content", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserBasketComponent.prototype, "contentRef", void 0);
    UserBasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-basket',
            template: __webpack_require__(/*! ./user-basket.component.html */ "./src/app/system/header/user-basket/user-basket.component.html"),
            styles: [__webpack_require__(/*! ./user-basket.component.scss */ "./src/app/system/header/user-basket/user-basket.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], UserBasketComponent);
    return UserBasketComponent;
}());



/***/ }),

/***/ "./src/app/system/index/index.component.html":
/*!***************************************************!*\
  !*** ./src/app/system/index/index.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Carousel-->\r\n<!--<div class=\"carousel slide\" data-ride=\"carousel\" id=\"bundleSlider\">-->\r\n\r\n<!--&lt;!&ndash;<ol class=\"carousel-indicators\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;<li data-target=\"#bundleSlider\" *ngFor=\"let x of bundls;let i = index\"&ndash;&gt;-->\r\n<!--&lt;!&ndash;attr.data-slide-to=\"{{i}}\" ngClass=\"i == 0 ? 'active' : ''\">&ndash;&gt;-->\r\n<!--&lt;!&ndash;</li>&ndash;&gt;-->\r\n<!--&lt;!&ndash;</ol>&ndash;&gt;-->\r\n\r\n<!--<div class=\"carousel-inner\" role=\"listbox\">-->\r\n<!--&lt;!&ndash;First slide is active&ndash;&gt;-->\r\n<!--<div class=\"carousel-item active\">-->\r\n<!--<div class=\"d-block w-100 view\">-->\r\n<!--<img alt=\"First slide\" class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg\">-->\r\n<!--</div>-->\r\n<!--<div class=\"carousel-caption\">-->\r\n<!--<h3>Get more suggestion</h3>-->\r\n<!--<button mat-raised-button>more discounts</button>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n\r\n<!--&lt;!&ndash;All slides&ndash;&gt;-->\r\n<!--<div *ngFor=\"let bundle of sliderBundeles\" class=\"carousel-item\">-->\r\n<!--<div class=\"d-block w-100 view\">-->\r\n<!--<img alt={{bundle.description}} class=\"d-block w-100\" src={{bundle.imgSrc}}>-->\r\n<!--</div>-->\r\n<!--<div class=\"carousel-caption\">-->\r\n<!--<h3>{{bundle.name}}</h3>-->\r\n<!--<button mat-raised-button (click)=\"this.intoBundlePage(bundle.id)\">More details</button>-->\r\n<!--</div>-->\r\n\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--&lt;!&ndash;Controls&ndash;&gt;-->\r\n\r\n<!--<a class=\"carousel-control-prev\" data-slide=\"prev\" href=\"#bundleSlider\" role=\"button\">-->\r\n<!--<span aria-hidden=\"true\" class=\"carousel-control-prev-icon\"></span>-->\r\n<!--<span class=\"sr-only\">Previous</span>-->\r\n<!--</a>-->\r\n<!--<a class=\"carousel-control-next\" data-slide=\"next\" href=\"#bundleSlider\" role=\"button\">-->\r\n<!--<span aria-hidden=\"true\" class=\"carousel-control-next-icon\"></span>-->\r\n<!--<span class=\"sr-only\">Next</span>-->\r\n<!--</a>-->\r\n\r\n<!--&lt;!&ndash;/.Controls&ndash;&gt;-->\r\n<!--<div class=\"aligncenter\">-</div>-->\r\n<!--</div>-->\r\n<!--&lt;!&ndash;/.Carousel Wrapper&ndash;&gt;-->\r\n\r\n\r\n<div class=\"carousel slide carousel-fade\" data-ride=\"carousel\" id=\"carousel-example-1z\">\r\n\r\n  <!--Indicators-->\r\n  <ol class=\"carousel-indicators\">\r\n    <li class=\"active\" data-slide-to=\"0\" data-target=\"#carousel-example-1z\"></li>\r\n    <li data-slide-to=\"1\" data-target=\"#carousel-example-1z\"></li>\r\n    <li data-slide-to=\"2\" data-target=\"#carousel-example-1z\"></li>\r\n  </ol>\r\n  <!--/.Indicators-->\r\n\r\n  <!--Slides-->\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n\r\n    <!--First slide-->\r\n    <div class=\"carousel-item active\">\r\n      <div class=\"view\">\r\n\r\n        <!--Video source-->\r\n        <video #firstVideo autoplay=\"autoplay\" id=\"video\" class=\"video-intro\" loop [muted]=\"true\" preload>\r\n          <source src=\"https://mdbootstrap.com/img/video/city.mp4\" type=\"video/mp4\">\r\n        </video>\r\n        <!-- Mask & flexbox options-->\r\n        <div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\r\n\r\n          <!-- Content -->\r\n          <div class=\"text-center white-text mx-5 wow fadeIn\"\r\n               style=\"position: absolute;left:0;right: 0;  bottom: 70px;\">\r\n\r\n            <a routerLink=\"/bundles\">\r\n              <button class=\"btn-outline-white btn-lg\"> See all discounts</button>\r\n            </a>\r\n\r\n          </div>\r\n          <!-- Content -->\r\n\r\n        </div>\r\n        <!-- Mask & flexbox options-->\r\n\r\n      </div>\r\n    </div>\r\n    <!--/First slide-->\r\n\r\n    <!--Second slide-->\r\n    <div class=\"carousel-item\">\r\n      <div class=\"view\">\r\n\r\n        <!--Video source-->\r\n        <video autoplay class=\"video-intro\" loop muted>\r\n          <source src=\"https://mdbootstrap.com/img/video/forest.mp4\" type=\"video/mp4\">\r\n        </video>\r\n\r\n        <!-- Mask & flexbox options-->\r\n        <div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\r\n\r\n          <!-- Content -->\r\n          <div class=\"text-center white-text mx-5 wow fadeIn\"\r\n               style=\"position: absolute;left:0;right: 0;  bottom: 70px;\">\r\n\r\n            <a routerLink=\"/bundles\">\r\n              <button class=\"btn-outline-white btn-lg\"> See all discounts</button>\r\n            </a>\r\n          </div>\r\n          <!-- Content -->\r\n\r\n        </div>\r\n        <!-- Mask & flexbox options-->\r\n\r\n      </div>\r\n    </div>\r\n    <!--/Second slide-->\r\n\r\n    <!--Third slide-->\r\n    <div class=\"carousel-item\">\r\n      <div class=\"view\">\r\n\r\n        <!--Video source-->\r\n        <video autoplay class=\"video-intro\" loop muted>\r\n          <source src=\"https://mdbootstrap.com/img/video/Tropical.mp4\" type=\"video/mp4\">\r\n        </video>\r\n\r\n        <!-- Mask & flexbox options-->\r\n        <div class=\"mask rgba-black-light d-flex justify-content-center align-items-center\">\r\n\r\n          <!-- Content -->\r\n          <div class=\"text-center white-text mx-5 wow fadeIn\"\r\n               style=\"position: absolute;left:0;right: 0;  bottom: 70px;\">\r\n\r\n            <a routerLink=\"/bundles\">\r\n              <button class=\"btn-outline-white btn-lg\"> See all discounts</button>\r\n            </a>\r\n\r\n          </div>\r\n          <!-- Content -->\r\n\r\n        </div>\r\n        <!-- Mask & flexbox options-->\r\n\r\n      </div>\r\n    </div>\r\n    <!--/Third slide-->\r\n\r\n  </div>\r\n  <!--/.Slides-->\r\n\r\n  <!--Controls-->\r\n  <a class=\"carousel-control-prev\" data-slide=\"prev\" href=\"#carousel-example-1z\" role=\"button\">\r\n    <span aria-hidden=\"true\" class=\"carousel-control-prev-icon\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" data-slide=\"next\" href=\"#carousel-example-1z\" role=\"button\">\r\n    <span aria-hidden=\"true\" class=\"carousel-control-next-icon\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n  <!--/.Controls-->\r\n  <div class=\"aligncenter\">-</div>\r\n</div>\r\n<!--/.Carousel Wrapper-->\r\n\r\n\r\n<br>\r\n\r\n\r\n\r\n\r\n<!--/.Filter-->\r\n<form [formGroup]=\"filterForm\" (ngSubmit)=\"save()\" *ngIf=\"authorized\">\r\n  <div class=\"row\" style=\"margin: 0\">\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n      <mat-card class=\"filter\">\r\n        <mat-card-header>\r\n          <mat-card-title>Find best trips</mat-card-title>\r\n\r\n          <mat-slide-toggle\r\n            style=\"margin-bottom: 0 !important;\"\r\n            color=\"primary\"\r\n            [checked]=\"false\"\r\n            [disabled]=\"false\"\r\n            [formControl]=\"multiCountryModeControl\">\r\n            Multi-country search\r\n          </mat-slide-toggle>\r\n\r\n        </mat-card-header>\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-2 px-2\">\r\n\r\n            <label for=\"locCountry\">Dispatch country</label>\r\n            <ng-select formControlName=\"locationCountry\"\r\n                       [items]=\"countries\"\r\n                       [loading]=\"countriesLoading\"\r\n                       bindLabel=\"name\"\r\n                       bindValue=\"name\"\r\n                       placeholder=\"Choose country...\"\r\n                       id=\"locCountry\"\r\n                       [ngClass]=\"{ 'invalid-select': submitted && filterForm.controls.locationCountry.errors}\"\r\n                       #myNgSelectComponent\r\n                       *ngIf=\"!multiCountryModeControl.value\">\r\n            </ng-select>\r\n\r\n            <ng-select formControlName=\"locationCountry\"\r\n                       [items]=\"countries\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Choose country...\"\r\n                       id=\"locCountryMulti\"\r\n                       [ngClass]=\"{ 'invalid-select': submitted && filterForm.controls.locationCountry.errors}\"\r\n                       #myNgSelectComponent\r\n                       *ngIf=\"multiCountryModeControl.value\">\r\n            </ng-select>\r\n\r\n            <!--<mat-form-field>-->\r\n            <!--<mat-select placeholder=\"Country From\"-->\r\n            <!--class=\"form-control\"-->\r\n            <!--name=\"locCountry\"-->\r\n            <!--formControlName=\"locCountry\"-->\r\n            <!--id=\"locCountry\"-->\r\n            <!--[ngClass]=\"{ 'is-invalid': submitted && filterForm.controls.locCountry.errors}\"-->\r\n            <!--multiple>-->\r\n            <!--<mat-option *ngFor=\"let country of countries\" value=\"{{country.name}}\">{{country.name}}</mat-option>-->\r\n            <!--</mat-select>-->\r\n            <!--</mat-form-field>-->\r\n\r\n            <div *ngIf=\"submitted && filterForm.controls.locationCountry.errors\" class=\"invalid-input\">\r\n              Field is required\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-2 px-2\">\r\n\r\n            <label for=\"destCountry\">Destination country</label>\r\n            <ng-select formControlName=\"destinationCountry\"\r\n                       [items]=\"countries\"\r\n                       [loading]=\"countriesLoading\"\r\n                       bindLabel=\"name\"\r\n                       bindValue=\"name\"\r\n                       placeholder=\"Choose country...\"\r\n                       id=\"destCountry\"\r\n                       [ngClass]=\"{ 'invalid-select': submitted && filterForm.controls.destinationCountry.errors}\"\r\n                       #myNgSelectComponent\r\n                       *ngIf=\"!multiCountryModeControl.value\">\r\n            </ng-select>\r\n\r\n            <ng-select formControlName=\"destinationCountry\"\r\n                       [items]=\"countries\"\r\n                       [loading]=\"countriesLoading\"\r\n                       bindLabel=\"name\"\r\n                       placeholder=\"Choose countries...\"\r\n                       id=\"destCountryMult\"\r\n                       [multiple]=\"true\"\r\n                       [ngClass]=\"{ 'invalid-select': submitted && filterForm.controls.destinationCountry.errors}\"\r\n                       #myNgSelectComponent\r\n                       *ngIf=\"multiCountryModeControl.value\">\r\n            </ng-select>\r\n\r\n            <!--<mat-form-field>-->\r\n            <!--<mat-select-->\r\n            <!--class=\"form-control\"-->\r\n            <!--formControlName=\"destCountry\"-->\r\n            <!--id=\"destCountry\"-->\r\n            <!--name=\"destCountry\"-->\r\n            <!--placeholder=\"Country To\"-->\r\n            <!--[ngClass]=\"{ 'is-invalid': submitted && filterForm.controls.destCountry.errors}\"-->\r\n            <!--multiple>-->\r\n            <!--<mat-option *ngFor=\"let country of countries\" value=\"{{country.name}}\">{{country.name}}</mat-option>-->\r\n            <!--</mat-select>-->\r\n            <!--</mat-form-field>-->\r\n\r\n            <div *ngIf=\"submitted && filterForm.controls.destinationCountry.errors\" class=\"invalid-input\">\r\n              Field is required\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!--/.Price-->\r\n          <div class=\"form-group col-md-2 px-2\">\r\n            <!--<mat-form-field class=\"example-margin\">-->\r\n            <!--<input-->\r\n            <!--matInput-->\r\n            <!--type=\"number\"-->\r\n            <!--min=\"1\"-->\r\n            <!--max=\"10\"-->\r\n            <!--class=\"form-control\"-->\r\n            <!--formControlName=\"numberOfPeople\"-->\r\n            <!--id=\"numPeople\"-->\r\n            <!--oninput=\"validity.valid||(value='');\" placeholder=\"Number of people\"-->\r\n            <!--[ngClass]=\"{ 'is-invalid': submitted && filterForm.controls.numberOfPeople.errors}\">-->\r\n            <!--</mat-form-field>-->\r\n            <label for=\"numPeople\">Number of people</label>\r\n            <input\r\n              type=\"number\"\r\n              min=\"1\"\r\n              max=\"10\"\r\n              class=\"form-control\"\r\n              formControlName=\"numberOfPeople\"\r\n              id=\"numPeople\"\r\n              oninput=\"validity.valid||(value='');\"\r\n              placeholder=\"\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && filterForm.controls.numberOfPeople.errors}\"/>\r\n\r\n            <div *ngIf=\"submitted && filterForm.controls.numberOfPeople.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"filterForm.controls.numberOfPeople.errors.required\">Field is required</div>\r\n              <div *ngIf=\"filterForm.controls.numberOfPeople.errors.min\">Must be at least 1 client</div>\r\n              <div *ngIf=\"filterForm.controls.numberOfPeople.errors.max\">10 clients max</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group col-md-2 px-2\">\r\n            <!--<mat-form-field class=\"example-margin\">-->\r\n            <!--<input matInput-->\r\n            <!--type=\"number\"-->\r\n            <!--min=\"1\"-->\r\n            <!--max=\"50000\"-->\r\n            <!--class=\"form-control\"-->\r\n            <!--formControlName=\"priceFrom\"-->\r\n            <!--id=\"minPrice\"-->\r\n            <!--oninput=\"validity.valid||(value='');\"-->\r\n            <!--placeholder=\"Min price\"-->\r\n            <!--[ngClass]=\"{ 'is-invalid': submitted && filterForm.controls.priceFrom.errors}\">-->\r\n            <!--</mat-form-field>-->\r\n            <label for=\"minPrice\">Minimum price</label>\r\n            <input type=\"number\"\r\n                   min=\"1\"\r\n                   max=\"50000\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"priceFrom\"\r\n                   id=\"minPrice\"\r\n                   oninput=\"validity.valid||(value='');\"\r\n                   placeholder=\"Price from...\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && filterForm.controls.priceFrom.errors}\"/>\r\n\r\n            <div *ngIf=\"submitted && filterForm.controls.priceFrom.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"filterForm.controls.priceFrom.errors.required\">Field is required</div>\r\n              <div *ngIf=\"filterForm.controls.priceFrom.errors.min\">Must be at least 1 $</div>\r\n              <div *ngIf=\"filterForm.controls.priceFrom.errors.max\">50 000 max price</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group col-md-2 px-2\">\r\n            <!--<mat-form-field class=\"example-margin\">-->\r\n            <!--<input matInput-->\r\n            <!--type=\"number\"-->\r\n            <!--min=\"1\"-->\r\n            <!--max=\"50000\"-->\r\n            <!--class=\"form-control\"-->\r\n            <!--formControlName=\"priceTo\"-->\r\n            <!--id=\"maxPrice\"-->\r\n            <!--oninput=\"validity.valid||(value='');\"-->\r\n            <!--placeholder=\"Maximum price\"-->\r\n            <!--[ngClass]=\"{ 'is-invalid': submitted && filterForm.controls.priceTo.errors}\">-->\r\n            <!--</mat-form-field>-->\r\n            <label for=\"maxPrice\">Maximum price</label>\r\n            <input matInput\r\n                   type=\"number\"\r\n                   min=\"1\"\r\n                   max=\"50000\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"priceTo\"\r\n                   id=\"maxPrice\"\r\n                   oninput=\"validity.valid||(value='');\"\r\n                   placeholder=\"Price to...\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && filterForm.controls.priceTo.errors}\"/>\r\n\r\n            <div *ngIf=\"submitted && filterForm.controls.priceTo.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"filterForm.controls.priceTo.errors.required\">Field is required</div>\r\n              <div *ngIf=\"filterForm.controls.priceTo.errors.min\">Must be at least 1 $</div>\r\n              <div *ngIf=\"filterForm.controls.priceTo.errors.max\">50 000 max price</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!--/.Find button-->\r\n          <div class=\"form-group col-md-2\">\r\n            <button type=\"submit\" mat-stroked-button mdbBtn [block]=\"true\" class=\"styledButton FindTour mt-1\"\r\n                    color=\"indigo\" mdbWavesEffect>Find trips\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </mat-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</form>\r\n\r\n<div *ngIf=\"result == 0\">\r\n  <!--/.Tour-->\r\n  <div class=\"row\" id=\"test\">\r\n    <div class=\"col-md-3\" *ngFor=\"let trip of trips\">\r\n      <mat-card class=\"tripCard\">\r\n        <mat-card-header>\r\n          <!--<div mat-card-avatar class=\"tripCard-header-image\"></div>-->\r\n          <p>\r\n            <mat-card-title>{{trip.name}}</mat-card-title>\r\n          </p>\r\n          <!--<mat-card-subtitle>{{trip.location.country}}</mat-card-subtitle>-->\r\n        </mat-card-header>\r\n        <!--<img height=\"110px\" mat-card-image src={{trip.imgSrc}} alt=\"No picture available\">-->\r\n\r\n        <mat-card-content>\r\n          <div *ngIf=\"trip.imgSrc !== null && trip.imgSrc !== ''\">\r\n            <img alt=\"tripImg\" mat-card-image src=\"{{trip.imgSrc}}\">\r\n          </div>\r\n\r\n          <div *ngIf=\"trip.imgSrc === null || trip.imgSrc === ''\">\r\n            <img\r\n              alt=\"defaultTripImg\"\r\n              mat-card-image\r\n              src=\"https://filetandvine.com/wp-content/uploads/2015/07/pix-uploaded-placeholder.jpg\">\r\n          </div>\r\n\r\n\r\n          <div>\r\n            <p class=\"pl-3\">\r\n              From {{trip.location.name}} to {{trip.destination.name}}\r\n            </p>\r\n          </div>\r\n\r\n\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n\r\n          <label class=\"money-label\">$ {{trip.price}}</label>\r\n          <a routerLink=\"/trip/{{trip.id}}\">\r\n            <button mat-stroked-button class=\"right\" mdbBtn color=\"info\" mdbWavesEffect\r\n                    (click)=this.intoTripPage(trip.id)>\r\n              View details\r\n            </button>\r\n          </a>\r\n\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<br><br>\r\n\r\n<div *ngIf=\"result==1\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-4\">\r\n      <mat-card class=\"tripSearch\">\r\n\r\n        <div class=\"container\">\r\n          <div class=\"row justify-content-center align-items-center\">\r\n            <mat-card-header>\r\n              <!--<div mat-card-avatar class=\"tripCard-header-image\"></div>-->\r\n\r\n              <mat-card-title>Top rated</mat-card-title>\r\n\r\n              <!--<mat-card-subtitle>{{trip.location.country}}</mat-card-subtitle>-->\r\n            </mat-card-header>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-12\" *ngFor=\"let trip of searchedByRating\">\r\n          <mat-card class=\"tripCard\">\r\n            <mat-card-header>\r\n              <!--<div mat-card-avatar class=\"tripCard-header-image\"></div>-->\r\n              <p>\r\n                <mat-card-title>{{trip.name}}</mat-card-title>\r\n              </p>\r\n              <!--<mat-card-subtitle>{{trip.location.country}}</mat-card-subtitle>-->\r\n            </mat-card-header>\r\n            <!--<img height=\"110px\" mat-card-image src={{trip.imgSrc}} alt=\"No picture available\">-->\r\n\r\n            <mat-card-content>\r\n              <div *ngIf=\"trip.imgSrc !== null && trip.imgSrc !== ''\">\r\n                <img alt=\"tripImg\" mat-card-image src=\"{{trip.imgSrc}}\">\r\n              </div>\r\n\r\n              <div *ngIf=\"trip.imgSrc === null || trip.imgSrc === ''\">\r\n                <img\r\n                  alt=\"defaultTripImg\"\r\n                  mat-card-image\r\n                  src=\"https://filetandvine.com/wp-content/uploads/2015/07/pix-uploaded-placeholder.jpg\">\r\n              </div>\r\n\r\n\r\n              <div>\r\n                <p class=\"pl-3\">\r\n                  From {{trip.location.name}} to {{trip.destination.name}}\r\n                </p>\r\n              </div>\r\n\r\n\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n\r\n              <label class=\"money-label\">$ {{trip.price}}</label>\r\n              <a routerLink=\"/trip/{{trip.id}}\">\r\n                <button mat-stroked-button class=\"right\" mdbBtn color=\"info\" mdbWavesEffect\r\n                        (click)=this.intoTripPage(trip.id)>\r\n                  View details\r\n                </button>\r\n              </a>\r\n\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-4\">\r\n\r\n      <mat-card class=\"tripSearch\">\r\n\r\n        <div class=\"container\">\r\n          <div class=\"row justify-content-center align-items-center\">\r\n            <mat-card-header>\r\n              <!--<div mat-card-avatar class=\"tripCard-header-image\"></div>-->\r\n\r\n              <mat-card-title>Optimal for you</mat-card-title>\r\n\r\n              <!--<mat-card-subtitle>{{trip.location.country}}</mat-card-subtitle>-->\r\n            </mat-card-header>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\" *ngFor=\"let trip of searchesByProvider\">\r\n          <mat-card class=\"tripCard\">\r\n            <mat-card-header>\r\n              <!--<div mat-card-avatar class=\"tripCard-header-image\"></div>-->\r\n              <p>\r\n                <mat-card-title>{{trip.name}}</mat-card-title>\r\n              </p>\r\n              <!--<mat-card-subtitle>{{trip.location.country}}</mat-card-subtitle>-->\r\n            </mat-card-header>\r\n            <!--<img height=\"110px\" mat-card-image src={{trip.imgSrc}} alt=\"No picture available\">-->\r\n\r\n            <mat-card-content>\r\n              <div *ngIf=\"trip.imgSrc !== null && trip.imgSrc !== ''\">\r\n                <img alt=\"tripImg\" mat-card-image src=\"{{trip.imgSrc}}\">\r\n              </div>\r\n\r\n              <div *ngIf=\"trip.imgSrc === null || trip.imgSrc === ''\">\r\n                <img\r\n                  alt=\"defaultTripImg\"\r\n                  mat-card-image\r\n                  src=\"https://filetandvine.com/wp-content/uploads/2015/07/pix-uploaded-placeholder.jpg\">\r\n              </div>\r\n\r\n\r\n              <div>\r\n                <p class=\"pl-3\">\r\n                  From {{trip.location.name}} to {{trip.destination.name}}\r\n                </p>\r\n              </div>\r\n\r\n\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n\r\n              <label class=\"money-label\">$ {{trip.price}}</label>\r\n              <a routerLink=\"/trip/{{trip.id}}\">\r\n                <button mat-stroked-button class=\"right\" mdbBtn color=\"info\" mdbWavesEffect\r\n                        (click)=this.intoTripPage(trip.id)>\r\n                  View details\r\n                </button>\r\n              </a>\r\n\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-4\">\r\n      <mat-card class=\"tripSearch\">\r\n        <div class=\"container\">\r\n          <div class=\"row justify-content-center align-items-center\">\r\n            <mat-card-header>\r\n              <!--<div mat-card-avatar class=\"tripCard-header-image\"></div>-->\r\n\r\n              <mat-card-title>Top discount</mat-card-title>\r\n\r\n              <!--<mat-card-subtitle>{{trip.location.country}}</mat-card-subtitle>-->\r\n            </mat-card-header>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\" *ngFor=\"let trip of searchedByDiscount\">\r\n          <mat-card class=\"tripCard\">\r\n            <mat-card-header>\r\n              <!--<div mat-card-avatar class=\"tripCard-header-image\"></div>-->\r\n              <p>\r\n                <mat-card-title>{{trip.name}}</mat-card-title>\r\n              </p>\r\n              <!--<mat-card-subtitle>{{trip.location.country}}</mat-card-subtitle>-->\r\n            </mat-card-header>\r\n            <!--<img height=\"110px\" mat-card-image src={{trip.imgSrc}} alt=\"No picture available\">-->\r\n\r\n            <mat-card-content>\r\n              <div *ngIf=\"trip.imgSrc !== null && trip.imgSrc !== ''\">\r\n                <img alt=\"tripImg\" mat-card-image src=\"{{trip.imgSrc}}\">\r\n              </div>\r\n\r\n              <div *ngIf=\"trip.imgSrc === null || trip.imgSrc === ''\">\r\n                <img\r\n                  alt=\"defaultTripImg\"\r\n                  mat-card-image\r\n                  src=\"https://filetandvine.com/wp-content/uploads/2015/07/pix-uploaded-placeholder.jpg\">\r\n              </div>\r\n\r\n\r\n              <div>\r\n                <p class=\"pl-3\">\r\n                  From {{trip.location.name}} to {{trip.destination.name}}\r\n                </p>\r\n              </div>\r\n\r\n\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n\r\n              <label class=\"money-label\">$ {{trip.price}}</label>\r\n              <a routerLink=\"/trip/{{trip.id}}\">\r\n                <button mat-stroked-button class=\"right\" mdbBtn color=\"info\" mdbWavesEffect\r\n                        (click)=this.intoTripPage(trip.id)>\r\n                  View details\r\n                </button>\r\n              </a>\r\n\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"result==2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center align-items-center\">\r\n          <h3>\r\n            Tours with best price\r\n          </h3>\r\n        </div>\r\n      </div>\r\n\r\n      <mat-card class=\"tripSearch\">\r\n        <div class=\"col-md-12\" *ngFor=\"let tripArray of searchedByPrice\">\r\n          <mat-card>\r\n            <div class=\"col-md-12\" *ngFor=\"let trip of tripArray\">\r\n              <br>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div *ngIf=\"trip.imgSrc !== null && trip.imgSrc !== ''\">\r\n                    <img alt=\"tripImg\" mat-card-image src=\"{{trip.imgSrc}}\">\r\n                  </div>\r\n\r\n                  <div *ngIf=\"trip.imgSrc === null || trip.imgSrc === ''\">\r\n                    <img\r\n                      alt=\"defaultTripImg\"\r\n                      mat-card-image\r\n                      src=\"https://filetandvine.com/wp-content/uploads/2015/07/pix-uploaded-placeholder.jpg\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"row\">\r\n                    <h5>\r\n                      {{trip.name}}\r\n                    </h5>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <br>\r\n                    <div class=\"noPaddingLeft col-md-4\">\r\n                      <label class=\"money-label-for-select\">${{trip.price}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                      <a routerLink=\"/trip/{{trip.id}}\">\r\n                        <button mat-stroked-button class=\"buttonForSelect\" mdbBtn color=\"info\" mdbWavesEffect\r\n                                (click)=this.intoTripPage(trip.id)>\r\n                          View details\r\n                        </button>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </mat-card>\r\n          <br>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"container\">\r\n        <div class=\"row justify-content-center align-items-center\">\r\n          <h3>\r\n            Tours with the shortest road\r\n          </h3>\r\n        </div>\r\n      </div>\r\n\r\n      <mat-card class=\"tripSearch\">\r\n        <div class=\"col-md-12\" *ngFor=\"let tripArray of searchedByLength\">\r\n          <mat-card>\r\n            <div class=\"col-md-12\" *ngFor=\"let trip of tripArray\">\r\n              <br>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div *ngIf=\"trip.imgSrc !== null && trip.imgSrc !== ''\">\r\n                    <img alt=\"tripImg\" mat-card-image src=\"{{trip.imgSrc}}\">\r\n                  </div>\r\n\r\n                  <div *ngIf=\"trip.imgSrc === null || trip.imgSrc === ''\">\r\n                    <img\r\n                      alt=\"defaultTripImg\"\r\n                      mat-card-image\r\n                      src=\"https://filetandvine.com/wp-content/uploads/2015/07/pix-uploaded-placeholder.jpg\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"row\">\r\n                    <h5>\r\n                      {{trip.name}}\r\n                    </h5>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <br>\r\n                    <div class=\"noPaddingLeft col-md-4\">\r\n                      <label class=\"money-label-for-select\">${{trip.price}}</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\">\r\n                      <a routerLink=\"/trip/{{trip.id}}\">\r\n                        <button mat-stroked-button class=\"buttonForSelect\" mdbBtn color=\"info\" mdbWavesEffect\r\n                                (click)=this.intoTripPage(trip.id)>\r\n                          View details\r\n                        </button>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </mat-card>\r\n          <br>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<br><br>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/system/index/index.component.scss":
/*!***************************************************!*\
  !*** ./src/app/system/index/index.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-caption {\n  margin-bottom: 5%; }\n\n#mb {\n  background-color: #4183c4;\n  border-radius: 10px; }\n\n#bundleSlider {\n  padding-bottom: 46.25%; }\n\n.tripCard {\n  max-width: 400px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.tripCard {\n  margin-top: 20px;\n  min-width: 200px; }\n\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.carousel slide carousel-fade {\n  max-height: 500px; }\n\n#bundleSlider {\n  max-height: 400px; }\n\n.mainPage {\n  margin-right: 5%;\n  margin-left: 5%; }\n\n#test {\n  margin-right: 2%;\n  margin-left: 2%; }\n\n.right {\n  float: right;\n  margin-right: 7%;\n  background-color: #2E294E !important; }\n\n.buttonForSelect {\n  background-color: #2E294E !important; }\n\n.money-label {\n  color: darkgreen;\n  -webkit-text-decoration: #004444;\n          text-decoration: #004444;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 120%;\n  margin-left: 5%; }\n\n.money-label-for-select {\n  color: darkgreen;\n  -webkit-text-decoration: #004444;\n          text-decoration: #004444;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 100%; }\n\n.filter {\n  /*background-color: #ea8a11\t;*/\n  /*background-color: #BF7C44\t;*/\n  margin-right: 1%;\n  margin-left: 1%;\n  margin-bottom: 10px; }\n\n.aligncenter {\n  width: auto;\n  height: 0;\n  border-top: 7px solid #2E294E;\n  font-size: 0; }\n\n.row {\n  margin: 0; }\n\n/deep/ .mat-slide-toggle-label {\n  margin-bottom: 0px; }\n\n.mat-card-image {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  height: 150px; }\n\n.tripSearch {\n  background-color: #E7E6F7; }\n\n.noPaddingLeft {\n  padding-left: 0; }\n\n/deep/ .mat-slide-toggle.mat-checked {\n  color: #2E294E !important;\n  border-radius: 50%; }\n\n/deep/ .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #5a5585; }\n\n/deep/ .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2E294E; }\n\n.FindTour {\n  height: 100%;\n  color: #E7E6F7;\n  font-size: 1.2rem; }\n\n.carousel {\n  max-height: 600px; }\n\n.view {\n  max-height: 600px; }\n\n@media (max-height: 500px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #1C2331 !important; } }\n\n.styledButton {\n  max-height: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL2luZGV4L0M6XFxVc2Vyc1xcVXNlclxcTmV0Y3JhY2tlclxcdHJpcGdvZFxcZnJvbnRlbmRcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFxzeXN0ZW1cXGluZGV4XFxpbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQjtFQUVoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxTQUFTO0VBQ1QsaURBQWlELEVBQUE7O0FBSW5EO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQ0YsRUFBQTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLGdCQUFnQjtFQUNoQixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFTckI7RUFDRSxXQUFVO0VBQ1YsU0FBUTtFQUNSLDZCQUE2QjtFQUM3QixZQUFXLEVBQUE7O0FBR2I7RUFDRSxTQUFTLEVBQUE7O0FBZVg7RUFDRSxrQkFBa0IsRUFBQTs7QUFJcEI7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUdFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0U7SUFDRSw4QkFBOEIsRUFBQSxFQUMvQjs7QUFHSDtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4jbWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTgzYzQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2J1bmRsZVNsaWRlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDQ2LjI1JTtcclxufVxyXG5cclxuLnRyaXBDYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4udHJpcENhcmQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwgc2xpZGUgY2Fyb3VzZWwtZmFkZSB7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbiNidW5kbGVTbGlkZXIge1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4XHJcbn1cclxuXHJcbi5tYWluUGFnZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbiN0ZXN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b25Gb3JTZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vbmV5LWxhYmVsIHtcclxuICBjb2xvcjogZGFya2dyZWVuO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogIzAwNDQ0NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi5tb25leS1sYWJlbC1mb3Itc2VsZWN0IHtcclxuICBjb2xvcjogZGFya2dyZWVuO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogIzAwNDQ0NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZWE4YTExXHQ7Ki9cclxuICAvKmJhY2tncm91bmQtY29sb3I6ICNCRjdDNDRcdDsqL1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8vLkZpbmRUb3VyIHtcclxuLy8gIG1hcmdpbi11cDogMjAlO1xyXG4vLyAgd2lkdGg6IDgwJTtcclxuLy8gIGhlaWdodDogOTAlO1xyXG4vL31cclxuXHJcbi5hbGlnbmNlbnRlciB7XHJcbiAgd2lkdGg6YXV0bztcclxuICBoZWlnaHQ6MDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzJFMjk0RTtcclxuICBmb250LXNpemU6MDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3RNYWluUGFnZSB7XHJcblxyXG59XHJcblxyXG4vL25nLXNlbGVjdCAvZGVlcC8gc2VsZWN0LWRyb3Bkb3duIC5zZWxlY3RlZCB7XHJcbi8vICBkaXNwbGF5OiBub25lXHJcbi8vfVxyXG5cclxuLy8uZm9ybS1jb250cm9sIHtcclxuLy8gIGJvcmRlcjogMDtcclxuLy99XHJcblxyXG4vZGVlcC8gLm1hdC1zbGlkZS10b2dnbGUtbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgLy9mbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi50cmlwU2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFNkY3O1xyXG59XHJcblxyXG4ubm9QYWRkaW5nTGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4vZGVlcC8gLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQge1xyXG4gIGNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vZGVlcC8gLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNTU4NTtcclxufVxyXG5cclxuL2RlZXAvIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMjk0RTtcclxufVxyXG5cclxuLkZpbmRUb3VyIHtcclxuICAvLyBtYXJnaW4tdXA6IDIwJTtcclxuICAvLyB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogI0U3RTZGNztcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmNhcm91c2VsIHtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLnZpZXcge1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XHJcbiAgLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcclxuICAgIGJhY2tncm91bmQ6ICMxQzIzMzEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zdHlsZWRCdXR0b24ge1xyXG4gIG1heC1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/system/index/index.component.ts":
/*!*************************************************!*\
  !*** ./src/app/system/index/index.component.ts ***!
  \*************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_bundle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/bundle.service */ "./src/app/shared/bundle.service.ts");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/trip.service */ "./src/app/shared/trip.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/search.service */ "./src/app/shared/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/country.service */ "./src/app/shared/country.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");









var IndexComponent = /** @class */ (function () {
    function IndexComponent(bundleService, tripService, countryService, formBuilder, searchService, router, authService) {
        this.bundleService = bundleService;
        this.tripService = tripService;
        this.countryService = countryService;
        this.formBuilder = formBuilder;
        this.searchService = searchService;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.result = 0;
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        this.countriesLoading = false;
        this.loading = false;
    }
    Object.defineProperty(IndexComponent.prototype, "authorized", {
        get: function () {
            return this.authService.getDecodedToken() != null;
        },
        enumerable: true,
        configurable: true
    });
    IndexComponent.prototype.getBundle = function () {
        var _this = this;
        this.bundleService.getAllBundleWithImg().subscribe(function (res) {
            _this.sliderBundeles = res;
        });
    };
    IndexComponent.prototype.getTrips = function () {
        var _this = this;
        this.tripService.getAllTripsWithDetails().subscribe(function (res) {
            _this.trips = res;
        });
    };
    IndexComponent.prototype.getCountries = function () {
        var _this = this;
        this.countriesLoading = true;
        this.countryService.getAllCountries().subscribe(function (res) {
            _this.countries = res;
            _this.countriesLoading = false;
        });
    };
    //needed???
    IndexComponent.prototype.getLocation = function () {
        var _this = this;
        this.searchService.getAllCountries().subscribe(function (res) {
            _this.countries = res;
        });
    };
    IndexComponent.prototype.intoTripPage = function (id) {
        this.router.navigate(['trip/' + id]);
    };
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBundle();
        this.getTrips();
        this.getCountries();
        this.filterForm = this.initRegularSearchForm();
        this.result = 0;
        /*this.searchInfo = new class implements SearchTrip {
          destinationCountry: string;
          locationCountry: string;
          numberOfPeople: number;
          priceFrom: number;
          priceTo: number;
        };*/
        this.multiCountryModeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        this.multiCountryModeControl.valueChanges.subscribe(function (data) {
            if (data) {
                _this.filterForm = _this.initMultipleCountriesSearchForm();
            }
            else {
                _this.filterForm = _this.initRegularSearchForm();
            }
        });
        window.scrollTo(0, 0);
    };
    IndexComponent.prototype.initRegularSearchForm = function () {
        return this.formBuilder.group({
            locationCountry: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            destinationCountry: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            numberOfPeople: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]],
            priceFrom: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(50000)]],
            priceTo: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(50000)]],
        });
    };
    IndexComponent.prototype.initMultipleCountriesSearchForm = function () {
        return this.formBuilder.group({
            locationCountry: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            destinationCountry: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            numberOfPeople: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]],
            priceFrom: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(50000)]],
            priceTo: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(50000)]],
        });
    };
    IndexComponent.prototype.save = function () {
        this.submitted = true;
        if (this.filterForm.invalid) {
            return;
        }
        if (this.multiCountryModeControl.value) {
            this.loading = true;
            this.result = 2;
            this.searchInfoMultiple = this.filterForm.value;
            this.getSpecialSearch();
        }
        else {
            /*this.searchInfo.locationCountry = this.filterForm.controls.locCountry.value;
            this.searchInfo.destinationCountry = this.filterForm.controls.destCountry.value;
            this.searchInfo.numberOfPeople = this.filterForm.controls.numberOfPeople.value;
            this.searchInfo.priceTo = this.filterForm.controls.maxPrice.value;
            this.searchInfo.priceFrom = this.filterForm.controls.minPrice.value;*/
            this.searchInfo = this.filterForm.value;
            this.result = 1;
            this.getSearch();
        }
    };
    IndexComponent.prototype.EmptyArray = function (controlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            if (control.errors && !control.errors.emptyArray) {
                return;
            }
            if (control.value.length == 0) {
                control.setErrors({ emptyArray: true });
            }
            else {
                control.setErrors(null);
            }
        };
    };
    IndexComponent.prototype.getSearch = function () {
        var _this = this;
        this.searchService.getSearchByDiscount(this.searchInfo).subscribe(function (res) {
            _this.searchedByDiscount = res;
        });
        this.searchService.getSearchByProvider(this.searchInfo).subscribe(function (res) {
            _this.searchesByProvider = res;
        });
        this.searchService.getSearchByRating(this.searchInfo).subscribe(function (res) {
            _this.searchedByRating = res;
        });
    };
    IndexComponent.prototype.getSpecialSearch = function () {
        var _this = this;
        this.searchService.getSearchByPrice(this.searchInfoMultiple).subscribe(function (res) {
            _this.searchedByPrice = res;
        });
        //this.searchService.getSearchByBundle(this.searchInfoMultiple).subscribe(res => {
        //  this.searchedByBundle = res;
        //})
        this.searchService.getSearchByLength(this.searchInfoMultiple).subscribe(function (res) {
            _this.searchedByLength = res;
            _this.loading = false;
        });
    };
    IndexComponent.prototype.intoBundlePage = function (id) {
        this.router.navigate(['bundle/' + id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("firstVideo"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], IndexComponent.prototype, "video", void 0);
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/system/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/system/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bundle_service__WEBPACK_IMPORTED_MODULE_3__["BundleService"],
            _services_trip_service__WEBPACK_IMPORTED_MODULE_4__["TripService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/trip-discount-manager/trip-discount-manager.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/trip-discount-manager/trip-discount-manager.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!discountCreationMode && !discountEditMode\" class=\"row\">\r\n  <div class=\"col-md-12\">\r\n\r\n    <div class=\"row\">\r\n      <button (click)=\"switchBackMode()\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" color=\"info\"\r\n              mdbBtn\r\n              mdbWavesEffect type=\"button\">\r\n        Back\r\n      </button>\r\n\r\n      <button (click)=\"switchDiscountCreationMode()\" class=\"btn float-left btn-sm mx-1 mb-3 styledButton\" color=\"info\"\r\n              mdbBtn\r\n              mdbWavesEffect type=\"button\">\r\n        Add new discount\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 pb-3\">\r\n        <data-table (infoEvent)=\"info($event)\"\r\n                    [editable]=\"editable\"\r\n                    [records]=\"discounts\"\r\n                    [settings]=\"discountsTableSettings\"\r\n                    [tableName]=\"tableName\">\r\n        </data-table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"discountCreationMode\">\r\n\r\n  <div class=\"row\">\r\n    <button type=\"button\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" (click)=\"switchDiscountCreationMode()\"\r\n            mdbBtn\r\n            color=\"info\"\r\n            mdbWavesEffect>\r\n      Back\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-discount-form [service]=\"service\" (onSubmit)=\"onSubmit($event)\"></app-discount-form>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"discountEditMode\">\r\n\r\n  <div class=\"row\">\r\n    <button type=\"button\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" (click)=\"switchDiscountEditMode()\"\r\n            mdbBtn\r\n            color=\"info\"\r\n            mdbWavesEffect>\r\n      Back\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-discount-form [service]=\"service\" [editableDiscount]=\"currDiscount\"\r\n                         (onSubmit)=\"onSubmit($event)\" (onDelete)=\"onDelete($event)\"></app-discount-form>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/trip-discount-manager/trip-discount-manager.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/trip-discount-manager/trip-discount-manager.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXAtZGlzY291bnQtbWFuYWdlci90cmlwLWRpc2NvdW50LW1hbmFnZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/trip-discount-manager/trip-discount-manager.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/trip-discount-manager/trip-discount-manager.component.ts ***!
  \**************************************************************************/
/*! exports provided: TripDiscountManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDiscountManagerComponent", function() { return TripDiscountManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/trip */ "./src/app/model/trip.ts");
/* harmony import */ var _services_discount_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/discount.service */ "./src/app/shared/discount.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TripDiscountManagerComponent = /** @class */ (function () {
    function TripDiscountManagerComponent(discountService, route) {
        this.discountService = discountService;
        this.route = route;
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.discountsTableSettings = [
            {
                propertyName: 'serviceName'
            },
            {
                propertyName: 'type'
            },
            {
                propertyName: 'amount'
            },
            {
                propertyName: 'startDate',
                type: 'date'
            },
            {
                propertyName: 'endDate',
                type: 'date'
            }
        ];
        this.discountEditMode = false;
        this.discountCreationMode = false;
        this.tableName = 'Discounts for current trip';
        this.editable = true;
    }
    TripDiscountManagerComponent.prototype.ngOnInit = function () {
        this.discounts = this.route.snapshot.data.tripDiscountsData;
        this.discounts.forEach(function (discount) {
            discount.serviceName = discount.service.name;
        });
    };
    TripDiscountManagerComponent.prototype.onSubmit = function (addedDiscount) {
        var _this = this;
        var isNewDiscount = true;
        var i = 0;
        this.discounts.forEach(function (discountIterator) {
            if (discountIterator.id == addedDiscount.id) {
                isNewDiscount = false;
                if (new Date(addedDiscount.endDate) < new Date(Date.now())) {
                    _this.discounts.splice(i, 1);
                }
                else {
                    discountIterator.startDate = addedDiscount.startDate;
                    discountIterator.endDate = addedDiscount.endDate;
                    discountIterator.amount = addedDiscount.amount;
                    discountIterator.type = addedDiscount.type;
                }
            }
            i++;
        });
        if (isNewDiscount) {
            var serviceToAppend = void 0;
            if (this.service.id == addedDiscount.serviceId)
                serviceToAppend = this.service;
            else {
                for (var _i = 0, _a = this.service.suggestions; _i < _a.length; _i++) {
                    var suggestion = _a[_i];
                    if (suggestion.id == addedDiscount.serviceId) {
                        serviceToAppend = new _models_trip__WEBPACK_IMPORTED_MODULE_2__["Trip"](suggestion);
                        break;
                    }
                }
            }
            addedDiscount.service = serviceToAppend;
            addedDiscount.serviceName = serviceToAppend.name;
            this.discounts.push(addedDiscount);
        }
        this.route.snapshot.data.tripDiscountsData = this.discounts;
        this.discountEditMode = false;
        this.discountCreationMode = false;
        this.onUpdate.emit(addedDiscount);
    };
    TripDiscountManagerComponent.prototype.onDelete = function (deletedDiscount) {
        var _this = this;
        var i = 0;
        this.discounts.forEach(function (discountIterator) {
            if (discountIterator.id == deletedDiscount.id) {
                _this.discounts.splice(i, 1);
            }
            i++;
        });
        this.route.snapshot.data.tripDiscountsData = this.discounts;
        this.discountEditMode = false;
        this.discountCreationMode = false;
        this.onUpdate.emit(deletedDiscount);
    };
    TripDiscountManagerComponent.prototype.switchDiscountEditMode = function () {
        this.discountEditMode = !this.discountEditMode;
    };
    TripDiscountManagerComponent.prototype.switchDiscountCreationMode = function () {
        this.discountCreationMode = !this.discountCreationMode;
    };
    TripDiscountManagerComponent.prototype.switchBackMode = function () {
        this.onBack.emit();
    };
    TripDiscountManagerComponent.prototype.info = function (event) {
        this.currDiscount = this.discounts
            .find(function (discount) {
            return discount.id == event;
        });
        this.discountEditMode = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_trip__WEBPACK_IMPORTED_MODULE_2__["Trip"])
    ], TripDiscountManagerComponent.prototype, "service", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TripDiscountManagerComponent.prototype, "onBack", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TripDiscountManagerComponent.prototype, "onUpdate", void 0);
    TripDiscountManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip-discount-manager',
            template: __webpack_require__(/*! ./trip-discount-manager.component.html */ "./src/app/trip-discount-manager/trip-discount-manager.component.html"),
            styles: [__webpack_require__(/*! ./trip-discount-manager.component.scss */ "./src/app/trip-discount-manager/trip-discount-manager.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_discount_service__WEBPACK_IMPORTED_MODULE_3__["DiscountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TripDiscountManagerComponent);
    return TripDiscountManagerComponent;
}());



/***/ }),

/***/ "./src/app/trip-discount-manager/trip-discounts.resolver.ts":
/*!******************************************************************!*\
  !*** ./src/app/trip-discount-manager/trip-discounts.resolver.ts ***!
  \******************************************************************/
/*! exports provided: TripDiscountsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDiscountsResolver", function() { return TripDiscountsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_discount_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/discount.service */ "./src/app/shared/discount.service.ts");



var TripDiscountsResolver = /** @class */ (function () {
    function TripDiscountsResolver(discountService) {
        this.discountService = discountService;
    }
    TripDiscountsResolver.prototype.resolve = function (route) {
        return this.discountService.getTripRelatedDiscounts(+route.paramMap.get('id'));
    };
    TripDiscountsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_discount_service__WEBPACK_IMPORTED_MODULE_2__["DiscountService"]])
    ], TripDiscountsResolver);
    return TripDiscountsResolver;
}());



/***/ }),

/***/ "./src/app/trip/blank-page/blank-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/trip/blank-page/blank-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"illuminati\" align=\"center\">\r\n  <!--<img src=\"../../../assets/images/A4z4.gif\">-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trip/blank-page/blank-page.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/trip/blank-page/blank-page.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 100%;\n  min-height: 700px;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC9ibGFuay1wYWdlL0M6XFxVc2Vyc1xcVXNlclxcTmV0Y3JhY2tlclxcdHJpcGdvZFxcZnJvbnRlbmRcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFx0cmlwXFxibGFuay1wYWdlXFxibGFuay1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmlwL2JsYW5rLXBhZ2UvYmxhbmstcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbGx1bWluYXRpIHtcclxuICAvL21pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIC8vcG9zaXRpb246IGZpeGVkO1xyXG4gIC8vbGVmdDogMDtcclxuICAvL3JpZ2h0OiAwO1xyXG4gIC8vdG9wOiAwO1xyXG4gIC8vYm90dG9tOiAwO1xyXG4gIC8vdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/trip/blank-page/blank-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/trip/blank-page/blank-page.component.ts ***!
  \*********************************************************/
/*! exports provided: BlankPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function() { return BlankPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent() {
    }
    BlankPageComponent.prototype.ngOnInit = function () {
    };
    BlankPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__(/*! ./blank-page.component.html */ "./src/app/trip/blank-page/blank-page.component.html"),
            styles: [__webpack_require__(/*! ./blank-page.component.scss */ "./src/app/trip/blank-page/blank-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/trip/trip.component.html":
/*!******************************************!*\
  !*** ./src/app/trip/trip.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row my-3\">\r\n  <div class=\"container\">\r\n    <app-service-buttons\r\n      *ngIf=\"authority == 'ROLE_PROVIDER' || authority == 'ROLE_APPROVER' || authority == 'ROLE_ADMIN'\"\r\n      [trip]=trip\r\n      (onEdit)=\"updateTripData($event)\">\r\n    </app-service-buttons>\r\n    <div class=\"row\">\r\n      <div *ngIf=\"trip.imgSrc !== null && trip.imgSrc !== ''\" class=\"col-md-8\">\r\n        <img alt=\"tripImg\" class=\"img-responsive mainImage\" src=\"{{trip.imgSrc}}\"/>\r\n      </div>\r\n\r\n      <div *ngIf=\"trip.imgSrc === null || trip.imgSrc === ''\" class=\"col-md-8\">\r\n        <!--<img-->\r\n        <!--alt=\"defaultTripImg\"-->\r\n        <!--class=\"img-responsive mainImage\"-->\r\n        <!--src=\"https://secure.instantsoftwareonline.com/StayUSA/PropertyImages/2397/PD%2077820%20MountainView/L1.jpg?h=eS9IOEloWWlmNEc4WTArNVhzTkg1QT09\"/>-->\r\n        <img\r\n          alt=\"defaultTripImg\"\r\n          class=\"img-responsive mainImage\"\r\n          src=\"https://filetandvine.com/wp-content/uploads/2015/07/pix-uploaded-placeholder.jpg\"/>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-md-4 px-3 card headerCard\">\r\n\r\n        <div class=\"row pt-3\">\r\n          <div class=\"col-md-12 myHeaderText text-center\">\r\n            <b>{{trip.name}}</b>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row py-0\">\r\n          <div class=\"col-md-12 myHeaderText text-center\">\r\n\r\n            <ng-template #t let-fill=\"fill\">\r\n              <span [class.full]=\"fill === 100\" class=\"star\">\r\n                <span [style.width.%]=\"fill\" class=\"half\">&#9733;</span>&#9733;\r\n              </span>\r\n            </ng-template>\r\n\r\n            <ngb-rating [(rate)]=\"currentRating\" [max]=\"5\" [readonly]=\"true\" [starTemplate]=\"t\"></ngb-rating>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row pt-0\">\r\n          <div class=\"offset-md-1\"></div>\r\n          <div class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-users\"></i> {{trip.numberOfPeople}}\r\n          </div>\r\n\r\n          <div class=\"offset-md-1\"></div>\r\n\r\n          <div *ngIf=\"trip.discount != null\r\n            && checkDiscount(trip.discount.startDate, trip.discount.endDate)\" class=\"col-md-5 myText text-left\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <i class=\"fas fa-dollar-sign\"></i>\r\n              </div>\r\n\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"discountedPrice\">\r\n                    {{discountedPrice(trip.price, trip.discount.type,\r\n                    trip.discount.amount)}}\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <del class=\"oldPrice\"> {{trip.price}}</del>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"trip.discount == null ||\r\n            !checkDiscount(trip.discount.startDate, trip.discount.endDate)\" class=\"col-md-5 myText text-left\">\r\n            <div style=\"font-size: 25px;\">\r\n              <i class=\"fas fa-dollar-sign\"></i> {{trip.price}}\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row pt-2\">\r\n          <div class=\"offset-md-1\"></div>\r\n          <div *ngIf=\"trip.oneWay\" class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-long-arrow-alt-right\"></i> One-way\r\n          </div>\r\n          <div *ngIf=\"!trip.oneWay\" class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-exchange-alt\"></i> Return\r\n          </div>\r\n\r\n\r\n          <div class=\"offset-md-1\"></div>\r\n          <div class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-eye\"></i> {{views}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row pt-2\">\r\n          <div class=\"offset-md-1\"></div>\r\n\r\n          <!--<div class=\"col-md-5 text-left\" style=\"font-size: 20px;\">-->\r\n          <!--<div class=\"row\">-->\r\n          <!--<i class=\"fas fa-plane-departure myText mr-1\"></i>  {{trip.location.name}},-->\r\n          <!--</div>-->\r\n\r\n          <!--<div class=\"row\">-->\r\n          <!--{{trip.location.country.name}}-->\r\n          <!--</div>-->\r\n          <!--</div>-->\r\n\r\n          <!--<div class=\"offset-md-1\"></div>-->\r\n\r\n          <!--<div class=\"col-md-5 text-left\" style=\"font-size: 20px;\">-->\r\n          <!--<div class=\"row\">-->\r\n          <!--<i class=\"fas fa-plane-arrival myText mr-1\"></i>  {{trip.destination.name}},-->\r\n          <!--</div>-->\r\n\r\n          <!--<div class=\"row\">-->\r\n          <!--{{trip.destination.country.name}}-->\r\n          <!--</div>-->\r\n          <!--</div>-->\r\n\r\n          <div class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-plane-departure\"></i> {{trip.location.name}}\r\n          </div>\r\n\r\n          <div class=\"offset-md-1\"></div>\r\n          <div class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-plane-arrival\"></i> {{trip.destination.name}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row pt-2 mb-2\">\r\n          <div class=\"offset-md-1\"></div>\r\n          <div class=\"col-md-11 myText text-left\">\r\n            <i class=\"fas fa-user-tie\"></i> <a routerLink=\"/provider/{{trip.provider.id}}\">\r\n            {{trip.provider.username}}</a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-auto mb-3\">\r\n          <div class=\"offset-md-2\"></div>\r\n          <div class=\"col-md-8\">\r\n            <button [disabled]=\"isDisabled || authority != 'ROLE_USER'\" (click)=addToBasket(trip) block=\"true\"\r\n                    class=\"buyButton styledButton text-coloured mx-auto\"\r\n                    color=\"deep-purple\"\r\n                    mat-stroked-button\r\n                    mdbBtn\r\n                    mdbWavesEffect>\r\n              Add to cart\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row descriptionText mt-3\">\r\n\r\n      <div class=\"col-md-12 py-3 card roundedCard\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row px-5\">\r\n              <b>Description:</b>\r\n            </div>\r\n\r\n            <div class=\"row px-4\">\r\n              {{trip.description}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <agm-map [latitude]=\"(trip.location.coordinate.latitude+trip.destination.coordinate.latitude)/2\"\r\n             [longitude]=\"(trip.location.coordinate.longitude+trip.destination.coordinate.longitude)/2\" [zoom]=\"2\"\r\n             class=\"mt-3 googleMap\" style=\"height: 300px\">\r\n\r\n      <agm-marker [latitude]=\"trip.location.coordinate.latitude\"\r\n                  [longitude]=\"trip.location.coordinate.longitude\"\r\n                  [markerClickable]=\"false\"\r\n                  [markerDraggable]=\"false\"\r\n                  [markerDraggable]=\"false\"\r\n      ></agm-marker>\r\n      <agm-marker [latitude]=\"trip.destination.coordinate.latitude\"\r\n                  [longitude]=\"trip.destination.coordinate.longitude\"\r\n                  [markerClickable]=\"false\"\r\n                  [markerDraggable]=\"false\"\r\n\r\n      ></agm-marker>\r\n\r\n\r\n      <agm-polyline [editable]=\"false\">\r\n        <agm-polyline-point\r\n          [latitude]=\"trip.location.coordinate.latitude\"\r\n          [longitude]=\"trip.location.coordinate.longitude\"\r\n        >\r\n        </agm-polyline-point>\r\n        <agm-polyline-point\r\n          [latitude]=\"trip.destination.coordinate.latitude\"\r\n          [longitude]=\"trip.destination.coordinate.longitude\"\r\n        >\r\n        </agm-polyline-point>\r\n      </agm-polyline>\r\n    </agm-map>\r\n\r\n    <div class=\"row mt-3\" *ngIf=\"trip.suggestions.length != 0\">\r\n      <div *ngFor=\"let suggestion of trip.suggestions\" class=\"col-md-4 descriptionText\">\r\n        <div class=\"py-3 mx-2 mb-1 card roundedCard\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 px-auto text-center\">\r\n              <b>{{suggestion.name}}</b>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-md-12 px-4\">\r\n              {{suggestion.description}}\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-md-12 pl-4\">\r\n              <div class=\"row\">\r\n                <b>Included:</b>\r\n              </div>\r\n\r\n              <div class=\"row\" style=\"align-items: center\">\r\n                <i class=\"fas fa-circle pr-1\" style=\"font-size: 10px;\"></i>Trip\r\n              </div>\r\n\r\n              <div *ngFor=\"let service of suggestion.services\">\r\n                <div class=\"row\" style=\"align-items: center\">\r\n                  <i class=\"fas fa-circle pr-1\" style=\"font-size: 10px;\"></i>{{service.name}}\r\n                  <div class=\"pl-2\">\r\n                    (<i class=\"fas fa-dollar-sign pr-1\" style=\"font-size: 20px;\"></i>{{service.price}})\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row mt-3\">\r\n            <div *ngIf=\"suggestion.discount != null\r\n            && checkDiscount(suggestion.discount.startDate, suggestion.discount.endDate)\"\r\n                 class=\"col-md-8 pl-3\">\r\n              <div style=\"font-size: 25px;\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-1 pr-1 pl-auto\">\r\n                    <i class=\"fas fa-dollar-sign\"></i>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-8 discountedPrice\">\r\n                    {{discountedPrice(suggestion.price, suggestion.discount.type,\r\n                    suggestion.discount.amount)}}\r\n                    <del class=\"oldPrice\"> {{suggestion.price}}</del>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"suggestion.discount == null\r\n             || !checkDiscount(suggestion.discount.startDate, suggestion.discount.endDate)\"\r\n                 class=\"col-md-8 pl-3\">\r\n              <div style=\"font-size: 25px;\">\r\n                <i class=\"fas fa-dollar-sign\"></i> {{suggestion.price}}\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 pr-3\">\r\n              <button [disabled]=\"isDisabled || authority != 'ROLE_USER'\" (click)=addToBasket(suggestion)\r\n                      class=\"right styledButton text-coloured\" color=\"deep-purple\"\r\n                      mat-stroked-button mdbBtn\r\n                      mdbWavesEffect>Add to\r\n                cart\r\n              </button>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-3\" *ngIf=\"feedback != null && feedback.length != 0\">\r\n      <div class=\"col-md-12 pt-2 card roundedCard\">\r\n        <div class=\"row\">\r\n          <div *ngFor=\"let message of feedback; let i=index\" class=\"col-md-12\">\r\n\r\n            <div [ngClass]=\"{greyComment: (i % 2)}\" class=\"row py-1\">\r\n              <div class=\"col-md-12\">\r\n\r\n                <div class=\"row\">\r\n\r\n                  <div class=\"col-md-auto col-auto pl-4 pr-1 py-1\">\r\n                    <a *ngIf=\"message.user != null\" routerLink=\"/user/{{message.user.id}}\">\r\n                      <img alt=\"User pic\"\r\n                           src=\"{{message.user.details.imageSrc}}?s=35&d=mp\"\r\n                           class=\"img-responsive userPic\"/>\r\n                    </a>\r\n                    <a *ngIf=\"message.user == null\" routerLink=\"/user/{{userId}}\">\r\n                      <img alt=\"User pic\"\r\n                           src=\"{{imgSrc}}?s=35&d=mp\"\r\n                           class=\"img-responsive userPic\"/>\r\n                    </a>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-auto col-auto\">\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12 pl-1\">\r\n                        <b *ngIf=\"message.user != null\" class=\"mr-1\">{{message.user.username}}</b>\r\n                        <b *ngIf=\"message.user == null\" class=\"mr-1\">{{username}}</b>\r\n                        <ngb-rating [(rate)]=\"message.rating\" [max]=\"5\" [readonly]=\"true\" class=\"pl-1\"></ngb-rating>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row mt-0 pt-0\">\r\n                      <div class=\"col-md-12 pl-1 smallerText\">\r\n                        {{extractDateString(message.feedbackDate)}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"message.feedbackMessage != null && message.feedbackMessage !== ''\">\r\n                  <div class=\"col-md-12 pl-3\">\r\n                    {{message.feedbackMessage}}\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <!--<div *ngIf=\"(i % 2)\" class=\"row py-1 greyComment\">-->\r\n\r\n            <!--<div class=\"col-md-12\">-->\r\n\r\n            <!--<div class=\"row\">-->\r\n\r\n            <!--<div class=\"col-md-auto col-auto pl-4 pr-1 py-1\">-->\r\n            <!--<img alt=\"User pic\" src=\"{{message.user.details.imageSrc}}?s=35&d=mp\"-->\r\n            <!--class=\"img-responsive userPic\"/>-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"col-md-auto col-auto\">-->\r\n\r\n            <!--<div class=\"row\">-->\r\n            <!--<div class=\"col-md-12 pl-1\">-->\r\n            <!--<b *ngIf=\"message.user != null\" class=\"mr-1\">{{message.user.username}}</b>-->\r\n            <!--<b *ngIf=\"message.user == null\" class=\"mr-1\">{{username}}</b>-->\r\n            <!--<ngb-rating [(rate)]=\"message.rating\" [max]=\"5\" [readonly]=\"true\" class=\"pl-1\"></ngb-rating>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"row mt-0 pt-0\">-->\r\n            <!--<div class=\"col-md-12 pl-1 smallerText\">-->\r\n            <!--{{extractDateString(message.feedbackDate)}}-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"row\">-->\r\n            <!--<div class=\"col-md-12 pl-3\">-->\r\n            <!--{{message.feedbackMessage}}-->\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n\r\n            <!--</div>-->\r\n            <!--</div>-->\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div [ngClass]=\"{greyComment: !(feedback.length % 2)}\" class=\"row commentFooter pb-2\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isFeedbackAllowed\" class=\"row mt-3\">\r\n      <div class=\"col-md-12 pt-3 pb-2 card roundedCard\">\r\n\r\n        <form (ngSubmit)=\"addFeedback(feedbackForm.value)\" [formGroup]=\"feedbackForm\">\r\n          <div class=\"row px-3\">\r\n            <div class=\"col-md-12\">\r\n\r\n              <ng-template #st let-fill=\"fill\">\r\n              <span [class.full]=\"fill === 100\" class=\"smallerStar\">\r\n                &#9733;\r\n              </span>\r\n              </ng-template>\r\n\r\n              <label for=\"rating\">Your score: </label>\r\n              <ngb-rating [formControl]=\"feedbackForm.controls.rating\" [starTemplate]=\"st\" class=\"pl-2\" id=\"rating\"\r\n                          max=\"5\"></ngb-rating>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row px-3\">\r\n            <div class=\"col-md-12\">\r\n\r\n              <label for=\"message\">Your message: </label>\r\n              <textarea\r\n                [ngClass]=\"{ 'is-invalid': feedbackForm.controls.feedbackMessage.errors }\"\r\n                class=\"form-control\"\r\n                formControlName=\"feedbackMessage\"\r\n                id=\"message\"\r\n                placeholder=\"Type your feedback here\"\r\n                rows=\"5\"></textarea>\r\n\r\n              <div *ngIf=\"feedbackForm.controls.feedbackMessage.errors\" class=\"invalid-input\">\r\n                <div *ngIf=\"feedbackForm.controls.feedbackMessage.errors.minlength\">Feedback must be at least 3\r\n                  characters long\r\n                </div>\r\n                <div *ngIf=\"feedbackForm.controls.feedbackMessage.errors.maxlength\">Feedback must be less than 2048\r\n                  characters long\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"!isFeedbackGiven\" class=\"row px-3 pt-3\">\r\n            <div class=\"offset-md-10\"></div>\r\n            <div class=\"col-md-2 my-auto px-auto\">\r\n              <button class=\"btn btn-sm btn-block float-right styledButton\" color=\"indigo\" mdbBtn mdbWavesEffect\r\n                      type=\"submit\">\r\n                Submit\r\n                <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"isFeedbackGiven\" class=\"row px-3 pt-3\">\r\n            <div class=\"offset-md-8\"></div>\r\n            <div class=\"col-md-2 my-auto px-2\">\r\n              <button (click)=\"removeFeedback(feedbackForm.value)\" class=\"btn btn-sm btn-block float-right styledButton\"\r\n                      color=\"indigo\" mdbBtn\r\n                      mdbWavesEffect type=\"button\">\r\n                Remove\r\n                <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 my-auto px-2\">\r\n              <button (click)=\"updateFeedback(feedbackForm.value)\" class=\"btn btn-sm btn-block float-right styledButton\"\r\n                      color=\"indigo\" mdbBtn\r\n                      mdbWavesEffect type=\"button\">\r\n                Update\r\n                <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/trip/trip.component.scss":
/*!******************************************!*\
  !*** ./src/app/trip/trip.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container, .grid-container {\n  padding: 0;\n  border-radius: 5px;\n  margin-top: 20px;\n  border: 30px solid #E7E6F7;\n  background-color: #E7E6F7;\n  height: auto; }\n\n.card-content {\n  margin-top: 10px;\n  margin-left: 50px;\n  padding: 5px; }\n\n.content-width {\n  width: 100%; }\n\n.headerCard {\n  border-radius: 0 5px 5px 0; }\n\n.roundedCard {\n  border-radius: 5px !important; }\n\n.googleMap {\n  border-radius: 5px !important;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n  -webkit-mask-image: -webkit-radial-gradient(white, black); }\n\n.buyButton {\n  bottom: 0; }\n\n.row {\n  margin: 0; }\n\n.myHeaderText {\n  font-size: 30px; }\n\n.myText {\n  font-size: 25px !important; }\n\n.descriptionText {\n  font-size: 20px; }\n\n.right {\n  float: right;\n  background-color: #2E294E !important; }\n\ndiv {\n  padding: 0; }\n\n.mainImage {\n  border-bottom-left-radius: 5px !important;\n  border-top-left-radius: 5px !important;\n  min-height: 28em;\n  width: 100%; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 3rem;\n  color: #d3d3d3; }\n\n.full {\n  color: yellow; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: yellow; }\n\n.discountedPrice {\n  color: green; }\n\n.oldPrice {\n  font-size: 15px;\n  color: #7f7f7f; }\n\n.smallerText {\n  font-size: 11px; }\n\n.greyComment {\n  background-color: #F7F7F7; }\n\n.commentSection {\n  padding-bottom: 0; }\n\n.commentFooter {\n  border-bottom-right-radius: 5px !important;\n  border-bottom-left-radius: 5px !important; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 3rem;\n  color: #d3d3d3; }\n\n.smallerStar {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: #2E294E; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: #2E294E; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcC9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcdHJpcFxcdHJpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSwwQkFBMEIsRUFBQTs7QUFJNUI7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSw2QkFBNkI7RUFDN0IsNkNBQTZDO0VBQzdDLHlEQUF5RCxFQUFBOztBQUkzRDtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUVFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSwwQ0FBMEM7RUFDMUMseUNBQXlDLEVBQUE7O0FBRzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHJpcC90cmlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXIsIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXI6IDMwcHggc29saWQgI0U3RTZGNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFNkY3O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlckNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gIC8vYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm91bmRlZENhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ29vZ2xlTWFwIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCh3aGl0ZSwgYmxhY2spO1xyXG59XHJcblxyXG5cclxuLmJ1eUJ1dHRvbiB7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5teUhlYWRlclRleHQge1xyXG4gIC8vZm9udC1zaXplOiAyLjV2dztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5teVRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb25UZXh0IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxufVxyXG5cclxuZGl2IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubWFpbkltYWdlIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAyOGVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuXHJcbi5zdGFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogI2QzZDNkMztcclxufVxyXG5cclxuLmZ1bGwge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5oYWxmIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLmRpc2NvdW50ZWRQcmljZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ub2xkUHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzdmN2Y3ZjtcclxufVxyXG5cclxuLnNtYWxsZXJUZXh0IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5ncmV5Q29tbWVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcclxufVxyXG5cclxuLmNvbW1lbnRTZWN0aW9uIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvbW1lbnRGb290ZXIge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGNvbG9yOiAjZDNkM2QzO1xyXG59XHJcblxyXG4uc21hbGxlclN0YXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiAjZDNkM2QzO1xyXG59XHJcblxyXG4uZnVsbCB7XHJcbiAgY29sb3I6ICMyRTI5NEU7XHJcbn1cclxuXHJcbi5oYWxmIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY29sb3I6ICMyRTI5NEU7XHJcbn1cclxuXHJcbi8vLnVzZXJQaWMge1xyXG4vLyAgd2lkdGg6IDM1cHg7XHJcbi8vICBoZWlnaHQ6IDM1cHg7XHJcbi8vICBib3JkZXI6IDFweCBzb2xpZCAjMkUyOTRFO1xyXG4vLyAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4vLyAgY3Vyc29yOiBwb2ludGVyO1xyXG4vL31cclxuIl19 */"

/***/ }),

/***/ "./src/app/trip/trip.component.ts":
/*!****************************************!*\
  !*** ./src/app/trip/trip.component.ts ***!
  \****************************************/
/*! exports provided: TripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripComponent", function() { return TripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_feedback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/feedback.service */ "./src/app/shared/feedback.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/view.service */ "./src/app/shared/view.service.ts");
/* harmony import */ var _system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../system/header/user-basket/user-basket.component */ "./src/app/system/header/user-basket/user-basket.component.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @models/role */ "./src/app/model/role.ts");














var TripComponent = /** @class */ (function () {
    function TripComponent(route, feedbackService, authService, formBuilder, viewService, userBasket, router, shareDataService, snackBar) {
        var _this = this;
        this.route = route;
        this.feedbackService = feedbackService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.viewService = viewService;
        this.userBasket = userBasket;
        this.router = router;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.isDisabled = false;
        this.loading = false;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.ngOnInit();
            }
        });
    }
    TripComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trip = this.route.snapshot.data.tripData;
        this.route.params.subscribe(function (params) {
            _this.feedbackService.getTripFeedback(params['id']).subscribe(function (data) {
                _this.feedback = data;
                _this.calculateCurrentRating();
                if (_this.authService.token != null) {
                    _this.userId = _this.authService.getDecodedToken().sub;
                    _this.checkIfFeedbackGiven();
                }
                if (_this.isFeedbackGiven) {
                    _this.initFeedbackFormWithData(_this.feedback
                        .find(function (message) { return message.userId == _this.userId; }));
                }
                else {
                    _this.initFeedbackForm();
                }
            }, function (err) {
                alert(err);
            });
            if (_this.authService.token != null) {
                _this.feedbackService.checkUserFeedbackAbility(params['id']).subscribe(function (data) {
                    _this.isFeedbackAllowed = data;
                }, function (err) {
                    alert(err);
                });
            }
            _this.viewService.countViewByTripId(params['id']).subscribe(function (data) {
                _this.views = data;
            }, function (err) {
                alert(err);
            });
        });
        if (this.authService.token != null) {
            this.authority = this.authService.getDecodedToken().authority;
            this.username = this.authService.getDecodedToken().username;
        }
        if (this.authority === _models_role__WEBPACK_IMPORTED_MODULE_13__["Role"].User) {
            this.viewService.addFeedback(this.trip.id).subscribe(function () {
            }, function (err) {
                alert(err);
            });
        }
        window.scrollTo(0, 0);
    };
    TripComponent.prototype.extractDateString = function (date) {
        return (new Date(date)).toLocaleDateString();
    };
    TripComponent.prototype.calculateCurrentRating = function () {
        var sum = 0;
        for (var _i = 0, _a = this.feedback; _i < _a.length; _i++) {
            var message = _a[_i];
            sum += message.rating;
        }
        this.currentRating = sum / this.feedback.length;
    };
    TripComponent.prototype.checkIfFeedbackGiven = function () {
        for (var _i = 0, _a = this.feedback; _i < _a.length; _i++) {
            var message = _a[_i];
            if (message.userId == this.userId) {
                this.isFeedbackGiven = true;
                return;
            }
        }
        this.isFeedbackGiven = false;
    };
    TripComponent.prototype.discountedPrice = function (price, type, amount) {
        if (type === 'Fixed discount') {
            return price - amount;
        }
        else if (type === 'Percentage') {
            return price - (price * (amount / 100));
        }
        else
            return price;
    };
    TripComponent.prototype.checkDiscount = function (startDate, endDate) {
        var currDate = new Date(Date.now());
        return (currDate <= new Date(endDate) && currDate >= new Date(startDate));
    };
    TripComponent.prototype.addFeedback = function (feedbackPayload) {
        var _this = this;
        this.loading = true;
        this.imgSrc = this.getGravatarLink(this.getUserEmailHash());
        feedbackPayload.feedbackDate = Date.now();
        this.feedbackService.addFeedback(feedbackPayload).subscribe(function (data) {
            _this.feedback.push(feedbackPayload);
            _this.calculateCurrentRating();
            _this.loading = false;
            _this.isFeedbackGiven = true;
            _this.openSnackBar("Feedback added");
        }, function (err) {
            _this.loading = false;
            alert(err);
        });
    };
    TripComponent.prototype.updateFeedback = function (feedbackPayload) {
        var _this = this;
        this.loading = true;
        this.feedbackService.updateFeedback(feedbackPayload).subscribe(function (data) {
            for (var _i = 0, _a = _this.feedback; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.id == feedbackPayload.id) {
                    message.feedbackMessage = feedbackPayload.feedbackMessage;
                    message.rating = feedbackPayload.rating;
                    break;
                }
            }
            _this.calculateCurrentRating();
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            alert(err);
        });
    };
    TripComponent.prototype.removeFeedback = function (feedbackPayload) {
        var _this = this;
        this.loading = true;
        this.feedbackService.deleteFeedback(feedbackPayload.id).subscribe(function (data) {
            for (var i = 0; i < _this.feedback.length; i++) {
                if (_this.feedback[i].id == feedbackPayload.id) {
                    if (i > -1) {
                        _this.feedback.splice(i, 1);
                    }
                    break;
                }
            }
            _this.isFeedbackGiven = false;
            _this.calculateCurrentRating();
            _this.loading = false;
            _this.openSnackBar("Feedback removed");
        }, function (err) {
            _this.loading = false;
            alert(err);
        });
    };
    TripComponent.prototype.initFeedbackForm = function () {
        this.feedbackForm = this.formBuilder.group({
            id: [0],
            userId: [0],
            serviceId: [this.trip.id],
            rating: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(5)]],
            feedbackDate: [Date.now()],
            feedbackMessage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2048)]]
        });
    };
    TripComponent.prototype.initFeedbackFormWithData = function (feedbackPayload) {
        this.feedbackForm = this.formBuilder.group({
            id: [feedbackPayload.id],
            userId: [feedbackPayload.userId],
            serviceId: [this.trip.id],
            rating: [feedbackPayload.rating, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(5)]],
            feedbackDate: [feedbackPayload.feedbackDate],
            feedbackMessage: [feedbackPayload.feedbackMessage, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(2048)]]
        });
    };
    TripComponent.prototype.updateTripData = function (newTrip) {
        this.trip = newTrip;
    };
    TripComponent.prototype.addToBasket = function (trip) {
        this.isDisabled = true;
        this.userBasket.addToBasket(trip);
        this.isDisabled = false;
    };
    TripComponent.prototype.getUserEmailHash = function () {
        var email = this.authService.getDecodedToken().email;
        return ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__["Md5"].hashStr(email.trim().toLowerCase()).toString();
    };
    TripComponent.prototype.getGravatarLink = function (hash) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_9__["GRAVATAR_BASE_URL"] + hash;
    };
    TripComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarComponent"], {
            duration: 1000
        });
    };
    TripComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/trip/trip.component.html"),
            providers: [_system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_7__["UserBasketComponent"]],
            styles: [__webpack_require__(/*! ./trip.component.scss */ "./src/app/trip/trip.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_feedback_service__WEBPACK_IMPORTED_MODULE_4__["FeedbackService"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_view_service__WEBPACK_IMPORTED_MODULE_6__["ViewService"],
            _system_header_user_basket_user_basket_component__WEBPACK_IMPORTED_MODULE_7__["UserBasketComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_11__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"]])
    ], TripComponent);
    return TripComponent;
}());



/***/ }),

/***/ "./src/app/trip/trip.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/trip/trip.resolver.ts ***!
  \***************************************/
/*! exports provided: TripResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripResolver", function() { return TripResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_trip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/trip.service */ "./src/app/shared/trip.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TripResolver = /** @class */ (function () {
    function TripResolver(tripService) {
        this.tripService = tripService;
    }
    TripResolver.prototype.resolve = function (route) {
        return this.tripService.getTripById(+route.paramMap.get('id'));
    };
    TripResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_trip_service__WEBPACK_IMPORTED_MODULE_1__["TripService"]])
    ], TripResolver);
    return TripResolver;
}());



/***/ }),

/***/ "./src/app/user-profile/edit-profile/edit-profile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/user-profile/edit-profile/edit-profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-layout\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-3\"></div>\r\n    <div class=\"col-12\">\r\n\r\n      <div class=\"card\">\r\n        <form [formGroup]=\"editUserForm\" class=\"card-block card-content form-layout\">\r\n          <!-- Name -->\r\n          <h1 align=\"center\">Edit User</h1>\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\"\r\n                   id=\"editUsername\"\r\n                   class=\"form-control\"\r\n                   name=\"username\"\r\n                   value=\"{{user?.username}}\"\r\n                   placeholder=\"Enter new username\"\r\n                   autocomplete=\"name\"\r\n                   formControlName=\"username\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedEditing && userDataForm.username.errors }\"/>\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submittedEditing && userDataForm.username.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"userDataForm.username.errors.required\">Field is required</div>\r\n              <div *ngIf=\"userDataForm.username.errors.minlength\">Name must be at least 3 characters long</div>\r\n              <div *ngIf=\"userDataForm.username.errors.maxlength\">Name must be less than 15 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- First name -->\r\n          <div class=\"form-group\">\r\n            <label>First name</label>\r\n            <input type=\"text\"\r\n                   id=\"editFirstName\"\r\n                   class=\"form-control\"\r\n                   name=\"firstName\"\r\n                   value=\"{{user?.details.firstName}}\"\r\n                   placeholder=\"Enter your new first name\"\r\n                   formControlName=\"firstName\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedEditing && userDataForm.firstName.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submittedEditing && userDataForm.firstName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"userDataForm.firstName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"userDataForm.firstName.errors.minlength\">First name must be at least 4 characters long</div>\r\n              <div *ngIf=\"userDataForm.firstName.errors.maxlength\">First name must be less than 40 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Last name -->\r\n          <div class=\"form-group\">\r\n            <label>Last name</label>\r\n            <input type=\"text\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedEditing && userDataForm.lastName.errors }\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"lastName\"\r\n                   id=\"editLastName\"\r\n                   name=\"lastName\"\r\n                   placeholder=\"Enter your new last name\"\r\n                   value=\"{{user?.details.lastName}}\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submittedEditing && userDataForm.lastName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"userDataForm.lastName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"userDataForm.lastName.errors.minlength\">Last name must be at least 4 characters long</div>\r\n              <div *ngIf=\"userDataForm.lastName.errors.maxlength\">Last name must be less than 40 characters long\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Email -->\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"email\"\r\n                   id=\"editEmail\"\r\n                   class=\"form-control\"\r\n                   name=\"email\"\r\n                   value=\"{{user?.email}}\"\r\n                   placeholder=\"Enter your new email\"\r\n                   formControlName=\"email\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedEditing && userDataForm.email.errors }\"/>\r\n\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submittedEditing && userDataForm.email.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"userDataForm.email.errors.required\">Field is required</div>\r\n              <div *ngIf=\"userDataForm.email.errors.email\">Email is not valid</div>\r\n              <div *ngIf=\"userDataForm.email.errors.maxlength\">Email name must be less than 40 characters long\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!--TO ADD LOCATION EDIT FIELD???-->\r\n\r\n          <button [disabled]=\"isDisabled\" class=\"btn styledButton\" data-target=\"#confirmEditModal\" data-toggle=\"modal\"\r\n                  type=\"button\" mdbBtn color=\"info\" mdbWavesEffect>\r\n            Update\r\n          </button>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"offset-3\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"confirmEditModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"labelUpd\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"labelUpd\"></h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to change your credentials?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" mdbBtn color=\"danger\" mdbWavesEffect>Close</button>\r\n        <button type=\"submit\" (click)=\"updateUser()\" class=\"btn btn-success\" data-dismiss=\"modal\" mdbBtn color=\"success\" mdbWavesEffect>Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-profile/edit-profile/edit-profile.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/user-profile/edit-profile/edit-profile.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-profile/edit-profile/edit-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user-profile/edit-profile/edit-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");









var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(router, route, formBuilder, http, userService, shareDataService, snackBar) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.http = http;
        this.userService = userService;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.submittedEditing = false;
        this.isDisabled = false;
    }
    Object.defineProperty(EditProfileComponent.prototype, "userDataForm", {
        get: function () {
            return this.editUserForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserSummaryById(this.route.snapshot.paramMap.get("id")).subscribe(function (data) {
            _this.user = data;
            _this.newUser = data;
        }, function (err) {
            alert(err);
        });
        this.editUserForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(128)]],
        });
        window.scrollTo(0, 0);
    };
    EditProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.isDisabled = true;
        this.submittedEditing = true;
        if (!this.editUserForm.controls.username.value.trim()) {
            this.editUserForm.controls.username.setValue(this.user.username);
        }
        if (!this.editUserForm.controls.firstName.value.trim()) {
            this.editUserForm.controls.firstName.setValue(this.user.details.firstName);
        }
        if (!this.editUserForm.controls.lastName.value.trim()) {
            this.editUserForm.controls.lastName.setValue(this.user.details.lastName);
        }
        if (!this.editUserForm.controls.email.value.trim()) {
            this.editUserForm.controls.email.setValue(this.user.email);
        }
        this.newUser.username = this.editUserForm.controls.username.value.trim();
        this.newUser.details.firstName = this.editUserForm.controls.firstName.value.trim();
        this.newUser.details.lastName = this.editUserForm.controls.lastName.value.trim();
        this.newUser.email = this.editUserForm.controls.email.value.trim();
        if (this.editUserForm.invalid) {
            this.isDisabled = false;
            return;
        }
        return this.userService.updateSummary(this.newUser).subscribe(function () {
            _this.router.navigate(['user/' + _this.user.id]);
            _this.openSnackBar("User summary updated");
            _this.isDisabled = false;
        });
    };
    EditProfileComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarComponent"], {
            duration: 1000
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EditProfileComponent.prototype, "userId", void 0);
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/user-profile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/user-profile/edit-profile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div align=\"center\">\r\n\r\n        <img alt=\"User Pic\" src=\"{{user?.details.imageSrc}}?s=196&d=mp\"\r\n             class=\"img-responsive userpic\" id=\"profile-image1\">\r\n        <div>\r\n          <button (click)=\"editUser()\" *ngIf=\"editable\" class=\"btn btn1 styledButton\" color=\"primary\" mdbBtn\r\n                  mdbWavesEffect style=\"width: 196px\">Edit profile\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-8\">\r\n      <table borderless=\"true\" mdbTable>\r\n        <tr class=\"head\">Account details</tr>\r\n        <tbody>\r\n        <tr>\r\n          <td>\r\n              <mdb-icon fas icon=\"user\"></mdb-icon>\r\n              Username:\r\n          </td>\r\n          <td>{{user?.username}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mdb-icon far icon=\"id-card\"></mdb-icon>\r\n            First name:\r\n          </td>\r\n          <td>{{user?.details.firstName}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mdb-icon fas icon=\"id-card\"></mdb-icon>\r\n            Last name:\r\n          </td>\r\n          <td>{{user?.details.lastName}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mdb-icon fas icon=\"envelope\"></mdb-icon>\r\n            E-mail:\r\n          </td>\r\n          <td>{{user?.email}}</td>\r\n        </tr>\r\n        <!--<tr>-->\r\n        <!--<td>-->\r\n        <!--<mdb-icon fas icon=\"map-marked-alt\"></mdb-icon>-->\r\n        <!--Address:-->\r\n        <!--</td>-->\r\n        <!--<td>{{user?.details.locationId}}</td>-->\r\n        <!--</tr>-->\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userpic {\n  width: 196px;\n  height: 196px;\n  border: 2px solid #2E294E;\n  border-radius: 2px; }\n\n.btn1 {\n  margin-top: 10px; }\n\n.btn2 {\n  margin-top: 20px; }\n\n.actblock {\n  margin-top: 20px; }\n\ntd {\n  font-size: 20px;\n  padding-left: 5px; }\n\nth {\n  font-size: 24px;\n  padding-left: 5px; }\n\ntr {\n  border: 1px solid #95a5a6; }\n\ntable thead, th {\n  background: #ecf0f1; }\n\ntable {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border-collapse: collapse;\n  border-style: hidden; }\n\n.head {\n  font-weight: bolder;\n  font-size: 30px; }\n\nmdb-badge {\n  font-size: 30px; }\n\nh5 mdb-badge {\n  font-size: 20px;\n  alignment: left !important; }\n\nul mdb-icon {\n  margin-right: 10px; }\n\ntable {\n  margin-top: 10px; }\n\n.card-content {\n  margin-top: 10px;\n  margin-left: 50px;\n  padding: 5px; }\n\n.content-width {\n  width: 100%; }\n\n.tab-content.card {\n  border: 0; }\n\n.hover-block:hover {\n  background: #2980b9;\n  color: #ffffff; }\n\n.hover-block.active {\n  background: #2980b9;\n  color: #ffffff; }\n\n.container, .grid-container {\n  padding: 0;\n  border-radius: 5px;\n  margin-top: 20px;\n  background-color: white;\n  height: auto; }\n\nmat-tab {\n  font-weight: bolder; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL0M6XFxVc2Vyc1xcVXNlclxcTmV0Y3JhY2tlclxcdHJpcGdvZFxcZnJvbnRlbmRcXHNyY1xcbWFpblxcd2ViL3NyY1xcYXBwXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJwaWMge1xyXG4gIHdpZHRoOiAxOTZweDtcclxuICBoZWlnaHQ6IDE5NnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyRTI5NEU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYnRuMSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ0bjIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hY3RibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxudGQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxudGgge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxudHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NWE1YTY7XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkLCB0aCB7XHJcbiAgYmFja2dyb3VuZDogI2VjZjBmMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxubWRiLWJhZGdlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmg1IG1kYi1iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGFsaWdubWVudDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCBtZGItaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYi1jb250ZW50LmNhcmQge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmhvdmVyLWJsb2NrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaG92ZXItYmxvY2suYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyLCAuZ3JpZC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5tYXQtdGFiIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");






var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router, http, usersService, aRoute, authService) {
        this.router = router;
        this.http = http;
        this.usersService = usersService;
        this.aRoute = aRoute;
        this.authService = authService;
        this.editable = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUserSummaryById(+this.aRoute.snapshot.paramMap.get("id")).subscribe(function (data) {
            _this.user = data;
            _this.editable = (_this.user.authority == "ROLE_PROVIDER" || _this.user.authority == "ROLE_APPROVER") && _this.authService.getDecodedToken().authority == "ROLE_ADMIN";
        }, function (err) {
            alert(err);
        });
        window.scrollTo(0, 0);
    };
    UserProfileComponent.prototype.editUser = function () {
        this.router.navigate(['edit/' + this.user.id]);
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user-profile/user-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _shared_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/admin-dashboard/admin.dashboard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/admin-dashboard/admin.dashboard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Users per year\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"chart\">\r\n            <canvas [chartType]=\"bar\"\r\n                    [colors]=\"barColors\"\r\n                    [datasets]=\"barDatasets\"\r\n                    [labels]=\"barLabels\"\r\n                    [legend]=\"true\"\r\n                    [options]=\"barOptions\"\r\n                    mdbChart>\r\n            </canvas>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Services distibution\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"chart\">\r\n            <canvas [chartType]=\"doughnut\"\r\n                    [colors]=\"doughnutColors\"\r\n                    [datasets]=\"doughnutDatasets\"\r\n                    [labels]=\"doughnutLabels\"\r\n                    [legend]=\"true\"\r\n                    [options]=\"doughnutOptions\"\r\n                    mdbChart>\r\n            </canvas>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Carriers per year\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"chart\">\r\n            <canvas [chartType]=\"line\"\r\n                    [colors]=\"lineColors\"\r\n                    [datasets]=\"lineDatasets\"\r\n                    [labels]=\"lineLabels\"\r\n                    [legend]=\"true\"\r\n                    [options]=\"lineOptions\"\r\n                    mdbChart>\r\n            </canvas>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"2\" [rowspan]=\"2\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Trips per country\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"chart\">\r\n            <canvas mdbChart\r\n                    [chartType]=\"horizontal\"\r\n                    [datasets]=\"horizontalDatasets\"\r\n                    [labels]=\"horizontalLabels\"\r\n                    [colors]=\"horizontalColors\"\r\n                    [options]=\"horizontalOptions\"\r\n                    [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\" class=\"offset-3\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Costs per interval\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"chart\">\r\n            <canvas mdbChart\r\n                    [chartType]=\"pie\"\r\n                    [datasets]=\"pieDatasets\"\r\n                    [labels]=\"pieLabels\"\r\n                    [colors]=\"pieColors\"\r\n                    [options]=\"pieOptions\"\r\n                    [legend]=\"true\">\r\n            </canvas>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/admin-dashboard/admin.dashboard.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/admin-dashboard/admin.dashboard.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.chart {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hZG1pbi1kYXNoYm9hcmQvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXHVzZXJcXGFkbWluLWRhc2hib2FyZFxcYWRtaW4uZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9hZG1pbi1kYXNoYm9hcmQvYWRtaW4uZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1vcmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/admin-dashboard/admin.dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/admin-dashboard/admin.dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/dashboard.service */ "./src/app/shared/dashboard.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, dashboardService) {
        this.http = http;
        this.dashboardService = dashboardService;
        //BAR CHART
        this.bar = 'bar';
        this.barColors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2,
            }
        ];
        this.barOptions = {
            responsive: true
        };
        //----------------
        //DOUGHNUT CHART
        this.doughnut = 'doughnut';
        this.doughnutColors = [
            {
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
                borderWidth: 2,
            }
        ];
        this.doughnutOptions = {
            responsive: true
        };
        //----------------
        //LINE CHART
        this.line = 'line';
        this.lineColors = [
            {
                backgroundColor: 'rgba(105, 0, 132, .2)',
                borderColor: 'rgba(200, 99, 132, .7)',
                borderWidth: 2,
            },
            {
                backgroundColor: 'rgba(0, 137, 132, .2)',
                borderColor: 'rgba(0, 10, 130, .7)',
                borderWidth: 2,
            }
        ];
        this.lineOptions = {
            responsive: true
        };
        //----------------
        //HORIZONTAL CHART
        this.horizontal = 'horizontalBar';
        this.horizontalColors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2,
            }
        ];
        this.horizontalOptions = {
            responsive: true
        };
        //----------------
        //PIE CHART
        this.pie = 'pie';
        this.pieColors = [
            {
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
                borderWidth: 2,
            }
        ];
        this.pieOptions = {
            responsive: true
        };
        this.adminDashboards = {
            usersPerYear: [],
            servicesDistribution: [],
            countryTrips: [],
            carriersPerYear: [],
            costsPerInterval: [],
            troubleTicketStatistic: []
        };
        this.years = [];
        this.userNumbers = [];
        this.serviceTypes = [];
        this.distAmount = [];
        this.countryNames = [];
        this.amount = [];
        this.yearsC = [];
        this.carrierNumbers = [];
        this.interval = [];
        this.cost = [];
        this.state = [];
        this.ttAmount = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getAdminDashboard().subscribe(function (data) {
            if (data) {
                _this.adminDashboards = data;
                _this.adminDashboards.usersPerYear.forEach(function (element) {
                    _this.years.push(element.year);
                    _this.userNumbers.push(element.usersAmount);
                });
                //mock for presentation
                _this.years.push('2020');
                _this.userNumbers.push(150);
                //--------------------
                _this.userNumbers.push(0);
                _this.adminDashboards.servicesDistribution.forEach(function (element) {
                    _this.serviceTypes.push(element.serviceType);
                    _this.distAmount.push(element.distAmount);
                });
                _this.adminDashboards.countryTrips.forEach(function (element) {
                    _this.countryNames.push(element.countryName);
                    _this.amount.push(element.amount);
                });
                _this.amount.push(0);
                _this.adminDashboards.carriersPerYear.forEach(function (element) {
                    _this.yearsC.push(element.year);
                    _this.carrierNumbers.push(element.usersAmount);
                });
                //mock for presentation
                _this.yearsC.push('2020');
                _this.carrierNumbers.push(30);
                //--------------------
                _this.adminDashboards.costsPerInterval.forEach(function (element) {
                    _this.interval.push(element.interval);
                    _this.cost.push(element.cost);
                });
                _this.adminDashboards.troubleTicketStatistic.forEach(function (element) {
                    _this.state.push(element.state);
                    _this.ttAmount.push(element.amount);
                });
                _this.ttAmount.push(0);
            }
        }, function (err) {
            alert(err);
        });
    };
    DashboardComponent.prototype.ngAfterContentInit = function () {
        this.barDatasets = [
            { data: this.ttAmount, label: 'Trouble tickets stat' }
        ];
        this.barLabels = this.state;
        this.doughnutDatasets = [
            { data: this.distAmount, label: 'Service amount' }
        ];
        this.doughnutLabels = this.serviceTypes;
        this.lineDatasets = [
            { data: this.carrierNumbers, label: 'Carriers amount' },
            { data: this.userNumbers, label: 'Users amount' }
        ];
        this.lineLabels = this.yearsC;
        this.horizontalDatasets = [
            { data: this.amount, label: 'Trips amount' }
        ];
        this.horizontalLabels = this.countryNames;
        this.pieDatasets = [
            { data: this.cost, label: 'Cost' }
        ];
        this.pieLabels = this.interval;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin.dashboard.component.html */ "./src/app/user/admin-dashboard/admin.dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin.dashboard.component.scss */ "./src/app/user/admin-dashboard/admin.dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/user/approver-dashboard/approver-dashboard.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/user/approver-dashboard/approver-dashboard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <mat-grid-list cols=\"2\">\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Productivity diagram\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"chart\">\r\n            <canvas [chartType]=\"doughnut\"\r\n                    [colors]=\"doughnutColors\"\r\n                    [datasets]=\"doughnutDataSets\"\r\n                    [labels]=\"doughnutLabels\"\r\n                    [legend]=\"true\"\r\n                    [options]=\"doughnutOptions\"\r\n                    mdbChart>\r\n            </canvas>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n    <mat-card class=\"dashboard-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          Waiting diagram\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content class=\"dashboard-card-content\">\r\n        <div class=\"chart\">\r\n          <canvas [chartType]=\"doughnutOfWaitingDiagram\"\r\n                  [colors]=\"doughnutColorsOfWaitingDiagram\"\r\n                  [datasets]=\"doughnutDataSetsOfWaitingDiagram\"\r\n                  [labels]=\"doughnutLabelsOfWaitingDiagram\"\r\n                  [legend]=\"true\"\r\n                  [options]=\"doughnutOptionsOfWaitingDiagram\"\r\n                  mdbChart>\r\n          </canvas>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/approver-dashboard/approver-dashboard.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user/approver-dashboard/approver-dashboard.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.chart {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hcHByb3Zlci1kYXNoYm9hcmQvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXHVzZXJcXGFwcHJvdmVyLWRhc2hib2FyZFxcYXBwcm92ZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9hcHByb3Zlci1kYXNoYm9hcmQvYXBwcm92ZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1vcmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/approver-dashboard/approver-dashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/approver-dashboard/approver-dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApproverDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverDashboardComponent", function() { return ApproverDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/dashboard.service */ "./src/app/shared/dashboard.service.ts");




var ApproverDashboardComponent = /** @class */ (function () {
    function ApproverDashboardComponent(http, dashboardService) {
        this.http = http;
        this.dashboardService = dashboardService;
        //DOUGHNUT CHART of ProductivityDiagram
        this.labelsOfProductivity = ['Approved Services', 'Answered Trouble Tickets'];
        this.labelsOfWaiting = ['Waited Services', 'Waited Trouble Tickets'];
        this.doughnut = 'doughnut';
        this.doughnutColors = [
            {
                backgroundColor: ['#F7464A', '#46BFBD'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1'],
                borderWidth: 2,
            }
        ];
        this.doughnutOptions = {
            responsive: true
        };
        //----------------
        //DOUGHNUT CHART of WaitingDiagram
        this.doughnutOfWaitingDiagram = 'doughnut';
        this.doughnutColorsOfWaitingDiagram = [
            {
                backgroundColor: ['#F7464A', '#46BFBD'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1'],
                borderWidth: 2,
            }
        ];
        this.doughnutOptionsOfWaitingDiagram = {
            responsive: true
        };
        //----------------
        this.waitingDiagram = {
            quantityOfUnapprovedServices: 0,
            quantityOfUnansweredTroubleTickets: 0
        };
        this.productivityDiagram = {
            quantityOfApprovedServices: 0,
            quantityOfAnsweredTroubleTickets: 0
        };
        this.approverDashboard = {
            waitingDiagram: this.waitingDiagram,
            productivityDiagram: this.productivityDiagram
        };
        this.dataOfProductivityDiagram = [];
        this.dataOfWaitingDiagram = [];
    }
    ApproverDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getApproverDashboard().subscribe(function (data) {
            _this.approverDashboard = data;
            _this.dataOfProductivityDiagram.push(_this.approverDashboard.productivityDiagram.quantityOfAnsweredTroubleTickets);
            _this.dataOfProductivityDiagram.push(_this.approverDashboard.productivityDiagram.quantityOfApprovedServices);
            _this.dataOfWaitingDiagram.push(_this.approverDashboard.waitingDiagram.quantityOfUnansweredTroubleTickets);
            _this.dataOfWaitingDiagram.push(_this.approverDashboard.waitingDiagram.quantityOfUnapprovedServices);
        });
    };
    ApproverDashboardComponent.prototype.ngAfterContentInit = function () {
        this.doughnutDataSets = [
            {
                data: this.dataOfProductivityDiagram,
                label: 'Service amount'
            }
        ];
        this.doughnutLabels = this.labelsOfProductivity;
        this.doughnutDataSetsOfWaitingDiagram = [
            {
                data: this.dataOfWaitingDiagram,
                label: 'Service amount'
            }
        ];
        this.doughnutLabelsOfWaitingDiagram = this.labelsOfWaiting;
    };
    ApproverDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approver-dashboard',
            template: __webpack_require__(/*! ./approver-dashboard.component.html */ "./src/app/user/approver-dashboard/approver-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./approver-dashboard.component.scss */ "./src/app/user/approver-dashboard/approver-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], ApproverDashboardComponent);
    return ApproverDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user/carrier-dashboard/carrier.dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/carrier-dashboard/carrier.dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n      <mat-card class=\"dashboard-card\">\r\n\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Sales\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"chart\">\r\n            <canvas (chartClick)=\"pieClicked($event)\"\r\n                    (chartHover)=\"pieHovered($event)\"\r\n                    [chartType]=\"pie\"\r\n                    [colors]=\"pieColors\"\r\n                    [datasets]=\"pieDataSets\"\r\n                    [labels]=\"pieLabels\"\r\n                    [legend]=\"true\"\r\n                    [options]=\"pieOptions\"\r\n                    mdbChart>\r\n            </canvas>\r\n          </div>\r\n        </mat-card-content>\r\n\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"2\">\r\n      <mat-card class=\"dashboard-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            Views\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n        <mat-card-content class=\"dashboard-card-content\">\r\n          <div class=\"chart\">\r\n            <canvas (chartClick)=\"pieClicked($event)\"\r\n                    (chartHover)=\"pieHovered($event)\"\r\n                    [chartType]=\"pieOfViews\"\r\n                    [colors]=\"pieColorsOfViews\"\r\n                    [datasets]=\"pieDataSetsOfViews\"\r\n                    [labels]=\"pieLabelsOfViews\"\r\n                    [legend]=\"true\"\r\n                    [options]=\"pieOptionsOfViews\"\r\n                    mdbChart>\r\n            </canvas>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/carrier-dashboard/carrier.dashboard.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user/carrier-dashboard/carrier.dashboard.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n.chart {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jYXJyaWVyLWRhc2hib2FyZC9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcdXNlclxcY2Fycmllci1kYXNoYm9hcmRcXGNhcnJpZXIuZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci9jYXJyaWVyLWRhc2hib2FyZC9jYXJyaWVyLmRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5tb3JlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhcnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/carrier-dashboard/carrier.dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/carrier-dashboard/carrier.dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: CarrierDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierDashboardComponent", function() { return CarrierDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/app/environments/environment.ts");




var CarrierDashboardComponent = /** @class */ (function () {
    function CarrierDashboardComponent(http) {
        this.http = http;
        //POLAR CHART Of Sales
        this.pie = 'pie';
        this.pieColors = [
            {
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
                borderWidth: 2,
            }
        ];
        this.pieOptions = {
            responsive: true
        };
        //----------------
        //POLAR CHART Of Views
        this.pieOfViews = 'pie';
        this.pieColorsOfViews = [
            {
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
                borderWidth: 2,
            }
        ];
        this.pieOptionsOfViews = {
            responsive: true
        };
        //----------------
        this.carrierDashboard = {
            sales: [],
            views: []
        };
        this.salesBy = [];
        this.salesAmount = [];
        this.viewsBy = [];
        this.viewsAmount = [];
    }
    CarrierDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_CARRIER_DASHBOARDS"]).subscribe(function (data) {
            if (data) {
                _this.carrierDashboard = data;
                _this.carrierDashboard.sales.forEach(function (element) {
                    _this.salesBy.push(element.salesBy);
                    _this.salesAmount.push(element.salesAmount);
                });
                _this.carrierDashboard.views.forEach(function (element) {
                    _this.viewsBy.push(element.viewsBy);
                    _this.viewsAmount.push(element.viewsAmount);
                });
            }
        }, function (err) {
            alert(err);
        });
    };
    CarrierDashboardComponent.prototype.ngAfterContentInit = function () {
        this.pieDataSets = [
            { data: this.salesAmount, label: 'Sales amount' }
        ];
        this.pieLabels = this.salesBy;
        this.pieDataSetsOfViews = [
            { data: this.viewsAmount, label: 'Views amount' }
        ];
        this.pieLabelsOfViews = this.viewsBy;
    };
    //Events
    CarrierDashboardComponent.prototype.pieClicked = function (e) {
    };
    CarrierDashboardComponent.prototype.pieHovered = function (e) {
    };
    CarrierDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carrier-dashboard',
            template: __webpack_require__(/*! ./carrier.dashboard.component.html */ "./src/app/user/carrier-dashboard/carrier.dashboard.component.html"),
            styles: [__webpack_require__(/*! ./carrier.dashboard.component.scss */ "./src/app/user/carrier-dashboard/carrier.dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CarrierDashboardComponent);
    return CarrierDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-layout\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-3\"></div>\r\n    <div class=\"col-12\">\r\n\r\n      <div class=\"card\">\r\n        <form [formGroup]=\"editUserForm\" class=\"card-block card-content form-layout\">\r\n          <!-- Name -->\r\n          <h2 align=\"center\">Edit User</h2>\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\"\r\n                   id=\"editUsername\"\r\n                   class=\"form-control\"\r\n                   name=\"username\"\r\n                   value=\"{{currentUser?.username}}\"\r\n                   placeholder=\"Enter new username\"\r\n                   autocomplete=\"name\"\r\n                   formControlName=\"username\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedEditing && userDataForm.username.errors }\"/>\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submittedEditing && userDataForm.username.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"userDataForm.username.errors.required\">Field is required</div>\r\n              <div *ngIf=\"userDataForm.username.errors.minlength\">Name must be at least 3 characters long</div>\r\n              <div *ngIf=\"userDataForm.username.errors.maxlength\">Name must be less than 15 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- First name -->\r\n          <div class=\"form-group\">\r\n            <label>First name</label>\r\n            <input type=\"text\"\r\n                   id=\"editFirstName\"\r\n                   class=\"form-control\"\r\n                   name=\"firstName\"\r\n                   value=\"{{currentUser?.details.firstName}}\"\r\n                   placeholder=\"Enter your new first name\"\r\n                   formControlName=\"firstName\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedEditing && userDataForm.firstName.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submittedEditing && userDataForm.firstName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"userDataForm.firstName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"userDataForm.firstName.errors.minlength\">First name must be at least 4 characters long</div>\r\n              <div *ngIf=\"userDataForm.firstName.errors.maxlength\">First name must be less than 40 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Last name -->\r\n          <div class=\"form-group\">\r\n            <label>Last name</label>\r\n            <input type=\"text\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedEditing && userDataForm.lastName.errors }\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"lastName\"\r\n                   id=\"editLastName\"\r\n                   name=\"lastName\"\r\n                   placeholder=\"Enter your new last name\"\r\n                   value=\"{{currentUser?.details.lastName}}\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submittedEditing && userDataForm.lastName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"userDataForm.lastName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"userDataForm.lastName.errors.minlength\">Last name must be at least 4 characters long</div>\r\n              <div *ngIf=\"userDataForm.lastName.errors.maxlength\">Last name must be less than 40 characters long\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Email -->\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"email\"\r\n                   id=\"editEmail\"\r\n                   class=\"form-control\"\r\n                   name=\"email\"\r\n                   value=\"{{currentUser?.email}}\"\r\n                   placeholder=\"Enter your new email\"\r\n                   formControlName=\"email\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedEditing && userDataForm.email.errors }\"/>\r\n\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submittedEditing && userDataForm.email.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"userDataForm.email.errors.required\">Field is required</div>\r\n              <div *ngIf=\"userDataForm.email.errors.email\">Email is not valid</div>\r\n              <div *ngIf=\"userDataForm.email.errors.maxlength\">Email name must be less than 40 characters long\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!--TO ADD LOCATION EDIT FIELD???-->\r\n\r\n          <button [disabled]=\"isDisabled\" class=\"btn styledButton\" data-target=\"#confirmEditModal\" data-toggle=\"modal\"\r\n                  type=\"button\" mdbBtn color=\"info\" mdbWavesEffect>\r\n            Update\r\n          </button>\r\n\r\n        </form>\r\n      </div>\r\n\r\n      <br/>\r\n      <div class=\"card card-layout\">\r\n        <form [formGroup]=\"changePasswordForm\"\r\n              class=\"card-block card-content form-layout\">\r\n          <h2 align=\"center\">Change password:</h2>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\r\n          <!-- Old password -->\r\n          <div class=\"form-group\">\r\n            <label>Old password</label>\r\n            <input type=\"password\"\r\n                   id=\"editOldPassword\"\r\n                   class=\"form-control\"\r\n                   name=\"oldPassword\"\r\n                   formControlName=\"oldPassword\"\r\n                   placeholder=\"Enter your password\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedPasswordChanging && passwordForm.oldPassword.errors }\"/>\r\n\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submittedPasswordChanging && passwordForm.oldPassword.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"passwordForm.oldPassword.errors.required\">Field is required</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- New password -->\r\n          <div class=\"form-group\">\r\n            <label>New Password</label>\r\n            <input type=\"password\"\r\n                   id=\"editNewPassword\"\r\n                   class=\"form-control\"\r\n                   name=\"newPassword\"\r\n                   formControlName=\"newPassword\"\r\n                   placeholder=\"Create a new password\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedPasswordChanging && passwordForm.newPassword.errors }\"/>\r\n\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submittedPasswordChanging && passwordForm.newPassword.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"passwordForm.newPassword.errors.required\">Field is required</div>\r\n              <div *ngIf=\"passwordForm.password.errors.minlength\">Password must be at least 6 characters long</div>\r\n              <div *ngIf=\"passwordForm.password.errors.maxlength\">Password must be less than 20 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- New password confirm -->\r\n          <div class=\"form-group\">\r\n            <label>New password confirmation</label>\r\n            <input type=\"password\"\r\n                   id=\"editNewPasswordConfirm\"\r\n                   class=\"form-control\"\r\n                   name=\"newPasswordConfirm\"\r\n                   formControlName=\"newPasswordConfirm\"\r\n                   placeholder=\"Repeat password\"\r\n                   [ngClass]=\"{ 'is-invalid': submittedPasswordChanging && passwordForm.newPasswordConfirm.errors }\"/>\r\n\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submittedPasswordChanging && passwordForm.newPasswordConfirm.invalid\" class=\"invalid-input\">\r\n              <div *ngIf=\"passwordForm.newPasswordConfirm.errors.required\">Field is required</div>\r\n              <div *ngIf=\"passwordForm.newPasswordConfirm.errors.mustMatch\">Passwords must match</div>\r\n            </div>\r\n          </div>\r\n\r\n          <button [disabled]=\"isDisabled\" class=\"btn styledButton\" data-target=\"#confirmChangePasswordModal\"\r\n                  data-toggle=\"modal\" type=\"button\" mdbBtn color=\"info\" mdbWavesEffect>\r\n            Change password\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"offset-3\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"confirmEditModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"labelUpd\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"labelUpd\"></h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to change your credentials?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" mdbBtn color=\"danger\" mdbWavesEffect>Close</button>\r\n        <button type=\"submit\" (click)=\"updateUser()\" class=\"btn btn-success\" data-dismiss=\"modal\" mdbBtn color=\"success\" mdbWavesEffect>Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"confirmChangePasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"labelCp\"\r\n     aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"labelCp\"></h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to change your password?\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn styledButton\" data-dismiss=\"modal\" mdbBtn color=\"danger\" mdbWavesEffect>Close\r\n        </button>\r\n        <button type=\"submit\" (click)=\"changePassword()\" class=\"btn styledButton\" data-dismiss=\"modal\" mdbBtn\r\n                color=\"success\" mdbWavesEffect>Change password\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.ts ***!
  \*******************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_must_mutch_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/must-mutch.validator */ "./src/app/helpers/must-mutch.validator.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(router, route, formBuilder, http, userService, shareDataService, snackBar) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.http = http;
        this.userService = userService;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.submittedEditing = false;
        this.submittedPasswordChanging = false;
        this.error = null;
        this.isDisabled = false;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCurrentUser().subscribe(function (data) {
            _this.currentUser = data;
            _this.newUser = data;
        }, function (err) {
            alert(err);
        });
        this.editUserForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(64)]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(128)]],
        });
        this.changePasswordForm = this.formBuilder.group({
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(128)]],
            newPasswordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        }, {
            validator: Object(_helpers_must_mutch_validator__WEBPACK_IMPORTED_MODULE_4__["MustMatch"])('newPassword', 'newPasswordConfirm')
        });
    };
    Object.defineProperty(EditUserComponent.prototype, "userDataForm", {
        get: function () { return this.editUserForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditUserComponent.prototype, "passwordForm", {
        get: function () { return this.changePasswordForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditUserComponent.prototype.updateUser = function () {
        var _this = this;
        this.isDisabled = true;
        this.submittedEditing = true;
        if (!this.editUserForm.controls.username.value.trim()) {
            this.editUserForm.controls.username.setValue(this.currentUser.username);
        }
        if (!this.editUserForm.controls.firstName.value.trim()) {
            this.editUserForm.controls.firstName.setValue(this.currentUser.details.firstName);
        }
        if (!this.editUserForm.controls.lastName.value.trim()) {
            this.editUserForm.controls.lastName.setValue(this.currentUser.details.lastName);
        }
        if (!this.editUserForm.controls.email.value.trim()) {
            this.editUserForm.controls.email.setValue(this.currentUser.email);
        }
        this.newUser.username = this.editUserForm.controls.username.value.trim();
        this.newUser.details.firstName = this.editUserForm.controls.firstName.value.trim();
        this.newUser.details.lastName = this.editUserForm.controls.lastName.value.trim();
        this.newUser.email = this.editUserForm.controls.email.value.trim();
        if (this.editUserForm.invalid) {
            this.isDisabled = false;
            return;
        }
        return this.userService.updateSummary(this.newUser).subscribe(function () {
            _this.router.navigate(['account']);
            _this.openSnackBar("Account edited successfully");
            _this.isDisabled = false;
        });
    };
    EditUserComponent.prototype.changePassword = function () {
        var _this = this;
        this.isDisabled = true;
        this.submittedPasswordChanging = true;
        this.newUser.password = this.changePasswordForm.controls.newPassword.value;
        this.oldPassword = this.changePasswordForm.controls.oldPassword.value;
        if (this.changePasswordForm.invalid) {
            return;
        }
        return this.userService.changePassword(this.newUser, this.oldPassword).subscribe(function () {
            _this.router.navigate(['account']);
            _this.openSnackBar("Password changed successfully");
            _this.isDisabled = false;
        }, function (err) {
            _this.isDisabled = false;
            _this.error = err;
            setTimeout(function () {
                _this.error = null;
            }, 5000);
        });
    };
    EditUserComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"], {
            duration: 1000
        });
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/user/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/user/edit-user/edit-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_8__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/user/table/table.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/table/table.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngIf=\"!creationMode\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <button (click)=\"switchMode()\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" color=\"info\" mdbBtn\r\n              mdbWavesEffect type=\"button\">\r\n        Add new special user\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n        <div *ngIf=\"success\" class=\"alert alert-success\">{{success}}</div>\r\n        <data-table [editable]=\"editable\"\r\n                    [records]=\"users\"\r\n                    [url]=\"urlToForward\"\r\n                    [settings]=\"usersTableSettings\"\r\n                    [tableName]=\"tableName\">\r\n        </data-table >\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"creationMode\">\r\n\r\n    <div class=\"row\">\r\n      <button (click)=\"switchMode()\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" color=\"info\" mdbBtn\r\n              mdbWavesEffect type=\"button\">\r\n        Back\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <app-user-users></app-user-users>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/table/table.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/table/table.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/table/table.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/table/table.component.ts ***!
  \***********************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TableComponent = /** @class */ (function () {
    function TableComponent(usersService, route, router) {
        this.usersService = usersService;
        this.route = route;
        this.router = router;
        this.tableName = 'Users';
        this.editable = true;
        this.urlToForward = '/user/';
        this.creationMode = false;
        this.usersTableSettings = [
            {
                propertyName: 'active',
            },
            {
                propertyName: 'email',
            },
            {
                propertyName: 'authorityId',
            },
            {
                propertyName: 'username',
            },
        ];
        this.error = '';
        this.success = '';
    }
    TableComponent.prototype.ngOnInit = function () {
        this.users = this.route.snapshot.data.userData;
    };
    TableComponent.prototype.info = function (event) {
        var _this = this;
        this.router.navigate([]).then(function (result) {
            window.open(_this.urlToForward + event);
        });
    };
    TableComponent.prototype.delete = function (record) {
        var _this = this;
        this.usersService.deleteUserById(record.id).subscribe(function (data) {
            _this.users.splice(_this.users.indexOf(record), 1);
            _this.success = 'Deleted successful';
            window.setTimeout(function () {
                _this.success = '';
            }, 5000);
        }, function (err) {
            _this.error = 'Deleting Failed';
            window.setTimeout(function () {
                _this.error = '';
            }, 5000);
        });
    };
    TableComponent.prototype.switchMode = function () {
        this.creationMode = !this.creationMode;
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/user/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/user/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/user/table/users.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/user/table/users.resolver.ts ***!
  \**********************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/users.service */ "./src/app/shared/users.service.ts");



var UserResolver = /** @class */ (function () {
    function UserResolver(userService) {
        this.userService = userService;
    }
    UserResolver.prototype.resolve = function () {
        return this.userService.getAllUsers();
    };
    UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/user/user-bundles/bundle-form/bundle-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user/user-bundles/bundle-form/bundle-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-4\">\r\n  <div class=\"row pt-0 mt-0\">\r\n    <div class=\"offset-md-1\"></div>\r\n    <div class=\"col-md-10\">\r\n\r\n      <h2 *ngIf=\"!updateMode\" align=\"center\" class=\"mb-0\">Add bundle</h2>\r\n      <h2 *ngIf=\"updateMode\" align=\"center\" class=\"mb-0\">Edit bundle</h2>\r\n\r\n      <div *ngIf=\"error\" align=\"center\" class=\"alert alert-danger\">{{error}}</div>\r\n\r\n      <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"bundleForm\" class=\"card-block card-content form-layout\">\r\n\r\n        <div>\r\n          <label>Name of Bundle </label>\r\n          <input [ngClass]=\"{ 'is-invalid': submitted && form.name.errors }\"\r\n                 class=\"form-control\"\r\n                 formControlName=\"name\"\r\n                 name=\"name\"\r\n                 type=\"text\">\r\n\r\n          <div *ngIf=\"submitted && form.name.errors\" class=\"invalid-input\">\r\n            <div *ngIf=\"form.name.errors.required\">Name of bundle is required</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <label> Description </label>\r\n          <textarea [ngClass]=\"{ 'is-invalid': submitted && form.description.errors }\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"description\"\r\n                    name=\"description\"\r\n                    placeholder=\"Put your bundle description here\"\r\n                    rows=\"5\"></textarea>\r\n\r\n          <div *ngIf=\"submitted && form.description.errors\" class=\"invalid-input\">\r\n            <div *ngIf=\"form.description.errors.required\">Description is required</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <label> Number of People </label>\r\n          <input (change)=\"numberOfPeopleChanged()\"\r\n                 [ngClass]=\"{ 'is-invalid': submitted && form.numberOfPeople.errors }\"\r\n                 class=\"form-control\"\r\n                 formControlName=\"numberOfPeople\"\r\n                 max=\"10\"\r\n                 min=\"1\"\r\n                 name=\"numberOfPeople\"\r\n                 type=\"number\">\r\n\r\n          <div *ngIf=\"submitted && form.numberOfPeople.errors\" class=\"invalid-input\">\r\n            <div *ngIf=\"form.numberOfPeople.errors.required\">Number of people is required</div>\r\n            <div *ngIf=\"form.numberOfPeople.errors.min\">Must be at least 1</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <label>Trips</label>\r\n          <angular2-multiselect (onSelect)=\"onTripSelect($event)\"\r\n                                [(ngModel)]=\"selectedItems\"\r\n                                [data]=\"itemList\"\r\n                                [settings]=\"settings\"\r\n                                class=\"form-control\"\r\n                                formControlName=\"bundleTrips\"\r\n                                name=\"bundleTrips\">\r\n\r\n          </angular2-multiselect>\r\n          <div *ngIf=\"submitted\" class=\"invalid-input\">\r\n            <div *ngIf=\"selectedItems.length<=1\">More than 1 trip is required</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <label>Price</label>\r\n          <input [ngClass]=\"{ 'is-invalid': submitted && form.price.errors }\"\r\n                 class=\"form-control\"\r\n                 formControlName=\"price\"\r\n                 min=\"1\"\r\n                 name=\"price\"\r\n                 type=\"number\"/>\r\n\r\n          <div *ngIf=\"submitted && form.price.errors\" class=\"invalid-input\">\r\n            <div *ngIf=\"form.price.errors.required\">Price is required</div>\r\n            <div *ngIf=\"form.price.errors.min\">Must be more than 0</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <label for=\"inputGroupFile\">Bundle picture</label>\r\n\r\n          <div class=\"input-group\">\r\n            <div class=\"custom-file\" id=\"inputFileDiv\">\r\n              <input aria-describedby=\"inputGroupFileAddon01\" class=\"custom-file-input\" id=\"inputGroupFile\"\r\n                     type=\"file\" (change)=\"onFileChanged($event)\" >\r\n              <label class=\"custom-file-label\" for=\"inputGroupFile\" id=\"labelFile\">{{currentPictureInputPlaceholder}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <button class=\"btn styledButton\" color=\"primary\" mdbBtn mdbWavesEffect type=\"submit\">\r\n          Create\r\n        </button>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"offset-3\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-bundles/bundle-form/bundle-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/user/user-bundles/bundle-form/bundle-form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1idW5kbGVzL2J1bmRsZS1mb3JtL2J1bmRsZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-bundles/bundle-form/bundle-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user/user-bundles/bundle-form/bundle-form.component.ts ***!
  \************************************************************************/
/*! exports provided: BundleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundleFormComponent", function() { return BundleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_bundle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/bundle.service */ "./src/app/shared/bundle.service.ts");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/trip.service */ "./src/app/shared/trip.service.ts");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_file_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @models/file-info */ "./src/app/model/file-info.ts");
/* harmony import */ var _services_google_drive_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/google-drive.service */ "./src/app/shared/google-drive.service.ts");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");













var BundleFormComponent = /** @class */ (function () {
    function BundleFormComponent(formBuilder, bundleService, shareDataService, snackBar, router, tripService, fileUploader) {
        this.formBuilder = formBuilder;
        this.bundleService = bundleService;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.router = router;
        this.tripService = tripService;
        this.fileUploader = fileUploader;
        this.itemList = [];
        this.selectedItems = [];
        this.itemListOfTrips = [];
        this.selectedFullTripItems = [];
        this.settings = {};
        this.submitted = false;
        this.error = '';
        this.currentPicture = null;
        this.bundleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            numberOfPeople: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            bundleTrips: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.1)]),
            imgSrc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    Object.defineProperty(BundleFormComponent.prototype, "form", {
        get: function () {
            return this.bundleForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    BundleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentPictureInputPlaceholder = 'Choose file';
        if (this.updateMode) {
            this.bundleForm = this.initPredefinedBundle();
        }
        else {
            this.bundle = {
                name: ' ',
                description: ' ',
                numberOfPeople: 0,
                typeId: 0,
                statusId: 0,
                providerId: 0,
                price: 0,
                bundleTrips: this.itemList,
                location: this.itemList[0],
                destination: this.itemList[this.itemList.length - 1],
                imgSrc: ''
            };
        }
        this.tripService.getAllTripsWithDetails().subscribe(function (trips) {
            trips.forEach(function (trip) {
                _this.itemList.push({ id: trip.id, itemName: trip.name });
                _this.itemListOfTrips.push(trip);
            });
        });
        this.settings = {
            singleSelection: false,
            text: "Select Trips",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            badgeShowLimit: 3
        };
    };
    BundleFormComponent.prototype.initPredefinedBundle = function () {
        return this.formBuilder.group({
            name: [this.bundle.name],
            description: [this.bundle.description],
            numberOfPeople: [this.bundle.numberOfPeople],
            typeId: [this.bundle.typeId],
            statusId: [this.bundle.statusId],
            providerId: [this.bundle.providerId],
            price: [this.bundle.price],
            bundleTrips: [this.bundle.bundleTrips],
            location: [this.bundle.bundleTrips[0]],
            destination: [this.bundle.bundleTrips[this.bundle.bundleTrips.length - 1]],
            imgSrc: [this.bundle.imgSrc]
        });
    };
    /*initBundle() {
      let bundleOld = this.initPredefinedBundle();
      let tripsArray = this.bundle.bundleTrips;
    }*/
    BundleFormComponent.prototype.addBundleValues = function () {
        this.bundle.name = this.bundleForm.value.name;
        this.bundle.description = this.bundleForm.value.description;
        this.bundle.numberOfPeople = this.bundleForm.value.numberOfPeople;
        this.bundle.typeId = 3;
        this.bundle.statusId = 4;
        this.bundle.providerId = 41;
        this.bundle.price = this.bundleForm.value.price;
        for (var i = 0; i < this.selectedItems.length; ++i) {
            for (var j = 0; j < this.itemListOfTrips.length; ++j) {
                if (this.selectedItems[i].id === this.itemListOfTrips[j].id)
                    this.selectedFullTripItems.push(this.itemListOfTrips[j]);
            }
        }
        this.bundle.bundleTrips = this.selectedFullTripItems;
        this.bundle.imgSrc = this.form.imgSrc.value;
    };
    BundleFormComponent.prototype.numberOfPeopleChanged = function () {
        this.itemList = [];
        this.selectedItems = [];
        for (var i = 0; i < this.itemListOfTrips.length; ++i) {
            if (this.itemListOfTrips[i].numberOfPeople === this.bundleForm.value.numberOfPeople)
                this.itemList.push({ id: this.itemListOfTrips[i].id, itemName: this.itemListOfTrips[i].name });
        }
    };
    BundleFormComponent.prototype.onTripSelect = function (event) {
        if (this.bundleForm.value.numberOfPeople != '')
            return;
        else {
            this.itemList = [];
            for (var i = 0; i < this.itemListOfTrips.length; ++i) {
                if (this.itemListOfTrips[i].id == event.id)
                    this.bundleForm.patchValue({ numberOfPeople: this.itemListOfTrips[i].numberOfPeople });
            }
            for (var i = 0; i < this.itemListOfTrips.length; ++i) {
                if (this.itemListOfTrips[i].numberOfPeople === this.bundleForm.value.numberOfPeople)
                    this.itemList.push({ id: this.itemListOfTrips[i].id, itemName: this.itemListOfTrips[i].name });
            }
        }
    };
    BundleFormComponent.prototype.createBundle = function (bundle) {
        var _this = this;
        this.bundleService.createBundle(bundle).subscribe(function (bundle) {
            _this.openSnackBar("Bundle created successfully");
            _this.router.navigate(['bundle/' + bundle.id]);
        });
    };
    BundleFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.bundleForm.invalid || this.selectedItems.length <= 1) {
            return;
        }
        if (this.currentPicture != null) {
            this.fileUploader.importFile(this.currentPicture, function (err) {
                _this.error = err;
                window.setTimeout(function () {
                    _this.error = '';
                }, 5000);
                return;
            }, function (res) { return _this.onImportComplete(res); }, function (res) { });
            this.currentPicture = null;
            return;
        }
        this.addBundleValues();
        this.createBundle(this.bundle);
    };
    BundleFormComponent.prototype.onFileChanged = function (event) {
        var file = event.target.files[0];
        var fileInfo = new _models_file_info__WEBPACK_IMPORTED_MODULE_9__["FileInfo"]();
        this.currentPictureInputPlaceholder = file.name;
        var newName = ts_md5__WEBPACK_IMPORTED_MODULE_11__["Md5"].hashStr(file.name) + Date.now().toString();
        fileInfo.Name = newName;
        fileInfo.Blob = file;
        this.currentPicture = fileInfo;
    };
    BundleFormComponent.prototype.onImportComplete = function (res) {
        this.form.imgSrc.patchValue(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["GOOGLE_DRIVE_PICTURE_BASE_URL"] + JSON.parse(res).id);
        this.onSubmit();
    };
    BundleFormComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], {
            duration: 1000
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BundleFormComponent.prototype, "bundle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BundleFormComponent.prototype, "updateMode", void 0);
    BundleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bundle-form',
            template: __webpack_require__(/*! ./bundle-form.component.html */ "./src/app/user/user-bundles/bundle-form/bundle-form.component.html"),
            styles: [__webpack_require__(/*! ./bundle-form.component.scss */ "./src/app/user/user-bundles/bundle-form/bundle-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_bundle_service__WEBPACK_IMPORTED_MODULE_3__["BundleService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _services_trip_service__WEBPACK_IMPORTED_MODULE_4__["TripService"],
            _services_google_drive_service__WEBPACK_IMPORTED_MODULE_10__["GoogleDriveService"]])
    ], BundleFormComponent);
    return BundleFormComponent;
}());



/***/ }),

/***/ "./src/app/user/user-bundles/bundles.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-bundles/bundles.resolver.ts ***!
  \*******************************************************/
/*! exports provided: BundlesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BundlesResolver", function() { return BundlesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bundle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/bundle.service */ "./src/app/shared/bundle.service.ts");



var BundlesResolver = /** @class */ (function () {
    function BundlesResolver(bundleService) {
        this.bundleService = bundleService;
    }
    BundlesResolver.prototype.resolve = function () {
        return this.bundleService.getAllBundles();
    };
    BundlesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bundle_service__WEBPACK_IMPORTED_MODULE_2__["BundleService"]])
    ], BundlesResolver);
    return BundlesResolver;
}());



/***/ }),

/***/ "./src/app/user/user-bundles/user-bundles.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-bundles/user-bundles.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div *ngIf=\"showTable\">\r\n\r\n    <div *ngIf=\"isAdmin\" class=\"row\">\r\n\r\n      <button (click)=\"switchMode()\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" color=\"info\" mdbBtn\r\n              mdbWavesEffect type=\"button\">\r\n        Add new bundle\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 pb-3\">\r\n        <data-table [editable]=\"editable\"\r\n                    [url]=\"url\"\r\n                    [deleting]=\"deleting\"\r\n                    [records]=\"bundles\"\r\n                    [settings]=\"bundlesTableSettings\"\r\n                    [tableName]=\"tableName\"\r\n                    (deleteEvent)=\"delete($event)\">\r\n        </data-table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"!showTable\">\r\n\r\n    <div class=\"row\">\r\n      <button (click)=\"switchMode()\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" color=\"info\" mdbBtn\r\n              mdbWavesEffect type=\"button\">\r\n        Back\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <app-bundle-form></app-bundle-form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-bundles/user-bundles.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/user-bundles/user-bundles.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1idW5kbGVzL3VzZXItYnVuZGxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user-bundles/user-bundles.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-bundles/user-bundles.component.ts ***!
  \*************************************************************/
/*! exports provided: UserBundlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBundlesComponent", function() { return UserBundlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_bundle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/bundle.service */ "./src/app/shared/bundle.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var UserBundlesComponent = /** @class */ (function () {
    function UserBundlesComponent(bundleService, route, router, shareDataService, snackBar, authService) {
        this.bundleService = bundleService;
        this.route = route;
        this.router = router;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.tableName = 'Trips';
        this.editable = true;
        this.deleting = true;
        this.url = '/bundle/';
        this.showTable = true;
        this.bundlesTableSettings = [
            {
                propertyName: 'name'
            },
            {
                propertyName: 'location',
                type: 'location'
            },
            {
                propertyName: 'destination',
                type: 'location'
            },
            {
                propertyName: 'numberOfPeople'
            },
            {
                propertyName: 'price',
                type: 'currency'
            },
        ];
    }
    Object.defineProperty(UserBundlesComponent.prototype, "isAdmin", {
        get: function () {
            return this.authService.getDecodedToken().authority == "ROLE_ADMIN";
        },
        enumerable: true,
        configurable: true
    });
    UserBundlesComponent.prototype.ngOnInit = function () {
        this.bundles = this.route.snapshot.data.bundleData;
    };
    UserBundlesComponent.prototype.info = function (event) {
        this.router.navigate(['bundle/' + event]);
    };
    UserBundlesComponent.prototype.delete = function (record) {
        var _this = this;
        this.bundleService.deleteBundleById(record.id).subscribe(function (data) {
            // this.shareDataService.tabIndex = 2;
            // this.router.navigate(['blank']).then(() => this.router.navigate(['account']));
            _this.openSnackBar("Bundle deleted successfully");
        });
    };
    UserBundlesComponent.prototype.switchMode = function () {
        this.showTable = !this.showTable;
    };
    UserBundlesComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__["SnackbarComponent"], {
            duration: 1000
        });
    };
    UserBundlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-bundles',
            template: __webpack_require__(/*! ./user-bundles.component.html */ "./src/app/user/user-bundles/user-bundles.component.html"),
            styles: [__webpack_require__(/*! ./user-bundles.component.scss */ "./src/app/user/user-bundles/user-bundles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bundle_service__WEBPACK_IMPORTED_MODULE_3__["BundleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_6__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], UserBundlesComponent);
    return UserBundlesComponent;
}());



/***/ }),

/***/ "./src/app/user/user-discounts/user-discounts.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-discounts/user-discounts.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-discounts works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/user-discounts/user-discounts.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-discounts/user-discounts.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kaXNjb3VudHMvdXNlci1kaXNjb3VudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/user-discounts/user-discounts.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-discounts/user-discounts.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDiscountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDiscountsComponent", function() { return UserDiscountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDiscountsComponent = /** @class */ (function () {
    function UserDiscountsComponent() {
    }
    UserDiscountsComponent.prototype.ngOnInit = function () {
    };
    UserDiscountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-discounts',
            template: __webpack_require__(/*! ./user-discounts.component.html */ "./src/app/user/user-discounts/user-discounts.component.html"),
            styles: [__webpack_require__(/*! ./user-discounts.component.scss */ "./src/app/user/user-discounts/user-discounts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDiscountsComponent);
    return UserDiscountsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-orders/user-orders.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/user-orders/user-orders.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-3\" *ngIf=\"orders.length != 0\">\r\n    <div *ngFor=\"let order of orders\" class=\"col-md-4 descriptionText\">\r\n      <div class=\"py-3 mx-2 mb-1 card roundedCard\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 px-auto text-center\">\r\n            <b>{{order.name}}</b>\r\n          </div>\r\n\r\n          <div class=\"offset-md-1\"></div>\r\n          <div class=\"col-md-5 myText text-left\">\r\n            <i class=\"fas fa-dollar-sign\"></i> {{order.price}}\r\n          </div>\r\n\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-md-12 pl-4\">\r\n              Date of order: {{order.orderDate | date:'yyyy-MM-dd'}}\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--<div class=\"container\">\r\n  <div class=\"row mt-3\" *ngIf=\"ordersById.length != 0\">\r\n    <div *ngFor=\"let orders of ordersById\" class=\"col-md-4 descriptionText\">\r\n      <div class=\"py-3 mx-2 mb-1 card roundedCard\">\r\n        <div *ngIf=\"orders.length != 0\">\r\n          <div *ngFor=\"let order of orders\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 px-auto text-center\">\r\n                <b>{{order.name}}</b>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"offset-md-1\"></div>\r\n            <div class=\"col-md-5 myText text-left\">\r\n              <i class=\"fas fa-dollar-sign\"></i> {{order.price}}\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"ordersById.length != 0\">\r\n          <div *ngFor=\"let orderByOne of ordersPrice\">\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-md-12 pl-4\">\r\n                Date of order: {{orderByOne.orderDate | date:'yyyy-MM-dd'}}\r\n              </div>\r\n            </div>\r\n            <div class=\"offset-md-1\"></div>\r\n            <div class=\"col-md-12 pl-4\">\r\n              Sum of order: {{orderByOne.price}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/user/user-orders/user-orders.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/user-orders/user-orders.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1vcmRlcnMvdXNlci1vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/user-orders/user-orders.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/user-orders/user-orders.component.ts ***!
  \***********************************************************/
/*! exports provided: UserOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrdersComponent", function() { return UserOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/order.service */ "./src/app/shared/order.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");




var UserOrdersComponent = /** @class */ (function () {
    function UserOrdersComponent(orderService, authService) {
        this.orderService = orderService;
        this.authService = authService;
        this.orders = [];
        this.ordersById = [];
        this.ordersPrice = [];
    }
    UserOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrdersOfUser(this.authService.getDecodedToken().sub).subscribe(function (orders) {
            _this.orders = orders;
            //   this.createOrders();
            //   console.log(this.orders);
        });
    };
    UserOrdersComponent.prototype.createOrders = function () {
        if (this.orders.length > 0) {
            for (var i = 0; i < this.orders.length; ++i) {
                var sum = 0;
                var countI = 0;
                for (var j = 0; j < this.orders.length; ++j) {
                    if (this.orders[i].id === this.orders[j].id) {
                        sum += this.orders[j].price;
                        countI++;
                    }
                }
                this.ordersPrice[i] = ({ orderDate: this.orders[i].orderDate, price: sum });
                i += countI;
            }
            console.log(this.ordersPrice);
            for (var i = 0; i < this.orders.length; ++i) {
                this.ordersById[i] = [];
                var countI = 0;
                for (var j = 0; j < this.orders.length; ++j) {
                    if (this.orders[i].id === this.orders[j].id) {
                        this.ordersById[i][j] = ({ name: this.orders[j].name, price: this.orders[j].price });
                        countI++;
                    }
                }
                i += countI;
            }
        }
        console.log(this.ordersById);
    };
    UserOrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-orders',
            template: __webpack_require__(/*! ./user-orders.component.html */ "./src/app/user/user-orders/user-orders.component.html"),
            styles: [__webpack_require__(/*! ./user-orders.component.scss */ "./src/app/user/user-orders/user-orders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserOrdersComponent);
    return UserOrdersComponent;
}());



/***/ }),

/***/ "./src/app/user/user-report/report.component.html":
/*!********************************************************!*\
  !*** ./src/app/user/user-report/report.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <form [formGroup]=\"reportForm\">\r\n    <div class=\"form-row\">\r\n\r\n      <div class=\"form-group col-md-2\">\r\n        <button (click)=\"generateTable()\" class=\"btn float-left btn-sm mt-4 styledButton \" color=\"primary\" mdbBtn\r\n                mdbWavesEffect\r\n                type=\"button\">\r\n          Generate report <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md\">\r\n        <label for=\"inputStartDate\">Start date</label>\r\n        <input [ngClass]=\"{ 'is-invalid': submitted && reportForm.controls.startDate.errors}\"\r\n               class=\"form-control\"\r\n               formControlName=\"startDate\"\r\n               id=\"inputStartDate\"\r\n               max=\"3000-01-01\"\r\n               min=\"2000-01-01\"\r\n               type=\"date\"/>\r\n\r\n        <div *ngIf=\"submitted && reportForm.controls.startDate.errors\" class=\"invalid-input\">\r\n          <div *ngIf=\"reportForm.controls.startDate.errors.required\">Field is required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md\">\r\n\r\n        <label for=\"inputEndDate\">End date</label>\r\n        <input [ngClass]=\"{ 'is-invalid': submitted && reportForm.controls.endDate.errors}\"\r\n               class=\"form-control\"\r\n               formControlName=\"endDate\"\r\n               id=\"inputEndDate\"\r\n               max=\"3000-01-01\"\r\n               min=\"2000-01-01\"\r\n               type=\"date\"/>\r\n\r\n        <div *ngIf=\"submitted && reportForm.controls.endDate.errors\" class=\"invalid-input\">\r\n          <div *ngIf=\"reportForm.controls.endDate.errors.required\">Field is required</div>\r\n          <div *ngIf=\"reportForm.controls.endDate.errors.dateOrder\">Wrong date order</div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group col-md\">\r\n\r\n        <label for=\"discountEditType\">Service type</label>\r\n        <select class=\"form-control\"\r\n                formControlName=\"serviceType\"\r\n                id=\"discountEditType\"\r\n                [ngClass]=\"{'is-invalid': submitted && reportForm.controls.serviceType.errors}\">\r\n          <option *ngFor=\"let serv of services\" [value]=\"serv.value\">{{serv.viewValue}}</option>\r\n        </select>\r\n\r\n        <div *ngIf=\"submitted && reportForm.controls.serviceType.errors\" class=\"invalid-input\">\r\n          <div *ngIf=\"reportForm.controls.serviceType.errors.required\">Field is required</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"container table-container\">\r\n      <div class=\"mat-elevation-z8 card card-layout table-layout\">\r\n        <div class=\"card-header\">Statistic</div>\r\n        <div class=\"card-body\">\r\n\r\n          <mat-table [dataSource]=\"dataSource\">\r\n            <!-- Item Column -->\r\n\r\n            <ng-container matColumnDef=\"location\">\r\n              <mat-header-cell *matHeaderCellDef> Location</mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> {{element.location}}</mat-cell>\r\n\r\n            </ng-container>\r\n\r\n            <!-- Cost Column -->\r\n            <ng-container matColumnDef=\"numberTour\">\r\n              <th *matHeaderCellDef mat-header-cell mat-header-cell> Number</th>\r\n              <td *matCellDef=\"let element\" mat-cell mat-cell> {{element.numberTour}}</td>\r\n\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"price\">\r\n              <th *matHeaderCellDef mat-header-cell mat-header-cell> Price</th>\r\n              <td *matCellDef=\"let element\" mat-cell mat-cell> {{element.price}}</td>\r\n            </ng-container>\r\n\r\n            <tr *matHeaderRowDef=\"displayedColumns\" mat-header-row></tr>\r\n            <tr *matRowDef=\"let row; columns: displayedColumns;\" mat-row></tr>\r\n\r\n          </mat-table>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<div class=\"container\">-->\r\n  <!--<data-table [records]=\"dataSource\"-->\r\n  <!--[tableName]=\"tableName\"-->\r\n  <!--[settings]=\"usersTableSettings\">-->\r\n  <!--</data-table>-->\r\n  <!--</div>-->\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-lg-3\">\r\n      <button (click)=\"exportAsXLSX()\" class=\"btn float-left btn-sm styledButton\" color=\"primary\" mdbBtn mdbWavesEffect\r\n              type=\"button\">\r\n        Generate Excel\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-report/report.component.scss":
/*!********************************************************!*\
  !*** ./src/app/user/user-report/report.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cdk-column-numberTour {\n  padding-right: 10%;\n  width: 45%;\n  padding-left: 5%; }\n\n.cdk-column-price {\n  width: 45%; }\n\n.cdk-column-location {\n  width: 130%;\n  padding-right: 60px;\n  padding-left: 60px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXJlcG9ydC9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcdXNlclxcdXNlci1yZXBvcnRcXHJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNkay1jb2x1bW4tbnVtYmVyVG91ciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmNkay1jb2x1bW4tcHJpY2Uge1xyXG4gIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5jZGstY29sdW1uLWxvY2F0aW9uIHtcclxuICB3aWR0aDogMTMwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNjBweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-report/report.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user/user-report/report.component.ts ***!
  \******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/report.service */ "./src/app/shared/report.service.ts");
/* harmony import */ var _helpers_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/excel.service */ "./src/app/helpers/excel.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_right_date_order_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @helpers/right-date-order.validator */ "./src/app/helpers/right-date-order.validator.ts");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");









var ReportComponent = /** @class */ (function () {
    function ReportComponent(reportService, excelService, formBuilder, shareDataService, snackBar) {
        this.reportService = reportService;
        this.excelService = excelService;
        this.formBuilder = formBuilder;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.displayedColumns = ['location', 'numberTour', 'price'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.submitted = false;
        this.loading = false;
        this.services = [
            { value: 'trip', viewValue: 'Trip' },
            { value: 'service', viewValue: 'Service' },
            { value: 'bundle', viewValue: 'Bundle' },
            { value: 'suggestion', viewValue: 'Suggestion' }
        ];
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.reportForm = this.formBuilder.group({
            startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            serviceType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        }, { validator: [Object(_helpers_right_date_order_validator__WEBPACK_IMPORTED_MODULE_6__["RightDateOrder"])('startDate', 'endDate')] });
        // this.generateTable();
    };
    ReportComponent.prototype.generateTable = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        if (this.reportForm.invalid) {
            this.loading = false;
            return;
        }
        this.reportService.getTour([this.reportForm.controls.startDate.value, this.reportForm.controls.endDate.value], this.reportForm.controls.serviceType.value)
            .subscribe(function (res) {
            _this.excelData = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res);
            _this.submitted = false;
            _this.loading = false;
            _this.openSnackBar("Report generated");
        }, function (err) {
            _this.loading = false;
        });
    };
    ReportComponent.prototype.exportAsXLSX = function () {
        this.excelService.exportAsExcelFile(this.excelData, 'TripStatistic');
    };
    ReportComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"], {
            duration: 1000
        });
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/user/user-report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/user/user-report/report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _helpers_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_8__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/user/user-services/user-services.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-services/user-services.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-services works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/user-services/user-services.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-services/user-services.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1zZXJ2aWNlcy91c2VyLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-services/user-services.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/user-services/user-services.component.ts ***!
  \***************************************************************/
/*! exports provided: UserServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServicesComponent", function() { return UserServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserServicesComponent = /** @class */ (function () {
    function UserServicesComponent() {
    }
    UserServicesComponent.prototype.ngOnInit = function () {
    };
    UserServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-services',
            template: __webpack_require__(/*! ./user-services.component.html */ "./src/app/user/user-services/user-services.component.html"),
            styles: [__webpack_require__(/*! ./user-services.component.scss */ "./src/app/user/user-services/user-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserServicesComponent);
    return UserServicesComponent;
}());



/***/ }),

/***/ "./src/app/user/user-subscriptions/user-subscriptions.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/user/user-subscriptions/user-subscriptions.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row \">\r\n    <div class=\"offset-4\"></div>\r\n    <div class=\"col-md-4\">\r\n      <table borderless=\"true\" mdbTable>\r\n        <h5 class=\"head\">Subscriptions</h5>\r\n        <tbody>\r\n        <div *ngFor=\"let provider of providers\" class=\"row\">\r\n          <tr>\r\n            <td>\r\n              <a routerLink=\"/provider/{{provider.id}}\">{{provider.username}}</a>\r\n            </td>\r\n            <td>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteOne(provider)\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </div>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"offset-4\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-subscriptions/user-subscriptions.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user/user-subscriptions/user-subscriptions.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td {\n  width: 100px;\n  font-size: 20px;\n  padding-left: 5px; }\n\nth {\n  font-size: 24px;\n  padding-left: 5px; }\n\ntr {\n  border-top: 1px solid #95a5a6; }\n\ntable thead, th {\n  background: #ecf0f1; }\n\ntable {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border-collapse: collapse;\n  border-style: hidden; }\n\n.head {\n  font-weight: bolder;\n  font-size: 30px; }\n\nmdb-badge {\n  font-size: 30px; }\n\nh5 mdb-badge {\n  font-size: 20px;\n  alignment: left !important; }\n\nul mdb-icon {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXN1YnNjcmlwdGlvbnMvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXHVzZXJcXHVzZXItc3Vic2NyaXB0aW9uc1xcdXNlci1zdWJzY3JpcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1zdWJzY3JpcHRpb25zL3VzZXItc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG50ciB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5NWE1YTY7XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkLCB0aCB7XHJcbiAgYmFja2dyb3VuZDogI2VjZjBmMTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxubWRiLWJhZGdlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmg1IG1kYi1iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGFsaWdubWVudDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCBtZGItaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user-subscriptions/user-subscriptions.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/user-subscriptions/user-subscriptions.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserSubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSubscriptionsComponent", function() { return UserSubscriptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var _services_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/provider.service */ "./src/app/shared/provider.service.ts");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var UserSubscriptionsComponent = /** @class */ (function () {
    function UserSubscriptionsComponent(http, router, providerService, shareDataService, snackBar) {
        this.http = http;
        this.router = router;
        this.providerService = providerService;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.providers = [];
    }
    UserSubscriptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["GET_USER_SUBSCRIPTIONS"]).subscribe(function (data) {
            _this.providers = data;
        }, function (err) {
            alert(err);
        });
    };
    UserSubscriptionsComponent.prototype.deleteOne = function (provider) {
        var _this = this;
        this.providers.splice(this.providers.indexOf(provider), 1);
        this.providerService.unsubscribeToProvider(provider.id).subscribe(function (data) {
            _this.openSnackBar("Subscription cancelled successfully");
        }, function (err) {
            alert(err);
        });
    };
    UserSubscriptionsComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__["SnackbarComponent"], {
            duration: 1000
        });
    };
    UserSubscriptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-subscriptions',
            template: __webpack_require__(/*! ./user-subscriptions.component.html */ "./src/app/user/user-subscriptions/user-subscriptions.component.html"),
            styles: [__webpack_require__(/*! ./user-subscriptions.component.scss */ "./src/app/user/user-subscriptions/user-subscriptions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_7__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], UserSubscriptionsComponent);
    return UserSubscriptionsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-summary/user-summary.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/user-summary/user-summary.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row \">\r\n    <div class=\"col-md-3\">\r\n      <div align=\"center\">\r\n        <img alt=\"User Pic\" src=\"{{currentUser?.details.imageSrc}}?s=196&d=mp\"\r\n             class=\"img-responsive userpic\" id=\"profile-image1\">\r\n        <div>\r\n          <button (click)=\"editUser()\" class=\"btn btn1 styledButton\" color=\"primary\" mdbBtn mdbWavesEffect\r\n                  style=\"width: 196px\"> Edit profile\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-8\">\r\n      <table borderless=\"true\" mdbTable>\r\n        <h5 class=\"head\">Account details</h5>\r\n        <tbody>\r\n        <tr mdbTableCol>\r\n          <td>\r\n            <h5>\r\n              <mdb-icon fas icon=\"user\"></mdb-icon>\r\n              Username:\r\n            </h5>\r\n          </td>\r\n          <td>{{currentUser?.username}}</td>\r\n        </tr>\r\n        <tr mdbTableCol>\r\n          <td>\r\n            <h5>\r\n              <mdb-icon far icon=\"id-card\"></mdb-icon>\r\n              First name:\r\n            </h5>\r\n          </td>\r\n          <td>{{currentUser?.details.firstName}}</td>\r\n        </tr>\r\n        <tr mdbTableCol>\r\n          <td>\r\n            <h5>\r\n              <mdb-icon fas icon=\"id-card\"></mdb-icon>\r\n              Last name:\r\n            </h5>\r\n          </td>\r\n          <td>{{currentUser?.details.lastName}}</td>\r\n        </tr>\r\n        <tr mdbTableCol>\r\n          <td>\r\n            <h5>\r\n              <mdb-icon fas icon=\"envelope\"></mdb-icon>\r\n              E-mail:\r\n            </h5>\r\n          </td>\r\n          <td>{{currentUser?.email}}</td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-summary/user-summary.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/user-summary/user-summary.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userpic {\n  width: 196px;\n  height: 196px;\n  border: 2px solid #2E294E;\n  border-radius: 2px; }\n\n.btn1 {\n  margin-top: 10px; }\n\n.btn2 {\n  margin-top: 20px; }\n\n.actblock {\n  margin-top: 20px; }\n\ntd {\n  font-size: 20px;\n  padding-left: 5px; }\n\nth {\n  font-size: 24px;\n  padding-left: 5px; }\n\ntr {\n  border: 1px solid #95a5a6; }\n\ntable thead, th {\n  background: #ecf0f1; }\n\ntable {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border-collapse: collapse;\n  border-style: hidden; }\n\n.head {\n  font-weight: bolder;\n  font-size: 30px; }\n\nmdb-badge {\n  font-size: 30px; }\n\nh5 mdb-badge {\n  font-size: 20px;\n  alignment: left !important; }\n\nul mdb-icon {\n  margin-right: 10px; }\n\ntable {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXN1bW1hcnkvQzpcXFVzZXJzXFxVc2VyXFxOZXRjcmFja2VyXFx0cmlwZ29kXFxmcm9udGVuZFxcc3JjXFxtYWluXFx3ZWIvc3JjXFxhcHBcXHVzZXJcXHVzZXItc3VtbWFyeVxcdXNlci1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLXN1bW1hcnkvdXNlci1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJwaWN7XHJcbiAgd2lkdGg6IDE5NnB4O1xyXG4gIGhlaWdodDogMTk2cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzJFMjk0RTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5idG4xe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmJ0bjJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYWN0YmxvY2t7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG50ZHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxudGh7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbnRyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTVhNWE2O1xyXG59XHJcbnRhYmxlIHRoZWFkLCB0aHtcclxuICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xyXG59XHJcbnRhYmxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxubWRiLWJhZGdlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbmg1IG1kYi1iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGFsaWdubWVudDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCBtZGItaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user-summary/user-summary.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/user-summary/user-summary.component.ts ***!
  \*************************************************************/
/*! exports provided: UserSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSummaryComponent", function() { return UserSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/users.service */ "./src/app/shared/users.service.ts");





var UserSummaryComponent = /** @class */ (function () {
    function UserSummaryComponent(router, http, usersService) {
        this.router = router;
        this.http = http;
        this.usersService = usersService;
    }
    UserSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUserSummary().subscribe(function (data) {
            _this.currentUser = data;
        }, function (err) {
            alert(err);
        });
    };
    UserSummaryComponent.prototype.editUser = function () {
        this.router.navigate(['account/edit']);
    };
    UserSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-summary',
            template: __webpack_require__(/*! ./user-summary.component.html */ "./src/app/user/user-summary/user-summary.component.html"),
            styles: [__webpack_require__(/*! ./user-summary.component.scss */ "./src/app/user/user-summary/user-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], UserSummaryComponent);
    return UserSummaryComponent;
}());



/***/ }),

/***/ "./src/app/user/user-trips/suggestion-service/suggestion-service.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/user/user-trips/suggestion-service/suggestion-service.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\">\r\n\r\n  <div *ngIf=\"group.controls.existingService.value != null\" class=\"form-row\">\r\n    <div class=\"col-md-12 mb-3\">\r\n      <label for=\"serviceControl\">Service template</label>\r\n      <ng-select [items]=\"availableServices\"\r\n                 bindLabel=\"name\"\r\n                 formControlName=\"existingService\"\r\n                 id=\"serviceControl\">\r\n      </ng-select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-row\">\r\n\r\n    <div class=\"form-group col-md-9\">\r\n      <label>Service title</label>\r\n      <input [ngClass]=\"{ 'is-invalid': submitted && group.controls.name.errors }\"\r\n             class=\"form-control\"\r\n             formControlName=\"name\"\r\n             placeholder=\"Your service title\"\r\n             type=\"text\"/>\r\n\r\n      <div *ngIf=\"submitted && group.controls.name.errors\" class=\"invalid-input\">\r\n        <div *ngIf=\"group.controls.name.errors.required\">Field is required</div>\r\n        <div *ngIf=\"group.controls.name.errors.minlength\">Title must be at least 3 characters long</div>\r\n        <div *ngIf=\"group.controls.name.errors.maxlength\">Title must be less than 64 characters long</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-3\">\r\n      <label for=\"inputPrice\">Price</label>\r\n      <input [ngClass]=\"{ 'is-invalid': submitted && group.controls.price.errors }\"\r\n             formControlName=\"price\"\r\n             class=\"form-control\"\r\n             id=\"inputPrice\"\r\n             placeholder=\"Price of your trip\"\r\n             min=\"0\"\r\n             max=\"10000000\"\r\n             type=\"number\"/>\r\n\r\n      <div *ngIf=\"submitted && group.controls.price.errors\" class=\"invalid-input\">\r\n        <div *ngIf=\"group.controls.price.errors.required\">Field is required</div>\r\n        <div *ngIf=\"group.controls.price.errors.min\">At least 1$</div>\r\n        <div *ngIf=\"group.controls.price.errors.max\">10000000$ limit exceeded</div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--<div class=\"form-row\">-->\r\n\r\n  <!--<div class=\"form-group col-md-6\">-->\r\n  <!--<label for=\"inputNumberOfPeople\">Number of people</label>-->\r\n  <!--<input [ngClass]=\"{ 'is-invalid': submitted && group.controls.numberOfPeople.errors }\"-->\r\n  <!--formControlName=\"numberOfPeople\"-->\r\n  <!--max=\"10\"-->\r\n  <!--class=\"form-control\"-->\r\n  <!--id=\"inputNumberOfPeople\"-->\r\n  <!--placeholder=\"Amount of people this trip supports\"-->\r\n  <!--min=\"0\"-->\r\n  <!--type=\"number\"/>-->\r\n\r\n  <!--<div *ngIf=\"submitted && group.controls.numberOfPeople.errors\" class=\"invalid-input\">-->\r\n  <!--<div *ngIf=\"group.controls.numberOfPeople.errors.required\">Field is required</div>-->\r\n  <!--<div *ngIf=\"group.controls.numberOfPeople.errors.min\">At least 1 client</div>-->\r\n  <!--<div *ngIf=\"group.controls.numberOfPeople.errors.max\">Not more then 10 clients</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--</div>-->\r\n\r\n  <!--<div class=\"form-group col-md-6\">-->\r\n  <!--<label for=\"inputPrice\">Price</label>-->\r\n  <!--<input [ngClass]=\"{ 'is-invalid': submitted && group.controls.price.errors }\"-->\r\n  <!--formControlName=\"price\"-->\r\n  <!--class=\"form-control\"-->\r\n  <!--id=\"inputPrice\"-->\r\n  <!--placeholder=\"Price of your trip\"-->\r\n  <!--min=\"0\"-->\r\n  <!--type=\"number\"/>-->\r\n\r\n  <!--<div *ngIf=\"submitted && group.controls.price.errors\" class=\"invalid-input\">-->\r\n  <!--<div *ngIf=\"group.controls.price.errors.required\">Field is required</div>-->\r\n  <!--<div *ngIf=\"group.controls.price.errors.min\">At least 1 cu</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--</div>-->\r\n\r\n  <!--</div>-->\r\n\r\n  <!--<div class=\"form-row\">-->\r\n\r\n  <!--<div class=\"form-group col-md-12\">-->\r\n  <!--<label for=\"inputServiceDescription\">Description</label>-->\r\n  <!--<textarea [ngClass]=\"{ 'is-invalid': submitted && group.controls.description.errors }\"-->\r\n  <!--id=\"inputServiceDescription\"-->\r\n  <!--placeholder=\"Put your service description here\"-->\r\n  <!--class=\"form-control\"-->\r\n  <!--formControlName=\"description\"-->\r\n  <!--rows=\"2\"></textarea>-->\r\n\r\n  <!--<div *ngIf=\"submitted && group.controls.description.errors\" class=\"invalid-input\">-->\r\n  <!--<div *ngIf=\"group.controls.description.errors.maxLength\">Must be less than 2048 symbols</div>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--</div>-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-trips/suggestion-service/suggestion-service.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/user/user-trips/suggestion-service/suggestion-service.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci10cmlwcy9zdWdnZXN0aW9uLXNlcnZpY2Uvc3VnZ2VzdGlvbi1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-trips/suggestion-service/suggestion-service.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/user/user-trips/suggestion-service/suggestion-service.component.ts ***!
  \************************************************************************************/
/*! exports provided: SuggestionServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionServiceComponent", function() { return SuggestionServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SuggestionServiceComponent = /** @class */ (function () {
    function SuggestionServiceComponent() {
    }
    Object.defineProperty(SuggestionServiceComponent.prototype, "submitted", {
        get: function () {
            return this.group.controls['submitted'].value;
        },
        enumerable: true,
        configurable: true
    });
    SuggestionServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.group.controls.existingService != null) {
            this.group.controls.existingService.valueChanges.subscribe(function (data) {
                _this.group.controls.name.patchValue(data.name);
            });
            this.group.controls.existingService.valueChanges.subscribe(function (data) {
                _this.group.controls.price.patchValue(data.price);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], SuggestionServiceComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SuggestionServiceComponent.prototype, "availableServices", void 0);
    SuggestionServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suggestion-service',
            template: __webpack_require__(/*! ./suggestion-service.component.html */ "./src/app/user/user-trips/suggestion-service/suggestion-service.component.html"),
            styles: [__webpack_require__(/*! ./suggestion-service.component.scss */ "./src/app/user/user-trips/suggestion-service/suggestion-service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuggestionServiceComponent);
    return SuggestionServiceComponent;
}());



/***/ }),

/***/ "./src/app/user/user-trips/trip-form/trip-form.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user/user-trips/trip-form/trip-form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-4\">\r\n  <div class=\"row pt-0 mt-0\">\r\n    <div class=\"offset-md-1\"></div>\r\n    <div class=\"col-md-10\">\r\n      ​\r\n      <h2 *ngIf=\"!trip\" align=\"center\" class=\"mb-0\">Add trip</h2>\r\n      <h2 *ngIf=\"trip\" align=\"center\" class=\"mb-0\">Edit trip</h2>\r\n\r\n      <div *ngIf=\"error\" class=\"alert alert-danger mt-3\" align=\"center\">{{error}}</div>\r\n      ​\r\n      <form (ngSubmit)=\"openSave()\" [formGroup]=\"tripForm\" class=\"pt-0 mt-0\">\r\n        ​\r\n        <div class=\"form-row\">\r\n\r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"tripTitle\">Title</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"name\"\r\n                   id=\"tripTitle\"\r\n                   placeholder=\"Your trip title\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && tripForm.controls.name.errors }\"/>\r\n\r\n            <div *ngIf=\"submitted && tripForm.controls.name.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"tripForm.controls.name.errors.required\">Field is required</div>\r\n              <div *ngIf=\"tripForm.controls.name.errors.minlength\">Title must be at least 3 characters long</div>\r\n              <div *ngIf=\"tripForm.controls.name.errors.maxlength\">Title must be less than 64 characters long</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n\r\n          <div class=\"col-md-6 px-1\" formGroupName=\"location\">\r\n\r\n            <div class=\"form-row\" formGroupName=\"country\">\r\n\r\n              <div class=\"form-group col-md-12\">\r\n\r\n                <label for=\"inputCountry\">Dispatch location</label>\r\n                <ng-select formControlName=\"name\"\r\n                           [items]=\"countries\"\r\n                           [loading]=\"countriesLoading\"\r\n                           bindLabel=\"name\"\r\n                           bindValue=\"name\"\r\n                           placeholder=\"Dispatch location country\"\r\n                           id=\"inputCountry\"\r\n                           [ngClass]=\"{ 'invalid-select': submitted && locationCountryControls.name.errors}\"\r\n                           #myNgSelect>\r\n                </ng-select>\r\n\r\n                <div *ngIf=\"submitted && locationCountryControls.name.errors\"\r\n                     class=\"invalid-input\">\r\n                  <div *ngIf=\"locationCountryControls.name.errors.required\">Field is\r\n                    required\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <div class=\"form-group col-md-12\">\r\n\r\n                <ng-select formControlName=\"name\"\r\n                           [items]=\"locationAvailableCities\"\r\n                           [loading]=\"locationCitiesLoading\"\r\n                           bindLabel=\"name\"\r\n                           bindValue=\"name\"\r\n                           placeholder=\"Dispatch location city\"\r\n                           id=\"inputCity\"\r\n                           [ngClass]=\"{ 'invalid-select': submitted && locationControls.name.errors }\"\r\n                           #myNgSelectComponent>\r\n                </ng-select>\r\n\r\n                <div *ngIf=\"submitted && locationControls.name.errors\" class=\"invalid-input\">\r\n                  <div *ngIf=\" locationControls.name.errors.required\">Field is\r\n                    required\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6 px-1 float-right\" formGroupName=\"destination\">\r\n\r\n            <div class=\"form-row\" formGroupName=\"country\">\r\n\r\n              <div class=\"form-group col-md-12\">\r\n\r\n                <label for=\"inputCountryDest\">Destination location</label>\r\n\r\n                <ng-select formControlName=\"name\"\r\n                           [items]=\"countries\"\r\n                           [loading]=\"countriesLoading\"\r\n                           bindLabel=\"name\"\r\n                           bindValue=\"name\"\r\n                           placeholder=\"Destination location country\"\r\n                           id=\"inputCountryDest\"\r\n                           [ngClass]=\"{ 'invalid-select': submitted && destinationCountryControls.name.errors }\"\r\n                           #myNgSelect>\r\n                </ng-select>\r\n\r\n                <div *ngIf=\"submitted && destinationCountryControls.name.errors\"\r\n                     class=\"invalid-input\">\r\n                  <div *ngIf=\"destinationCountryControls.name.errors.required\">Field is\r\n                    required\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n\r\n              <div class=\"form-group col-md-12\">\r\n\r\n                <ng-select formControlName=\"name\"\r\n                           [items]=\"destinationAvailableCities\"\r\n                           [loading]=\"destinationCitiesLoading\"\r\n                           bindLabel=\"name\"\r\n                           bindValue=\"name\"\r\n                           placeholder=\"Destination location city\"\r\n                           id=\"inputCityDest\"\r\n                           [ngClass]=\"{ 'invalid-select': submitted && destinationControls.name.errors }\"\r\n                           #myNgSelectComponent>\r\n                </ng-select>\r\n\r\n                <div *ngIf=\"submitted && destinationControls.name.errors\" class=\"invalid-input\">\r\n                  <div *ngIf=\"destinationControls.name.errors.required\">Field is\r\n                    required\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n\r\n          <div class=\"col-md-6 form-group\">\r\n            <label for=\"inputGroupFile\">Your trip picture</label>\r\n\r\n            <div class=\"input-group\">\r\n              <div class=\"custom-file\" id=\"inputFileDiv\">\r\n                <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile\"\r\n                       aria-describedby=\"inputGroupFileAddon01\" (change)=\"onFileChanged($event)\">\r\n                <label id=\"labelFile\" class=\"custom-file-label cutText\"\r\n                       for=\"inputGroupFile\">{{currentPictureInputPlaceholder}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-2\">\r\n            <label for=\"inputNumberOfPeople\">Number of people</label>\r\n            <input type=\"number\"\r\n                   min=\"0\"\r\n                   max=\"10\"\r\n                   class=\"form-control\"\r\n                   id=\"inputNumberOfPeople\"\r\n                   placeholder=\"Amount of people this trip supports\"\r\n                   formControlName=\"numberOfPeople\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && tripForm.controls.numberOfPeople.errors }\"\r\n            />\r\n\r\n            <div *ngIf=\"submitted && tripForm.controls.numberOfPeople.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"tripForm.controls.numberOfPeople.errors.required\">Field is required</div>\r\n              <div *ngIf=\"tripForm.controls.numberOfPeople.errors.min\">Must be at least 1</div>\r\n              <div *ngIf=\"tripForm.controls.numberOfPeople.errors.max\">10 clients max</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group col-md-2\">\r\n            <label for=\"inputPrice\">Price</label>\r\n            <input type=\"number\"\r\n                   min=\"0\"\r\n                   max=\"10000000\"\r\n                   class=\"form-control\"\r\n                   id=\"inputPrice\"\r\n                   placeholder=\"Price of your trip\"\r\n                   formControlName=\"price\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && tripForm.controls.price.errors }\"\r\n            />\r\n\r\n            <div *ngIf=\"submitted && tripForm.controls.price.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"tripForm.controls.price.errors.required\">Field is required</div>\r\n              <div *ngIf=\"tripForm.controls.price.errors.min\">Must be at least 1$</div>\r\n              <div *ngIf=\"tripForm.controls.price.errors.max\">10000000$ limit exceeded</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-2 form-group align-items-center\">\r\n\r\n            <label for=\"returnDiv\">Type</label>\r\n            <!-- Default unchecked -->\r\n            <div class=\"custom-control custom-radio\" id=\"returnDiv\">\r\n              <input formControlName=\"oneWay\" type=\"radio\" class=\"custom-control-input\" id=\"return\" [value]=\"false\"\r\n                     checked>\r\n              <label class=\"custom-control-label\" for=\"return\">Return</label>\r\n            </div>\r\n\r\n            <!-- Default checked -->\r\n            <div class=\"custom-control custom-radio\">\r\n              <input formControlName=\"oneWay\" type=\"radio\" class=\"custom-control-input\" id=\"one-way\" [value]=\"true\">\r\n              <label class=\"custom-control-label\" for=\"one-way\">One-way</label>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n\r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"inputDescription\">Description</label>\r\n            <textarea class=\"form-control\"\r\n                      id=\"inputDescription\"\r\n                      placeholder=\"Put your trip description here\"\r\n                      formControlName=\"description\"\r\n                      rows=\"7\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && tripForm.controls.description.errors }\"></textarea>\r\n\r\n            <div *ngIf=\"submitted && tripForm.controls.description.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"tripForm.controls.description.errors.maxLength\">Must be less than 2048 symbols</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div formArrayName=\"suggestions\">\r\n          <div *ngFor=\"let suggestion of suggestionControls; let i=index\">\r\n\r\n            <div class=\"card mt-3\">\r\n\r\n              <div class=\"card-header\">\r\n                <span>Suggestion {{i + 1}}</span>\r\n                <span style=\"cursor: pointer\" class=\"fas fa-times float-right\" (click)=\"removeSuggestion(i)\"></span>\r\n              </div>\r\n\r\n              <div class=\"card-body rounded-bottom p-3\" [formGroupName]=\"i\">\r\n\r\n                <app-trip-suggestion [group]=\"suggestion\"\r\n                                     [availableServices]=\"availableServices\"\r\n                                     [tripPrice]=\"tripForm.get('price').value\"></app-trip-suggestion>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mt-2 col-md-12\" style=\"height: 50px\">\r\n          <button (click)=\"addSuggestion()\" class=\"btn btn-primary float-left btn-sm styledButton\" color=\"primary\"\r\n                  mdbBtn\r\n                  mdbWavesEffect type=\"button\">\r\n            Add new suggestion\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"offset-md-6\"></div>\r\n\r\n          <div class=\"col-md-3 my-auto\">\r\n            <button type=\"button\" (click)=\"draftSave()\" class=\"btn float-right btn-lg btn-block styledButton\" mdbBtn\r\n                    *ngIf=\"canBeDrafted\" color=\"success\" mdbWavesEffect>\r\n              Save Draft\r\n              <i *ngIf=\"draftLoading\" class=\"fa fa-spinner fa-spin\"></i>\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"col-md-3 my-auto\">\r\n            <button type=\"submit\" class=\"btn float-right btn-lg btn-block styledButton\" mdbBtn color=\"success\"\r\n                    mdbWavesEffect>\r\n              Submit\r\n              <i *ngIf=\"openLoading\" class=\"fa fa-spinner fa-spin\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"offset-3\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-trips/trip-form/trip-form.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/user/user-trips/trip-form/trip-form.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-color: #2E294E;\n  /* green */\n  border-radius: 50%; }\n\n.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(46, 41, 78, 0.25);\n  /* pink, 25% opacity */ }\n\n.cutText {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXRyaXBzL3RyaXAtZm9ybS9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcdXNlclxcdXNlci10cmlwc1xcdHJpcC1mb3JtXFx0cmlwLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUseUJBQXlCO0VBQUUsVUFBQTtFQUMzQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSwrREFBK0Q7RUFBRSxzQkFBQSxFQUF1Qjs7QUFHMUY7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLXRyaXBzL3RyaXAtZm9ybS90cmlwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXHJcbi5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFOyAvKiBncmVlbiAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYsIDAgMCAwIDAuMnJlbSByZ2JhKDQ2LCA0MSwgNzgsIDAuMjUpOyAvKiBwaW5rLCAyNSUgb3BhY2l0eSAqL1xyXG59XHJcblxyXG4uY3V0VGV4dCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-trips/trip-form/trip-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user/user-trips/trip-form/trip-form.component.ts ***!
  \******************************************************************/
/*! exports provided: TripFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripFormComponent", function() { return TripFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_trip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/trip */ "./src/app/model/trip.ts");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/trip.service */ "./src/app/shared/trip.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_CustomValidators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @helpers/CustomValidators */ "./src/app/helpers/CustomValidators.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/country.service */ "./src/app/shared/country.service.ts");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/city.service */ "./src/app/shared/city.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _models_file_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @models/file-info */ "./src/app/model/file-info.ts");
/* harmony import */ var _services_google_drive_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/google-drive.service */ "./src/app/shared/google-drive.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_13__);














var TripFormComponent = /** @class */ (function () {
    function TripFormComponent(formBuilder, tripService, countryService, cityService, router, fileUploader) {
        this.formBuilder = formBuilder;
        this.tripService = tripService;
        this.countryService = countryService;
        this.cityService = cityService;
        this.router = router;
        this.fileUploader = fileUploader;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onArchivedEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.error = '';
        this.draftLoading = false;
        this.openLoading = false;
        this.archivedEdit = false;
        this.canBeDrafted = false;
        this.TripType = 'Trip';
        this.SuggestionType = 'Suggestion';
        this.ServiceType = 'Service';
        this.DraftStatus = 'Draft';
        this.OpenedStatus = 'Open';
        this.currentStatus = this.OpenedStatus;
        this.currentPicture = null;
        this.countries = null;
        this.locationAvailableCities = null;
        this.destinationAvailableCities = null;
        this.countriesLoading = false;
        this.locationCitiesLoading = false;
        this.destinationCitiesLoading = false;
    }
    Object.defineProperty(TripFormComponent.prototype, "formControl", {
        get: function () {
            return this.tripForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TripFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canBeDrafted = !this.trip || this.trip.status == "Draft";
        this.currentPictureInputPlaceholder = 'Choose file';
        this.countriesLoading = true;
        this.countryService.getAllCountries().subscribe(function (data) {
            _this.countries = data;
            _this.countriesLoading = false;
            if (_this.trip != null) {
                _this.tripForm.controls.location.controls.country.controls.name
                    .patchValue(_this.trip.location.country.name);
                _this.tripForm.controls.destination.controls.country.controls.name
                    .patchValue(_this.trip.destination.country.name);
                _this.tripForm.controls.location.controls.name.patchValue(_this.trip.location.name);
                _this.tripForm.controls.destination.controls.name.patchValue(_this.trip.destination.name);
            }
        }, function (err) { return _this.handleError(err); });
        if (this.trip) {
            this.initTrip();
        }
        else {
            this.tripForm = this.formBuilder.group({
                id: [0],
                name: ['', [_helpers_CustomValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]],
                location: this.formBuilder.group({
                    name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    country: this.formBuilder.group({
                        name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        id: []
                    }),
                    countryId: [],
                    coordinateId: [],
                    id: []
                }),
                destination: this.formBuilder.group({
                    name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    country: this.formBuilder.group({
                        name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                        id: []
                    }),
                    countryId: [],
                    coordinateId: [],
                    id: []
                }),
                numberOfPeople: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]],
                price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000000)]],
                description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2048)]],
                imgSrc: [null],
                oneWay: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                suggestions: this.formBuilder.array([]),
                approverId: [null],
                providerId: [0],
                type: [this.TripType],
                status: []
            });
        }
        this.tripForm.controls['suggestions'].patchValue([{ submitted: this.submitted }]);
        this.tripForm.controls.location.controls.country.controls.name.valueChanges
            .subscribe(function (data) {
            _this.locationAvailableCities = null;
            _this.tripForm.controls.location.controls.name.patchValue(null);
            if (data != null) {
                _this.locationCitiesLoading = true;
                _this.cityService.getCitiesByCountryId(_this.countries.find(function (country) { return country.name === data; }).id)
                    .subscribe(function (cities) {
                    _this.locationAvailableCities = cities;
                    _this.locationCitiesLoading = false;
                }, function (err) { return _this.handleError(err); });
            }
        }, function (err) { return _this.handleError(err); });
        this.tripForm.controls.destination.controls.country.controls.name.valueChanges
            .subscribe(function (data) {
            _this.destinationAvailableCities = null;
            _this.tripForm.controls.destination.controls.name.patchValue(null);
            if (data != null) {
                _this.destinationCitiesLoading = true;
                _this.cityService.getCitiesByCountryId(_this.countries.find(function (country) { return country.name === data; }).id)
                    .subscribe(function (cities) {
                    _this.destinationAvailableCities = cities;
                    _this.destinationCitiesLoading = false;
                }, function (err) { return _this.handleError(err); });
            }
        }, function (err) { return _this.handleError(err); });
        this.tripService.getAvailableServices().subscribe(function (data) {
            _this.availableServices = data;
        }, function (err) {
            alert(_this.error);
        });
    };
    TripFormComponent.prototype.ngAfterViewInit = function () {
        this.myNgSelectComponent.virtualScroll = true;
    };
    Object.defineProperty(TripFormComponent.prototype, "locationControls", {
        get: function () {
            return this.tripForm.controls.location.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TripFormComponent.prototype, "locationCountryControls", {
        get: function () {
            return this.locationControls.country.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TripFormComponent.prototype, "destinationControls", {
        get: function () {
            return this.tripForm.controls.destination.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TripFormComponent.prototype, "destinationCountryControls", {
        get: function () {
            return this.destinationControls.country.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TripFormComponent.prototype, "suggestionControls", {
        get: function () {
            return this.tripForm.controls.suggestions.controls;
        },
        enumerable: true,
        configurable: true
    });
    TripFormComponent.prototype.initSuggestion = function () {
        return this.formBuilder.group({
            id: [0],
            name: ['', [_helpers_CustomValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2048)]],
            services: this.formBuilder.array([]),
            type: [this.SuggestionType],
            status: [this.currentStatus],
            approverId: [null],
            providerId: [0],
            location: [this.tripForm.get('location').value],
            numberOfPeople: [this.tripForm.get('numberOfPeople').value],
            price: [],
            oneWay: [this.tripForm.get('oneWay').value],
            submitted: [false]
        });
    };
    TripFormComponent.prototype.addSuggestion = function () {
        var suggestionControl = this.tripForm.controls['suggestions'];
        var suggestion = this.initSuggestion();
        suggestionControl.push(suggestion);
    };
    TripFormComponent.prototype.openSave = function () {
        this.currentStatus = this.OpenedStatus;
        this.openLoading = true;
        this.save();
    };
    TripFormComponent.prototype.draftSave = function () {
        this.currentStatus = this.DraftStatus;
        this.draftLoading = true;
        this.save();
    };
    TripFormComponent.prototype.removeSuggestion = function (index) {
        var control = this.tripForm.controls.suggestions;
        control.removeAt(index);
    };
    TripFormComponent.prototype.handleError = function (err) {
        var _this = this;
        this.error = err;
        this.openLoading = false;
        this.draftLoading = false;
        window.setTimeout(function () {
            _this.error = '';
        }, 5000);
    };
    TripFormComponent.prototype.initTrip = function () {
        var tripGroup = this.initPredefinedTrip();
        var suggestionsArray = tripGroup.controls.suggestions;
        for (var _i = 0, _a = this.trip.suggestions; _i < _a.length; _i++) {
            var suggestion = _a[_i];
            var suggestionControl = this.initPredefinedSuggestion(suggestion);
            var servicesArray = suggestionControl.controls.services;
            for (var _b = 0, _c = suggestion.services; _b < _c.length; _b++) {
                var service = _c[_b];
                servicesArray.push(this.initPredefinedService(service));
            }
            suggestionsArray.push(suggestionControl);
        }
        this.tripForm = tripGroup;
    };
    TripFormComponent.prototype.initPredefinedTrip = function () {
        return this.formBuilder.group({
            id: [this.trip.id],
            name: [this.trip.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]],
            location: this.formBuilder.group({
                name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                country: this.formBuilder.group({
                    name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    id: [0]
                }),
                countryId: [0],
                coordinateId: [0],
                id: [0]
            }),
            destination: this.formBuilder.group({
                name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                country: this.formBuilder.group({
                    name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    id: [0]
                }),
                countryId: [0],
                coordinateId: [0],
                id: [0]
            }),
            numberOfPeople: [this.trip.numberOfPeople, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]],
            price: [this.trip.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000000)]],
            description: [this.trip.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2048)]],
            oneWay: [this.trip.oneWay, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            suggestions: this.formBuilder.array([]),
            imgSrc: [this.trip.imgSrc],
            approverId: [this.trip.approverId],
            providerId: [this.trip.providerId],
            type: [this.trip.type],
            status: [this.trip.status]
        });
    };
    TripFormComponent.prototype.initPredefinedSuggestion = function (suggestion) {
        return this.formBuilder.group({
            id: [suggestion.id],
            name: [suggestion.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]],
            description: [suggestion.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2048)]],
            services: this.formBuilder.array([]),
            oneWay: [suggestion.oneWay],
            type: [suggestion.type],
            status: [suggestion.status],
            approverId: [suggestion.approverId],
            providerId: [suggestion.providerId],
            location: [suggestion.location],
            numberOfPeople: [suggestion.numberOfPeople],
            price: [suggestion.price],
            submitted: [false]
        });
    };
    TripFormComponent.prototype.initPredefinedService = function (service) {
        return this.formBuilder.group({
            name: [service.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            price: [service.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000000)]],
            id: [service.id],
            type: [service.type],
            approverId: [service.approverId],
            providerId: [service.providerId],
            location: [service.location],
            status: [service.status],
            numberOfPeople: [0],
            oneWay: [service.oneWay],
            description: [null],
            submitted: [this.submitted],
            existingService: [null]
        });
    };
    TripFormComponent.prototype.save = function () {
        var _this = this;
        this.submitted = true;
        this.tripForm.controls.suggestions.controls
            .forEach(function (entry) { return entry.patchValue({ submitted: _this.submitted }); });
        if (this.tripForm.invalid) {
            this.openLoading = false;
            this.draftLoading = false;
            return;
        }
        if (this.currentPicture != null) {
            this.fileUploader.importFile(this.currentPicture, function (err) {
                _this.handleError(err);
                return;
            }, function (res) { return _this.onImportComplete(res); }, function (res) { });
            this.currentPicture = null;
            return;
        }
        if (this.tripForm.controls.status.value === 'Archived') {
            this.tripForm.controls.id.patchValue(0);
            this.tripForm.controls.suggestions.controls
                .forEach(function (entry) { return entry
                .patchValue({ id: 0 }); });
            this.archivedEdit = true;
        }
        this.tripForm
            .patchValue({ status: this.currentStatus });
        this.tripForm.controls.suggestions.controls
            .forEach(function (entry) { return entry
            .patchValue({ numberOfPeople: _this.tripForm.get('numberOfPeople').value }); });
        this.tripForm.controls.suggestions.controls
            .forEach(function (entry) { return entry
            .patchValue({ location: _this.tripForm.get('location').value }); });
        this.tripForm.controls.suggestions.controls
            .forEach(function (entry) { return entry
            .patchValue({ status: _this.currentStatus }); });
        this.tripForm.controls.suggestions.controls
            .forEach(function (entry) { return entry
            .patchValue({ oneWay: _this.tripForm.get('oneWay').value }); });
        var trip = new _models_trip__WEBPACK_IMPORTED_MODULE_3__["Trip"](this.tripForm.value);
        this.tripService.createOrUpdateTrip(trip).subscribe(function (data) {
            if (_this.trip) {
                _this.tripService.getTripById(data.id).subscribe(function (actualTrip) {
                    if (_this.archivedEdit) {
                        _this.router.navigate(['trip/' + data.id])
                            .finally(function () { _this.onArchivedEdit.emit(actualTrip); });
                    }
                    else {
                        _this.onEdit.emit(actualTrip);
                    }
                }, function (err) { return _this.handleError(err); });
            }
            else
                _this.router.navigate(['trip/' + data.id]);
        }, function (err) {
            _this.handleError(err);
        });
    };
    // File upload section
    TripFormComponent.prototype.onFileChanged = function (event) {
        var file = event.target.files[0];
        var fileInfo = new _models_file_info__WEBPACK_IMPORTED_MODULE_10__["FileInfo"]();
        this.currentPictureInputPlaceholder = file.name;
        var newName = ts_md5__WEBPACK_IMPORTED_MODULE_13__["Md5"].hashStr(file.name) + Date.now().toString();
        fileInfo.Name = newName;
        fileInfo.Blob = file;
        this.currentPicture = fileInfo;
    };
    TripFormComponent.prototype.onImportComplete = function (res) {
        this.tripForm.controls.imgSrc.patchValue(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["GOOGLE_DRIVE_PICTURE_BASE_URL"] + JSON.parse(res).id);
        if (this.currentStatus === this.OpenedStatus)
            this.openSave();
        else
            this.draftSave();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myNgSelect'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"])
    ], TripFormComponent.prototype, "myNgSelectComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_trip__WEBPACK_IMPORTED_MODULE_3__["Trip"])
    ], TripFormComponent.prototype, "trip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TripFormComponent.prototype, "onEdit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TripFormComponent.prototype, "onArchivedEdit", void 0);
    TripFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip-form',
            template: __webpack_require__(/*! ./trip-form.component.html */ "./src/app/user/user-trips/trip-form/trip-form.component.html"),
            styles: [__webpack_require__(/*! ./trip-form.component.scss */ "./src/app/user/user-trips/trip-form/trip-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_trip_service__WEBPACK_IMPORTED_MODULE_4__["TripService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"],
            _services_city_service__WEBPACK_IMPORTED_MODULE_8__["CityService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_google_drive_service__WEBPACK_IMPORTED_MODULE_11__["GoogleDriveService"]])
    ], TripFormComponent);
    return TripFormComponent;
}());



/***/ }),

/***/ "./src/app/user/user-trips/trip-suggestion/trip-suggestion.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/user/user-trips/trip-suggestion/trip-suggestion.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\">\r\n\r\n  <div class=\"form-row\">\r\n\r\n    <div class=\"form-group col-md-12\">\r\n      <label for=\"titleInput\">Title</label>\r\n      <input [ngClass]=\"{ 'is-invalid': submitted && group.controls.name.errors }\"\r\n             class=\"form-control\"\r\n             formControlName=\"name\"\r\n             id=\"titleInput\"\r\n             placeholder=\"Suggestion title\"\r\n             type=\"text\"/>\r\n\r\n      <div *ngIf=\"submitted && group.controls.name.errors\" class=\"invalid-input\">\r\n        <div *ngIf=\"group.controls.name.errors.required\">Field is required</div>\r\n        <div *ngIf=\"group.controls.name.errors.minlength\">Must be at least 2 characters long</div>\r\n        <div *ngIf=\"group.controls.name.errors.maxlength\">Must be less than 64 characters long</div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-row\">\r\n\r\n    <div class=\"col-md-12\">\r\n      <label for=\"inputSuggestionDescription\">Description</label>\r\n      <textarea [ngClass]=\"{ 'is-invalid': submitted && group.controls.description.errors }\"\r\n                class=\"form-control\"\r\n                formControlName=\"description\"\r\n                id=\"inputSuggestionDescription\"\r\n                placeholder=\"Put your suggestion description here\"\r\n                rows=\"3\"></textarea>\r\n\r\n      <div *ngIf=\"submitted && group.controls.description.errors\" class=\"invalid-input\">\r\n        <div *ngIf=\"group.controls.description.errors.maxLength\">Must be less than 2048 symbols</div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngFor=\"let service of group.controls.services['controls']; let j=index\">\r\n\r\n    <div class=\"form-row\">\r\n\r\n      <div class=\"offset-1\"></div>\r\n\r\n      <div class=\"card rounded-bottom col-md-10 mt-3\">\r\n\r\n        <div class=\"card-block px-3 pt-2\">\r\n\r\n          <span (click)=\"removeService(j)\" *ngIf=\"group.controls.services.controls.length > 1\"\r\n                class=\"fas fa-times float-right\"\r\n                style=\"cursor: pointer\"></span>\r\n\r\n          <app-suggestion-service [group]=\"service\"\r\n                                  [availableServices]=\"availableServices\"\r\n                                  class=\"col-md-12\"></app-suggestion-service>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-row\">\r\n\r\n    <div class=\"offset-1 mr-2\"></div>\r\n\r\n    <button (click)=\"addService()\" class=\"btn float-left btn-sm mx-1 mt-3 col-md-auto styledButton\"\r\n            type=\"button\" mdbBtn color=\"primary\" mdbWavesEffect>\r\n      Add new service\r\n    </button>\r\n\r\n    <button (click)=\"addExistingService()\" class=\"btn float-left btn-sm mx-1 mt-3 col-md-auto styledButton\"\r\n            *ngIf=\"availableServices != []\" color=\"primary\" mdbBtn mdbWavesEffect\r\n            type=\"button\">\r\n      Add from existing service\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-row\">\r\n\r\n    <div class=\"offset-8\"></div>\r\n    <div class=\"col-md-4\">\r\n\r\n      <div class=\"form-row\">\r\n\r\n        <div class=\"form-group col-md-12\">\r\n          <label for=\"inputBasePrice\">Overall suggestion price</label>\r\n          <input class=\"form-control\"\r\n                 id=\"inputBasePrice\"\r\n                 readonly\r\n                 type=\"text\"\r\n                 [value]=\"price\">\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-trips/trip-suggestion/trip-suggestion.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/user/user-trips/trip-suggestion/trip-suggestion.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci10cmlwcy90cmlwLXN1Z2dlc3Rpb24vdHJpcC1zdWdnZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-trips/trip-suggestion/trip-suggestion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/user/user-trips/trip-suggestion/trip-suggestion.component.ts ***!
  \******************************************************************************/
/*! exports provided: TripSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripSuggestionComponent", function() { return TripSuggestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _helpers_CustomValidators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helpers/CustomValidators */ "./src/app/helpers/CustomValidators.ts");




var TripSuggestionComponent = /** @class */ (function () {
    function TripSuggestionComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    Object.defineProperty(TripSuggestionComponent.prototype, "price", {
        get: function () {
            var base = this.tripPrice + this.group.controls.services.value
                .map(function (item) { return item.price; })
                .reduce(function (a, b) {
                return a + b;
            }, 0);
            this.group.get('price').setValue(base);
            return base;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TripSuggestionComponent.prototype, "submitted", {
        get: function () {
            return this.group.controls['submitted'].value;
        },
        enumerable: true,
        configurable: true
    });
    TripSuggestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.group.controls.services.length == 0) {
            this.addService();
        }
        this.group.controls['id'].valueChanges.subscribe(function (val) {
            _this.group.controls['services'].controls
                .forEach(function (entry) { return entry.patchValue({ id: val }); });
        });
        this.group.controls['location'].valueChanges.subscribe(function (val) {
            _this.group.controls['services'].controls
                .forEach(function (entry) { return entry.patchValue({ location: val }); });
        });
        this.group.controls['status'].valueChanges.subscribe(function (val) {
            _this.group.controls['services'].controls
                .forEach(function (entry) { return entry.patchValue({ status: val }); });
        });
        this.group.controls['numberOfPeople'].valueChanges.subscribe(function (val) {
            _this.group.controls['services'].controls
                .forEach(function (entry) { return entry.patchValue({ numberOfPeople: val }); });
        });
        this.group.controls['submitted'].valueChanges.subscribe(function (val) {
            _this.group.controls['services'].controls
                .forEach(function (entry) { return entry.patchValue({ submitted: val }); });
        });
        this.group.controls['oneWay'].valueChanges.subscribe(function (val) {
            _this.group.controls['services'].controls
                .forEach(function (entry) { return entry.patchValue({ oneWay: val }); });
        });
    };
    TripSuggestionComponent.prototype.initService = function () {
        return this.formBuilder.group({
            name: ['', [_helpers_CustomValidators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000000)]],
            id: [0],
            type: ['Service'],
            approverId: [null],
            providerId: [0],
            location: [],
            status: [],
            numberOfPeople: [this.group.controls.numberOfPeople, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]],
            oneWay: [this.group.controls.oneWay.value],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2048)]],
            submitted: [this.submitted],
            existingService: [null]
        });
    };
    TripSuggestionComponent.prototype.addService = function () {
        var service = this.initService();
        this.group.controls['services'].push(service);
    };
    TripSuggestionComponent.prototype.addExistingService = function () {
        var service = this.initFromExistingService(this.availableServices[0]);
        this.group.controls['services'].push(service);
    };
    TripSuggestionComponent.prototype.removeService = function (i) {
        this.group.controls.services.removeAt(i);
    };
    TripSuggestionComponent.prototype.initFromExistingService = function (inputService) {
        return this.formBuilder.group({
            name: [inputService.name, [_helpers_CustomValidators__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            price: [inputService.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000000)]],
            id: [0],
            type: [inputService.type],
            approverId: [null],
            providerId: [0],
            location: [],
            status: [],
            numberOfPeople: [this.group.controls.numberOfPeople, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10)]],
            oneWay: [inputService.oneWay],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2048)]],
            submitted: [this.submitted],
            existingService: [inputService]
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], TripSuggestionComponent.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TripSuggestionComponent.prototype, "tripPrice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TripSuggestionComponent.prototype, "availableServices", void 0);
    TripSuggestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip-suggestion',
            template: __webpack_require__(/*! ./trip-suggestion.component.html */ "./src/app/user/user-trips/trip-suggestion/trip-suggestion.component.html"),
            styles: [__webpack_require__(/*! ./trip-suggestion.component.scss */ "./src/app/user/user-trips/trip-suggestion/trip-suggestion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TripSuggestionComponent);
    return TripSuggestionComponent;
}());



/***/ }),

/***/ "./src/app/user/user-trips/trips.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/user/user-trips/trips.resolver.ts ***!
  \***************************************************/
/*! exports provided: TripsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsResolver", function() { return TripsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/trip.service */ "./src/app/shared/trip.service.ts");



var TripsResolver = /** @class */ (function () {
    function TripsResolver(tripService) {
        this.tripService = tripService;
    }
    TripsResolver.prototype.resolve = function () {
        return this.tripService.getAllTripsForCurrentUser();
    };
    TripsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trip_service__WEBPACK_IMPORTED_MODULE_2__["TripService"]])
    ], TripsResolver);
    return TripsResolver;
}());



/***/ }),

/***/ "./src/app/user/user-trips/user-trips.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/user-trips/user-trips.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div *ngIf=\"showTable\">\r\n\r\n    <div *ngIf=\"isProvider\" class=\"row\">\r\n\r\n      <button (click)=\"switchMode()\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" color=\"info\" mdbBtn\r\n              mdbWavesEffect type=\"button\">\r\n        Add new trip\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 pb-3\">\r\n        <data-table [records]=\"trips\"\r\n                    [tableName]=\"tableName\"\r\n                    [editable]=\"editable\"\r\n                    [deleting]=\"deleting\"\r\n                    [url]=\"url\"\r\n                    [settings]=\"tripsTableSettings\">\r\n        </data-table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"!showTable\">\r\n\r\n    <div class=\"row\">\r\n      <button (click)=\"switchMode()\" class=\"btn float-left btn-sm mx-5 mb-3 styledButton\" color=\"info\" mdbBtn\r\n              mdbWavesEffect type=\"button\">\r\n        Back\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <app-trip-form></app-trip-form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user/user-trips/user-trips.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/user-trips/user-trips.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci10cmlwcy91c2VyLXRyaXBzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-trips/user-trips.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/user-trips/user-trips.component.ts ***!
  \*********************************************************/
/*! exports provided: UserTripsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTripsComponent", function() { return UserTripsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_trip_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/trip.service */ "./src/app/shared/trip.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");





var UserTripsComponent = /** @class */ (function () {
    function UserTripsComponent(usersService, route, router, authService) {
        this.usersService = usersService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.tableName = 'Trips';
        this.editable = true;
        this.deleting = false;
        this.showTable = true;
        this.url = "/trip/";
        this.tripsTableSettings = [
            {
                propertyName: 'name'
            },
            {
                propertyName: 'status'
            },
            {
                propertyName: 'locationCity'
            },
            {
                propertyName: 'destinationCity'
            },
            // {
            //   propertyName: 'location',
            //   type: 'location'
            // },
            // {
            //   propertyName: 'destination',
            //   type: 'location'
            // },
            {
                propertyName: 'numberOfPeople'
            },
            {
                propertyName: 'price',
                type: 'currency'
            }
        ];
    }
    Object.defineProperty(UserTripsComponent.prototype, "isProvider", {
        get: function () {
            return this.authService.getDecodedToken().authority == "ROLE_PROVIDER";
        },
        enumerable: true,
        configurable: true
    });
    UserTripsComponent.prototype.ngOnInit = function () {
        this.trips = this.route.snapshot.data.tripData;
        this.trips.forEach(function (trip) {
            trip.locationCity = trip.location.name;
            trip.destinationCity = trip.destination.name;
        });
    };
    UserTripsComponent.prototype.info = function (event) {
        this.router.navigate(['trip/' + event]);
    };
    UserTripsComponent.prototype.switchMode = function () {
        this.showTable = !this.showTable;
    };
    UserTripsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-trips',
            template: __webpack_require__(/*! ./user-trips.component.html */ "./src/app/user/user-trips/user-trips.component.html"),
            styles: [__webpack_require__(/*! ./user-trips.component.scss */ "./src/app/user/user-trips/user-trips.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_trip_service__WEBPACK_IMPORTED_MODULE_2__["TripService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], UserTripsComponent);
    return UserTripsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-trouble-tickets/user-trouble-tickets.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/user/user-trouble-tickets/user-trouble-tickets.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-center align-items-center\" *ngIf=\"!isApprover\" style=\"margin: 0\">\r\n    <div class=\"form-group col-md-8\">\r\n      <mat-select placeholder=\"Purchased services -- ticket amount --\" [formControl]=\"serviceControl\"\r\n                  class=\"form-control\" style=\"margin-top: 6px\"\r\n                  id=\"services\">\r\n        <mat-option *ngFor=\"let service of purchasedServices\" [value]=\"service.id\">\r\n          {{service.name}}\r\n          <mdb-badge pill=\"true\" info=\"true\">tickets: {{service.ticketAmount}}</mdb-badge>\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"col-md-3\" *ngIf=\"serviceSelected\">\r\n      <button [disabled]=\"isDisabled\" type=\"button\" mdbBtn color=\"default\" data-toggle=\"modal\" class=\"styledButton\"\r\n              data-target=\"#basicExample\"\r\n              (click)=\"frame.show()\" mdbWavesEffect>\r\n        Create Trouble ticket\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row\" style=\"margin: 0;\">\r\n    <div *ngIf=\"isApprover\" class=\"col-md-3\" style=\"margin-left: 30px\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel class=\"panel-layout\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Assigned to me\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <div class=\"tickets-tab-list scrollbar-ripe-malinka\">\r\n            <a mdbWavesEffect *ngFor=\"let troubleTicket of assignedToMe\"\r\n               (click)=\"selectedTroubleTicket = troubleTicket; loadTroubleTicketMessages(troubleTicket.id)\"\r\n               class=\"expanded-list\" [ngClass]=\"{'chosen-ticket' : troubleTicket.id == selectedTroubleTicket.id}\"\r\n            >\r\n              {{troubleTicket.headline}}\r\n            </a>\r\n          </div>\r\n\r\n\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel class=\"panel-layout\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Unassigned\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div class=\"tickets-tab-list scrollbar-ripe-malinka\">\r\n            <a class=\"expanded-list\" mdbWavesEffect\r\n               *ngFor=\"let troubleTicket of unassigned\"\r\n               [ngClass]=\"{'chosen-ticket' : troubleTicket.id == selectedTroubleTicket.id}\"\r\n               (click)=\"selectedTroubleTicket = troubleTicket; loadTroubleTicketMessages(troubleTicket.id)\">\r\n              {{troubleTicket.headline}}\r\n            </a>\r\n          </div>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel class=\"panel-layout\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Closed\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div class=\"tickets-tab-list scrollbar-ripe-malinka\">\r\n            <a class=\"expanded-list\" mdbWavesEffect\r\n               *ngFor=\"let troubleTicket of closed\"\r\n               [ngClass]=\"{'chosen-ticket' : troubleTicket.id == selectedTroubleTicket.id}\"\r\n               (click)=\"selectedTroubleTicket = troubleTicket; loadTroubleTicketMessages(troubleTicket.id)\">\r\n              {{troubleTicket.headline}}\r\n            </a>\r\n          </div>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n      <br>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-3\" *ngIf=\"serviceSelected && !isApprover\" style=\"margin-left: 30px\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel class=\"panel-layout\" [expanded]=\"true\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Tickets for selected service\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <div class=\"tickets-tab-list scrollbar-ripe-malinka\">\r\n            <a mdbWavesEffect *ngFor=\"let troubleTicket of troubleTickets\"\r\n               (click)=\"selectedTroubleTicket = troubleTicket; loadTroubleTicketMessages(troubleTicket.id)\"\r\n               class=\"expanded-list\" [ngClass]=\"{'chosen-ticket' : troubleTicket.id == selectedTroubleTicket.id}\"\r\n            >\r\n              {{troubleTicket.headline}}\r\n            </a>\r\n          </div>\r\n\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n\r\n    <div class=\"col-md-8\" style=\"margin-left: 30px;\" *ngIf=\"troubleTicketSelected\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <strong class=\"bold-font\">\r\n            Status: <span style=\"font-weight: normal\">{{selectedTroubleTicket.status}}</span></strong>\r\n          <div *ngIf=\"approverUsername\">\r\n            <strong class=\"bold-font\">\r\n              Approver: <a routerLink=\"/user/{{selectedTroubleTicket.approverId}}\"\r\n                           style=\"font-weight: normal\">{{approverUsername}}</a>\r\n            </strong>\r\n          </div>\r\n          <div *ngIf=\"!approverUsername\">\r\n            <strong class=\"bold-font\">\r\n              Approver: <span style=\"color: grey; font-weight: normal\">not assigned yet</span>\r\n            </strong>\r\n          </div>\r\n          <br>\r\n        </div>\r\n        <div class=\"col-md-8\">\r\n          <div *ngIf=\"isRated || isFeedback\">\r\n            <div class=\"card mark-layout\">\r\n              <div class=\"justify-content-center align-items-center\">\r\n                <div style=\"margin-top: 15px\">\r\n                  <p><strong>Rating:</strong>\r\n                    <ngb-rating [(rate)]=\"selectedTroubleTicket.rating\" [max]=\"5\" [readonly]=\"true\"\r\n                                style=\"outline: none;\"></ngb-rating>\r\n                  </p>\r\n                </div>\r\n                <div *ngIf=\"isFeedback\">\r\n                  <div style=\"margin-top: 15px;\">\r\n                    <p><strong>Feedback:</strong>\r\n                      {{selectedTroubleTicket.text}}\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"canAssign && isApprover\">\r\n            <button [disabled]=\"isDisabled\" mdbBtn class=\"waves-light styledButton\" mdbWavesEffect color=\"deep-purple\"\r\n                    (click)=\"assignTicket()\" style=\"float: right; margin-right: 20px\">\r\n              Assign to me\r\n            </button>\r\n          </div>\r\n\r\n          <div *ngIf=\"canSetAnswered && !isApprover\">\r\n            <button [disabled]=\"isDisabled\" mdbBtn class=\"waves-light\" color=\"default\" mdbWavesEffect\r\n                    (click)=\"markTicketAsAnswered()\"\r\n                    style=\"float: right; margin-right: 20px; background-color: #2E294E !important;\">\r\n              Mark as Answered\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div #ticketsChat class=\"card example-1 scrollbar-ripe-malinka not-container\">\r\n            <div *ngFor=\"let message of currentMessages\">\r\n              <div *ngIf=\"message.username === authService.getDecodedToken().username\">\r\n                <div class=\"row pull-right mw-85\">\r\n                  <div class=\"col-md-auto col-auto pl-4 pr-4 py-1\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12 card pt-2\">\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                            <span>{{message.message}}</span>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-12 pt-1\" style=\"padding-right: 5px; padding-bottom: 5px\">\r\n                            <small class=\"float-right\">{{message.messageTime | date: 'h:mm a'}}</small>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"message.username !== authService.getDecodedToken().username\">\r\n                <div class=\"row mw-85\">\r\n                  <div class=\"col-md-auto col-auto pl-4 py-1\">\r\n                    <div class=\"row\">\r\n\r\n                      <div class=\"col-md-12 card pt-2\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-auto col-md-auto p-1 py-2 ml-2\">\r\n                            <a routerLink=\"/user/{{message.userId}}\">\r\n                              <img alt=\"User pic\"\r\n                                   src=\"{{gravatar.getGravatarLink(message.email)}}?s=35&d=mp\"\r\n                                   class=\"img-responsive userPic\"/>\r\n                            </a>\r\n                          </div>\r\n                          <div class=\"col-auto col-md-auto\">\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <a routerLink=\"/user/{{message.userId}}\"><u>{{message.username}}</u></a>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <span>{{message.message}}</span>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12 pt-1\" style=\"padding-right: 5px; padding-bottom: 5px\">\r\n                                <small class=\"float-right\">{{message.messageTime | date: 'h:mm a'}}</small>\r\n                              </div>\r\n                            </div>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <mat-card *ngIf=\"canPostMessage && canPostMessageApprover\" style=\"margin-top: 15px; padding: 0\">\r\n        <mat-card-content>\r\n          <br>\r\n          <div class=\"row px-3\">\r\n            <div class=\"col-sm-9\">\r\n              <textarea type=\"text\" class=\"form-control z-depth-1 textarea-layout\" rows=\"2\" mdbInput\r\n                        (keypress)=\"onKeyDown($event, 'message')\"\r\n                        [formControl]=\"message\" placeholder=\"New message...\"></textarea>\r\n              <div *ngIf=\"submittedMessage && message.errors\" class=\"invalid-input\">\r\n                <div *ngIf=\"message.errors['maxlength']\">Max amount of symbols is 2000</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <button [disabled]=\"isDisabled\" mdbBtn color=\"unique\" class=\"waves-light styledButton\" mdbWavesEffect\r\n                      (click)=\"postTroubleTicketMessage()\" *ngIf=\"canPostMessage && canPostMessageApprover\"\r\n                      matTooltip=\"If ticket is closed new message will reopen it\" aria-label=\"Send and reopen button\"\r\n                      [matTooltipPosition]=\"position\">\r\n                <i class=\"far fa-paper-plane ml-1\"></i>\r\n                Send\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <br>\r\n        </mat-card-content>\r\n      </mat-card>\r\n\r\n      <br>\r\n\r\n      <mat-card *ngIf=\"!isRated && !isFeedback && !isApprover && isAnswered\">\r\n        <mat-card-content>\r\n          <div class=\"row px-3\">\r\n            <div class=\"col-12\">\r\n              <label for=\"rating\" style=\"font-size: 16px\">Rate our work: </label>\r\n              <ngb-rating class=\"pl-2\" id=\"rating\" [(rate)]=\"value\" max=\"5\"></ngb-rating>\r\n              <div *ngIf=\"submittedFeedback\" class=\"invalid-input\">\r\n                <div *ngIf=\"value < 1\">Rate us please</div>\r\n                <br>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9\">\r\n              <textarea type=\"text\" class=\"form-control z-depth-1 textarea-layout\" rows=\"3\" mdbInput\r\n                        [formControl]=\"feedbackControl\"\r\n                        (keypress)=\"onKeyDown($event, 'feedback')\"\r\n                        placeholder=\"Feel free to leave this field empty or you can add feedback to you rating ...\"></textarea>\r\n              <div *ngIf=\"submittedFeedback && feedbackControl.errors\" class=\"invalid-input\">\r\n                <div *ngIf=\"feedbackControl.errors['required']\">Field is empty</div>\r\n                <div *ngIf=\"feedbackControl.errors['maxlength']\">Max amount of symbols is 2000</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <button [disabled]=\"isDisabled\" mdbBtn color=\"unique\" class=\"waves-light styledButton\" mdbWavesEffect\r\n                      (click)=\"postTroubleTicketFeedback()\" style=\"float: right\">\r\n                Leave feedback\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n\r\n    <br>\r\n  </div>\r\n  <br>\r\n</div>\r\n\r\n\r\n<div mdbModal #frame=\"mdbModal\" class=\"modal fade left\" id=\"frameModalTop\" tabindex=\"-1\" role=\"dialog\"\r\n     aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-center\">\r\n        <h4 class=\"modal-title w-100 font-weight-bold\">Write to us</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"frame.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body mx-3\">\r\n        <div class=\"md-form mb-5\">\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"form34\">Trouble ticket headline:</label>\r\n          <input type=\"text\" id=\"form34\" class=\"form-control validate\" mdbInput [formControl]=\"modalHeadline\">\r\n          <mat-error *ngIf=\"modalHeadline.hasError('maxlength')\">Max amount of symbols is 2000</mat-error>\r\n          <mat-error *ngIf=\"modalHeadline.hasError('minlength')\">Max amount of symbols is 2000</mat-error>\r\n          <mat-error *ngIf=\"modalHeadline.hasError('required')\">Field is empty</mat-error>\r\n        </div>\r\n\r\n        <div class=\"md-form\">\r\n          <i class=\"fas fa-pencil-alt prefix grey-text\"></i>\r\n          <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Your message:</label>\r\n          <textarea type=\"text\" id=\"form8\" class=\"md-textarea form-control\" rows=\"1\" mdbInput\r\n                    [formControl]=\"modalMessage\"></textarea>\r\n          <mat-error *ngIf=\"modalMessage.hasError('maxlength')\">Max amount of symbols is 2000</mat-error>\r\n          <mat-error *ngIf=\"modalMessage.hasError('required')\">Field is empty</mat-error>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer d-flex justify-content-center\">\r\n        <button mdbBtn color=\"unique\" class=\"waves-light\" mdbWavesEffect\r\n                (click)=\"createTroubleTicket(); frame.hide()\">\r\n          Create TT\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-trouble-tickets/user-trouble-tickets.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/user/user-trouble-tickets/user-trouble-tickets.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  margin-top: 41px; }\n\n.mark-layout {\n  min-height: 60px;\n  border-radius: 8px;\n  padding-left: 10px;\n  margin-bottom: 10px; }\n\n.container {\n  padding: 0;\n  border-radius: 5px;\n  margin-top: 20px;\n  background-color: white;\n  height: auto; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #F5F5F5;\n  border-radius: 10px; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5; }\n\n.scrollbar-ripe-malinka::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #2E294E !important; }\n\n.example-1 {\n  padding: 5px 20px 5px 20px;\n  position: relative;\n  overflow-y: scroll;\n  height: 500px; }\n\n.tickets-tab-list {\n  position: relative;\n  overflow-y: scroll;\n  height: 200px; }\n\n.mat-slider-horizontal {\n  width: 300px;\n  color: #2E294E !important; }\n\n.shadow-textarea textarea.form-control::-webkit-input-placeholder {\n  font-weight: 300; }\n\n.shadow-textarea textarea.form-control::-ms-input-placeholder {\n  font-weight: 300; }\n\n.shadow-textarea textarea.form-control::placeholder {\n  font-weight: 300; }\n\n.shadow-textarea textarea.form-control {\n  padding-left: 0.8rem; }\n\nmdb-badge {\n  background-color: #2E294E !important;\n  float: right;\n  margin-top: 15px; }\n\n.textarea-layout {\n  resize: none; }\n\n.expanded-list {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  border-radius: 5px; }\n\n.expanded-list:hover {\n  background-color: #ddd; }\n\nmat-expansion-panel-header {\n  background-color: #2E294E; }\n\nmat-expansion-panel-header:hover {\n  background: #2E294E !important;\n  color: white !important; }\n\nmat-panel-title {\n  color: white; }\n\n.mat-expansion-panel-header.mat-expanded {\n  background-color: #2E294E !important; }\n\n.mat-expansion-panel-header.mat-expanded,\n.mat-expansion-panel-header.mat-expanded:hover {\n  background-color: #2E294E !important; }\n\n.chosen-ticket {\n  background-color: #E7E6F7; }\n\n.bold-font {\n  font-weight: bold; }\n\nsmall {\n  font-size: 10px;\n  color: grey; }\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important; }\n\n::ng-deep .mat-expansion-indicator::after {\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXRyb3VibGUtdGlja2V0cy9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcdXNlclxcdXNlci10cm91YmxlLXRpY2tldHNcXHVzZXItdHJvdWJsZS10aWNrZXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHZDtFQUNFLG9EQUFvRDtFQUNwRCx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLG1CQUFtQjtFQUNuQixvREFBb0Q7RUFDcEQsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRGxCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRGxCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBSXBCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG9DQUFvQyxFQUFBOztBQUd0Qzs7RUFFRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsdUJBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItdHJvdWJsZS10aWNrZXRzL3VzZXItdHJvdWJsZS10aWNrZXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcclxuICBtYXJnaW4tdG9wOiA0MXB4O1xyXG59XHJcblxyXG4ubWFyay1sYXlvdXQge1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnNjcm9sbGJhci1yaXBlLW1hbGlua2E6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnNjcm9sbGJhci1yaXBlLW1hbGlua2E6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXJpcGUtbWFsaW5rYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLTEge1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnRpY2tldHMtdGFiLWxpc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaGFkb3ctdGV4dGFyZWEgdGV4dGFyZWEuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLnNoYWRvdy10ZXh0YXJlYSB0ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMC44cmVtO1xyXG59XHJcblxyXG5tZGItYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnRleHRhcmVhLWxheW91dCB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uZXhwYW5kZWQtbGlzdCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxufVxyXG5cclxuLmV4cGFuZGVkLWxpc3Q6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFO1xyXG59XHJcblxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzJFMjk0RSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtcGFuZWwtdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMjk0RSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkLFxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaG9zZW4tdGlja2V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFNkY3O1xyXG59XHJcblxyXG4uYm9sZC1mb250IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xyXG4gIGNvbG9yOiAgd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user-trouble-tickets/user-trouble-tickets.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user/user-trouble-tickets/user-trouble-tickets.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserTroubleTicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTroubleTicketsComponent", function() { return UserTroubleTicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/service.service */ "./src/app/shared/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_trouble_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/trouble.ticket.service */ "./src/app/shared/trouble.ticket.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/stomp-client.service */ "./src/app/shared/stomp-client.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @models/role */ "./src/app/model/role.ts");
/* harmony import */ var _helpers_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @helpers/utils.service */ "./src/app/helpers/utils.service.ts");














var UserTroubleTicketsComponent = /** @class */ (function () {
    function UserTroubleTicketsComponent(serviceService, aRoute, router, troubleTicketService, authService, stompClientService, usersService, shareDataService, snackBar) {
        var _this = this;
        this.serviceService = serviceService;
        this.aRoute = aRoute;
        this.router = router;
        this.troubleTicketService = troubleTicketService;
        this.authService = authService;
        this.stompClientService = stompClientService;
        this.usersService = usersService;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.position = "after";
        this.max = 5;
        this.min = 1;
        this.value = 0;
        this.currentServiceId = 0;
        this.approverUsername = null;
        this.submittedMessage = false;
        this.submittedFeedback = false;
        this.isDisabled = false;
        this.serviceControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.modalHeadline = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(120)]);
        this.modalMessage = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2000)]);
        this.feedbackControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2000));
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2000)]);
        this.gravatar = _helpers_utils_service__WEBPACK_IMPORTED_MODULE_13__["Utils"];
        this.assignedToMe = [];
        this.unassigned = [];
        this.closed = [];
        this.selectedTroubleTicket = {
            id: 0,
            serviceId: 0,
            userId: 0,
            approverId: null,
            statusId: 0,
            headline: null,
            applyTime: null,
            status: null,
            rating: 0,
            text: null
        };
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.showTroubleTicket();
            }
        });
    }
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "isApprover", {
        get: function () {
            return this.authService.getDecodedToken().authority == _models_role__WEBPACK_IMPORTED_MODULE_12__["Role"].Approver;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "serviceSelected", {
        get: function () {
            return this.currentServiceId != 0 && this.currentServiceId != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "troubleTicketSelected", {
        get: function () {
            return this.selectedTroubleTicket.id != 0 && this.selectedTroubleTicket.id != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "canAssign", {
        get: function () {
            return (this.selectedTroubleTicket.approverId == 0 || this.selectedTroubleTicket.approverId == null) && (this.selectedTroubleTicket.statusId == 1 || this.selectedTroubleTicket.statusId == 4);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "canSetAnswered", {
        get: function () {
            return this.selectedTroubleTicket.statusId == 2 && this.selectedTroubleTicket.userId == this.authService.getDecodedToken().sub;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "canPostMessageApprover", {
        get: function () {
            if (this.isApprover) {
                return this.selectedTroubleTicket.approverId == this.authService.getDecodedToken().sub;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "canPostMessage", {
        get: function () {
            return this.selectedTroubleTicket.statusId == 1 || this.selectedTroubleTicket.statusId == 2 ||
                (this.selectedTroubleTicket.statusId == 3 && this.selectedTroubleTicket.userId == this.authService.getDecodedToken().sub);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "isAnswered", {
        get: function () {
            return this.selectedTroubleTicket.statusId == 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "isRated", {
        get: function () {
            return this.selectedTroubleTicket.statusId == 5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserTroubleTicketsComponent.prototype, "isFeedback", {
        get: function () {
            return this.selectedTroubleTicket.statusId == 6;
        },
        enumerable: true,
        configurable: true
    });
    UserTroubleTicketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stompClientService.troubleTicketCreating.subscribe(function (data) {
            if (data) {
                if (_this.selectedTroubleTicket.id == data.id) {
                    _this.selectedTroubleTicket = data;
                    if (_this.selectedTroubleTicket.statusId == 4) {
                        _this.approverUsername = null;
                    }
                }
                if (_this.isApprover) {
                    _this.initTroubleTickets(0);
                }
            }
        });
        this.stompClientService.troubleTicketsMessage.subscribe(function (data) {
            if (data) {
                if (_this.selectedTroubleTicket.id === data.troubleTicketId) {
                    _this.loadTroubleTicketMessages(data.troubleTicketId);
                }
            }
        });
        this.stompClientService.troubleTicketChanging.subscribe(function (data) {
            if (data) {
                if (_this.isApprover) {
                    _this.initTroubleTickets(0);
                }
                else {
                    if (data.serviceId == _this.currentServiceId) {
                        _this.initTroubleTickets(_this.currentServiceId);
                    }
                }
                if (_this.selectedTroubleTicket.id == data.id) {
                    _this.selectedTroubleTicket = data;
                    _this.usersService.getUserSummaryById(_this.selectedTroubleTicket.approverId).subscribe(function (data) {
                        _this.approverUsername = data.username;
                    });
                }
            }
        });
        if (!this.isApprover) {
            this.serviceService.getPurchasedServices().subscribe(function (data) {
                _this.purchasedServices = data;
            });
            this.serviceControl.valueChanges.subscribe(function (data) {
                _this.currentServiceId = data;
                _this.initTroubleTickets(_this.currentServiceId);
            });
        }
        else {
            this.initTroubleTickets(0);
        }
        this.showTroubleTicket();
    };
    UserTroubleTicketsComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    UserTroubleTicketsComponent.prototype.initTroubleTickets = function (serviceId) {
        var _this = this;
        this.troubleTicketService.getTroubleTicketByServiceId(serviceId).subscribe(function (data) {
            _this.troubleTickets = data;
            if (_this.isApprover) {
                _this.closed = [];
                _this.unassigned = [];
                _this.assignedToMe = [];
                data.forEach(function (element) {
                    if (element.approverId == 0 || element.approverId == null) {
                        _this.unassigned.push(element);
                    }
                    else if (element.approverId == _this.authService.getDecodedToken().sub) {
                        if (element.statusId == 5 || element.statusId == 6) {
                            _this.closed.push(element);
                        }
                        else {
                            _this.assignedToMe.push(element);
                        }
                    }
                });
            }
        });
    };
    UserTroubleTicketsComponent.prototype.loadTroubleTicketMessages = function (id) {
        var _this = this;
        this.troubleTicketService.getTroubleTicketMessagesById(id).subscribe(function (data) {
            _this.currentMessages = data;
        });
        if (this.selectedTroubleTicket.approverId) {
            this.usersService.getUserSummaryById(this.selectedTroubleTicket.approverId).subscribe(function (data) {
                _this.approverUsername = data.username;
            });
        }
        else {
            this.approverUsername = null;
        }
    };
    UserTroubleTicketsComponent.prototype.createTroubleTicket = function () {
        var _this = this;
        if (this.modalHeadline.errors || this.modalMessage.errors) {
            return;
        }
        this.isDisabled = true;
        this.troubleTicketService.createTroubleTicketWithFirstMessage(this.currentServiceId, this.modalHeadline.value, this.modalMessage.value)
            .subscribe(function (data) {
            _this.serviceService.getPurchasedServices().subscribe(function (data) {
                _this.purchasedServices = data;
            });
            _this.initTroubleTickets(_this.currentServiceId);
            _this.openSnackBar("Trouble ticket created");
        });
        this.isDisabled = false;
    };
    UserTroubleTicketsComponent.prototype.postTroubleTicketMessage = function () {
        var _this = this;
        this.isDisabled = true;
        this.submittedMessage = true;
        if (!this.message.value || this.message.errors || !this.message.value.trim()) {
            return;
        }
        else {
            this.newMessage = this.message.value.trim();
        }
        if (this.selectedTroubleTicket.statusId == 3) {
            this.troubleTicket = this.selectedTroubleTicket;
            this.troubleTicket.approverId = 0;
            this.troubleTicketService.changeStatus(this.troubleTicket, 4).subscribe(function (data) {
                _this.troubleTicket.statusId = 4;
                _this.troubleTicket.status = "Reopened";
                _this.selectedTroubleTicket = _this.troubleTicket;
                _this.approverUsername = null;
                _this.troubleTicketService.postMessage(_this.selectedTroubleTicket.id, _this.newMessage).subscribe(function (data) {
                    _this.initTroubleTickets(_this.currentServiceId);
                    _this.loadTroubleTicketMessages(_this.selectedTroubleTicket.id);
                    _this.openSnackBar("Trouble ticket reopened");
                });
            });
        }
        else {
            this.troubleTicketService.postMessage(this.selectedTroubleTicket.id, this.newMessage).subscribe(function (data) {
                _this.loadTroubleTicketMessages(_this.selectedTroubleTicket.id);
            });
        }
        this.isDisabled = false;
        this.message.reset();
        _helpers_utils_service__WEBPACK_IMPORTED_MODULE_13__["Utils"].scrollToBottom(this.scrollContainer);
    };
    UserTroubleTicketsComponent.prototype.assignTicket = function () {
        var _this = this;
        this.isDisabled = true;
        this.troubleTicket = this.selectedTroubleTicket;
        this.troubleTicket.approverId = this.authService.getDecodedToken().sub;
        this.troubleTicketService.changeStatus(this.troubleTicket, 2).subscribe(function (data) {
            _this.troubleTicket.statusId = 2;
            _this.troubleTicket.status = "In progress";
            _this.usersService.getUserSummaryById(_this.troubleTicket.approverId).subscribe(function (data) {
                _this.approverUsername = data.username;
            });
            _this.selectedTroubleTicket = _this.troubleTicket;
            _this.initTroubleTickets(0);
            _this.openSnackBar("Trouble ticket assigned");
        });
        this.isDisabled = false;
    };
    UserTroubleTicketsComponent.prototype.markTicketAsAnswered = function () {
        var _this = this;
        this.isDisabled = true;
        this.troubleTicket = this.selectedTroubleTicket;
        this.troubleTicketService.changeStatus(this.troubleTicket, 3).subscribe(function (data) {
            _this.troubleTicket.statusId = 3;
            _this.troubleTicket.status = "Answered";
            _this.selectedTroubleTicket = _this.troubleTicket;
            _this.openSnackBar("Trouble ticket marked as answered");
        });
        this.isDisabled = false;
    };
    UserTroubleTicketsComponent.prototype.postTroubleTicketFeedback = function () {
        var _this = this;
        this.isDisabled = true;
        this.submittedFeedback = true;
        if (this.feedbackControl.errors || this.value < 1) {
            return;
        }
        this.troubleTicketService.postFeedback(this.selectedTroubleTicket.id, this.value, this.feedbackControl.value).subscribe(function (data) {
            if (_this.feedbackControl.value) {
                _this.troubleTicket = _this.selectedTroubleTicket;
                _this.troubleTicket.rating = _this.value;
                _this.troubleTicket.text = _this.feedbackControl.value.trim();
                _this.troubleTicketService.changeStatus(_this.troubleTicket, 6).subscribe(function (data) {
                    _this.troubleTicket.statusId = 6;
                    _this.troubleTicket.status = "Feedback";
                    _this.selectedTroubleTicket = _this.troubleTicket;
                });
            }
            else {
                _this.troubleTicket = _this.selectedTroubleTicket;
                _this.troubleTicket.rating = _this.value;
                _this.troubleTicketService.changeStatus(_this.troubleTicket, 5).subscribe(function (data) {
                    _this.troubleTicket.statusId = 5;
                    _this.troubleTicket.status = "Rated";
                    _this.selectedTroubleTicket = _this.troubleTicket;
                    _this.openSnackBar("Trouble ticket feedback added");
                });
            }
        });
        this.isDisabled = false;
        this.message.reset();
    };
    UserTroubleTicketsComponent.prototype.onKeyDown = function (event, type) {
        if (event.key == 'Enter') {
            if (type == 'feedback') {
                this.postTroubleTicketFeedback();
                this.message.reset();
            }
            if (type == 'message') {
                this.postTroubleTicketMessage();
                this.message.reset();
            }
        }
    };
    UserTroubleTicketsComponent.prototype.showTroubleTicket = function () {
        var _this = this;
        if (this.shareDataService.ticketId != 0 && this.shareDataService.ticketId != null) {
            this.troubleTicketService.getTroubleTicketById(this.shareDataService.ticketId).subscribe(function (data) {
                if (!_this.isApprover) {
                    _this.currentServiceId = data.serviceId;
                    _this.initTroubleTickets(_this.currentServiceId);
                }
                _this.selectedTroubleTicket = data;
                _this.loadTroubleTicketMessages(_this.shareDataService.ticketId);
            });
        }
    };
    UserTroubleTicketsComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_11__["SnackbarComponent"], {
            duration: 1000
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ticketsChat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserTroubleTicketsComponent.prototype, "scrollContainer", void 0);
    UserTroubleTicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-trouble-tickets',
            template: __webpack_require__(/*! ./user-trouble-tickets.component.html */ "./src/app/user/user-trouble-tickets/user-trouble-tickets.component.html"),
            styles: [__webpack_require__(/*! ./user-trouble-tickets.component.scss */ "./src/app/user/user-trouble-tickets/user-trouble-tickets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_trouble_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TroubleTicketService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_stomp_client_service__WEBPACK_IMPORTED_MODULE_7__["StompClientService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_9__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]])
    ], UserTroubleTicketsComponent);
    return UserTroubleTicketsComponent;
}());



/***/ }),

/***/ "./src/app/user/user-users/user-users.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/user-users/user-users.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-layout\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card card-layout\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registrationForm\" class=\"card-block card-content form-layout\">\r\n          <h2 align=\"center\">Register new user</h2>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\r\n          <!-- Username -->\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"username\"\r\n                   id=\"username\"\r\n                   name=\"username\"\r\n                   placeholder=\"Pick up a username\"\r\n                   type=\"text\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.username.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.username.errors.minlength\">Name must be at least 3 characters long</div>\r\n              <div *ngIf=\"f.username.errors.maxlength\">Name must be less than 15 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- First name -->\r\n          <div class=\"form-group\">\r\n            <label>First name</label>\r\n            <input [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"firstName\"\r\n                   id=\"firstName\"\r\n                   name=\"firstName\"\r\n                   placeholder=\"Enter your first name\"\r\n                   type=\"text\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.firstName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.firstName.errors.minlength\">First name must be at least 4 characters long</div>\r\n              <div *ngIf=\"f.firstName.errors.maxlength\">First name must be less than 40 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Last name -->\r\n          <div class=\"form-group\">\r\n            <label>Last name</label>\r\n            <input type=\"text\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"lastName\"\r\n                   id=\"lastName\"\r\n                   name=\"lastName\"\r\n                   placeholder=\"Enter your last name\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.lastName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.lastName.errors.minlength\">Last name must be at least 4 characters long</div>\r\n              <div *ngIf=\"f.lastName.errors.maxlength\">Last name must be less than 40 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Email -->\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input [ngClass]=\"{ 'is-invalid': submitted && f.email.invalid }\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"email\"\r\n                   id=\"email\"\r\n                   name=\"email\"\r\n                   placeholder=\"you@example.com\"\r\n                   type=\"email\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.email.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.email.errors.email\">Email is not valid</div>\r\n              <div *ngIf=\"f.secondName.errors.maxlength\">Email name must be less than 40 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"role\">Role</label>\r\n            <select (change)=\"selectChangeHandler($event)\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"role\"\r\n                    id=\"role\"\r\n                    name=\"role\">\r\n              <option value=\"APPROVER\">Approver</option>\r\n              <option value=\"PROVIDER\">Provider</option>\r\n            </select>\r\n\r\n          </div>\r\n\r\n          <div>\r\n            <button class=\"btn btn-wide styledButton\" color=\"primary\" mdbBtn mdbWavesEffect>\r\n              Sign up\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n            </button>\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"offset-3\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user-users/user-users.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/user-users/user-users.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci11c2Vycy91c2VyLXVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user-users/user-users.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/user-users/user-users.component.ts ***!
  \*********************************************************/
/*! exports provided: UserUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUsersComponent", function() { return UserUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");








var UserUsersComponent = /** @class */ (function () {
    function UserUsersComponent(formBuilder, router, shareDataService, snackBar, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.shareDataService = shareDataService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.submitted = false;
        this.error = '';
        this.loading = false;
        this.selectedVal = '';
    }
    Object.defineProperty(UserUsersComponent.prototype, "f", {
        get: function () {
            return this.registrationForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserUsersComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(128)]],
            role: [''],
        });
    };
    UserUsersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registrationForm.invalid) {
            return;
        }
        this.loading = true;
        var registrationPayload = {
            "firstName": this.registrationForm.controls.firstName.value.trim(),
            "lastName": this.registrationForm.controls.lastName.value.trim(),
            "username": this.registrationForm.controls.username.value.trim(),
            "email": this.registrationForm.controls.email.value.trim(),
            "password": "123456",
            "role": "ROLE_" + this.f.role.value
        };
        this.authService.registrationSpecUser(registrationPayload).subscribe(function () {
            _this.openSnackBar("New " + _this.f.role.value + " registered successfully");
            _this.router.navigate(['login']);
        }, function (err) {
            _this.error = err;
            _this.loading = false;
            window.setTimeout(function () {
                _this.error = '';
            }, 5000);
        });
    };
    UserUsersComponent.prototype.selectChangeHandler = function (event) {
        //update the ui
        this.selectedVal = event.target.value;
    };
    UserUsersComponent.prototype.openSnackBar = function (message) {
        this.shareDataService.snackBarMessage = message;
        this.snackBar.openFromComponent(_models_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarComponent"], {
            duration: 1000
        });
    };
    UserUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-users',
            template: __webpack_require__(/*! ./user-users.component.html */ "./src/app/user/user-users/user-users.component.html"),
            styles: [__webpack_require__(/*! ./user-users.component.scss */ "./src/app/user/user-users/user-users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_5__["ShareDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], UserUsersComponent);
    return UserUsersComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-tab-group [(selectedIndex)]=\"indexOfTabToOpen\">\r\n    <mat-tab label=\"Summary\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-user-summary></app-user-summary>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab *ngIf=\"authority == 'ROLE_USER'\" label=\"Subscriptions\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-user-subscriptions></app-user-subscriptions>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab *ngIf=\"authority == 'ROLE_ADMIN'\" label=\"Users\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-table></app-table>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab *ngIf=\"authority == 'ROLE_ADMIN'\" label=\"Bundles\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-user-bundles></app-user-bundles>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab *ngIf=\"authority == 'ROLE_PROVIDER' || authority == 'ROLE_APPROVER'\" label=\"Trips\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-user-trips></app-user-trips>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab *ngIf=\"authority == 'ROLE_ADMIN'\" label=\"Reports\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-report></app-report>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab *ngIf=\"authority == 'ROLE_ADMIN'\" label=\"Dashboards\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-admin-dashboard></app-admin-dashboard>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab *ngIf=\"authority == 'ROLE_PROVIDER'\" label=\"Dashboards\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-carrier-dashboard></app-carrier-dashboard>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab *ngIf=\"authority == 'ROLE_APPROVER'\" label=\"Dashboards\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-approver-dashboard></app-approver-dashboard>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab *ngIf=\"authority == 'ROLE_APPROVER' || authority == 'ROLE_USER'\"\r\n             label=\"Trouble tickets\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-user-trouble-tickets></app-user-trouble-tickets>\r\n      </div>\r\n    </mat-tab>\r\n    <!--<mat-tab label=\"Chat\" *ngIf=\"authority == 'ROLE_APPROVER'\">\r\n      <app-chat></app-chat>\r\n    </mat-tab>-->\r\n    <!--<mat-tab *ngIf=\"authority == 'ROLE_USER'\" label=\"Support chat\">-->\r\n    <!--<app-support-chat></app-support-chat>-->\r\n    <!--</mat-tab>-->\r\n    <!--<mat-tab *ngIf=\"authority == 'ROLE_APPROVER'\" label=\"Support chats\">-->\r\n    <!--<app-approvers-chat></app-approvers-chat>-->\r\n    <!--</mat-tab>-->\r\n    <mat-tab label=\"My Orders\" *ngIf=\"authority == 'ROLE_USER'\">\r\n      <div class=\"tabBorderPadding\">\r\n        <app-user-orders></app-user-orders>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-content {\n  margin-top: 10px;\n  margin-left: 50px;\n  padding: 5px; }\n\n.content-width {\n  width: 100%; }\n\n.tab-content.card {\n  border: 0; }\n\n.hover-block:hover {\n  background: #2980b9;\n  color: #ffffff; }\n\n.hover-block.active {\n  background: #2980b9;\n  color: #ffffff; }\n\n.container, .grid-container {\n  padding: 0;\n  border-radius: 5px;\n  margin-top: 20px;\n  background-color: white;\n  height: auto; }\n\nmat-tab {\n  font-weight: bolder; }\n\n.tabBorderPadding {\n  padding: 25px 0 25px 0; }\n\n.generateButton {\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9DOlxcVXNlcnNcXFVzZXJcXE5ldGNyYWNrZXJcXHRyaXBnb2RcXGZyb250ZW5kXFxzcmNcXG1haW5cXHdlYi9zcmNcXGFwcFxcdXNlclxcdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsU0FBUyxFQUFBOztBQUVYO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uY29udGVudC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRhYi1jb250ZW50LmNhcmR7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi5ob3Zlci1ibG9jazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uaG92ZXItYmxvY2suYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY29udGFpbmVyLCAuZ3JpZC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5tYXQtdGFiIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4udGFiQm9yZGVyUGFkZGluZyB7XHJcbiAgcGFkZGluZzogMjVweCAwIDI1cHggMDtcclxufVxyXG5cclxuLmdlbmVyYXRlQnV0dG9uIHtcclxuICBib3R0b206IDA7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserComponent = /** @class */ (function () {
    function UserComponent(authService, shareDataService, router) {
        var _this = this;
        this.authService = authService;
        this.shareDataService = shareDataService;
        this.router = router;
        this.indexOfTabToOpen = null;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.setTabIndex();
            }
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        this.setTabIndex();
        window.scrollTo(0, 0);
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.shareDataService.tabIndex = null;
        this.shareDataService.ticketId = null;
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    UserComponent.prototype.setTabIndex = function () {
        this.indexOfTabToOpen = this.shareDataService.tabIndex;
    };
    Object.defineProperty(UserComponent.prototype, "authority", {
        get: function () {
            return this.authService.getDecodedToken().authority;
        },
        enumerable: true,
        configurable: true
    });
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Netcracker\tripgod\frontend\src\main\web\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map