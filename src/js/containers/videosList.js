import React from 'react';
import {bindActionCreators} from 'redux';
import {ListGroup,ListGroupItem,Pagination} from 'react-bootstrap';
import {connect} from 'react-redux';
import {selectVideo,fetchVideosList} from '../actions/index'
import { Link } from 'react-router-dom'

class VideosList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage:1
    }
  }
  createList(){
    if(this.props.videolist.items){
      return this.props.videolist.items.map((videos,i) => {
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
  }
 handleSelect(e){
   if(e > this.state.currentPage ){
     if(this.props.videolist.nextPageToken){
       console.log(this.props.videolist.nextPageToken);
       this.props.fetchVideosList(this.props.searchTerm,this.props.videolist.nextPageToken);
     }
   }else{
     if(this.props.videolist.prevPageToken){
       console.log(this.props.videolist.prevPageToken);
       this.props.fetchVideosList(this.props.searchTerm,this.props.videolist.prevPageToken);
     }
   }
   this.setState({currentPage:e});
 }
  render() {
    return (
      <div>
        <ListGroup>
          {this.createList()}
        </ListGroup>
        <div className = "text-center">
          <Pagination prev next first last ellipsis boundaryLinks items={20} maxButtons={5} activePage={this.state.currentPage} onSelect={this.handleSelect.bind(this)}/>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectVideo:selectVideo,fetchVideosList:fetchVideosList},dispatch);
}

export default connect(null,mapDispatchToProps)(VideosList);
