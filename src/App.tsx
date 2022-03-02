import React from 'react';
import CardMain from './components/molecules/card/CardMain';
import bookImg from "../src/components/atoms/assets/bookImage.png";
import { Card, Grid } from "@mui/material";
import useStyle from './theme';


function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <Grid item xs={16}>
        <Card className={classes.mainCard}>
          <Grid container direction="column">
            <Grid item>
            <CardMain image = {bookImg}/>
            </Grid>
          </Grid>
        </Card>
      </Grid>
     
    </div>
  );
}

export default App;
