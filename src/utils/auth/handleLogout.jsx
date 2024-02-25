import Cookies from 'js-cookie';

export default async function handleLogout() {
  Cookies.remove('x-x-TOKEN-user')
  //deauthenticate user
  window.location.href = '/signin'
}