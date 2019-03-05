import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SourcesIndexItem from './sources_index_item';


class SourceShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchSources();
  }

  render() {
    return (
      <div className='feedsIndex'>
        
        <div className='display-container'>
          <h2>{this.props.source.source_name}</h2>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <p>MOST POPULAR</p>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
        </div>
      </div>
    )
  }
}

export default withRouter(SourceShow);