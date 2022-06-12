import React from "react";
import { Tab } from "../../styles_folder/adminstyles/AdminNavbarStyles";
import { themeVars } from "../GlobalStyles";
import {
  ProductSubnav,
  PendingApprovedWrapper,
  CardWrapper,
  CardImage,
  SpaceBetweenWrapper,
  PendingItemsWrapper,
} from "../../styles_folder/adminstyles/AdminProductsPageStyles";
import { useAllVendors } from "../../hooks/vendor-hooks";
import {
  validateProduct,
  pendingProduct,
} from "../../controller/ProductController";
import { useFirestore } from "reactfire";
import { useHistory, useLocation } from "react-router-dom";

const AdminProductsView = () => {
  const firestore = useFirestore();
  const history = useHistory();
  const { pathname } = useLocation();


  // call from vendor hook to get all vendor documents in collection
  const { data } = useAllVendors();
  // filtered down array to only vendors with a non empty product array
  const filteredVendorProducts = data.data.filter((vendor) => {
    return vendor.products && vendor.products.length > 0;
  });

  const validateProductIdForVendorId = (productId, vendorId) => {
    validateProduct(productId, vendorId, firestore);
  };

  const pendingProductIdForVendorId = (productId, vendorId) => {
    pendingProduct(productId, vendorId, firestore);
  };

  const handleViewClick = (productId, vendorId) => {
    history.push(`/admin/${vendorId}/${productId}`);
  };

  const handlePendingClick = () => {
    history.push("/admin/pending");
  };

  const handleApprovedClick = () => {
    history.push("/admin/approved");
  };

  return (
    <>
      {pathname === "/admin/pending" ? (
        <div>
          {/* pending state */}
          <ProductSubnav>
            <PendingApprovedWrapper>
              <Tab
                style={{ backgroundColor: themeVars.boxbeeYellow }}
                onClick={handlePendingClick}
              >
                Pending
              </Tab>
              <Tab onClick={handleApprovedClick}>Approved</Tab>
            </PendingApprovedWrapper>
            <h3>Products</h3>
          </ProductSubnav>
          <PendingItemsWrapper>
            {filteredVendorProducts.map((vendor) => {
              const vendorId = vendor.vendorId;
              const vendorName = vendor.name;
              return vendor.products.map((item, i) => {
                if (item.status === "pending") {
                  return (
                    <CardWrapper key={i}>
                      <CardImage src={item.mainImageURL} />
                      <SpaceBetweenWrapper>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                      </SpaceBetweenWrapper>
                      <p>{item.category}</p>
                      <p>{vendorName}</p>
                      <SpaceBetweenWrapper>
                        <p onClick={() => handleViewClick(item.id, vendorId)}>
                          View
                        </p>
                        <p
                          style={{ color: "green" }}
                          onClick={() =>
                            validateProductIdForVendorId(item.id, vendorId)
                          }
                        >
                          Approve
                        </p>
                      </SpaceBetweenWrapper>
                    </CardWrapper>
                  );
                } else return null;
              });
            })}
          </PendingItemsWrapper>
        </div>
      ) : (
        // approved state
        <div>
          <ProductSubnav>
            <PendingApprovedWrapper>
              <Tab onClick={handlePendingClick}>Pending</Tab>
              <Tab
                style={{ backgroundColor: themeVars.boxbeeYellow }}
                onClick={handleApprovedClick}
              >
                Approved
              </Tab>
            </PendingApprovedWrapper>
            <h3>Products</h3>
          </ProductSubnav>
          <PendingItemsWrapper>
            {filteredVendorProducts.map((vendor) => {
              const vendorId = vendor.vendorId;
              const vendorName = vendor.name;
              return vendor.products.map((item, i) => {
                if (item.status === "validated") {
                  return (
                    <CardWrapper key={i}>
                      <CardImage src={item.mainImageURL} />
                      <SpaceBetweenWrapper>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                      </SpaceBetweenWrapper>
                      <p>{item.category}</p>
                      <p>{vendorName}</p>
                      <SpaceBetweenWrapper>
                        <p onClick={() => handleViewClick(item.id, vendorId)}>
                          View
                        </p>
                        <p
                          style={{ color: "red" }}
                          onClick={() =>
                            pendingProductIdForVendorId(item.id, vendorId)
                          }
                        >
                          Remove
                        </p>
                      </SpaceBetweenWrapper>
                    </CardWrapper>
                  );
                } else return null;
              });
            })}
          </PendingItemsWrapper>
        </div>
      )}
    </>
  );
};

export default AdminProductsView;
