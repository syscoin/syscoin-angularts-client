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


export interface OfferAccept { 
    offer?: string;
    id?: string;
    txid?: string;
    title?: string;
    exttxid?: string;
    paymentoption?: string;
    paymentoption_display?: string;
    height?: number;
    time?: string;
    quantity?: number;
    currency?: string;
    offer_discount_percentage?: number;
    systotal?: number;
    sysprice?: number;
    price?: number;
    total?: number;
    buyer?: string;
    seller?: string;
    ismine?: boolean;
    status?: string;
    buyer_fedback?: Array<string>;
    seller_fedback?: Array<string>;
    avg_rating?: number;
    avg_rating_display?: string;
    pay_message?: string;
}
