import { useFirestore, useUser, useFirestoreCollectionData } from "reactfire";

export const useCurrentVendorDocument = () => {
  const { data: user } = useUser();
  const currentVendorDocument = useFirestore()
    .collection("vendors")
    .doc(user.uid);

  return { currentVendorDocument };
};

export const useVendorDocumentWithId = (vendorId) => {
  const VendorDocumentWithId = useFirestore()
    .collection("vendors")
    .doc(vendorId);

  return { VendorDocumentWithId };
};

export const useAllVendors = () => {
  const db = useFirestore();
  const vendors = db.collection("vendors");
  const data = useFirestoreCollectionData(vendors, {
    idField: "vendorId",
  });
  return { data };
};

export const selectImage = (event) => {
  if (event.target.files.length > 1) {
    const fileArray = Array.from(event.target.files).map((file) => {
      return URL.createObjectURL(file);
    });
    return fileArray;
  } else if (event.target.files.length === 1) {
    const blob = [URL.createObjectURL(event.target.files[0])];
    return blob;
  }
};

export const useAllProducts = () => {
  const db = useFirestore();
  const vendorsCollection = db.collection("vendors");
  const vendorsDocs = useFirestoreCollectionData(vendorsCollection, {
    idField: "id",
  });
  return vendorsDocs.data
    .filter((vendor) => vendor.products)
    .flatMap((vendor) => {
      return vendor.products;
    });
};
