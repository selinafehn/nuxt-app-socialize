/* tslint:disable */
/* eslint-disable */
/**
 * socialize API
 * socialize API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Userlogoff
 */
export interface Userlogoff {
    /**
     * 
     * @type {string}
     * @memberof Userlogoff
     */
    token?: string;
}

/**
 * Check if a given object implements the Userlogoff interface.
 */
export function instanceOfUserlogoff(value: object): value is Userlogoff {
    return true;
}

export function UserlogoffFromJSON(json: any): Userlogoff {
    return UserlogoffFromJSONTyped(json, false);
}

export function UserlogoffFromJSONTyped(json: any, ignoreDiscriminator: boolean): Userlogoff {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'] == null ? undefined : json['token'],
    };
}

export function UserlogoffToJSON(value?: Userlogoff | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
    };
}

