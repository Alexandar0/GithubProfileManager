export const REPOS_FETCHED = 'REPOS_FETCHED';

export function fetchRepos() {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token b6b20a9d4953c43074be38c864387589df442c63"});
    return fetch('https://api.github.com/user/repos', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadRepos(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadRepos(results) {
  return {
    type : REPOS_FETCHED,
    payload : results
  }
}