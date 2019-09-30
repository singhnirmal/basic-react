import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({users:users}));
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
}

export default App;
