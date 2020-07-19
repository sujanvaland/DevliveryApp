import Api from 'app/api';
import ApiConstants from '../ApiConstants';


export function changePassword(action) {
  return Api(
    ApiConstants.CHANGEPASSWORD,
    {
      oldpassword:action.action.oldpassword,
      newpassword:action.action.newpassword
    },
    'post',
    null
  );
}

export  function loadProfileImage(action) {
  return Api(
      ApiConstants.PROFILEIMAGE,
      null,
      'get',
      null
  );
}
