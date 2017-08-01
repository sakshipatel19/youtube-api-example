import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchVideosList from '../actions/index';
import VideosList from './videoslists'

class Home extends React.Component {
  render () {
    console.time();
    return(
      <div>
        <div className = "text-center">
            <form className="navbar-form" role="search" onSubmit={this.handleQuery.bind(this)}>
              <div className="input-group add-on">
                <input className="form-control" placeholder="Search" ref="search" name="srch-term" id="srch-term" type="text"/>
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                </div>
              </div>
            </form>
          </div>
          <VideosList videoList={this.props.videoList} />
      </div>
    )
    console.timeend();
  }
  handleQuery(event){
    event.preventDefault();
    this.props.fetchVideosList(this.refs.search.value.trim());
  }
}

function mapStateToProps(state){
  return {
    videoList: state.videoList
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchVideosList: fetchVideosList}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
