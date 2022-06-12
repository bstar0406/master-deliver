import Product from "../model/Product";
import { uploadImageFromBlob } from "../controller/ImageController";

export const submitProductForApproval = async (
  productState,
  vendorDocument
) => {
  // TODO: YB: images are not really well handled yet, same in updateProduct
  // we should obviously never upload the same image twice, etc. etc.
  // all the real logic still has to be handled with regards to deleting images too

  const image = await uploadImageFromBlob(productState.images[0]);
  const imageArray = [image];

  const product = Product.pendingProductFromState(productState, imageArray);

  vendorDocument.get().then((doc) => {
    if (doc.exists) {
      const vendorData = doc.data();
      var products = vendorData.products;
      if (products) {
        products.push(product);
      } else {
        products = [product];
      }
      vendorDocument.update({ products: products });
    }
  });
  return product.id;
};

export const updateProduct = async (productState, vendorDocument) => {
  const image = await uploadImageFromBlob(productState.images[0]);
  const imageArray = [image];
  const product = Product.validatedProductFromState(productState, imageArray);

  vendorDocument.get().then((doc) => {
    if (doc.exists) {
      const vendorData = doc.data();
      var products = vendorData.products;
      console.log(products);
      if (products) {
        const productToUpdate = products.find(
          (product) => product.id === productState.id
        );
        console.log(productToUpdate);
        const index = products.indexOf(productToUpdate);
        products[index] = product;
        vendorDocument.update({ products: products });
      }
    }
  });
};

// Retrieves the product from the given vendor, and sets it to validated.
export const validateProduct = async (productId, vendorId, firestore) => {
  const vendorDocument = firestore.collection("vendors").doc(vendorId);
  vendorDocument.get().then((doc) => {
    if (doc.exists) {
      const vendorData = doc.data();
      var products = vendorData.products;
      if (products) {
        const productToUpdate = products.find(
          (product) => product.id === productId
        );
        const index = products.indexOf(productToUpdate);
        const validatedProduct =
          Product.validatedProductFromProduct(productToUpdate);
        products[index] = validatedProduct;
        vendorDocument.update({ products: products });
      }
    }
  });
};

export const pendingProduct = async (productId, vendorId, firestore) => {
  const vendorDocument = firestore.collection("vendors").doc(vendorId);
  vendorDocument.get().then((doc) => {
    if (doc.exists) {
      const vendorData = doc.data();
      var products = vendorData.products;
      if (products) {
        const productToUpdate = products.find(
          (product) => product.id === productId
        );
        const index = products.indexOf(productToUpdate);
        const validatedProduct =
          Product.pendingProductFromProduct(productToUpdate);
        products[index] = validatedProduct;
        vendorDocument.update({ products: products });
      }
    }
  });
};

// Couldnt get this one to work so ended up having to write it inside the file, let me know if you can figure it out?

export const getProduct = async (productId, vendorId, firestore) => {
  const vendorDocument = await firestore.collection("vendors").doc(vendorId);

  vendorDocument.get().then((doc) => {
    if (doc.exists) {
      const vendorData = doc.data();
      var products = vendorData.products;
      if (products) {
        const productDetails = products.find(
          (product) => product.id === productId
        );
        console.log(productDetails);
        return { productDetails };
      }
    }
  });
};
