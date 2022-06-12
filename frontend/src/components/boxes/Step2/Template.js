import * as React from "react";
import { Grid } from "@material-ui/core"; // material-ui reference
import BoxCard from "./Components/BoxCard";
import CategoriesBar from "./Components/CategoriesBar";
import CardList from "./Components/CardList";
import ProductDetail from "./Components/ProductDetail";
import PopupDetail from "./Components/PopupDetail";
import EditBox from "./Components/EditBox";
const Template = (props) => {
  return (
    <div className="relative">
      {props.popupDetail && (
        <PopupDetail 
          item={props.currentProduct}
          changePage={props.changePage}
          removeGoodies={props.removeGoodies}
          addGoodies={props.addGoodies}
          GetSize={props.GetSize}
          toggleDetail={props.toggleDetail}
        />
      )}
      {props.editBox && (
        <EditBox 
          toggleEdit={props.toggleEdit}
        />
      )}
      {props.currentPage === 0 && (
        <div className={props.popupDetail || props.editBox || props.saveBox?"d-flex flex-wrap justify-content-center top-48 blur-background":"d-flex flex-wrap justify-content-center top-48"}  style={{width:props.GetSize().width - 335}}>
          <div className="d-flex flex-wrap justify-content-start w-100">
            <Grid container >
              <Grid item xs={8}>
                <div className="box-padding-grid">
                  <div className="d-flex flex-wrap justify-content-start overview-title">
                    Step 2: Pick your goodies
                  </div>
                  <div className="overview-box-description">
                    Here at the boxbee marketplace, we’re always partnering with
                    local businesses […]
                  </div>
                  <CategoriesBar />
                  <CardList
                    chooseProduct={props.chooseProduct}
                    addGoodies={props.addGoodies}
                    toggleDetail={props.toggleDetail}
                  />
                </div>
              </Grid>
              <Grid item xs={4}>
                <BoxCard
                  items={props.items}
                  removeGoodies={props.removeGoodies}
                  addGoodies={props.addGoodies}
                  toggleEdit={props.toggleEdit}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      )}
      {props.currentPage === 1 && (
        <ProductDetail
          item={props.currentProduct}
          items={props.items}
          changePage={props.changePage}
          removeGoodies={props.removeGoodies}
          addGoodies={props.addGoodies}
          GetSize={props.GetSize}
        />
      )}
    </div>
  );
};
export default Template;
