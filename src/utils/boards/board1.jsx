import Cookies from 'js-cookie';
import {
  BASENDPOINT, 
  PROXYSERVER
} from '../../variable.jsx';


const token = Cookies.get();
const AuthorizationToken = token['x-x-TOKEN-user'];


export async function Card1_A2(propId, state) {
  const EP = `/Tenants?filters=PropertyID,bt,(${propId});OpenBalance,bt,(1%2C999)&fields=LastNameFirstName,OpenBalance,PropertyID`;
  try {
    if (AuthorizationToken) {
      const response = await fetch(PROXYSERVER + BASENDPOINT + EP, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'X-RM12Api-ApiToken': AuthorizationToken
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
       console.log(data)
      // if (data) {
      //   state(data);
      // }
    } else {
      throw new Error('Authorization token not found');
    }
  } catch (error) {
    if (error instanceof Error) {
      state('!!!');
    } else {
      state('!!!');
    }
  }
}






