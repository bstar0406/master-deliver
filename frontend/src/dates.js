import { differenceInDays, format } from "date-fns";

export default class Dates {
  static dates = [
    { id: 1, date: "May/10/2021" },
    { id: 2, date: "June/10/2021" },
    { id: 3, date: "July/10/2021" },
    { id: 4, date: "August/10/2021" },
  ];

  // Returns the full dateObject for the given id, based on the dates array above
  static getDateObjectForId = (id) => {
    const date = this.dates.find((dateObject) => {
      return dateObject.id === id;
    });

    return date;
  };

  static todayDateFormatted = () => {
    const todayDateFormatted = format(this.currentDate(), "MMMM/dd/yyyy");
    return todayDateFormatted;
  };

  static currentDate = () => {
    return new Date();
  };

  static nextShipmentDate = () => {
    const todayDate = this.currentDate();
    const nextShipmentDate = Dates.dates.find((dateObject) => {
      return differenceInDays(new Date(dateObject.date), todayDate) > 30;
    });

    return nextShipmentDate;
  };
}
