import { combineReducers } from 'redux';

import profile from './reducer_profile';
import profile2 from './reducer_profile2';
import profile3 from './reducer_profile3';
import repos from './reducer_repos';
import repos2 from './reducer_repos2';
import repos3 from './reducer_repos3';

const rootReducer = combineReducers({
    profile,
    profile2,
    profile3,
    repos,
    repos2,
    repos3
});

export default rootReducer;