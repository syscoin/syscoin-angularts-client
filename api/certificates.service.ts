/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { Cert } from '../model/cert';
import { CertHistoryEntry } from '../model/certHistoryEntry';
import { CertNewRequest } from '../model/certNewRequest';
import { CertTransferRequest } from '../model/certTransferRequest';
import { CertUpdateRequest } from '../model/certUpdateRequest';
import { ErrorResponse } from '../model/errorResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CertificatesService {

    protected basePath = 'http://localhost:8001';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * Count certificates that an array of aliases own.
     * @param aliases 
     */
    public certcount(aliases?: Array<string>, extraHttpRequestParams?: any): Observable<number> {
        return this.certcountWithHttpInfo(aliases, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * scan and filter certs certfilter \&quot;\&quot; 5 &#x3D; list certs updated in last 5 blocks certfilter \&quot;^cert\&quot; &#x3D; list all certs starting with \&quot;cert\&quot; certfilter 36000 0 0 stat &#x3D; display stats (number of certs) on active certs
     * @param regexp apply [regexp] on certes, empty means all certs
     * @param from show results from number [from]
     * @param count the number of results to return
     * @param safesearch shows all certs that are safe to display (not on the ban list)
     * @param category category you want to search in, empty for all
     */
    public certfilter(regexp?: string, from?: string, count?: number, safesearch?: string, category?: string, extraHttpRequestParams?: any): Observable<Array<Cert>> {
        return this.certfilterWithHttpInfo(regexp, from, count, safesearch, category, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * List all stored values of an cert.
     * @param certname 
     */
    public certhistory(certname: string, extraHttpRequestParams?: any): Observable<Array<CertHistoryEntry>> {
        return this.certhistoryWithHttpInfo(certname, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * Show stored values of a single certificate.
     * @param guid 
     */
    public certinfo(guid: string, extraHttpRequestParams?: any): Observable<Cert> {
        return this.certinfoWithHttpInfo(guid, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * List certificates that an array of aliases own. Set of aliases to look up based on alias, and private key to decrypt any data found in certificates.
     * @param aliases 
     * @param cert 
     * @param count The number of results to return
     * @param from The number of results to skip
     */
    public certlist(aliases?: Array<string>, cert?: string, count?: number, from?: number, extraHttpRequestParams?: any): Observable<Array<Cert>> {
        return this.certlistWithHttpInfo(aliases, cert, count, from, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    public certnew(request: CertNewRequest, extraHttpRequestParams?: any): Observable<Array<string>> {
        return this.certnewWithHttpInfo(request, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    public certtransfer(request: CertTransferRequest, extraHttpRequestParams?: any): Observable<Array<string>> {
        return this.certtransferWithHttpInfo(request, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    public certupdate(request: CertUpdateRequest, extraHttpRequestParams?: any): Observable<Array<string>> {
        return this.certupdateWithHttpInfo(request, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * 
     * Count certificates that an array of aliases own.
     * @param aliases 
     */
    public certcountWithHttpInfo(aliases?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/certcount';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (aliases) {
            queryParameters.set('aliases', aliases.join(COLLECTION_FORMATS['csv']));
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * scan and filter certs certfilter \&quot;\&quot; 5 &#x3D; list certs updated in last 5 blocks certfilter \&quot;^cert\&quot; &#x3D; list all certs starting with \&quot;cert\&quot; certfilter 36000 0 0 stat &#x3D; display stats (number of certs) on active certs
     * @param regexp apply [regexp] on certes, empty means all certs
     * @param from show results from number [from]
     * @param count the number of results to return
     * @param safesearch shows all certs that are safe to display (not on the ban list)
     * @param category category you want to search in, empty for all
     */
    public certfilterWithHttpInfo(regexp?: string, from?: string, count?: number, safesearch?: string, category?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/certfilter';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (regexp !== undefined) {
            queryParameters.set('regexp', <any>regexp);
        }

        if (from !== undefined) {
            queryParameters.set('from', <any>from);
        }

        if (count !== undefined) {
            queryParameters.set('count', <any>count);
        }

        if (safesearch !== undefined) {
            queryParameters.set('safesearch', <any>safesearch);
        }

        if (category !== undefined) {
            queryParameters.set('category', <any>category);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * List all stored values of an cert.
     * @param certname 
     */
    public certhistoryWithHttpInfo(certname: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/certhistory';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'certname' is not null or undefined
        if (certname === null || certname === undefined) {
            throw new Error('Required parameter certname was null or undefined when calling certhistory.');
        }
        if (certname !== undefined) {
            queryParameters.set('certname', <any>certname);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Show stored values of a single certificate.
     * @param guid 
     */
    public certinfoWithHttpInfo(guid: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/certinfo';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'guid' is not null or undefined
        if (guid === null || guid === undefined) {
            throw new Error('Required parameter guid was null or undefined when calling certinfo.');
        }
        if (guid !== undefined) {
            queryParameters.set('guid', <any>guid);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * List certificates that an array of aliases own. Set of aliases to look up based on alias, and private key to decrypt any data found in certificates.
     * @param aliases 
     * @param cert 
     * @param count The number of results to return
     * @param from The number of results to skip
     */
    public certlistWithHttpInfo(aliases?: Array<string>, cert?: string, count?: number, from?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/certlist';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (aliases) {
            queryParameters.set('aliases', aliases.join(COLLECTION_FORMATS['csv']));
        }

        if (cert !== undefined) {
            queryParameters.set('cert', <any>cert);
        }

        if (count !== undefined) {
            queryParameters.set('count', <any>count);
        }

        if (from !== undefined) {
            queryParameters.set('from', <any>from);
        }


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

            
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Create a new Syscoin Certificate. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    public certnewWithHttpInfo(request: CertNewRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/certnew';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling certnew.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Transfer certificate from one user to another. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    public certtransferWithHttpInfo(request: CertTransferRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/certtransfer';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling certtransfer.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * 
     * Perform an update on an certificate you control. Requires wallet passphrase to be set with walletpassphrase call.
     * @param request 
     */
    public certupdateWithHttpInfo(request: CertUpdateRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/certupdate';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new Error('Required parameter request was null or undefined when calling certupdate.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (token) required
        if (this.configuration.apiKeys["token"]) {
            headers.set('token', this.configuration.apiKeys["token"]);
        }

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}