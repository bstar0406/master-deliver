import * as React from "react";
import { Grid, Button } from "@material-ui/core"; // material-ui reference
const Template = (props) => {
  return (
    <>
      <img src={props.item.images[props.currentImage].url} alt="bigImage" className="big-image w-100" />
      <Grid container spacing={1} className="w-100 mt-2">
        {props.item.images.map((item, index) => (
          <Grid item xs={4} className="d-flex flex-wrap justify-content-center" key={index}>
            <Button onClick={()=>props.chooseImage(index)}>
              <img
                src={item.url}
                alt="bigImage"
                className="big-image w-100"
              />
            </Button>
            {props.currentImage===index&&<div className="yellow-circle"></div>}
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Template;
