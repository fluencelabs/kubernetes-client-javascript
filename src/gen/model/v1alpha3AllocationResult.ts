/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1NodeSelector } from './v1NodeSelector';
import { V1alpha3DeviceAllocationResult } from './v1alpha3DeviceAllocationResult';

/**
* AllocationResult contains attributes of an allocated resource.
*/
export class V1alpha3AllocationResult {
    /**
    * Controller is the name of the DRA driver which handled the allocation. That driver is also responsible for deallocating the claim. It is empty when the claim can be deallocated without involving a driver.  A driver may allocate devices provided by other drivers, so this driver name here can be different from the driver names listed for the results.  This is an alpha field and requires enabling the DRAControlPlaneController feature gate.
    */
    'controller'?: string;
    'devices'?: V1alpha3DeviceAllocationResult;
    'nodeSelector'?: V1NodeSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "controller",
            "baseName": "controller",
            "type": "string"
        },
        {
            "name": "devices",
            "baseName": "devices",
            "type": "V1alpha3DeviceAllocationResult"
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "V1NodeSelector"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha3AllocationResult.attributeTypeMap;
    }
}

