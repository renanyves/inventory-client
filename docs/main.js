"use strict";
(self["webpackChunkinventory_client"] = self["webpackChunkinventory_client"] || []).push([["main"],{

/***/ 2899:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/category/category-detail/category-detail.component */ 7733);
/* harmony import */ var _pages_category_category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/category/category-listing/category-listing.component */ 7824);
/* harmony import */ var _pages_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/product/product-detail/product-detail.component */ 4227);
/* harmony import */ var _pages_product_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/product/product-listing/product-listing.component */ 9011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  redirectTo: '/product',
  pathMatch: 'full'
}, {
  path: 'product',
  component: _pages_product_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_3__.ProductListingComponent
}, {
  path: 'product/:id',
  component: _pages_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailComponent
}, {
  path: 'new/product',
  component: _pages_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailComponent
}, {
  path: 'view/product/:id',
  component: _pages_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailComponent,
  data: {
    action: 'view'
  }
}, {
  path: 'category',
  component: _pages_category_category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_1__.CategoryListingComponent
}, {
  path: 'category/:id',
  component: _pages_category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_0__.CategoryDetailComponent
}, {
  path: 'view/category/:id',
  component: _pages_category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_0__.CategoryDetailComponent,
  data: {
    action: 'view'
  }
}, {
  path: 'new/category',
  component: _pages_category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_0__.CategoryDetailComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 8641:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8497);







class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 26,
    vars: 2,
    consts: [["color", "primary"], ["mat-button", "", "routerLink", "/product"], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/new/product"], ["mat-menu-item", "", "routerLink", "/product"], ["menu2", "matMenu"], ["mat-menu-item", "", "routerLink", "/new/category"], ["mat-menu-item", "", "routerLink", "/category"], [2, "flex", "1 1 auto"], ["role", "main", 1, "content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "button", 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-menu", null, 3)(8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Listar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", null, 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cadastrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Listar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sistema de Controle de Invent\u00E1rio de Papelaria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 10)(24, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard],
    styles: [".toolbar[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-left: 1%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IC04cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3574:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 2899);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 8641);
/* harmony import */ var _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirmation-dialog/confirmation-dialog.component */ 3670);
/* harmony import */ var _pages_category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/category/category-detail/category-detail.component */ 7733);
/* harmony import */ var _pages_category_category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/category/category-listing/category-listing.component */ 7824);
/* harmony import */ var _pages_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/product/product-detail/product-detail.component */ 4227);
/* harmony import */ var _pages_product_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/product/product-listing/product-listing.component */ 9011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);


























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_product_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_6__.ProductListingComponent, _pages_product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailComponent, _pages_category_category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_4__.CategoryListingComponent, _pages_category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_3__.CategoryDetailComponent, _components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule]
  });
})();

/***/ }),

/***/ 3670:
/*!*********************************************************************************!*\
  !*** ./src/app/components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationDialogComponent: () => (/* binding */ ConfirmationDialogComponent),
/* harmony export */   DialogData: () => (/* binding */ DialogData)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);




class DialogData {
  constructor() {
    this.yes = 'Sim';
    this.no = 'Não';
  }
}
class ConfirmationDialogComponent {
  constructor(data) {
    this.data = data;
  }
  static #_ = this.ɵfac = function ConfirmationDialogComponent_Factory(t) {
    return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmationDialogComponent,
    selectors: [["app-confirmation-dialog"]],
    decls: 10,
    vars: 6,
    consts: [["mat-dialog-title", "", 2, "font-family", "Verdana, sans-serif", "font-size", "22px"], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "warn", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 2, "margin-right", "10px", 3, "mat-dialog-close"]],
    template: function ConfirmationDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.yes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.no);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
    styles: [".mat-raised-button[_ngcontent-%COMP%] {\n  padding: 0 10px !important;\n  line-height: 24px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhaXNlZC1idXR0b24ge1xuICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7733:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/category/category-detail/category-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryDetailComponent: () => (/* binding */ CategoryDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/confirmation-dialog/confirmation-dialog.component */ 3670);
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../product/product-detail/product-detail.component */ 4227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ 327);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ 4888);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);














function CategoryDetailComponent_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.idCategory);
  }
}
function CategoryDetailComponent_mat_error_11_mat_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", validation_r6.message, "");
  }
}
function CategoryDetailComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CategoryDetailComponent_mat_error_11_mat_error_1_Template, 2, 1, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.categoryForm.get("name").hasError(validation_r6.type) && (ctx_r2.categoryForm.get("name").dirty || ctx_r2.categoryForm.get("name").touched));
  }
}
function CategoryDetailComponent_mat_error_17_mat_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", validation_r9.message, "");
  }
}
function CategoryDetailComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CategoryDetailComponent_mat_error_17_mat_error_1_Template, 2, 1, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.categoryForm.get("description").hasError(validation_r9.type) && (ctx_r4.categoryForm.get("description").dirty || ctx_r4.categoryForm.get("description").touched));
  }
}
function CategoryDetailComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoryDetailComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class CategoryDetailComponent {
  constructor(categoryService, messageService, route, router, dialog) {
    this.categoryService = categoryService;
    this.messageService = messageService;
    this.route = route;
    this.router = router;
    this.dialog = dialog;
    this.action = _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__.Action.CREATE;
    this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)])),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]))
    });
    this.validationMessages = {
      name: [{
        type: 'required',
        message: 'É necessário preencher o nome da categoria'
      }, {
        type: 'maxlength',
        message: 'O nome da categoria está longo demais. Utilize o campo descrição.'
      }],
      description: [{
        type: 'required',
        message: 'É necessário preencher a descrição da categoria'
      }, {
        type: 'maxlength',
        message: 'A descrição não pode passar de 300 characteres.'
      }]
    };
  }
  ngOnInit() {
    const idCategory = this.route.snapshot.paramMap.get('id');
    if (idCategory) {
      this.idCategory = +idCategory;
      this.action = _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__.Action.SAVE;
      this.categoryService.findById(this.idCategory).subscribe(category => {
        this.categoryForm.get('name').setValue(category.name);
        this.categoryForm.get('description').setValue(category.description);
      });
    }
  }
  save(category) {
    let $save;
    if (this.action === _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__.Action.CREATE) {
      $save = this.categoryService.create(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
        this.messageService.open('A categoria foi cadastrada com sucesso');
      }));
    } else {
      category.id = this.idCategory;
      $save = this.categoryService.save(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
        this.messageService.open('A categoria foi salva com sucesso');
      }));
    }
    $save.subscribe(() => {
      this.router.navigate(['category']);
    }, error => {
      console.log(error);
      this.messageService.open('Um erro inesperado ocorreu');
    });
  }
  cancel() {
    this.router.navigate(['category']);
  }
  delete() {
    const data = new src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogData();
    data.title = 'Confirmar exclusão';
    data.text = `Tem certeza que quer excluir a categoria de código "${this.idCategory}"?`;
    const dialogoConfirmacao = this.dialog.open(src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent, {
      width: '450px',
      data
    });
    dialogoConfirmacao.afterClosed().subscribe(res => {
      if (res === false) {
        dialogoConfirmacao.close();
      } else {
        this.categoryService.delete(this.idCategory).subscribe(() => {
          this.messageService.open('Categoria excluída com sucesso');
          this.router.navigate(['category']);
        }, err => {
          console.log(err);
          this.messageService.open('Um erro inesperado ocorreu.');
        });
      }
    });
  }
  static #_ = this.ɵfac = function CategoryDetailComponent_Factory(t) {
    return new (t || CategoryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CategoryDetailComponent,
    selectors: [["app-category-detail"]],
    decls: 24,
    vars: 9,
    consts: [[3, "formGroup", "ngSubmit"], ["class", "mat-form-field-id", 4, "ngIf"], [1, "mat-form-field-name"], ["matInput", "", "placeholder", "Nome da categoria", "formControlName", "name", "required", ""], ["inputName", ""], ["align", "end"], [4, "ngFor", "ngForOf"], [1, "mat-form-field-description"], ["rows", "3", "matInput", "", "placeholder", "Descri\u00E7\u00E3o da categoria", "formControlName", "description", "required", ""], ["inputDescription", ""], ["color", "primary", "mat-raised-button", "", "type", "submit", 1, "submit-btn", 3, "disabled"], ["color", "warn", "mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 3, "click"], [1, "mat-form-field-id"], ["disabled", "", "matInput", "", 3, "value"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["color", "warn", "mat-raised-button", "", "type", "button", 3, "click"]],
    template: function CategoryDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Cadastro de Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div")(3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CategoryDetailComponent_Template_form_ngSubmit_3_listener() {
          return ctx.save(ctx.categoryForm.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CategoryDetailComponent_mat_form_field_4_Template, 2, 1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CategoryDetailComponent_mat_error_11_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "textarea", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CategoryDetailComponent_mat_error_17_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CategoryDetailComponent_button_21_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CategoryDetailComponent_Template_button_click_22_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.categoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.idCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (_r1.value == null ? null : _r1.value.length) || 0, "/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.validationMessages.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (_r3.value == null ? null : _r3.value.length) || 0, "/300");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.validationMessages.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.categoryForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.idCategory);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
    styles: ["form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 5px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.mat-form-field-id[_ngcontent-%COMP%] {\n  min-width: 40px;\n  max-width: 100px;\n}\n\n.mat-form-field-name[_ngcontent-%COMP%] {\n  min-width: 40px;\n  max-width: 350px;\n}\n\n.mat-form-field-description[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnktZGV0YWlsL2NhdGVnb3J5LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBSUYiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LWZvcm0tZmllbGQtaWQge1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG4ubWF0LWZvcm0tZmllbGQtbmFtZSB7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cbi5tYXQtZm9ybS1maWVsZC1kZXNjcmlwdGlvbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7824:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/category/category-listing/category-listing.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryListingComponent: () => (/* binding */ CategoryListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/confirmation-dialog/confirmation-dialog.component */ 3670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ 327);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/message.service */ 4888);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);

















function CategoryListingComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CategoryListingComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r10.id, " ");
  }
}
function CategoryListingComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CategoryListingComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r11.name, " ");
  }
}
function CategoryListingComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CategoryListingComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r12.description, " ");
  }
}
function CategoryListingComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CategoryListingComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoryListingComponent_td_19_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const row_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.detail(row_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CategoryListingComponent_td_19_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const row_r13 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.delete(row_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function CategoryListingComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 18);
  }
}
function CategoryListingComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 19);
  }
}
const _c0 = function () {
  return [5, 10, 25, 100];
};
class CategoryListingComponent {
  constructor(categoryService, router, dialog, messageService) {
    this.categoryService = categoryService;
    this.router = router;
    this.dialog = dialog;
    this.messageService = messageService;
    this.displayedColumns = ['id', 'name', 'description', 'actions'];
  }
  ngOnInit() {
    this.refreshTableData();
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  refreshTableData() {
    this.categoryService.findAll().subscribe(products => {
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  detail(id) {
    this.router.navigate(['category', id]);
  }
  delete(id) {
    const data = new src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogData();
    data.title = 'Confirmar exclusão';
    data.text = 'Tem certeza que quer excluir a categoria?';
    const dialogoConfirmacao = this.dialog.open(src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent, {
      width: '250px',
      data
    });
    dialogoConfirmacao.afterClosed().subscribe(res => {
      if (res === false) {
        dialogoConfirmacao.close();
      } else {
        this.categoryService.delete(id).subscribe(() => {
          this.refreshTableData();
          this.messageService.open('Categoria excluída com sucesso');
        }, err => {
          console.log(err);
          this.messageService.open('Um erro inesperado ocorreu.');
        });
      }
    });
  }
  static #_ = this.ɵfac = function CategoryListingComponent_Factory(t) {
    return new (t || CategoryListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CategoryListingComponent,
    selectors: [["app-category-listing"]],
    viewQuery: function CategoryListingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 23,
    vars: 5,
    consts: [["matInput", "", "placeholder", "Ex. Mochila", 3, "keyup"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-mini-fab", "", "color", "primary", "type", "button", "matTooltip", "Editar", 3, "click"], ["mat-mini-fab", "", "color", "primary", "type", "button", "matTooltip", "Excluir", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function CategoryListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Categorias");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Filtro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function CategoryListingComponent_Template_input_keyup_5_listener($event) {
          return ctx.applyFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1)(7, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CategoryListingComponent_th_9_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CategoryListingComponent_td_10_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CategoryListingComponent_th_12_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CategoryListingComponent_td_13_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CategoryListingComponent_th_15_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CategoryListingComponent_td_16_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CategoryListingComponent_th_18_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, CategoryListingComponent_td_19_Template, 7, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, CategoryListingComponent_tr_20_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CategoryListingComponent_tr_21_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
      }
    },
    dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon],
    styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.mat-column-id[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.mat-column-description[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.mat-column-actions[_ngcontent-%COMP%] {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvY2F0ZWdvcnktbGlzdGluZy9jYXRlZ29yeS1saXN0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0FBTUYiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtY29sdW1uLWlkIHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5tYXQtY29sdW1uLW5hbWUge1xuICB3aWR0aDogMzAlO1xufVxuLm1hdC1jb2x1bW4tZGVzY3JpcHRpb24ge1xuICB3aWR0aDogNDAlO1xufVxuLm1hdC1jb2x1bW4tYWN0aW9ucyB7XG4gIHdpZHRoOiAyMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4227:
/*!**************************************************************************!*\
  !*** ./src/app/pages/product/product-detail/product-detail.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   ProductDetailComponent: () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/confirmation-dialog/confirmation-dialog.component */ 3670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 161);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/message.service */ 4888);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ 327);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 895);
















function ProductDetailComponent_mat_error_9_mat_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", validation_r12.message, "");
  }
}
function ProductDetailComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductDetailComponent_mat_error_9_mat_error_1_Template, 2, 1, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.productForm.get("barcode").hasError(validation_r12.type) && (ctx_r1.productForm.get("barcode").dirty || ctx_r1.productForm.get("barcode").touched));
  }
}
function ProductDetailComponent_mat_error_15_mat_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", validation_r15.message, "");
  }
}
function ProductDetailComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductDetailComponent_mat_error_15_mat_error_1_Template, 2, 1, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.productForm.get("name").hasError(validation_r15.type) && (ctx_r3.productForm.get("name").dirty || ctx_r3.productForm.get("name").touched));
  }
}
function ProductDetailComponent_mat_error_22_mat_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", validation_r18.message, "");
  }
}
function ProductDetailComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductDetailComponent_mat_error_22_mat_error_1_Template, 2, 1, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r18 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.productForm.get("description").hasError(validation_r18.type) && (ctx_r5.productForm.get("description").dirty || ctx_r5.productForm.get("description").touched));
  }
}
function ProductDetailComponent_mat_error_25_mat_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", validation_r21.message, "");
  }
}
function ProductDetailComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductDetailComponent_mat_error_25_mat_error_1_Template, 2, 1, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r21 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("quantity").hasError(validation_r21.type) && (ctx_r6.productForm.get("quantity").dirty || ctx_r6.productForm.get("quantity").touched));
  }
}
function ProductDetailComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", category_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r24.name);
  }
}
function ProductDetailComponent_mat_error_32_mat_error_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", validation_r25.message, "");
  }
}
function ProductDetailComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductDetailComponent_mat_error_32_mat_error_1_Template, 2, 1, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const validation_r25 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.productForm.get("category").hasError(validation_r25.type) && (ctx_r8.productForm.get("category").dirty || ctx_r8.productForm.get("category").touched));
  }
}
function ProductDetailComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r9.productForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.action);
  }
}
function ProductDetailComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailComponent_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductDetailComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/product/" + ctx_r11.productBarcode);
  }
}
var Action;
(function (Action) {
  Action["CREATE"] = "Cadastrar";
  Action["SAVE"] = "Salvar";
  Action["VIEW"] = "Ver detalhe";
})(Action || (Action = {}));
class ProductDetailComponent {
  constructor(productService, messageService, categoryService, route, router, dialog) {
    this.productService = productService;
    this.messageService = messageService;
    this.categoryService = categoryService;
    this.route = route;
    this.router = router;
    this.dialog = dialog;
    this.action = Action.CREATE;
    this.Actions = Action;
    this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormGroup({
      barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(25)])),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)])),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)])),
      quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)])),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]))
    });
    this.validationMessages = {
      barcode: [{
        type: 'required',
        message: 'É necessário preencher o código de barras'
      }, {
        type: 'pattern',
        message: 'Este campo aceita apenas números'
      }, {
        type: 'maxlength',
        message: 'O código de barras não pode passar de 25 characters'
      }],
      name: [{
        type: 'required',
        message: 'É necessário preencher o nome do produto'
      }, {
        type: 'maxlength',
        message: 'O nome do produto está longo demais. Utilize o campo descrição.'
      }],
      description: [{
        type: 'required',
        message: 'É necessário preencher a descrição do produto'
      }, {
        type: 'maxlength',
        message: 'A descrição não pode passar de 300 characteres.'
      }],
      quantity: [{
        type: 'required',
        message: 'É necessário preencher a quantidade'
      }, {
        type: 'pattern',
        message: 'Este campo aceita apenas números'
      }, {
        type: 'min',
        message: 'A quantidade deve ser um valor maior ou igual a 0'
      }],
      category: [{
        type: 'required',
        message: 'É necessário preencher a categoria'
      }]
    };
  }
  ngOnInit() {
    this.categoryService.findAll().subscribe(categories => {
      this.allCategories = categories;
    });
    this.productBarcode = this.route.snapshot.paramMap.get('id');
    if (this.productBarcode) {
      if (this.route.snapshot.data.action && this.route.snapshot.data.action === 'view') {
        this.action = Action.VIEW;
      } else {
        this.action = Action.SAVE;
      }
      this.productService.findById(this.productBarcode).subscribe(product => {
        this.productForm.get('barcode').setValue(product.barcode);
        this.productForm.get('barcode').disable();
        this.productForm.get('name').setValue(product.name);
        this.productForm.get('description').setValue(product.description);
        this.productForm.get('quantity').setValue(product.quantity);
        this.productForm.get('category').setValue(product.category.id);
        if (this.action === Action.VIEW) {
          this.productForm.get('barcode').disable();
          this.productForm.get('name').disable();
          this.productForm.get('description').disable();
          this.productForm.get('quantity').disable();
          this.productForm.get('category').disable();
        }
      });
    }
  }
  save(product) {
    let $save;
    if (this.action === Action.CREATE) {
      $save = this.productService.create(product).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
        this.messageService.open('O produto foi cadastrado com sucesso');
      }));
    } else {
      product.barcode = this.productBarcode;
      $save = this.productService.save(product).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
        this.messageService.open('O produto foi salvo com sucesso');
      }));
    }
    $save.subscribe(() => {
      this.router.navigate(['product']);
    }, error => {
      console.log(error);
      if (error.status === 303) {
        this.messageService.open(`O código de barras ${product.barcode} já está cadastrado.`);
      } else {
        this.messageService.open('Um erro inesperado ocorreu');
      }
    });
  }
  cancel() {
    this.router.navigate(['product']);
  }
  delete() {
    const data = new src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogData();
    data.title = 'Confirmar exclusão';
    data.text = `Tem certeza que quer excluir o produto de código "${this.productBarcode}"?`;
    const dialogoConfirmacao = this.dialog.open(src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent, {
      width: '450px',
      data
    });
    dialogoConfirmacao.afterClosed().subscribe(res => {
      if (res === false) {
        dialogoConfirmacao.close();
      } else {
        this.productService.delete(this.productBarcode).subscribe(() => {
          this.messageService.open('Produto excluído com sucesso');
          this.router.navigate(['product']);
        }, error => {
          console.log(error);
          this.messageService.open('Um erro inesperado ocorreu.');
        });
      }
    });
  }
  static #_ = this.ɵfac = function ProductDetailComponent_Factory(t) {
    return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductDetailComponent,
    selectors: [["app-product-detail"]],
    decls: 39,
    vars: 13,
    consts: [[3, "formGroup", "ngSubmit"], [1, "min-250", "max-350"], ["matInput", "", "placeholder", "C\u00F3digo de barras", "formControlName", "barcode", "required", ""], ["inputBarcode", ""], ["align", "end"], [4, "ngFor", "ngForOf"], [1, "max-350"], ["matInput", "", "placeholder", "Nome do produto", "formControlName", "name", "required", ""], ["inputName", ""], ["rows", "3", "matInput", "", "placeholder", "Descri\u00E7\u00E3o do produto", "formControlName", "description", "required", ""], ["inputDescription", ""], ["matInput", "", "placeholder", "Quantidade", "type", "number", "formControlName", "quantity", "required", ""], ["formControlName", "category"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "submit-btn", "color", "primary", "mat-raised-button", "", "type", "submit", 3, "disabled", 4, "ngIf"], ["color", "warn", "mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], [3, "value"], ["color", "primary", "mat-raised-button", "", "type", "submit", 1, "submit-btn", 3, "disabled"], ["color", "warn", "mat-raised-button", "", "type", "button", 3, "click"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "routerLink"]],
    template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Cadastro de Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div")(3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ProductDetailComponent_Template_form_ngSubmit_3_listener() {
          return ctx.save(ctx.productForm.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ProductDetailComponent_mat_error_9_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ProductDetailComponent_mat_error_15_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ProductDetailComponent_mat_error_22_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ProductDetailComponent_mat_error_25_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-form-field", 6)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Selecionar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ProductDetailComponent_mat_option_31_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ProductDetailComponent_mat_error_32_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ProductDetailComponent_button_34_Template, 2, 2, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ProductDetailComponent_button_35_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ProductDetailComponent_button_36_Template, 2, 1, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_37_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (_r0.value == null ? null : _r0.value.length) || 0, "/25");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.validationMessages.barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (_r2.value == null ? null : _r2.value.length) || 0, "/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.validationMessages.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (_r4.value == null ? null : _r4.value.length) || 0, "/300");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.validationMessages.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.validationMessages.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.allCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.validationMessages.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.action !== ctx.Actions.VIEW);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.action === ctx.Actions.SAVE);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.action === ctx.Actions.VIEW);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
    styles: ["form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 5px;\n}\n\n.min-250[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n\n.max-350[_ngcontent-%COMP%] {\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDVweDtcbn1cblxuLm1pbi0yNTAge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4ubWF4LTM1MCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9011:
/*!****************************************************************************!*\
  !*** ./src/app/pages/product/product-listing/product-listing.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListingComponent: () => (/* binding */ ProductListingComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/confirmation-dialog/confirmation-dialog.component */ 3670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ 161);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/message.service */ 4888);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);

















function ProductListingComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "C\u00F3digo de barras");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductListingComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r12.barcode, " ");
  }
}
function ProductListingComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductListingComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r13.name, " ");
  }
}
function ProductListingComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Quantidade");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductListingComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r14.quantity, " ");
  }
}
function ProductListingComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductListingComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r15.category.name, " ");
  }
}
function ProductListingComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductListingComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListingComponent_td_22_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const row_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.view(row_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListingComponent_td_22_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const row_r16 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.detail(row_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListingComponent_td_22_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const row_r16 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.delete(row_r16.barcode));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ProductListingComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 21);
  }
}
function ProductListingComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 22);
  }
}
const _c0 = function () {
  return [5, 10, 25, 100];
};
class ProductListingComponent {
  constructor(productService, router, dialog, messageService) {
    this.productService = productService;
    this.router = router;
    this.dialog = dialog;
    this.messageService = messageService;
    this.displayedColumns = ['barcode', 'name', 'quantity', 'category', 'actions'];
  }
  ngOnInit() {
    this.refreshTableData();
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  refreshTableData() {
    this.productService.findAll().subscribe(products => {
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  detail(row) {
    this.router.navigate(['product', row.barcode]);
  }
  delete(barcode) {
    const data = new src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogData();
    data.title = 'Confirmar exclusão';
    data.text = 'Tem certeza de que quer excluir?';
    const dialogoConfirmacao = this.dialog.open(src_app_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmationDialogComponent, {
      width: '250px',
      data
    });
    dialogoConfirmacao.afterClosed().subscribe(res => {
      if (res === false) {
        dialogoConfirmacao.close();
      } else {
        this.productService.delete(barcode).subscribe(() => {
          this.refreshTableData();
          this.messageService.open('Produto excluído com sucesso');
        }, err => {
          console.log(err);
          this.messageService.open('Um erro inesperado ocorreu.');
        });
      }
    });
  }
  view(row) {
    this.router.navigate(['view', 'product', row.barcode]);
  }
  static #_ = this.ɵfac = function ProductListingComponent_Factory(t) {
    return new (t || ProductListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProductListingComponent,
    selectors: [["app-product-listing"]],
    viewQuery: function ProductListingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    decls: 26,
    vars: 5,
    consts: [["matInput", "", "placeholder", "Ex. Mochila para notebook", 3, "keyup"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "barcode"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "quantity"], ["matColumnDef", "category"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-mini-fab", "", "color", "primary", "type", "button", "matTooltip", "Ver detalhe", 3, "click"], [1, "icone-tabela"], ["mat-mini-fab", "", "color", "primary", "type", "button", "matTooltip", "Editar", 3, "click"], ["mat-mini-fab", "", "color", "warn", "type", "button", "matTooltip", "Excluir", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function ProductListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Produtos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Filtro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ProductListingComponent_Template_input_keyup_5_listener($event) {
          return ctx.applyFilter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1)(7, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ProductListingComponent_th_9_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ProductListingComponent_td_10_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProductListingComponent_th_12_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ProductListingComponent_td_13_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ProductListingComponent_th_15_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProductListingComponent_td_16_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ProductListingComponent_th_18_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ProductListingComponent_td_19_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ProductListingComponent_th_21_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ProductListingComponent_td_22_Template, 10, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ProductListingComponent_tr_23_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ProductListingComponent_tr_24_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
      }
    },
    dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatMiniFabButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon],
    styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.mat-column-barcode[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.mat-column-name[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.mat-column-quantity[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.mat-column-category[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n.mat-column-actions[_ngcontent-%COMP%] {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LWxpc3RpbmcvcHJvZHVjdC1saXN0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0FBT0YiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXQtY29sdW1uLWJhcmNvZGUge1xuICB3aWR0aDogMjUlO1xufVxuLm1hdC1jb2x1bW4tbmFtZSB7XG4gIHdpZHRoOiAyNSU7XG59XG4ubWF0LWNvbHVtbi1xdWFudGl0eSB7XG4gIHdpZHRoOiAxMCU7XG59XG4ubWF0LWNvbHVtbi1jYXRlZ29yeSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLm1hdC1jb2x1bW4tYWN0aW9ucyB7XG4gIHdpZHRoOiAyMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 327:
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class CategoryService {
  static #_ = this.CategoryEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi + '/api/category';
  constructor(http) {
    this.http = http;
  }
  create(category) {
    return this.http.post(CategoryService.CategoryEndpoint, category);
  }
  save(category) {
    return this.http.put(CategoryService.CategoryEndpoint, category);
  }
  delete(id) {
    return this.http.delete(`${CategoryService.CategoryEndpoint}/${id}`);
  }
  findById(id) {
    return this.http.get(`${CategoryService.CategoryEndpoint}/${id}`);
  }
  findAll(name) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (name) {
      params = params.append('name', name);
    }
    return this.http.get(CategoryService.CategoryEndpoint, {
      params
    });
  }
  static #_2 = this.ɵfac = function CategoryService_Factory(t) {
    return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CategoryService,
    factory: CategoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4888:
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);


class MessageService {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  dismiss() {
    this.snackBar.dismiss();
  }
  open(msg) {
    this.snackBar.open(msg, 'Fechar', {
      duration: 10000
    });
  }
  static #_ = this.ɵfac = function MessageService_Factory(t) {
    return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MessageService,
    factory: MessageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 161:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class ProductService {
  static #_ = this.productEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlApi + '/api/product';
  constructor(http) {
    this.http = http;
  }
  create(product) {
    return this.http.post(ProductService.productEndpoint, product);
  }
  save(product) {
    return this.http.put(ProductService.productEndpoint, product);
  }
  delete(barcode) {
    return this.http.delete(`${ProductService.productEndpoint}/${barcode}`);
  }
  findById(barcode) {
    return this.http.get(`${ProductService.productEndpoint}/${barcode}`);
  }
  findAll(name) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (name) {
      params = params.append('name', name);
    }
    return this.http.get(ProductService.productEndpoint, {
      params
    });
  }
  static #_2 = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 108:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  urlApi: 'http://localhost:8080'
  //urlApi: 'https://inventory-api.mybluemix.net'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 6792:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 3574);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 108);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6792)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map