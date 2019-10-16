import { connect } from 'react-redux';
import { fetchProfile2, saveProfile2 } from '../actions/actions_profile2';
import { fetchRepos2 } from '../actions/actions_repos2';

import Profile2Component from '../components/Profile2';

const mapStateToProps = state => {
  return {
    profile2 : state.profile2,
    repos2 : state.repos2
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRepos2 : () => {
          dispatch(fetchRepos2());
        },
        fetchProfile2 : () => {
            dispatch(fetchProfile2());
        },
        saveProfile2 : (profile2) => {
          dispatch(saveProfile2(profile2));
      }
    }
}

const Profile2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile2Component);

export default Profile2;