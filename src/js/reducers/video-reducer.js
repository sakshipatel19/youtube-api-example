
export default function(state = {}, action) {
  switch (action.type) {
    case "SELECT_VIDEO":
      console.log("reducer payload",action.payload);
      return action.payload;
    default:
     return state;
  }
}
