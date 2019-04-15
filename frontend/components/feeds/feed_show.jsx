import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import FeedsIndexItem from './feeds_index_item';

class FeedShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.props.fetchFeed(this.props.match.params.feedId);
    this.props.fetchSources();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.feedId != prevProps.match.params.feedId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }


  handleClick(articleId) {
    const feedId = this.props.match.params.feedId;
    this.props.history.push(`/feeds/${feedId}/articles/${articleId}`);
  }

  render() {
    let articles = this.props.articles.map(article=> {
      return(
        <li key={article.id} className='all-feeds-index-item' onClick={()=> this.handleClick(article.id)}>
          <div className='article-picture'></div>
          <div className='feed-show-article-container'>
            <div className="feed-show-article-name">{article.title}</div>            
            <div className="feed-show-source-name">{this.props.sources[parseInt(article.source_id)].source_name}</div>
            <div className="feed-show-article-body">{article.body}</div>
            </div>
        </li>
      )
    })


    if (this.props.feed === undefined) {
      return null;
    }

    return (
        <div className='display-container'>
          <h2 className='splash-tag-line'>{this.props.feed.feed_title}</h2>
          <p>Most Popular Articles</p>
          <ul className="article-ul">{articles}</ul>
        </div>
    )
  }
}

export default withRouter(FeedShow);

// let sourcesMap = this.props.feedSourceArr.map(source=> {
//       return(
//         <li key={source.id} className='source-boxes'>
//           <div className='source-box-picture'>pic</div>
          
            
//           <div className='source-box-details'>
//             <div className='source-box-title'>Name: {source.source_name}</div>
//             <div className='source-box-description'> Description: {source.description}</div>
//           </div>
          
//         </li>
//       )
//     })