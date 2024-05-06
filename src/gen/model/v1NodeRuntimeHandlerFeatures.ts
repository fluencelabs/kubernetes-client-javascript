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

/**
* NodeRuntimeHandlerFeatures is a set of runtime features.
*/
export class V1NodeRuntimeHandlerFeatures {
    /**
    * RecursiveReadOnlyMounts is set to true if the runtime handler supports RecursiveReadOnlyMounts.
    */
    'recursiveReadOnlyMounts'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "recursiveReadOnlyMounts",
            "baseName": "recursiveReadOnlyMounts",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeRuntimeHandlerFeatures.attributeTypeMap;
    }
}

