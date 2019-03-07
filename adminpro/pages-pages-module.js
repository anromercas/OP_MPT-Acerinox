(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/models/sdr.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/sdr.model.ts ***!
  \*************************************/
/*! exports provided: Sdr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sdr", function() { return Sdr; });
var Sdr = /** @class */ (function () {
    function Sdr(_id, 
    // public codigo?: string,
    zona, grupo, nombre, descripcion, probabilidad, exposicion, gravedad, poblacion_en_riesgo, visibilidad, concreto, creado_por, estado, fecha, departamento, coste, img) {
        this._id = _id;
        this.zona = zona;
        this.grupo = grupo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.probabilidad = probabilidad;
        this.exposicion = exposicion;
        this.gravedad = gravedad;
        this.poblacion_en_riesgo = poblacion_en_riesgo;
        this.visibilidad = visibilidad;
        this.concreto = concreto;
        this.creado_por = creado_por;
        this.estado = estado;
        this.fecha = fecha;
        this.departamento = departamento;
        this.coste = coste;
        this.img = img;
    }
    return Sdr;
}());



/***/ }),

/***/ "./src/app/pages/busqueda/busqueda.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated bounceInRight\" *ngIf=\"cargando\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"alert alert-warning text-center\">\r\n        <strong>Cargando</strong>\r\n        <br>\r\n        <i class=\"fa fa-refresh fa-spin fa-2x\"></i>\r\n        <br>\r\n        <span>Espere por favor</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"row\" *ngIf=\"!cargando\">\r\n  <div class=\"card col-md-12\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Usuarios</h4>\r\n        <table class=\"table table-hover\" *ngIf=\"usuarios.length > 0\">\r\n          <tbody>\r\n            <tr *ngFor=\"let usuario of usuarios\"\r\n                [routerLink]=\"['/usuarios']\" class=\"pointer\">\r\n              <td>\r\n                <img [src]=\"usuario.img | imagen\" class=\"img-50 img-circle\">\r\n              </td>\r\n              <td> {{ usuario.nombre }} </td>\r\n              <td> {{ usuario.apellido }} </td>\r\n              <td> {{ usuario.email }} </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"alert alert-info\" *ngIf=\"usuarios.length === 0\"> No hay registros</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card col-md-12\" *ngIf=\"!cargando\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Situaciones de Riesgo</h4>\r\n        <table class=\"table table-hover\" *ngIf=\"sdr.length > 0\">\r\n            <thead>\r\n                <tr>\r\n                  <th>Imagen</th>\r\n                  <th>Nombre</th>\r\n                  <th>Fecha</th>\r\n                  <th>Departamento</th>\r\n                  <th>Estado</th>\r\n                  <th>probabilidad</th>\r\n                  <th>exposicion</th> \r\n                  <th>coste</th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let sdr of sdrs\"\r\n            [routerLink]=\"['/sdr', sdr._id]\" class=\"pointer\">\r\n              <td>\r\n                <img [src]=\"sdr.img | imagen:'sdr'\" class=\"img-50 img-circle\">\r\n              </td>\r\n                  <td> {{ sdr.nombre }} </td>\r\n                  <td> {{ sdr.fecha }} </td>\r\n                  <td> {{ sdr.departamento }} </td>\r\n                  <td> {{ sdr.estado }} </td>\r\n                  <td> {{ sdr.probabilidad }} </td>\r\n                  <td> {{ sdr.exposicion }} </td>\r\n                  <td> {{ sdr.coste }} </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"alert alert-info\" *ngIf=\"sdr.length === 0\"> No hay registros</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card col-md-12\" *ngIf=\"!cargando\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Soluciones Ideales</h4>\r\n        <table class=\"table table-hover\" *ngIf=\"ideal.length > 0\">\r\n            <thead>\r\n                <tr>\r\n                  <th>Imagen</th>\r\n                  <th>Nombre</th>\r\n                  <th>Fecha</th>\r\n                  <th>Departamento</th>\r\n                  <th>Estado</th>\r\n                  <th>probabilidad</th>\r\n                  <th>exposicion</th> \r\n                  <th>coste</th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let ideal of ideales\"\r\n            [routerLink]=\"['/ideal', ideal._id]\" class=\"pointer\">\r\n              <td>\r\n                <img [src]=\"ideal.img | imagen:'ideal'\" class=\"img-50 img-circle\">\r\n              </td>\r\n                  <td> {{ ideal.nombre }} </td>\r\n                  <td> {{ ideal.fecha }} </td>\r\n                  <td> {{ ideal.departamento }} </td>\r\n                  <td> {{ ideal.estado }} </td>\r\n                  <td> {{ ideal.probabilidad }} </td>\r\n                  <td> {{ ideal.exposicion }} </td>\r\n                  <td> {{ ideal.coste }} </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"alert alert-info\" *ngIf=\"ideal.length === 0\"> No hay registros</div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/busqueda/busqueda.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/busqueda/busqueda.component.ts ***!
  \******************************************************/
/*! exports provided: BusquedaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaComponent", function() { return BusquedaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusquedaComponent = /** @class */ (function () {
    function BusquedaComponent(activatedRoute, http) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.usuarios = [];
        this.sdrs = [];
        this.ideales = [];
        this.cargando = true;
        activatedRoute.params.subscribe(function (params) {
            var termino = params['termino'];
            _this.buscar(termino);
        });
    }
    BusquedaComponent.prototype.ngOnInit = function () {
    };
    BusquedaComponent.prototype.buscar = function (termino) {
        var _this = this;
        var url = _config_config__WEBPACK_IMPORTED_MODULE_3__["URL_SERVICIOS"] + '/busqueda/todo/' + termino;
        this.http.get(url).subscribe(function (resp) {
            console.log(resp);
            _this.usuarios = resp.usuarios;
            _this.sdrs = resp.sdrs;
            _this.cargando = false;
        });
    };
    BusquedaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-busqueda',
            template: __webpack_require__(/*! ./busqueda.component.html */ "./src/app/pages/busqueda/busqueda.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BusquedaComponent);
    return BusquedaComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
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
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/ideales/ideal.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/ideales/ideal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ideal works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/ideales/ideal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/ideales/ideal.component.ts ***!
  \**************************************************/
/*! exports provided: IdealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdealComponent", function() { return IdealComponent; });
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

var IdealComponent = /** @class */ (function () {
    function IdealComponent() {
    }
    IdealComponent.prototype.ngOnInit = function () {
    };
    IdealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ideal',
            template: __webpack_require__(/*! ./ideal.component.html */ "./src/app/pages/ideales/ideal.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], IdealComponent);
    return IdealComponent;
}());



/***/ }),

/***/ "./src/app/pages/ideales/ideales.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/ideales/ideales.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated bounceInDown\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n  \r\n          <input (keyup)=\"buscarSdr( input.value )\" #input type=\"text\" class=\"form-control\" placeholder=\"Buscar solución de ideal...\">\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row animated bounceInRight\" *ngIf=\"cargando\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"alert alert-warning text-center\">\r\n          <strong>Cargando</strong>\r\n          <br>\r\n          <i class=\"fa fa-refresh fa-spin fa-2x\"></i>\r\n          <br>\r\n          <span>Espere por favor</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row animated fadeIn\" *ngIf=\"!cargando\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n\r\n              <div class=\"text-right\">\r\n                  <button type=\"button\" class=\"btn btn-rounded btn-outline-success\">\r\n                    <i class=\"fa fa-plus\"> Crear Solución Ideal</i>\r\n                  </button>\r\n              </div>\r\n\r\n      \r\n              <h3 class=\"cardtitle\">Soluciones Ideales creadas ( <small> {{ totalRegistros }} </small> ) </h3>\r\n    \r\n              <table class=\"table table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Imagen</th>\r\n                    <th>Nombre</th>\r\n                    <th>Descripcion</th>\r\n                    <th>Departamento</th>\r\n                    <th>Responsable</th>\r\n                    <th>Estado</th>\r\n                    <th></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let ideal of ideales\">\r\n                    <td class=\"w70\" > \r\n                        <img (click)=\"mostrarModal( ideal._id )\" [src]=\"ideal.img | imagen:'ideal'\" class=\"img-50 pointer\" > \r\n                    </td>\r\n                    <td> {{ ideal.nombre }} </td>\r\n                    <td> {{ ideal.descripcion }} </td>\r\n                    <td> {{ ideal.departamento_implicado }} </td>\r\n                    <td> {{ ideal.responsable.nombre + ' ' + ideal.responsable.apellido }} </td>\r\n                    <td> {{ ideal.estado }} </td>\r\n\r\n                    <td></td>\r\n                    <td>\r\n                        <button (click)=\"editarIdeal( ideal )\" class=\"btn btn-primary\">\r\n                            <i class=\"fa fa-edit\"> Editar</i>\r\n                          </button>\r\n                      <!-- <button (click)=\"guardarSdr( sdr )\" class=\"btn btn-primary\">\r\n                        <i class=\"fa fa-save\"></i>\r\n                      </button> -->\r\n                      <button (click)=\"borrarIdeal( ideal )\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\"> Borrar</i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n                <button (click)=\"cambiarDesde(-5)\" class=\"btn btn-secondary\">Anteriores</button>\r\n                <button (click)=\"cambiarDesde(5)\" class=\"btn btn-secondary\">Siguientes</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/pages/ideales/ideales.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/ideales/ideales.component.ts ***!
  \****************************************************/
/*! exports provided: IdealesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdealesComponent", function() { return IdealesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_modal_upload_modal_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal-upload/modal-upload.service */ "./src/app/components/modal-upload/modal-upload.service.ts");
/* harmony import */ var _services_service_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service.index */ "./src/app/services/service.index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdealesComponent = /** @class */ (function () {
    function IdealesComponent(_idealService, _modalUploadService) {
        this._idealService = _idealService;
        this._modalUploadService = _modalUploadService;
        this.ideales = [];
        this.desde = 0;
        this.cargando = true;
        this.totalRegistros = 0;
    }
    IdealesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarIdeales();
        this._modalUploadService.notificacion
            .subscribe(function (resp) { return _this.cargarIdeales(); });
    };
    IdealesComponent.prototype.mostrarModal = function (id) {
        this._modalUploadService.mostarModal('ideales', id);
    };
    IdealesComponent.prototype.cargarIdeales = function () {
        var _this = this;
        this.cargando = true;
        this._idealService.cargarIdeales(this.desde)
            .subscribe(function (resp) {
            _this.totalRegistros = resp.total;
            _this.ideales = resp.ideales;
            _this.cargando = false;
        });
    };
    IdealesComponent.prototype.cambiarDesde = function (valor) {
        var desde = this.desde + valor;
        if (desde >= this.totalRegistros) {
            return;
        }
        if (desde < 0) {
            return;
        }
        this.desde += valor;
        this.cargarIdeales();
    };
    IdealesComponent.prototype.buscarSdr = function (termino) {
        var _this = this;
        if (termino.length <= 0) {
            this.cargarIdeales();
            return;
        }
        this.cargando = true;
        this._idealService.buscarIdeal(termino)
            .subscribe(function (ideales) {
            _this.ideales = ideales;
            _this.cargando = false;
        });
    };
    IdealesComponent.prototype.borrarIdeal = function (ideal) {
        var _this = this;
        swal({
            title: '¿Está seguro?',
            text: 'Está a punto de borrar la SDR con el nombre: ' + ideal.nombre,
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        })
            .then(function (borrar) {
            if (borrar) {
                _this._idealService.borrarIdeal(ideal._id)
                    .subscribe(function (borrado) {
                    console.log(borrado);
                    _this.cargarIdeales();
                });
            }
        });
    };
    IdealesComponent.prototype.guardarIdeal = function (ideal) {
        this._idealService.actualizarIdeal(ideal)
            .subscribe();
    };
    IdealesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ideales',
            template: __webpack_require__(/*! ./ideales.component.html */ "./src/app/pages/ideales/ideales.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_service_index__WEBPACK_IMPORTED_MODULE_2__["IdealService"],
            _components_modal_upload_modal_upload_service__WEBPACK_IMPORTED_MODULE_1__["ModalUploadService"]])
    ], IdealesComponent);
    return IdealesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _sdrs_sdr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sdrs/sdr.component */ "./src/app/pages/sdrs/sdr.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "./src/app/pages/usuarios/usuarios.component.ts");
/* harmony import */ var _sdrs_sdrs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sdrs/sdrs.component */ "./src/app/pages/sdrs/sdrs.component.ts");
/* harmony import */ var _ideales_ideales_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ideales/ideales.component */ "./src/app/pages/ideales/ideales.component.ts");
/* harmony import */ var _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./busqueda/busqueda.component */ "./src/app/pages/busqueda/busqueda.component.ts");
/* harmony import */ var _ideales_ideal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ideales/ideal.component */ "./src/app/pages/ideales/ideal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Rutas

// Modulos


// Pipes Module

// Componentes








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                // PagesComponent,
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _sdrs_sdr_component__WEBPACK_IMPORTED_MODULE_7__["SdrComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_9__["UsuariosComponent"],
                // ModalUploadComponent,
                _sdrs_sdrs_component__WEBPACK_IMPORTED_MODULE_10__["SdrsComponent"],
                _ideales_ideales_component__WEBPACK_IMPORTED_MODULE_11__["IdealesComponent"],
                _ideales_ideal_component__WEBPACK_IMPORTED_MODULE_13__["IdealComponent"],
                _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_12__["BusquedaComponent"]
            ],
            exports: [
                // PagesComponent,
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _sdrs_sdr_component__WEBPACK_IMPORTED_MODULE_7__["SdrComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _pages_routes__WEBPACK_IMPORTED_MODULE_2__["PAGES_ROUTES"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                // ChartsModule
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/*! exports provided: PAGES_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES_ROUTES", function() { return PAGES_ROUTES; });
/* harmony import */ var _services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/guards/admin.guard */ "./src/app/services/guards/admin.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _sdrs_sdr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdrs/sdr.component */ "./src/app/pages/sdrs/sdr.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios/usuarios.component */ "./src/app/pages/usuarios/usuarios.component.ts");
/* harmony import */ var _sdrs_sdrs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sdrs/sdrs.component */ "./src/app/pages/sdrs/sdrs.component.ts");
/* harmony import */ var _ideales_ideal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ideales/ideal.component */ "./src/app/pages/ideales/ideal.component.ts");
/* harmony import */ var _ideales_ideales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ideales/ideales.component */ "./src/app/pages/ideales/ideales.component.ts");
/* harmony import */ var _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./busqueda/busqueda.component */ "./src/app/pages/busqueda/busqueda.component.ts");
/* harmony import */ var _services_guards_verifica_token_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/guards/verifica-token.guard */ "./src/app/services/guards/verifica-token.guard.ts");











var pagesRoutes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_services_guards_verifica_token_guard__WEBPACK_IMPORTED_MODULE_10__["VerificaTokenGuard"]],
        data: { titulo: 'Tablero' }
    },
    { path: 'sdr', component: _sdrs_sdr_component__WEBPACK_IMPORTED_MODULE_3__["SdrComponent"], data: { titulo: 'Situaciones de Riesgo' } },
    { path: 'perfil', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], data: { titulo: 'Perfil de Usuario' } },
    { path: 'busqueda/:termino', component: _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_9__["BusquedaComponent"], data: { titulo: 'Buscador' } },
    // Mantenimiento
    {
        path: 'usuarios',
        component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_5__["UsuariosComponent"],
        canActivate: [_services_guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__["AdminGuard"]],
        data: { titulo: 'Mantenimiento de Usuarios' }
    },
    { path: 'sdrs', component: _sdrs_sdrs_component__WEBPACK_IMPORTED_MODULE_6__["SdrsComponent"], data: { titulo: 'Mantenimiento de Situaciones de Riesgo' } },
    { path: 'sdr/:id', component: _sdrs_sdr_component__WEBPACK_IMPORTED_MODULE_3__["SdrComponent"], data: { titulo: 'Crear Situación de Riesgo' } },
    { path: 'ideales', component: _ideales_ideales_component__WEBPACK_IMPORTED_MODULE_8__["IdealesComponent"], data: { titulo: 'Mantenimiento de Soluciones de Ideales' } },
    { path: 'ideal/:id', component: _ideales_ideal_component__WEBPACK_IMPORTED_MODULE_7__["IdealComponent"], data: { titulo: 'Crear Solución de Ideal' } },
    { path: 'parciales', component: _sdrs_sdrs_component__WEBPACK_IMPORTED_MODULE_6__["SdrsComponent"], data: { titulo: 'Mantenimiento de Soluciones de Parciales' } },
    { path: 'parches', component: _sdrs_sdrs_component__WEBPACK_IMPORTED_MODULE_6__["SdrsComponent"], data: { titulo: 'Mantenimiento de Soluciones de Parches' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
var PAGES_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pagesRoutes);


/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated zoomIn\">\r\n  <div class=\"col-lg-7\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Perfil del usuario</h4>\r\n        <h6 class=\"card-subtitle\">{{ usuario.email }}</h6>\r\n\r\n        <form ngNativeValidate #f=\"ngForm\" (ngSubmit)=\"guardar( f.value )\" class=\"form p-t-20\">\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputuname\">Nombre</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-addon\"><i class=\"ti-user\"></i></div>\r\n              <input [ngModel]=\"usuario.nombre\" name=\"nombre\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Nombre\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputuname\">Apellido</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-addon\"><i class=\"ti-user\"></i></div>\r\n              <input [ngModel]=\"usuario.apellido\" name=\"apellido\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Apellido\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputuname\">Segundo Apellido</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-addon\"><i class=\"ti-user\"></i></div>\r\n              <input [ngModel]=\"usuario.segundoapellido\" name=\"segundoapellido\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Segundo Apellido\" required>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email address</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-addon\"><i class=\"ti-email\"></i></div>\r\n              <input [ngModel]=\"usuario.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\" required>\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-success waves-effect waves-light m-r-10\"><i class=\"fa fa-save\"> Guardar</i></button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-5\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\" align=\"center\">\r\n        <h4 class=\"card-title\">Imagen del usuario</h4>\r\n        <h6 class=\"card-subtitle\">Nombre del Usuario</h6>\r\n        \r\n        <img *ngIf=\"!imagenTemp\" [src]=\"usuario.img | imagen\" class=\"w150\">\r\n        <img *ngIf=\"imagenTemp\" [src]=\"imagenTemp\" class=\"w150\">\r\n\r\n        <input (change)=\"seleccionImange( $event.target.files[0] )\" type=\"file\" >\r\n\r\n        <br>\r\n        <br>\r\n\r\n        <button (click)=\"cambiarImagen()\" [disabled]=\"!imagenSubir\" type=\"button\" class=\"btn btn-success btn-block waves-effect waves-light m-r-10\"><i class=\"fa fa-save\"> Actualizar foto</i></button>\r\n          \r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/usuario/usuario.service */ "./src/app/services/usuario/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.usuario = this._usuarioService.usuario;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.guardar = function (usuario) {
        this.usuario.nombre = usuario.nombre;
        this.usuario.email = usuario.email;
        this._usuarioService.actualizarUsuario(this.usuario)
            .subscribe(function (resp) {
        });
    };
    ProfileComponent.prototype.seleccionImange = function (archivo) {
        var _this = this;
        if (!archivo) {
            this.imagenSubir = null;
            return;
        }
        if (archivo.type.indexOf('image') < 0) {
            swal('Solo imágenes', 'El archivo seleccionado no es una imgane', 'error');
            this.imagenSubir = null;
            return;
        }
        this.imagenSubir = archivo;
        var reader = new FileReader();
        var urlImagenTemp = reader.readAsDataURL(archivo);
        reader.onloadend = function () {
            _this.imagenTemp = reader.result.toString();
        };
    };
    ProfileComponent.prototype.cambiarImagen = function () {
        this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/sdrs/sdr.component.html":
/*!***********************************************!*\
  !*** ./src/app/pages/sdrs/sdr.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated zoomIn\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card card-body\">\r\n            <div class=\"text-left\">\r\n                <button routerLink=\"/sdrs\" type=\"button\" class=\"btn btn-rounded btn-outline-warning\">\r\n                    <i class=\"fa fa-rotate-left\"> Atrás</i>\r\n                </button>\r\n            </div>\r\n            <br>\r\n            <h3 class=\"box-title m-b-0\">Crear Situación de Riesgo</h3>\r\n            <p class=\"text-muted m-b-30 font-13\"> {{_usuarioService.usuario.nombre + ' ' + _usuarioService.usuario.apellido}}\r\n                Está creando una Situación de Riesgo\r\n            </p>\r\n            <div class=\"row\">\r\n                    <p>Hoy es {{today | date}}</p>\r\n                <div class=\"col-sm-12 col-xs-12\">\r\n                    <form [formGroup]=\"forma\" ngNativeValidate (ngSubmit)=\"guardarSdr()\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-8\">\r\n                                <label for=\"nombre\">Nombre de la situación</label>\r\n                                <input formControlName=\"nombre\" type=\"text\" class=\"form-control\" name=\"nombre\" placeholder=\"Nombre\">\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"estado\">Estado</label>\r\n                                <select formControlName=\"estado\" name=\"estado\" class=\"form-control\">\r\n                                    <option value=\"\">-- selecciona una opción --</option>\r\n                                    <option value=\"BORRADOR\">BORRADOR</option>\r\n                                    <option value=\"VALIDACION\">VALIDACION</option>\r\n                                    <option value=\"EN CREACION\">EN CREACION</option>\r\n                                    <option value=\"PENDIENTE APROBACION\">PENDIENTE APROBACION</option>\r\n                                    <option value=\"TERMINADO\">TERMINADO</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-8\">\r\n                                <label for=\"descripcion\">Descripción</label>\r\n                                <textarea formControlName=\"descripcion\" rows=\"10\" class=\"form-control\" name=\"descripcion\" placeholder=\"Descripción\"></textarea>\r\n                            </div>\r\n\r\n                            \r\n                                <div class=\"col-md-4\">\r\n                                        <div class=\"card card-body\" >\r\n                                            <label for=\"imagen\">Subir Imagen</label><br>\r\n                                            <img (click)=\"cambiarImagen()\" [src]=\"sdr.img | imagen:'sdr'\" class=\"rounded img-fluid pointer \">\r\n                                            <!-- <input formControlName=\"imagen\"  name=\"imagen\" type=\"file\" id=\"input-file-now\" class=\"dropify\"> -->\r\n                                        </div>\r\n                                </div>\r\n                            \r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"creado_por\">Creado por</label> <br>\r\n                                <h3 type=\"text\" class=\"form-control\" name=\"creado_por\">{{ _usuarioService.usuario.nombre\r\n                                    + ' ' + _usuarioService.usuario.apellido }} </h3>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"fecha\">fecha</label>\r\n                                <div class=\"input-group date\">\r\n                                    <input formControlName=\"fecha\" type=\"text\" name=\"fecha\" class=\"form-control\" id=\"datepicker-autoclose\" placeholder=\"mm/dd/yyyy\">\r\n                                    <span class=\"input-group-addon\"><i class=\"icon-calender\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"grupo\">Grupo</label>\r\n                                <input formControlName=\"grupo\" type=\"text\" class=\"form-control\" name=\"grupo\" placeholder=\"grupo\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"departamento\">Departamento</label>\r\n                                <select formControlName=\"departamento\" name=\"departamento\" class=\"form-control\">\r\n                                    <option value=\"\">-- selecciona una opción --</option>\r\n                                    <option value=\"ACERIA\">ACERIA</option>\r\n                                    <option value=\"LC\">LAMINADO CALIENTE</option>\r\n                                    <option value=\"LF\">LAMINADO FRIO</option>\r\n                                    <option value=\"M. MECÁNICO\">M. MECÁNICO</option>\r\n                                    <option value=\"M. ELÉCTRICO\">M. ELÉCTRICO</option>\r\n                                    <option value=\"SEG-MA\">SEG-MA</option>\r\n                                    <option value=\"TECNICO\">TECNICO</option>\r\n                                    <option value=\"S. INFO\">S. INFO</option>\r\n                                    <option value=\"ADMON\">ADMON</option>\r\n                                    <option value=\"PERSONAL\">PERSONAL</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"zona\">Zona</label>\r\n                                <input formControlName=\"zona\" type=\"text\" class=\"form-control\" name=\"zona\" placeholder=\"Zona\">\r\n                            </div>\r\n\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"probabilidad\">Probabilidad</label>\r\n                                <select formControlName=\"probabilidad\" name=\"probabilidad\" class=\"form-control\">\r\n                                        <option value=\"\">-- selecciona una opción --</option>\r\n                                        <option value=\"TODA PROBABILIDAD\">TODA PROBABILIDAD</option>\r\n                                        <option value=\"POSIBLEMENTE\">POSIBLEMENTE</option>\r\n                                        <option value=\"ESCASA\">ESCASA</option>\r\n                                        <option value=\"MUY RARA\">MUY RARA</option>\r\n                                        <option value=\"NUNCA HA OCURRIDO\">NUNCA HA OCURRIDO</option>\r\n                                        <option value=\"PRACTICAMENTE IMPOSIBLE\">PRACTICAMENTE IMPOSIBLE</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"exposicion\">Exposicion</label>\r\n                                <select formControlName=\"exposicion\" name=\"exposicion\" class=\"form-control\">\r\n                                        <option value=\"\">-- selecciona una opción --</option>\r\n                                        <option value=\"MUY ALTA\">MUY ALTA</option>\r\n                                        <option value=\"ALTA\">ALTA</option>\r\n                                        <option value=\"OCASIONAL\">OCASIONAL</option>\r\n                                        <option value=\"IRREGULARMENTE\">IRREGULARMENTE</option>\r\n                                        <option value=\"RARA\">RARA</option>\r\n                                        <option value=\"REMOTA\">REMOTA</option>\r\n                                </select>\r\n\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"gravedad\">Gravedad</label>\r\n                                <select formControlName=\"gravedad\" name=\"gravedad\" class=\"form-control\">\r\n                                    <option value=\"\">-- selecciona una opción --</option>\r\n                                    <option value=\"CATASTROFE\">CATASTROFE</option>\r\n                                    <option value=\"VARIAS MUERTES\">VARIAS MUERTES</option>\r\n                                    <option value=\"MUERTE\">MUERTE</option>\r\n                                    <option value=\"LESIONES MUY GRAVES\">LESIONES MUY GRAVES</option>\r\n                                    <option value=\"LESIONES CON BAJA\">LESIONES CON BAJA</option>\r\n                                    <option value=\"HERIDAS LEVES\">HERIDAS LEVES</option>\r\n                                </select>\r\n\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"poblacion_en_riesgo\">Poblacion en Riesgo</label>\r\n                                <select formControlName=\"poblacion_en_riesgo\" name=\"poblacion_en_riesgo\" class=\"form-control\">\r\n                                    <option value=\"\">-- selecciona una opción --</option>\r\n                                    <option value=\"TODA LA PLANTA\">TODA LA PLANTA</option>\r\n                                    <option value=\"1.000 A 2.000\">1.000 A 2.000</option>\r\n                                    <option value=\"300 A 1.000\">300 A 1.000</option>\r\n                                    <option value=\"100 A 300\">100 A 300</option>\r\n                                    <option value=\"50 A 100\">50 A 100</option>\r\n                                    <option value=\"MENOS DE 50\">MENOS DE 50</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"visibilidad\">Visibilidad</label>\r\n                                <select formControlName=\"visibilidad\" name=\"visibilidad\" class=\"form-control\">\r\n                                    <option value=\"\">-- selecciona una opción --</option>\r\n                                    <option value=\"MUY ALTA\">MUY ALTA</option>\r\n                                    <option value=\"ALTA\">ALTA</option>\r\n                                    <option value=\"MEDIA\">MEDIA</option>\r\n                                    <option value=\"BAJA\">BAJA</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"concreto\">Concreto</label>\r\n                                <div class=\"switch\">\r\n                                    <label>No\r\n                                    <input type=\"checkbox\" checked=\"\"><span class=\"lever\">\r\n                                    </span>Si</label>\r\n                                </div>\r\n                                <select formControlName=\"concreto\" name=\"concreto\" class=\"form-control\">\r\n                                    <option value=\"\">-- selecciona una opción --</option>\r\n                                    <option value=\"Si\">Si</option>\r\n                                    <option value=\"No\">No</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"coste\">Coste</label>\r\n                                <div class=\"input-group date\">\r\n                                    <input formControlName=\"coste\" type=\"number\" class=\"form-control\" name=\"coste\" placeholder=\"Coste\">\r\n                                    <span class=\"input-group-addon\"><i class=\"fa fa-euro\"></i></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <button type=\"submit\" class=\"btn btn-success waves-effect waves-light m-r-10\"><i class=\"fa fa-save\">Guardar</i></button>\r\n                        <a routerLink=\"/sdrs\" class=\"btn btn-inverse waves-effect waves-light \">Cancel</a>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row animated zoomIn\" *ngIf=\"sdr._id\">\r\n    <div class=\"col-md-12\">\r\n            <div class=\"card card-body\" >\r\n                <label for=\"imagen\">Subir Imagen</label><br>\r\n                <img (click)=\"cambiarImagen()\" [src]=\"sdr.img | imagen:'sdr'\" class=\"rounded img-fluid pointer \">\r\n                <!-- <input formControlName=\"imagen\"  name=\"imagen\" type=\"file\" id=\"input-file-now\" class=\"dropify\"> -->\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/sdrs/sdr.component.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/sdrs/sdr.component.ts ***!
  \*********************************************/
/*! exports provided: SdrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdrComponent", function() { return SdrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_sdr_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/sdr.model */ "./src/app/models/sdr.model.ts");
/* harmony import */ var _services_service_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/service.index */ "./src/app/services/service.index.ts");
/* harmony import */ var _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuario/usuario.service */ "./src/app/services/usuario/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_modal_upload_modal_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modal-upload/modal-upload.service */ "./src/app/components/modal-upload/modal-upload.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SdrComponent = /** @class */ (function () {
    function SdrComponent(_sdrService, _usuarioService, _router, _modalUploadService, activatedRoute) {
        var _this = this;
        this._sdrService = _sdrService;
        this._usuarioService = _usuarioService;
        this._router = _router;
        this._modalUploadService = _modalUploadService;
        this.activatedRoute = activatedRoute;
        this.sdr = new _models_sdr_model__WEBPACK_IMPORTED_MODULE_2__["Sdr"]('', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', 0);
        // sdr: Sdr;
        this.today = Date.now();
        this.fecha = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('');
        activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.id !== 'nuevo') {
                _this.cargarSdr(_this.id);
            }
        });
    }
    SdrComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.fecha.transform);
        /* if ( this.id === 'nuevo' ) {
          console.log(this.id);
          this.forma.get('estado').setValue('BORRADOR');
        } */
        this._modalUploadService.notificacion
            .subscribe(function (resp) {
            _this.sdr.img = resp.sdr.img;
        });
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            grupo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            departamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            zona: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            probabilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            exposicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            gravedad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            poblacion_en_riesgo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            visibilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            concreto: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            coste: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.forma.setValue({
            nombre: 'Test ',
            estado: 'BORRADOR',
            descripcion: 'Test ',
            fecha: Date().toLocaleLowerCase(),
            grupo: '5b962b343ec55f42c0218d32',
            departamento: 'ACERIA',
            zona: 'Test ',
            probabilidad: 'ESCASA',
            exposicion: 'ALTA',
            gravedad: 'CATASTROFE',
            poblacion_en_riesgo: 'MENOS DE 50',
            visibilidad: 'ALTA',
            concreto: 'Si',
            coste: 1000
        });
    };
    SdrComponent.prototype.cambiarImagen = function () {
        this._modalUploadService.mostarModal('sdrs', this.sdr._id);
    };
    SdrComponent.prototype.cargarSdr = function (id) {
        var _this = this;
        this._sdrService.obtenerSdr(id)
            .subscribe(function (sdr) {
            _this.sdr = sdr;
            _this.forma.get('nombre').setValue(_this.sdr.nombre);
            _this.forma.get('descripcion').setValue(_this.sdr.descripcion);
            _this.forma.get('estado').setValue(_this.sdr.estado);
            _this.forma.get('fecha').setValue(_this.sdr.fecha);
            _this.forma.get('grupo').setValue(_this.sdr.grupo);
            _this.forma.get('departamento').setValue(_this.sdr.departamento);
            _this.forma.get('zona').setValue(_this.sdr.zona);
            _this.forma.get('probabilidad').setValue(_this.sdr.probabilidad);
            _this.forma.get('exposicion').setValue(_this.sdr.exposicion);
            _this.forma.get('gravedad').setValue(_this.sdr.gravedad);
            _this.forma.get('poblacion_en_riesgo').setValue(_this.sdr.poblacion_en_riesgo);
            _this.forma.get('visibilidad').setValue(_this.sdr.visibilidad);
            _this.forma.get('concreto').setValue(_this.sdr.concreto);
            _this.forma.get('coste').setValue(_this.sdr.coste);
        });
    };
    SdrComponent.prototype.guardarSdr = function () {
        var _this = this;
        var valor = this.forma.value;
        this.sdr = new _models_sdr_model__WEBPACK_IMPORTED_MODULE_2__["Sdr"](this.id, valor.zona, valor.grupo, valor.nombre, valor.descripcion, valor.probabilidad, valor.exposicion, valor.gravedad, valor.poblacion_en_riesgo, valor.visibilidad, valor.concreto, this._usuarioService.usuario._id, valor.estado, valor.fecha, valor.departamento, valor.coste);
        console.log(this.forma.value.fecha);
        this._sdrService.crearSdr(this.sdr)
            .subscribe(function (sdr) {
            _this.sdr._id = sdr._id;
            _this._router.navigate(['/sdrs']);
        });
    };
    SdrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sdr',
            template: __webpack_require__(/*! ./sdr.component.html */ "./src/app/pages/sdrs/sdr.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_service_index__WEBPACK_IMPORTED_MODULE_3__["SdrService"],
            _services_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _components_modal_upload_modal_upload_service__WEBPACK_IMPORTED_MODULE_6__["ModalUploadService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SdrComponent);
    return SdrComponent;
}());



/***/ }),

/***/ "./src/app/pages/sdrs/sdrs.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/sdrs/sdrs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated bounceInDown\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n  \r\n          <input (keyup)=\"buscarSdr( input.value )\" #input type=\"text\" class=\"form-control\" placeholder=\"Buscar situación de riesgo...\">\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row animated bounceInRight\" *ngIf=\"cargando\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"alert alert-warning text-center\">\r\n          <strong>Cargando</strong>\r\n          <br>\r\n          <i class=\"fa fa-refresh fa-spin fa-2x\"></i>\r\n          <br>\r\n          <span>Espere por favor</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row animated fadeIn\" *ngIf=\"!cargando\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n\r\n              <div class=\"text-right\">\r\n                  <button [routerLink]=\"['/sdr','nuevo']\" type=\"button\" class=\"btn btn-rounded btn-outline-success\">\r\n                    <i class=\"fa fa-plus\"> Crear Situación de Riesgo</i>\r\n                  </button>\r\n              </div>\r\n\r\n      \r\n              <h3 class=\"cardtitle\">Situaciones de Riesgo creadas ( <small> {{ totalRegistros }} </small> ) </h3>\r\n    \r\n              <table class=\"table table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Imagen</th>\r\n                    <th>Nombre</th>\r\n                    <th>Fecha</th>\r\n                    <th>Departamento</th>\r\n                    <th>Estado</th>\r\n                    <th>probabilidad</th>\r\n                    <th>exposicion</th> \r\n                    <th>coste</th>\r\n                    <th></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let sdr of sdrs\">\r\n                    <td class=\"w70\" > \r\n                        <img (click)=\"mostrarModal( sdr._id )\" [src]=\"sdr.img | imagen:'sdr'\" class=\"img-50 pointer\" > \r\n                    </td>\r\n                    <td> {{ sdr.nombre }} </td>\r\n                    <td> {{ sdr.fecha }} </td>\r\n                    <td> {{ sdr.departamento }} </td>\r\n                    <td> {{ sdr.estado }} </td>\r\n                    <td> {{ sdr.probabilidad }} </td>\r\n                    <td> {{ sdr.exposicion }} </td>\r\n                    <td> {{ sdr.coste }} </td>\r\n                    <td></td>\r\n                    <td>\r\n                        <button [routerLink]=\"['/sdr/', sdr._id ]\" class=\"btn btn-primary\">\r\n                            <i class=\"fa fa-edit\"></i>\r\n                          </button>\r\n                      <!-- <button (click)=\"guardarSdr( sdr )\" class=\"btn btn-primary\">\r\n                        <i class=\"fa fa-save\"></i>\r\n                      </button> -->\r\n                      <button (click)=\"borrarSdr( sdr )\" class=\"btn btn-danger\">\r\n                          <i class=\"fa fa-trash-o\"></i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n                <button (click)=\"cambiarDesde(-5)\" class=\"btn btn-secondary\">Anteriores</button>\r\n                <button (click)=\"cambiarDesde(5)\" class=\"btn btn-secondary\">Siguientes</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/pages/sdrs/sdrs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/sdrs/sdrs.component.ts ***!
  \**********************************************/
/*! exports provided: SdrsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SdrsComponent", function() { return SdrsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/service.index */ "./src/app/services/service.index.ts");
/* harmony import */ var _components_modal_upload_modal_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal-upload/modal-upload.service */ "./src/app/components/modal-upload/modal-upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SdrsComponent = /** @class */ (function () {
    function SdrsComponent(_sdrService, _modalUploadService) {
        this._sdrService = _sdrService;
        this._modalUploadService = _modalUploadService;
        this.sdrs = [];
        this.desde = 0;
        this.cargando = true;
        this.totalRegistros = 0;
    }
    SdrsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarSdrs();
        this._modalUploadService.notificacion
            .subscribe(function (resp) { return _this.cargarSdrs(); });
    };
    SdrsComponent.prototype.mostrarModal = function (id) {
        this._modalUploadService.mostarModal('sdrs', id);
    };
    SdrsComponent.prototype.cargarSdrs = function () {
        var _this = this;
        this.cargando = true;
        this._sdrService.cargarSdrs(this.desde)
            .subscribe(function (resp) {
            _this.totalRegistros = resp.total;
            _this.sdrs = resp.sdrs;
            _this.cargando = false;
        });
    };
    SdrsComponent.prototype.cambiarDesde = function (valor) {
        var desde = this.desde + valor;
        if (desde >= this.totalRegistros) {
            return;
        }
        if (desde < 0) {
            return;
        }
        this.desde += valor;
        this.cargarSdrs();
    };
    SdrsComponent.prototype.buscarSdr = function (termino) {
        var _this = this;
        if (termino.length <= 0) {
            this.cargarSdrs();
            return;
        }
        this.cargando = true;
        this._sdrService.buscarSdr(termino)
            .subscribe(function (sdrs) {
            _this.sdrs = sdrs;
            _this.cargando = false;
        });
    };
    SdrsComponent.prototype.borrarSdr = function (sdr) {
        var _this = this;
        swal({
            title: '¿Está seguro?',
            text: 'Está a punto de borrar la SDR con el nombre: ' + sdr.nombre,
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        })
            .then(function (borrar) {
            if (borrar) {
                _this._sdrService.borrarSdr(sdr._id)
                    .subscribe(function (borrado) {
                    console.log(borrado);
                    _this.cargarSdrs();
                });
            }
        });
    };
    SdrsComponent.prototype.guardarSdr = function (sdr) {
        this._sdrService.actualizarSdr(sdr)
            .subscribe();
    };
    SdrsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sdrs',
            template: __webpack_require__(/*! ./sdrs.component.html */ "./src/app/pages/sdrs/sdrs.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_service_index__WEBPACK_IMPORTED_MODULE_1__["SdrService"],
            _components_modal_upload_modal_upload_service__WEBPACK_IMPORTED_MODULE_2__["ModalUploadService"]])
    ], SdrsComponent);
    return SdrsComponent;
}());



/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row animated bounceInDown\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n\r\n        <input (keyup)=\"buscarUsuario( input.value )\" #input type=\"text\" class=\"form-control\" placeholder=\"Buscar usuario...\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row animated bounceInRight\" *ngIf=\"cargando\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"alert alert-warning text-center\">\r\n      <strong>Cargando</strong>\r\n      <br>\r\n      <i class=\"fa fa-refresh fa-spin fa-2x\"></i>\r\n      <br>\r\n      <span>Espere por favor</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row animated fadeIn\" *ngIf=\"!cargando\">\r\n    <div class=\"col-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n  \r\n          <h3 class=\"cardtitle\">Usuarios registrados( <small> {{ totalRegistros }} </small> ) </h3>\r\n\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th>Imagen</th>\r\n                <th>Correo</th>\r\n                <th>Nombre</th>\r\n                <th>Apellido</th>\r\n                <th>Segundo Apellido</th>\r\n                <th>Role</th>\r\n                <th></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let usuario of usuarios\">\r\n                <td class=\"w70\" > \r\n                  <img (click)=\"mostrarModal( usuario._id )\" [src]=\"usuario.img | imagen\" class=\"img-50 img-circle pointer\" > \r\n                </td>\r\n                <td> {{ usuario.email }} </td>\r\n                <td> {{ usuario.nombre }} </td>\r\n                <td> {{ usuario.apellido }} </td>\r\n                <td> {{ usuario.segundoapellido }} </td>\r\n                <td> \r\n                  <select [(ngModel)]=\"usuario.role\" name=\"role\" class=\"form-control\">\r\n                    <option value=\"LIDER_ROLE\">LIDER_ROLE</option>\r\n                    <option value=\"SUPERVISOR_ROLE\">SUPERVISOR_ROLE</option>\r\n                    <option value=\"DIRECTOR_ROLE\">DIRECTOR_ROLE</option>\r\n                    <option value=\"ADMIN_ROLE\">ADMIN_ROLE</option>\r\n                  </select> \r\n              </td>\r\n                <td></td>\r\n                <td>\r\n                  <button (click)=\"guardarUsuario( usuario )\" class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-save\"></i>\r\n                  </button>\r\n                  <button (click)=\"borrarUsuario( usuario )\" class=\"btn btn-danger\">\r\n                      <i class=\"fa fa-trash-o\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n            <button (click)=\"cambiarDesde(-5)\" class=\"btn btn-secondary\">Anteriores</button>\r\n            <button (click)=\"cambiarDesde(5)\" class=\"btn btn-secondary\">Siguientes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/usuarios/usuarios.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/usuarios/usuarios.component.ts ***!
  \******************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service.index */ "./src/app/services/service.index.ts");
/* harmony import */ var _components_modal_upload_modal_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal-upload/modal-upload.service */ "./src/app/components/modal-upload/modal-upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(_usuarioServce, _modalUploadService) {
        this._usuarioServce = _usuarioServce;
        this._modalUploadService = _modalUploadService;
        this.usuarios = [];
        this.desde = 0;
        this.cargando = true;
        this.totalRegistros = 0;
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarUsuarios();
        this._modalUploadService.notificacion
            .subscribe(function (resp) { return _this.cargarUsuarios(); });
    };
    UsuariosComponent.prototype.mostrarModal = function (id) {
        this._modalUploadService.mostarModal('usuarios', id);
    };
    UsuariosComponent.prototype.cargarUsuarios = function () {
        var _this = this;
        this.cargando = true;
        this._usuarioServce.cargarUsuarios(this.desde)
            .subscribe(function (resp) {
            _this.totalRegistros = resp.total;
            _this.usuarios = resp.usuarios;
            _this.cargando = false;
        });
    };
    UsuariosComponent.prototype.cambiarDesde = function (valor) {
        var desde = this.desde + valor;
        if (desde >= this.totalRegistros) {
            return;
        }
        if (desde < 0) {
            return;
        }
        this.desde += valor;
        this.cargarUsuarios();
    };
    UsuariosComponent.prototype.buscarUsuario = function (termino) {
        var _this = this;
        if (termino.length <= 0) {
            this.cargarUsuarios();
            return;
        }
        this.cargando = true;
        this._usuarioServce.buscarUsuarios(termino)
            .subscribe(function (usuarios) {
            _this.usuarios = usuarios;
            _this.cargando = false;
        });
    };
    UsuariosComponent.prototype.borrarUsuario = function (usuario) {
        var _this = this;
        if (usuario._id === this._usuarioServce.usuario._id) {
            swal('No puede borrar el usuario', 'No se puede borrar a si mismo', 'error');
            return;
        }
        swal({
            title: '¿Está seguro?',
            text: 'Está a punto de borrar a ' + usuario.nombre + ' ' + usuario.apellido,
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        })
            .then(function (borrar) {
            if (borrar) {
                _this._usuarioServce.borrarUsuario(usuario._id)
                    .subscribe(function (borrado) {
                    console.log(borrado);
                    _this.cargarUsuarios();
                });
            }
        });
    };
    UsuariosComponent.prototype.guardarUsuario = function (usuario) {
        this._usuarioServce.actualizarUsuario(usuario)
            .subscribe();
    };
    UsuariosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/pages/usuarios/usuarios.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [src_app_services_service_index__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"],
            _components_modal_upload_modal_upload_service__WEBPACK_IMPORTED_MODULE_2__["ModalUploadService"]])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map