import React, { Component } from 'react';
import Slider from 'react-slick';

class SliderComponent extends Component {
  render() {  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
    <div>
        <Slider {...settings}>
        <div><h3>{this.props.profile.name}</h3></div>
        <div><img className="center-block" src={this.props.profile.avatar_url} alt={this.props.profile.name} /></div>
        <div><h3>{this.props.profile.bio}</h3></div>
        <div><h3>{this.props.profile.location}</h3></div>
      </Slider>
    </div>
    <br/>
    <hr/>
    <div>
        <Slider {...settings}>
        <div><h3>{this.props.profile2.name}</h3></div>
        <div><img className="center-block" src={this.props.profile2.avatar_url} alt={this.props.profile2.name} /></div>
        <div><h3>{this.props.profile2.bio}</h3></div>
        <div><h3>{this.props.profile2.location}</h3></div>
      </Slider>
    </div>
    <br/>
    <hr/>
    <div>
        <Slider {...settings}>
        <div><h3>{this.props.profile3.name}</h3></div>
        <div><img className="center-block" src={this.props.profile3.avatar_url} alt={this.props.profile3.name} /></div>
        <div><h3>{this.props.profile3.bio}</h3></div>
        <div><h3>{this.props.profile3.location}</h3></div>
      </Slider>
    </div>
    </div>
  );
}
}

export default SliderComponent;