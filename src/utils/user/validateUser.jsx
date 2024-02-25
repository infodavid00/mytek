import Cookies from 'js-cookie';

export default async function validateUser(states) {
  const token = Cookies.get()

  const setwasAuthenticated = bool => states[0](bool)
  const setuserData = data => states[1](data)
  const loading = bool => states[2](bool)

  setTimeout(() => {
  if (token['x-x-TOKEN-user']) {
     // continue validating user
     if (token['x-x-TOKEN-user'] === '12345678') {
       loading(false)
       setwasAuthenticated(true)
       setuserData('TestAccount')
     } else {
      window.location.href = '/signin'
      setwasAuthenticated(false)
      loading(false)
   }
  } else {
     window.location.href = '/signin'
     setwasAuthenticated(false)
     loading(false)
  }
  }, 1000)
}