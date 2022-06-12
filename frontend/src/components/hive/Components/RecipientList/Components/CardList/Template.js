import * as React from "react";
import CardListItem from "../CardListItem";
import { Grid } from "@material-ui/core";

const Template = (props) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-start w-100 mt-5">
        <Grid container spacing={5}>
          {props.items.map((item, index) => (
            <Grid item xs={4} key={index}>
              <CardListItem item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export default Template;
