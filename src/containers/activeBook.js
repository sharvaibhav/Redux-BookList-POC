import React,{Component} from 'react'

import {connect} from 'react-redux';
import {selectBook} from '../actions';

import {bindActionCreators} from 'redux';

class ActiveBook extends Component{
  

  render(){
    if(!this.props.book){
      return <div> Select a book to get started </div>;
    }
    return(
      <div className='col-sm-8'>
        <h3> Details for: </h3>
        <div> {this.props.book.title}</div>
        <div> Pages:- {this.props.book.pages}</div>
        
      </div>
    );
  }

}

function mapStateToProps(state){
  //whatever is returned from here, is going to be coming as props to the component, here state is the complete application state
  return{
    book:state.activeBook
  }
}

export default connect(mapStateToProps)(ActiveBook);