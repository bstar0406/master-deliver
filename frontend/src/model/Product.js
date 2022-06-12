import { v4 as uuidv4 } from "uuid";

export default class Product {
  static product = (
    id,
    images,
    mainImageURL,
    description,
    name,
    category,
    msrp,
    length,
    width,
    height,
    weight,
    shippingAddress,
    lowerBoundary,
    upperBoundary,
    price,
    markup,
    status,
    createdDate,
    isNewProduct
  ) => {
    const product = {
      images: images,
      mainImageURL: mainImageURL,
      description: description,
      name: name,
      category: category,
      msrp: msrp,
      length: length,
      width: width,
      height: height,
      weight: weight,
      shippingAddress: shippingAddress,
      lowerBoundaryQuantity: lowerBoundary,
      upperBoundaryQuantity: upperBoundary,
      price: price,
      markup: markup,
      status: status,
    };

    if (id) {
      product.id = id;
    } else {
      product.id = uuidv4();
    }

    if (isNewProduct) {
      const currentDate = new Date();
      product.createdDate = currentDate.getTime();
    } else {
      product.createdDate = createdDate;
    }

    return product;
  };

  static pendingProduct = (
    id,
    images,
    mainImageURL,
    description,
    name,
    category,
    msrp,
    length,
    width,
    height,
    weight,
    shippingAddress,
    lowerBoundary,
    upperBoundary,
    price,
    markup
  ) => {
    return this.product(
      id,
      images,
      mainImageURL,
      description,
      name,
      category,
      msrp,
      length,
      width,
      height,
      weight,
      shippingAddress,
      lowerBoundary,
      upperBoundary,
      price,
      markup,
      "pending",
      null,
      true
    );
  };

  static pendingProductFromState = (productState, images) => {
    const mainImageURL = images.find((image) => image.main === true).url;

    return this.pendingProduct(
      productState.id,
      images,
      mainImageURL,
      productState.description,
      productState.name,
      productState.category,
      productState.msrp,
      productState.length,
      productState.width,
      productState.height,
      productState.weight,
      productState.shippingAddress,
      productState.lowerBoundary,
      productState.upperBoundary,
      productState.price,
      productState.markup
    );
  };

  static validatedProduct = (
    productId,
    images,
    mainImageURL,
    description,
    name,
    category,
    msrp,
    length,
    width,
    height,
    weight,
    shippingAddress,
    lowerBoundary,
    upperBoundary,
    price,
    markup,
    createdDate
  ) => {
    return this.product(
      productId,
      images,
      mainImageURL,
      description,
      name,
      category,
      msrp,
      length,
      width,
      height,
      weight,
      shippingAddress,
      lowerBoundary,
      upperBoundary,
      price,
      markup,
      "validated",
      createdDate,
      false
    );
  };

  static validatedProductFromState = (productState, images) => {
    const mainImageURL = images.find((image) => image.main === true).url;

    return this.validatedProduct(
      productState.id,
      images,
      mainImageURL,
      productState.description,
      productState.name,
      productState.category,
      productState.msrp,
      productState.length,
      productState.width,
      productState.height,
      productState.weight,
      productState.shippingAddress,
      productState.lowerBoundary,
      productState.upperBoundary,
      productState.price,
      productState.markup,
      productState.createdDate
    );
  };

  static validatedProductFromProduct = (product) => {
    product.status = "validated";
    return product;
  };

  static pendingProductFromProduct = (product) => {
    product.status = "pending";
    return product;
  };
}
