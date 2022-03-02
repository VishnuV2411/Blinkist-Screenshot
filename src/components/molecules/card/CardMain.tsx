import { CardMedia, Grid } from "@mui/material";
import React from "react";
import AuthorName from "../../atoms/author/AuthorName";
import BookTitle from "../../atoms/booktitle/BookTitle";
import ReadTime from "../time-left/TimeLeft";
import useStyle from "../../../theme";


interface Data {
    image: string;
}

const CardMain = (props: Data) => {
    const classes = useStyle();
    return (
        <>
            <Grid> 
                <CardMedia 
                    component="img"
                    height="292px"
                    width="294.1px"
                    image={props.image}
                    alt="Book"
                />
            </Grid>
            <Grid item>
                <BookTitle />
            </Grid>

            <Grid item className={classes.cardGridOne}>
                <AuthorName />
            </Grid>

            <Grid item className={classes.cardGridTwo}>
                <ReadTime />
            </Grid>
        </>
    );
};

export default CardMain;