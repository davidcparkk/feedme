import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import FeedsIndexItem from './feeds_index_item';

class FeedShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {


    let articles = this.props.articles.map(article=> {
      return(
        <li key={article.id} className='all-feeds-index-item'>
          <div className='icon'><img src={window.readURL} />
          </div>
            <div className="feed-show-article-name">Name: {article.title}</div>
            <div className="feed-show-article-body">Body: {article.body}</div>
        </li>
      )
    })
    return (
        <div className='display-container'>
          <h2>{this.props.feed.feed_title}</h2>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <p>MOST POPULAR</p>
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