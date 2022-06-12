import * as React from "react";
import logo from "../../assets/images/logo.svg";
import profile from "../../assets/images/profile.png";
import { AppBar, Toolbar, Fab } from "@material-ui/core";
import { useStyles } from "./Style";
const Template = () => {
  const classes = useStyles();
  return (
    <>
      {/* Set the Navbar */}
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {/* logo button */}
          <img src={logo} className={classes.logo} alt="logo" />
          {/* spcacer */}
          <div className={classes.spacer}></div>
          {/* profile section */}
          <div className={classes.profileText}>MIKE</div>
          <Fab color="primary" aria-label="add" className={classes.profile}>
            <img src={profile} className={classes.imgProfile} alt="logo" />
          </Fab>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Template;
