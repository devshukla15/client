import * as React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import Box from "@material-ui/core/Box"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import { Toolbar, Avatar, Typography } from "@material-ui/core"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import Form from "../../Form/Form"
import { Link } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import useStyles from "./styles"
import { Switch } from "@material-ui/core"

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  })

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const logout = () => {
    dispatch({ type: "LOGOUT" })

    history.push("/")

    setUser(null)
  }

  const list = ({ anchor, darkMode , setDarkMode }) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {user && (
          <ListItem>
            <Toolbar className={classes.toolbar}>
              
              <div className={classes.profile}>
                <Avatar
                  className={classes.purple}
                  alt={user.result.name}
                  src={user.result.imageUrl}
                >
                  {user.result.name.slice(0, 1)}
                </Avatar>

                <Typography className={classes.userName} variant="h6">
                  {user.result.name}
                </Typography>
              </div>
              
            </Toolbar>
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        <ListItem key={Form}>
          <Button
            component={Link}
            to="/CreatePost"
            color="secondary"
            variant="contained"
          >
            Create Memories
          </Button>
        </ListItem>
      </List>
      <Divider />

      <List>
        <ListItem>
          {user ? (
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          ) : (
            " "
          )}
        </ListItem>
        <ListItem>
          {user ? (
            " "
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          )}
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "#000" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
