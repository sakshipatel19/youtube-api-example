import axios from 'axios'
const API_KEY = 'AIzaSyDUEze2mksFPt_LopOXCZBXgw7TWYZ1qTg'
<<<<<<< HEAD

export function fetchVideosList(searchTerm,pageToken) {
  const response = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&pageToken=${pageToken}&key=${API_KEY}`)
=======
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

function fetchVideosList(searchTerm) {
  const response = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=8&key=${API_KEY}`)
  console.log(response);
>>>>>>> 2b3cc4eb6b8f58f29f80708ff8efa535f48326f1
  return {
    type: "FETCH_VIDEOS_LIST",
    payload: response
  }
}

<<<<<<< HEAD
=======
export default fetchVideosList;
>>>>>>> 2b3cc4eb6b8f58f29f80708ff8efa535f48326f1

export function selectVideo(video) {
  console.log(video);
  return {
    type: "SELECT_VIDEO",
    payload: video
  }
}
<<<<<<< HEAD

export default function defaultList(){
  const response = axios.get(`https://www.googleapis.com/youtube/v3/search?q=gameofthrones&part=snippet&maxResults=8&key=${API_KEY}`)
  return {
    type: "DEFAULT_VIDEOS_LIST",
    payload: response
  }
}
=======
>>>>>>> 2b3cc4eb6b8f58f29f80708ff8efa535f48326f1
