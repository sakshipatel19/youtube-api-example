
export default function(state = {}, action) {
  switch (action.type) {
    case "FETCH_VIDEOS_LIST":
    console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
