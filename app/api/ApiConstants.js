/* App config for apis
 */
const ApiConstants = {
    BASE_URL: 'https://api.thedailymeat.in/api',
    LANGUAGE: 'language',
    SITEURL:'https://api.thedailymeat.in/',
    AppleAppID:'493554377',
    GooglePackageName:'com.tdmdelivery.tdmdelivery',
    RatingFallbackUrl : "https://api.thedailymeat.in/apprating",
    PRODUCTIMGPATH : 'uploads/productimage/',
    PROFILEIMGPATH : 'uploads/customerimage/',
    GOOGLEAPIKEY:'AIzaSyAKKEplE__ZhgDZAKSM7-ObelAcBPX0P_M',
    //API PATH
    LOGINPATH: 'login/deliverystaff_login',
    //ACCOUNTVERIFICATIONPATH:'login/verify_customer',
    FORGOTPASSWORD: 'login/deliverystaff_reset_password',
    ACCOUNTDETAIL:'account/accountdetail',
    PROFILEIMAGE:'account/profileimage',
    UPDATEPROFILEIMAGE :'account/updateprofileimage',
    UPDATEPERSONALDETAIL : 'account/updatepersonaldetail',
    UPDATEDEVICETOKEN : 'account/updatedevicetoken',
    CHANGEPASSWORD:'account/ChangePassword',

    //Order
    ORDERBYSTAFF:'deliverystaff/orderbystaff',
    CHANGEORDERSTATUS:'deliverystaff/ChangeStatus',
    
    // Update before build
    BUILDNO: "b01",
    VERSION: "1.0.0"
};
export default ApiConstants;