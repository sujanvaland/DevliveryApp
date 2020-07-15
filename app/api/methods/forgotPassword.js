import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function forgotPassword(username) {
    return Api(
        ApiConstants.FORGOTPASSWORD,
        {
          username: username
        },
        'post',
        null
    );
}
