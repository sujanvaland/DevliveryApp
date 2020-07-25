/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToLogin(params) {
    NavigationService.navigate('Login', params);
}

export function navigateToAccountVerification(params) {
    NavigationService.navigate('AccountVerification', params);
}

export function navigateToForgotPassword(params) {
    NavigationService.navigate('Forgotpassword', params);
}

export function navigateToEditProfileImage(params) {
    NavigationService.navigate('EditProfileImage', params);
}

// =================================//
export function navigateToDashboard(params) {
    NavigationService.navigate('Dashboard', params);
}

export function navigateToMyOrders(params) {
    NavigationService.navigate('MyOrders', params);
}

export function navigateToOrderDetail(params) {
    NavigationService.navigate('OrderDetail', params);
}