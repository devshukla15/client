import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
 
  [theme.breakpoints.down("sm")]: {
    appBar: {
      padding: "10px 20px",
    },
    heading: {
      display: "none",
    },
    userName: {
      display: "none",
    },
    image: {
      marginLeft: "5px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
      width: "160px",
    },
  },
}))
