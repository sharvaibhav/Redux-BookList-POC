// the state over here is not the application state, its the reducers state.
export default function booksReducer(state=null,action){
  switch(action.type){
    case 'BOOK_SELECTED':{
      return action.payload
    }
  }
  return state;
}