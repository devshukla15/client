import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import Form from "../Form/Form"
import { Container, Grid, Grow } from "@material-ui/core"

const CreatePost = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
  }, [currentId, dispatch])

  return (
    <Grow in>
      <Container>
        <Grid>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Container>
    </Grow>
  )
}

export default CreatePost
