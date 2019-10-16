export const PROFILE2_FETCHED = 'PROFILE2_FETCHED';
export const PROFILE2_EDITED = 'PROFILE2_EDITED';

export function fetchProfile2() {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"54476984d2d34883fba737529e8b6df6ec440b76"});
    return fetch('https://api.github.com/users/JohnSmith-megabit', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadProfile2(json))
    })
    .catch(error => console.log(error));
  }
}

export function saveProfile2(profile2) {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 54476984d2d34883fba737529e8b6df6ec440b76"});
    return fetch('https://api.github.com/user', {
      method: 'PATCH',
      headers: header,
      body : JSON.stringify(profile2)
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadProfile2(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadProfile2(results) {
  return {
    type : PROFILE2_FETCHED,
    payload : results
  }
}