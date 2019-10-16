export const REPOS2_FETCHED = 'REPOS2_FETCHED';

export function fetchRepos2() {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 54476984d2d34883fba737529e8b6df6ec440b76"});
    return fetch('https://api.github.com/user/repos', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadRepos2(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadRepos2(results) {
  return {
    type : REPOS2_FETCHED,
    payload : results
  }
}