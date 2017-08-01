import React from 'react'
import {connect} from 'react-redux';

class Video extends React.Component {
  render () {
    console.log(this.props.video);
    const link = "https://www.youtube.com/embed/"+this.props.video.id.videoId;
    return(
      <div className="text-center" style={{marginTop:"60px"}}>
        <iframe width="600" height="400" src={link} frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    video: state.video
  };
}

export default connect(mapStateToProps)(Video);
