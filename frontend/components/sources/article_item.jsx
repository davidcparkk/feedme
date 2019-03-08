import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // const sourceId = this.props.source.id;
    // this.props.fetchSource(sourceId).then(this.props.history.push(`/sources/${sourceId}`));
  }
  
  render() {
    return (
      <li key={this.props.article.id}>
        <div className='source-boxes'>
        <img src={window.laptopURL} className='image-class'/>
          
            
          <div className='source-box-details'>
            <div className='source-box-title'>
              <div onClick={this.handleClick} className="article-title">{this.props.article.title}</div>
            </div>
            <div className='source-box-description'>{this.props.article.body}</div>
          </div>
        </div>
      </li>
    )
  }
}

export default withRouter(ArticleItem);