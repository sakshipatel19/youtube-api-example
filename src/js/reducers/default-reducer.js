export default function(state = [], action) {
  switch (action.type) {
    case "DEFAULT_VIDEOS_LIST":
      return action.payload.data.items.map(item => `https://www.youtube.com/embed/${item.id.videoId}`)
    default:
     return state;
   }
}
