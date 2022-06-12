// BOX CONFIG PAGE BELOW

// BUDGET CARD

// changes the budget input value
export const boxBudgetChange = (value) => ({
  type: "INPUT_BOX_CHANGE",
  payload: value,
});

// changes to budget total input value
export const boxTotalChange = (value) => ({
  type: "INPUT_TOTAL_CHANGE",
  payload: value,
});

export const updateBudgetOnChange = (value) => ({
  type: "UPDATE_BUDGET_ON_CART_CHANGE",
  payload: value,
});

// RECIPIENTS CARD

export const setRecipientLists = (value) => ({
  type: "SET_RECIPIENT_LIST",
  payload: value,
});

// adds new list to state

export const recipientSelectList = (value) => ({
  type: "SELECTED_LIST",
  payload: value,
});

//  sets the ship date inside the box config page bottom left corner
export const setShipDate = (value) => ({
  type: "SET_SHIP_DATE",
  payload: value,
});
//  sets the UUID for the box config bottom left
export const setBoxId = (value) => ({
  type: "SET_BOX_ID",
  payload: value,
});

export const openDatePicker = (value) => ({
  type: "TOGGLE_DATE_PICKER",
  payload: value,
});

// GOODIES PAGE

//  adds items to the cart in the right hand side of the goodies page
export const addToCart = (value) => ({
  type: "ADD_ITEM_TO_CART",
  payload: value,
});

// removes items out of the cart
export const removeFromCart = (value) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: value,
});

// set a whole new set of cart items
export const setCartItems = (items) => ({
  type: "SET_CART_ITEMS",
  payload: items,
});

// set the cart total
export const setCartTotal = (total) => ({
  type: "SET_CART_TOTAL",
  payload: total,
});

// all the actions for the add new product listing inside the vendor side

export const setProductId = (value) => ({
  type: "SET_PRODUCT_ID",
  payload: value,
});

export const setProductImages = (value) => ({
  type: "SET_PRODUCT_IMAGES",
  payload: value,
});

export const setProductMainImageURL = (value) => ({
  type: "SET_MAIN_IMAGE_URL",
  payload: value,
});

export const setProductDescription = (value) => ({
  type: "SET_PRODUCT_DESCRIPTION",
  payload: value,
});

export const setProductName = (value) => ({
  type: "SET_PRODUCT_NAME",
  payload: value,
});

export const setProductCategory = (value) => ({
  type: "SET_PRODUCT_CATEGORY",
  payload: value,
});

export const setProductMSRP = (value) => ({
  type: "SET_PRODUCT_MSRP",
  payload: value,
});

export const setProductLength = (value) => ({
  type: "SET_PRODUCT_LENGTH",
  payload: value,
});

export const setProductWidth = (value) => ({
  type: "SET_PRODUCT_WIDTH",
  payload: value,
});

export const setProductHeight = (value) => ({
  type: "SET_PRODUCT_HEIGHT",
  payload: value,
});

export const setProductWeight = (value) => ({
  type: "SET_PRODUCT_WEIGHT",
  payload: value,
});

export const setProductShipFromAddress = (value) => ({
  type: "SET_PRODUCT_SHIP_FROM_ADDRESS",
  payload: value,
});

export const setProductLowerBoundaryQuantity = (value) => ({
  type: "SET_PRODUCT_LOWER_BOUNDARY_QUANTITY",
  payload: value,
});

export const setProductUpperBoundaryQuantity = (value) => ({
  type: "SET_PRODUCT_UPPER_BOUNDARY_QUANTITY",
  payload: value,
});

export const setProductCostToBoxBee = (value) => ({
  type: "SET_PRODUCT_COST_TO_BOX_BEE",
  payload: value,
});

export const setProductCreatedDate = (value) => ({
  type: "SET_PRODUCT_CREATED_DATE",
  payload: value,
});

export const setProductStatus = (value) => ({
  type: "SET_PRODUCT_STATUS",
  payload: value,
});

export const setMarkupPercentage = (value) => ({
  type: "SET_MARKUP_PERCENTAGE",
  payload: value,
});

// set the box name
export const setBoxName = (name) => ({
  type: "BOX_INFO_SET_NAME",
  payload: name,
});

// set the last updated timestamp of the box
export const setBoxLastUpdatedTimestamp = (timestamp) => ({
  type: "SET_LAST_UPDATED_TIMESTAMP",
  payload: timestamp,
});

// controls the mini image pop up reducer in vendor side

export const toggleMiniImagePopUp = (image) => ({
  type: "TOGGLE_MINI_POP_UP",
  payload: image,
});
