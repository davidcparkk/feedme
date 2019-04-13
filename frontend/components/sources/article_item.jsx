import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const sourceId = this.props.match.params.sourceId;
    this.props.history.push(`/sources/${sourceId}/articles/${this.props.article.id}`);
  }
  
  render() {
    return (
      <li key={this.props.article.id} className='all-feeds-index-item' onClick={()=> this.handleClick()}>
      {/* <li key={this.props.article.id} className='all-feeds-index-item' onClick={() => dispatch(this.props.openModal('articleShow'))}> */}
        <div className='article-picture'></div>
          <div className='feed-show-article-container'>
            <div className="feed-show-article-name">{this.props.article.title}</div>   
            <div className="feed-show-source-name"></div>
            <div className="feed-show-article-body">{this.props.article.body}</div>
          </div>
      </li>
    )
  }
}

export default withRouter(ArticleItem);