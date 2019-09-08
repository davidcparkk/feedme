import React from 'react';

class Loader extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      style: 'search-spinner'
    }
  }

  render(){
    return(
      <div className={this.state.style}>
      </div>
    )
  }
}

export default Loader;