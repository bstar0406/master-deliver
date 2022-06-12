import * as React from "react";
import { Grid, Button } from "@material-ui/core"; // material-ui reference
import Quantity from "../Quantity";
import { useStyles } from "./Style";
import CloseIcon from '@material-ui/icons/Close';
const Template = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center mt-3 w-100 white-back" style={{ width: props.GetSize().width - 335, position: 'absolute' }}>
        <Grid container >
          <Grid item xs={8} className="box-padding-grid">
            <div className="popup-detail">
              <div className="d-flex flex-wrap justify-content-between align-content-end w-100 mb-1">
                <div className="overview-box-small-text mb-1 d-flex flex-wrap justify-content-between align-content-end">{props.item.category}</div>
                <CloseIcon className="box-close" onClick={()=>props.toggleDetail(props.item)}/>
              </div>
              <div className="overview-box-title">{props.item.name}</div>
              <Grid container >
              <Grid item xs={4} className="w-100">
                <div className="overview-subtitle mt-2 mb-2">
                  ${parseInt(props.item.price).toFixed(2).toString()} <span className="product-price-sub">/unit</span>
                </div>
                <img src={props.item.images[0].url} alt="popup" className="popup-img w-90" />
              </Grid>
              <Grid item xs={8}>
                <div className="product-type mb-2">Candle type</div>
                <div className="mb-3">
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className="{classes.typeButton} mr-2"
                  >
                    <span className="button-type">1-wick</span>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    className="{classes.typeButton} mr-2"
                  >
                    <span className="button-type">3-wick</span>
                  </Button>
                </div>
                <div className="product-type mb-2">Scent</div>
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    className="{classes.typeButton} mr-2"
                  >
                    <span className="button-type">cedarwood</span>
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    className="{classes.typeButton} mr-2"
                  >
                    <span className="button-type">fresh pine</span>
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    className="{classes.typeButton} mr-2"
                  >
                    <span className="button-type">eucalyptus</span>
                  </Button>
                </div>
                <Quantity />
                <Button
                  variant="contained"
                  className={classes.typeButton}
                  onClick={() =>
                    props.addGoodies({
                      ...props.item,
                      id: props.item.id + "_" + Math.random(),
                    })
                  }
                >
                  <i className="fas fa-plus dust mr-2"></i>
                  <span className="cart-button">ADD TO CART</span>
                </Button>
              </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </>
  );
};
export default Template;
