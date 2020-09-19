import React from 'react';

class Users extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
        id:this.props.match.params.id
    }
  }

  render(){
    return (
      <div>
          <h1>welcome user N° {this.state.id}</h1>
      </div>
    );
  }

}

export default Users;
