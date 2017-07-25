import React from 'react';
import {bindActionCreators} from 'redux';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {selectMovie} from '../actions/index'
class MovieList extends React.Component{

createList(){
 return this.props.movies.map((movies)=>{
  return (
    <ListGroupItem key={movies.id} onClick={ () => this.props.selectMovie(movies)}>{movies.name}</ListGroupItem>
  );
});
}

render() {
  return (
    <ListGroup>
      {this.createList()}
    </ListGroup>
  );
}
}

function mapStateToProps(state){
  return{
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectMovie:selectMovie},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieList);
