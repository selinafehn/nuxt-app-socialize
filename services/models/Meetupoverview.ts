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
 * @interface Meetupoverview
 */
export interface Meetupoverview {
    /**
     * 
     * @type {string}
     * @memberof Meetupoverview
     */
    token?: string;
}

/**
 * Check if a given object implements the Meetupoverview interface.
 */
export function instanceOfMeetupoverview(value: object): value is Meetupoverview {
    return true;
}

export function MeetupoverviewFromJSON(json: any): Meetupoverview {
    return MeetupoverviewFromJSONTyped(json, false);
}

export function MeetupoverviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): Meetupoverview {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'] == null ? undefined : json['token'],
    };
}

export function MeetupoverviewToJSON(value?: Meetupoverview | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
    };
}

