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
 * @interface Meetupshow
 */
export interface Meetupshow {
    /**
     * 
     * @type {string}
     * @memberof Meetupshow
     */
    meetupID?: string;
    /**
     * 
     * @type {string}
     * @memberof Meetupshow
     */
    token?: string;
}

/**
 * Check if a given object implements the Meetupshow interface.
 */
export function instanceOfMeetupshow(value: object): value is Meetupshow {
    return true;
}

export function MeetupshowFromJSON(json: any): Meetupshow {
    return MeetupshowFromJSONTyped(json, false);
}

export function MeetupshowFromJSONTyped(json: any, ignoreDiscriminator: boolean): Meetupshow {
    if (json == null) {
        return json;
    }
    return {
        
        'meetupID': json['meetupID'] == null ? undefined : json['meetupID'],
        'token': json['token'] == null ? undefined : json['token'],
    };
}

export function MeetupshowToJSON(value?: Meetupshow | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meetupID': value['meetupID'],
        'token': value['token'],
    };
}

