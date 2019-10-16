import { connect } from 'react-redux';
import { fetchProfile3, saveProfile3 } from '../actions/actions_profile3';
import { fetchRepos3 } from '../actions/actions_repos3';

import Profile3Component from '../components/Profile3';

const mapStateToProps = state => {
  return {
    profile3 : state.profile3,
    repos3 : state.repos3
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRepos3 : () => {
          dispatch(fetchRepos3());
        },
        fetchProfile3 : () => {
            dispatch(fetchProfile3());
        },
        saveProfile3 : (profile3) => {
          dispatch(saveProfile3(profile3));
      }
    }
}

const Profile3 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile3Component);

export default Profile3;