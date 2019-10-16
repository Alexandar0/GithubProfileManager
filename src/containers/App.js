import { connect } from 'react-redux';
import { fetchProfile } from '../actions/actions_profile';
import { fetchProfile2 } from '../actions/actions_profile2';
import { fetchProfile3 } from '../actions/actions_profile3';

import AppComponent from '../components/App'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProfile : () => {
            dispatch(fetchProfile());
        },
        fetchProfile2 : () => {
            dispatch(fetchProfile2());
        },
        fetchProfile3 : () => {
            dispatch(fetchProfile3());
        }
    }
}

const App = connect(
  false,
  mapDispatchToProps
)(AppComponent);

export default App;