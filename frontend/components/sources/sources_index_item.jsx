import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SourcesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const sourceId = this.props.source.id;
    this.props.fetchSource(sourceId).then(this.props.history.push(`/sources/${sourceId}`));
  }
  
  render() {
    return (
      <li key={this.props.source.id} onClick={this.handleClick} className="source-li" style={{backgroundImage:`url(${this.props.source.image_url})`}}>
        <div className='source-boxes' >{this.props.source.source_name}
        {/* <img src={window.twitterURL} className='image-class'/> */}
          
            
          {/* <div className='source-box-details'>
            <div className='source-box-title'>
              <div  className="article-title">{this.props.source.source_name}</div>
            </div>
            <div className='source-box-description'> {this.props.source.description}</div>
          </div> */}
        </div>
      </li>
    )
  }
}

export default withRouter(SourcesIndexItem);