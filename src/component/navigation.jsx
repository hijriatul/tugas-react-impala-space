import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BusinessIcon from '@material-ui/icons/Business';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import {Link}  from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 360,
    position:"fixed",
    bottom:0,
    backgroundColor:"red",
    zIndex:200,
  },
  fontTitle:{
      color:"white",
  },
});

function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/"><BottomNavigationAction className={classes.fontTitle} label="Order room" icon={<BusinessIcon />} /></Link>
      <Link to="/About"><BottomNavigationAction className={classes.fontTitle} label="Home" icon={<HomeIcon />} /></Link>
      <Link to="/Contact"><BottomNavigationAction className={classes.fontTitle} label="History" icon={<HistoryIcon />} /></Link>
    </BottomNavigation>
  );
}

export default Navigation;