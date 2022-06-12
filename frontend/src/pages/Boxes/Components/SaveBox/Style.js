import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    typeButton: {
        height: "56px",
        width: "100%"
    },
    startButton: {
        color: "#384182",
        boxShadow: "none",
        fontSize: "14px",
        borderRadius: "10px",
        width: "273px",
        height: "56px",
        marginLeft: "auto !important",
        "&:hover": {
            color: "black",
        },
    },
    endButton: {
        backgroundColor: "#FDDE81",
        color: "black",
        boxShadow: "none",
        fontSize: "12px",
        borderRadius: "10px",
        width: "273px",
        height: "56px",
        marginLeft: "auto !important",
        "&:hover": {
            backgroundColor: "#FDDE81",
            color: "black",
        },
    },
});

export { useStyles };
