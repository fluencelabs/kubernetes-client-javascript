/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1GroupSubject } from './v1GroupSubject';
import { V1ServiceAccountSubject } from './v1ServiceAccountSubject';
import { V1UserSubject } from './v1UserSubject';

/**
* Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
*/
export class FlowcontrolV1Subject {
    'group'?: V1GroupSubject;
    /**
    * `kind` indicates which one of the other fields is non-empty. Required
    */
    'kind': string;
    'serviceAccount'?: V1ServiceAccountSubject;
    'user'?: V1UserSubject;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "V1GroupSubject"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "serviceAccount",
            "baseName": "serviceAccount",
            "type": "V1ServiceAccountSubject"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "V1UserSubject"
        }    ];

    static getAttributeTypeMap() {
        return FlowcontrolV1Subject.attributeTypeMap;
    }
}

