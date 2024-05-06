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
import { V1ObjectMeta } from './v1ObjectMeta';
import { V1alpha1StorageVersionMigrationSpec } from './v1alpha1StorageVersionMigrationSpec';
import { V1alpha1StorageVersionMigrationStatus } from './v1alpha1StorageVersionMigrationStatus';

/**
* StorageVersionMigration represents a migration of stored data to the latest storage version.
*/
export class V1alpha1StorageVersionMigration {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    'spec'?: V1alpha1StorageVersionMigrationSpec;
    'status'?: V1alpha1StorageVersionMigrationStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "V1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1alpha1StorageVersionMigrationSpec"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1StorageVersionMigrationStatus"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1StorageVersionMigration.attributeTypeMap;
    }
}

