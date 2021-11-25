import * as api from "../api"
import { FETCH_ALL, DELETE,FETCH_POST, START_LOADING, END_LOADING, UPDATE, CREATE, LIKE } from "../constants/actionTypes"

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPost(id)

    dispatch({ type: FETCH_POST, payload: { post: data }})
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error);
  }
}

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts()
    dispatch({ type: FETCH_ALL , payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)

    dispatch({ type: CREATE , payload: data })

  } catch (error) {
    console.log(error.message)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post)

    dispatch({ type:  UPDATE , payload: data })

    window.history.push("/")
  } catch (error) {
    console.log(error.message)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)

    dispatch({ type: DELETE , payload: id })
  } catch (error) {
    console.log(error.message)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)

    dispatch({ type: LIKE , payload: data })


  } catch (error) {
    console.log(error.message)
  }
}
