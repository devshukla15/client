import { Container, Grow, Grid } from "@material-ui/core"
import Posts from "../Posts/Posts"
import { useDispatch } from "react-redux"
import React, { useEffect, useState } from "react"
import { getPosts } from "../../actions/posts"
import useStyles from "./styles"
import CreatePostButton from "../Posts/CreatePostButton"
import Form from "../Form/Form"

const Home = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const classes = useStyles()
  // eslint-disable-next-line
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])
  return (
    <Grow in>
      <Container >
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          >
          <Grid item xs={12} sm={7}  >
            <Posts setCurrentId={setCurrentId} />
          </Grid>
             <Grid item xs={12} sm={4}>
               
            { currentId ?
              <Form currentId={currentId} setCurrentId={setCurrentId} /> : " " }
            </Grid> 
          {window.innerWidth > 400 ? user ? <CreatePostButton /> : " " : " "} 
         </Grid> 
      </Container>
    </Grow>
  )
}

export default Home
