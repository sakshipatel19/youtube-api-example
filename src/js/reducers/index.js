import {combineReducers} from 'redux';
import VideoListReducer from './videolist-reducer.js'
import VideoReducer from './video-reducer.js'
const allReducers= combineReducers({
  videoList: VideoListReducer,
  video : VideoReducer
});
export default allReducers;
