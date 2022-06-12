import * as React from "react";
import CardListItem from "../CardListItem";
import SearchIcon from '@material-ui/icons/Search';
import { TextField, InputAdornment } from "@material-ui/core"; // material-ui reference
import { useStyles } from "./Style";

const Template = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className="mt-4 d-flex flex-wrap justify-content-between align-content-center">
        <div>
          <span className="goodies-title">All goodies</span>
          <span className="mask-edit ml-2">
            <SearchIcon />
          </span>
        </div>
        <div className="d-flex flex-wrap align-content-center mask-edit mr-2">
          {!props.searchState && <div className="d-flex flex-wrap align-content-center"> <SearchIcon className="search-icon" onClick={()=>props.changeSearch()}/> </div>}
          {props.searchState &&<TextField
            label="Search"
            id="outlined-start-adornment"
            className={classes.searchText}
            InputProps={{
              shrink: true,
              endAdornment: <InputAdornment position="start" className={classes.colorDust}><SearchIcon /></InputAdornment>,
            }}
            variant="outlined"
            onKeyDown={props.keyHandler}
          />}
        </div>
      </div>
      <div className="mt-4 scroll-step2">
        {props.items.map((item, index) => (
          <CardListItem
            item={item}
            key={index}
            order={index}
            chooseProduct={props.chooseProduct}
            toggleDetail={props.toggleDetail}
          />
        ))}
      </div>
    </>
  );
};
export default Template;
