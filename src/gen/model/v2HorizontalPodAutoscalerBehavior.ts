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
import { V2HPAScalingRules } from './v2HPAScalingRules';

/**
* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
*/
export class V2HorizontalPodAutoscalerBehavior {
    'scaleDown'?: V2HPAScalingRules;
    'scaleUp'?: V2HPAScalingRules;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "scaleDown",
            "baseName": "scaleDown",
            "type": "V2HPAScalingRules"
        },
        {
            "name": "scaleUp",
            "baseName": "scaleUp",
            "type": "V2HPAScalingRules"
        }    ];

    static getAttributeTypeMap() {
        return V2HorizontalPodAutoscalerBehavior.attributeTypeMap;
    }
}

