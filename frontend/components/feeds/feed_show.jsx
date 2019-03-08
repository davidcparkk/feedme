import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import FeedsIndexItem from './feeds_index_item';

class FeedShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchFeed(this.props.match.params.feedId);
  }
  render() {


    let articles = this.props.articles.map(article=> {
      
      return(
        
        <li key={article.id} className='all-feeds-index-item'>
          <div className='icon'><img src={window.readURL} />
          </div>
            <div className="feed-show-article-name">{this.props.sources[parseInt(article.source_id)].source_name}</div>
            <div className="feed-show-article-name">{article.title}</div>
            <div className="feed-show-article-body">{article.body}</div>
        </li>
      )
    })

    if (this.props.feed === undefined) {
      return null;
    }

    return (
        <div className='display-container'>
          <h2 className='splash-tag-line'>{this.props.feed.feed_title}</h2>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <p>Most Popular Articles</p>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
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