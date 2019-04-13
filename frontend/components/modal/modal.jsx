import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import FeedsFormContainer from '../feeds/feeds_form_container';
import ArticleShowContainer from '../articles/article_show_container';

class Modal extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    if(!this.props.modal) {
      return null;
    }
    
    let component;
    
    switch(this.props.modal) {
      case 'feedsForm':
        component= <FeedsFormContainer />;
        break;
      case 'articleShow':
        component= <ArticleShowContainer />;
        break;
      default:
        return null;
    }

    return(
      <div className='modal-background' onClick = {this.props.closeModal}>
        <div className='modal-child' onClick={e => e.stopPropagation()}> 
          {component}
        </div>
      </div>
    )
  } 
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);