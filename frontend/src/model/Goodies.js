export default class GoodieItem {
  //This method creates an item object from the data that is mapped over from the firestore items. This then gets passed into a dispatch to addToCart
  static addItemObjectCreator = (vendor, product) => {
    let itemObj = {
      vendorId: vendor.id,
      productInfo: product,
      productPrice: product.price,
      quantity: 1,
    };

    return {
      itemObj,
    };
  };
  // This method removes an item object from the cart that matches the current one that the remove button was clicked on
  static removeItemFromCartObject = (item) => {
    let itemObj = {
      vendorId: item.vendorId,
      productId: item.productInfo.id,
      totalPriceReduction: item.productInfo.price,
    };
    return {
      itemObj,
    };
  };
}
