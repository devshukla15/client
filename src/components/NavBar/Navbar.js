import React, { useEffect, useState } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import useStyles from "./styless"
import { useDispatch } from "react-redux"
import decode from "jwt-decode"
import memoriestext from "../../images/memories3.png"
import TemporaryDrawer from "./Menubar/Menubar"
import { Switch } from "@material-ui/core"

const Navbar = ({ darkMode, setDarkMode }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

  const [isDesktop, setDesktop] = useState(window.innerWidth > 400)

  const updateSize = () => {
    setDesktop(window.innerWidth > 400)
  }

  const logout = () => {
    dispatch({ type: "LOGOUT" })

    history.push("/")

    setUser(null)
  }

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token)

      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem("profile")))

    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
    // eslint-disable-next-line
  }, [location, user?.token])

  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <Link to="/" className={classes.brandContainer}>
        <img
          component={Link}
          to="/"
          src={memoriestext}
          alt="icon"
          className={classes.logo}
        />
      </Link>

      <Switch
        checked={darkMode}
        onClick={() => setDarkMode(!darkMode)}
        label="Theme"
      />

      {isDesktop ? (
        <React.Fragment>
          <Toolbar className={classes.toolbar}>
            {user ? (
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
                <Button variant="contained" color="secondary" onClick={logout}>
                  Logout
                </Button>
              </div>
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
          </Toolbar>
        </React.Fragment>
      ) : (
        <TemporaryDrawer darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
    </AppBar>
  )
}

export default Navbar
