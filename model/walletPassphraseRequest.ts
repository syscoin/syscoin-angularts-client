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



export interface WalletPassphraseRequest {
    /**
     * The wallet passphrase
     */
    passphrase: string;

    /**
     * The time to keep the decryption key in seconds.
     */
    timeout: number;

}