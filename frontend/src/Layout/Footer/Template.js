import * as React from "react";
import { useStyles } from "./Style";
const Template = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerBar}>
      <span>© Copyright 2021</span>
    </div>
  );
};
export default Template;
