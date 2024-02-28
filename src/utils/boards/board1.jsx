import Cookies from 'js-cookie';
import { BASENDPOINT, PROXYSERVER } from '../../variable.jsx';
import { lvl1Data } from '../../components/board1/secs/dropdown.jsx';
import { oneWeekBack } from '../dates/date.jsx';

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






export async function Card1_A3(propId, state) {
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
      const OB = data?.reduce( 
        (accumulator, elem) => accumulator + elem.OpenBalance, 0 );
      let openBalance = String(OB)

      if (openBalance.includes('.')) {
        const splittedOB = openBalance.split('.');
        splittedOB[1] = splittedOB[1].slice(0,2)
        openBalance = splittedOB.join('.')
      }
      state(data ? openBalance : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}







export async function Card1_B3(propId, state) {
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
      const OB = data?.reduce( 
        (accumulator, elem) => accumulator + elem.OpenBalance, 0 );
      let openBalance = String(OB)

      if (openBalance.includes('.')) {
        const splittedOB = openBalance.split('.');
        splittedOB[1] = splittedOB[1].slice(0,2)
        openBalance = splittedOB.join('.')
      }
      state(data ? openBalance : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}




 

export async function Card1_C3(propId, state) {
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
      const OB = data?.reduce( 
        (accumulator, elem) => accumulator + elem.OpenBalance, 0 );
      let openBalance = String(OB)

      if (openBalance.includes('.')) {
        const splittedOB = openBalance.split('.');
        splittedOB[1] = splittedOB[1].slice(0,2)
        openBalance = splittedOB.join('.')
      }
      state(data ? openBalance : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}






export async function Card1_A4(propId, state) {
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
      const OB = data?.reduce( 
        (accumulator, elem) => accumulator + elem.OpenBalance, 0 );
      let openBalance = String(OB)

      if (openBalance.includes('.')) {
        const splittedOB = openBalance.split('.');
        splittedOB[1] = splittedOB[1].slice(0,2)
        openBalance = splittedOB.join('.')
      }
      state(data ? openBalance : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}







export async function Card1_B4(propId, state) {
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
      const OB = data?.reduce( 
        (accumulator, elem) => accumulator + elem.OpenBalance, 0 );
      let openBalance = String(OB)

      if (openBalance.includes('.')) {
        const splittedOB = openBalance.split('.');
        splittedOB[1] = splittedOB[1].slice(0,2)
        openBalance = splittedOB.join('.')
      }
      state(data ? openBalance : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}






export async function Card1_C4(propId, state) {
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
      const OB = data?.reduce( 
        (accumulator, elem) => accumulator + elem.OpenBalance, 0 );
      let openBalance = String(OB)

      if (openBalance.includes('.')) {
        const splittedOB = openBalance.split('.');
        splittedOB[1] = splittedOB[1].slice(0,2)
        openBalance = splittedOB.join('.')
      }
      state(data ? openBalance : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}








export async function Card1_A1(propId, state) {
  state(null)
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
      if (data) {
        const trimmedData = data.map((elem) => {
        return {
          propertyName : lvl1Data[0].lists.find((elem) => elem.PropertyID === propId)['Name'],
          FirstName: elem.FirstName,
          LastName: elem.LastName,
          OpenBalance: elem.OpenBalance,
          };
        });
        state(trimmedData);
      } else {
        state('0');
      }
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state(false);
  }
}










export async function Card1_B1(propId, state) {
  state(null)
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
      if (data) {
        const trimmedData = data.map((elem) => {
        return {
          propertyName : lvl1Data[0].lists.find((elem) => elem.PropertyID === propId)['Name'],
          FirstName: elem.FirstName,
          LastName: elem.LastName,
          OpenBalance: elem.OpenBalance,
          };
        });
        state(trimmedData);
      } else {
        state('0');
      }
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state(false);
  }
}









export async function Card1_C1(propId, state) {
  state(null)
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
      if (data) {
        const trimmedData = data.map((elem) => {
        return {
          propertyName : lvl1Data[0].lists.find((elem) => elem.PropertyID === propId)['Name'],
          FirstName: elem.FirstName,
          LastName: elem.LastName,
          OpenBalance: elem.OpenBalance,
          };
        });
        state(trimmedData);
      } else {
        state('0');
      }
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state(false);
  }
}














export async function Card1_D3(propId, state) {
  state('...')
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');
    const LastENDPOINT = `/Tenants?filters=OpenBalance,ne,0;PropertyID,${propId !== '1%2C50' ? 'eq' : 'bt'},${propId !== '1%2C50' ? propId.split('%2C')[1] : `(${propId})`}&fields=LastNameFirstName,OpenBalance,PropertyID`

    const response = await fetch(PROXYSERVER + BASENDPOINT + LastENDPOINT, {
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











export async function Card1_D1(propId, state) {
  state('...')
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');

  const response = await fetch(PROXYSERVER + BASENDPOINT + `/Tenants/HistoryCalls?filters=HistoryDate,gt,${oneWeekBack()}T11%3A24%3A00;Tenant.PropertyID,bt,(${propId})`, {
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
