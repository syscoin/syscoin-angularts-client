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



export interface EscrowFeedbackRequest {
    escrowguid: string;

    userrole: string;

    feedbackprimary: string;

    ratingprimary: number;

    feedbacksecondary: string;

    ratingsecondary: number;

}
