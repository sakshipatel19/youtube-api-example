import {combineReducers} from 'redux';
import VideoListReducer from './videolist-reducer.js'
import VideoReducer from './video-reducer.js'
import DefaultList from './default-reducer.js'
const allReducers= combineReducers({
  defaultvideos: DefaultList,
  videoList: VideoListReducer,
  video : VideoReducer
});
export default allReducers;
