import axios from 'axios'
const API_KEY = 'AIzaSyDUEze2mksFPt_LopOXCZBXgw7TWYZ1qTg'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

function fetchVideosList(searchTerm) {
  const response = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=8&key=${API_KEY}`)
  console.log(response);
  return {
    type: "FETCH_VIDEOS_LIST",
    payload: response
  }
}

export default fetchVideosList;

export function selectVideo(video) {
  console.log(video);
  return {
    type: "SELECT_VIDEO",
    payload: video
  }
}
