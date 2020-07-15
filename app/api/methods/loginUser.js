import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
    return Api(
        ApiConstants.LOGINPATH,
        {
          Email: username,
          Password: password
        },
        'post',
        null
    );
}
