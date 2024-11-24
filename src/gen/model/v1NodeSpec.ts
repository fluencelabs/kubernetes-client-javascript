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
import { V1NodeConfigSource } from './v1NodeConfigSource';
import { V1Taint } from './v1Taint';

/**
* NodeSpec describes the attributes that a node is created with.
*/
export class V1NodeSpec {
    'configSource'?: V1NodeConfigSource;
    /**
    * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
    */
    'externalID'?: string;
    /**
    * PodCIDR represents the pod IP range assigned to the node.
    */
    'podCIDR'?: string;
    /**
    * podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
    */
    'podCIDRs'?: Array<string>;
    /**
    * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
    */
    'providerID'?: string;
    /**
    * If specified, the node\'s taints.
    */
    'taints'?: Array<V1Taint>;
    /**
    * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
    */
    'unschedulable'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configSource",
            "baseName": "configSource",
            "type": "V1NodeConfigSource"
        },
        {
            "name": "externalID",
            "baseName": "externalID",
            "type": "string"
        },
        {
            "name": "podCIDR",
            "baseName": "podCIDR",
            "type": "string"
        },
        {
            "name": "podCIDRs",
            "baseName": "podCIDRs",
            "type": "Array<string>"
        },
        {
            "name": "providerID",
            "baseName": "providerID",
            "type": "string"
        },
        {
            "name": "taints",
            "baseName": "taints",
            "type": "Array<V1Taint>"
        },
        {
            "name": "unschedulable",
            "baseName": "unschedulable",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeSpec.attributeTypeMap;
    }
}

