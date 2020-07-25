/*
 * Reducer actions related with login
 */
import * as types from './types';


export function getCustomerOrders() {
    return {
        type: types.GETCUSTOMERORDERS_REQUEST
    };
}
export function ongetCustomerOrdersResponse(response) {
    return {
        type: types.GETCUSTOMERORDERS_RESPONSE,
        response
    };
}
export function ongetCustomerOrdersFailedResponse(response) {
    return {
        type: types.GETCUSTOMERORDERSFAILED_RESPONSE,
        response
    };
}

export function changeOrderStatus(orderitem) {
    return {
        type: types.CHANGEORDERSTATUS_REQUEST,
        orderitem
    };
}
export function onchangeOrderStatusResponse(response) {
    return {
        type: types.CHANGEORDERSTATUS_RESPONSE,
        response
    };
}
export function onchangeOrderStatusFailedResponse(response) {
    return {
        type: types.CHANGEORDERSTATUSFAILED_RESPONSE,
        response
    };
}