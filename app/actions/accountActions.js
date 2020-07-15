/*
 * Reducer actions related with login
 */
import * as types from './types';


export function loadProfileImageRequest() {
    return {
        type: types.LOADPROFILEIMAGE_REQUEST
    };
}

export function onProfileImageLoadedResponse(response) {
    return {
        type: types.PROFILEIMAGELOADED_RESPONSE,
        response
    };
}

export function FailedLoadingProfileImage(response) {
    return {
        type: types.FAILEDLOADINGPROFILEIMAGE_RESPONSE,
        response
    };
}