import axios from "axios"

const API = axios.create({ baseURL: "https://memories-college.herokuapp.com" })

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`
  }

  return req
})

export const fetchPost = (id) => API.get(`/posts/${id}`)

export const fetchPosts = () => API.get("/posts")

export const createPost = (newPost) => API.post("/posts", newPost)

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id} `, updatedPost)

export const deletePost = (id) => API.delete(`/posts/${id}`)

export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (FormData) => API.post("/users/signin", FormData)

export const signUp = (FormData) => API.post("/users/signup", FormData)
