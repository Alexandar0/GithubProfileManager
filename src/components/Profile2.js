import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Profile2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo : this.props.profile2,
            editing : false,
            error : false
        }
    }

    componentDidMount() {
      this.props.fetchRepos2();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({userInfo: nextProps.profile2, editing: false, error: false})
    }  

      updateValue(type, event) {
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
        userInfoCopy[type] = event.target.value;
        this.setState({userInfo:userInfoCopy});
      }

      saveProfile2() {
        var error = false;
        var propertiesToCheck = ['name','bio','location','company'];
        propertiesToCheck.forEach(function(term) {
          if(this.state.userInfo[term]==='') {
            error = true;
          }
        }.bind(this));
        if(!error) {
          this.props.saveProfile2(this.state.userInfo);
        }
        this.setState({error});
      }
  
render() {    
  
  return (
    <div className="container">
      <Button variant="dark" onClick={() => this.setState({editing: !this.state.editing})}>
        {this.state.editing ? 'Cancel Edit' : 'Edit'}
      </Button>
      <hr />

      {this.state.editing ? 
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            className={this.state.error&&this.state.userInfo.name==='' ? 'red-border' : ''}
            value={this.state.userInfo.name}
            placeholder="Enter text"
            onChange={this.updateValue.bind(this,'name')}
          />
          <Form.Label>Bio</Form.Label>
          <Form.Control
            type="text"
            className={this.state.error&&this.state.userInfo.bio==='' ? 'red-border' : ''}
            value={this.state.userInfo.bio}
            placeholder="Enter text"
            onChange={this.updateValue.bind(this,'bio')}
          />
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            className={this.state.error&&this.state.userInfo.location==='' ? 'red-border' : ''}
            value={this.state.userInfo.location}
            placeholder="Enter text"
            onChange={this.updateValue.bind(this,'location')}
          />
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            className={this.state.error&&this.state.userInfo.company==='' ? 'red-border' : ''}
            value={this.state.userInfo.company}
            placeholder="Enter text"
            onChange={this.updateValue.bind(this,'company')}
          />
          <br />
          <Button variant="dark" onClick={this.saveProfile2.bind(this)}>Save</Button>
        </Form.Group>
      : 
        <div>
            <p><strong>Name:</strong> {this.state.userInfo.name}</p>
            <p><strong>Bio:</strong> {this.state.userInfo.bio}</p>
            <p><strong>Location:</strong> {this.state.userInfo.location}</p>
            <p><strong>Company:</strong> {this.state.userInfo.company}</p>
        </div> 
    }
    <div className="container">
    <h5>Repositories:</h5>
    <ul className="list-group">
      {this.props.repos2.map(repo => {
        return (
          <li className="list-group-item" key={'repo-' + repo.id}>
            <h6 className="list-group-item-heading">{repo.name}</h6>
            <p className="list-group-item-text">{repo.description}</p>
          </li>
        )
      })}
    </ul>
    <br />
    </div>

    </div>
  );
}
}

export default Profile2;