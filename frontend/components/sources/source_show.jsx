import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SourcesIndexItem from './sources_index_item';
import ModalFeedsIndexItemContainer from '../feeds/modal_feeds_index_item_container';
import ArticleItemContainer from './article_item_container';

class SourceShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.props.fetchSource(this.props.match.params.sourceId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.sourceId != prevProps.match.params.sourceId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
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
        <ArticleItemContainer 
        key = {article.id}
        article={article}/>
      )
    })
    
    if(this.props.source===undefined) {
      return null;
    }

    return (
      // <div className='margin-bottom-show'>
        
        <div className='display-container'>
          Source
          <h2 className='splash-tag-line'>{this.props.source.source_name}</h2>
          <div className="source-description">{this.props.source.description}</div>
          <p>MOST POPULAR ARTICLES</p>
          <ul className="article-ul">
            {articles}
          </ul>

          <div className='margin-bottom-show-list'>
            Add Source to Any of Your Feeds
            <ul>
              {personalFeeds}
            </ul>
          </div>

        </div>

    )
  }
}

export default withRouter(SourceShow);

