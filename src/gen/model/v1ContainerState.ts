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
import { V1ContainerStateRunning } from './v1ContainerStateRunning';
import { V1ContainerStateTerminated } from './v1ContainerStateTerminated';
import { V1ContainerStateWaiting } from './v1ContainerStateWaiting';

/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
*/
export class V1ContainerState {
    'running'?: V1ContainerStateRunning;
    'terminated'?: V1ContainerStateTerminated;
    'waiting'?: V1ContainerStateWaiting;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "running",
            "baseName": "running",
            "type": "V1ContainerStateRunning"
        },
        {
            "name": "terminated",
            "baseName": "terminated",
            "type": "V1ContainerStateTerminated"
        },
        {
            "name": "waiting",
            "baseName": "waiting",
            "type": "V1ContainerStateWaiting"
        }    ];

    static getAttributeTypeMap() {
        return V1ContainerState.attributeTypeMap;
    }
}

