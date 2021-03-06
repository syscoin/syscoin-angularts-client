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


export interface EscrowCompleteRefundRequest { 
    /**
     * Escrow ID
     */
    escrowguid: string;
    /**
     * Raw fully signed syscoin escrow transaction. It is the signed response from escrowcreaterawtransaction. You must sign this transaction externally prior to passing in.
     */
    rawtx: string;
    /**
     * Witness alias name that will sign for web-of-trust notarization of this transaction.
     */
    witness?: string;
}
