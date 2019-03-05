import React from 'react';
import SourcesIndexItem from './sources_index_item';
import {Link} from 'react-router-dom';

class SourcesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchSources();
  }
  
  render() {

    let allSources = this.props.sources.map(source=> {
      return(
        <SourcesIndexItem 
        key={source.id}
        source={source}
        />
      )
    })
    
    return(
      <div className='feedsIndex'>
        <div className='display-container'>
          <h2>All Sources</h2>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <p>LATEST</p>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <ul>
            {allSources}
          </ul>
        </div>
      </div>
    )
  }
}

export default SourcesIndex;