import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchVideosList} from '../actions/index';
import VideosList from './videosList'
import DefaultVideos from '../components/defaultVideos'
import defaultList from '../actions/index'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      whichView: 'HOME'
    }
  }

  componentWillMount() {
    this.props.defaultList();
  }

  render () {
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
        {this.state.whichView === 'HOME' ? <DefaultVideos defaultVideos={this.props.defaultvideos} /> : <VideosList />}
      </div>
    )
  }

  handleQuery(event){
    event.preventDefault();
    this.props.fetchVideosList(this.refs.search.value.trim());
    this.setState({
      whichView: 'SEARCH'
    })
  }
}

function mapStateToProps(state){
  return {
    defaultvideos: state.defaultvideos,
    videoList:state.videoList
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchVideosList: fetchVideosList,defaultList:defaultList}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
