import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SourcesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const sourceId = this.props.source.id;
    this.props.history.push(`/feeds/${sourceId}`);
  }
  
  render() {
    return (
      <li>
        <div className='tab'>
            <div className='icon'><img src={window.arrowRightURL} />
            
            </div>
            <div>
              <Link to={`/sources/${this.props.source.id}`}>{this.props.source.source_name}</Link>
            </div>
          </div>
      </li>
    )
  }
}

export default withRouter(SourcesIndexItem);