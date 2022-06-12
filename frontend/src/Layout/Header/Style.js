import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#f2f5fa",
    color: "black",
    height: "90px",
    display: "flex",
    justifyContent: "center",
    zIndex: "9999 !important",
    padding: "0px 40px",
    boxShadow: "none",
    position: "fixed",
    top:"0px",
  },
  toolBar: {
    display: "flex",
    width: "100%",
    flexFlow: "row",
    zIndex: "9999",
  },
  spacer: {
    flex: "1 1 auto",
  },
  profile: {
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover": {
      background: "transparent",
    },
    width: "52px",
    height: "52px",
  },
  logo: {
    width: "300px",
    height:"85px"
  },
  imgProfile: {
    width: "90%",
  },
  profileText: {
    fontSize: "14px",
    fontWeight: "900",
    fontFamily: "Avenir-Black, Helvetica, Arial, sans-serif",
    letterSpacing: "1.25px",
    color: "rgba(0, 0, 0, 0.87)",
    marginRight: "10px",
  },
});

export { useStyles };
