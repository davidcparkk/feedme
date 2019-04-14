import React from 'react';
import SourcesIndexItemContainer from './sources_index_item_container';
import {Link} from 'react-router-dom';

class SourcesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.props.fetchSources();
  }
  
  render() {
    let allSources = this.props.sources.map(source=> {
      return(
        <SourcesIndexItemContainer 
        key={source.id}
        source={source}
        />
      )
    })
    
    return(
        <div className='source-container'>
          <h2 className='splash-tag-line'>All Sources</h2>
          <p>LATEST</p>
          {/* <div className='related-topics'>RELATED TOPICS</div> */}
          <div className="source-list-container">
            <ul className="source-ul">
              {allSources}
            </ul>
          </div>
        </div>
    )
  }
}

export default SourcesIndex;