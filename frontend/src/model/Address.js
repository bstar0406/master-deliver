export default class Address {
  // This method returns a formatted address for UI display purposes based on an Address object.
  static getFormattedAddress = (address) => {
    if (address.status === "failed") {
      return "Invalid address";
    } else {
      return address.fullAddress;
    }
  };

  static addressFromGoogleAddress = (googleAddress) => {
    let cleanedAddressObject = {};
    const addressComponents = googleAddress.address_components;

    // TODO: YB: do we want to send this to PostGrid to validate the address again?
    addressComponents.forEach((element) => {
      const types = element.types;
      types.forEach((type) => {
        if (type === "street_number") {
          cleanedAddressObject["streetNumber"] = element.long_name;
        } else if (type === "route") {
          cleanedAddressObject["street"] = element.long_name;
        } else if (type === "locality") {
          cleanedAddressObject["city"] = element.long_name;
        } else if (type === "administrative_area_level_1") {
          cleanedAddressObject["state"] = element.short_name;
        } else if (type === "postal_code") {
          cleanedAddressObject["postalCode"] = element.long_name;
        } else if (type === "country") {
          cleanedAddressObject["country"] = element.long_name;
        }
      });
    });

    cleanedAddressObject["fullStreet"] =
      cleanedAddressObject["streetNumber"] +
      " " +
      cleanedAddressObject["street"];

    cleanedAddressObject["status"] = "verified";

    cleanedAddressObject["fullAddress"] =
      cleanedAddressObject["fullStreet"] +
      ", " +
      cleanedAddressObject["city"] +
      " " +
      cleanedAddressObject["postalCode"] +
      cleanedAddressObject["state"] +
      ", " +
      cleanedAddressObject["country"];

    return cleanedAddressObject;
  };

  static isValid = (address) => {
    return address.status === "verified";
  };

  static isCorrected = (address) => {
    return address.status === "corrected";
  };

  static isInvalid = (address) => {
    return address.status === "failed";
  };
}
