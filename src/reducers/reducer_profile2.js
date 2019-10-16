import {
    PROFILE2_FETCHED
  } from '../actions/actions_profile2'
  
  const profile2 = (state = {}, action) => {
    switch (action.type) {
      case PROFILE2_FETCHED:
        return action.payload
      default:
        return state
    }
  }
  
  export default profile2