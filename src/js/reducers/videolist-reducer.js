
<<<<<<< HEAD
export default function(state = {}, action) {
  switch (action.type) {
    case "FETCH_VIDEOS_LIST":
    console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
=======
export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_VIDEOS_LIST":
        
        console.log(action.payload.data.items);
        return action.payload.data.items;
    default:
     return state;
>>>>>>> 2b3cc4eb6b8f58f29f80708ff8efa535f48326f1
  }
}
