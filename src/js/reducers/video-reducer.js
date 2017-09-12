<<<<<<< HEAD
export default function(state = {}, action) {
  switch (action.type) {
    case "SELECT_VIDEO":
=======

export default function(state = {}, action) {
  switch (action.type) {
    case "SELECT_VIDEO":
      console.log("reducer payload",action.payload);
>>>>>>> 2b3cc4eb6b8f58f29f80708ff8efa535f48326f1
      return action.payload;
    default:
     return state;
  }
}
