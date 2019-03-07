import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SourcesIndexItem from './sources_index_item';
import ModalFeedsIndexItemContainer from '../feeds/modal_feeds_index_item_container';
import ArticleItem from './article_item';

class SourceShow extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    let personalFeeds = this.props.feeds.map(feed=> {
      return(
        <ModalFeedsIndexItemContainer 
        key={feed.id}
        feed={feed}
        />
      )
    })

    let articles = this.props.articles.map(article => {
      return(
        <ArticleItem 
        key = {article.id}
        article={article}/>
      )
    })
    
    return (
      <div className='margin-bottom-show'>
        
        <div className='display-container'>
          <h2 className='splash-tag-line'>{this.props.source.source_name}</h2>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <p>MOST POPULAR ARTICLES</p>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <div className='separator-small'></div>
          <ul>
            {articles}
          </ul>
        </div>

        <div className='margin-bottom-show-list'>

          <Link to='/feeds'>  Add Source to Any of Your Feeds</Link>
          <ul>
            {personalFeeds}
          </ul>
            
        </div>
          
      </div>
      
      
    )
  }
}

export default withRouter(SourceShow);