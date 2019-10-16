import { connect } from 'react-redux';

import SliderComponent2 from '../components/Slider';

const mapStateToProps = state => {
  return {
    profile : state.profile,
    profile2 : state.profile2,
    profile3 : state.profile3
  };
}

const SliderComponent = connect(
  mapStateToProps
)(SliderComponent2);

export default SliderComponent;