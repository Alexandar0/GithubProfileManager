import {
    REPOS3_FETCHED
  } from '../actions/actions_repos3'
  
  const repos3 = (state = [], action) => {
    switch (action.type) {
      case REPOS3_FETCHED:
        return action.payload
      default:
        return state
    }
  }
  
  export default repos3