export const REPOS3_FETCHED = 'REPOS3_FETCHED';

export function fetchRepos3() {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 84b64ce033bcf79071e2ec6f3c324f21b57bec7d"});
    return fetch('https://api.github.com/user/repos', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadRepos3(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadRepos3(results) {
  return {
    type : REPOS3_FETCHED,
    payload : results
  }
}