export const PROFILE3_FETCHED = 'PROFILE3_FETCHED';
export const PROFILE3_EDITED = 'PROFILE3_EDITED';

export function fetchProfile3() {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 84b64ce033bcf79071e2ec6f3c324f21b57bec7d"});
    return fetch('https://api.github.com/users/JohnJohn-john', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadProfile3(json))
    })
    .catch(error => console.log(error));
  }
}

export function saveProfile3(profile3) {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 84b64ce033bcf79071e2ec6f3c324f21b57bec7d"});
    return fetch('https://api.github.com/user', {
      method: 'PATCH',
      headers: header,
      body : JSON.stringify(profile3)
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadProfile3(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadProfile3(results) {
  return {
    type : PROFILE3_FETCHED,
    payload : results
  }
}
