import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import FeedsIndexItem from './feeds_index_item';

class FeedShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    debugger
    let articles = this.props.articles.map(article=> {
      return(
        <li key={article.id} className='source-boxes'>
          <div className='source-box-picture'>pic</div>
          
            
          <div className='source-box-details'>
            <div className='source-box-title'>Name: {article.title}</div>
            <div className='source-box-description'> Body: {article.body}</div>
          </div>
          
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
          <ul>{articles}</ul>
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