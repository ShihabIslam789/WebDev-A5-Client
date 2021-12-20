import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AddingCampus from "./AddingCampus";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Courier, sans-serif",
    fontSize: "35px",
    color: "#d93f53",
  },
  appBar: {
    backgroundColor: "#0a1ef0",
    shadows: ["none"],
  },
  data: {
    marginTop: "50px",
    textAlign: "center",
    margin: "auto",
    height: "auto",
    width: "500px",
    backgroundColor: "#0d79de",
    borderRadius: "50px",
  },
  imgs: {
    maxHeight: "100%",
    maxWidth: "100%",
    marginBottom: "-4px",
  },
  links: {
    textDecoration: "none",
  },
}));

const AllCampusesView = (props) => {

  const classes = useStyles();
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            CRUD app
          </Typography>

          <Link className={classes.links} to={"/"}>
            <Button
              variant="contained"
              style={{
                marginRight: "10px",
                color: "#0B1320",
                backgroundColor: "#1771bd",
              }}
            >
              Main Menu
            </Button>
          </Link>

          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginRight: "10px",
                color: "#0B1320",
                backgroundColor: "#1771bd",
              }}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button
              variant="contained"
              style={{ color: "#0B1320", backgroundColor: "#1771bd" }}
            >
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <h1
        style={{
          textAlign: "center",
          color: "#1771bd",
          backgroundColor: "#1C3F60",
          marginTop: "0px",
        }}
      >
        Click the names to view more information!
      </h1>

      <AddingCampus />

      {props.allCampuses.map((campus) => (
        <div key={campus.id} className={classes.data}>
          <Link className={classes.links} to={`/campus/${campus.id}`}>
            <h1
              style={{
                color: "#1771bd",
                margin: "10px",
                display: "inline-block",
              }}
            >
              {campus.name + " - ID: " + campus.id}
            </h1>
          </Link>
          <button
            style={{
              color: "#1771bd",
              backgroundColor: "#1C3F60",
              display: "inline-block",
              fontSize: "30px",
              float: "right",
              borderRadius: "180px",
              border: "1px solid #1771bd",
            }}
            onClick={function(){
              axios.delete(`../api/campuses/${campus.id}`).then((res) => {
                console.log(res);
              });
              window.location.reload();
            }}
          >
            X
          </button>
          <br></br>
          <img
            src={campus.imgurl}
            className={classes.imgs}
            alt={campus.name + " campus"}
          ></img>
        </div>
      ))}

      <div style={{ height: "50px" }}></div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;