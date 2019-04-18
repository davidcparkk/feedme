import React from 'react';
import {withRouter} from 'react-router-dom';
import back from '../../../app/assets/images/back-arrow.svg';

class FeedArticleShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    const feedId = this.props.match.params.feedId;
    this.props.history.push(`/feeds/${feedId}`);
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.props.fetchFeed(this.props.match.params.feedId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.articleId != prevProps.match.params.articleId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  render() {
    if(this.props.article===undefined ||  this.props.feed===undefined || this.props.source===undefined) {
      return null;
    }

    return (
        <div className='article-show-display-container'>
        <h2 className='article-splash-tag-line'>{this.props.article.title}</h2>
          <p className="article-source-name">{this.props.source.source_name}</p>
          <div className="article-show-img-container">
            <img src={this.props.article.image_url} alt="" className="article-show-img"/>
          </div>
          <div className='article-show-body'>{this.props.article.body}</div>
          <a className='article-show-link' href={`${this.props.article.url}`} target="_blank">VISIT WEBSITE</a>
          <div className="source-back-btn-container">
            <div className="source-back-instruction">Back to Feed</div>
            <img className="source-back-btn" src={back} alt="" onClick={() => this.handleClick()}/>
          </div>
        </div>
    )
  }
}

export default withRouter(FeedArticleShow);

