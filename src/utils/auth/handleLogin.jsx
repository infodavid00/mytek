
import Cookies from 'js-cookie';
import { BASENDPOINT, PROXYSERVER, SIGNINAUTHENDPOINT } from '../../variable.jsx';

export default async function handleLogin(state) {
  const loadingState = bool => state[0](bool)
  const isnotSuccessfullState = bool => state[1](bool)
  const responseMessageState = message => state[2](message)
  const {username, password} = state[3]
  console.log(username, password)

  const handleErrors = message => {
    loadingState(false) 
    responseMessageState(message)
    isnotSuccessfullState(true)    
  }

  loadingState(true) 
  isnotSuccessfullState(false) 

  if (username) {
     if (password) {
      // fetch(BASENDPOINT + SIGNINAUTHENDPOINT, {
      // method: 'POST', 
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify({username, password}) 
      // })
      // .then(response => response.json())
      // .then(data => console.log(data)) 
      // .catch(error => console.error('Error:', error)); 

      // fetch(PROXYSERVER + SIGNINAUTHENDPOINT, {
      // method: 'POST', 
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify({username, password}) 
      // })
      // .then(response => response.json())
      // .then(data => console.log(data)) 
      // .catch(error => console.error('Error:', error)); 

      // fetch('https://bbp.api.rentmanager.com/Tenants', {
      // method: 'GET', 
      // headers: {
      //   'Content-Type': 'application/json',
      //   'X-RM12Api-ApiToken': '1Iw8dXAtq0NaP9aj5GGlPubUmv2OLv5sr0CXlT3NBLbdDZRQSaBzdVetiScze5hWE1OIeDHnwtPyAjXTOgbaSViikeXq3LS9tNWygtb03PU='
      // }
      // })
      // .then(response => response.json())
      // .then(data => console.log(data)) 
      // .catch(error => console.error('Error:', error)); 

       setTimeout(()=> {
         if (password === "123456") {
          // successfully login
          const expiryDate = new Date();
          expiryDate.setDate(expiryDate.getDate() + 2);
          Cookies.set('x-x-TOKEN-user', '12345678', { expires: expiryDate });
          window.location.href = '/';
         } else {
          // incorrect password
          handleErrors('incorrect password')
         }
       }, 2000)
     } else {
      handleErrors('input your password!')
     }
  } else {
    handleErrors('cannot validate username')
  }
}