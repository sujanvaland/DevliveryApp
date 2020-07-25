import Api from 'app/api';
import ApiConstants from '../ApiConstants';


export  function getCustomerOrders(action) {
  return Api(
      ApiConstants.ORDERBYSTAFF,
      null,
      'get',
      null
  );
}

export  function changeorderstatus(action) {
  
  return Api(
      ApiConstants.CHANGEORDERSTATUS,
      {
        orderstatus: action.orderitem.orderstatus,
        orderguid:action.orderitem.orderguid
      },
      'post',
      null
  );
}