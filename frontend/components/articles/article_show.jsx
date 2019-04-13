import React from 'react';
import {withRouter} from 'react-router-dom';
import back from '../../../app/assets/images/back-arrow.svg';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    const sourceId = this.props.match.params.sourceId;
    this.props.history.push(`/sources/${sourceId}`);
  }

  componentDidMount() {
    this.props.fetchSource(this.props.match.params.sourceId);
  }

  render() {
    if(this.props.article===undefined ||  this.props.source===undefined) {
      return null;
    }

    return (
        <div className='article-show-display-container'>    
        <h2 className='article-splash-tag-line'>{this.props.article.title}</h2>
          <p className="article-source-name">{this.props.source.source_name}</p>
          <div className="article-show-img"></div>
          <div className='article-show-body'>{this.props.article.body}</div>
          <div className='article-show-link'>VISIT WEBSITE</div>
          <div className="source-back-btn-container">
            <div className="source-back-instruction">Back to Source</div>
            <img className="source-back-btn" src={back} alt="" onClick={() => this.handleClick()}/>
          </div>
        </div>
    )
  }
}

export default withRouter(ArticleShow);

