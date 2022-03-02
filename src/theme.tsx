import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyle = makeStyles({

    bookTitle: {
        fonstStyle: "normal",
        fontSize: "18px",
        fontWeight: 700,
        marginLeft: "16px",
        marginTop: "23px",
        color: "#03314B",
    },

    authorNameTypography: {
        display: "flex",
        fontStyle: "normal",
        fontSize: "16px",
        fontWeight: 500,
        color: "#6D787E",
    },

    cardGridOne: {
        margin: "16px 0px 0px 16px",
    },

    cardGridTwo: {
        marginLeft: "17.67px",
        marginTop: "17.67px",
    },

    timeLeftTypography: {
        display: "flex",
        alignItems: "center",
        fontStyle: "normal",
        fontSize: "14px",
        fontWeight: 400,
        color: "#6D787E",
    },

    mainCard: {
        position: "relative",
        maxWidth: "284px",
        maxHeight: "490px",
        borderRadius: "8px",
        borderStyle: "1px solid #E1ECFC",
        boxSizing: "border-box",
    },

});

export const theme = createTheme({
    palette: {
        primary: {
            main: "#22C870",
        },
    },
});

export default useStyle;