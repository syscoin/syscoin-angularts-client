/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface AliasPayRequest {
    /**
     * Alias you own to pay from
     */
    alias: string;

    /**
     * A json object with aliases and amounts { \"address\":amount   (numeric or string) The syscoin alias is the key, the numeric amount (can be string) in SYS is the value ,... }
     */
    amounts: string;

    /**
     * Only use the balance confirmed at least this many times.
     */
    minconf?: number;

    /**
     * A comment
     */
    comment?: string;

}
