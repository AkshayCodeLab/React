import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + ' constructor');

    this.state = {
      userInfo: {
        name: 'dummy',
        location: 'dummy',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      'https://api.github.com/users/AkshayCodeLab'
    );

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(this.props.name + ' mounted');
  }
  render() {
    const { name, location } = this.state.userInfo;

    // console.log(name + ' rendered');
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Location : {location}</h2>
        <h3> Contact : djs</h3>
      </div>
    );
  }
}

export default UserClass;
