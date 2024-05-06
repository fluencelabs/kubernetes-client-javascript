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
import { V1alpha1MigrationCondition } from './v1alpha1MigrationCondition';

/**
* Status of the storage version migration.
*/
export class V1alpha1StorageVersionMigrationStatus {
    /**
    * The latest available observations of the migration\'s current state.
    */
    'conditions'?: Array<V1alpha1MigrationCondition>;
    /**
    * ResourceVersion to compare with the GC cache for performing the migration. This is the current resource version of given group, version and resource when kube-controller-manager first observes this StorageVersionMigration resource.
    */
    'resourceVersion'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1alpha1MigrationCondition>"
        },
        {
            "name": "resourceVersion",
            "baseName": "resourceVersion",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1StorageVersionMigrationStatus.attributeTypeMap;
    }
}

