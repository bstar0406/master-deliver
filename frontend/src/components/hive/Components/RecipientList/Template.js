import * as React from "react";
import { Button } from "@material-ui/core"; // material-ui reference
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from "./Style";
import CardList from "./Components/CardList";

const Template = (props) => {
  const classes = useStyles();
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="d-flex flex-wrap justify-content-between w-100">
        <div>
          <div className="d-flex flex-wrap justify-content-start overview-title">
            Recipient Lists
            </div>
          <div className="overview-subtitle">
            Subhead for what this tab is about
            </div>
        </div>
        <div>
          <Button
            variant="contained"
            className={classes.startButton}
            color="primary"
            onClick={()=>props.setPage(1)}
          >
            <div className="d-flex flex-wrap justify-content-center">
              <AddIcon />
              <div className="side-title font-14"> ADD A NEW LIST</div>
            </div>
          </Button>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between w-100">
        <CardList />
      </div>
    </div>
  );
};
export default Template;
