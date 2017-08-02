import axios from 'axios'
const API_KEY = 'AIzaSyDUEze2mksFPt_LopOXCZBXgw7TWYZ1qTg'

export function fetchVideosList(searchTerm) {
  const response = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=8&key=${API_KEY}`)
  console.log(response);
  return {
    type: "FETCH_VIDEOS_LIST",
    payload: response
  }
}

export function selectVideo(video) {
  console.log(video);
  return {
    type: "SELECT_VIDEO",
    payload: video
  }
}

export default function defaultList(){
  const response = axios.get(`https://www.googleapis.com/youtube/v3/search?q=gameofthrones&part=snippet&maxResults=8&key=${API_KEY}`)
  console.log(response);
  return {
    type: "DEFAULT_VIDEOS_LIST",
    payload: response
  }
}
