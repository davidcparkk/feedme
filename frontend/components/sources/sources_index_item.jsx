import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SourcesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const sourceId = this.props.source.id;
    this.props.history.push(`/sources/${sourceId}`);
  }
  
  render() {
    return (
      <li key={this.props.source.id}>
        <div className='source-boxes'>
        <div className='source-box-picture'>pic</div>
          
            
          <div className='source-box-details'>
            <div className='source-box-title'>
              <Link to={`/sources/${this.props.source.id}`}>{this.props.source.source_name}</Link>
            </div>
            <div className='source-box-description'> Description: {this.props.source.description}</div>
          </div>
        </div>
      </li>
    )
  }
}

export default withRouter(SourcesIndexItem);