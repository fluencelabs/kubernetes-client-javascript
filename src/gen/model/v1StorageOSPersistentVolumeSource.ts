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
import { V1ObjectReference } from './v1ObjectReference';

/**
* Represents a StorageOS persistent volume resource.
*/
export class V1StorageOSPersistentVolumeSource {
    /**
    * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
    */
    'fsType'?: string;
    /**
    * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    'secretRef'?: V1ObjectReference;
    /**
    * volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
    */
    'volumeName'?: string;
    /**
    * volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to \"default\" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
    */
    'volumeNamespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "V1ObjectReference"
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string"
        },
        {
            "name": "volumeNamespace",
            "baseName": "volumeNamespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1StorageOSPersistentVolumeSource.attributeTypeMap;
    }
}

