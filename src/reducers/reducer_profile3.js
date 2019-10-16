import {
    PROFILE3_FETCHED
  } from '../actions/actions_profile3'
  
  const profile3 = (state = {}, action) => {
    switch (action.type) {
      case PROFILE3_FETCHED:
        return action.payload
      default:
        return state
    }
  }
  
  export default profile3