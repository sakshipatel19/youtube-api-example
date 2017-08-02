import React from 'react';
import {bindActionCreators} from 'redux';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {selectVideo} from '../actions/index'
import { Link } from 'react-router-dom'

class VideosList extends React.Component{
  createList(){
    return this.props.videoList.map((videos,i) => {
      return (
        <Link to='/video'>
          <ListGroupItem  style={{width:"800px",margin:"0 auto"}}key={i} onClick={ () => this.props.selectVideo(videos)}>
            <img src={videos.snippet.thumbnails.default.url} />
            <b>Title:{videos.snippet.title}</b>
          </ListGroupItem>
        </Link>
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
  return {
    videoList: state.videoList
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectVideo:selectVideo},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(VideosList);
