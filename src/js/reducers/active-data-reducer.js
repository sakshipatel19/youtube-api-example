import DataReducer from './data-reducer.js';
export default function (state = DataReducer, action) {
  switch (action.type) {
    case "STATUS":
        return DataReducer.filter(data => data.status === action.e || action.e === 'All')
    default:
        return state;
  }
}
