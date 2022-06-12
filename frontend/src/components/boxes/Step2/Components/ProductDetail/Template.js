import * as React from "react";
import { Grid, Button } from "@material-ui/core"; // material-ui reference
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import BoxCard from "../BoxCard";
import ImageCarousel from "../ImageCarousel";
import ColorPicker from "../ColorPicker";
import Quantity from "../Quantity";
import { useStyles } from "./Style";
const Template = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center mt-3" style={{width:props.GetSize().width - 335}}>
        <div className="mt-4 d-flex flex-wrap justify-content-start w-100">
          <Grid container spacing={3} className="w-100">
            <Grid item xs={8}>
              <div className="back-text" onClick={() => props.changePage(0)}>
                <i className="fas fa-arrow-left mr-2"></i>
                BACK TO MARKETPLACE
              </div>
              <Grid container spacing={3} className="w-100 mt-4">
                <Grid item xs={4}>
                  <ImageCarousel item={props.item} />
                </Grid>
                <Grid item xs={8}>
                  <div className="mask-box-content">{props.item.category}</div>
                  <div className="goodies-title">{props.item.name}</div>
                  <div className="mask-box-number mt-2 mb-2">
                    ${parseInt(props.item.price).toFixed(2).toString()} <span className="product-price-sub">/unit</span>
                  </div>
                  <div className="mask-box-content">
                  {props.item.description}
                  </div>
                  <div className="overview-box-item-link mt-2" onClick={()=>{props.changeDetail()}}>
                    Details {props.detailState &&<KeyboardArrowUpIcon />}{!props.detailState && <KeyboardArrowDownIcon />}
                  </div>
                  {props.detailState &&<div className="overview-box-small-text mt-2">
                    • Business location: Montreal, QC <br/>
                    • Product dimensions: [?”]W × [?”]H × [?”]D <br/>
                    • Item weight: [?”]g <br/>
                  </div>}
                  <div className="span-line"></div>
                  <div className="product-type mb-2">Candle type</div>
                  <div>
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
                  <ColorPicker />
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
            </Grid>
            <Grid item xs={4}>
              <BoxCard
                nextStep={props.nextStep}
                items={props.items}
                changePage={props.changePage}
                removeGoodies={props.removeGoodies}
                addGoodies={props.addGoodies}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
export default Template;
