import React from 'react';
import {withRouter} from 'react-router-dom';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    
  }

  render() {
    if(this.props===undefined) {
      return null;
    }

    return (
        <div className='display-container'>    
        hi      
        </div>
    )
  }
}

export default withRouter(ArticleShow);

