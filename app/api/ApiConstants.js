/* App config for apis
 */
const ApiConstants = {
    BASE_URL: 'http://api.thedailymeat.in/api',
    LANGUAGE: 'language',
    SITEURL:'http://thedailymeat.in/',
    AppleAppID:'493554377',
    GooglePackageName:'com.tdmdelivery.tdmdelivery',
    RatingFallbackUrl : "http://thedailymeat.in/apprating",
    PRODUCTIMGPATH : 'uploads/productimage/',
    PROFILEIMGPATH : 'uploads/customerimage/',
    GOOGLEAPIKEY:'AIzaSyAKKEplE__ZhgDZAKSM7-ObelAcBPX0P_M',
    //API PATH
    LOGINPATH: 'login/deliverystaff_login',
    //ACCOUNTVERIFICATIONPATH:'login/verify_customer',
    FORGOTPASSWORD: 'login/deliverystaff_reset_password',
    //USERDETAIL:'account/userdetail',
    PROFILEIMAGE:'account/profileimage',
    UPDATEPROFILEIMAGE :'account/updateprofileimage',

    //Order
    ORDERBYSTAFF:'deliverystaff/orderbystaff',
    CHANGEORDERSTATUS:'deliverystaff/ChangeStatus',
    
    // Update before build
    BUILDNO: "b01",
    VERSION: "1.0.0"
};
export default ApiConstants;