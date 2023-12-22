import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor');
  }

  componentDidMount() {
    // console.log('Parent Mounted');
  }
  render() {
    // console.log('Parent Render');
    return (
      <div className="about">
        <h3>This is about Us component.</h3>
        <UserClass />
      </div>
    );
  }
}

export default About;
