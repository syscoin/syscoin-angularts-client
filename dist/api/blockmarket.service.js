"use strict";
/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.1.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var encoder_1 = require("../encoder");
require("../rxjs-operators");
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var BlockmarketService = /** @class */ (function () {
    function BlockmarketService(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://localhost:8001';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    BlockmarketService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     */
    BlockmarketService.prototype.login = function (auth, extraHttpRequestParams) {
        return this.loginWithHttpInfo(auth, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    /**
     *
     * Returns a session token for use with subsquent protected calls.
     * @param auth SHA1 hash of the user&#39;s authentication information- usernamepassword.
     
     */
    BlockmarketService.prototype.loginWithHttpInfo = function (auth, extraHttpRequestParams) {
        if (auth === null || auth === undefined) {
            throw new Error('Required parameter auth was null or undefined when calling login.');
        }
        var queryParameters = new http_1.URLSearchParams('', new encoder_1.CustomQueryEncoderHelper());
        if (auth !== undefined) {
            queryParameters.set('auth', auth);
        }
        var headers = new http_1.Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(this.basePath + "/login", requestOptions);
    };
    BlockmarketService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional()),
        __metadata("design:paramtypes", [http_1.Http, String, configuration_1.Configuration])
    ], BlockmarketService);
    return BlockmarketService;
}());
exports.BlockmarketService = BlockmarketService;
//# sourceMappingURL=blockmarket.service.js.map