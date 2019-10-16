import  React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Profile from '../containers/Profile';
import Profile2 from '../containers/Profile2';
import Profile3 from '../containers/Profile3';
import SliderComponent from '../containers/Slider';

class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        currentTab: 'slider'
      }
    }

    componentDidMount() {
      this.props.fetchProfile();
      this.props.fetchProfile2();
      this.props.fetchProfile3();
    }

    render() {
    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home" onClick={() => this.setState({ currentTab: 'slider' })}>Github Profile Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link eventKey={1} onClick={() => this.setState({ currentTab: 'slider' })}>Slider</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => this.setState({ currentTab: 'profile' })}>Profiles</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <div>
        {this.state.currentTab === 'slider' ? <SliderComponent /> : false}
        {this.state.currentTab === 'profile' ? <Profile /> : false}
        {this.state.currentTab === 'profile' ? <Profile2 /> : false}
        {this.state.currentTab === 'profile' ? <Profile3 /> : false}
      </div>
    </div>
    );
  }
}

export default App;