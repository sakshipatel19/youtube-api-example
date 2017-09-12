import {combineReducers} from 'redux';
import VideoListReducer from './videolist-reducer.js'
import VideoReducer from './video-reducer.js'
<<<<<<< HEAD
import DefaultList from './default-reducer.js'
const allReducers= combineReducers({
  defaultvideos: DefaultList,
=======
const allReducers= combineReducers({
>>>>>>> 2b3cc4eb6b8f58f29f80708ff8efa535f48326f1
  videoList: VideoListReducer,
  video : VideoReducer
});
export default allReducers;
