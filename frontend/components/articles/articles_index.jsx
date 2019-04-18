import React from 'react';
import {Link} from 'react-router-dom';
import ArticlesIndexItem from './articles_index_item';

class ArticlesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticles();
    this.props.fetchFeeds();
    this.props.fetchSources();
  }
  
  SignedInPage() {
    
    let allArticles = this.props.articles.map(article=> {
      return(
        <ArticlesIndexItem 
          key={article.id}
          article={article}
        />
      )
    });
    return(
      <div className='display-container'>
        <h2 className='splash-tag-line'>All</h2>
        <p>TEST</p>
        <ul className="article-ul">
          {allArticles}
        </ul>
      </div>
    )
  }
  render (){
    if (this.props.articles === undefined){
      return null;  
  } else {
      return this.SignedInPage();
  }
  }
}

export default ArticlesIndex;