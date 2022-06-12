const initialState = {
  id: null,
  images: null,
  mainImageURL: null,
  description: null,
  name: null,
  category: null,
  msrp: null,
  length: null,
  width: null,
  height: null,
  weight: null,
  shippingAddress: null,
  lowerBoundary: null,
  upperBoundary: null,
  price: null,
  createdDate: null,
  status: null,
  markup: null,
};

export default function newProductListingReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCT_ID": {
      return {
        ...state,
        id: action.payload,
      };
    }
    case "SET_PRODUCT_IMAGES": {
      return {
        ...state,
        images: action.payload,
      };
    }
    case "SET_MAIN_IMAGE_URL": {
      return {
        ...state,
        mainImageURL: action.payload,
      };
    }

    case "SET_PRODUCT_DESCRIPTION": {
      return {
        ...state,
        description: action.payload,
      };
    }
    case "SET_PRODUCT_NAME": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "SET_PRODUCT_CATEGORY": {
      return {
        ...state,
        category: action.payload,
      };
    }
    case "SET_PRODUCT_MSRP": {
      return {
        ...state,
        msrp: action.payload,
      };
    }
    case "SET_PRODUCT_LENGTH": {
      return {
        ...state,
        length: action.payload,
      };
    }
    case "SET_PRODUCT_WIDTH": {
      return {
        ...state,
        width: action.payload,
      };
    }
    case "SET_PRODUCT_HEIGHT": {
      return {
        ...state,
        height: action.payload,
      };
    }
    case "SET_PRODUCT_WEIGHT": {
      return {
        ...state,
        weight: action.payload,
      };
    }
    case "SET_PRODUCT_SHIP_FROM_ADDRESS": {
      return {
        ...state,
        shippingAddress: action.payload,
      };
    }
    case "SET_PRODUCT_LOWER_BOUNDARY_QUANTITY": {
      return {
        ...state,
        lowerBoundary: action.payload,
      };
    }
    case "SET_PRODUCT_UPPER_BOUNDARY_QUANTITY": {
      return {
        ...state,
        upperBoundary: action.payload,
      };
    }
    case "SET_PRODUCT_COST_TO_BOX_BEE": {
      return {
        ...state,
        price: action.payload,
      };
    }
    case "SET_PRODUCT_CREATED_DATE": {
      return {
        ...state,
        createdDate: action.payload,
      };
    }
    case "SET_PRODUCT_STATUS": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "SET_MARKUP_PERCENTAGE": {
      return {
        ...state,
        markup: action.payload,
      };
    }
    default:
      return state;
  }
}
