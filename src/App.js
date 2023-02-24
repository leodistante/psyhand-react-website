import { ThemeProvider, makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import CustomBtn from "./components/CustomBtn";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import { Typography } from "@material-ui/core";

import SecurityIcon from "@material-ui/icons/Security";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ComputerIcon from "@material-ui/icons/Computer";
import HttpIcon from "@material-ui/icons/Http";

const theme = createTheme({
  palette: {
    primary: {
      main: "#14033C",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="black">
            At PsyHand we are happy to help your mind
          </Typography>
          <Typography
            variant="h5"
            className={classes.littleSpace}
            color="black"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            sodales congue tristique. Cras non pretium sem. Duis interdum lorem
            sit amet ligula pretium, sed rutrum urna semper. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Phasellus egestas gravida ullamcorper.
          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Privacy" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Book Session" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Feel Better" btnTitle="Show me More"/>
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>}  title="Feedback" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>}  title="Download App" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="FAQs" btnTitle="Show me More"/>
        </div>
      </ThemeProvider>
      <div className={classes.bigSpace}>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
