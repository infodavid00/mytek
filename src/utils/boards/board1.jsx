import Cookies from 'js-cookie';
import { BASENDPOINT, PROXYSERVER } from '../../variable.jsx';
import { lvl1Data } from '../../components/board1/secs/dropdown.jsx';
import { endOfMonth, startOfMonth, startOfWeek } from '../dates/date.jsx';

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

  const response = await fetch(PROXYSERVER + BASENDPOINT + `/Tenants/HistoryCalls?filters=HistoryDate,gt,${startOfWeek()}T11%3A24%3A00;Tenant.PropertyID,bt,(${propId})`, {
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









export async function Card2_A1(propId, state) {
  state('...')
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');
    const response = await fetch(PROXYSERVER + BASENDPOINT + `/Charges?filters=IsFullyAllocated,eq,true;TransactionDate,gt,${startOfMonth()}T00%3A00%3A00;PropertyID,bt,(${propId});Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RM12Api-ApiToken': AuthorizationToken
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      const AMOUNT = data?.reduce((accumulator, elem) => typeof elem.Amount === 'number' ?
         accumulator + elem.Amount : accumulator + 0 , 0 );

      let Amount = String(AMOUNT)

      if (Amount.includes('.')) {
        const splittedAM = Amount.split('.');
        splittedAM[1] = splittedAM[1].slice(0,2)
        Amount = splittedAM.join('.')
      }
      state(data ? Amount : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}














export async function Card2_A2(propId, state) {
  state('...')
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');
    const response = await fetch(PROXYSERVER + BASENDPOINT + `/Charges?filters=TransactionDate,gt,${startOfMonth()}T00%3A00%3A00;PropertyID,bt,(${propId});AccountType,eq,Customer;IsFullyAllocated,eq,true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RM12Api-ApiToken': AuthorizationToken
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      const AMOUNT = data?.reduce( 
        (accumulator, elem) => typeof elem.Amount === 'number' ?
            accumulator + elem.Amount : accumulator + 0 , 0 );

      let Amount = String(AMOUNT)

      if (Amount.includes('.')) {
        const splittedAM = Amount.split('.');
        splittedAM[1] = splittedAM[1].slice(0,2)
        Amount = splittedAM.join('.')
      }
      state(data ? Amount : '0');
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}









export async function fetchAndProcessDataForPercentageF(propId, state, endpoint) {
  state('...')
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');
    const response = await fetch(PROXYSERVER + BASENDPOINT + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RM12Api-ApiToken': AuthorizationToken
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      const amount = data?.reduce( 
        (accumulator, elem) => typeof elem.Amount === 'number' ?
            accumulator + elem.Amount : accumulator + 0 , 0 );
      let formattedAmount = String(amount)
      if (formattedAmount.includes('.')) {
        const splittedAmount = formattedAmount.split('.');
        splittedAmount[1] = splittedAmount[1].slice(0,2)
        formattedAmount = splittedAmount.join('.')
      }

      return Number(formattedAmount)
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}


export async function Card2_A3(propId, state) {
  const AmountA = await fetchAndProcessDataForPercentageF(propId, state, `/Charges?filters=PropertyID,bt,(${propId});IsFullyAllocated,eq,true;TransactionDate,gt,${startOfMonth()}T00%3A00%3A00;AccountType,eq,Customer;Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`);
  const AmountB = await fetchAndProcessDataForPercentageF(propId, state, `/Charges?filters=PropertyID,bt,(${propId});TransactionDate,gt,${startOfMonth()}T00%3A00%3A00;AccountType,eq,Customer;Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`); 
 
  let percentage = AmountB > AmountA ? (AmountA / AmountB) * 100 : 100;
  const Percentage = percentage.toFixed(2)

  state(Percentage ? String(Percentage) : '0.00');
}








export async function Card2_A4(propId, state) {
  const AmountA = await fetchAndProcessDataForPercentageF(propId, state, `/Charges?filters=PropertyID,bt,(${propId});IsFullyAllocated,eq,true;TransactionDate,gt,${startOfMonth()}T00%3A00%3A00;AccountType,eq,Customer;Unit.UnitTypeID,in,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`);
  const AmountB = await fetchAndProcessDataForPercentageF(propId, state, `/Charges?filters=PropertyID,bt,(${propId});TransactionDate,gt,${startOfMonth()}T00%3A00%3A00;AccountType,eq,Customer;Unit.UnitTypeID,in,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`);
 
  let percentage = AmountB > AmountA ? (AmountA / AmountB) * 100 : 100;
  const Percentage = percentage.toFixed(2)

  state(Percentage ? String(Percentage) : '0.00');
}

















export async function fetchAndProcessDataForPercentageFCARD3(propId, state, endpoint) {
  state({percentage: '...', A: '...', B: '...'})
  try {
    if (!AuthorizationToken) throw new Error('Authorization token not found');
    const response = await fetch(PROXYSERVER + BASENDPOINT + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RM12Api-ApiToken': AuthorizationToken
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      const amount = data?.reduce( 
        (accumulator, elem) => typeof elem.Amount === 'number' ?
            accumulator + elem.Amount : accumulator + 0 , 0 );
      let formattedAmount = String(amount)
      if (formattedAmount.includes('.')) {
        const splittedAmount = formattedAmount.split('.');
        splittedAmount[1] = splittedAmount[1].slice(0,2)
        formattedAmount = splittedAmount.join('.')
      }

      return Number(formattedAmount)
    } else if (response.status !== 204) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      state('0');
    }
  } catch (error) {
    state('!!!');
  }
}

export function formatShortNumber(number) {
  const absNumber = Math.abs(number);

  if (absNumber >= 1e6) {
    // Convert to million (M) format
    return (number / 1e6).toFixed(1) + 'M';
  } else if (absNumber >= 1e3) {
    // Convert to thousand (K) format
    return (number / 1e3).toFixed(1) + 'K';
  } else {
    return String(number);
  }
}


export async function Card3_A1A2(propId, state, ddmmyy) {
  const AmountA = await fetchAndProcessDataForPercentageFCARD3(propId, state, `/Charges?filters=IsFullyAllocated,eq,true;TransactionDate,bt,(${startOfMonth(ddmmyy)}T00%3A00%3A00,${endOfMonth(ddmmyy)}T00%3A00);PropertyID,bt,(${propId});Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`);
  const AmountB = await fetchAndProcessDataForPercentageFCARD3(propId, state, `/Charges?filters=IsFullyAllocated,eq,false;TransactionDate,bt,(${startOfMonth(ddmmyy)}T00%3A00%3A00,${endOfMonth(ddmmyy)}T00%3A00);PropertyID,bt,(${propId});Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`);
 
  let percentage = AmountB < AmountA ? (AmountB / AmountA) * 100 : 100;
  const Percentage = percentage.toFixed(2)

  state({percentage: Percentage ? String(Percentage) : '0.00', 
     A: formatShortNumber(Number(AmountA)), B: formatShortNumber(Number(AmountB))})
}
 
 







 
export async function Card3_A3A4(propId, state, ddmmyy) {
  const AmountA = await fetchAndProcessDataForPercentageFCARD3(propId, state, `/Charges?filters=IsFullyAllocated,eq,true;TransactionDate,bt,(${startOfMonth(ddmmyy)}T00%3A00%3A00,${endOfMonth(ddmmyy)}T00%3A00);PropertyID,bt,(${propId});Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`);
  const AmountB = await fetchAndProcessDataForPercentageFCARD3(propId, state, `/Charges?filters=IsFullyAllocated,eq,false;TransactionDate,bt,(${startOfMonth(ddmmyy)}T00%3A00%3A00,${endOfMonth(ddmmyy)}T00%3A00);PropertyID,bt,(${propId});Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`);
 
  let percentage = AmountB < AmountA ? (AmountB / AmountA) * 100 : 100;
  const Percentage = percentage.toFixed(2)

  state({percentage: Percentage ? String(Percentage) : '0.00', 
     A: formatShortNumber(Number(AmountA)), B: formatShortNumber(Number(AmountB))})
}
 







  
export async function Card3_A5A6(propId, state, ddmmyy) {
  const AmountA = await fetchAndProcessDataForPercentageFCARD3(propId, state, `/Charges?filters=IsFullyAllocated,eq,true;TransactionDate,bt,(${startOfMonth(ddmmyy)}T00%3A00%3A00,${endOfMonth(ddmmyy)}T00%3A00);PropertyID,bt,(${propId});Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`);
  const AmountB = await fetchAndProcessDataForPercentageFCARD3(propId, state, `/Charges?filters=IsFullyAllocated,eq,false;TransactionDate,bt,(${startOfMonth(ddmmyy)}T00%3A00%3A00,${endOfMonth(ddmmyy)}T00%3A00);PropertyID,bt,(${propId});Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)`);
 
  let percentage = AmountB < AmountA ? (AmountB / AmountA) * 100 : 100;
  const Percentage = percentage.toFixed(2)

  state({percentage: Percentage ? String(Percentage) : '0.00', 
     A: formatShortNumber(Number(AmountA)), B: formatShortNumber(Number(AmountB))})
}
 