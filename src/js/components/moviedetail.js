import React from 'react';
import {connect} from 'react-redux';

class MovieDetail extends React.Component{

render() {
  if(!this.props.movie){
    return(
      <div>
        <h4>Select Movie......</h4>
      </div>
    );
  }

  return (
    <div>
      <h2>Movie Name:{this.props.movie.name}</h2>
      <video width="400" title={this.props.movie.name} src={this.props.movie.url} controls>
      </video>
    </div>
  );
}
}

function mapStateToProps(state){
  return{
    movie: state.activeMovie
  };

}

export default connect(mapStateToProps)(MovieDetail);
