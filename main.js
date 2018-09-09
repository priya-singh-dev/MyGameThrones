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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container1 img\n{\n    background-size: cover;\n    height:80vh;\n    width:100%;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <!-- <div\n    ng2-carouselamos\n    [width]=\"500\"\n    [items]=\"listOfItems\"\n    [$item]=\"itemTemplate\"\n    [$prev]=\"prevTemplate\"\n    [$next]=\"nextTemplate\"\n    (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n  ></div>\n   \n  <div>\n    Current item selected\n  </div>\n   \n  <ng-template #prevTemplate>\n    <img src=\"assets/person.png\" />\n  </ng-template>\n   \n  <ng-template #nextTemplate>\n    <img src=\"assets/gamethrones.jpg\" />\n  </ng-template>\n   \n  <ng-template let-item let-i=\"index\" #itemTemplate>\n    <div style=\"min-width: 200px\">\n      <b *ngIf=\"i === selectedIndex\">{{i}}. {{item.name}}</b>\n      <span *ngIf=\"i !== selectedIndex\">{{i}}. {{item.name}}</span>\n    </div>\n  </ng-template>--> \n  \n    <div class=\"container1\">\n      <img src=\"../assets/gamethrones.jpg\" class=\"img-fluid\">\n   \n    </div> \n\n<router-outlet></router-outlet>\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\">\n <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n\n<div class=\"footer\">\n\t<div class=\"container\">\n\t\t<p>Created By <b class=\"text-primary\">Priy Singh@ 2018</b></p>\n\t</div>\n</div>\n"

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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(spinner) {
        this.spinner = spinner;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 1000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sortingpipes_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sortingpipes.pipe */ "./src/app/sortingpipes.pipe.ts");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services.service */ "./src/app/services.service.ts");
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
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                _sortingpipes_pipe__WEBPACK_IMPORTED_MODULE_12__["SortingpipesPipe"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_6__["Ng2CarouselamosModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    {
                        path: 'detail/:entityName/:id',
                        component: _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"]
                    },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] }
                ])
            ],
            providers: [_services_service__WEBPACK_IMPORTED_MODULE_13__["ServicesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr\n{\n    width: 300px;\n    height: 100%;\n}\n#backbtn\n{\n    margin: 0 auto;\n}"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <a class=\"btn btn-info btn-lg border mt-5 ml-5\" id=\"backbtn\" (click)=\"goBack()\" >Go Back</a>\n\n<div class=\"container\">\n          \n  <div *ngIf=\"book.length!=0\">\n    <div class=\"row \">\n      <div class=\"col-4 col-lg-4\">\n\n      </div>\n      <div class=\"col-8 col-lg-8\">\n\n        <span class=\"match-heading\">\n          <img src=\"assets/book.jpeg\" class=\"match-logo  rounded circle\" style=\"width: 100px; height: 100px;\">BOOK</span>\n      </div>\n\n    </div>\n    <div class=\"row mt-4 mb-5\">\n      <div class=\"col-12 col-lg-12 \" id=\"mytable\">\n\n        <table class=\"table table-responsive table-hover\">\n\n          <tbody>\n\n            <tr *ngIf=\"checkValue(book.name)\">\n\n              <td class=\" heading-singlematch\">Book Name</td>\n              <td class=\" text-success value-singlematch\">{{book.name}}</td>\n\n            </tr>\n\n\n            <tr *ngIf=\"checkValue(book.authors)\">\n\n              <td class=\"heading-singlematch\">Author</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{book.authors.toString()}}</span>\n              </td>\n\n            </tr>\n\n\n            <tr *ngIf=\"checkValue(book.publisher)\">\n              <td class=\"heading-singlematch\">Publisher</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{book.publisher}}</span>\n              </td>\n\n            </tr>\n\n            <tr *ngIf=\"checkValue(book.mediaType)\">\n              <td class=\"heading-singlematch\">Media Type</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{book.mediaType}}</span>\n              </td>\n\n            </tr>\n\n            <tr *ngIf=\"checkValue(book.country)\">\n              <td class=\"heading-singlematch\">Country</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{book.country}}</span>\n              </td>\n\n            </tr>\n            <tr>\n              <td class=\"heading-singlematch\">Pages</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{book.numberOfPages}}</span>\n              </td>\n\n            </tr>\n            <tr>\n              <td class=\"heading-singlematch\">Released Date</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{book.released | date}}</span>\n              </td>\n\n            </tr>\n\n\n            <tr *ngIf=\"checkValue(book.isbn)\">\n              <td class=\"heading-singlematch\">Isbn</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{book.isbn}}</span>\n              </td>\n\n            </tr>\n\n            <tr *ngIf=\"checkValue(book.characters)\">\n              <td class=\"heading-singlematch\">Characters</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{book.characters.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(book.povCharacters)\">\n              <td class=\"heading-singlematch\">PovCharacters</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{book.povCharacters.toString()}}</span>\n              </td>\n\n            </tr>\n\n          </tbody>\n        </table>\n      </div>\n      <!--COLUMN END-->\n    </div>\n    <!--ROW END-->\n  </div>\n  <!-- Book section end -->\n\n  <div *ngIf=\"house.length!=0\">\n    <div class=\"row \">\n      <div class=\"col-4 col-lg-5\">\n\n      </div>\n      <div class=\"col-8 col-lg-7\">\n\n        <span class=\"match-heading\">\n          <img src=\"assets/houselogo.png\" class=\"match-logo rounded circle\" style=\"width: 100px; height: 100px;\">HOUSE</span>\n      </div>\n\n    </div>\n    <div class=\"row mt-4 mb-5\">\n      <div class=\"col-12\" id=\"mytable\">\n\n        <table class=\"table table-responsive table-hover\">\n\n          <tbody>\n\n            <tr *ngIf=\"checkValue(house.name)\">\n\n              <td class=\" heading-singlematch\">Name</td>\n\n              <td class=\"text-success value-singlematch\">{{house.name}}</td>\n\n            </tr>\n\n            <tr *ngIf=\"checkValue(house.region)\">\n\n              <td class=\"heading-singlematch\">Region</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.region}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.coatOfArms)\">\n              <td class=\"heading-singlematch\">Coat Of Arms</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.coatOfArms}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.words)\">\n              <td class=\"heading-singlematch\">Words</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.words}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.titles)\">\n              <td class=\"heading-singlematch\">Titles</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.titles.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.seats)\">\n              <td class=\"heading-singlematch\">Seats</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.seats.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.currentLord)\">\n              <td class=\"heading-singlematch\">Current Lord</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.currentLord}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.heir)\">\n              <td class=\"heading-singlematch\">Heir</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.heir}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.overlord)\">\n              <td class=\"heading-singlematch\">OverLord</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.overlord}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.founded)\">\n              <td class=\"heading-singlematch\" >Founded</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.founded}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.founder)\">\n              <td class=\"heading-singlematch\" >Founder</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.founder}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.diedOut)\">\n              <td class=\"heading-singlematch\">DiedOut</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.diedOut}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.ancestralWeapons)\">\n              <td class=\"heading-singlematch\">Ancestral Weapons</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.ancestralWeapons.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.cadetBranches)\">\n              <td class=\"heading-singlematch\">Cadet Branches</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.cadetBranches.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(house.swornMembers)\">\n              <td class=\"heading-singlematch\">Sworn Members</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{house.swornMembers.toString()}}</span>\n              </td>\n\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--COLUMN END-->\n    </div>\n    <!--ROW END-->\n  </div>\n  <!-- House section end -->\n\n  <div *ngIf=\"character.length!=0\">\n    <div class=\"row \">\n      <div class=\"col-8 col-lg-4\">\n\n      </div>\n      <div class=\"col-4 col-lg-8\">\n\n        <span class=\"match-heading\">\n          <img src=\"assets/person.png\" class=\"match-logo rounded circle \" style=\"width: 100px; height: 100px;\">CHARACTER</span>\n      </div>\n\n    </div>\n    <div class=\"row mt-4 mb-5\">\n      <div class=\"col-12 col-lg-12\" id=\"mytable\">\n\n        <table class=\"table table-responsive table-hover\">\n\n          <tbody>\n            <tr *ngIf=\"checkValue(character.name)\">\n\n              <td class=\"heading-singlematch\">Name</td>\n              <td class=\"text-success value-singlematch\">{{character.name}}</td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.gender)\">\n\n              <td class=\"heading-singlematch\">Gender</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.gender}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.culture)\">\n              <td class=\"heading-singlematch\">Culture</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.culture}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.born)\">\n              <td class=\"heading-singlematch\">Born</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.born}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.died)\">\n              <td class=\"heading-singlematch\">Died</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.died}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.titles)\">\n              <td class=\"heading-singlematch\">Title</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.titles.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.aliases)\">\n              <td class=\"heading-singlematch\">Aliases</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.aliases.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.father)\">\n              <td class=\"heading-singlematch\">Father</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.father}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.mother)\">\n              <td class=\"heading-singlematch\" >Mother</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.mother}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.spouse)\">\n              <td class=\"heading-singlematch\">Spouse</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{charater.spouse}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.allegiances)\">\n              <td class=\"heading-singlematch\">Allegiances</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.allegiances.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.books)\">\n              <td class=\"heading-singlematch\">Books</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.books.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.povBooks)\">\n              <td class=\"heading-singlematch\">Pov Books</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.povBooks.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.playedBy)\">\n              <td class=\"heading-singlematch\">Played By</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.playedBy.toString()}}</span>\n              </td>\n\n            </tr>\n            <tr *ngIf=\"checkValue(character.tvSeries)\">\n              <td class=\"heading-singlematch\">TvSeries</td>\n              <td>\n                <span class=\"text-success value-singlematch\">{{character.tvSeries.toString()}}</span>\n              </td>\n\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <!--COLUMN END-->\n    </div>\n    <!--ROW END-->\n  </div>\n  <!-- House section end -->\n\n</div>\n<!--CONTAINER END-->\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services.service */ "./src/app/services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_route, router, series, location) {
        var _this = this;
        this._route = _route;
        this.router = router;
        this.series = series;
        this.location = location;
        this.character = []; //final data which is renedered in view(this stores that after coverting url value into name of category)
        this.allcharacter = []; // data is stored in this when it comes from api
        this.house = [];
        this.myHouse = [];
        this.book = [];
        this.mybook = [];
        //method to  set variable acording to return object
        this.setVariabl = function (name, data) {
            if (name == "characters") {
                _this.allcharacter = data;
                _this.character = _this.getDetails(_this.allcharacter);
            }
            else if (name == "books") {
                _this.mybook = data;
                _this.book = _this.getDetails(_this.mybook);
            }
            else if (name == "houses") {
                _this.myHouse = data;
                _this.house = _this.getDetails(_this.myHouse);
            }
        };
        //check null value
        this.checkValue = function (value) {
            if (value.length != 0 && value[0] !== "") {
                return true;
            }
            else {
                return false;
            }
        };
        //* *  //method to get all details of string url which is in arrays in property 
        this.getDetails = function (mydata) {
            var _loop_1 = function (i) {
                if (_this.checkValue(mydata[i])) {
                    if (typeof (mydata[i]) == "string" && mydata[i].search('https') > -1) {
                        _this.series.getviewDetail(mydata[i]).subscribe(function (data) {
                            mydata[i] = data.name;
                        }, function (error) {
                            console.log(error.errorMessage);
                        });
                    }
                    if (Array.isArray(mydata[i]) && mydata[i][0].search('https') > -1) {
                        var dataName_1 = [];
                        for (var _i = 0, _a = mydata[i]; _i < _a.length; _i++) {
                            var singleUrl = _a[_i];
                            _this.series.getviewDetail(singleUrl).subscribe(function (data) {
                                dataName_1.push(data.name);
                            }, function (error) {
                                console.log(error.errorMessage);
                            });
                        }
                        mydata[i] = dataName_1;
                    }
                }
            };
            for (var i in mydata) {
                _loop_1(i);
            }
            return mydata;
        }; //end
        this.goBack = function () {
            _this.location.back();
        };
        console.log("Detail component called");
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this._route.snapshot.paramMap.get('entityName');
        var id = this._route.snapshot.paramMap.get('id');
        this.all = this.series.getCategory(name, id).subscribe(//for getting single category
        function (//for getting single category
        data) {
            _this.all = data;
            _this.setVariabl(name, _this.all);
        }, function (error) {
            console.log(error.errorMessage);
            alert("Some error occurs");
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nhr.small {\n    max-width: 180px;\n    margin: 15px auto;\n    border-width: 4px;\n    border-color: rgb(0, 255, 13);\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"maindiv\" style=\"background-image: url('assets/blur.jpg');\">\n<div class=\"container\">\n  <div class=\"row mb-3\">\n    <div class=\"col-12 text-center\">\n        <hr class=\"small\">\n      <p class=\"btn btn-danger btn-md\">Search</p>\n\n    </div>\n  </div>\n  <div class=\"row mb-5\">\n    <div class=\"col-4\">\n      <form #myForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label id=\"label-set\">Choose Order:</label>\n          <select [(ngModel)]=\"inputValue\" name=\"inputVal\" class=\"form-control\">\n            <option value=\"ascending\" [selected]>Ascending</option>\n            <option value=\"descending\">Descending</option>\n\n          </select>\n        </div>\n      </form>\n\n    </div>\n    <div class=\"col-4\">\n      <form #myForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label id=\"label-set\">Choose Category:</label>\n          <select [(ngModel)]=\"categoryValue\" name=\"category\" class=\"form-control\">\n            <option value=\"Select\" [selected]>Select</option>\n            <option value=\"characters\">Characters</option>\n\n            <option value=\"books\">Books</option>\n            <option value=\"houses\">Houses</option>\n\n          </select>\n        </div>\n      </form>\n\n    </div>\n    <div class=\"col-4\">\n      <form #myForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label id=\"label-set\">Filter by Name:</label>\n          <input type=\"text\" name=\"textVal\" [(ngModel)]=\"textValue\" class=\"form-control\">\n        </div>\n      </form>\n\n    </div>\n  </div>\n <div class=\"row\">\n\n    <div *ngFor=\"let single of final | sortingpipes:[inputValue,categoryValue,textValue] |  paginate: { itemsPerPage: 10, currentPage: p }; let i = index\"\n      id=\"set\">\n      <div *ngIf=\"single.url.search('books')>-1\">\n        <div class=\"col-lg-12 mb-4\">\n          <div class=\"card \">\n            <img class=\"card-img-top\" src=\"assets/book.jpeg\" style=\"width:228px;height:228px\" alt=\"Card image\">\n            <div class=\"card-body bg-success\">\n              <p class=\"card-title color-adjust\">{{capital(single.name)}}</p>\n\n              <a [routerLink]=\"['/detail','books',getId(single.url)]\" class=\"btn btn-secondary\">See More</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"single.url.search('characters')>-1\">\n        <div class=\"col-lg-12 mb-4\">\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"assets/person.png\" style=\"width:228px;height:228px\" alt=\"Card image\">\n            <div class=\"card-body bg-info\">\n\n              <p class=\"card-title color-adjust\">{{capital(single.name)}}</p>\n\n              <a [routerLink]=\"['/detail','characters',getId(single.url)]\" class=\"btn btn-success\">See More</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"single.url.search('houses')>-1\">\n        <div class=\"col-lg-12 mb-4\">\n          <div class=\"card\">\n            <img class=\"card-img-top\" src=\"assets/houses.svg\" style=\"width:228px;height:228px\" alt=\"Card image\">\n            <div class=\"card-body bg-danger\">\n              <p class=\"card-title color-adjust\">{{capital(single.name)}}</p>\n\n              <a [routerLink]=\"['/detail','houses',getId(single.url)]\" class=\"btn btn-primary\">See More</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"text-center mt-5\">\n    <pagination-controls (pageChange)=\"p = $event\" autoHide=\"true\" previousLabel=\"Go Back\" nextLabel=\"Go Ahead\"></pagination-controls>\n  </div>\n</div> \n</div>"

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
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services.service */ "./src/app/services.service.ts");
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
    function HomeComponent(sdata) {
        var _this = this;
        this.sdata = sdata;
        this.allData = [];
        this.setChar = [];
        this.inputValue = "ascending";
        this.categoryValue = "Select";
        this.textValue = "";
        this.p = 1;
        // method to concat all data in one variable
        this.all = function (data) {
            _this.allData.push(data);
            _this.final = [].concat.apply([], _this.allData);
        };
        //for getting id of categories like character,house,books
        this.getId = function (a) {
            var pos = a.lastIndexOf('/');
            var id = a.substr(pos + 1);
            return id;
        }; //end
        // To store alias name in character name which is empty
        this.setCharName = function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var character = data_1[_i];
                if (character.name.length == 0) {
                    character.name = character.aliases[0];
                }
            }
            return data;
        };
        //for making first letter capital
        this.capital = function (a) {
            return a.charAt(0).toUpperCase() + a.slice(1);
        }; //end
        console.log("Home component called");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.books = this.sdata.getBooks().subscribe(//this is getting book data
        function (//this is getting book data
        data) {
            _this.books = data;
            _this.all(_this.books);
        }, function (error) {
            console.log(error.errorMessage);
            alert("some error occurs");
        });
        this.houses = this.sdata.getHouse().subscribe(//this is getting house data
        function (//this is getting house data
        data) {
            _this.houses = data;
            _this.all(_this.houses);
        }, function (error) {
            console.log(error.errorMessage);
            alert("some error occurs");
        });
        this.character = this.sdata.getCharacter().subscribe(//this is getting character data
        function (//this is getting character data
        data) {
            _this.character = data;
            _this.setChar = _this.setCharName(_this.character);
            _this.all(_this.setChar);
        }, function (error) {
            console.log(error.errorMessage);
            alert("some error occurs");
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/error.jpg\">"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services.service.ts":
/*!*************************************!*\
  !*** ./src/app/services.service.ts ***!
  \*************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesService = /** @class */ (function () {
    function ServicesService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = "https://anapioficeandfire.com/api";
        //method to get all houses
        this.getHouse = function () {
            var response = _this._http.get(_this.baseUrl + '/houses');
            return response;
        };
        //method to get all books
        this.getBooks = function () {
            var response = _this._http.get(_this.baseUrl + '/books');
            return response;
        };
        //method to get specific category for single page view
        this.getCategory = function (entityName, id) {
            var response = _this._http.get(_this.baseUrl + '/' + entityName + '/' + id);
            return response;
        };
        //method to get all characters
        this.getCharacter = function () {
            var response = _this._http.get(_this.baseUrl + '/characters');
            return response;
        };
        //method to get character info which is present in array of urls
        this.getviewDetail = function (myUrl) {
            var response = _this._http.get("" + myUrl);
            return response;
        };
        console.log("Here service called");
    }
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServicesService);
    return ServicesService;
}());



/***/ }),

/***/ "./src/app/sortingpipes.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/sortingpipes.pipe.ts ***!
  \**************************************/
/*! exports provided: SortingpipesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingpipesPipe", function() { return SortingpipesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortingpipesPipe = /** @class */ (function () {
    function SortingpipesPipe() {
    }
    SortingpipesPipe.prototype.transform = function (array, args) {
        if (array == null) {
            return null;
        }
        if (args[1] == "Select" && args[2].length == 0) {
            var finalvalue = sorting(array);
            return finalvalue;
        }
        if (args[1] != "Select" && args[2].length == 0) {
            var newArray = array.filter(function (val) {
                return val['url'].search(args[1]) > -1;
            });
            var finalData = sorting(newArray);
            return finalData;
        }
        //end
        //next condition
        if (args[1] == "Select" && args[2].length != 0) {
            var newArray = array.filter(function (val) {
                var A = val['name'].toLowerCase();
                var B = args[2].toLowerCase();
                return A.search(B) > -1;
            });
            var finalData = sorting(newArray);
            return finalData;
        } //end
        //net condition if both text field and select boks,characters,house is selected
        if (args[1] != "Select" && args[2].length != 0) {
            var newArray = array.filter(function (val) {
                var A = val['name'].toLowerCase();
                var B = args[2].toLowerCase();
                return val['url'].search(args[1]) > -1 && A.search(B) > -1;
            });
            var finalData = sorting(newArray);
            return finalData;
        }
        //Function for sorting in ascending and descending order
        function sorting(myArray) {
            if (args[0] == "ascending") {
                myArray.sort(function (a, b) {
                    var A = a['name'].toLowerCase();
                    var B = b['name'].toLowerCase();
                    return (A < B) ? -1 : (A > B) ? 1 : 0;
                });
                return myArray;
            }
            if (args[0] == "descending") {
                myArray.sort(function (a, b) {
                    var A = a['name'].toLowerCase();
                    var B = b['name'].toLowerCase();
                    return (A > B) ? -1 : (A < B) ? 1 : 0;
                });
                return myArray;
            }
        } //end
    };
    SortingpipesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortingpipes'
        })
    ], SortingpipesPipe);
    return SortingpipesPipe;
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

module.exports = __webpack_require__(/*! /home/pratap/Desktop/NewAngular1/myAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map