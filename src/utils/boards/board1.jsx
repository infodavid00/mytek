import Cookies from 'js-cookie';
import { BASENDPOINT, PROXYSERVER } from '../../variable.jsx';

const token = Cookies.get();
const AuthorizationToken = token['x-x-TOKEN-user'];

export async function Card1_A2(propId, state) {
  state('...')
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');
    const response = await fetch(PROXYSERVER + BASENDPOINT + `/Tenants?filters=PropertyID,bt,(${propId});OpenBalance,bt,(1%2C999)&fields=LastNameFirstName,OpenBalance,PropertyID`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RM12Api-ApiToken': AuthorizationToken
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      state(data ? data.length : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}





export async function Card1_B2(propId, state) {
  state('...')
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');
    const response = await fetch(PROXYSERVER + BASENDPOINT + `/Tenants?filters=PropertyID,bt,(${propId});OpenBalance,bt,(1000%2C10000)&fields=LastNameFirstName,OpenBalance,PropertyID`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RM12Api-ApiToken': AuthorizationToken
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      state(data ? data.length : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}






export async function Card1_C2(propId, state) {
  state('...')
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');
    const response = await fetch(PROXYSERVER + BASENDPOINT + `/Tenants?filters=PropertyID,bt,(${propId});OpenBalance,gt,10000&fields=LastNameFirstName,OpenBalance,PropertyID`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RM12Api-ApiToken': AuthorizationToken
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      state(data ? data.length : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}








export async function Card1_B2(propId, state) {
  state('...')
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');
    const response = await fetch(PROXYSERVER + BASENDPOINT + `/Tenants?filters=PropertyID,bt,(${propId});OpenBalance,bt,(1%2C999)&fields=LastNameFirstName,OpenBalance,PropertyID`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RM12Api-ApiToken': AuthorizationToken
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      state(data ? data.length : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}