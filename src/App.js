import React, { useState } from "react"
import Navbar from "./components/NavBar/Navbar"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Auth from "./components/Auth/Auth"
import CreatePost from "./components/Posts/CreatePost"
import PostDetails from "./components/PostDetails/PostDetails"
import { Container , CssBaseline , ThemeProvider , createTheme} from "@material-ui/core"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  })
  return (
    <>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/CreatePost" exact component={CreatePost} />
            <Route path="/posts/:id"  exact component={PostDetails} />
          </Switch>
        </Container>
      </BrowserRouter>
      </ThemeProvider>

    </>
  )
}

export default App
