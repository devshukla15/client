import {
  FETCH_ALL,
  DELETE,
  UPDATE,
  CREATE,
  LIKE,
  FETCH_POST,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes"

const Reducers = (posts = [], action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...posts, isLoading: true }

    case END_LOADING:
      return { ...posts, isLoading: false }

    case FETCH_ALL:
      return action.payload

    case FETCH_POST:
      return [...posts, action.payload]

    case CREATE:
      return [...posts, action.payload]

    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )

    case DELETE:
      return posts.filter((post) => post._id !== action.payload)

    case LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )

    default:
      return posts
  }
}
export default Reducers
