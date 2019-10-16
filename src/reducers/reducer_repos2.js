import {
    REPOS2_FETCHED
  } from '../actions/actions_repos2'
  
  const repos2 = (state = [], action) => {
    switch (action.type) {
      case REPOS2_FETCHED:
        return action.payload
      default:
        return state
    }
  }
  
  export default repos2